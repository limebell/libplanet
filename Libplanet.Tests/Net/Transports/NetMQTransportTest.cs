#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Net;
using System.Threading.Tasks;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Messages;
using Libplanet.Net.Protocols;
using Libplanet.Net.Transports;
using NetMQ;
using NetMQ.Sockets;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Net.Transports
{
    public class NetMQTransportTest : TransportTest
    {
        public NetMQTransportTest(ITestOutputHelper testOutputHelper)
        {
            TransportConstructor = (
                    table,
                    privateKey,
                    appProtocolVersion,
                    trustedAppProtocolVersionSigners,
                    host,
                    listenPort,
                    iceServers,
                    differentAppProtocolVersionEncountered,
                    messageLifespan
                )
                => CreateNetMQTransport(
                    table,
                    privateKey,
                    appProtocolVersion,
                    trustedAppProtocolVersionSigners,
                    50,
                    host,
                    listenPort,
                    iceServers,
                    differentAppProtocolVersionEncountered,
                    messageLifespan);

            const string outputTemplate =
                "{Timestamp:HH:mm:ss:ffffff}[{ThreadId}] - {Message}";
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Verbose()
                .Enrich.WithThreadId()
                .WriteTo.TestOutput(testOutputHelper, outputTemplate: outputTemplate)
                .CreateLogger()
                .ForContext<TransportTest>();
            Logger = Log.ForContext<TransportTest>();
        }

        [SkippableFact(Timeout = Timeout)]
        public async Task MessageHistory()
        {
            var privateKey = new PrivateKey();
            var transportA = CreateNetMQTransport(privateKey);
            var transportB = CreateNetMQTransport();

            var tcs = new TaskCompletionSource<IEnumerable<Message>>();
            var list = new List<Message>();
            transportB.ProcessMessageHandler += (sender, message) =>
            {
                list.Add(message);

                if (list.Count == 2)
                {
                    tcs.SetResult(list);
                }
            };

            try
            {
                await InitializeAsync(transportA);
                await InitializeAsync(transportB);
                var boundPeer = (BoundPeer)transportB.AsPeer;
                var dealer = new DealerSocket(boundPeer.ToNetMQAddress());
                dealer.TrySendMultipartMessage(
                    TimeSpan.FromSeconds(10),
                    new Ping().ToNetMQMessage(
                        privateKey,
                        transportA.AsPeer,
                        DateTimeOffset.UtcNow,
                        default));
                dealer.TrySendMultipartMessage(
                    TimeSpan.FromSeconds(10),
                    new Pong().ToNetMQMessage(
                        privateKey,
                        transportA.AsPeer,
                        DateTimeOffset.UtcNow,
                        default));
                /*await transportA.SendMessageAsync(boundPeer, new Ping(), CancellationToken.None)
                await transportA.SendMessageAsync(boundPeer, new Pong(), CancellationToken.None)*/
                await tcs.Task;

                transportB.MessageHistory.TryDequeue(out var message1);
                transportB.MessageHistory.TryDequeue(out var message2);
                Assert.IsType<Ping>(message1);
                Assert.Equal(transportA.AsPeer, message1?.Remote);
                Assert.IsType<Pong>(message2);
                Assert.Equal(transportA.AsPeer, message2?.Remote);
            }
            finally
            {
                transportA.Dispose();
                transportB.Dispose();
            }
        }

        private NetMQTransport CreateNetMQTransport(
            PrivateKey? privateKey = null,
            int tableSize = 160,
            int bucketSize = 16,
            AppProtocolVersion appProtocolVersion = default,
            IImmutableSet<PublicKey>? trustedAppProtocolVersionSigners = null,
            int workers = 50,
            string? host = null,
            int? listenPort = null,
            IEnumerable<IceServer>? iceServers = null,
            DifferentAppProtocolVersionEncountered? differentAppProtocolVersionEncountered = null,
            TimeSpan? messageLifespan = null
        )
        {
            privateKey ??= new PrivateKey();
            host ??= IPAddress.Loopback.ToString();
            var table = new RoutingTable(privateKey.ToAddress(), tableSize, bucketSize);

            return new NetMQTransport(
                table,
                privateKey,
                appProtocolVersion,
                trustedAppProtocolVersionSigners,
                workers,
                host,
                listenPort,
                iceServers,
                differentAppProtocolVersionEncountered,
                messageLifespan);
        }

        private NetMQTransport CreateNetMQTransport(
            RoutingTable table,
            PrivateKey privateKey,
            AppProtocolVersion appProtocolVersion,
            IImmutableSet<PublicKey>? trustedAppProtocolVersionSigners,
            int workers,
            string host,
            int? listenPort,
            IEnumerable<IceServer> iceServers,
            DifferentAppProtocolVersionEncountered? differentAppProtocolVersionEncountered,
            TimeSpan? messageLifespan
        )
        {
            return new NetMQTransport(
                table,
                privateKey,
                appProtocolVersion,
                trustedAppProtocolVersionSigners,
                workers,
                host,
                listenPort,
                iceServers,
                differentAppProtocolVersionEncountered,
                messageLifespan);
        }
    }
}
