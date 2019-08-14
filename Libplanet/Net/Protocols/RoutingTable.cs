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
        private readonly Address _address;
        private readonly int _tableSize;
        private readonly int _bucketSize;
        private readonly Random _random;
        private readonly KBucket[] _buckets;
        private readonly AsyncLock _bucketMutex;

        public RoutingTable(
            Address address,
            int tableSize,
            int bucketSize,
            Random random)
        {
            _address = address;
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
                return _buckets.Sum(bucket => bucket.Count);
            }
        }

        public List<KBucket> NonFullBuckets
        {
            get
            {
                return _buckets.Where(bucket => !bucket.Full()).ToList();
            }
        }

        public List<KBucket> NonEmptyBuckets
        {
            get
            {
                var buckets = new List<KBucket>();
                foreach (KBucket bucket in _buckets)
                {
                    if (!bucket.Empty())
                    {
                        buckets.Add(bucket);
                    }
                }

                return buckets;
            }
        }

        public async Task<Peer> AddPeerAsync(Peer peer)
        {
            if (peer is null)
            {
                throw new ArgumentNullException(nameof(peer));
            }

            if (peer.Address.Equals(_address))
            {
                throw new ArgumentException(
                    $"Cannot add self to routing table");
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
            if (peer is null)
            {
                Log.Debug($"Remove Peer null argument exception [{peer}]");
                throw new ArgumentNullException(nameof(peer));
            }

            if (peer.Address.Equals(_address))
            {
                throw new ArgumentException(
                    $"Cannot remove self from routing table");
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
            var sorted = new List<Peer>();
            foreach (KBucket bucket in _buckets)
            {
                if (bucket.Empty())
                {
                    continue;
                }
                else
                {
                    sorted.AddRange(bucket.Peers);
                }
            }

            sorted = Kademlia.SortByDistance(sorted, target);
            var peers = new List<Peer>();
            foreach (var peer in sorted.Where(peer => !peer.Address.Equals(target)))
            {
                peers.Add(peer);
                if (peers.Count >= k * 2)
                {
                    break;
                }
            }

            return peers;
        }

        private int GetBucketIndexOf(Peer peer)
        {
            int plength = Kademlia.CommonPrefixLength(peer.Address, _address);
            return plength > _tableSize - 1 ? _tableSize - 1 : plength;
        }
    }
}
