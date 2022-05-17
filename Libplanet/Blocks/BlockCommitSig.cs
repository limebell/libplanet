using System.Collections.Immutable;
using Libplanet.Crypto;

namespace Libplanet.Blocks
{
    public class BlockCommitSig
    {
        public BlockCommitSig(
            BlockFlag flag,
            PublicKey publicKey,
            ImmutableArray<byte>? signature)
        {
            Flag = flag;
            CommiterPublicKey = publicKey;
            Signature = signature;
        }

        public BlockFlag Flag { get; }

        public PublicKey CommiterPublicKey { get; }

        public ImmutableArray<byte>? Signature { get; }

        public Bencodex.Types.Dictionary MakeCandidateData()
        {
            var dict = Bencodex.Types.Dictionary.Empty
                .Add("flag", (int)Flag)
                .Add("pubkey", CommiterPublicKey.Format(true));

            if (Signature is { } sig)
            {
                dict = dict.Add("signature", sig);
            }

            return dict;
        }
    }
}
