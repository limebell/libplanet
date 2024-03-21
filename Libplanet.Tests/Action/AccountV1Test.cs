using Libplanet.Action;
using Libplanet.Action.State;
using Libplanet.Action.Tests.Mocks;
using Libplanet.Crypto;
using Libplanet.Types.Blocks;
using Xunit.Abstractions;

namespace Libplanet.Tests.Action
{
    public class AccountV1Test : AccountTest
    {
        public AccountV1Test(ITestOutputHelper output)
            : base(output)
        {
        }

        public override int ProtocolVersion { get; } = Block.CurrentProtocolVersion;

        public override IActionContext CreateContext(IAccount delta, Address signer)
        {
            IWorld world = new World(new MockWorldState());
            world = world.SetAccount(_accountAddress, delta);
            return new ActionContext(
                signer,
                null,
                signer,
                0,
                ProtocolVersion,
                null,
                world,
                0,
                0);
        }
    }
}
