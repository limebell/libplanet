using System.Collections.Immutable;

namespace Libplanet.Blocks
{
    public class BlockCommit
    {
        public BlockCommit(
            long height,
            long round,
            BlockHash hash)
        {
            Height = height;
            Round = round;
            BlockHash = hash;
        }

        public long Height { get; }

        public long Round { get; }

        public BlockHash BlockHash { get; }

        public ImmutableArray<BlockCommitSig> Signatures { get; }
    }
}
