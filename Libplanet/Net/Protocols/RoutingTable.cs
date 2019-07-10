using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Nito.AsyncEx;
using Serilog;

namespace Libplanet.Net.Protocols
{
    internal class RoutingTable
    {
        private readonly Peer _thisPeer;
        private readonly int _tableSize;
        private readonly int _bucketSize;
        private readonly Random _random;
        private readonly KBucket[] _buckets;
        private readonly AsyncLock _bucketMutex;

        public RoutingTable(
            Peer thisPeer,
            int tableSize,
            int bucketSize,
            Random random)
        {
            _thisPeer = thisPeer;
            _tableSize = tableSize;
            _bucketSize = bucketSize;
            _random = random;

            _buckets = new KBucket[tableSize];
            for (int i = 0; i < _tableSize; i++)
            {
                _buckets[i] = new KBucket(_bucketSize, _random);
            }

            _bucketMutex = new AsyncLock();
        }

        public int Count
        {
            get
            {
                int count = 0;
                foreach (KBucket bucket in _buckets)
                {
                    count += bucket.Count;
                }

                return count;
            }
        }

        public List<KBucket> NonFullBuckets
        {
            get
            {
                List<KBucket> buckets = new List<KBucket>();
                foreach (KBucket bucket in _buckets)
                {
                    if (!bucket.IsFull())
                    {
                        buckets.Add(bucket);
                    }
                }

                return buckets;
            }
        }

        public List<KBucket> NonEmptyBuckets
        {
            get
            {
                List<KBucket> buckets = new List<KBucket>();
                foreach (KBucket bucket in _buckets)
                {
                    if (!bucket.IsEmpty())
                    {
                        buckets.Add(bucket);
                    }
                }

                return buckets;
            }
        }

        public async Task<Peer> AddPeerAsync(Peer peer)
        {
            if (peer == _thisPeer)
            {
                throw new ArgumentException(
                    $"Cannot add self to routing table");
            }

            if (peer is null)
            {
                throw new ArgumentNullException(nameof(peer));
            }

            int index = GetBucketIndexOf(peer);
            Peer evicted;

            // lock required
            using (await _bucketMutex.LockAsync())
            {
                evicted = _buckets[index].AddPeer(peer);
            }

            return evicted;
        }

        public async Task<bool> RemovePeerAsync(Peer peer)
        {
            if (peer == _thisPeer)
            {
                throw new ArgumentException(
                    $"Cannot remove self from routing table");
            }

            if (peer is null)
            {
                Log.Debug($"Remove Peer null argument exception [{peer}]");
                throw new ArgumentNullException(nameof(peer));
            }

            int index = GetBucketIndexOf(peer);
            bool ret;

            // lock required
            using (await _bucketMutex.LockAsync())
            {
                ret = _buckets[index].RemovePeer(peer);
            }

            return ret;
        }

        public KBucket BucketOf(Peer peer)
        {
            int index = GetBucketIndexOf(peer);
            return BucketOf(index);
        }

        public KBucket BucketOf(int level)
        {
            return _buckets[level];
        }

        public bool Contains(Peer peer)
        {
            int index = GetBucketIndexOf(peer);
            return _buckets[index].Contains(peer);
        }

        public void Clear()
        {
            foreach (KBucket bucket in _buckets)
            {
                bucket.Clear();
            }
        }

        public ICollection<Peer> Neighbours(Peer target, int k)
        {
            return Neighbours(target.Address, k);
        }

        // returns k nearest peers to given parameter peer from routing table.
        // return value is already sorted with respect to target.
        public ICollection<Peer> Neighbours(Address target, int k)
        {
            List<Peer> sorted = new List<Peer>();
            foreach (KBucket bucket in _buckets)
            {
                if (bucket.IsEmpty())
                {
                    continue;
                }
                else
                {
                    sorted.AddRange(bucket.Peers);
                }
            }

            sorted = Kademlia.SortByDistance(sorted, target);
            List<Peer> peers = new List<Peer>();
            foreach (Peer peer in sorted)
            {
                if (!peer.Address.Equals(target))
                {
                    peers.Add(peer);
                    if (peers.Count >= k * 2)
                    {
                        break;
                    }
                }
            }

            return peers;
        }

        private int GetBucketIndexOf(Peer peer)
        {
            int plength = Kademlia.CommonPrefixLength(peer, _thisPeer);
            return plength > _tableSize - 1 ? _tableSize - 1 : plength;
        }
    }
}
