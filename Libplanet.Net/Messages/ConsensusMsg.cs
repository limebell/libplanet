using System;
using System.Collections.Generic;
using Libplanet.Blocks;
using Libplanet.Crypto;
using Libplanet.Net.Consensus;

namespace Libplanet.Net.Messages
{
    /// <summary>
    /// A abstract base class message for consensus.
    /// </summary>
    public abstract class ConsensusMsg : Message, IEquatable<ConsensusMsg>
    {
        protected const byte Nil = 0x00;

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusMsg"/> class.
        /// </summary>
        /// <param name="validator">
        /// A <see cref="PublicKey"/> of the validator who made this message.</param>
        /// <param name="height">A <see cref="Context{T}.Height"/> the message is for.</param>
        /// <param name="round">A <see cref="Context{T}.Round"/> the message is written for.</param>
        /// <param name="blockHash">A <see cref="BlockHash"/> the message is written for.</param>
        protected ConsensusMsg(
            PublicKey validator,
            long height,
            int round,
            BlockHash? blockHash)
        {
            Validator = validator;
            Round = round;
            Height = height;
            BlockHash = blockHash;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ConsensusMsg"/> class with marshalled
        /// message.
        /// </summary>
        /// <param name="dataframes">A marshalled message.</param>
        protected ConsensusMsg(byte[][] dataframes)
#pragma warning disable SA1118 // The parameter spans multiple lines
            : this(
                validator: new PublicKey(dataframes[0]),
                height: BitConverter.ToInt64(dataframes[1], 0),
                round: BitConverter.ToInt32(dataframes[2], 0),
                blockHash: (dataframes[3].Length == 1 && dataframes[3][0] == Nil)
                    ? (BlockHash?)null
                    : new BlockHash(dataframes[3]))
#pragma warning restore SA1118
        {
        }

        /// <summary>
        /// A <see cref="PublicKey"/> of the validator who made this message.
        /// </summary>
        public PublicKey Validator { get; }

        /// <summary>
        /// A <see cref="Context{T}.Height"/> the message is written for.
        /// </summary>
        public long Height { get; }

        /// <summary>
        /// A <see cref="Context{T}.Round"/> the message is written for.
        /// </summary>
        public int Round { get; }

        /// <summary>
        /// A <see cref="BlockHash"/> the message is written for.
        /// </summary>
        public BlockHash? BlockHash { get; }

        /// <summary>
        /// Gets the marshalled message in <see cref="byte"/> array.
        /// </summary>
        public override IEnumerable<byte[]> DataFrames => new[]
        {
            Validator.Format(true),
            BitConverter.GetBytes(Height),
            BitConverter.GetBytes(Round),
            BlockHash is { } blockHash ? blockHash.ToByteArray() : new[] { Nil },
        };

        public abstract bool Equals(ConsensusMsg? other);

        public abstract override bool Equals(object? obj);

        public abstract override int GetHashCode();
    }
}
