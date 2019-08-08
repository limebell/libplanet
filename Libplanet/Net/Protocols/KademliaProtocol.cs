using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading;
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
        private const int FindConcurrency = 3;

        // FIXME: This should be configurable?
        private static readonly TimeSpan RequestTimeout = TimeSpan.FromMilliseconds(3 * 1000);
        private static readonly TimeSpan IdleBucketRefreshInterval = TimeSpan.FromMinutes(30);

        private readonly Swarm<T> _swarm;
        private readonly Address _address;
        private readonly int _appProtocolVersion;
        private readonly System.Random _random;
        private readonly RoutingTable _routing;
        private readonly CancellationToken _cancellationToken;

        private readonly ILogger _logger;

        public KademliaProtocol(
            Swarm<T> swarm,
            Address address,
            int appProtocolVersion,
            CancellationToken cancellationToken,
            ILogger logger)
        {
            _swarm = swarm;
            _appProtocolVersion = appProtocolVersion;
            _cancellationToken = cancellationToken;
            _logger = logger;

            _address = address;
            _random = new System.Random();
            _routing = new RoutingTable(
                _address, TableSize, BucketSize, _random);
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
            ImmutableList<Peer> bootstrapPeers,
            TimeSpan? pingSeedTimeout,
            TimeSpan? findPeerTimeout,
            CancellationToken cancellationToken)
        {
            if (bootstrapPeers is null)
            {
                throw new ArgumentNullException(nameof(bootstrapPeers));
            }

            List<Task> findPeerTasks = new List<Task>();

            foreach (Peer peer in bootstrapPeers)
            {
                if (peer.Address.Equals(_address))
                {
                    continue;
                }

                // Guarantees at least one connection (seed peer)
                try
                {
                    await PingAsync(peer, pingSeedTimeout, cancellationToken);
                    findPeerTasks.Add(
                        FindPeerAsync(_address, peer, findPeerTimeout, cancellationToken));
                }
                catch (TimeoutException)
                {
                    _logger.Error("A timeout exception occurred connecting to seed peer.");
                    continue;
                }
                catch (Exception)
                {
                    _logger.Error("An unexpected exception occurred connecting to seed peer.");
                    continue;
                }
            }

            if (findPeerTasks.Count == 0)
            {
                throw new SwarmException("Bootstrap failed.");
            }

            try
            {
                await Task.WhenAll(findPeerTasks);
            }
            catch (TimeoutException)
            {
                bool timeoutOccurred = true;

                foreach (Task findPeerTask in findPeerTasks)
                {
                    if (!findPeerTask.IsFaulted)
                    {
                        timeoutOccurred = false;
                        break;
                    }
                }

                if (timeoutOccurred)
                {
                    throw new TimeoutException(
                        "Timeout exception occurred during BootstrapAsync().");
                }
            }
            catch (Exception)
            {
                _logger.Error("An unexpected exception occurred during BootstrapAsync().");
                throw;
            }
        }

        public async Task RefreshAsync(CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                await Task.Delay(IdleBucketRefreshInterval, cancellationToken);

                byte[] buffer = new byte[20];
                List<Task> tasks = new List<Task>();
                for (int i = 0; i < FindConcurrency; i++)
                {
                    _random.NextBytes(buffer);
                    tasks.Add(FindPeerAsync(
                        new Address(buffer),
                        null,
                        RequestTimeout,
                        cancellationToken));
                }

                tasks.Add(FindPeerAsync(_address, null, RequestTimeout, cancellationToken));
                try
                {
                    await Task.WhenAll(tasks);
                }
                catch (TimeoutException)
                {
                }
            }
        }

#pragma warning disable CS4014 // 이 호출을 대기하지 않으므로 호출이 완료되기 전에 현재 메서드가 계속 실행됩니다.
        public void ReceiveMessage(object sender, Message message)
        {
            switch (message)
            {
                case Ping ping:
                    ReceivePingAsync(ping);
                    break;

                case FindPeer findPeer:
                    ReceiveFindPeerAsync(findPeer);
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
            trace += $"Routing table of [{_address.ToHex()}]";
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

        internal async Task PingAsync(
            Peer target,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            if (target is null)
            {
                throw new ArgumentNullException(nameof(target));
            }

            if (cancellationToken.IsCancellationRequested)
            {
                return;
            }

            try
            {
                Pong pong = await _swarm.SendMessageWithReplyAsync(
                        target,
                        new Ping(),
                        timeout,
                        cancellationToken) as Pong;
                if (pong.Remote.Address.Equals(_address))
                {
                    throw new ArgumentException(
                        "Cannot receive pong from self");
                }

                // update process required
                await UpdateAsync(pong.Remote, cancellationToken);
            }
            catch (TimeoutException)
            {
                await RemovePeerAsync(target);
                throw;
            }
            catch (DifferentAppProtocolVersionException)
            {
                _logger.Debug("Different AppProtocolVersion encountered at PingAsync.");
            }
            catch (Exception)
            {
                throw;
            }
        }

        // This updates routing table when receiving a message.
        // if corresponding bucket for remote peer is not full, just adds remote peer.
        // otherwise check whether if the least recently used (LRU) peer
        // is alive to determine evict LRU peer or discard remote peer.
        private async Task UpdateAsync(
            Peer peer,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (peer is null)
            {
                throw new ArgumentNullException(nameof(peer));
            }

            if (cancellationToken == default(CancellationToken))
            {
                cancellationToken = _cancellationToken;
            }

            if (cancellationToken.IsCancellationRequested)
            {
                throw new TaskCanceledException();
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
                    try
                    {
                        await PingAsync(
                            peer,
                            RequestTimeout,
                            cancellationToken);
                        _routing.BucketOf(peer).ReplacementCache.Add(evictionCandidate);
                    }
                    catch (TimeoutException)
                    {
                        await RemovePeerAsync(peer);
                        await _routing.AddPeerAsync(evictionCandidate);
                    }
                }
            }

            /*foreach (KBucket bucket in _routing.NonFullBuckets)
            {
                foreach (Peer replacement in bucket.ReplacementCache)
                {
                    await PingAsync(replacement);
                }
            }*/
        }

        private async Task RemovePeerAsync(Peer peer)
        {
            _logger.Debug($"Removing peer [{peer.Address.ToHex()}] from table.");
            await _routing.RemovePeerAsync(peer);
        }

        private async Task FindPeerAsync(
            Address target,
            Peer viaPeer,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            ImmutableList<Peer> found;
            if (viaPeer is null)
            {
                found = await QueryNeighboursAsync(target, timeout, cancellationToken);
            }
            else
            {
                found = await GetNeighbours(viaPeer, target, timeout, cancellationToken);
            }

            await ProcessFoundAsync(found, target, timeout, cancellationToken);
        }

        private async Task<ImmutableList<Peer>> QueryNeighboursAsync(
            Address target,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            List<Peer> neighbours = _routing.Neighbours(target, BucketSize).ToList();
            List<Peer> found = new List<Peer>();
            int count = neighbours.Count < FindConcurrency ? neighbours.Count : FindConcurrency;
            bool timeoutOccurred = true;
            for (int i = 0; i < count; i++)
            {
                try
                {
                    found.AddRange(
                        await GetNeighbours(neighbours[i], target, timeout, cancellationToken));
                    timeoutOccurred = false;
                }
                catch (TimeoutException)
                {
                    continue;
                }
            }

            if (count != 0 && timeoutOccurred)
            {
                _logger.Debug("Timeout occurred during QueryNeighboursAsync().");
                throw new TimeoutException("Timeout occurred during QueryNeighboursAsync().");
            }

            return found.ToImmutableList();
        }

        private async Task<ImmutableList<Peer>> GetNeighbours(
            Peer addressee,
            Address target,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            FindPeer findPeer = new FindPeer(target);
            try
            {
                Neighbours neighbours =
                    await _swarm.SendMessageWithReplyAsync(
                        addressee,
                        findPeer,
                        timeout,
                        cancellationToken) as Neighbours;
                return neighbours.Found.ToImmutableList();
            }
            catch (TimeoutException)
            {
                await RemovePeerAsync(addressee);
                throw;
            }
        }

        // send pong back to remote
        private async Task ReceivePingAsync(Ping ping)
        {
            if (ping.Remote.Address.Equals(_address))
            {
                throw new ArgumentException(
                    "Cannot receive ping from self");
            }

            await UpdateAsync(ping.Remote);

            Pong pong = new Pong(_appProtocolVersion, null)
            {
                Identity = ping.Identity,
            };

            _swarm.ReplyMessage(pong);
        }

        private async Task ProcessFoundAsync(
            ImmutableList<Peer> found,
            Address target,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            List<Peer> peers = new List<Peer>();
            foreach (Peer peer in found)
            {
                if (!peer.Address.Equals(_address) && !_routing.Contains(peer))
                {
                    peers.Add(peer);
                }
            }

            if (peers.Count == 0)
            {
                _logger.Debug("No any neighbour received.");
                return;
            }

            peers = Kademlia.SortByDistance(peers, target);

            bool foundPingTimeout = true;
            foreach (Peer peer in peers)
            {
                try
                {
                    // This timeout should be request timeout?
                    await PingAsync(peer, RequestTimeout, cancellationToken);
                    foundPingTimeout = false;
                }
                catch (TimeoutException)
                {
                    continue;
                }
            }

            if (foundPingTimeout)
            {
                _logger.Debug("All neighbours found are invalid.");
                throw new TimeoutException();
            }

            List<Peer> closest_candidate = _routing.Neighbours(target, BucketSize).ToList();
            List<Task> findPeerTasks = new List<Task>();
            Peer closest_known = closest_candidate.Count == 0 ? null : closest_candidate[0];
            for (int i = 0; i < FindConcurrency && i < peers.Count; i++)
            {
                if (closest_known is null ||
                    string.Compare(
                        Kademlia.CalculateDistance(peers[i].Address, target).ToHex(),
                        Kademlia.CalculateDistance(closest_known.Address, target).ToHex()
                    ) < 1)
                {
                    findPeerTasks.Add(
                        FindPeerAsync(target, peers[i], timeout, cancellationToken));
                }
            }

            try
            {
                await Task.WhenAll(findPeerTasks);
            }
            catch (TimeoutException)
            {
                bool timeoutOccurred = true;

                foreach (Task findPeerTask in findPeerTasks)
                {
                    if (!findPeerTask.IsFaulted)
                    {
                        timeoutOccurred = false;
                        break;
                    }
                }

                if (timeoutOccurred)
                {
                    throw new TimeoutException(
                        "Timeout exception occurred during ProcessFoundAsync().");
                }
            }
        }

        // FIXME: this method is not safe from amplification attack
        // maybe ping/pong/ping/pong is required
        private async Task ReceiveFindPeerAsync(FindPeer findPeer)
        {
            await UpdateAsync(findPeer.Remote);
            List<Peer> found = _routing.Neighbours(findPeer.Target, BucketSize).ToList();

            Neighbours neighbours = new Neighbours(found)
            {
                Identity = findPeer.Identity,
            };

            _swarm.ReplyMessage(neighbours);
        }
    }
}
