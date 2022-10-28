using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Channels;
using Bencodex;
using Bencodex.Types;
using Caching;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Blocks;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Serilog;

namespace Libplanet.Net.Consensus
{
    /// <summary>
    /// A state machine class of PBFT consensus algorithm. The state machine is responsible for
    /// proposing, validating, voting a block and committing the voted block to the blockchain.
    /// There are five states:
    /// <list type="bullet">
    ///     <item>
    ///         <see cref="Libplanet.Net.Consensus.Step.Default"/> which is the initial state when
    ///         the <see cref="Start"/> is not called (i.e., round has not been started).
    ///     </item>
    ///     <item>
    ///         <see cref="Libplanet.Net.Consensus.Step.Propose"/>, which is the state when
    ///         the round has been started and waiting for the block proposal. If a validator is a
    ///         proposer of the round, it will propose a block to the other validators and to
    ///         itself.
    ///     </item>
    ///     <item>
    ///         <see cref="Libplanet.Net.Consensus.Step.PreVote"/>, which is the state when a block
    ///         proposal for a round has been received. While translating to this step, state
    ///         machine votes for the block whether block is valid or not, and waiting for any +2/3
    ///         votes from other validators.
    ///     </item>
    ///     <item>
    ///         <see cref="Libplanet.Net.Consensus.Step.PreCommit"/>, which is the state received
    ///         any +2/3 votes in <see cref="Libplanet.Net.Consensus.Step.PreVote"/>. While
    ///         translating to this step, state machine votes for whether the block should be
    ///         committed or not, and waiting for any +2/3 committing votes from other validators.
    ///         If <see cref="Libplanet.Net.Consensus.Step.PreCommit"/>
    ///         receives +2/3 commit votes with NIL, starts new round <see cref="StartRound"/> and
    ///         moves step to <see cref="Libplanet.Net.Consensus.Step.Propose"/>.
    ///     </item>
    ///     <item>
    ///         <see cref="Libplanet.Net.Consensus.Step.EndCommit"/>, which is the state represents
    ///         committing vote has been received from other validators. Block will be committed
    ///         to the blockchain and consensus for this height is stopped. (responsibility of next
    ///         height handling is at <see cref="ConsensusContext"/>).
    ///     </item>
    ///     <item>
    ///         In the above states, <see cref="Libplanet.Net.Consensus.Step.Propose"/>, If
    ///         receiving proposal fails in <see cref="TimeoutPropose"/>, then step is moved to
    ///         <see cref="Libplanet.Net.Consensus.Step.PreVote"/> and vote NIL.
    ///     </item>
    ///     <item>
    ///         Similar to Propose, <see cref="Libplanet.Net.Consensus.Step.PreVote"/> and
    ///         <see cref="Libplanet.Net.Consensus.Step.PreCommit"/> also wait for
    ///         <see cref="TimeoutPreVote"/> or <see cref="TimeoutPreCommit"/> respectively,
    ///         if +2/3 vote received but neither NIL nor Block is not +2/3. If still +2/3 vote is
    ///         not received neither NIL nor Block after timeout runs out, then move to next step
    ///         and vote NIL.
    ///     </item>
    /// </list>
    /// Validators are bonding/bonded nodes that participate in the consensus.
    /// </summary>
    /// <typeparam name="T">An <see cref="IAction"/> type of <see cref="BlockChain{T}"/>.
    /// </typeparam>
    /// <remarks>
    /// A <see cref="Context{T}"/> represents a consensus of a single height and its multiple
    /// rounds.
    /// </remarks>
    public partial class Context<T> : IDisposable
        where T : IAction, new()
    {
        private readonly ContextTimeoutOption _contextTimeoutOption;

        private readonly BlockChain<T> _blockChain;
        private readonly Codec _codec;
        private readonly List<PublicKey> _validators;
        private readonly Channel<ConsensusMsg> _messageRequests;
        private readonly Channel<System.Action> _mutationRequests;
        private readonly MessageLog _messageLog;

        private readonly PrivateKey _privateKey;
        private readonly HashSet<int> _preVoteTimeoutFlags;
        private readonly HashSet<int> _hasTwoThirdsPreVoteFlags;
        private readonly HashSet<int> _preCommitTimeoutFlags;

        private readonly CancellationTokenSource _cancellationTokenSource;

        private readonly ILogger _logger;
        private readonly LRUCache<BlockHash, bool> _blockHashCache;

        private Block<T>? _lockedValue;
        private int _lockedRound;
        private Block<T>? _validValue;
        private int _validRound;
        private BlockCommit? _lastCommit;

        /// <summary>
        /// Initializes a new instance of the <see cref="Context{T}"/> class.
        /// </summary>
        /// <param name="consensusContext">A command class for receiving
        /// <see cref="ConsensusMsg"/> from or broadcasts to other validators.</param>
        /// <param name="blockChain">A blockchain that will be committed, which
        /// will be voted by consensus, and used for proposing a block.
        /// </param>
        /// <param name="height">A target <see cref="Context{T}.Height"/> of the consensus state.
        /// </param>
        /// <param name="privateKey">A private key for signing a block and message.
        /// <seealso cref="GetValue"/>
        /// <seealso cref="ProcessGenericUponRules"/>
        /// <seealso cref="MakeVote"/>
        /// </param>
        /// <param name="validators">A list of <see cref="PublicKey"/> of validators.</param>
        /// <param name="contextTimeoutOptions">A <see cref="ContextTimeoutOption"/> for
        /// configuring a timeout for each <see cref="Step"/>.</param>
        public Context(
            ConsensusContext<T> consensusContext,
            BlockChain<T> blockChain,
            long height,
            PrivateKey privateKey,
            List<PublicKey> validators,
            ContextTimeoutOption contextTimeoutOptions)
            : this(
                consensusContext,
                blockChain,
                height,
                privateKey,
                validators,
                Step.Default,
                -1,
                128,
                contextTimeoutOptions)
        {
        }

        private Context(
            ConsensusContext<T> consensusContext,
            BlockChain<T> blockChain,
            long height,
            PrivateKey privateKey,
            List<PublicKey> validators,
            Step step,
            int round = -1,
            int cacheSize = 128,
            ContextTimeoutOption? contextTimeoutOptions = null)
        {
            _privateKey = privateKey;
            Height = height;
            Round = round;
            Step = step;
            _lockedValue = null;
            _lockedRound = -1;
            _validValue = null;
            _validRound = -1;
            _blockChain = blockChain;
            _codec = new Codec();
            _messageRequests = Channel.CreateUnbounded<ConsensusMsg>();
            _mutationRequests = Channel.CreateUnbounded<System.Action>();
            _messageLog = new MessageLog();
            _preVoteTimeoutFlags = new HashSet<int>();
            _hasTwoThirdsPreVoteFlags = new HashSet<int>();
            _preCommitTimeoutFlags = new HashSet<int>();
            _validators = validators;
            _cancellationTokenSource = new CancellationTokenSource();
            ConsensusContext = consensusContext;
            _blockHashCache = new LRUCache<BlockHash, bool>(cacheSize, Math.Max(cacheSize / 64, 8));

            _contextTimeoutOption = contextTimeoutOptions ?? new ContextTimeoutOption();

            _logger = Log
                .ForContext("Tag", "Consensus")
                .ForContext("SubTag", "Context")
                .ForContext<Context<T>>()
                .ForContext("Source", nameof(Context<T>));
        }

        /// <summary>
        /// A target height of this consensus state. This is also a block index now in consensus.
        /// </summary>
        public long Height { get; }

        /// <summary>
        /// A round represents of this consensus state.
        /// </summary>
        public int Round { get; private set; }

        /// <summary>
        /// A step represents of this consensus state. See <see cref="Context{T}"/> for more detail.
        /// </summary>
        public Step Step { get; private set; }

        /// <summary>
        /// A round where block is successfully committed.
        /// </summary>
        public int CommittedRound { get; private set; } = -1;

        /// <summary>
        /// A command class for receiving <see cref="ConsensusMsg"/> from or broadcasts to other
        /// validators.
        /// </summary>
        private ConsensusContext<T> ConsensusContext { get; }

        /// <summary>
        /// The total count of validators.
        /// </summary>
        private int TotalValidators => _validators.Count;

        /// <inheritdoc cref="IDisposable.Dispose()"/>
        public void Dispose()
        {
            // Save the current height LastCommit before disposing if there was any locked value was
            // exists.
            if (_lockedValue is { } lockedValue)
            {
                var currentLastCommit = new BlockCommit(VoteSet(Round), lockedValue.Hash);
                _blockChain.Store.PutLastCommit(currentLastCommit);
                _logger.Debug(
                    "Saving current height #{Height} and round {Round} LastCommit...",
                    currentLastCommit.Height,
                    currentLastCommit.Round);
            }

            _cancellationTokenSource.Cancel();
            _messageRequests.Writer.TryComplete();
            _mutationRequests.Writer.TryComplete();
        }

        /// <summary>
        /// Returns a <see cref="Libplanet.Consensus.VoteSet"/> of the given round.
        /// </summary>
        /// <param name="round">A round to retrieve votes.</param>
        /// <returns>A <see cref="Libplanet.Consensus.VoteSet"/> of given round.</returns>
        public VoteSet VoteSet(int round)
        {
            (Block<T> Block, int _)? propose = GetPropose(round);
            if (propose is { } p)
            {
                VoteSet voteSet = new VoteSet(Height, round, p.Block.Hash, _validators);
                _messageLog.GetPreCommits(round)
                    .ForEach(commit =>
                    {
                        if (commit.PreCommit.BlockHash.Equals(p.Block.Hash))
                        {
                            voteSet.Add(commit.PreCommit);
                        }
                    });
                return voteSet;
            }
            else
            {
                throw new NullReferenceException(
                    $"Cannot create a {nameof(Libplanet.Consensus.VoteSet)} for a null block");
            }
        }

        /// <summary>
        /// Returns a <see cref="Libplanet.Blocks.BlockCommit"/> of the context.
        /// </summary>
        /// <returns>A <see cref="Libplanet.Blocks.BlockCommit"/> of given round if its
        /// <see cref="CommittedRound"/> is not -1.</returns>
        public BlockCommit? BlockCommit()
        {
            try
            {
                return CommittedRound == -1
                    ? null
                    : new BlockCommit(VoteSet(CommittedRound), _blockChain.Tip.Hash);
            }
            catch (Exception e)
            {
                VoteSet? voteSet = null;
                if (CommittedRound != -1)
                {
                    voteSet = VoteSet(CommittedRound);
                }

                const string msg = "Unexpected exception during {FName}() of context " +
                                   "Height #{Height}, CommittedRound: {CommittedRound}, " +
                                   "VoteSet: {@VoteSet}: {@E}";
                _logger.Error(e, msg, nameof(BlockCommit), Height, CommittedRound, voteSet, e);
                return null;
            }
        }

        /// <summary>
        /// Returns the summary of context in JSON-formatted string.
        /// </summary>
        /// <returns>Returns a JSON-formatted string of context state.</returns>
        public override string ToString()
        {
            var dict = new Dictionary<string, object>
            {
                { "node_id", _privateKey.ToAddress().ToString() },
                { "number_of_validator", _validators.Count },
                { "height", Height },
                { "round", Round },
                { "step", Step.ToString() },
                { "locked_value", _lockedValue?.Hash.ToString() ?? string.Empty },
                { "locked_round", _lockedRound },
                { "valid_value", _validValue?.Hash.ToString() ?? string.Empty },
                { "valid_round", _validRound },
            };
            return JsonSerializer.Serialize(dict);
        }

        /// <summary>
        /// Gets the timeout of <see cref="Libplanet.Net.Consensus.Step.PreVote"/> with the given
        /// round.
        /// </summary>
        /// <param name="round">A round to get the timeout.</param>
        /// <returns>A duration in <see cref="TimeSpan"/>.</returns>
        private TimeSpan TimeoutPreVote(long round)
        {
            return TimeSpan.FromSeconds(
                _contextTimeoutOption.PreVoteSecondBase +
                round * _contextTimeoutOption.PreVoteMultiplier);
        }

        /// <summary>
        /// Gets the timeout of <see cref="Libplanet.Net.Consensus.Step.PreCommit"/> with the given
        /// round.
        /// </summary>
        /// <param name="round">A round to get the timeout.</param>
        /// <returns>A duration in <see cref="TimeSpan"/>.</returns>
        private TimeSpan TimeoutPreCommit(long round)
        {
            return TimeSpan.FromSeconds(
                _contextTimeoutOption.PreCommitSecondBase +
                round * _contextTimeoutOption.PreCommitMultiplier);
        }

        /// <summary>
        /// Gets the timeout of <see cref="Libplanet.Net.Consensus.Step.Propose"/> with the given
        /// round.
        /// </summary>
        /// <param name="round">A round to get the timeout.</param>
        /// <returns>A duration in <see cref="TimeSpan"/>.</returns>
        private TimeSpan TimeoutPropose(long round)
        {
            return TimeSpan.FromSeconds(
                _contextTimeoutOption.ProposeSecondBase +
                round * _contextTimeoutOption.ProposeMultiplier);
        }

        /// <summary>
        /// Creates a new <see cref="Block{T}"/> to propose.
        /// </summary>
        /// <returns>A new <see cref="Block{T}"/> if successfully proposed,
        /// otherwise <see langword="null"/>.</returns>
        private Block<T>? GetValue()
        {
            Block<T> block = _blockChain.ProposeBlock(_privateKey, lastCommit: _lastCommit);
            if (block.Index == Height)
            {
                _blockChain.Store.PutBlock(block);
                return block;
            }
            else
            {
                return null;
            }
        }

        /// <summary>
        /// Gets the proposer of the given round.
        /// </summary>
        /// <param name="round">A round to get proposer.</param>
        /// <returns>Returns designated proposer's <see cref="PublicKey"/> for the
        /// <paramref name="round"/>.
        /// </returns>
        private PublicKey Proposer(int round)
        {
            // return designated proposer for the height round pair.
            return _validators[(int)((Height + round) % TotalValidators)];
        }

        /// <summary>
        /// Broadcasts <see cref="ConsensusMsg"/> to validators.
        /// </summary>
        /// <param name="message">A <see cref="ConsensusMsg"/> to broadcast.</param>
        /// <remarks><see cref="ConsensusMsg"/> should be broadcasted to itself. See
        /// <see cref="ConsensusContext{T}.BroadcastMessage"/>.</remarks>
        private void BroadcastMessage(ConsensusMsg message) =>
            ConsensusContext.BroadcastMessage(message);

        /// <summary>
        /// Validates the given block.
        /// </summary>
        /// <param name="block">A <see cref="Block{T}"/> to validate.</param>
        /// <returns>Returns <c>true</c> if block is valid, or otherwise returns <c>false</c>.
        /// </returns>
        private bool IsValid(Block<T> block)
        {
            if (_blockHashCache.TryGet(block.Hash, out bool isValidCached))
            {
                return isValidCached;
            }
            else
            {
                var exception = _blockChain.ValidateNextBlock(block);
                bool isValid = exception is null;
                _blockHashCache.AddReplace(block.Hash, isValid);
                return isValid;
            }
        }

        /// <summary>
        /// Creates a signed <see cref="Vote"/> for a <see cref="ConsensusPreVoteMsg"/> or
        /// a <see cref="ConsensusPreCommitMsg"/>.
        /// </summary>
        /// <param name="round">Current context round.</param>
        /// <param name="hash">Current context locked <see cref="BlockHash"/>.</param>
        /// <param name="flag"><see cref="VoteFlag"/> of <see cref="Vote"/> to create.
        /// Set to <see cref="VoteFlag.PreVote"/> if message is <see cref="ConsensusPreVoteMsg"/>.
        /// If message is <see cref="ConsensusPreCommitMsg"/>, Set to
        /// <see cref="VoteFlag.PreCommit"/>.</param>
        /// <returns>Returns a signed <see cref="Vote"/> with consensus private key.</returns>
        /// <exception cref="ArgumentException">If <paramref name="flag"/> is either
        /// <see cref="VoteFlag.Null"/> or <see cref="VoteFlag.Unknown"/>.</exception>
        private Vote MakeVote(int round, BlockHash? hash, VoteFlag flag)
        {
            if (flag == VoteFlag.Null || flag == VoteFlag.Unknown)
            {
                throw new ArgumentException(
                    $"{nameof(flag)} must be either {VoteFlag.PreVote} or {VoteFlag.PreCommit}" +
                    $"to create a valid signed vote.");
            }

            return new VoteMetadata(
                Height,
                round,
                hash,
                DateTimeOffset.UtcNow,
                _privateKey.PublicKey,
                flag).Sign(_privateKey);
        }

        /// <summary>
        /// Gets the proposed block and valid round of the given round.
        /// </summary>
        /// <param name="round">A round to get.</param>
        /// <returns>Returns a tuple of proposer and valid round.  If proposal for the round
        /// does not exist, returns <see langword="null"/> instead.
        /// </returns>
        private (Block<T>, int)? GetPropose(int round)
        {
            List<ConsensusProposalMsg> proposes = _messageLog.GetProposes(round);
            if (proposes.Count > 0)
            {
                // FIXME: Probably should not blindly pick the first one.
                ConsensusProposalMsg propose = proposes[0];
                var block = BlockMarshaler.UnmarshalBlock<T>(
                    (Dictionary)_codec.Decode(propose.Proposal.MarshaledBlock));
                return (block, propose.Proposal.ValidRound);
            }

            return null;
        }

        /// <summary>
        /// Checks whether the round has +2/3 <see cref="ConsensusPreVoteMsg"/> for the
        /// <see cref="Block{T}"/> of <paramref name="hash"/>.
        /// </summary>
        /// <param name="round">A round to check.</param>
        /// <param name="hash">A <see cref="BlockHash"/> of proposed block.</param>
        /// <param name="any">Whether to check for every <see cref="ConsensusPreVoteMsg"/> in
        /// <paramref name="round"/>.  If <see langword="true"/>, count everything regardless
        /// of <see cref="Vote.BlockHash"/>, otherwise, count only those with
        /// <see cref="Vote.BlockHash"/> that equals <paramref name="hash"/>.</param>
        /// <returns>Returns <c>true</c> if the block is voted +2/3, or otherwise returns
        /// <c>false</c>.
        /// </returns>
        private bool HasTwoThirdsPreVote(int round, BlockHash? hash, bool any = false)
        {
            int count = _messageLog.GetPreVotes(round)
                .Count(vote => (any || vote.BlockHash.Equals(hash)));
            return count > TotalValidators * 2 / 3;
        }

        /// <summary>
        /// Checks whether the round has +2/3 <see cref="ConsensusPreCommitMsg"/> for the
        /// <see cref="Block{T}"/> of <paramref name="hash"/>.
        /// </summary>
        /// <param name="round">A round to check.</param>
        /// <param name="hash">A <see cref="BlockHash"/> of proposed block.</param>
        /// <param name="any">Whether to check for every <see cref="ConsensusPreCommitMsg"/> in
        /// <paramref name="round"/>.  If <see langword="true"/>, count everything regardless
        /// of <see cref="Vote.BlockHash"/>, otherwise, count only those with
        /// <see cref="Vote.BlockHash"/> that equals <paramref name="hash"/>.</param>
        /// <returns>Returns <c>true</c> if the block is voted +2/3, or otherwise returns
        /// <c>false</c>.
        /// </returns>
        private bool HasTwoThirdsPreCommit(int round, BlockHash? hash, bool any = false)
        {
            int count = _messageLog.GetPreCommits(round)
                .Count(commit => (any || commit.BlockHash.Equals(hash)));
            return count > TotalValidators * 2 / 3;
        }
    }
}
