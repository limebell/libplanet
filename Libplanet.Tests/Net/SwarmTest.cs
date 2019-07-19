using System;
using System.Collections.Async;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Blockchain;
using Libplanet.Blockchain.Policies;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Libplanet.Tests.Common.Action;
using Libplanet.Tests.Store;
using Libplanet.Tx;
using NetMQ;
using NetMQ.Sockets;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Net
{
    public class SwarmTest : IDisposable
    {
        private const int Count = 10;
        private const int Timeout = 60 * 1000;
        private const int DisposeTimeout = 5 * 1000;

        private readonly FileStoreFixture[] _fx;

        private readonly BlockChain<DumbAction>[] _blockchains;

        static SwarmTest()
        {
            NetMQConfig.MaxSockets = 1048576;
        }

        public SwarmTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss}[@{SwarmId}][{ThreadId}] - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Debug()
                .Enrich.WithThreadId()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<SwarmTest>();

            var policy = new BlockPolicy<DumbAction>();
            _fx = new FileStoreFixture[Count];
            _blockchains = new BlockChain<DumbAction>[Count];
            for (int i = 0; i < Count; i++)
            {
                _fx[i] = new FileStoreFixture();
                _blockchains[i] = new BlockChain<DumbAction>(policy, _fx[i].Store);
            }
        }

        public void Dispose()
        {
            for (int i = 0; i < Count; i++)
            {
                _fx[i].Dispose();
            }

            if (!(Type.GetType("Mono.Runtime") is null))
            {
                NetMQConfig.Cleanup(false);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task CanNotStartTwice()
        {
            Swarm<DumbAction> swarm = new Swarm<DumbAction>(
                    _blockchains[0],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());

            Task t = await Task.WhenAny(
                swarm.StartAsync(),
                swarm.StartAsync());

            Assert.True(swarm.Running);
            Assert.True(t.IsFaulted);
            Assert.IsType<SwarmException>(t.Exception.InnerException);

            await swarm.StopAsync();
        }

        [Fact(Timeout = Timeout)]
        public async Task StopAsync()
        {
            Swarm<DumbAction> swarm = new Swarm<DumbAction>(
                    _blockchains[0],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            BlockChain<DumbAction> chain = _blockchains[0];

            await swarm.StopAsync();
            var task = await StartAsync(swarm);

            Assert.True(swarm.Running);
            await swarm.StopAsync();

            Assert.False(swarm.Running);

            Assert.False(task.IsFaulted);
        }

        [Fact(Timeout = Timeout)]
        public async Task CanWaitForRunning()
        {
            Swarm<DumbAction> swarm = new Swarm<DumbAction>(
                    _blockchains[0],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            BlockChain<DumbAction> chain = _blockchains[0];

            Assert.False(swarm.Running);

            Task consumerTask = Task.Run(
                async () =>
                {
                    await swarm.WaitForRunningAsync();
                    Assert.True(swarm.Running);
                }
            );

            Task producerTask = Task.Run(async () =>
            {
                await swarm.StartAsync();
            });

            await consumerTask;
            Assert.True(swarm.Running);

            await swarm.StopAsync();
            Assert.False(swarm.Running);
        }

        [Fact(Timeout = Timeout)]
        public async Task Ping()
        {
            Swarm<DumbAction> swarmA = new Swarm<DumbAction>(
                    _blockchains[0],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            Swarm<DumbAction> swarmB = new Swarm<DumbAction>(
                    _blockchains[1],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            Swarm<DumbAction> swarmC = new Swarm<DumbAction>(
                    _blockchains[2],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

                KademliaProtocol<DumbAction> kp =
                    (KademliaProtocol<DumbAction>)swarmA._protocol;

                await Task.WhenAll(
                    kp.PingAsync(swarmB.AsPeer),
                    kp.PingAsync(swarmC.AsPeer));

                await Task.Delay(1500);
            }
            finally
            {
                await swarmA.StopAsync();
                await swarmB.StopAsync();
                await swarmC.StopAsync();
            }

            Assert.Contains(swarmA.AsPeer, swarmB.Peers);
            Assert.Contains(swarmB.AsPeer, swarmA.Peers);
            Assert.Contains(swarmA.AsPeer, swarmC.Peers);
            Assert.Contains(swarmC.AsPeer, swarmA.Peers);
        }

        [Fact(Timeout = Timeout)]
        public async Task PingToClosedPeer()
        {
            Swarm<DumbAction> swarmA = new Swarm<DumbAction>(
                    _blockchains[0],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            Swarm<DumbAction> swarmB = new Swarm<DumbAction>(
                    _blockchains[1],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            Swarm<DumbAction> swarmC = new Swarm<DumbAction>(
                    _blockchains[2],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

                KademliaProtocol<DumbAction> kp =
                    (KademliaProtocol<DumbAction>)swarmA._protocol;

                Peer peer = swarmC.AsPeer;
                await kp.PingAsync(swarmB.AsPeer);
                await kp.PingAsync(peer);
                await Task.Delay(3000);

                Assert.Contains(swarmB.AsPeer, swarmA.Peers);
                Assert.Contains(peer, swarmA.Peers);

                await swarmC.StopAsync();
                await kp.PingAsync(peer);
                await Task.Delay(3000);
                await kp.PingAsync(swarmB.AsPeer);
                await Task.Delay(3000);

                Assert.Contains(swarmB.AsPeer, swarmA.Peers);
                Assert.DoesNotContain(peer, swarmA.Peers);
            }
            finally
            {
                await swarmA.StopAsync();
                await swarmB.StopAsync();
                if (swarmC.Running)
                {
                    await swarmC.StopAsync();
                }
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BootstrapSingle()
        {
            Swarm<DumbAction> swarmA = new Swarm<DumbAction>(
                       _blockchains[0],
                       new PrivateKey(),
                       appProtocolVersion: 1,
                       host: IPAddress.Loopback.ToString());
            Swarm<DumbAction> swarmB = new Swarm<DumbAction>(
                    _blockchains[1],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await swarmB.BootstrapAsync(new List<Peer> { swarmA.AsPeer });
                await Task.Delay(100);
            }
            finally
            {
                await swarmA.StopAsync();
                await swarmB.StopAsync();
            }

            Log.Debug($"Swarm A has peer: {swarmA.Peers.Count}");
            Log.Debug($"Swarm B has peer: {swarmB.Peers.Count}");

            Assert.Equal(1, swarmA.Peers.Count);
            Assert.Equal(1, swarmB.Peers.Count);
        }

        [Fact(Timeout = Timeout)]
        public async Task BootstrapTwo()
        {
            Swarm<DumbAction> swarmA = new Swarm<DumbAction>(
                    _blockchains[0],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            Swarm<DumbAction> swarmB = new Swarm<DumbAction>(
                    _blockchains[1],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            Swarm<DumbAction> swarmC = new Swarm<DumbAction>(
                    _blockchains[2],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

                await swarmB.BootstrapAsync(new List<Peer> { swarmA.AsPeer });
                await Task.Delay(500);

                await swarmC.BootstrapAsync(new List<Peer> { swarmA.AsPeer });
                await Task.Delay(500);
            }
            finally
            {
                await swarmA.StopAsync();
                await swarmB.StopAsync();
                await swarmC.StopAsync();
            }

            Log.Debug($"Swarm A has peer: {swarmA.Peers.Count}");
            Log.Debug($"Swarm B has peer: {swarmB.Peers.Count}");
            Log.Debug($"Swarm C has peer: {swarmC.Peers.Count}");

            Assert.True(swarmA.Peers.Contains(swarmB.AsPeer), "case1");
            Assert.True(swarmA.Peers.Contains(swarmC.AsPeer), "case2");
            Assert.True(swarmB.Peers.Contains(swarmA.AsPeer), "case3");
            Assert.True(swarmB.Peers.Contains(swarmC.AsPeer), "case4");
            Assert.True(swarmC.Peers.Contains(swarmA.AsPeer), "case5");
            Assert.True(swarmC.Peers.Contains(swarmB.AsPeer), "case6");
        }

        [Fact(Timeout = 2 * Timeout)]
        public async Task BootstrapMany()
        {
            int size = 10;

            Assert.True(size <= Count);
            List<Swarm<DumbAction>> swarms = new List<Swarm<DumbAction>>();
            for (int i = 0; i < size; i++)
            {
                swarms.Add(
                    new Swarm<DumbAction>(
                    _blockchains[i],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString()));
            }

            try
            {
                await Task.WhenAll(swarms.Take(size).Select(s => StartAsync(s)));

                for (int i = 1; i < size; i++)
                {
                    await swarms[i].BootstrapAsync(new List<Peer> { swarms[0].AsPeer });
                    await Task.Delay(1000);
                }
            }
            finally
            {
                for (int i = 0; i < size; i++)
                {
                    await swarms[i].StopAsync();
                }
            }

            for (int i = 0; i < size; i++)
            {
                string peerList = string.Empty;
                for (int j = 0; j < size; j++)
                {
                    if (swarms[i].Peers.Contains(swarms[j].AsPeer))
                    {
                        Assert.NotEqual(i, j);
                        peerList += j.ToString() + ", ";
                    }
                }

                Log.Debug($"Swarm [{i}] has peer: {swarms[i].Peers.Count}");
                Log.Debug($"Which are : {peerList.TrimEnd(new char[] { ' ', ',' })}");
            }

            string whatttt = string.Empty;
            foreach (Peer peer in swarms[size - 1].Peers)
            {
                whatttt += $"[{peer.Address.ToHex()}]";
            }

            Log.Debug($"swarm {size - 1} contains {whatttt}");

            Assert.Equal(size - 1, swarms[size - 1].Peers.Count);
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastWhileMining()
        {
            Swarm<DumbAction> swarmA = new Swarm<DumbAction>(
                    _blockchains[0],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            Swarm<DumbAction> swarmB = new Swarm<DumbAction>(
                    _blockchains[1],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];

            Task CreateMiner(
                Swarm<DumbAction> swarm,
                BlockChain<DumbAction> chain,
                int delay,
                CancellationToken cancellationToken
            )
            {
                return Task.Run(async () =>
                {
                    while (!cancellationToken.IsCancellationRequested)
                    {
                        var block = chain.MineBlock(_fx[0].Address1);
                        Log.Debug(
                            $"Block mined. " +
                            $"[Swarm: {swarm.Address}, Block: {block.Hash}]");
                        swarm.BroadcastBlocks(new[] { block });
                        await Task.Delay(delay);
                    }

                    swarm.BroadcastBlocks(new[] { chain.Last() });
                    Log.Debug("Mining complete.");
                });
            }

            var minerCanceller = new CancellationTokenSource();
            Task miningA = CreateMiner(swarmA, chainA, 5000, minerCanceller.Token);
            Task miningB = CreateMiner(swarmB, chainB, 8000, minerCanceller.Token);

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                KademliaProtocol<DumbAction> kp = (KademliaProtocol<DumbAction>)swarmA._protocol;
                await kp.PingAsync(swarmB.AsPeer);

                await Task.Delay(10000);
                minerCanceller.Cancel();

                await Task.WhenAll(miningA, miningB);

                await Task.Delay(5000);
            }
            finally
            {
                await swarmA.StopAsync();
                await swarmB.StopAsync();
            }

            Log.Debug($"chainA: {string.Join(",", chainA)}");
            Log.Debug($"chainB: {string.Join(",", chainB)}");

            Assert.Subset(
                chainA.AsEnumerable().ToHashSet(),
                chainB.AsEnumerable().ToHashSet());
        }

        [Fact(Timeout = Timeout)]
        public async Task HandleDifferentAppProtocolVersion()
        {
            var isCalled = false;

            void GameHandler(object sender, DifferentProtocolVersionEventArgs e)
            {
                isCalled = true;
            }

            BlockChain<DumbAction> chain = _blockchains[0];

            var a = new Swarm<DumbAction>(
                chain,
                new PrivateKey(),
                host: IPAddress.Loopback.ToString(),
                appProtocolVersion: 2,
                differentVersionPeerEncountered: GameHandler);
            var b = new Swarm<DumbAction>(
                chain,
                new PrivateKey(),
                host: IPAddress.Loopback.ToString(),
                appProtocolVersion: 3);

            try
            {
                await StartAsync(a);
                await StartAsync(b);

                await a.BootstrapAsync(new[] { b.AsPeer });
                await Task.Delay(5000);

                Assert.True(isCalled);
            }
            finally
            {
                await a.StopAsync();
                await b.StopAsync();
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task Cancel()
        {
            Swarm<DumbAction> swarm = new Swarm<DumbAction>(
                    _blockchains[0],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            var cts = new CancellationTokenSource();

            Task task = await StartAsync(
                swarm,
                cancellationToken: cts.Token
            );

            cts.Cancel();
            await task;
        }

        [Fact(Timeout = Timeout)]
        public async Task CanGetBlock()
        {
            Swarm<DumbAction> swarmA = new Swarm<DumbAction>(
                    _blockchains[0],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            Swarm<DumbAction> swarmB = new Swarm<DumbAction>(
                    _blockchains[1],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];

            Block<DumbAction> genesis = chainA.MineBlock(_fx[0].Address1);
            chainB.Append(genesis); // chainA and chainB shares genesis block.
            Block<DumbAction> block1 = chainA.MineBlock(_fx[0].Address1);
            Block<DumbAction> block2 = chainA.MineBlock(_fx[0].Address1);

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await swarmB.BootstrapAsync(new[] { swarmA.AsPeer });

                IEnumerable<HashDigest<SHA256>> inventories1 =
                    await swarmB.GetBlockHashesAsync(
                        swarmA.AsPeer,
                        new BlockLocator(new[] { genesis.Hash }),
                        null);
                Assert.Equal(
                    new[] { genesis.Hash, block1.Hash, block2.Hash },
                    inventories1);

                IEnumerable<HashDigest<SHA256>> inventories2 =
                    await swarmB.GetBlockHashesAsync(
                        swarmA.AsPeer,
                        new BlockLocator(new[] { genesis.Hash }),
                        block1.Hash);
                Assert.Equal(
                    new[] { genesis.Hash, block1.Hash },
                    inventories2);

                List<Block<DumbAction>> receivedBlocks =
                    await swarmB.GetBlocksAsync(
                        swarmA.AsPeer, inventories1
                    ).ToListAsync();

                Assert.Equal(
                    new[] { genesis, block1, block2 },
                    receivedBlocks);
            }
            finally
            {
                await Task.WhenAll(
                    swarmA.StopAsync(),
                    swarmB.StopAsync());
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task GetMultipleBlocksAtOnce()
        {
            var privateKey = new PrivateKey();

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];

            Swarm<DumbAction> swarmA = new Swarm<DumbAction>(
                    chainA,
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            Swarm<DumbAction> swarmB = new Swarm<DumbAction>(
                    chainB,
                    privateKey,
                    1,
                    host: IPAddress.Loopback.ToString());

            Block<DumbAction> genesis = chainA.MineBlock(_fx[0].Address1);
            chainB.Append(genesis); // chainA and chainB shares genesis block.
            chainA.MineBlock(_fx[0].Address1);
            chainA.MineBlock(_fx[0].Address1);

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                var peer = swarmA.AsPeer;

                await swarmB.BootstrapAsync(new[] { peer });

                IEnumerable<HashDigest<SHA256>> hashes =
                    await swarmB.GetBlockHashesAsync(
                        peer,
                        new BlockLocator(new[] { genesis.Hash }),
                        null);

                var netMQAddress = $"tcp://{peer.EndPoint.Host}:{peer.EndPoint.Port}";
                using (var socket = new DealerSocket(netMQAddress))
                {
                    var request = new GetBlocks(hashes, 2);
                    await socket.SendMultipartMessageAsync(
                        request.ToNetMQMessage(privateKey, swarmB.AsPeer));

                    NetMQMessage response = await socket.ReceiveMultipartMessageAsync();
                    Message parsedMessage = Message.Parse(response, true);
                    Libplanet.Net.Messages.Blocks blockMessage =
                        (Libplanet.Net.Messages.Blocks)parsedMessage;

                    Assert.Equal(2, blockMessage.Payloads.Count);

                    response = await socket.ReceiveMultipartMessageAsync();
                    parsedMessage = Message.Parse(response, true);
                    blockMessage = (Libplanet.Net.Messages.Blocks)parsedMessage;

                    Assert.Single(blockMessage.Payloads);
                }
            }
            finally
            {
                await Task.WhenAll(
                    swarmA.StopAsync(),
                    swarmB.StopAsync());
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task GetTx()
        {
            Swarm<DumbAction> swarmA = new Swarm<DumbAction>(
                    _blockchains[0],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            Swarm<DumbAction> swarmB = new Swarm<DumbAction>(
                    _blockchains[1],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());

            BlockChain<DumbAction> chainB = _blockchains[1];

            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                0,
                new PrivateKey(),
                new DumbAction[0]
            );
            chainB.StageTransactions(
                new Dictionary<Transaction<DumbAction>, bool> { { tx, true } });
            chainB.MineBlock(_fx[0].Address1);

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await swarmA.BootstrapAsync(new[] { swarmB.AsPeer });

                List<Transaction<DumbAction>> txs =
                    await swarmA.GetTxsAsync(
                        swarmB.AsPeer, new[] { tx.Id }
                    ).ToListAsync();

                Assert.Equal(new[] { tx }, txs);
            }
            finally
            {
                await Task.WhenAll(
                    swarmA.StopAsync(),
                    swarmB.StopAsync());
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task TxStagedNotToBroadcast()
        {
            Swarm<DumbAction> swarmA = new Swarm<DumbAction>(
                    _blockchains[0],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            Swarm<DumbAction> swarmB = new Swarm<DumbAction>(
                    _blockchains[1],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];

            Transaction<DumbAction> txA = chainA.MakeTransaction(
                new PrivateKey(),
                new DumbAction[] { },
                broadcast: true);
            Transaction<DumbAction> txB = chainA.MakeTransaction(
                new PrivateKey(),
                new DumbAction[] { },
                broadcast: false);

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await swarmA.BootstrapAsync(new[] { swarmB.AsPeer });
                await swarmB.TxReceived.WaitAsync();
                Assert.Equal(txA, chainB.Transactions[txA.Id]);
                Assert.False(chainB.Transactions.ContainsKey(txB.Id));
            }
            finally
            {
                await Task.WhenAll(
                    swarmA.StopAsync(),
                    swarmB.StopAsync());
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastTxAsync()
        {
            Swarm<DumbAction> swarmA = new Swarm<DumbAction>(
                    _blockchains[0],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            Swarm<DumbAction> swarmB = new Swarm<DumbAction>(
                    _blockchains[1],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            Swarm<DumbAction> swarmC = new Swarm<DumbAction>(
                    _blockchains[2],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];
            BlockChain<DumbAction> chainC = _blockchains[2];

            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                0,
                new PrivateKey(),
                new DumbAction[] { }
            );

            chainA.StageTransactions(
                new Dictionary<Transaction<DumbAction>, bool> { { tx, true } });

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

                // Broadcast tx swarmA to swarmB
                await swarmB.BootstrapAsync(new[] { swarmA.AsPeer });
                await swarmB.TxReceived.WaitAsync();
                Assert.Equal(tx, chainB.Transactions[tx.Id]);

                await swarmA.StopAsync();

                // Re-Broadcast received tx swarmB to swarmC
                await swarmC.BootstrapAsync(new[] { swarmB.AsPeer });
                await swarmC.TxReceived.WaitAsync();
                Assert.Equal(tx, chainC.Transactions[tx.Id]);
            }
            finally
            {
                await Task.WhenAll(
                    swarmA.StopAsync(),
                    swarmB.StopAsync(),
                    swarmC.StopAsync());
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BroadcastTxMultiAsync()
        {
            int size = 10;

            Assert.True(size <= Count);

            List<Swarm<DumbAction>> swarms = new List<Swarm<DumbAction>>();
            for (int i = 0; i < size; i++)
            {
                swarms.Add(new Swarm<DumbAction>(
                    _blockchains[i],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString()));
            }

            Transaction<DumbAction> tx = Transaction<DumbAction>.Create(
                0,
                new PrivateKey(),
                new DumbAction[] { }
            );

            _blockchains[0].StageTransactions(
                new Dictionary<Transaction<DumbAction>, bool> { { tx, true } });

            try
            {
                await Task.WhenAll(swarms.Take(size).Select(s => StartAsync(s)));
                await Task.WhenAll(swarms.Skip(1).Take(size - 1)
                    .Select(s => Task.Run(() => s.BootstrapAsync(
                        new List<Peer> { swarms[0].AsPeer }).Wait())));

                await Task.Delay(1000);

                for (int i = 0; i < size; i++)
                {
                    Log.Debug($"{swarms[i].Trace()}");
                }

                await Task.Delay(10000);

                for (int i = 1; i < size; i++)
                {
                    Assert.Equal(tx, _blockchains[i].Transactions[tx.Id]);
                }
            }
            finally
            {
                await Task.WhenAll(swarms.Take(size).Select(s => s.StopAsync()));
            }

            for (int i = 0; i < size; i++)
            {
                Log.Debug($"{swarms[i].Trace()}");
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task CanBroadcastBlock()
        {
            Swarm<DumbAction> swarmA = new Swarm<DumbAction>(
                    _blockchains[0],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            Swarm<DumbAction> swarmB = new Swarm<DumbAction>(
                    _blockchains[1],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            Swarm<DumbAction> swarmC = new Swarm<DumbAction>(
                    _blockchains[2],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];
            BlockChain<DumbAction> chainC = _blockchains[2];

            // chainA, chainB and chainC shares genesis block.
            Block<DumbAction> genesis = chainA.MineBlock(_fx[0].Address1);
            chainB.Append(genesis);
            chainC.Append(genesis);

            foreach (int i in Enumerable.Range(0, 10))
            {
                chainA.MineBlock(_fx[0].Address1);
                await Task.Delay(100);
            }

            foreach (int i in Enumerable.Range(0, 3))
            {
                chainB.MineBlock(_fx[1].Address1);
                await Task.Delay(100);
            }

            try
            {
                await StartAsync(swarmA);
                await StartAsync(swarmB);
                await StartAsync(swarmC);

                await swarmB.BootstrapAsync(new[] { swarmA.AsPeer });
                await swarmC.BootstrapAsync(new[] { swarmA.AsPeer });

                swarmB.BroadcastBlocks(new[] { chainB.Last() });

                /*await swarmC.BlockReceived.WaitAsync();
                await swarmA.BlockReceived.WaitAsync();*/
                await Task.Delay(10000);

                // chainC may or may not be changed, because swarmC may not
                // be directly connected to swarmB.
                // chainB doesn't applied to chainA since chainB is shorter
                // than chainA.
                // this cannot be tested if preload is done in bootstrap...
                Assert.NotEqual(chainB.AsEnumerable(), chainA);

                swarmA.BroadcastBlocks(new[] { chainA.Last() });

                /*await swarmB.BlockReceived.WaitAsync();
                await swarmC.BlockReceived.WaitAsync();*/
                await Task.Delay(10000);

                Assert.Equal(chainA.AsEnumerable(), chainB);
                Assert.Equal(chainA.AsEnumerable(), chainC);
            }
            finally
            {
                await Task.WhenAll(
                    swarmA.StopAsync(),
                    swarmB.StopAsync(),
                    swarmC.StopAsync());
            }

            for (int i = 0; i < 3; i++)
            {
                Log.Debug($"{swarmA.Trace()}");
                Log.Debug($"{swarmB.Trace()}");
                Log.Debug($"{swarmC.Trace()}");
            }
        }

        [Fact(Timeout = Timeout)]
        public void ThrowArgumentExceptionInConstructor()
        {
            Assert.Throws<ArgumentNullException>(() =>
            {
                new Swarm<DumbAction>(null, new PrivateKey(), 1);
            });

            Assert.Throws<ArgumentNullException>(() =>
            {
                new Swarm<DumbAction>(_blockchains[0], null, 1);
            });

            // Swarm<DumbAction> needs host or iceServers.
            Assert.Throws<ArgumentException>(() =>
            {
                new Swarm<DumbAction>(_blockchains[0], new PrivateKey(), 1);
            });

            // Swarm<DumbAction> needs host or iceServers.
            Assert.Throws<ArgumentException>(() =>
            {
                new Swarm<DumbAction>(
                    _blockchains[0],
                    new PrivateKey(),
                    1,
                    iceServers: new IceServer[] { });
            });
        }

        [Fact(Timeout = Timeout)]
        public void CanResolveEndPoint()
        {
            var expected = new DnsEndPoint("1.2.3.4", 5678);
            Swarm<DumbAction> s = new Swarm<DumbAction>(
                _blockchains[0],
                new PrivateKey(),
                1,
                host: "1.2.3.4",
                listenPort: 5678);

            Assert.Equal(expected, s.EndPoint);
            Assert.Equal(expected, s.AsPeer.EndPoint);
        }

        [Fact(Timeout = Timeout)]
        public async Task CanStopGracefullyWhileStarting()
        {
            Swarm<DumbAction> a = new Swarm<DumbAction>(
                    _blockchains[0],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            Task t = await StartAsync(a);
            await Task.WhenAll(a.StopAsync(), t);
        }

        [Fact(Timeout = Timeout)]
        public async Task AsPeerThrowSwarmExceptionWhenUnbound()
        {
            Swarm<DumbAction> swarm = new Swarm<DumbAction>(
                _blockchains[0],
                new PrivateKey(),
                1,
                host: IPAddress.Loopback.ToString()
            );
            Assert.Throws<SwarmException>(() => swarm.AsPeer);

            await StartAsync(swarm);
            Assert.Equal(swarm.EndPoint, swarm.AsPeer.EndPoint);
        }

        [Trait("RequireTurnServer", "true")]
        [FactOnlyTurnAvailable(Timeout = Timeout)]
        public async Task ExchangeWithIceServer()
        {
            Uri turnUrl = FactOnlyTurnAvailable.TurnUri;
            string username = FactOnlyTurnAvailable.Username;
            string password = FactOnlyTurnAvailable.Password;

            IEnumerable<IceServer> iceServers = new[]
            {
                new IceServer(
                    urls: new[] { turnUrl },
                    username: username,
                    credential: password),
            };

            var seed = new Swarm<DumbAction>(
                _blockchains[0],
                new PrivateKey(),
                1,
                host: "localhost");
            var swarmA = new Swarm<DumbAction>(
                _blockchains[1],
                new PrivateKey(),
                1,
                iceServers: iceServers);
            var swarmB = new Swarm<DumbAction>(
                _blockchains[2],
                new PrivateKey(),
                1,
                iceServers: iceServers);

            try
            {
                await StartAsync(seed);
                await StartAsync(swarmA);
                await StartAsync(swarmB);

                await swarmA.BootstrapAsync(new[] { seed.AsPeer });
                await swarmB.BootstrapAsync(new[] { seed.AsPeer });

                await Task.Delay(2000);

                Assert.True(seed.Peers.Contains(swarmA.AsPeer), "case1");
                Assert.True(seed.Peers.Contains(swarmB.AsPeer), "case2");
                Assert.True(swarmA.Peers.Contains(seed.AsPeer), "case3");
                Assert.True(swarmA.Peers.Contains(swarmB.AsPeer), "case4");
                Assert.True(swarmB.Peers.Contains(seed.AsPeer), "case5");
                Assert.True(swarmB.Peers.Contains(swarmA.AsPeer), "case6");
            }
            finally
            {
                await Task.WhenAll(
                    seed.StopAsync(),
                    swarmA.StopAsync(),
                    swarmB.StopAsync());
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task InitialBlockDownload()
        {
            Swarm<DumbAction> minerSwarm = new Swarm<DumbAction>(
                    _blockchains[0],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            Swarm<DumbAction> receiverSwarm = new Swarm<DumbAction>(
                    _blockchains[1],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());

            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

            foreach (int i in Enumerable.Range(0, 10))
            {
                minerChain.MineBlock(_fx[0].Address1);
            }

            try
            {
                await StartAsync(minerSwarm);
                await StartAsync(receiverSwarm);

                await receiverSwarm.BootstrapAsync(new[] { minerSwarm.AsPeer });
                await receiverSwarm.PreloadAsync();

                await Task.Delay(TimeSpan.FromSeconds(3));

                Assert.Equal(minerChain.AsEnumerable(), receiverChain.AsEnumerable());
            }
            finally
            {
                await Task.WhenAll(
                    minerSwarm.StopAsync(),
                    receiverSwarm.StopAsync());
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task Preload()
        {
            Swarm<DumbAction> minerSwarm = new Swarm<DumbAction>(
                    _blockchains[0],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            Swarm<DumbAction> receiverSwarm = new Swarm<DumbAction>(
                    _blockchains[1],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());

            BlockChain<DumbAction> minerChain = _blockchains[0];
            BlockChain<DumbAction> receiverChain = _blockchains[1];

            foreach (int i in Enumerable.Range(0, 10))
            {
                minerChain.MineBlock(_fx[0].Address1);
            }

            var actualStates = new List<BlockDownloadState>();
            var progress = new Progress<BlockDownloadState>(state =>
            {
                lock (actualStates)
                {
                    actualStates.Add(state);
                }
            });

            try
            {
                await StartAsync(minerSwarm);
                await StartAsync(receiverSwarm);

                await receiverSwarm.BootstrapAsync(new[] { minerSwarm.AsPeer });
                await receiverSwarm.PreloadAsync(minerSwarm.AsPeer, progress);

                Assert.Equal(minerChain.AsEnumerable(), receiverChain.AsEnumerable());

                IEnumerable<BlockDownloadState> expectedStates = minerChain.Select((b, i) =>
                {
                    return new BlockDownloadState()
                    {
                        ReceivedBlockHash = b.Hash,
                        TotalBlockCount = 10,
                        ReceivedBlockCount = i + 1,
                    };
                });

                Assert.Equal(expectedStates, actualStates);
            }
            finally
            {
                await Task.WhenAll(
                    minerSwarm.StopAsync(),
                    receiverSwarm.StopAsync());
            }
        }

        private async Task<Task> StartAsync(
            Swarm<DumbAction> swarm,
            CancellationToken cancellationToken = default
        )
        {
            Task task = swarm.StartAsync(
                200,
                200,
                cancellationToken
            );
            await swarm.WaitForRunningAsync();
            return task;
        }
    }
}
