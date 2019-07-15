using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using Libplanet.Crypto;
using Libplanet.Net.Protocols;
using Serilog;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Net
{
    public class ProtocolTest
    {
        private const int Timeout = 10 * 1000;

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
        }

        [Fact(Timeout = Timeout)]
        public void AddPeer()
        {
            Peer pa = new Peer(
                new PrivateKey().PublicKey,
                new DnsEndPoint("0.0.0.0", 1234));
            Peer pb = new Peer(
                new PrivateKey().PublicKey,
                new DnsEndPoint("0.0.0.0", 1234));
            Peer pc = new Peer(
                new PrivateKey().PublicKey,
                new DnsEndPoint("0.0.0.0", 1234));

            RoutingTable routing = new RoutingTable(pa, 1, 1, new Random());
            routing.AddPeer(pb);
            Peer candidate = routing.AddPeer(pc);

            List<Peer> peers = new List<Peer>();
            foreach (KBucket bucket in routing.NoneEmptyBuckets)
            {
                peers.AddRange(bucket.Peers);
            }

            Assert.DoesNotContain(pa, peers);
            Assert.Contains(pb, peers);
            Assert.DoesNotContain(pc, peers);
            Assert.Equal(pb, candidate);
        }

        [Fact(Timeout = Timeout)]
        public void FindNeighbour()
        {
            Peer pa = new Peer(
                new PrivateKey().PublicKey,
                new DnsEndPoint("0.0.0.0", 1234));
            Peer pb = new Peer(
                new PrivateKey().PublicKey,
                new DnsEndPoint("0.0.0.0", 1234));
            Peer pc = new Peer(
                new PrivateKey().PublicKey,
                new DnsEndPoint("0.0.0.0", 1234));

            RoutingTable routing = new RoutingTable(pa, 160, 16, new Random());
            routing.AddPeer(pb);
            routing.AddPeer(pc);

            List<Peer> neighbours = routing.Neighbours(pa, 10).ToList();

            Assert.DoesNotContain(pa, neighbours);
            Assert.Contains(pb, neighbours);
            Assert.Contains(pc, neighbours);
        }
    }
}
