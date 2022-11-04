using System.Linq;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Xunit;
using Xunit.Abstractions;

namespace Libplanet.Tests.Blocks
{
    public class BlockCommitExtensionsTest
    {
        private readonly ITestOutputHelper _output;

        public BlockCommitExtensionsTest(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public void HasSameValidators()
        {
            var hash = new BlockHash(TestUtils.GetRandomBytes(32));
            BlockCommit allCommits = TestUtils.CreateLastCommit(hash, 2, 0);
            Assert.True(allCommits.HasSameValidators(TestUtils.ConsensusValidators));
            Assert.False(
                allCommits.HasSameValidators(TestUtils.ConsensusValidators.Skip(1).Take(3)));
            Assert.False(allCommits.HasSameValidators(
                TestUtils.ConsensusValidators.Concat(TestUtils.ConsensusValidators.Take(1))
                    .ToArray()));
            Assert.False(allCommits.HasSameValidators(
                TestUtils.ConsensusValidators.Concat(new[] { new PrivateKey().PublicKey })));
            Assert.False(allCommits.HasSameValidators(
                Enumerable.Range(0, TestUtils.ConsensusValidators.Count)
                    .Select(x => new PrivateKey().PublicKey)
                    .ToArray()));
        }
    }
}