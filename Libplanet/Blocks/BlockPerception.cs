using System;

namespace Libplanet.Blocks
{
    /// <summary>
    /// <para>
    /// An implementation of <see cref="IBlockExcerpt"/> with a timestamp attached.
    /// </para>
    /// <para>
    /// Used for keeping track of when the local node has percieved <see cref="IBlockExcerpt"/>s.
    /// </para>
    /// </summary>
    public readonly struct BlockPerception : IBlockExcerpt
    {
        /// <summary>
        /// Creates an instance of <see cref="BlockPerception"/> with
        /// a provided timestamp.
        /// </summary>
        /// <param name="blockExcerpt">The excerpt of a block to attach a timestamp to.</param>
        /// <param name="perceivedTime">The time in UTC when the local node perceived
        /// <paramref name="blockExcerpt"/>.</param>
        public BlockPerception(IBlockExcerpt blockExcerpt, DateTimeOffset perceivedTime)
        {
            ProtocolVersion = blockExcerpt.ProtocolVersion;
            Index = blockExcerpt.Index;
            Hash = blockExcerpt.Hash;
            PerceivedTime = perceivedTime;
        }

        /// <summary>
        /// Creates an instance of <see cref="BlockPerception"/> with the local time in UTC.
        /// </summary>
        /// <param name="blockExcerpt">The excerpt of a block to attach a timestamp to.</param>
        public BlockPerception(IBlockExcerpt blockExcerpt)
            : this(blockExcerpt, DateTimeOffset.UtcNow)
        {
        }

        /// <inheritdoc/>
        public readonly int ProtocolVersion { get; }

        /// <inheritdoc/>
        public readonly long Index { get; }

        /// <inheritdoc/>
        public readonly BlockHash Hash { get; }

        /// <summary>
        /// The time in UTC when the local node perceived
        /// the corresponding <see cref="IBlockExcerpt"/>.
        /// </summary>
        public DateTimeOffset PerceivedTime { get; }

        public override string ToString()
        {
            return
                $"{nameof(BlockPerception)} {{" +
                $" {nameof(ProtocolVersion)} = {ProtocolVersion}," +
                $" {nameof(Index)} = {Index}," +
                $" {nameof(Hash)} = {Hash}," +
                $" {nameof(PerceivedTime)} = {PerceivedTime}" +
                " }";
        }
    }
}
