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
using Serilog;

namespace Libplanet.Net.Protocols
{
    internal class KademliaProtocol<T> : IProtocol
        where T : IAction, new()
    {
        private const int BucketSize = 16;
        private const int TableSize = Address.Size * sizeof(byte) * 8;
        private const double RequestTimeout = 3 * 300;
        private const int IdleBucketRefreshInterval = 3600;
        private const int FindConcurrency = 3;

        private readonly Swarm<T> _swarm;
        private readonly Peer _thisPeer;
        private readonly System.Random _random;
        private readonly RoutingTable _routing;
        private readonly ConcurrentDictionary<string, ExpectedPong> _expectedPongs;
        private readonly ConcurrentBag<string> _deletedPingids;
        private readonly ConcurrentDictionary<Address, DateTimeOffset> _findRequests;

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

        public async Task BootstrapAsync(List<Peer> bootstrapPeers)
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
                await DoFindPeerAsync(_thisPeer.Address, bootstrapPeer);
                await _routing.AddPeerAsync(bootstrapPeer);
            }

            // should think of the way if bootstraping is done,
            // in order to get closest peer for preloading in swarm

        public async Task UpdateAsync()
        {
            await UpdateAsync(null);
        }

        // this updates routing table when receiving a message.
        // if corresponding bucket for remote peer is not full, just adds remote peer.
        // otherwise check whether if the least recently used (LRU) peer
        // is alive to determine evict LRU peer or discard remote peer.
        public async Task UpdateAsync(Peer peer, string pingid = null)
        {
            if (peer is null && pingid != null)
            {
                throw new ArgumentException(
                    $"Argument {nameof(peer)} is null but has pingid [{pingid}].");
            }

            if (peer == _thisPeer)
            {
                throw new ArgumentException(
                    $"Argument {nameof(peer)} is equal to self.");
            }

            if (pingid != null && !_expectedPongs.ContainsKey(pingid))
            {
                if (_deletedPingids.Contains(pingid))
                {
                    // pong received after timeout
                    Log.Debug("after timeout");
                }
                else
                {
                    foreach (ExpectedPong ep in _expectedPongs.Values)
                    {
                        if (ep.Target.PublicKey.Equals(peer.PublicKey))
                        {
                            // public key mismatch
                            Log.Debug("pk mismatch");
                            break;
                        }
                    }
                }

                Log.Debug("unexpected?");
                return;
            }

            foreach (KeyValuePair<string, ExpectedPong> entry in _expectedPongs)
            {
                if (DateTimeOffset.UtcNow > entry.Value.Timeout)
                {
                    // ping pong timeout
                    _deletedPingids.Add(entry.Key);
                    _expectedPongs.TryRemove(entry.Key, out ExpectedPong ep);
                    await _routing.RemovePeerAsync(ep.Target);
                    if (ep.Replacement != null)
                    {
                        await UpdateAsync(ep.Replacement);
                    }

                    if (peer != null && ep.Target.Address.Equals(peer.Address))
                    {
                        return;
                    }
                }
            }

            if (pingid != null && _expectedPongs.ContainsKey(pingid))
            {
                _expectedPongs.TryRemove(pingid, out ExpectedPong ep);
                if (!(ep.Replacement is null))
                {
                    _routing.BucketOf(ep.Replacement).ReplacementCache.Add(ep.Replacement);
                }
            }

            Peer evictionCandidate = await _routing.AddPeerAsync(peer);
            if (evictionCandidate is null && peer != null)
            {
                // added successfully since there was empty space in bucket
                Log.Debug($"Added [{peer.Address.ToHex()}] to [{_thisPeer.Address.ToHex()}]");
            }
            else if (peer != null)
            {
                _ = PingAsync(evictionCandidate, peer);
                Log.Debug("Eviction?");
            }

            foreach (KBucket bucket in _routing.NoneEmptyBuckets)
            {
                foreach (Peer replacement in bucket.ReplacementCache)
                {
                    _ = PingAsync(replacement);
                }
            }

            // idle bucket refresh...
            foreach (KeyValuePair<Address, DateTimeOffset> entry in _findRequests)
            {
                if (DateTimeOffset.UtcNow > entry.Value)
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
        public async Task RecvPingAsync(Ping ping, int appProtocolVersion, long? tipIndex)
        {
            Peer remote = ping.Remote;
            if (remote == _thisPeer)
            {
                throw new ArgumentException(
                    "Cannot receive ping from self");
            }

            await UpdateAsync(remote);
            SendPong(ping.Echo, appProtocolVersion, tipIndex, ping.Identity);
        }

        // receive pong
        public async Task RecvPongAsync(Peer remote, byte[] echoed)
        {
            if (remote == _thisPeer)
            {
                throw new ArgumentException(
                    "Cannot receive pong from self");
            }

            Log.Debug($"Pong's echo: {ByteUtil.Hex(echoed)}, from [{remote.Address.ToHex()}]");
            string pingid = MakePingId(echoed, remote);

            // update process required
            await UpdateAsync(remote, pingid);
        }

        public async Task RecvNeighboursAsync(Peer remote, List<Peer> neighbours)
        {
            List<Peer> peers = new List<Peer>();
            List<Task> tasks = new List<Task>();
            foreach (Peer peer in neighbours)
            {
                if (peer != _thisPeer && !_routing.Contains(peer))
                {
                    peers.Add(peer);
                }
            }

            foreach (KeyValuePair<Address, DateTimeOffset> entry in _findRequests)
            {
                if (DateTimeOffset.UtcNow > entry.Value)
                {
                    continue;
                }

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
                        _ = SendFindPeerAsync(peers[i], entry.Key);
                    }
                }
            }

            foreach (Peer peer in peers)
            {
                if (peer != _thisPeer)
                {
                    tasks.Add(PingAsync(peer));
                }
            }

            await Task.WhenAll(tasks);
        }

        // FIXME: this method is not safe from amplification attack
        // maybe ping/pong/ping/pong is required
        public async Task RecvFindPeerAsync(FindPeer findPeer)
        {
            await UpdateAsync(findPeer.Remote);
            List<Peer> found = _routing.Neighbours(findPeer.Target, BucketSize).ToList();
            SendNeighbours(found, findPeer.Identity);
        }

        private string MakePingId(byte[] echoed, Peer peer)
        {
            return ByteUtil.Hex(echoed) + peer.PublicKey.ToAddress().ToString();
        }

#pragma warning disable
        internal async Task PingAsync(Peer target, Peer replacement = null)
        {
            byte[] echoed = new SHA256CryptoServiceProvider()
                .ComputeHash(Encoding.ASCII.GetBytes(_thisPeer.ToString() + DateTimeOffset.UtcNow.ToUnixTimeMilliseconds()));
            Log.Debug($"Ping's echo: {ByteUtil.Hex(echoed)}, to [{target.Address.ToHex()}]");
            string pingid = MakePingId(echoed, target);
            DateTimeOffset timeout =
                DateTimeOffset.UtcNow + TimeSpan.FromMilliseconds(RequestTimeout);
            _expectedPongs[pingid] = new ExpectedPong(timeout, target, replacement);
            await SendPingAsync(target, echoed);
        }
#pragma warning restore

        private async Task DoFindPeerAsync(Address target, Peer viaPeer = null)
        {
            _findRequests[target] =
                DateTimeOffset.UtcNow + TimeSpan.FromMilliseconds(RequestTimeout);
            if (viaPeer is null)
            {
                await QueryNeighboursAsync(target);
            }
            else
            {
                await SendFindPeerAsync(viaPeer, target);
            }
        }

        private async Task QueryNeighboursAsync(Address target)
        {
            List<Peer> neighbours = _routing.Neighbours(target, BucketSize).ToList();
            List<Task> tasks = new List<Task>();
            for (int i = 0; i < FindConcurrency; i++)
            {
                tasks.Add(SendFindPeerAsync(neighbours[i], target));
            }

            await Task.WhenAll(tasks);
        }

        private async Task SendPingAsync(Peer addressee, byte[] echo)
        {
            Ping ping = new Ping(echo);
            await _swarm.SendMessageWithReplyAsync(addressee, ping);
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

        private async Task SendFindPeerAsync(Peer addressee, Address target)
        {
            FindPeer findPeer = new FindPeer(target);
            await _swarm.SendMessageWithReplyAsync(addressee, findPeer);
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
