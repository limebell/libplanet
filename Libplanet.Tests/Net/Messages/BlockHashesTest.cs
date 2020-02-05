using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using Libplanet.Crypto;
using Libplanet.Net;
using Libplanet.Net.Messages;
using NetMQ;
using Xunit;

namespace Libplanet.Tests.Net.Messages
{
    public class BlockHashesTest
    {
        [Fact]
        public void Constructor()
        {
            Assert.Throws<ArgumentNullException>(() =>
                new BlockHashes(null, new[] { default(HashDigest<SHA256>) })
            );
            Assert.Throws<ArgumentException>(() =>
                new BlockHashes(123, new HashDigest<SHA256>[0])
            );
        }

        [Fact]
        public void DataFrames()
        {
            HashDigest<SHA256>[] blockHashes = GenerateRandomBlockHashes(100L).ToArray();
            var msg = new BlockHashes(123, blockHashes);
            Assert.Equal(123, msg.StartIndex);
            Assert.Equal(blockHashes, msg.Hashes);
            var privKey = new PrivateKey();
            Peer peer = new BoundPeer(privKey.PublicKey, new DnsEndPoint("0.0.0.0", 1234), 0);
            NetMQFrame[] frames =
                msg.ToNetMQMessage(privKey, peer).Skip(Message.HeaderSize).ToArray();
            var restored = new BlockHashes(frames);
            Assert.Equal(msg.StartIndex, restored.StartIndex);
            Assert.Equal(msg.Hashes, restored.Hashes);
        }

        private static IEnumerable<HashDigest<SHA256>> GenerateRandomBlockHashes(long count)
        {
            var random = new Random();
            var buffer = new byte[HashDigest<SHA256>.Size];
            for (long i = 0; i < count; i++)
            {
                random.NextBytes(buffer);
                yield return new HashDigest<SHA256>(buffer);
            }
        }
    }
}
