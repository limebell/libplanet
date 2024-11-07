using System.Collections.Concurrent;
using System.Text;
using Bencodex;
using Libplanet.Blockchain;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Node.Options;
using Libplanet.Node.Protocols;
using Libplanet.Types.Blocks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Multiformats.Address;
using Nethermind.Libp2p.Core;
using Nethermind.Libp2p.Protocols;
using Nethermind.Libp2p.Protocols.Pubsub;

namespace Libplanet.Node.Services;

public class PubsubSwarm
{
    private readonly BlockChain _blockChain;
    private readonly PrivateKey _privateKey;
    private readonly bool _proposer;
    private readonly IMessageChannel _channel;
    private readonly IPeerFactory _peerFactory;
    private readonly PubsubRouter _router;
    private readonly MDnsDiscoveryProtocol _discoveryProtocol;
    private readonly TimeSpan _blockInterval;
    private readonly ILogger<PubsubSwarm> _logger;
    private readonly ConcurrentDictionary<Multiaddress, IRemotePeer> _peers;

    private ILocalPeer _localPeer;
    private Multiaddress? _listenerAddress;
    private ITopic? _topic;

    public PubsubSwarm(
        IServiceProvider serviceProvider,
        IBlockChainService blockChainService,
        ILogger<PubsubSwarm> logger,
        IMessageChannel messageChannel,
        IOptions<PubsubSwarmOptions> pubsubSwarmOptions)
    {
        _blockChain = blockChainService.BlockChain;
        var options = pubsubSwarmOptions.Value;
        _privateKey = PrivateKey.FromString(options.PrivateKey);
        _proposer = options.Proposer;
        _channel = messageChannel;

        _peerFactory = serviceProvider.GetService<IPeerFactory>()!;
        _router = serviceProvider.GetService<PubsubRouter>()!;
        _discoveryProtocol = serviceProvider.GetService<MDnsDiscoveryProtocol>()!;

        _blockInterval = TimeSpan.FromMilliseconds(options.BlockInterval);
        _logger = logger;
        _peers = new ConcurrentDictionary<Multiaddress, IRemotePeer>();
        _logger.LogInformation(
            "PubsubSwarmService initialized. Interval: {BlockInterval}ms",
            _blockInterval);
    }

    public async Task StartAsync(CancellationToken stoppingToken)
    {
        _channel.OnMessageReceived += OnMessageReceived;
        _blockChain.TipChanged += OnTipChanged;
        var tasks = new List<Task>
        {
            TransportTask(stoppingToken),
        };

        if (_proposer)
        {
            tasks.Add(BlockChainTask(stoppingToken));
        }

        await Task.WhenAny(tasks);
    }

    private async Task BlockChainTask(CancellationToken cancellationToken)
    {
        while (!cancellationToken.IsCancellationRequested)
        {
            _logger.LogInformation("Proposing a new block...");
            var tip = _blockChain.Tip;
            var block = _blockChain.ProposeBlock(
                _privateKey,
                _blockChain.GetBlockCommit(tip.Hash));
            _blockChain.Append(
                block,
                _blockChain.GetBlockCommit(tip.Hash),
                validate: false);

            await Task.Delay(_blockInterval, cancellationToken);
        }
    }

    private async Task TransportTask(CancellationToken cancellationToken)
    {
        Identity localPeerIdentity = new();
        string addr = $"/ip4/0.0.0.0/tcp/0/p2p/{localPeerIdentity.PeerId}";
        _localPeer = _peerFactory.Create(localPeerIdentity, Multiaddress.Decode(addr));

        _topic = _router.GetTopic("blockchain:broadcast");
        _topic.OnMessage += bytes =>
        {
            int addressLength = BitConverter.ToInt32(bytes[..4]);
            Multiaddress sender = Multiaddress.Decode(
                Encoding.UTF8.GetString(bytes[4..(4 + addressLength)]));
            byte[] msg = bytes[(4 + addressLength)..];
            _logger.LogTrace(
                "Received message {Message}",
                msg.Aggregate(string.Empty, (s, b) => s + b));
            HandleMessage(sender, msg, _ => { });
        };

        IListener listener = await _localPeer.ListenAsync(addr, cancellationToken);
        _listenerAddress = listener.Address;

        _ = _discoveryProtocol.DiscoverAsync(_localPeer.Address, token: cancellationToken);
        _ = _router.RunAsync(_localPeer, token: cancellationToken);

        _logger.LogInformation("Listener started at {Address}", _listenerAddress);

        listener.OnConnection += remotePeer =>
        {
            _logger.LogInformation("A peer connected {Remote}", remotePeer.Address);
            return Task.CompletedTask;
        };
        cancellationToken.Register((_, _) => { listener.DisconnectAsync(); }, this);

        await listener;
    }

    private void OnTipChanged(object? e, (Block OldTip, Block NewTip) args)
    {
        BroadcastMessage(
            MessageContentCodec.Serialize(
                new BlockHeaderMsg(_blockChain.Genesis.Hash, args.NewTip.Header)));
    }

    private void BroadcastMessage(byte[] msg)
    {
        if (_listenerAddress is not { } listenerAddress)
        {
            _logger.LogError("Cannot broadcast message before initialize");
            return;
        }

        _logger.LogTrace(
            "Publish Message: {Message}",
            msg.Aggregate(string.Empty, (s, b) => s + b));

        // NOTE: Use ToString instead of ToBytes because it has bug
        byte[] listenerAddressBytes = Encoding.UTF8.GetBytes(listenerAddress.ToString());
        _topic?.Publish(BitConverter.GetBytes(listenerAddressBytes.Length)
            .Concat(listenerAddressBytes)
            .Concat(msg).ToArray());
    }

    private void OnMessageReceived(
        object? e,
        (Multiaddress Sender, byte[] Message, Action<byte[]> Callback) arg)
    {
        HandleMessage(arg.Sender, arg.Message, arg.Callback);
    }

    private async Task SendMessage(Multiaddress target, byte[] msg)
    {
        if (_localPeer is not { } localPeer)
        {
            return;
        }

        if (!_peers.TryGetValue(target, out _))
        {
            try
            {
                Console.WriteLine("Dialing {0}", target);
                IRemotePeer remotePeer = await localPeer.DialAsync(target);
                _peers.TryAdd(target, remotePeer);
                Console.WriteLine("Dialing {0} complete", target);
                _ = remotePeer.DialAsync<PingPongProtocol>()
                    .ContinueWith(_ => remotePeer.DisconnectAsync());
            }
            catch (Exception e)
            {
                // Continue only when duplicated connection?
                Console.WriteLine("Error occurred during SendMessageAsync: {0}", e);
            }
        }

        _channel.SendMessage(target, msg);
    }

    private void HandleMessage(Multiaddress sender, byte[] message, Action<byte[]> callback)
    {
        // Sender may be inaccurate. It works correctly when receiving a broadcasted message
        var messageContent = MessageContentCodec.Deserialize(message);
        var codec = new Codec();
        switch (messageContent)
        {
            case GetBlockHashesMsg getBlockHashesMsg:
                _logger.LogInformation("Received GetBlockHashesMsg {@Message}", getBlockHashesMsg);
                _blockChain.FindNextHashes(
                    getBlockHashesMsg.Locator,
                    getBlockHashesMsg.Stop
                ).Deconstruct(
                    out long? offset,
                    out IReadOnlyList<BlockHash> hashes
                );
                callback(MessageContentCodec.Serialize(new BlockHashesMsg(offset, hashes)));
                break;

            case BlockHashesMsg blockHashesMsg:
                _logger.LogInformation("Received BlockHashesMsg {@Message}", blockHashesMsg);
                _logger.LogInformation(
                    "Required {Count} blocks ({@Hashes})",
                    blockHashesMsg.Hashes.Count(),
                    blockHashesMsg.Hashes);
                callback(MessageContentCodec.Serialize(new GetBlocksMsg(blockHashesMsg.Hashes)));
                break;

            case GetBlocksMsg getBlocksMsg:
                _logger.LogInformation("Received GetBlocksMsg {@Message}", getBlocksMsg);
                _logger.LogInformation(
                    "Sending {Count} blocks with chunkSize {ChunkSize} ({@Hashes})",
                    getBlocksMsg.BlockHashes.Count(),
                    getBlocksMsg.ChunkSize,
                    getBlocksMsg.BlockHashes);
                var payloads = new List<byte[]>();
                BlocksMsg response;
                foreach (BlockHash hash in getBlocksMsg.BlockHashes)
                {
                    if (_blockChain[hash] is { } block)
                    {
                        byte[] blockPayload = codec.Encode(block.MarshalBlock());
                        payloads.Add(blockPayload);
                        byte[] commitPayload = _blockChain.GetBlockCommit(block.Hash) is { } commit
                            ? codec.Encode(commit.Bencoded)
                            : [];
                        _logger.LogInformation(
                            "BlockCommit of block {Block} is {BlockCommit}",
                            block,
                            commitPayload);
                        payloads.Add(commitPayload);
                    }
                    else
                    {
                        _logger.LogError("Cannot find block of hash {Hash}", hash);
                    }

                    if (payloads.Count / 2 == getBlocksMsg.ChunkSize)
                    {
                        response = new BlocksMsg(payloads);
                        _logger.LogInformation(
                            "Returning {Count} blocks",
                            response.Payloads.Count / 2);
                        callback(MessageContentCodec.Serialize(response));
                        payloads.Clear();
                    }
                }

                if (payloads.Count > 0)
                {
                    response = new BlocksMsg(payloads);
                    _logger.LogInformation(
                        "Returning {Count} blocks",
                        response.Payloads.Count / 2);
                    callback(MessageContentCodec.Serialize(response));
                }

                break;

            case BlocksMsg blocksMsg:
                _logger.LogInformation("Received BlocksMsg {@Message}", blocksMsg);
                for (int i = 0; i < blocksMsg.Payloads.Count; i += 2)
                {
                    byte[] blockPayload = blocksMsg.Payloads[i];
                    byte[] commitPayload = blocksMsg.Payloads[i + 1];
                    Block block = BlockMarshaler.UnmarshalBlock(
                        (Bencodex.Types.Dictionary)codec.Decode(blockPayload));
                    BlockCommit? commit = commitPayload.Length == 0
                        ? null
                        : new BlockCommit(codec.Decode(commitPayload));

                    _logger.LogInformation("Appending block {Block}", block);
                    try
                    {
                        _blockChain.Append(block, commit, validate: false);
                    }
                    catch (Exception e)
                    {
                        _logger.LogError(
                            "Error occurred during Appending block {Block} {E}",
                            block,
                            e);
                    }
                }

                break;

            case BlockHeaderMsg blockHeaderMsg:
                _logger.LogInformation("Received BlockHeaderMsg {@Message}", blockHeaderMsg);
                ProcessBlockHeader(sender, blockHeaderMsg);

                break;

            default:
                _logger.LogError("Received unexpected message {@Message}", message);
                break;
        }
    }

    private void ProcessBlockHeader(Multiaddress remote, BlockHeaderMsg message)
    {
        if (!message.GenesisHash.Equals(_blockChain.Genesis.Hash))
        {
            _logger.LogError(
                "{MessageType} message was sent from a peer {Peer} with " +
                "a different genesis block {Hash}",
                remote,
                nameof(BlockHeaderMsg),
                message.GenesisHash
            );
            return;
        }

        BlockHeader header;
        try
        {
            header = message.GetHeader();
        }
        catch (InvalidBlockException ibe)
        {
            _logger.LogError(
                ibe,
                "Received header #{BlockIndex} {BlockHash} is invalid",
                message.HeaderHash,
                message.HeaderIndex
            );
            return;
        }

        _logger.LogInformation(
            "Received {MessageName} #{ReceivedIndex} {ReceivedHash} from peer {Peer}",
            nameof(BlockHeader),
            header.Index,
            header.Hash,
            remote);

        if (message.HeaderIndex == _blockChain.Tip.Index + 1)
        {
            _ = SendMessage(
                remote,
                MessageContentCodec.Serialize(
                    new GetBlocksMsg([message.HeaderHash], 1)));
        }
        else if (message.HeaderIndex > _blockChain.Tip.Index)
        {
            _ = SendMessage(
                remote,
                MessageContentCodec.Serialize(
                    new GetBlockHashesMsg(_blockChain.GetBlockLocator(), header.Hash)));
        }
        else
        {
            _logger.LogTrace(
                "Discarding received header #{ReceivedIndex} {ReceivedHash} " +
                "as it is not needed for the current chain with tip #{TipIndex} {TipHash}",
                header.Index,
                header.Hash,
                _blockChain.Tip.Index,
                _blockChain.Tip.Hash);
        }
    }
}
