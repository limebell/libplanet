using System;
using System.Security.Cryptography;
using Libplanet.Crypto;

namespace Libplanet.Blocks
{
    /// <summary>
    /// A common interface for blocks that do not have any proofs nor transactions (but only
    /// <see cref="TxHash"/>).
    /// </summary>
    public interface IBlockMetadata
    {
        /// <summary>
        /// The protocol version number.
        /// </summary>
        int ProtocolVersion { get; }

        /// <summary>
        /// The height of the block.
        /// </summary>
        /// <remarks>Zero means it is a genesis block.  Disallowed to be negative.</remarks>
        long Index { get; }

        /// <summary>
        /// The time the block is created.
        /// </summary>
        /// <remarks>This is always UTC.</remarks>
        DateTimeOffset Timestamp { get; }

        /// <summary>
        /// The address of the proposer.
        /// </summary>
        Address Proposer { get; }

        /// <summary>
        /// The public key of the <see cref="Proposer"/>.  This is used for verifying the signature.
        /// <para>Although this is nullable type-wise, it is mandatory where
        /// <see cref="ProtocolVersion"/> is 2 or later.  As blocks had not been signed in
        /// the previous protocol versions, the type of this is nullable.
        /// </para>
        /// </summary>
        PublicKey? PublicKey { get; }

        /// <summary>
        /// The previous block's hash.  If it's a genesis block (i.e., its <see cref="Index"/> is 0)
        /// this should be <c>null</c>.
        /// </summary>
        BlockHash? PreviousHash { get; }

        /// <summary>
        /// The hash of all transactions in the block.  This is <c>null</c> if the block has no
        /// transactions.
        /// </summary>
        HashDigest<SHA256>? TxHash { get; }

        /// <summary>
        /// The <see cref="BlockCommit"/> about previous block's vote information.
        /// </summary>
        BlockCommit? LastCommit { get; }
    }
}
