using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Net.Messages;
using Nito.AsyncEx;
using Serilog;

namespace Libplanet.Net.Protocols
{
    internal class KademliaProtocol<T> : IProtocol
        where T : IAction, new()
    {
        private const int BucketSize = 16;
        private const int TableSize = Address.Size * sizeof(byte) * 8;
        private const double RequestTimeout = 6 * 300;
        private const int IdleBucketRefreshInterval = 3600;
        private const int FindConcurrency = 3;

        private readonly Swarm<T> _swarm;
        private readonly int _appProtocolVersion;
        private readonly Peer _thisPeer;
        private readonly System.Random _random;
        private readonly RoutingTable _routing;
        private readonly ConcurrentDictionary<string, ExpectedPong> _expectedPongs;
        private readonly ConcurrentBag<string> _deletedPingids;
        private readonly ConcurrentDictionary<Address, FindRequest> _findRequests;
        private readonly CancellationToken _cancellationToken;
        private readonly AsyncAutoResetEvent _bootstrapCompleted;

        private readonly ILogger _logger;

        public KademliaProtocol(
            Swarm<T> swarm,
            int appProtocolVersion,
            CancellationToken cancellationToken,
            ILogger logger)
        {
            _swarm = swarm;
            _appProtocolVersion = appProtocolVersion;
            _cancellationToken = cancellationToken;
            _logger = logger;

            _thisPeer = _swarm.AsPeer;
            _random = new System.Random();
            _routing = new RoutingTable(
                _thisPeer, TableSize, BucketSize, _random);
            _expectedPongs = new ConcurrentDictionary<string, ExpectedPong>();
            _deletedPingids = new ConcurrentBag<string>();
            _findRequests = new ConcurrentDictionary<Address, FindRequest>();
            _bootstrapCompleted = new AsyncAutoResetEvent();
        }

        public int Count => _routing.Count;

        public ImmutableList<Peer> Peers
        {
            get
            {
                List<Peer> peers = new List<Peer>();
                foreach (KBucket bucket in _routing.NonEmptyBuckets)
                {
                    peers.AddRange(bucket.Peers);
                }

                return peers.ToImmutableList();
            }
        }

        public ImmutableList<Peer> PeersToBroadcast
        {
            get
            {
                List<Peer> peers = new List<Peer>();
                foreach (KBucket bucket in _routing.NonEmptyBuckets)
                {
                    peers.Add(bucket.GetRandomPeer());
                }

                return peers.ToImmutableList();
            }
        }

        public async Task BootstrapAsync(
            List<Peer> bootstrapPeers,
            CancellationToken cancellationToken)
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

                // Guarantees at least one connection (seed peer)
                await PingAsync(bootstrapPeer, withoutTimeout: true, bootstrap: true);
            }

            // Should think of the way if bootstraping is done,
            // in order to get closest peer for preloading in swarm
            await Task.WhenAll(
                _bootstrapCompleted.WaitAsync(cancellationToken),
                Task.Delay((int)RequestTimeout, cancellationToken));
        }

        // This updates routing table when receiving a message.
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

            if (_cancellationToken.IsCancellationRequested)
            {
                return;
            }

            if (pingid != null && !_expectedPongs.ContainsKey(pingid))
            {
                _logger.Debug("Unexpected pong.");
                if (_deletedPingids.Contains(pingid))
                {
                    // pong received after timeout
                    _logger.Debug("After timeout.");
                }
                else
                {
                    foreach (ExpectedPong ep in _expectedPongs.Values)
                    {
                        if (ep.Target.PublicKey.Equals(peer.PublicKey))
                        {
                            // public key mismatch
                            _logger.Debug("Public key mismatch.");
                            break;
                        }
                    }
                }

                return;
            }

            foreach (KeyValuePair<string, ExpectedPong> entry in _expectedPongs)
            {
                if (entry.Value.Timeout != null &&
                    DateTimeOffset.UtcNow > entry.Value.Timeout)
                {
                    // ping pong timeout
                    _deletedPingids.Add(entry.Key);
                    _expectedPongs.TryRemove(entry.Key, out ExpectedPong ep);
                    await _routing.RemovePeerAsync(ep.Target);
                    _logger.Debug($"Removed peer [{ep.Target.Address.ToHex()}] from table.");
                    if (ep.Replacement != null)
                    {
#pragma warning disable CS4014 // 이 호출을 대기하지 않으므로 호출이 완료되기 전에 현재 메서드가 계속 실행됩니다.
                        UpdateAsync(ep.Replacement);
#pragma warning restore CS4014 // 이 호출을 대기하지 않으므로 호출이 완료되기 전에 현재 메서드가 계속 실행됩니다.
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
                if (ep.Replacement != null)
                {
                    _routing.BucketOf(ep.Replacement).ReplacementCache.Add(ep.Replacement);
                }

                if (ep.Bootstrap)
                {
                    // This ensures connection with seed peer
                    _bootstrapCompleted.Set();
                    await DoFindPeerAsync(_thisPeer.Address, ep.Target);
                }
            }

            if (peer != null)
            {
                bool contains = _routing.Contains(peer);
                Peer evictionCandidate = await _routing.AddPeerAsync(peer);
                if (evictionCandidate is null)
                {
                    // added successfully since there was empty space in the bucket
                    if (!contains)
                    {
                        _logger.Debug($"Added [{peer.Address.ToHex()}] to table");
                    }
                }
                else
                {
                    await PingAsync(evictionCandidate, peer);
                    _logger.Debug($"Try evict peer [{evictionCandidate}]");
                }
            }

            foreach (KBucket bucket in _routing.NonFullBuckets)
            {
                foreach (Peer replacement in bucket.ReplacementCache)
                {
                    await PingAsync(replacement);
                }
            }

            // idle bucket refresh...
            foreach (KeyValuePair<Address, FindRequest> entry in _findRequests)
            {
                if (DateTimeOffset.UtcNow > entry.Value.Timeout)
                {
                    _findRequests.TryRemove(entry.Key, out FindRequest findRequest);
                }
            }
        }

        public void Timeout(object sender, Peer peer)
        {
#pragma warning disable CS4014 // 이 호출을 대기하지 않으므로 호출이 완료되기 전에 현재 메서드가 계속 실행됩니다.
            UpdateAsync(null);
#pragma warning restore CS4014 // 이 호출을 대기하지 않으므로 호출이 완료되기 전에 현재 메서드가 계속 실행됩니다.
        }

#pragma warning disable CS4014 // 이 호출을 대기하지 않으므로 호출이 완료되기 전에 현재 메서드가 계속 실행됩니다.
        public void ReceiveMessage(object sender, Message message)
        {
            switch (message)
            {
                case Ping ping:
                    ReceivePingAsync(ping.Remote, ping.Echo);
                    break;

                case Pong pong:
                    ReceivePongAsync(pong.Remote, pong.Echoed);
                    break;

                case FindPeer findPeer:
                    ReceiveFindPeerAsync(
                        findPeer.Remote,
                        findPeer.Target);
                    break;

                case Neighbours neighbours:
                    ReceiveNeighboursAsync(neighbours.Remote, neighbours.Found);
                    break;

                default:
                    UpdateAsync(message.Remote);
                    break;
            }
        }
#pragma warning restore CS4014 // 이 호출을 대기하지 않으므로 호출이 완료되기 전에 현재 메서드가 계속 실행됩니다.

        public string Trace()
        {
            string trace = "================================================\n";
            trace += $"Routing table of [{_thisPeer.Address.ToHex()}]";
            for (int i = 0; i < TableSize; i++)
            {
                if (!_routing.BucketOf(i).Empty())
                {
                    trace += $"\nBucket {i} : ";
                    foreach (Peer peer in _routing.BucketOf(i).Peers)
                    {
                        trace += $"[{peer.Address.ToHex()}], ";
                    }

                    trace = trace.TrimEnd(' ', ',');
                }
            }

            return trace.Trim('\n');
        }

        private string MakePingId(byte[] echoed, Peer peer)
        {
            return ByteUtil.Hex(echoed) + peer.PublicKey.ToAddress().ToString();
        }

#pragma warning disable SA1202 // Elements should be ordered by access
        internal async Task PingAsync(
            Peer target,
            Peer replacement = null,
            bool withoutTimeout = false,
            bool bootstrap = false)
#pragma warning restore SA1202 // Elements should be ordered by access
        {
            if (target is null)
            {
                return;
            }

            byte[] echo = new SHA256CryptoServiceProvider()
                .ComputeHash(Encoding.ASCII.GetBytes(
                    _thisPeer.ToString() +
                    DateTimeOffset.UtcNow.ToUnixTimeMilliseconds()));
            string pingid = MakePingId(echo, target);
            _expectedPongs[pingid] = new ExpectedPong(null, target, replacement, bootstrap);
            await SendPingAsync(target, echo);
            _logger.Debug($"Ping's echo: ({ByteUtil.Hex(echo)})");
            if (!withoutTimeout)
            {
                DateTimeOffset timeout =
                    DateTimeOffset.UtcNow + TimeSpan.FromMilliseconds(RequestTimeout);
                if (_expectedPongs.ContainsKey(pingid))
                {
                    _expectedPongs[pingid] =
                        new ExpectedPong(timeout, target, replacement, bootstrap);
                }
                else
                {
                    _logger.Debug($"Pong of echo ({echo}) is received before setting the timeout.");
                }
            }
        }

        private async Task DoFindPeerAsync(Address target, Peer viaPeer = null)
        {
            _findRequests[target] = new FindRequest(
                DateTimeOffset.UtcNow + TimeSpan.FromMilliseconds(RequestTimeout));
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
            await _swarm.SendMessageAsync(addressee, ping);
        }

        private async Task SendPongAsync(
            Peer addressee,
            byte[] echoed)
        {
            Pong pong = new Pong(_appProtocolVersion, null, echoed);
            await _swarm.SendMessageAsync(addressee, pong);
        }

        private async Task SendNeighboursAsync(Peer addressee, List<Peer> found)
        {
            // implemented as reply of FindPeer
            Neighbours neighbours = new Neighbours(found);
            await _swarm.SendMessageAsync(addressee, neighbours);
        }

        private async Task SendFindPeerAsync(Peer addressee, Address target)
        {
            FindPeer findPeer = new FindPeer(target);
            await _swarm.SendMessageAsync(addressee, findPeer);
        }

        // send pong back to remote
        private async Task ReceivePingAsync(Peer remote, byte[] echo)
        {
            if (remote == _thisPeer)
            {
                throw new ArgumentException(
                    "Cannot receive ping from self");
            }

            await UpdateAsync(remote);
            await SendPongAsync(remote, echo);
        }

        // receive pong
        private async Task ReceivePongAsync(Peer remote, byte[] echoed)
        {
            if (remote == _thisPeer)
            {
                throw new ArgumentException(
                    "Cannot receive pong from self");
            }

            _logger.Debug($"Pong's echo: ({ByteUtil.Hex(echoed)})");
            string pingid = MakePingId(echoed, remote);

            // update process required
            await UpdateAsync(remote, pingid);
        }

        private async Task ReceiveNeighboursAsync(Peer remote, List<Peer> found)
        {
            if (_cancellationToken.IsCancellationRequested)
            {
                return;
            }

            List<Peer> peers = new List<Peer>();
            List<Task> tasks = new List<Task>();
            foreach (Peer peer in found)
            {
                if (peer != _thisPeer && !_routing.Contains(peer))
                {
                    peers.Add(peer);
                }
            }

            foreach (KeyValuePair<Address, FindRequest> entry in _findRequests)
            {
                if (DateTimeOffset.UtcNow > entry.Value.Timeout)
                {
                    _logger.Debug($"Neighbours from [{remote.Address.ToHex()}] timeouted.");
                    continue;
                }

                Address target = entry.Key;
                peers = Kademlia.SortByDistance(peers, entry.Key);

                List<Peer> closest_candidate = _routing.Neighbours(target, BucketSize).ToList();
                Peer closest_known = closest_candidate.Count == 0 ? null : closest_candidate[0];
                for (int i = 0; i < FindConcurrency && i < peers.Count; i++)
                {
                    if (_cancellationToken.IsCancellationRequested)
                    {
                        return;
                    }

                    if ((closest_known is null ||
                        string.Compare(
                            Kademlia.CalculateDistance(peers[i].Address, entry.Key).ToHex(),
                            Kademlia.CalculateDistance(closest_known.Address, entry.Key).ToHex()
                        ) < 1) &&
                        !entry.Value.Sent.Contains(peers[i]))
                    {
                        // This prevents sending find request again to same peer
                        // FIXME: this is required? not contained in original implementation
                        entry.Value.Sent.Add(peers[i]);
                        tasks.Add(SendFindPeerAsync(peers[i], entry.Key));
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
        private async Task ReceiveFindPeerAsync(Peer remote, Address target)
        {
            await UpdateAsync(remote);
            List<Peer> found = _routing.Neighbours(target, BucketSize).ToList();
            await SendNeighboursAsync(remote, found);
        }

        // expected pong data type.
        // this contiains timeout for ping, pinged target
        // and replacement candidate(LRU peer).
        [Serializable]
        private struct ExpectedPong
        {
            public ExpectedPong(
                DateTimeOffset? timeout,
                Peer target,
                Peer replacement,
                bool bootstrap)
            {
                Timeout = timeout;
                Target = target;
                Replacement = replacement;
                Bootstrap = bootstrap;
            }

            public DateTimeOffset? Timeout { get; set; }

            public Peer Target { get; }

            public Peer Replacement { get; }

            public bool Bootstrap { get; }
        }

        // find request data type.
        // this contains timeout for a find request
        // and peers that already sent this request to
        [Serializable]
        private struct FindRequest
        {
            public FindRequest(DateTimeOffset timeout)
            {
                Timeout = timeout;
                Sent = new List<Peer>();
            }

            public DateTimeOffset Timeout { get; }

            public List<Peer> Sent { get; }
        }
    }
}
