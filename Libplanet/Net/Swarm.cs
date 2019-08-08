using System;
using System.Collections.Async;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using AsyncIO;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Libplanet.Store;
using Libplanet.Stun;
using Libplanet.Tx;
using NetMQ;
using NetMQ.Sockets;
using Nito.AsyncEx;
using Serilog;
using Serilog.Events;

namespace Libplanet.Net
{
    public class Swarm<T>
        where T : IAction, new()
    {
        private static readonly TimeSpan TurnAllocationLifetime =
            TimeSpan.FromSeconds(777);

        // TURN Permission lifetime was defined in RFC 5766
        // see also https://tools.ietf.org/html/rfc5766#section-8
        private static readonly TimeSpan TurnPermissionLifetime =
            TimeSpan.FromMinutes(5);

        private static readonly TimeSpan BlockHashRecvTimeout = TimeSpan.FromSeconds(3);
        private static readonly TimeSpan BlockRecvTimeout = TimeSpan.FromSeconds(15);
        private static readonly TimeSpan TxRecvTimeout = TimeSpan.FromSeconds(3);

        private static readonly int MaxDealerCount = 10;

        private readonly BlockChain<T> _blockChain;
        private readonly PrivateKey _privateKey;
        private readonly RouterSocket _router;
        private readonly IDictionary<Peer, (DateTimeOffset, DealerSocket)> _dealers;
        private readonly IDictionary<Address, long?> _tips;
        private readonly int _appProtocolVersion;

        private readonly TimeSpan _dialTimeout;
        private readonly AsyncLock _runningMutex;
        private readonly AsyncLock _blockSyncMutex;
        private readonly string _host;
        private readonly IList<IceServer> _iceServers;
        private readonly TimeSpan _linger;

        private readonly NetMQQueue<Message> _replyQueue;
        private readonly NetMQQueue<Message> _broadcastQueue;
        private readonly NetMQPoller _poller;

        private readonly ILogger _logger;

        private TaskCompletionSource<object> _runningEvent;
        private int? _listenPort;
        private TurnClient _turnClient;
        private bool _behindNAT;
        private CancellationTokenSource _workerCancellationTokenSource;
        private CancellationToken _cancellationToken;
        private IPAddress _publicIPAddress;
        private IProtocol _protocol;

        static Swarm()
        {
            if (!(Type.GetType("Mono.Runtime") is null))
            {
                ForceDotNet.Force();
            }
        }

        public Swarm(
            BlockChain<T> blockChain,
            PrivateKey privateKey,
            int appProtocolVersion,
            int millisecondsDialTimeout = 15000,
            int millisecondsLinger = 1000,
            string host = null,
            int? listenPort = null,
            DateTimeOffset? createdAt = null,
            IEnumerable<IceServer> iceServers = null,
            EventHandler<DifferentProtocolVersionEventArgs>
                differentVersionPeerEncountered = null)
            : this(
                  blockChain,
                  privateKey,
                  appProtocolVersion,
                  TimeSpan.FromMilliseconds(millisecondsDialTimeout),
                  TimeSpan.FromMilliseconds(millisecondsLinger),
                  host,
                  listenPort,
                  createdAt,
                  iceServers,
                  differentVersionPeerEncountered)
        {
        }

        public Swarm(
            BlockChain<T> blockChain,
            PrivateKey privateKey,
            int appProtocolVersion,
            TimeSpan dialTimeout,
            TimeSpan linger,
            string host = null,
            int? listenPort = null,
            DateTimeOffset? createdAt = null,
            IEnumerable<IceServer> iceServers = null,
            EventHandler<DifferentProtocolVersionEventArgs>
                differentVersionPeerEncountered = null)
        {
            Running = false;

            _blockChain = blockChain ?? throw new ArgumentNullException(nameof(blockChain));
            _privateKey = privateKey ?? throw new ArgumentNullException(nameof(privateKey));
            _dialTimeout = dialTimeout;
            LastSeenTimestamps =
                new ConcurrentDictionary<Peer, DateTimeOffset>();

            DateTimeOffset now = createdAt.GetValueOrDefault(
                DateTimeOffset.UtcNow);
            LastDistributed = now;
            LastReceived = now;
            TxReceived = new AsyncAutoResetEvent();
            BlockReceived = new AsyncAutoResetEvent();
            DifferentVersionPeerEncountered = differentVersionPeerEncountered;

            _dealers = new ConcurrentDictionary<Peer, (DateTimeOffset, DealerSocket)>();
            _tips = new ConcurrentDictionary<Address, long?>();
            _router = new RouterSocket();
            _router.Options.RouterHandover = true;
            _replyQueue = new NetMQQueue<Message>();
            _broadcastQueue = new NetMQQueue<Message>();
            _poller = new NetMQPoller { _router, _replyQueue, _broadcastQueue };

            _blockSyncMutex = new AsyncLock();
            _runningMutex = new AsyncLock();

            _host = host;
            _listenPort = listenPort;
            _appProtocolVersion = appProtocolVersion;
            _linger = linger;

            if (_host != null && _listenPort is int listenPortAsInt)
            {
                EndPoint = new DnsEndPoint(_host, listenPortAsInt);
            }

            _iceServers = iceServers?.ToList();
            if (_host == null && (_iceServers == null || !_iceServers.Any()))
            {
                throw new ArgumentException(
                    $"Swarm requires either {nameof(host)} or " +
                    $"{nameof(iceServers)}."
                );
            }

            string loggerId = _privateKey.PublicKey.ToAddress().ToHex();
            _logger = Log.ForContext<Swarm<T>>()
                .ForContext("SwarmId", loggerId);

            _router.ReceiveReady += ReceiveMessage;
            _replyQueue.ReceiveReady += DoReply;
            _broadcastQueue.ReceiveReady += DoBroadcast;
        }

        ~Swarm()
        {
            // FIXME If possible, we should stop Swarm appropriately here.
            if (Running)
            {
                _logger.Warning(
                    "Swarm is scheduled to destruct, but it's still running.");
            }
        }

        /// <summary>
        /// The <see cref="EventHandler" /> called when the different version of
        /// <see cref="Peer" /> is discovered.
        /// </summary>
        public event EventHandler<DifferentProtocolVersionEventArgs>
            DifferentVersionPeerEncountered;

        public DnsEndPoint EndPoint { get; private set; }

        public Address Address => _privateKey.PublicKey.ToAddress();

        public Peer AsPeer =>
            EndPoint != null
            ? new Peer(
                _privateKey.PublicKey,
                EndPoint,
                _appProtocolVersion,
                _publicIPAddress)
            : throw new SwarmException(
                "Can't translate unbound Swarm to Peer.");

        public AsyncAutoResetEvent TxReceived { get; }

        public AsyncAutoResetEvent BlockReceived { get; }

        public DateTimeOffset LastReceived { get; private set; }

        public DateTimeOffset LastDistributed { get; private set; }

        public IDictionary<Peer, DateTimeOffset> LastSeenTimestamps
        {
            get;
            private set;
        }

        /// <summary>
        /// The <see cref="BlockChain{T}"/> instance this <see cref="Swarm{T}"/> instance
        /// synchronizes with.
        /// </summary>
        public BlockChain<T> BlockChain => _blockChain;

        /// <summary>
        /// Whether this <see cref="Swarm{T}"/> instance is running.
        /// </summary>
        public bool Running
        {
            get => _runningEvent.Task.Status == TaskStatus.RanToCompletion;

            private set
            {
                if (value)
                {
                    _runningEvent.TrySetResult(null);
                }
                else
                {
                    _runningEvent = new TaskCompletionSource<object>();
                }
            }
        }

        internal ICollection<Peer> Peers => _protocol.Peers;

        internal IProtocol Protocol => _protocol;

        /// <summary>
        /// Waits until this <see cref="Swarm{T}"/> instance gets started to run.
        /// </summary>
        /// <returns>A <see cref="Task"/> completed when <see cref="Running"/>
        /// property becomes <c>true</c>.</returns>
        public Task WaitForRunningAsync() => _runningEvent.Task;

        public async Task StopAsync(
            CancellationToken cancellationToken = default(CancellationToken))
        {
            _workerCancellationTokenSource?.Cancel();
            _logger.Debug("Stopping...");
            using (await _runningMutex.LockAsync())
            {
                if (Running)
                {
                    await Task.Delay(_linger, cancellationToken);

                    _broadcastQueue.ReceiveReady -= DoBroadcast;
                    _replyQueue.ReceiveReady -= DoReply;
                    _router.ReceiveReady -= ReceiveMessage;

                    if (_poller.IsRunning)
                    {
                        _poller.Dispose();
                    }

                    _broadcastQueue.Dispose();
                    _replyQueue.Dispose();
                    _router.Dispose();

                    foreach ((DateTimeOffset, DealerSocket) pair in _dealers.Values)
                    {
                        pair.Item2.Dispose();
                    }

                    _dealers.Clear();

                    Running = false;
                }
            }

            _logger.Debug("Stopped.");
        }

        public async Task PrepareAsync(
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (!(_protocol is null))
            {
                throw new SwarmException("Swarm is already prepared.");
            }

            if (Running)
            {
                throw new SwarmException("Swarm is already running.");
            }

            if (_host is null && !(_iceServers is null))
            {
                _turnClient = await IceServer.CreateTurnClient(_iceServers);
            }

            if (_listenPort == null)
            {
                _listenPort = _router.BindRandomPort("tcp://*");
            }
            else
            {
                _router.Bind($"tcp://*:{_listenPort}");
            }

            _logger.Information($"Listen on {_listenPort}");

            _workerCancellationTokenSource = new CancellationTokenSource();
            CancellationToken workerCancellationToken =
                CancellationTokenSource.CreateLinkedTokenSource(
                    _workerCancellationTokenSource.Token, cancellationToken
                ).Token;
            _cancellationToken = workerCancellationToken;
            _behindNAT = false;

            if (!(_turnClient is null))
            {
                _publicIPAddress = (await _turnClient.GetMappedAddressAsync()).Address;

                if (await _turnClient.IsBehindNAT())
                {
                    _behindNAT = true;
                }
            }

            if (_behindNAT)
            {
                IPEndPoint turnEp = await _turnClient.AllocateRequestAsync(
                    TurnAllocationLifetime
                );
                EndPoint = new DnsEndPoint(turnEp.Address.ToString(), turnEp.Port);
            }
            else
            {
                EndPoint = new DnsEndPoint(_host, _listenPort.Value);
            }

            _protocol = new KademliaProtocol<T>(
                this,
                _privateKey.PublicKey.ToAddress(),
                _appProtocolVersion,
                _cancellationToken,
                _logger);
        }

        public async Task StartAsync(
            int millisecondsBroadcastTxInterval = 5000)
        {
            await StartAsync(
                TimeSpan.FromMilliseconds(millisecondsBroadcastTxInterval)
            );
        }

        /// <summary>
        /// Starts to periodically synchronize the <see cref="BlockChain"/>.
        /// </summary>
        /// <param name="broadcastTxInterval">The time period of exchange of staged transactions.
        /// </param>
        /// <returns>An awaitable task without value.</returns>
        /// <exception cref="SwarmException">Thrown when this <see cref="Swarm{T}"/> instance is
        /// already <see cref="Running"/>.</exception>
        /// <remarks>If the <see cref="BlockChain"/> has no blocks at all or there are long behind
        /// blocks to caught in the network this method could lead to unexpected behaviors, because
        /// this tries to <see cref="IAction.Render"/> <em>all</em> actions in the behind blocks
        /// so that there are a lot of calls to <see cref="IAction.Render"/> method in a short
        /// period of time.  This can lead a game startup slow.  If you want to omit rendering of
        /// these actions in the behind blocks use <see cref=
        /// "PreloadAsync(IProgress{PreloadState}, IImmutableSet{Address}, CancellationToken)"
        /// /> method too.</remarks>
        public async Task StartAsync(TimeSpan broadcastTxInterval)
        {
            if (Running)
            {
                throw new SwarmException("Swarm is already running.");
            }

            if (_protocol is null)
            {
                throw new SwarmException("Swarm is not prepared.");
            }

            try
            {
                _logger.Debug("Starting swarm...");

                using (await _runningMutex.LockAsync())
                {
                    Running = true;
                }

                var tasks = new List<Task>
                {
                    BroadcastTxAsync(broadcastTxInterval, _cancellationToken),
                    Task.Run(() => _poller.Run(), _cancellationToken),
                    _protocol.RefreshAsync(_cancellationToken),
                };

                if (_behindNAT)
                {
                    tasks.Add(BindingProxies(_cancellationToken));
                    tasks.Add(RefreshAllocate(_cancellationToken));
                    tasks.Add(RefreshPermissions(_cancellationToken));
                }

                _logger.Debug("Swarm started.");

                await await Task.WhenAny(tasks);
            }
            catch (OperationCanceledException e)
            {
                _logger.Warning(e, $"{nameof(StartAsync)}() is canceled.");
                throw;
            }
            catch (Exception e)
            {
                _logger.Error(
                    e,
                    $"An unexpected exception occurred during {nameof(StartAsync)}(): {e}"
                );
                throw;
            }
        }

        public async Task BootstrapAsync(
           IEnumerable<Peer> seedPeers,
           double pingSeedTimeout,
           double findPeerTimeout,
           CancellationToken cancellationToken = default(CancellationToken))
        {
            await BootstrapAsync(
                seedPeers,
                TimeSpan.FromMilliseconds(pingSeedTimeout),
                TimeSpan.FromMilliseconds(findPeerTimeout),
                cancellationToken);
        }

        /// <summary>
        /// Join to the peer-to-peer network using seed peers.
        /// </summary>
        /// <param name="seedPeers">List of seed peers.</param>
        /// <param name="pingSeedTimeout">Timeout for connecting to seed peers.</param>
        /// <param name="findPeerTimeout">Timeout for requesting neighbours.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        /// <exception cref="SwarmException">Thrown when this <see cref="Swarm{T}"/> instance is
        /// not <see cref="Running"/>.</exception>
        public async Task BootstrapAsync(
            IEnumerable<Peer> seedPeers,
            TimeSpan? pingSeedTimeout,
            TimeSpan? findPeerTimeout,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (cancellationToken == default(CancellationToken))
            {
                cancellationToken = _cancellationToken;
            }

            if (!(seedPeers is null))
            {
                try
                {
                    await _protocol.BootstrapAsync(
                        seedPeers.ToImmutableList(),
                        pingSeedTimeout,
                        findPeerTimeout,
                        cancellationToken);
                }
                catch (Exception)
                {
                    throw;
                }
            }
        }

        public void BroadcastBlocks(IEnumerable<Block<T>> blocks)
        {
            _logger.Debug("Trying to broadcast blocks...");
            var message = new BlockHashes(
                Address,
                blocks.Select(b => b.Hash)
            );
            BroadcastMessage(message);
            _logger.Debug("Block broadcasting complete.");
        }

        public void BroadcastTxs(IEnumerable<Transaction<T>> txs)
        {
            _logger.Debug("Broadcast Txs.");
            List<TxId> txIds = txs.Select(tx => tx.Id).ToList();
            BroadcastTxIds(txIds);
        }

        /// <summary>
        /// Preemptively downloads blocks from registered <see cref="Peer"/>s.
        /// </summary>
        /// <param name="progress">
        /// An instance that receives progress updates for block downloads.
        /// </param>
        /// <param name="trustedStateValidators">
        /// If any peer in this set is reachable and there are no built-up
        /// blocks in a current node, <see cref="Swarm{T}"/> receives the latest
        /// states of the major blockchain from that trusted peer,
        /// which is also calculated by that peer, instead of autonomously
        /// calculating the states from scratch. Note that this option is
        /// intended to be exposed to end users through a feasible user
        /// interface so that they can decide whom to trust for themselves.
        /// </param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.
        /// </param>
        /// <returns>
        /// A task without value.
        /// You only can <c>await</c> until the method is completed.
        /// </returns>
        /// <remarks>This does not render downloaded <see cref="IAction"/>s, but fills states only.
        /// If you want to render all <see cref="IAction"/>s from the genesis block to the recent
        /// blocks use <see cref="StartAsync(TimeSpan)"/> method
        /// instead.</remarks>
        public Task PreloadAsync(
            IProgress<PreloadState> progress = null,
            IImmutableSet<Address> trustedStateValidators = null,
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            return PreloadAsync(
                render: false,
                progress: progress,
                trustedStateValidators: trustedStateValidators,
                cancellationToken: cancellationToken
            );
        }

        internal async Task PreloadAsync(
            bool render,
            IProgress<PreloadState> progress = null,
            IImmutableSet<Address> trustedStateValidators = null,
            CancellationToken cancellationToken = default(CancellationToken)
        )
        {
            if (EndPoint is null)
            {
                throw new SwarmException("Swarm is not prepared.");
            }

            if (trustedStateValidators is null)
            {
                trustedStateValidators = ImmutableHashSet<Address>.Empty;
            }

            Block<T> initialTip = _blockChain.Tip;

            _logger.Debug($"Preload from {Peers.Count} peers.");

            IList<(Peer, long?)> peersWithHeight =
                Peers.Select(p => (p, _tips[p.Address])).ToList();

            if (!peersWithHeight.Any())
            {
                _logger.Information("There is no appropriate peer for preloading.");
                return;
            }

            // As preloading takes long, the blockchain data can corrupt if a program suddenly
            // terminates during preloading is going on.  In order to make preloading done
            // all or nothing (i.e., atomic), we first fork the chain and stack up preloaded data
            // upon that forked workspace, and then if preloading ends replace the existing
            // blockchain with it.
            BlockChain<T> workspace = initialTip is Block<T> tip
                ? _blockChain.Fork(tip.Hash)
                : new BlockChain<T>(_blockChain.Policy, _blockChain.Store, Guid.NewGuid());

            try
            {
                await SyncBehindsBlocksFromPeerAsync(
                    workspace,
                    Peers.First(),
                    progress,
                    cancellationToken,
                    render
                );

                if (workspace.Tip is null)
                {
                    // If there is no blocks in the network (or no consensus at least)
                    // it doesn't need to receive states from other peers at all.
                    return;
                }
                else if (render)
                {
                    // If it's already rendered by SyncBehindsBlocksFromPeersAsync() method
                    // it means states are already calculated so that it does not need to receive
                    // calculated states from trusted peers.
                    return;
                }

                long height = workspace.Tip.Index;

                IEnumerable<(Peer, HashDigest<SHA256> Hash)> trustedPeersWithTip =
                    peersWithHeight.Where(pair =>
                        trustedStateValidators.Contains(pair.Item1.Address) &&
                        !(pair.Item2 is null) &&
                        pair.Item2 <= height
                    ).OrderByDescending(pair =>
                        pair.Item2
                    ).Select(pair =>
                        (pair.Item1, workspace[pair.Item2.Value].Hash)
                    );

                bool received = await SyncRecentStatesFromTrustedPeersAsync(
                    workspace,
                    progress,
                    trustedPeersWithTip.ToImmutableList(),
                    initialTip?.Hash,
                    cancellationToken
                );

                if (!received)
                {
                    long initHeight =
                        initialTip is null || !workspace[initialTip.Index].Equals(initialTip)
                        ? 0
                        : initialTip.Index + 1;
                    int count = 0, totalCount = workspace.Count() - (int)initHeight;
                    _logger.Debug("Starts to execute actions of {0} blocks.", totalCount);
                    foreach (HashDigest<SHA256> hash in workspace.BlockHashes.Skip((int)initHeight))
                    {
                        cancellationToken.ThrowIfCancellationRequested();

                        Block<T> block = workspace.Blocks[hash];
                        if (block.Index < initHeight)
                        {
                            continue;
                        }

                        workspace.ExecuteActions(block, render: false);
                        _logger.Debug("Executed actions in the block {0}.", block.Hash);
                        progress?.Report(new ActionExecutionState()
                        {
                            TotalBlockCount = totalCount,
                            ExecutedBlockCount = ++count,
                            ExecutedBlockHash = block.Hash,
                        });
                    }

                    _logger.Debug("Finished to execute actions.");
                }
            }
            finally
            {
                if (cancellationToken.IsCancellationRequested)
                {
                    _logger.Information($"{nameof(PreloadAsync)}() is canceled.");
                }

                if (workspace.Tip == _blockChain.Tip || cancellationToken.IsCancellationRequested)
                {
                    _logger.Debug(
                        "Preloading is aborted; delete the temporary working chain ({0}: {1}), " +
                        "and make the existing chain ({2}: {3}) remains.",
                        workspace.Id,
                        workspace.Tip,
                        _blockChain.Id,
                        _blockChain.Tip
                    );
                    workspace.Store.DeleteNamespace(workspace.Id.ToString());
                }
                else
                {
                    _logger.Debug(
                        "Preloading finished; replace the existing chain ({0}: {1}) with " +
                        "the working chain ({2}: {3}).",
                        _blockChain.Id,
                        _blockChain.Tip,
                        workspace.Id,
                        workspace.Tip
                    );
                    _blockChain.Swap(workspace, render: false);
                }

                cancellationToken.ThrowIfCancellationRequested();
            }
        }

        internal string TraceTable()
        {
            if (_protocol is null)
            {
                return string.Empty;
            }
            else
            {
                return _protocol.Trace();
            }
        }

        internal async Task AddPeersAsync(
            IEnumerable<Peer> peers,
            TimeSpan? timeout,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (_protocol is null)
            {
                throw new ArgumentNullException(nameof(_protocol));
            }

            if (cancellationToken == default(CancellationToken))
            {
                cancellationToken = _cancellationToken;
            }

            try
            {
                KademliaProtocol<T> kp = (KademliaProtocol<T>)_protocol;

                List<Task> tasks = new List<Task>();
                foreach (Peer peer in peers)
                {
                    tasks.Add(kp.PingAsync(
                        peer,
                        timeout: timeout,
                        cancellationToken: cancellationToken));
                }

                await Task.WhenAll(tasks);
            }
            catch (TimeoutException)
            {
                _logger.Debug("Timeout occurred during AddPeersAsync().");
                throw;
            }
            catch (TaskCanceledException)
            {
                _logger.Debug("Task is cancelled during AddPeersAsync().");
            }
            catch (Exception e)
            {
                _logger.Error(e, "Unexpected exception occurred during AddPeersAsync().");
                throw;
            }
        }

        internal async Task SendMessageAsync(Peer peer, Message message)
        {
            if (_cancellationToken.IsCancellationRequested)
            {
                return;
            }

            DealerSocket dealer = await GetDealerSocket(peer);

            try
            {
                _logger.Debug($"Trying to send [{message}] to [{peer.ToString()}]...");

                // dealer.SendMultipartMessage(message.ToNetMQMessage(_privateKey, AsPeer));
                if (!dealer.TrySendMultipartMessage(
                       TimeSpan.FromSeconds(3),
                       message.ToNetMQMessage(_privateKey, AsPeer)))
                {
                    throw new TimeoutException();
                }
            }
            catch (TimeoutException e)
            {
                _logger.Error(e, "Timeout occurred during SendMessageAsync()");
                throw;
            }
            catch (Exception e)
            {
                _logger.Error(e, "An unexpected exception occurred during SendMessageAsync()");
                throw;
            }
        }

        internal async Task<Message> SendMessageWithReplyAsync(
            Peer peer,
            Message message,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            if (_turnClient != null)
            {
                await CreatePermission(peer);
            }

            try
            {
                using (var dealer = new DealerSocket(ToNetMQAddress(peer)))
                {
                    _logger.Debug($"Trying to send [{message}] to [{peer.Address.ToHex()}]...");

                    await dealer.SendMultipartMessageAsync(
                        message.ToNetMQMessage(_privateKey, AsPeer),
                        timeout: timeout,
                        cancellationToken: cancellationToken);

                    _logger.Debug($"Message sent, waiting for reply...");

                    NetMQMessage raw = await dealer.ReceiveMultipartMessageAsync(
                        timeout: timeout,
                        cancellationToken: cancellationToken);

                    Message reply = Message.Parse(raw, true);
                    _logger.Debug($"Received [{reply}] from [{peer.Address.ToHex()}]...");

                    // FIXME: please
                    if (reply is Pong pong)
                    {
                        if (pong.AppProtocolVersion != _appProtocolVersion)
                        {
                            DifferentProtocolVersionEventArgs args =
                                new DifferentProtocolVersionEventArgs
                                {
                                    ExpectedVersion = _appProtocolVersion,
                                    ActualVersion = pong.AppProtocolVersion,
                                };

                            DifferentVersionPeerEncountered?.Invoke(this, args);

                            throw new DifferentAppProtocolVersionException(
                                $"Peer protocol version is different.",
                                _appProtocolVersion,
                                pong.AppProtocolVersion);
                        }

                        _tips[pong.Remote.Address] = pong.TipIndex;
                        _logger.Debug(
                            $"Received tip index from [{pong.Remote.Address.ToHex()}] " +
                            $"is {pong.TipIndex}.");
                    }

                    return reply;
                }
            }
            catch (DifferentAppProtocolVersionException)
            {
                throw;
            }
            catch (TimeoutException e)
            {
                _logger.Error(e, "Timeout occurred during SendMessageWithReplyAsync().");
                throw;
            }
            catch (TaskCanceledException)
            {
                _logger.Debug("Task canceled during SendMessageWithReplyAsync().");
                throw;
            }
            catch (Exception e)
            {
                _logger.Error(
                    e,
                    "An unexpected exception occurred during SendMessageWithReplyAsync().");
                throw;
            }
        }

        internal async Task<IEnumerable<HashDigest<SHA256>>>
            GetBlockHashesAsync(
                Peer peer,
                BlockLocator locator,
                HashDigest<SHA256>? stop,
                CancellationToken token = default(CancellationToken)
            )
        {
            var request = new GetBlockHashes(locator, stop);

            using (var socket = new DealerSocket(ToNetMQAddress(peer)))
            {
                await socket.SendMultipartMessageAsync(
                    request.ToNetMQMessage(_privateKey, AsPeer),
                    cancellationToken: token);

                NetMQMessage response = await socket.ReceiveMultipartMessageAsync(
                    timeout: BlockHashRecvTimeout,
                    cancellationToken: token
                );
                Message parsedMessage = Message.Parse(response, reply: true);
                if (parsedMessage is BlockHashes blockHashes)
                {
                    return blockHashes.Hashes;
                }

                throw new InvalidMessageException(
                    $"The response of GetBlockHashes isn't BlockHashes. " +
                    $"but {parsedMessage}");
            }
        }

        internal IAsyncEnumerable<Block<T>> GetBlocksAsync(
            Peer peer,
            IEnumerable<HashDigest<SHA256>> blockHashes)
        {
            return new AsyncEnumerable<Block<T>>(async yield =>
            {
                CancellationToken yieldToken = yield.CancellationToken;
                using (var socket = new DealerSocket(ToNetMQAddress(peer)))
                {
                    var blockHashesAsArray =
                        blockHashes as HashDigest<SHA256>[] ??
                        blockHashes.ToArray();
                    var request = new GetBlocks(blockHashesAsArray);
                    await socket.SendMultipartMessageAsync(
                        request.ToNetMQMessage(_privateKey, AsPeer),
                        cancellationToken: yieldToken);

                    int hashCount = blockHashesAsArray.Count();
                    _logger.Debug(
                        $"Required block count: {hashCount}. {yieldToken}");
                    while (hashCount > 0 && !yieldToken.IsCancellationRequested)
                    {
                        _logger.Debug("Starts to receive blocks from {0}.", peer);
                        NetMQMessage response = await socket.ReceiveMultipartMessageAsync(
                            timeout: BlockRecvTimeout,
                            cancellationToken: yieldToken
                        );
                        Message parsedMessage = Message.Parse(response, true);
                        if (parsedMessage is Messages.Blocks blockMessage)
                        {
                            IList<byte[]> payloads = blockMessage.Payloads;
                            _logger.Debug("Received {0} blocks from {1}.", payloads.Count, peer);
                            foreach (byte[] payload in payloads)
                            {
                                Block<T> block = Block<T>.FromBencodex(payload);
                                await yield.ReturnAsync(block);
                                hashCount--;
                            }
                        }
                        else
                        {
                            throw new InvalidMessageException(
                                $"The response of GetData isn't a Block. " +
                                $"but {parsedMessage}");
                        }
                    }
                }
            });
        }

        internal IAsyncEnumerable<Transaction<T>> GetTxsAsync(
            Peer peer,
            IEnumerable<TxId> txIds,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            return new AsyncEnumerable<Transaction<T>>(async yield =>
            {
                using (var socket = new DealerSocket(ToNetMQAddress(peer)))
                {
                    var txIdsAsArray = txIds as TxId[] ?? txIds.ToArray();
                    var request = new GetTxs(txIdsAsArray);
                    await socket.SendMultipartMessageAsync(
                        request.ToNetMQMessage(_privateKey, AsPeer),
                        cancellationToken: cancellationToken);

                    int hashCount = txIdsAsArray.Count();
                    _logger.Debug($"Required tx count: {hashCount}.");
                    while (hashCount > 0)
                    {
                        _logger.Debug("Receiving tx...");
                        NetMQMessage response = await socket.ReceiveMultipartMessageAsync(
                            timeout: TxRecvTimeout,
                            cancellationToken: cancellationToken
                        );
                        Message parsedMessage = Message.Parse(response, true);
                        if (parsedMessage is Messages.Tx parsed)
                        {
                            Transaction<T> tx = Transaction<T>.FromBencodex(
                                parsed.Payload);
                            await yield.ReturnAsync(tx);
                            hashCount--;
                        }
                        else
                        {
                            throw new InvalidMessageException(
                                $"The response of getdata isn't block. " +
                                $"but {parsedMessage}");
                        }
                    }
                }
            });
        }

        internal void ReplyMessage(Message message)
        {
            _replyQueue.Enqueue(message);
        }

        private void BroadcastMessage(Message message)
        {
            _broadcastQueue.Enqueue(message);
        }

        private async Task BindingProxies(CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                try
                {
                    NetworkStream stream =
                        await _turnClient.AcceptRelayedStreamAsync();

                    // TODO We should expose the interface so that library users
                    // can limit / manage the task.
#pragma warning disable CS4014
                    Task.Run(async () =>
                    {
                        using (var proxy = new NetworkStreamProxy(stream))
                        {
                            Debug.Assert(
                                _listenPort != null,
                                nameof(_listenPort) + " != null");
                            await proxy.StartAsync(
                                IPAddress.Loopback,
                                _listenPort.Value);
                        }
                    });
#pragma warning restore CS4014
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        "An unexpected exception occured. try again..."
                    );
                }
            }
        }

        private async Task SyncBehindsBlocksFromPeerAsync(
            BlockChain<T> blockChain,
            Peer peer,
            IProgress<BlockDownloadState> progress,
            CancellationToken cancellationToken,
            bool render
        )
        {
            if (peer != null &&
                !(_blockChain.Tip?.Index >= (_tips[peer.Address] ?? -1)))
            {
                long currentTipIndex = blockChain.Tip?.Index ?? -1;
                long peerIndex = _tips[peer.Address] ?? -1;
                long totalBlockCount = peerIndex - currentTipIndex;

                _logger.Debug("Synchronizing previous blocks from " +
                    $"[{peer.Address.ToHex()}]");
                BlockChain<T> synced = await SyncPreviousBlocksAsync(
                    blockChain,
                    peer,
                    null,
                    progress,
                    totalBlockCount,
                    evaluateActions: render,
                    cancellationToken: cancellationToken
                );
                if (!synced.Id.Equals(_blockChain.Id))
                {
                    blockChain.Swap(synced, render);
                }
            }
        }

        private async Task<bool> SyncRecentStatesFromTrustedPeersAsync(
            BlockChain<T> blockChain,
            IProgress<PreloadState> progress,
            IReadOnlyList<(Peer, HashDigest<SHA256>)> trustedPeersWithTip,
            HashDigest<SHA256>? baseBlockHash,
            CancellationToken cancellationToken)
        {
            _logger.Debug(
                "Starts to find a peer to request recent states (candidates: {0} trusted peers).",
                trustedPeersWithTip.Count
            );
            foreach ((Peer peer, var blockHash) in trustedPeersWithTip)
            {
                cancellationToken.ThrowIfCancellationRequested();
                var request = new GetRecentStates(baseBlockHash, blockHash);
                _logger.Debug("Makes a dealer socket to a trusted peer ({0}).", peer);
                using (var socket = new DealerSocket(ToNetMQAddress(peer)))
                {
                    _logger.Debug("Requests recent states to a peer ({0}).", peer);
                    await socket.SendMultipartMessageAsync(
                        request.ToNetMQMessage(_privateKey, AsPeer),
                        cancellationToken: cancellationToken
                    );
                    _logger.Debug("Requested recent states to a peer ({0}).", peer);
                    NetMQMessage reply;
                    try
                    {
                        reply = await socket.ReceiveMultipartMessageAsync(
                            timeout: TimeSpan.FromSeconds(30),
                            cancellationToken: cancellationToken
                        );
                        _logger.Debug("Received recent states from a peer ({0}).", peer);
                    }
                    catch (TimeoutException e)
                    {
                        _logger.Error(
                            "Failed to receive recent states from a peer ({0}): " + e,
                            peer
                        );
                        continue;
                    }

                    Message parsedMessage = Message.Parse(reply, reply: true);
                    if (parsedMessage is RecentStates recentStates && !recentStates.Missing)
                    {
                        ReaderWriterLockSlim rwlock = blockChain._rwlock;
                        rwlock.EnterWriteLock();
                        try
                        {
                            // FIXME: Swarm should not directly access to the IStore instance,
                            // but BlockChain<T> should have an indirect interface to its underlying
                            // store.
                            IStore store = blockChain.Store;
                            string ns = blockChain.Id.ToString();

                            int count = 0, totalCount = recentStates.StateReferences.Count;
                            _logger.Debug("Starts to store state refs received from {0}.", peer);
                            foreach (var pair in recentStates.StateReferences)
                            {
                                cancellationToken.ThrowIfCancellationRequested();
                                IImmutableSet<Address> address = ImmutableHashSet.Create(pair.Key);
                                foreach (HashDigest<SHA256> bHash in pair.Value)
                                {
                                    Block<T> block = store.GetBlock<T>(bHash);
                                    store.StoreStateReference(ns, address, block);
                                }

                                progress?.Report(new StateReferenceDownloadState()
                                {
                                    TotalStateReferenceCount = totalCount,
                                    ReceivedStateReferenceCount = ++count,
                                    ReceivedAddress = pair.Key,
                                });
                            }

                            count = 0;
                            totalCount = recentStates.BlockStates.Count;
                            _logger.Debug("Starts to store block states received from {0}.", peer);
                            foreach (var pair in recentStates.BlockStates)
                            {
                                cancellationToken.ThrowIfCancellationRequested();
                                store.SetBlockStates(pair.Key, new AddressStateMap(pair.Value));
                                progress?.Report(new BlockStateDownloadState()
                                {
                                    TotalBlockStateCount = totalCount,
                                    ReceivedBlockStateCount = ++count,
                                    ReceivedBlockHash = pair.Key,
                                });
                            }
                        }
                        finally
                        {
                            rwlock.ExitWriteLock();
                        }

                        _logger.Debug(
                            "Finished to store received state refs and block states.");
                        return true;
                    }

                    _logger.Debug(
                        "A message received from {0} is not a RecentStates but {1}.",
                        peer,
                        parsedMessage
                    );
                }
            }

            _logger.Warning("Failed to receive states from trusted peers.");
            return false;
        }

        private async Task RefreshAllocate(CancellationToken cancellationToken)
        {
            TimeSpan lifetime = TurnAllocationLifetime;
            while (!cancellationToken.IsCancellationRequested)
            {
                await Task.Delay(lifetime - TimeSpan.FromMinutes(1), cancellationToken);
                lifetime = await _turnClient.RefreshAllocationAsync(lifetime);
            }
        }

        private async Task RefreshPermissions(
            CancellationToken cancellationToken)
        {
            TimeSpan lifetime = TurnPermissionLifetime;
            while (!cancellationToken.IsCancellationRequested)
            {
                await Task.Delay(lifetime - TimeSpan.FromMinutes(1), cancellationToken);
                await Task.WhenAll(
                    Peers.Select(CreatePermission));
            }
        }

        private async Task BroadcastTxAsync(
            TimeSpan broadcastTxInterval,
            CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                try
                {
                    await Task.Delay(broadcastTxInterval, cancellationToken);

                    await Task.Run(
                        () =>
                        {
                            List<TxId> txIds = _blockChain
                                .GetStagedTransactionIds(true)
                                .ToList();

                            if (txIds.Any())
                            {
                                BroadcastTxIds(txIds);
                            }
                        }, cancellationToken);
                }
                catch (OperationCanceledException e)
                {
                    _logger.Warning(e, $"{nameof(BroadcastTxAsync)}() is canceled.");
                    throw;
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        $"An unexpected exception occured during {nameof(BroadcastTxAsync)}(): {e}"
                    );
                }
            }
        }

        private void BroadcastTxIds(IEnumerable<TxId> txIds)
        {
            var message = new TxIds(Address, txIds);
            BroadcastMessage(message);
        }

        private async Task ProcessMessageAsync(
            Message message,
            CancellationToken cancellationToken)
        {
            switch (message)
            {
                case Ping ping:
                    {
                        _logger.Debug($"Ping received.");
                        _protocol.ReceiveMessage(this, ping);
                        break;
                    }

                case FindPeer findPeer:
                    {
                        _logger.Debug($"FindPeer received.");
                        _protocol.ReceiveMessage(this, findPeer);
                        break;
                    }

                case GetBlockHashes getBlockHashes:
                    {
                        IEnumerable<HashDigest<SHA256>> hashes =
                            _blockChain.FindNextHashes(
                                getBlockHashes.Locator,
                                getBlockHashes.Stop);
                        var reply = new BlockHashes(Address, hashes)
                        {
                            Identity = getBlockHashes.Identity,
                        };
                        ReplyMessage(reply);
                        break;
                    }

                case GetRecentStates getRecentStates:
                    {
                        TransferRecentStates(getRecentStates);
                        break;
                    }

                case GetBlocks getBlocks:
                    {
                        TransferBlocks(getBlocks);
                        break;
                    }

                case GetTxs getTxs:
                    {
                        TransferTxs(getTxs);
                        break;
                    }

                case TxIds txIds:
                    {
                        await ProcessTxIds(txIds, cancellationToken);
                        break;
                    }

                case BlockHashes blockHashes:
                    {
                        await ProcessBlockHashes(blockHashes, cancellationToken);
                        break;
                    }

                default:
                    Trace.Fail($"Can't handle message. [{message}]");
                    break;
            }
        }

        private async Task ProcessBlockHashes(
            BlockHashes message,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            Peer peer = message.Remote;
            if (peer == null)
            {
                _logger.Information(
                    $"BlockHashes was sent from unknown peer [{peer.Address.ToHex()}]. ignored.");
                return;
            }

            _logger.Debug(
                $"Trying to GetBlocksAsync() " +
                $"(using {message.Hashes.Count()} hashes)");
            IAsyncEnumerable<Block<T>> fetched = GetBlocksAsync(
                peer,
                message.Hashes
            );

            List<Block<T>> blocks = await fetched.ToListAsync(
                cancellationToken
            );
            _logger.Debug("GetBlocksAsync() complete.");

            try
            {
                using (await _blockSyncMutex.LockAsync(cancellationToken))
                {
                    await AppendBlocksAsync(peer, blocks, cancellationToken);
                    _logger.Debug("Append complete.");
                }
            }
            catch (Exception e)
            {
                _logger.Error(e, $"Append Failed. exception: {e}");
                throw;
            }
        }

        private async Task<BlockChain<T>> SyncPreviousBlocksAsync(
            BlockChain<T> blockChain,
            Peer peer,
            HashDigest<SHA256>? stop,
            IProgress<BlockDownloadState> progress,
            long totalBlockCount,
            bool evaluateActions,
            CancellationToken cancellationToken
        )
        {
            // Fix the tip here because it may change while receiving the block
            // hashes.
            Block<T> tip = blockChain.Tip;

            _logger.Debug("Trying to find branchpoint...");
            BlockLocator locator = blockChain.GetBlockLocator();
            _logger.Debug($"Locator's count: {locator.Count()}");
            IEnumerable<HashDigest<SHA256>> hashes = (
                await GetBlockHashesAsync(
                    peer, locator, stop, cancellationToken)
            ).ToArray();

            if (!hashes.Any())
            {
                _logger.Debug("Peer[{0}] didn't return any hashes; ignored.", peer);
                return blockChain;
            }

            HashDigest<SHA256> branchPoint = hashes.First();

            _logger.Debug("Branchpoint is {0}.", ByteUtil.Hex(branchPoint.ToByteArray()));

            BlockChain<T> synced;
            if (tip is null || branchPoint.Equals(tip.Hash))
            {
                _logger.Debug("It doesn't need to fork.");
                synced = blockChain;
            }

            // FIXME BlockChain.Blocks.ContainsKey() can be very
            // expensive.
            // we can omit this clause if assume every chain shares
            // same genesis block...
            else if (!blockChain.Blocks.ContainsKey(branchPoint))
            {
                // Create a whole new chain because the branch point doesn't exist on
                // the current chain.
                synced = new BlockChain<T>(blockChain.Policy, blockChain.Store, Guid.NewGuid());
            }
            else
            {
                _logger.Debug("Forking needed. Trying to fork...");
                synced = blockChain.Fork(branchPoint);
                _logger.Debug("Forking complete.");
            }

            try
            {
                _logger.Debug("Trying to fill up previous blocks...");

                int retry = 3;
                while (true)
                {
                    cancellationToken.ThrowIfCancellationRequested();

                    try
                    {
                        await FillBlocksAsync(
                            peer,
                            synced,
                            stop,
                            progress,
                            totalBlockCount,
                            evaluateActions,
                            cancellationToken
                        );
                        break;
                    }

                    // We can't recover with OperationCanceledException and
                    // ObjectDisposedException. so just re-throw them.
                    catch (ObjectDisposedException)
                    {
                        throw;
                    }
                    catch (OperationCanceledException)
                    {
                        throw;
                    }
                    catch (Exception e)
                    {
                        if (retry > 0)
                        {
                            _logger.Error(
                                e,
                                "FillBlockAsync() failed. retrying..."
                            );
                            retry--;
                        }
                        else
                        {
                            throw;
                        }
                    }
                }
            }
            finally
            {
                if (cancellationToken.IsCancellationRequested)
                {
                    synced.Store.DeleteNamespace(synced.Id.ToString());
                }
            }

            return synced;
        }

        private async Task AppendBlocksAsync(
            Peer peer,
            List<Block<T>> blocks,
            CancellationToken cancellationToken
        )
        {
            // We assume that the blocks are sorted in order.
            Block<T> oldest = blocks.First();
            Block<T> latest = blocks.Last();
            Block<T> tip = _blockChain.Tip;

            if (tip is null || latest.Index > tip.Index)
            {
                _logger.Debug("Trying to fill up previous blocks...");
                BlockChain<T> previousBlocks = await SyncPreviousBlocksAsync(
                    _blockChain,
                    peer,
                    oldest.PreviousHash,
                    null,
                    blocks.Count,
                    evaluateActions: true,
                    cancellationToken: cancellationToken
                );
                _logger.Debug("Filled up. trying to concatenation...");

                foreach (Block<T> block in blocks)
                {
                    previousBlocks.Append(block);
                }

                _logger.Debug("Sync is done.");
                if (!previousBlocks.Id.Equals(_blockChain.Id))
                {
                    _logger.Debug("trying to swapping chain...");
                    _blockChain.Swap(previousBlocks, render: true);
                    _logger.Debug("Swapping complete");
                }

                Message msg = new BlockHashes(peer.Address, blocks.Select(b => b.Hash));
                BroadcastMessage(msg);
            }
            else
            {
                _logger.Information(
                    "Received index is older than current chain's tip." +
                    " ignored.");
            }

            BlockReceived.Set();
        }

        private async Task FillBlocksAsync(
            Peer peer,
            BlockChain<T> blockChain,
            HashDigest<SHA256>? stop,
            IProgress<BlockDownloadState> progress,
            long totalBlockCount,
            bool evaluateActions,
            CancellationToken cancellationToken
        )
        {
            long receivedBlockCount = 0;
            while (!cancellationToken.IsCancellationRequested)
            {
                BlockLocator locator = blockChain.GetBlockLocator();
                IEnumerable<HashDigest<SHA256>> hashes =
                    await GetBlockHashesAsync(
                        peer, locator, stop, cancellationToken);
                if (blockChain.Tip != null)
                {
                    hashes = hashes.Skip(1);
                }

                var hashesAsArray =
                    hashes as HashDigest<SHA256>[] ?? hashes.ToArray();
                if (!hashesAsArray.Any())
                {
                    break;
                }

                int hashCount = hashesAsArray.Count();
                _logger.Debug(
                    $"Required hashes (count: {hashCount}). " +
                    $"(tip: {blockChain.Tip?.Hash})"
                );

                totalBlockCount = Math.Max(totalBlockCount, receivedBlockCount + hashCount);

                await GetBlocksAsync(peer, hashesAsArray)
                    .ForEachAsync(
                    block =>
                    {
                        _logger.Debug(
                            $"Trying to append block[{block.Hash}]...");

                        cancellationToken.ThrowIfCancellationRequested();

                        // As actions in this block should be rendered
                        // after actions in stale blocks are unrendered,
                        // given the `render: false` option here.
                        blockChain.Append(
                            block,
                            DateTimeOffset.UtcNow,
                            evaluateActions: evaluateActions,
                            renderActions: false
                        );
                        receivedBlockCount++;
                        progress?.Report(new BlockDownloadState
                        {
                            TotalBlockCount = totalBlockCount,
                            ReceivedBlockCount = receivedBlockCount,
                            ReceivedBlockHash = block.Hash,
                        });
                        _logger.Debug($"Block[{block.Hash}] is appended.");
                    },
                    cancellationToken);
            }
        }

        private void TransferTxs(GetTxs getTxs)
        {
            IDictionary<TxId, Transaction<T>> txs = _blockChain.Transactions;
            foreach (var txid in getTxs.TxIds)
            {
                if (txs.TryGetValue(txid, out Transaction<T> tx))
                {
                    Message response = new Messages.Tx(tx.ToBencodex(true))
                    {
                        Identity = getTxs.Identity,
                    };
                    ReplyMessage(response);
                }
            }
        }

        private async Task ProcessTxIds(
            TxIds message,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            _logger.Debug("Trying to fetch txs...");

            ImmutableHashSet<TxId> newTxIds = message.Ids
                .Where(id => !_blockChain.Transactions.ContainsKey(id))
                .ToImmutableHashSet();

            if (!newTxIds.Any())
            {
                _logger.Debug("No txs to require.");
                return;
            }

            Peer peer = message.Remote;
            if (peer == null)
            {
                _logger.Information(
                    "TxIds was sent from unknown peer. ignored.");
                return;
            }

            IAsyncEnumerable<Transaction<T>> fetched = GetTxsAsync(
                peer, newTxIds, cancellationToken);
            List<Transaction<T>> txs = await fetched.ToListAsync(cancellationToken);
            var toStage = txs.ToDictionary(tx => tx, _ => true);

            _blockChain.StageTransactions(toStage);
            TxReceived.Set();
            _logger.Debug("Txs staged successfully.");
        }

        private void TransferBlocks(GetBlocks getData)
        {
            _logger.Debug("Trying to transfer blocks...");

            var blocks = new List<byte[]>();

            foreach (HashDigest<SHA256> hash in getData.BlockHashes)
            {
                if (_blockChain.Blocks.TryGetValue(hash, out Block<T> block))
                {
                    byte[] payload = block.ToBencodex(true, true);
                    blocks.Add(payload);
                }

                if (blocks.Count == getData.ChunkSize)
                {
                    var response = new Messages.Blocks(blocks)
                    {
                        Identity = getData.Identity,
                    };
                    ReplyMessage(response);
                    blocks.Clear();
                }
            }

            if (blocks.Any())
            {
                var response = new Messages.Blocks(blocks)
                {
                    Identity = getData.Identity,
                };
                ReplyMessage(response);
            }

            _logger.Debug("Transfer complete.");
        }

        private void TransferRecentStates(GetRecentStates getRecentStates)
        {
            HashDigest<SHA256>? @base = getRecentStates.BaseBlockHash;
            HashDigest<SHA256> target = getRecentStates.TargetBlockHash;
            IImmutableDictionary<HashDigest<SHA256>,
                IImmutableDictionary<Address, object>
            > blockStates = null;
            IImmutableDictionary<Address, IImmutableList<HashDigest<SHA256>>>
                stateRefs = null;

            if (_blockChain.Blocks.ContainsKey(target))
            {
                ReaderWriterLockSlim rwlock = _blockChain._rwlock;
                rwlock.EnterReadLock();
                try
                {
                    // FIXME: Swarm should not directly access to the IStore instance,
                    // but BlockChain<T> should have an indirect interface to its underlying
                    // store.
                    IStore store = _blockChain.Store;
                    string ns = _blockChain.Id.ToString();

                    stateRefs = store.ListAllStateReferences(
                        ns,
                        onlyAfter: @base,
                        ignoreAfter: target
                    );

                    blockStates = stateRefs.Values
                        .Select(refs => refs.Last())
                        .ToImmutableHashSet()
                        .Select(bh =>
                            new KeyValuePair<
                                HashDigest<SHA256>,
                                IImmutableDictionary<Address, object>
                            >(bh, store.GetBlockStates(bh))
                        )
                        .ToImmutableDictionary();
                }
                finally
                {
                    rwlock.ExitReadLock();
                }
            }

            var reply = new RecentStates(target, blockStates, stateRefs)
            {
                Identity = getRecentStates.Identity,
            };
            ReplyMessage(reply);
        }

        private bool IsDifferentProtocolVersion(Peer sender)
        {
            return sender.AppProtocolVersion != _appProtocolVersion;
        }

        private async Task<DealerSocket> GetDealerSocket(Peer peer)
        {
            DealerSocket dealer;
            if (NeedsNewDealer(peer))
            {
                _logger.Debug($"Trying to create a dealer socket...");
                dealer = await CreateDealerSocket(peer);
                dealer.Options.Linger = _linger;
                string address = ToNetMQAddress(peer);
                dealer.Connect(address);
                if (_dealers.Count >= MaxDealerCount)
                {
                    RemoveOldestDealer();
                }

                _dealers[peer] = (DateTimeOffset.UtcNow, dealer);
            }
            else
            {
                dealer = _dealers[peer].Item2;
            }

            return dealer;
        }

        private bool NeedsNewDealer(Peer peer)
        {
            Peer existing = _dealers.Keys
                .FirstOrDefault(p => peer.PublicKey.Equals(p.PublicKey));

            if (existing is null)
            {
                return true;
            }

            if (!existing.EndPoint.Equals(peer.EndPoint))
            {
                // Clear outdated existing peer.
                CloseDealer(existing);
                return true;
            }

            return false;
        }

        private async Task<DealerSocket> CreateDealerSocket(Peer peer)
        {
            if (_turnClient != null)
            {
                await CreatePermission(peer);
            }

            return new DealerSocket();
        }

        private void RemoveOldestDealer()
        {
            _logger.Debug("Too many dealers, removing...");
            (DateTimeOffset, Peer) oldest = (DateTimeOffset.UtcNow, null);
            foreach (Peer peer in _dealers.Keys)
            {
                if (_dealers[peer].Item1 < oldest.Item1)
                {
                    oldest = (_dealers[peer].Item1, peer);
                }
            }

            if (oldest.Item2 is null)
            {
                throw new SwarmException("Creation time of used dealer must before now.");
            }

            CloseDealer(oldest.Item2);
        }

        private void CloseDealer(Peer peer)
        {
            CheckStarted();
            if (_dealers.TryGetValue(peer, out (DateTimeOffset, DealerSocket) pair))
            {
                pair.Item2.Dispose();
                _dealers.Remove(peer);
            }
        }

        private void ReceiveMessage(object sender, NetMQSocketEventArgs e)
        {
            try
            {
                NetMQMessage raw = e.Socket.ReceiveMultipartMessage();

                _logger.Verbose(
                    "A raw message [frame count: {0}] has received.",
                    raw.FrameCount
                );
                Message message = Message.Parse(raw, reply: false);
                _logger.Debug("A message has parsed: {0}", message);

                // it's still async because some method it relies are async yet.Task.Run(
                Task.Run(
                    async () =>
                    {
                        try
                        {
                            await ProcessMessageAsync(message, _cancellationToken);
                        }
                        catch (Exception exc)
                        {
                            _logger.Error("Something went wrong during message parsing: {0}", exc);
                            throw;
                        }
                    },
                    _cancellationToken);
            }
            catch (InvalidMessageException ex)
            {
                _logger.Error(ex, $"Could not parse NetMQMessage properly; ignore: {ex}");
            }
            catch (Exception ex)
            {
                _logger.Error(
                    ex,
                    $"An unexpected exception occured during ReceiveMessage(): {ex}"
                );
            }
        }

        private void DoBroadcast(object sender, NetMQQueueEventArgs<Message> e)
        {
            Message msg = e.Queue.Dequeue();

            // FIXME Should replace with PUB/SUB model.
            try
            {
                _logger.Debug($"Broadcasting message [{msg}]");
                _logger.Debug($"Peers to broadcast : {_protocol.PeersToBroadcast.Count}");
                _protocol.PeersToBroadcast.ParallelForEachAsync(async peer =>
                {
                    await SendMessageAsync(peer, msg);
                });

                _logger.Debug($"[{msg}] broadcasting completed.");
            }
            catch (TimeoutException ex)
            {
                _logger.Error(ex, "TimeoutException occured.");
            }
            catch (Exception ex)
            {
                _logger.Error(
                    ex,
                    "An unexpected exception occured during DoBroadcast()"
                );
            }
        }

        private void DoReply(object sender, NetMQQueueEventArgs<Message> e)
        {
            Message msg = e.Queue.Dequeue();

            // FIXME: this works, but should be fixed.
            if (msg is Pong pong)
            {
                pong.TipIndex = _blockChain.Tip?.Index;
                msg = pong;
            }

            _logger.Debug($"Reply {msg} to {ByteUtil.Hex(msg.Identity)}...");
            NetMQMessage netMQMessage = msg.ToNetMQMessage(_privateKey, AsPeer);

            // FIXME The current timeout value(1 sec) is arbitrary.
            // We should make this configurable or fix it to an unneeded structure.
            if (_router.TrySendMultipartMessage(TimeSpan.FromSeconds(1), netMQMessage))
            {
                _logger.Debug($"Message[{msg}] replied.");
            }
            else
            {
                _logger.Debug($"Message[{msg}] replying failed.");
            }
        }

        private void CheckStarted()
        {
            if (!Running)
            {
                throw new NoSwarmContextException("Swarm hasn't started yet.");
            }
        }

        private string ToNetMQAddress(Peer peer)
        {
            if (peer == null)
            {
                throw new ArgumentNullException(nameof(peer));
            }

            return $"tcp://{peer.EndPoint.Host}:{peer.EndPoint.Port}";
        }

        private async Task CreatePermission(Peer peer)
        {
            IPAddress[] ips;
            if (peer.PublicIPAddress is null)
            {
                string peerHost = peer.EndPoint.Host;
                if (IPAddress.TryParse(peerHost, out IPAddress asIp))
                {
                    ips = new[] { asIp };
                }
                else
                {
                    ips = await Dns.GetHostAddressesAsync(peerHost);
                }
            }
            else
            {
                ips = new[] { peer.PublicIPAddress };
            }

            foreach (IPAddress ip in ips)
            {
                var ep = new IPEndPoint(ip, peer.EndPoint.Port);
                if (IPAddress.IsLoopback(ip))
                {
                    // This translation is only used in test case because a
                    // seed node exposes loopback address as public address to
                    // other node in test case
                    ep = await _turnClient.GetMappedAddressAsync();
                }

                await _turnClient.CreatePermissionAsync(ep);
            }
        }
    }
}
