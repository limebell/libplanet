using System;
using System.Collections.Immutable;
using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Mocks;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Libplanet.Types.Consensus;
using Xunit.Abstractions;

namespace Libplanet.Tests.Action
{
    public class AccountV0Test : AccountTest
    {
        public AccountV0Test(ITestOutputHelper output)
            : base(output)
        {
        }

        public override int ProtocolVersion { get; } = 0;

        public override IActionContext CreateContext(
            IAccount delta, Address signer)
        {
            IWorld world = new World(new MockWorldState());
            world = world.SetAccount(_accountAddress, delta);
            var key = new PrivateKey();
            var lastCommit = new BlockCommit(
                0,
                0,
                default,
                new[]
                {
                    new VoteMetadata(
                        0,
                        0,
                        default,
                        DateTimeOffset.UtcNow,
                        key.PublicKey,
                        VoteFlag.PreCommit).Sign(key),
                }.ToImmutableArray());
            return new ActionContext(
                signer,
                null,
                signer,
                0,
                ProtocolVersion,
                lastCommit,
                world,
                0,
                0);
        }
    }
}
