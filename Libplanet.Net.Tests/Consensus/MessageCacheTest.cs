using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Net;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;
using Libplanet.Net.Messages;
using Libplanet.Tests.Store;
using Xunit;

namespace Libplanet.Net.Tests.Consensus
{
    public class MessageCacheTest
    {
        [Fact]
        public void Constructor()
        {
            Assert.Throws<ArgumentOutOfRangeException>("len", () => new MessageCache(-1, 3));
            Assert.Throws<ArgumentOutOfRangeException>("len", () => new MessageCache(0, 3));
            Assert.Throws<ArgumentOutOfRangeException>("gossip", () => new MessageCache(3, -1));
            Assert.Throws<ArgumentOutOfRangeException>("gossip", () => new MessageCache(3, 0));
            Assert.Throws<ArgumentOutOfRangeException>("gossip", () => new MessageCache(3, 4));
            _ = new MessageCache(3, 3);
        }

        [Fact]
        public void Put()
        {
            var cache = new MessageCache(3, 3);
            var msg = new PingMsg();
            cache.Put(msg);
            Assert.Throws<ArgumentException>("message", () => cache.Put(msg));
        }

        [Fact]
        public void Get()
        {
            var cache = new MessageCache(3, 3);
            var identity = TestUtils.GetRandomBytes(1);
            var messageId = TestUtils.GetRandomBytes(MessageId.Size);
            var pk = new PrivateKey();
            var boundPeer = new BoundPeer(
                pk.PublicKey,
                new DnsEndPoint("0.0.0.0", 1234));
            var version =
                new AppProtocolVersion(1, null, ImmutableArray<byte>.Empty, pk.ToAddress());
            var time = DateTimeOffset.UtcNow;
            // Had to use HaveMessage for testing the persistent dataFrame.
            var msg = new HaveMessage(new[] { messageId })
            {
                Identity = identity,
                Remote = boundPeer,
                Timestamp = time,
                Version = version,
            };
            Assert.Throws<KeyNotFoundException>(() => cache.Get(msg.Id));
            cache.Put(msg);
            var ret = cache.Get(msg.Id);
            Assert.NotEqual(ret, msg);

            // Base Message data is removed
            Assert.Null(ret.Identity);
            Assert.Null(ret.Remote);
            Assert.Equal(DateTimeOffset.MinValue, ret.Timestamp);
            Assert.Equal(default, ret.Version);

            // Message data is persistent
            Assert.Equal(msg.Type, ret.Type);
            Assert.Equal(msg.Ids, ((HaveMessage)ret).Ids);
        }

        [Fact]
        public void GetGossipIds_Shift()
        {
            MemoryStoreFixture fx = new MemoryStoreFixture();
            var cache = new MessageCache(2, 1);
            var key = new PrivateKey();
            var msg0 = TestUtils.CreateConsensusPropose(fx.Block1, key, 0, 0);
            var msg1 = TestUtils.CreateConsensusPropose(fx.Block1, key, 0, 1);
            var msg2 = TestUtils.CreateConsensusPropose(fx.Block1, key, 0, 2);
            cache.Put(msg0);
            cache.Put(msg1);
            var ids = cache.GetGossipIds();
            Assert.Equal(2, ids.Length);

            // NOTE: For linux-mono-build compatibility.
            Assert.Equal(
                new HashSet<MessageId>(new[] { msg0.Id, msg1.Id }),
                new HashSet<MessageId>(ids));
            Assert.Equal(msg0, cache.Get(msg0.Id));
            Assert.Equal(msg1, cache.Get(msg1.Id));

            cache.Shift();
            cache.Put(msg2);
            ids = cache.GetGossipIds();
            Assert.Single(ids);
            Assert.Equal(msg2.Id, ids[0]);
            Assert.Equal(msg0, cache.Get(msg0.Id));
            Assert.Equal(msg1, cache.Get(msg1.Id));
            Assert.Equal(msg2, cache.Get(msg2.Id));

            cache.Shift();
            ids = cache.GetGossipIds();
            Assert.Empty(ids);
            Assert.Throws<KeyNotFoundException>(() => cache.Get(msg0.Id));
            Assert.Throws<KeyNotFoundException>(() => cache.Get(msg1.Id));
            Assert.Equal(msg2, cache.Get(msg2.Id));

            cache.Shift();
            ids = cache.GetGossipIds();
            Assert.Empty(ids);
            Assert.Throws<KeyNotFoundException>(() => cache.Get(msg0.Id));
            Assert.Throws<KeyNotFoundException>(() => cache.Get(msg1.Id));
            Assert.Throws<KeyNotFoundException>(() => cache.Get(msg2.Id));
        }
    }
}