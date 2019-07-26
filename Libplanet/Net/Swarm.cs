using System;
using System.Collections;
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

        private static readonly TimeSpan ReplyTimeout =
            TimeSpan.FromMilliseconds(1000);

        private static readonly int MaxDealerCount = 10;

        private readonly BlockChain<T> _blockChain;
        private readonly PrivateKey _privateKey;
        private readonly RouterSocket _router;
        private readonly ConcurrentQueue<DealerSocket> _dealers;
        private readonly int _appProtocolVersion;

        private readonly TimeSpan _dialTimeout;
        private readonly AsyncLock _runningMutex;
        private readonly AsyncLock _blockSyncMutex;
        private readonly string _host;
        private readonly IList<IceServer> _iceServers;
        private readonly TimeSpan _linger;

        private readonly NetMQQueue<Message> _replyQueue;
        private readonly NetMQQueue<Message> _broadcastQueue;

        private readonly ILogger _logger;

#pragma warning disable
        internal IProtocol _protocol;
#pragma warning restore

        private TaskCompletionSource<object> _runningEvent;
        private int? _listenPort;
        private TurnClient _turnClient;
        private CancellationTokenSource _workerCancellationTokenSource;
        private CancellationToken _cancellationToken;
        private IPAddress _publicIPAddress;

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

            _dealers = new ConcurrentQueue<DealerSocket>();
            _router = new RouterSocket();
            _router.Options.RouterHandover = true;
            _replyQueue = new NetMQQueue<Message>();
            _broadcastQueue = new NetMQQueue<Message>();

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

        private event EventHandler<Message> MessageReceived;

        private event EventHandler<Peer> MessageTimeouted;

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

        internal ICollection<Peer> Peers => _protocol?.Peers;

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
                    if (_broadcastQueue.Any() || _replyQueue.Any())
                    {
                        await Task.Delay(_linger, cancellationToken);
                    }

                    if (_protocol != null)
                    {
                        MessageReceived -= _protocol.ReceiveMessage;
                        MessageTimeouted -= _protocol.Timeout;
                    }

                    _broadcastQueue.Dispose();
                    _replyQueue.Dispose();
                    _router.Dispose();

                    while (!_dealers.IsEmpty)
                    {
                        _dealers.TryDequeue(out DealerSocket dealer);
                        dealer.Dispose();
                    }

                    Running = false;
                }
            }

            _logger.Debug("Stopped.");
        }

        public async Task StartAsync(
            int millisecondsDistributeInterval = 1500,
            int millisecondsBroadcastTxInterval = 5000,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            await StartAsync(
                TimeSpan.FromMilliseconds(millisecondsDistributeInterval),
                TimeSpan.FromMilliseconds(millisecondsBroadcastTxInterval),
                cancellationToken
            );
        }

        public async Task StartAsync(
            TimeSpan distributeInterval,
            TimeSpan broadcastTxInterval,
            CancellationToken cancellationToken = default(CancellationToken))
        {
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

            var behindNAT = false;

            if (!(_turnClient is null))
            {
                _publicIPAddress = (await _turnClient.GetMappedAddressAsync())
                    .Address;

                if (await _turnClient.IsBehindNAT())
                {
                    behindNAT = true;
                }
            }

            if (behindNAT)
            {
                IPEndPoint turnEp = await _turnClient.AllocateRequestAsync(
                    TurnAllocationLifetime
                );
                EndPoint = new DnsEndPoint(
                    turnEp.Address.ToString(), turnEp.Port);
            }
            else
            {
                EndPoint = new DnsEndPoint(_host, _listenPort.Value);
            }

            try
            {
                _workerCancellationTokenSource = new CancellationTokenSource();
                CancellationToken workerCancellationToken =
                    CancellationTokenSource.CreateLinkedTokenSource(
                        _workerCancellationTokenSource.Token, cancellationToken
                    ).Token;
                _cancellationToken = workerCancellationToken;

                using (await _runningMutex.LockAsync())
                {
                    Running = true;

                    // FIXME: where this should be at?
                    // await PreloadAsync(cancellationToken: _cancellationToken);
                }

                _protocol = new KademliaProtocol<T>(
                    this,
                    _appProtocolVersion,
                    _cancellationToken,
                    _logger);
                MessageReceived += _protocol.ReceiveMessage;
                MessageTimeouted += _protocol.Timeout;

                var tasks = new List<Task>
                {
                    BroadcastMessageAsync(broadcastTxInterval, _cancellationToken),
                    ReceiveMessageAsync(TimeSpan.FromMilliseconds(100), _cancellationToken),
                    ReplyMessageAsync(TimeSpan.FromMilliseconds(100), _cancellationToken),
                    BroadcastTxAsync(TimeSpan.FromMilliseconds(100), _cancellationToken),
                };

                if (behindNAT)
                {
                    tasks.Add(BindingProxies(_cancellationToken));
                    tasks.Add(RefreshAllocate(_cancellationToken));
                    tasks.Add(RefreshPermissions(_cancellationToken));
                }

                await await Task.WhenAny(tasks);
            }
            catch (TaskCanceledException e)
            {
                _logger.Information(e, "Task was canceled.");
            }
            catch (Exception e)
            {
                _logger.Error(
                    e,
                    $"An unexpected exception occured during StartAsync() [{e.ToString()}]");
                throw;
            }
        }

        public async Task BootstrapAsync(IEnumerable<Peer> bootstrapPeers = null)
        {
            if (_protocol is null)
            {
                throw new SwarmException("Protocol is not ready");
            }

            if (!(bootstrapPeers is null))
            {
                try
                {
                    await _protocol.BootstrapAsync(bootstrapPeers.ToList());
                }
                catch (Exception e)
                {
                    throw e;
                }
            }
        }

        public void BroadcastBlocks(IEnumerable<Block<T>> blocks)
        {
            _logger.Debug("Trying to broadcast blocks...");
            var message = new BlockHashes(
                blocks.Select(b => b.Hash)
            );
            BroadcastMessage(message);
            _logger.Debug("Block broadcasting complete.");
        }

        /// <summary>
        /// Preemptively downloads blocks from registered <see cref="Peer"/>s.
        /// </summary>
        /// <param name="peer">
        /// A target peer to load blocks from.
        /// </param>
        /// <param name="progress">
        /// An instance that receives progress updates for block downloads.
        /// </param>
        /// <param name="cancellationToken">
        /// A cancellation token used to propagate notification that this
        /// operation should be canceled.
        /// </param>
        /// <returns>
        /// A task without value.
        /// You only can <c>await</c> until the method is completed.
        /// </returns>
        public async Task PreloadAsync(
            Peer peer = null,
            IProgress<BlockDownloadState> progress = null,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (peer is null)
            {
                ImmutableList<Peer> peers = _protocol.PeersToBroadcast;
                if (peers.Count == 0)
                {
                    return;
                }

                peer = peers[peers.Count - 1];
            }

            if (cancellationToken == default(CancellationToken))
            {
                cancellationToken = _cancellationToken;
            }

            await SyncBehindsBlocksFromPeersAsync(
                peer,
                progress,
                cancellationToken);
        }

        internal string Trace()
        {
            KademliaProtocol<T> kp = (KademliaProtocol<T>)_protocol;
            return kp?.Trace();
        }

        internal void BroadcastMessage(Message message)
        {
            if (Running)
            {
                _broadcastQueue.Enqueue(message);
            }
            else
            {
                throw new SwarmException("Swarm stopped... cannot broadcast message.");
            }
        }

        internal async Task<DealerSocket> GetDealerSocket(Peer peer)
        {
            if (!Running)
            {
                return null;
            }

            if (_turnClient != null)
            {
                await CreatePermission(peer);
            }

            while (_dealers.Count > MaxDealerCount)
            {
                _dealers.TryDequeue(out DealerSocket rdealer);
                _logger.Debug($"DealerSocket closed [{rdealer}]");
                rdealer.Dispose();
            }

            DealerSocket dealer = new DealerSocket();
            dealer.Options.Identity = Address.ToByteArray();

            return dealer;
        }

        internal async Task SendMessageAsync(Peer peer, Message message)
        {
            if (peer is null)
            {
                throw new ArgumentNullException(nameof(peer));
            }

            DealerSocket dealer = await GetDealerSocket(peer);

            try
            {
                string address = ToNetMQAddress(peer);

                dealer.Connect(address);

                _logger.Debug($"Trying to send [{message}] " +
                    $"to [{peer.Address.ToHex()}({address})]...");

                // FIXME: Switch this statement to async is probably the best
                await dealer.SendMultipartMessageAsync(
                    message.ToNetMQMessage(_privateKey, AsPeer),
                    cancellationToken: _cancellationToken);
                /*bool sent = dealer.TrySendMultipartMessage(
                    ReplyTimeout, message.ToNetMQMessage(_privateKey, AsPeer));

                if (!sent)
                {
                    throw new TimeoutException();
                }*/

                _logger.Debug($"[{message}] sent to [{peer.Address.ToHex()}({address})]");
                _dealers.Enqueue(dealer);
            }
            catch (TimeoutException)
            {
                dealer.Dispose();
                _logger.Debug("Timeout due to TimeoutException.");
                MessageTimeouted?.Invoke(this, peer);
            }
            catch (SocketException)
            {
                dealer.Dispose();
                _logger.Debug("Timeout due to SocketException.");
                MessageTimeouted?.Invoke(this, peer);
            }
            catch (IOException)
            {
                dealer.Dispose();
                throw;
            }
            catch (Exception e)
            {
                dealer.Dispose();
                _logger.Debug($"Unexpected exception during SendMessageAsync(). [{e.ToString()}]");
                throw;
            }
        }

        internal void ReplyMessage(Message message)
        {
            if (Running)
            {
                _replyQueue.Enqueue(message);
            }
            else
            {
                throw new SwarmException("Cannot reply message after swarm stopped.");
            }
        }

        // FIXME: Should deal with peer not found exception
        internal async Task<IEnumerable<HashDigest<SHA256>>> GetBlockHashesAsync(
                Peer peer,
                BlockLocator locator,
                HashDigest<SHA256>? stop,
                CancellationToken token = default(CancellationToken)
            )
        {
            DealerSocket dealer = await GetDealerSocket(peer);
            try
            {
                dealer.Connect(ToNetMQAddress(peer));
                var request = new GetBlockHashes(locator, stop);

                _logger.Debug($"Send GetBlockHashesAsync to [{peer.Address.ToHex()}]");
                dealer.SendMultipartMessage(request.ToNetMQMessage(_privateKey, AsPeer));

                NetMQMessage response = dealer.ReceiveMultipartMessage();
                _logger.Debug("Received BlockHashes");
                Message parsedMessage = Message.Parse(response, reply: true);

                if (parsedMessage is BlockHashes blockHashes)
                {
                    return blockHashes.Hashes;
                }
                else
                {
                    throw new InvalidMessageException(
                        $"The response of GetBlockHashes isn't BlockHashes. " +
                        $"but {parsedMessage}");
                }
            }
            catch (InvalidBlockDifficultyException ex)
            {
                _logger.Error("InvalidBlockDifficultyException occurred " +
                    $"during GetBlockHashesAsync() {ex}");
                throw;
            }
            catch (Exception ex)
            {
                _logger.Error("Unexpected exception occurred " +
                    $"during GetBlockHashesAsync() {ex}");
                throw;
            }
            finally
            {
                dealer.Dispose();
            }
        }

        internal IAsyncEnumerable<Block<T>> GetBlocksAsync(
            Peer peer,
            IEnumerable<HashDigest<SHA256>> blockHashes)
        {
            return new AsyncEnumerable<Block<T>>(async yield =>
            {
                DealerSocket dealer = await GetDealerSocket(peer);
                CancellationToken yieldToken = yield.CancellationToken;

                try
                {
                    dealer.Connect(ToNetMQAddress(peer));
                    var blockHashesAsArray =
                        blockHashes as HashDigest<SHA256>[] ??
                        blockHashes.ToArray();
                    var request = new GetBlocks(blockHashesAsArray);
                    await dealer.SendMultipartMessageAsync(
                        request.ToNetMQMessage(_privateKey, AsPeer),
                        cancellationToken: yieldToken);

                    int hashCount = blockHashesAsArray.Count();
                    _logger.Debug(
                        $"Required block count: {hashCount}. {yieldToken}");
                    while (hashCount > 0 && !yieldToken.IsCancellationRequested)
                    {
                        _logger.Debug("Receiving block...");
                        NetMQMessage response =
                        await dealer.ReceiveMultipartMessageAsync(
                            cancellationToken: yieldToken);
                        Message parsedMessage = Message.Parse(response, true);
                        if (parsedMessage is Messages.Blocks blockMessage)
                        {
                            foreach (byte[] payload in blockMessage.Payloads)
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
                catch (TimeoutException)
                {
                    _logger.Debug($"Timeout occured");
                    throw;
                }
                catch (Exception)
                {
                    _logger.Debug($"Unexpected exception occurred during GetBlocksAsync()");
                    throw;
                }
                finally
                {
                    dealer.Dispose();
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
                DealerSocket dealer = await GetDealerSocket(peer);

                dealer.Connect(ToNetMQAddress(peer));

                var txIdsAsArray = txIds as TxId[] ?? txIds.ToArray();
                var request = new GetTxs(txIdsAsArray);
                dealer.SendMultipartMessage(request.ToNetMQMessage(_privateKey, AsPeer));

                int hashCount = txIdsAsArray.Count();
                _logger.Debug($"Required tx count: {hashCount}.");
                while (hashCount > 0)
                {
                    _logger.Debug("Receiving tx...");
                    NetMQMessage response = dealer.ReceiveMultipartMessage();
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

                dealer.Dispose();
            });
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

        // change this into just take one peer, no length needed
        private async Task SyncBehindsBlocksFromPeersAsync(
            Peer peer,
            IProgress<BlockDownloadState> progress,
            CancellationToken cancellationToken)
        {
            if (peer != null)
            {
                BlockChain<T> synced = await SyncPreviousBlocksAsync(
                    peer,
                    null,
                    progress,
                    cancellationToken);
                if (!synced.Id.Equals(_blockChain.Id))
                {
                    _blockChain.Swap(synced);
                }
            }
        }

        private async Task RefreshAllocate(CancellationToken cancellationToken)
        {
            TimeSpan lifetime = TurnAllocationLifetime;
            while (!cancellationToken.IsCancellationRequested)
            {
                await Task.Delay(lifetime - TimeSpan.FromMinutes(1));
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

        private async Task BroadcastMessageAsync(
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
                            if (_broadcastQueue.Any())
                            {
                                NetMQQueueEventArgs<Message> args =
                                    new NetMQQueueEventArgs<Message>(_broadcastQueue);

                                DoBroadcast(this, args);
                            }
                        }, cancellationToken);
                }
                catch (TaskCanceledException)
                {
                    _logger.Debug("Task is cancelled during BroadcastMessageAsync().");
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        "An unexpected exception occured during BroadcastMessageAsync()");
                    throw;
                }
            }
        }

        private async Task ReceiveMessageAsync(
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
                            if (_router.HasIn)
                            {
                                NetMQSocketEventArgs args = new NetMQSocketEventArgs(_router);
                                ReceiveMessage(this, args);
                            }
                        }, cancellationToken);
                }
                catch (TaskCanceledException)
                {
                    _logger.Debug("Task is cancelled during ReceiveMessageAsync().");
                }
                catch (Exception e)
                {
                    _logger.Error(
                        e,
                        "An unexpected exception occured during ReceiveMessageAsync()");
                    throw;
                }
            }
        }

        private async Task ReplyMessageAsync(
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
                            if (_replyQueue.Any())
                            {
                                NetMQQueueEventArgs<Message> args =
                                    new NetMQQueueEventArgs<Message>(_replyQueue);
                                DoReply(this, args);
                            }
                        }, cancellationToken);
                }
                catch (TaskCanceledException)
                {
                    _logger.Debug("Task is cancelled during ReplyMessageAsync().");
                }
                catch (Exception e)
                {
                    _logger.Error(e, "An unexpected exception occured during ReplyMessageAsync()");
                    throw;
                }
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
                                var message = new TxIds(txIds);
                                BroadcastMessage(message);
                            }
                        }, cancellationToken);
                }
                catch (TaskCanceledException)
                {
                    _logger.Debug("Task Canceled");
                }
                catch (Exception e)
                {
                    _logger.Error(e, "An unexpected exception occured during BroadcastTxAsync()");
                    throw;
                }
            }
        }

        private async Task BroadcastBlockAsync(
            CancellationToken cancellationToken)
        {
            try
            {
                await Task.Run(
                    () =>
                    {
                        List<TxId> txIds = _blockChain
                            .GetStagedTransactionIds(true)
                            .ToList();

                        if (txIds.Any())
                        {
                            var message = new TxIds(txIds);
                            BroadcastMessage(message);
                        }
                    }, cancellationToken);
            }
            catch (Exception e)
            {
                _logger.Error(e, "An unexpected exception occured during BroadcastBlockAsync()");
                throw;
            }
        }

        private async Task ProcessMessageAsync(Message message)
        {
            _logger.Debug($"Message received [{message}] from [{message.Remote.Address.ToHex()}]");
            switch (message)
            {
                case Pong pong:
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

                        break;
                    }

                case GetBlockHashes getBlockHashes:
                    {
                        IEnumerable<HashDigest<SHA256>> hashes =
                            _blockChain.FindNextHashes(
                                getBlockHashes.Locator,
                                getBlockHashes.Stop);
                        var reply = new BlockHashes(hashes)
                        {
                            Identity = getBlockHashes.Identity,
                        };
                        ReplyMessage(reply);
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
                        await ProcessTxIds(txIds);
                        break;
                    }

                case BlockHashes blockHashes:
                    {
                        await ProcessBlockHashes(blockHashes);
                        break;
                    }
            }
        }

        private async Task ProcessBlockHashes(BlockHashes message)
        {
            Peer peer = message.Remote;

            _logger.Debug(
                $"Trying to GetBlocksAsync() " +
                $"(using {message.Hashes.Count()} hashes)");
            IAsyncEnumerable<Block<T>> fetched = GetBlocksAsync(
                peer,
                message.Hashes
            );

            List<Block<T>> blocks = await fetched.ToListAsync(
                _cancellationToken
            );
            _logger.Debug("GetBlocksAsync() complete.");

            try
            {
                using (await _blockSyncMutex.LockAsync(_cancellationToken))
                {
                    await AppendBlocksAsync(peer, blocks, _cancellationToken);
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
            Peer peer,
            HashDigest<SHA256>? stop,
            IProgress<BlockDownloadState> progress,
            CancellationToken cancellationToken)
        {
            // Fix the tip here because it may change while receiving the block
            // hashes.
            Block<T> tip = _blockChain.Tip;

            _logger.Debug("Trying to find branchpoint...");
            BlockLocator locator = _blockChain.GetBlockLocator();
            _logger.Debug($"Locator's count: {locator.Count()}");
            IEnumerable<HashDigest<SHA256>> hashes = (
                await GetBlockHashesAsync(
                    peer, locator, stop, cancellationToken)
            ).ToArray();

            if (!hashes.Any())
            {
                _logger.Debug(
                    $"Peer[{peer}] didn't return any hashes. " +
                    $"ignored.");
                return _blockChain;
            }

            HashDigest<SHA256> branchPoint = hashes.First();

            _logger.Debug(
                $"Branchpoint is " +
                $"{ByteUtil.Hex(branchPoint.ToByteArray())}"
            );

            BlockChain<T> synced;
            if (tip is null || branchPoint.Equals(tip.Hash))
            {
                _logger.Debug("it doesn't need fork.");
                synced = _blockChain;
            }

            // FIXME BlockChain.Blocks.ContainsKey() can be very
            // expensive.
            // we can omit this clause if assume every chain shares
            // same genesis block...
            else if (!_blockChain.Blocks.ContainsKey(branchPoint))
            {
                // Create a whole new chain because the branch point doesn't exist on
                // the current chain.
                synced = new BlockChain<T>(_blockChain.Policy, _blockChain.Store, Guid.NewGuid());
            }
            else
            {
                _logger.Debug("Forking needed. trying to fork...");
                synced = _blockChain.Fork(branchPoint);
                _logger.Debug("Forking complete. ");
            }

            _logger.Debug("Trying to fill up previous blocks...");

            int retry = 3;
            while (true)
            {
                try
                {
                    await FillBlocksAsync(
                        peer, synced, stop, progress, cancellationToken);
                    break;
                }

                // We can't recover with TaskCanceledException and
                // ObjectDisposedException. so just re-throw them.
                catch (ObjectDisposedException)
                {
                    throw;
                }
                catch (TaskCanceledException)
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
                    peer,
                    oldest.PreviousHash,
                    null,
                    cancellationToken);
                _logger.Debug("Filled up. trying to concatenation...");

                foreach (Block<T> block in blocks)
                {
                    previousBlocks.Append(block);
                }

                _logger.Debug("Sync is done.");
                if (!previousBlocks.Id.Equals(_blockChain.Id))
                {
                    _logger.Debug("trying to swapping chain...");
                    _blockChain.Swap(previousBlocks);
                    _logger.Debug("Swapping complete");
                }

                Message msg = new BlockHashes(blocks.Select(b => b.Hash));
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
            CancellationToken cancellationToken)
        {
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
                int received = 0;
                _logger.Debug(
                    $"Required hashes (count: {hashCount}). " +
                    $"(tip: {blockChain.Tip?.Hash})"
                );

                await GetBlocksAsync(peer, hashesAsArray)
                    .ForEachAsync(
                    block =>
                    {
                        _logger.Debug(
                            $"Trying to append block[{block.Hash}]...");

                        // As actions in this block should be rendered
                        // after actions in stale blocks are unrendered,
                        // given the `render: false` option here.
                        blockChain.Append(
                            block,
                            DateTimeOffset.UtcNow,
                            render: false
                        );
                        received++;
                        progress?.Report(new BlockDownloadState
                        {
                            TotalBlockCount = hashCount,
                            ReceivedBlockCount = received,
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

        private async Task ProcessTxIds(TxIds message)
        {
            _logger.Debug("Trying to fetch txs...");

            IEnumerable<TxId> unknownTxIds = message.Ids
                .Where(id => !_blockChain.Transactions.ContainsKey(id));

            if (!unknownTxIds.Any())
            {
                _logger.Debug("No txs to require.");
                return;
            }

            Peer peer = message.Remote;

            IAsyncEnumerable<Transaction<T>> fetched = GetTxsAsync(
                peer, unknownTxIds, _cancellationToken);
            List<Transaction<T>> txs = await fetched.ToListAsync(_cancellationToken);
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

        private bool IsUnknownPeer(Peer sender)
        {
            Peer existing = Peers
                .FirstOrDefault(p => sender.PublicKey.Equals(p.PublicKey));

            if (existing is null)
            {
                return true;
            }

            if (!existing.EndPoint.Equals(sender.EndPoint))
            {
                // Clear outdated existing peer.
                Peers.Remove(existing);

                return true;
            }

            return false;
        }

        private bool IsDifferentProtocolVersion(Peer sender)
        {
            return sender.AppProtocolVersion != _appProtocolVersion;
        }

        private void ReceiveMessage(object sender, NetMQSocketEventArgs e)
        {
            try
            {
                NetMQMessage raw = e.Socket.ReceiveMultipartMessage();

                _logger.Verbose($"The raw message[{raw}] has received.");
                Message message = Message.Parse(raw, reply: false);
                _logger.Debug($"The message[{message}] has parsed.");

                // it's still async because some method it relies are async yet.
#pragma warning disable CS4014 // 이 호출을 대기하지 않으므로 호출이 완료되기 전에 현재 메서드가 계속 실행됩니다.
                ProcessMessageAsync(message);
#pragma warning restore CS4014 // 이 호출을 대기하지 않으므로 호출이 완료되기 전에 현재 메서드가 계속 실행됩니다.
                MessageReceived?.Invoke(this, message);
            }
            catch (InvalidMessageException ex)
            {
                _logger.Error(ex, "Could not parse NetMQMessage properly; ignore.");
            }
            catch (Exception ex)
            {
                _logger.Error(ex, "An unexpected exception occured during ReceiveMessage.");
                throw;
            }
        }

        private void DoBroadcast(object sender, NetMQQueueEventArgs<Message> e)
        {
            Message msg = e.Queue.Dequeue();

            if (_workerCancellationTokenSource.IsCancellationRequested)
            {
                return;
            }

            // FIXME Should replace with PUB/SUB model.
            try
            {
                _logger.Debug($"Broadcasting message [{msg}]");
                Task.WhenAll(
                    _protocol.PeersToBroadcast.Select(s =>
                        Task.Run(() => SendMessageAsync(s, msg))
                    )
                ).Wait();
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

            _logger.Debug($"broadcasted: {msg}");
        }

        private void DoReply(object sender, NetMQQueueEventArgs<Message> e)
        {
            Message msg = e.Queue.Dequeue();
            _logger.Debug($"Reply {msg} to {ByteUtil.Hex(msg.Identity)}...");
            NetMQMessage netMQMessage = msg.ToNetMQMessage(_privateKey, AsPeer);
            _router.SendMultipartMessage(netMQMessage);
            _logger.Debug($"Replied.");
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
            IPAddress[] ips = null;
            if (peer.PublicIPAddress is null)
            {
                string peerHost = peer.EndPoint.Host;
                if (IPAddress.TryParse(peerHost, out IPAddress asIp))
                {
                    ips = new[] { asIp };
                }
                else
                {
                    try
                    {
                        ips = Dns.GetHostAddresses(peerHost);
                    }
                    catch (Exception e)
                    {
                        _logger.Debug($"gethost: {e}");
                    }
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
