using System;
using System.Collections.Immutable;
using System.Globalization;
using Bencodex;
using Bencodex.Types;
using Libplanet.Blocks;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    public readonly struct Vote : IEquatable<Vote>
    {
        private const string TimestampFormat = "yyyy-MM-ddTHH:mm:ss.ffffffZ";
        private const string HeightKey = "height";
        private const string RoundKey = "round";
        private const string BlockHashKey = "block_hash";
        private const string TimestampKey = "timestamp";
        private const string ValidatorKey = "validator";
        private const string NodeIdKey = "node_id";
        private const string SignatureKey = "signature";

        public Vote(
            long height,
            long round,
            BlockHash blockHash,
            DateTimeOffset timestamp,
            PublicKey validator,
            long nodeId,
            ImmutableArray<byte>? signature)
        {
            Height = height;
            Round = round;
            BlockHash = blockHash;
            Timestamp = timestamp;
            Validator = validator;
            NodeId = nodeId;
            Signature = signature;
        }

        public Vote(byte[] encoded)
        {
            var codec = new Codec();
            var dict = (Dictionary)codec.Decode(encoded);
            Height = dict.GetValue<Integer>(HeightKey);
            Round = dict.GetValue<Integer>(RoundKey);
            BlockHash = new BlockHash(dict.GetValue<Binary>(BlockHashKey).ByteArray);
            Timestamp = DateTimeOffset.ParseExact(
                dict.GetValue<Text>(TimestampKey),
                TimestampFormat,
                CultureInfo.InvariantCulture);
            Validator = new PublicKey(dict.GetValue<Binary>(ValidatorKey).ByteArray);
            NodeId = dict.GetValue<Integer>(NodeIdKey);
            Signature = dict.ContainsKey(SignatureKey)
                ? dict.GetValue<Binary>(SignatureKey)
                : (ImmutableArray<byte>?)null;
        }

        public long Height { get; }

        public long Round { get; }

        public BlockHash BlockHash { get; }

        public DateTimeOffset Timestamp { get; }

        public PublicKey Validator { get; }

        public long NodeId { get; }

        public ImmutableArray<byte>? Signature { get; }

        public byte[] ByteArray
        {
            get
            {
                var codec = new Codec();
                var dict = Bencodex.Types.Dictionary.Empty
                    .Add(HeightKey, Height)
                    .Add(RoundKey, Round)
                    .Add(BlockHashKey, BlockHash.ByteArray)
                    .Add(
                        TimestampKey,
                        Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture))
                    .Add(ValidatorKey, Validator.Format(compress: true))
                    .Add(NodeIdKey, NodeId);

                if (Signature is { } signature)
                {
                    dict = dict.Add(SignatureKey, signature);
                }

                return codec.Encode(dict);
            }
        }

        public bool Equals(Vote other)
        {
            return Height == other.Height && Round == other.Round &&
                   BlockHash.Equals(other.BlockHash) && Timestamp
                       .ToString(TimestampFormat, CultureInfo.InvariantCulture).Equals(
                           other.Timestamp.ToString(
                               TimestampFormat,
                               CultureInfo.InvariantCulture)) &&
                   Validator.Equals(other.Validator) && NodeId == other.NodeId &&
                   Nullable.Equals(Signature, other.Signature);
        }

        public override bool Equals(object? obj)
        {
            return obj is Vote other && Equals(other);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(
                Height,
                Round,
                BlockHash,
                Timestamp.ToString(TimestampFormat, CultureInfo.InvariantCulture),
                Validator,
                NodeId,
                Signature);
        }
    }
}
