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
    public class ProtocolTest : IDisposable
    {
        private const int Timeout = 60 * 1000;
        private const int DisposeTimeout = 5 * 1000;

        private readonly FileStoreFixture _fx1;
        private readonly FileStoreFixture _fx2;
        private readonly FileStoreFixture _fx3;

        private readonly List<BlockChain<DumbAction>> _blockchains;
        private readonly List<Swarm<DumbAction>> _swarms;

        public ProtocolTest(ITestOutputHelper output)
        {
            const string outputTemplate =
                "{Timestamp:HH:mm:ss}[@{SwarmId}][{ThreadId}] - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Debug()
                .Enrich.WithThreadId()
                .WriteTo.TestOutput(output, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<ProtocolTest>();

            var policy = new BlockPolicy<DumbAction>();
            _fx1 = new FileStoreFixture();
            _fx2 = new FileStoreFixture();
            _fx3 = new FileStoreFixture();

            _blockchains = new List<BlockChain<DumbAction>>
            {
                new BlockChain<DumbAction>(policy, _fx1.Store),
                new BlockChain<DumbAction>(policy, _fx2.Store),
                new BlockChain<DumbAction>(policy, _fx3.Store),
            };

            _swarms = new List<Swarm<DumbAction>>
            {
                new Swarm<DumbAction>(
                    _blockchains[0],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString()),
                new Swarm<DumbAction>(
                    _blockchains[1],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString()),
                new Swarm<DumbAction>(
                    _blockchains[2],
                    new PrivateKey(),
                    appProtocolVersion: 1,
                    host: IPAddress.Loopback.ToString()),
            };
        }

        public void Dispose()
        {
            _fx1.Dispose();
            _fx2.Dispose();
            _fx3.Dispose();

            foreach (Swarm<DumbAction> s in _swarms)
            {
                s.StopAsync().Wait(DisposeTimeout);
            }

            if (!(Type.GetType("Mono.Runtime") is null))
            {
                NetMQConfig.Cleanup(false);
            }
        }

        [Fact(Timeout = Timeout)]
        public async Task Bootstrap()
        {
            Swarm<DumbAction> a = _swarms[0];
            Swarm<DumbAction> b = _swarms[1];
            Swarm<DumbAction> c = _swarms[2];

            BlockChain<DumbAction> chainA = _blockchains[0];
            BlockChain<DumbAction> chainB = _blockchains[1];
            BlockChain<DumbAction> chainC = _blockchains[2];

            try
            {
                await StartAsync(a);
                await StartAsync(b);
                await StartAsync(c);

                Assert.NotNull(a.AsPeer);

                await b.BootstrapAsync(new List<Peer> { a.AsPeer });

                // await c.BootstrapAsync(new List<Peer> { a.AsPeer });
                await Task.Delay(10000);
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
