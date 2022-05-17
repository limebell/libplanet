using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Crypto;

namespace Libplanet.Consensus
{
    public class VoteSet
    {
        // FIXME: Should separate prevote lock and commit vote lock?
        private readonly object _lock;

        public VoteSet(long height, long round, IEnumerable<PublicKey> validatorSet)
        {
            Height = height;
            Round = round;
            ValidatorSet = validatorSet.ToImmutableArray();
            Prevotes = new Vote[ValidatorSet.Length];
            Commits = new Vote[ValidatorSet.Length];
            // TODO: Fill Votes with null Signature?
            Sum = 0;

            _lock = new object();
        }

        public long Height { get; }

        public long Round { get; }

        public ImmutableArray<PublicKey> ValidatorSet { get; }

        public Vote[] Prevotes;

        public Vote[] Commits;

        public long Sum;

        public bool AddVote(Vote vote)
        {
            lock (_lock)
            {
                if (Prevotes[vote.NodeId].Signature is null && IsVoteValid(vote))
                {
                    Prevotes[vote.NodeId] = vote;
                    return true;
                }

                return false;
            }
        }

        public bool AddCommit(Vote vote)
        {
            lock (_lock)
            {
                if (Commits[vote.NodeId].Signature is null && IsVoteValid(vote))
                {
                    Commits[vote.NodeId] = vote;
                    return true;
                }

                return false;
            }
        }

        private bool IsVoteValid(Vote vote)
        {
            if (vote.Height != Height)
            {
                return false;
            }

            if (vote.Round != Round)
            {
                return false;
            }

            if (!ValidatorSet.Contains(vote.Validator))
            {
                // The voter is not a validator.
                return false;
            }

            // TODO: Should check signature :)

            return true;
        }

        public bool HasTwoThirdsAny()
        {
        }
    }
}
