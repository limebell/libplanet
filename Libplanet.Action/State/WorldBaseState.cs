using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using Bencodex.Types;
using Libplanet.Common;
using Libplanet.Crypto;
using Libplanet.Store.Trie;
using Libplanet.Types.Blocks;
using static Libplanet.Action.State.KeyConverters;

namespace Libplanet.Action.State
{
    /// <summary>
    /// A default implementation of <see cref="IWorldState"/> interface.
    /// It acts as root state of <see cref="World"/> recursion.
    /// </summary>
    public class WorldBaseState : IWorldState
    {
        private readonly IBlockChainStates _blockChainStates;
        private readonly ITrie _stateRoot;

        public WorldBaseState(BlockHash? blockHash, IBlockChainStates blockChainStates)
        {
            _blockChainStates = blockChainStates;
            _stateRoot = _blockChainStates.GetBlockStateRoot(blockHash);
            BlockHash = blockHash;
            Legacy = _stateRoot
                .Get(new[]
                {
                    ToStateKey(ReservedAddresses.LegacyAccount),
                })
                .Any(v => v == null);
        }

        public BlockHash? BlockHash { get; }

        /// <inheritdoc cref="IWorldState.Legacy"/>
        public bool Legacy { get; }

        /// <inheritdoc cref="IWorldState.GetAccount"/>
        public IAccount GetAccount(Address address) => GetAccounts(new[] { address }).First();

        /// <summary>
        /// Gets the world states of the given <paramref name="addresses"/>.
        /// </summary>
        /// <param name="addresses">The <see cref="Address"/>es referring
        /// the <see cref="IAccountState"/>s to get its states.</param>
        /// <returns>The list of <see cref="IAccountState"/>s of the given
        /// <paramref name="addresses"/>.
        public IReadOnlyList<IAccount> GetAccounts(IReadOnlyList<Address> addresses) =>
            GetAccountStateRoot(addresses)
                .Zip(addresses, (trie, address) => CreateAccount(address, trie))
                .ToList();

        private IReadOnlyList<ITrie> GetAccountStateRoot(IReadOnlyList<Address> addresses)
        {
            if (Legacy)
            {
                return addresses
                    .Select(GetLegacyTrieOnly)
                    .ToList();
            }
            else
            {
                return _stateRoot
                    .Get(addresses.Select(ToStateKey).ToList())
                    .Select(GetTrieFromBencodex)
                    .ToList();
            }
        }

        private ITrie GetLegacyTrieOnly(Address address) =>
            address == ReservedAddresses.LegacyAccount
                ? _stateRoot
                : _blockChainStates.GetBlockStateRoot(null);

        private ITrie GetTrieFromBencodex(IValue? value) =>
            value is Binary stateRootHash
                ? _blockChainStates.GetStateRoot(
                    HashDigest<SHA256>.DeriveFrom(stateRootHash.ToArray()))
                : _blockChainStates.GetStateRoot(null);

        private IAccount CreateAccount(Address address, ITrie trie) =>
            Account.Create(new AccountBaseState(address, trie, BlockHash));
    }
}
