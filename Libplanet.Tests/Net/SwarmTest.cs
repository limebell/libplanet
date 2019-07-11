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
        private const int Count = 20;
        private const int Timeout = 60 * 1000;
        private const int DisposeTimeout = 5 * 1000;

        private readonly FileStoreFixture[] _fx;

        private readonly BlockChain<DumbAction>[] _blockchains;
        private readonly Swarm<DumbAction>[] _swarms;

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
            _swarms = new Swarm<DumbAction>[Count];
            for (int i = 0; i < Count; i++)
            {
                _fx[i] = new FileStoreFixture();
                _blockchains[i] = new BlockChain<DumbAction>(policy, _fx[i].Store);
                _swarms[i] = new Swarm<DumbAction>(
                    _blockchains[i],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString());
            }
        }

        public void Dispose()
        {
            for (int i = 0; i < Count; i++)
            {
                _fx[i].Dispose();
            }

            foreach (Swarm<DumbAction> s in _swarms)
            {
                if (s.Running)
                {
                    s.StopAsync().Wait(DisposeTimeout);
                }
            }

            NetMQConfig.Cleanup(false);
        }

        [Fact(Timeout = Timeout)]
        public async Task CanNotStartTwice()
        {
            Swarm<DumbAction> swarm = _swarms[0];

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
            Swarm<DumbAction> swarm = _swarms[0];
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
            Swarm<DumbAction> swarm = _swarms[0];
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
            int size = 20;

            Assert.True(size <= Count);

            try
            {
                // await _swarms.Take(size).ParallelForEachAsync(async s => await StartAsync(s));
                await Task.WhenAll(_swarms.Take(size).Select(s => StartAsync(s)));
                KademliaProtocol<DumbAction> kp =
                    (KademliaProtocol<DumbAction>)_swarms[0]._protocol;

                await Task.WhenAll(_swarms.Skip(1).Take(size - 1)
                    .Select(s => Task.Run(() => kp.PingAsync(s.AsPeer).Wait())));

                await Task.Delay(5000);
            }
            finally
            {
                for (int i = 0; i < size; i++)
                {
                    await _swarms[i].StopAsync();
                }
            }

            for (int i = 1; i < size; i++)
            {
                Log.Debug(
                    $"Swarm {i} contains peer 0? [{_swarms[i].Peers.Contains(_swarms[0].AsPeer)}]");
                Log.Debug(
                    $"Swarm 0 contains peer {i}? [{_swarms[0].Peers.Contains(_swarms[i].AsPeer)}]");
            }

            for (int i = 1; i < size; i++)
            {
                Assert.Contains(_swarms[0].AsPeer, _swarms[i].Peers);
                Assert.Contains(_swarms[i].AsPeer, _swarms[0].Peers);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task PingToClosedPeer()
        {
            Assert.True(2 <= Count);

            try
            {
                await Task.WhenAll(_swarms.Take(2).Select(s => StartAsync(s)));

                KademliaProtocol<DumbAction> kp =
                    (KademliaProtocol<DumbAction>)_swarms[0]._protocol;

                Peer peer = _swarms[1].AsPeer;
                await kp.PingAsync(peer);
                await Task.Delay(300);

                Assert.Contains(peer, _swarms[0].Peers);

                await _swarms[1].StopAsync();
                await kp.PingAsync(peer);
                await Task.Delay(1500);

                Assert.DoesNotContain(peer, _swarms[0].Peers);
            }
            finally
            {
                await _swarms[0].StopAsync();
                if (_swarms[1].Running)
                {
                    await _swarms[1].StopAsync();
                }
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task BootstrapSingle()
        {
            Swarm<DumbAction> a = _swarms[0];
            Swarm<DumbAction> b = _swarms[1];

            try
            {
                await StartAsync(a);
                await StartAsync(b);

                await b.BootstrapAsync(new List<Peer> { a.AsPeer });
                await Task.Delay(100);
            }
            finally
            {
                await a.StopAsync();
                await b.StopAsync();
            }

            Log.Debug($"Swarm A has peer: {a.Peers.Count}");
            Log.Debug($"Swarm B has peer: {b.Peers.Count}");

            Assert.Equal(1, a.Peers.Count);
            Assert.Equal(1, b.Peers.Count);
        }

        [Fact(Timeout = Timeout)]
        public async Task BootstrapTwo()
        {
            Swarm<DumbAction> a = _swarms[0];
            Swarm<DumbAction> b = _swarms[1];
            Swarm<DumbAction> c = _swarms[2];

            try
            {
                await StartAsync(a);
                await StartAsync(b);
                await StartAsync(c);

                await b.BootstrapAsync(new List<Peer> { a.AsPeer });
                await Task.Delay(500);

                await c.BootstrapAsync(new List<Peer> { a.AsPeer });
                await Task.Delay(500);
            }
            finally
            {
                await a.StopAsync();
                await b.StopAsync();
                await c.StopAsync();
            }

            Log.Debug($"Swarm A has peer: {a.Peers.Count}");
            Log.Debug($"Swarm B has peer: {b.Peers.Count}");
            Log.Debug($"Swarm C has peer: {c.Peers.Count}");

            Assert.Equal(2, a.Peers.Count);
            Assert.Equal(2, b.Peers.Count);
            Assert.Equal(2, c.Peers.Count);
        }

        [Fact(Timeout = 2 * Timeout)]
        public async Task BootstrapMany()
        {
            int size = 20;

            Assert.True(size <= Count);

            try
            {
                await Task.WhenAll(_swarms.Take(size).Select(s => StartAsync(s)));

                await Task.WhenAll(_swarms.Skip(1).Take(size - 2)
                    .Select(s => Task.Run(() => s.BootstrapAsync(
                        new List<Peer> { _swarms[0].AsPeer }).Wait())));

                await Task.Delay(1000);
                await _swarms[size - 1].BootstrapAsync(new List<Peer> { _swarms[0].AsPeer });
                await Task.Delay(1000);
            }
            finally
            {
                for (int i = 0; i < size; i++)
                {
                    await _swarms[i].StopAsync();
                }
            }

            for (int i = 0; i < size; i++)
            {
                string peerList = string.Empty;
                for (int j = 0; j < size; j++)
                {
                    if (_swarms[i].Peers.Contains(_swarms[j].AsPeer))
                    {
                        Assert.NotEqual(i, j);
                        peerList += j.ToString() + ", ";
                    }
                }

                Log.Debug($"Swarm [{i}] has peer: {_swarms[i].Peers.Count}");
                Log.Debug($"Which are : {peerList.TrimEnd(new char[] { ' ', ',' })}");
            }

            string whatttt = string.Empty;
            foreach (Peer peer in _swarms[9].Peers)
            {
                whatttt += $"[{peer.Address.ToHex()}]";
            }

            Log.Debug($"swarm9 contains {whatttt}");

            Assert.Equal(size - 1, _swarms[size - 1].Peers.Count);
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
