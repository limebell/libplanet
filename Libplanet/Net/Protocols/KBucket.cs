using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;

namespace Libplanet.Net.Protocols
{
    internal class KBucket
    {
        private readonly int _size;
        private readonly Random _random;
        private readonly List<Peer> _peers;

        private DateTimeOffset _lastUpdated;

        public KBucket(int size, Random random)
        {
            _size = size;
            _random = random;
            _peers = new List<Peer>();
            ReplacementCache = new List<Peer>();

            _lastUpdated = DateTimeOffset.UtcNow;
        }

        public int Count => _peers.Count;

        // get most recently used peer.
        public Peer Head => IsEmpty() ? null : _peers[_peers.Count - 1];

        // get least recently used peer.
        public Peer Tail => IsEmpty() ? null : _peers[0];

        public ImmutableList<Peer> Peers => _peers.ToImmutableList();

        // replacement candidate stored in this cache when
        // the bucket is full and least recently used peer responds.
        public List<Peer> ReplacementCache { get; }

        // returns head if the bucket is full and doest not containing target.
        public Peer AddPeer(Peer peer)
        {
            _lastUpdated = DateTimeOffset.UtcNow;
            ReplacementCache.Remove(peer);
            Peer exists = _peers.Find(p => p.PublicKey.Equals(peer.PublicKey));

            if (!(exists is null))
            {
                _peers.Remove(exists);
                _peers.Add(peer);
                return null;
            }
            else if (IsFull())
            {
                return Tail;
            }
            else
            {
                _peers.Add(peer);
                return null;
            }
        }

        public bool Contains(Peer peer)
        {
            return _peers.Contains(peer);
        }

        public void Clear()
        {
            _peers.Clear();
            _lastUpdated = DateTimeOffset.UtcNow;
        }

        public bool RemovePeer(Peer peer)
        {
            return _peers.Remove(peer);
        }

        public bool IsEmpty()
        {
            return _peers.Count == 0;
        }

        public bool IsFull()
        {
            return _peers.Count >= _size;
        }

        public Peer GetRandomPeer()
        {
            int size = _peers.Count;

            return size == 0 ? null : _peers[_random.Next(size)];
        }
    }
}
