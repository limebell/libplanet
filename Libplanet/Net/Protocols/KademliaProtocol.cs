using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Protocols
{
    internal class KademliaProtocol<T> : IProtocol
        where T : IAction, new()
    {
        private const int BucketSize = 16;
        private const int TableSize = Address.Size * sizeof(byte) * 8;
        private const double RequestTimeout = 3 * 300 / 1000.0;
        private const int IdleBucketRefreshInterval = 3600;
        private const int FindConcurrency = 3;

        private readonly Swarm<T> _swarm;
        private readonly Peer _thisPeer;
        private readonly System.Random _random;
        private readonly RoutingTable _routing;
        private readonly ConcurrentDictionary<string, ExpectedPong> _expectedPongs;
        private readonly ConcurrentBag<string> _deletedPingids;
        private readonly ConcurrentDictionary<Address, DateTimeOffset> _findRequests;

        // private bool _running = false;
        public KademliaProtocol(Swarm<T> swarm)
        {
            _swarm = swarm;
            _thisPeer = _swarm.AsPeer;
            _random = new System.Random();
            _routing = new RoutingTable(
                _thisPeer, TableSize, BucketSize, _random);
            _expectedPongs = new ConcurrentDictionary<string, ExpectedPong>();
            _deletedPingids = new ConcurrentBag<string>();
            _findRequests = new ConcurrentDictionary<Address, DateTimeOffset>();
        }

        public int Count => _routing.Count;

        public ImmutableList<Peer> Peers
        {
            get
            {
                List<Peer> peers = new List<Peer>();
                foreach (KBucket bucket in _routing.NoneEmptyBuckets)
                {
                    peers.AddRange(bucket.Peers);
                }

                return peers.ToImmutableList();
            }
        }

        public void Bootstrap(List<Peer> bootstrapPeers)
        {
            if (bootstrapPeers is null)
            {
                throw new ArgumentNullException(nameof(bootstrapPeers));
            }

            foreach (Peer bootstrapPeer in bootstrapPeers)
            {
                if (bootstrapPeer == _thisPeer)
                {
                    continue;
                }

                // FIXME: bootstrap peer is always valid? should check validity?
                _routing.AddPeer(bootstrapPeer);
                DoFindPeer(_thisPeer.Address, bootstrapPeer);
            }

            // should think of the way if bootstraping is done,
            // in order to get closest peer for preloading in swarm
        }

        // this updates routing table when receiving a message.
        // if corresponding bucket for remote peer is not full, just adds remote peer.
        // otherwise check whether if the least recently used (LRU) peer
        // is alive to determine evict LRU peer or discard remote peer.
        public void Update(Peer peer, string pingid = null)
        {
            if (peer is null)
            {
                throw new ArgumentNullException(nameof(peer));
            }

            if (peer == _thisPeer)
            {
                throw new ArgumentException(
                    $"Argument {nameof(peer)} is equal to self.");
            }

            if (!(pingid is null) && !_expectedPongs.ContainsKey(pingid))
            {
                if (_deletedPingids.Contains(pingid))
                {
                    // pong received after timeout
                }
                else
                {
                    foreach (ExpectedPong ep in _expectedPongs.Values)
                    {
                        if (ep.Target.PublicKey.Equals(peer.PublicKey))
                        {
                            // public key mismatch
                            break;
                        }
                    }
                }

                return;
            }

            foreach (KeyValuePair<string, ExpectedPong> entry in _expectedPongs)
            {
                if (DateTimeOffset.UtcNow > entry.Value.Timeout)
                {
                    // ping pong timeout
                    _deletedPingids.Add(pingid);
                    _expectedPongs.TryRemove(pingid, out ExpectedPong ep);
                    _routing.RemovePeer(ep.Target);
                    if (!(ep.Replacement is null))
                    {
                        Update(ep.Replacement);
                    }

                    if (ep.Target == peer)
                    {
                        return;
                    }
                }
            }

            if (_expectedPongs.ContainsKey(pingid))
            {
                _expectedPongs.TryRemove(pingid, out ExpectedPong ep);
                if (!(ep.Replacement is null))
                {
                    _routing.BucketOf(ep.Replacement).ReplacementCache.Add(ep.Replacement);
                }
            }

            Peer evictionCandidate = _routing.AddPeer(peer);
            if (evictionCandidate is null)
            {
                // added successfully since there was empty space in bucket
            }
            else
            {
                Ping(evictionCandidate, peer);
            }

            foreach (KBucket bucket in _routing.NoneEmptyBuckets)
            {
                foreach (Peer replacement in bucket.ReplacementCache)
                {
                    Ping(replacement);
                }
            }

            // idle bucket refresh...
            foreach (KeyValuePair<Address, DateTimeOffset> entry in _findRequests)
            {
                if (entry.Value < DateTimeOffset.UtcNow)
                {
                    _findRequests.TryRemove(entry.Key, out DateTimeOffset timeout);
                }
            }
        }

        public List<Peer> PeersToBroadcast(int level)
        {
            List<Peer> peers = new List<Peer>();
            if (level < 0 || level >= TableSize)
            {
                return null;
            }

            for (int i = level; i < TableSize; i++)
            {
                peers.Add(_routing.BucketOf(i).GetRandomPeer());
            }

            return peers;
        }

        // send pong back to remode
        public void RecvPing(Ping ping, int appProtocolVersion, long? tipIndex)
        {
            Peer remote = ping.Remote;
            if (remote == _thisPeer)
            {
                throw new ArgumentException(
                    "Cannot receive ping from self");
            }

            Update(remote);
            SendPong(ping.Echo, appProtocolVersion, tipIndex, ping.Identity);
        }

        // receive pong
        public void RecvPong(Peer remote, byte[] echoed)
        {
            if (remote == _thisPeer)
            {
                throw new ArgumentException(
                    "Cannot receive pong from self");
            }

            string pingid = MakePingId(echoed, remote);

            // update process required
            Update(remote, pingid);
        }

        public void RecvNeighbours(Peer remote, List<Peer> neighbours)
        {
            List<Peer> peers = new List<Peer>();
            foreach (Peer peer in neighbours)
            {
                if (peer != _thisPeer && !_routing.Contains(peer))
                {
                    peers.Add(peer);
                }
            }

            foreach (KeyValuePair<Address, DateTimeOffset> entry in _findRequests)
            {
                Address target = entry.Key;
                peers = Kademlia.SortByDistance(peers, entry.Key);

                List<Peer> closest_candidate = _routing.Neighbours(target, BucketSize).ToList();
                Peer closest_known = closest_candidate.Count == 0 ? null : closest_candidate[0];
                for (int i = 0; i < FindConcurrency && i < peers.Count; i++)
                {
                    if (
                        closest_known is null ||
                        string.Compare(
                            Kademlia.CalculateDistance(peers[i].Address, entry.Key).ToHex(),
                            Kademlia.CalculateDistance(closest_known.Address, entry.Key).ToHex()
                        ) < 1)
                    {
                        SendFindPeer(peers[i], entry.Key);
                    }
                }
            }

            foreach (Peer peer in peers)
            {
                if (peer != _thisPeer)
                {
                    Ping(peer);
                }
            }
        }

        public void RecvFindPeer(FindPeer findPeer)
        {
            Update(findPeer.Remote);
            List<Peer> found = _routing.Neighbours(findPeer.Target, BucketSize).ToList();
            SendNeighbours(found, findPeer.Identity);
        }

        private string MakePingId(byte[] echoed, Peer peer)
        {
            return echoed.ToString() + peer.PublicKey.ToString();
        }

        private void Ping(Peer target, Peer replacement = null)
        {
            byte[] echoed = SendPing(target);
            string pingid = MakePingId(echoed, _thisPeer);
            DateTimeOffset timeout =
                DateTimeOffset.UtcNow + TimeSpan.FromMilliseconds(RequestTimeout);
            _expectedPongs[pingid] = new ExpectedPong(timeout, target, replacement);
        }

        private void DoFindPeer(Address target, Peer viaPeer = null)
        {
            _findRequests[target] =
                DateTimeOffset.UtcNow + TimeSpan.FromMilliseconds(RequestTimeout);
            if (viaPeer is null)
            {
                QueryNeighbours(target);
            }
            else
            {
                SendFindPeer(viaPeer, target);
            }
        }

        private void QueryNeighbours(Address target)
        {
            List<Peer> neighbours = _routing.Neighbours(target, BucketSize).ToList();
            for (int i = 0; i < FindConcurrency; i++)
            {
                SendFindPeer(neighbours[i], target);
            }
        }

        private byte[] SendPing(Peer addressee)
        {
            byte[] echo = new SHA256CryptoServiceProvider()
                .ComputeHash(Encoding.ASCII.GetBytes(_thisPeer.ToString() + DateTimeOffset.UtcNow));
            Ping ping = new Ping(echo);
            _swarm.SendMessage(addressee, ping);
            return echo;
        }

        private void SendPong(
            byte[] echoed,
            int appProtocolVersion,
            long? tipIndex,
            byte[] identity)
        {
            Pong pong = new Pong(appProtocolVersion, tipIndex, echoed)
            {
                Identity = identity,
            };
            _swarm.ReplyMessage(pong);
        }

        private void SendNeighbours(List<Peer> found, byte[] identity)
        {
            // implemented as reply of FindPeer
            Neighbours neighbours = new Neighbours(found)
            {
                Identity = identity,
            };
            _swarm.ReplyMessage(neighbours);
        }

        private void SendFindPeer(Peer addressee, Address target)
        {
            FindPeer findPeer = new FindPeer(target);
            _swarm.SendMessage(addressee, findPeer);
        }

        // expected pong data type.
        // this contiains time out for ping, pinged target
        // and replacement candidate(LRU peer).
        [Serializable]
        private struct ExpectedPong
        {
            public ExpectedPong(DateTimeOffset timeout, Peer target, Peer replacement)
            {
                Timeout = timeout;
                Target = target;
                Replacement = replacement;
            }

            public DateTimeOffset Timeout { get; }

            public Peer Target { get; }

            public Peer Replacement { get; }
        }
    }
}
