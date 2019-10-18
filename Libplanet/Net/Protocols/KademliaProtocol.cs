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
        private readonly TimeSpan _requestTimeout;
        private readonly Swarm<T> _swarm;
        private readonly Address _address;
        private readonly int _appProtocolVersion;
        private readonly System.Random _random;
        private readonly RoutingTable _routing;
        private readonly int _tableSize;
        private readonly int _bucketSize;

        private readonly ILogger _logger;

        public KademliaProtocol(
            Swarm<T> swarm,
            Address address,
            int appProtocolVersion,
            ILogger logger,
            int? tableSize,
            int? bucketSize,
            TimeSpan? requestTimeout = null)
        {
            _swarm = swarm;
            _appProtocolVersion = appProtocolVersion;
            _logger = logger;

            _address = address;
            _random = new System.Random();
            _tableSize = tableSize ?? Kademlia.TableSize;
            _bucketSize = bucketSize ?? Kademlia.BucketSize;
            _routing = new RoutingTable(_address, _tableSize, _bucketSize, _random);
            _requestTimeout =
                requestTimeout ??
                TimeSpan.FromMilliseconds(Kademlia.IdleRequestTimeout);
        }

        public int Count => _routing.Count;

        public ImmutableList<BoundPeer> Peers
        {
            get
            {
                var peers = new List<BoundPeer>();
                foreach (KBucket bucket in _routing.NonEmptyBuckets)
                {
                    peers.AddRange(bucket.Peers);
                }

                return peers.ToImmutableList();
            }
        }

        public ImmutableList<BoundPeer> PeersToBroadcast
        {
            get
            {
                return _routing.NonEmptyBuckets
                    .Select(bucket => bucket.GetRandomPeer())
                    .ToImmutableList();
            }
        }

        // FIXME: Currently bootstrap is done until it finds closest peer, but it should halt
        // when found neighbor's count is reached 2*k.
        public async Task BootstrapAsync(
            ImmutableList<BoundPeer> bootstrapPeers,
            TimeSpan? pingSeedTimeout,
            TimeSpan? findPeerTimeout,
            CancellationToken cancellationToken)
        {
            if (bootstrapPeers is null)
            {
                throw new ArgumentNullException(nameof(bootstrapPeers));
            }

            var findPeerTasks = new List<Task>();

            foreach (BoundPeer peer in bootstrapPeers.Where(peer => !peer.Address.Equals(_address)))
            {
                // Guarantees at least one connection (seed peer)
                try
                {
                    await PingAsync(peer, pingSeedTimeout, cancellationToken);
                    findPeerTasks.Add(
                        FindPeerAsync(_address, peer, 0, findPeerTimeout, cancellationToken));
                }
                catch (DifferentAppProtocolVersionException)
                {
                    _logger.Error("Version is different from seed peer.");
                    continue;
                }
                catch (TimeoutException)
                {
                    _logger.Error("A timeout exception occurred connecting to seed peer.");
                    await RemovePeerAsync(peer);
                    continue;
                }
                catch (Exception)
                {
                    _logger.Error("An unexpected exception occurred connecting to seed peer.");
                    continue;
                }
            }

            if (Peers.Count == 0)
            {
                // FIXME: Need more precise exception
                throw new SwarmException("No seed available.");
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
                if (findPeerTasks.All(findPeerTask => findPeerTask.IsFaulted))
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

            // TODO: Remove seed peers from table
            // This requires a seed peer that does not run any blockchain related tasks.
            /*foreach (BoundPeer peer in bootstrapPeers)
            {
                await RemovePeerAsync(peer);
            }*/
        }

        /// <summary>
        /// Periodically checks whether <see cref="Peer"/>s in <see cref="RoutingTable"/> is
        /// online by sending <see cref="Ping"/>.
        /// </summary>
        /// <param name="period">The cycle in which the operation is executed.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        public async Task RefreshTableAsync(
            TimeSpan period,
            CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                try
                {
                    await Task.Delay(period, cancellationToken);

                    _logger.Debug("Refreshing table...");
                    List<Task> tasks = PeersToBroadcast.Select(
                        peer => PingAsync(peer, _requestTimeout, cancellationToken)).ToList();

                    await Task.WhenAll(tasks);
                    cancellationToken.ThrowIfCancellationRequested();
                }
                catch (OperationCanceledException e)
                {
                    _logger.Warning(e, $"{nameof(RefreshTableAsync)}() is cancelled.");
                    throw;
                }
                catch (TimeoutException)
                {
                }
            }
        }

        /// <summary>
        /// Reconstructs network connection between peers on network. It runs operation once
        /// right after called, repeated every <see cref="TimeSpan"/> of <paramref name="period"/>.
        /// </summary>
        /// <param name="period">The cycle in which the operation is executed.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>>An awaitable task without value.</returns>
        public async Task RebuildConnectionAsync(
            TimeSpan period,
            CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                _logger.Debug("Rebuilding connection...");
                var buffer = new byte[20];
                var tasks = new List<Task>();
                for (int i = 0; i < Kademlia.FindConcurrency; i++)
                {
                    _random.NextBytes(buffer);
                    tasks.Add(FindPeerAsync(
                        new Address(buffer),
                        null,
                        -1,
                        _requestTimeout,
                        cancellationToken));
                }

                tasks.Add(FindPeerAsync(_address, null, -1, _requestTimeout, cancellationToken));
                try
                {
                    await Task.WhenAll(tasks);
                }
                catch (TimeoutException)
                {
                }

                await Task.Delay(period, cancellationToken);
            }
        }

#pragma warning disable CS4014
        public void ReceiveMessage(object sender, Message message)
        {
            switch (message)
            {
                case Ping ping:
                    ReceivePingAsync(ping);
                    break;

                case FindNeighbors findPeer:
                    ReceiveFindPeerAsync(findPeer);
                    break;

                default:
                    UpdateAsync(message.Remote);
                    break;
            }
        }
#pragma warning restore CS4014

        public string Trace()
        {
            var trace = $"Routing table of [{_address.ToHex()}]\n";
            var count = 0;
            for (var i = 0; i < _tableSize; i++)
            {
                if (_routing.BucketOf(i).IsEmpty())
                {
                    continue;
                }

                trace += $"**Bucket {i}**\n";
                trace = _routing.BucketOf(i).Peers.Aggregate(trace, (current, peer) =>
                    current + $"{++count} : [{peer.Address.ToHex()}]\n");

                trace = trace.TrimEnd(' ', ',');
            }

            return $"Total peer count: {count}\n{trace.Trim('\n')}";
        }

        internal async Task PingAsync(
            BoundPeer target,
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
                if (!(await _swarm.SendMessageWithReplyAsync(
                    target,
                    new Ping(),
                    timeout,
                    cancellationToken) is Pong pong))
                {
                    throw new InvalidMessageException(
                        "Received pong is invalid.");
                }

                if (pong.Remote.Address.Equals(_address))
                {
                    throw new InvalidMessageException(
                        "Cannot receive pong from self");
                }

                _logger.Verbose(
                    $"Trying to {nameof(UpdateAsync)}() with pong: {{Pong}}",
                    pong);

                // update process required
                await UpdateAsync(pong.Remote, cancellationToken);
                _logger.Verbose(
                    $"{nameof(UpdateAsync)}() finished with pong: {{Pong}}",
                    pong);
            }
            catch (TimeoutException)
            {
                throw new TimeoutException($"Timeout occurred during {nameof(PingAsync)}().");
            }
            catch (DifferentAppProtocolVersionException)
            {
                _logger.Debug("Different AppProtocolVersion encountered at PingAsync.");
                throw;
            }
        }

        // This updates routing table when receiving a message.
        // if corresponding bucket for remote peer is not full, just adds remote peer.
        // otherwise check whether if the least recently used (LRU) peer
        // is alive to determine evict LRU peer or discard remote peer.
        private async Task UpdateAsync(
            Peer rawPeer,
            CancellationToken cancellationToken = default(CancellationToken))
        {
            if (rawPeer is null)
            {
                throw new ArgumentNullException(nameof(rawPeer));
            }

            if (!(rawPeer is BoundPeer peer) || rawPeer.AppProtocolVersion != _appProtocolVersion)
            {
                // Don't update peer without endpoint or with different appProtocolVersion.
                return;
            }

            if (cancellationToken.IsCancellationRequested)
            {
                throw new TaskCanceledException();
            }

            bool contains = _routing.Contains(peer);
            BoundPeer evictionCandidate = await _routing.AddPeerAsync(peer);
            if (evictionCandidate is null)
            {
                // added successfully since there was empty space in the bucket
                if (!contains)
                {
                    _routing.BucketOf(peer).ReplacementCache.Remove(peer);
                    _logger.Debug($"Added [{peer.Address.ToHex()}] to table");
                }
            }
            else
            {
                _logger.Verbose(
                    "Need to evict {Candidate}; trying...",
                    evictionCandidate);
                try
                {
                    if (!_routing.BucketOf(peer).ReplacementCache.Contains(peer))
                    {
                        _routing.BucketOf(peer).ReplacementCache.Add(peer);
                    }

                    await PingAsync(
                        evictionCandidate,
                        _requestTimeout,
                        cancellationToken);
                }
                catch (TimeoutException)
                {
                    await RemovePeerAsync(evictionCandidate);
                    _logger.Verbose(
                        "Peer ({Candidate}) has been evicted.",
                        evictionCandidate);
                }
            }
        }

        // FIXME: If this method is called almost same time, problem occurs.
        private async Task RemovePeerAsync(BoundPeer peer)
        {
            _logger.Debug($"Removing peer [{peer.Address.ToHex()}] from table.");
            await _routing.RemovePeerAsync(peer);
            var bucket = _routing.BucketOf(peer);
            var cachePeers = new BoundPeer[bucket.ReplacementCache.Count];
            bucket.ReplacementCache.CopyTo(cachePeers);
            foreach (BoundPeer replacement in cachePeers)
            {
                // FIXME: appropriate cancellation token required.
                try
                {
                    await PingAsync(replacement, _requestTimeout, CancellationToken.None);
                    break;
                }
                catch (TimeoutException)
                {
                    bucket.ReplacementCache.Remove(replacement);
                }
            }
        }

        /// <summary>
        /// Send <see cref="FindNeighbors"/> messages to <paramref name="viaPeer"/>
        /// to find <see cref="Peer"/>s near <paramref name="target"/>.
        /// </summary>
        /// <param name="target">The <see cref="Address"/> to find.</param>
        /// <param name="viaPeer">The target <see cref="Peer"/> to send <see cref="FindNeighbors"/>
        /// message. If null, selects 3 <see cref="Peer"/>s from <see cref="RoutingTable"/> of
        /// self.</param>
        /// <param name="depth">Target depth of recursive operation.</param>
        /// <param name="timeout"><see cref="TimeSpan"/> for waiting reply of
        /// <see cref="FindNeighbors"/>.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        private async Task FindPeerAsync(
            Address target,
            BoundPeer viaPeer,
            int depth,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            if (depth >= Kademlia.MaxDepth)
            {
                return;
            }

            ImmutableList<BoundPeer> found;
            if (viaPeer is null)
            {
                found = await QueryNeighborsAsync(target, timeout, cancellationToken);
            }
            else
            {
                found = await GetNeighbors(viaPeer, target, timeout, cancellationToken);
            }

            await ProcessFoundAsync(found, target, depth, timeout, cancellationToken);
        }

        private async Task<ImmutableList<BoundPeer>> QueryNeighborsAsync(
            Address target,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            List<BoundPeer> neighbors = _routing.Neighbors(target, _bucketSize).ToList();
            var found = new List<BoundPeer>();
            int count = (neighbors.Count < Kademlia.FindConcurrency)
                ? neighbors.Count
                : Kademlia.FindConcurrency;
            bool timeoutOccurred = true;
            for (int i = 0; i < count; i++)
            {
                try
                {
                    found.AddRange(
                        await GetNeighbors(neighbors[i], target, timeout, cancellationToken));
                    timeoutOccurred = false;
                }
                catch (TimeoutException)
                {
                    continue;
                }
            }

            if (count != 0 && timeoutOccurred)
            {
                _logger.Debug($"Timeout occurred during {nameof(QueryNeighborsAsync)}.");
                throw new TimeoutException(
                    $"Timeout occurred during {nameof(QueryNeighborsAsync)}.");
            }

            return found.ToImmutableList();
        }

        private async Task<ImmutableList<BoundPeer>> GetNeighbors(
            BoundPeer addressee,
            Address target,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            var findPeer = new FindNeighbors(target);
            try
            {
                if (!(await _swarm.SendMessageWithReplyAsync(
                    addressee,
                    findPeer,
                    timeout,
                    cancellationToken) is Neighbors neighbors))
                {
                    throw new InvalidMessageException("Reply of FindNeighbors is invalid.");
                }

                return neighbors.Found.ToImmutableList();
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

            Pong pong = new Pong((long?)null)
            {
                Identity = ping.Identity,
            };

            _swarm.ReplyMessage(pong);

            await UpdateAsync(ping.Remote);
        }

        /// <summary>
        /// Process <see cref="Peer"/>s that is replied by sending <see cref="FindNeighbors"/>
        /// request.
        /// </summary>
        /// <param name="found"><see cref="Peer"/>s that found.</param>
        /// <param name="target">The target <see cref="Address"/> to search.</param>
        /// <param name="depth">Target depth of recursive operation. If -1 is given,
        /// it runs until the closest peer is found.</param>
        /// <param name="timeout"><see cref="TimeSpan"/> for next depth's
        /// <see cref="FindPeerAsync"/> operation.</param>
        /// <param name="cancellationToken">A cancellation token used to propagate notification
        /// that this operation should be canceled.</param>
        /// <returns>An awaitable task without value.</returns>
        /// <exception cref="TimeoutException">Thrown when all peers that found are
        /// not online.</exception>
        private async Task ProcessFoundAsync(
            ImmutableList<BoundPeer> found,
            Address target,
            int depth,
            TimeSpan? timeout,
            CancellationToken cancellationToken)
        {
            List<BoundPeer> peers = found.Where(
                peer => !peer.Address.Equals(_address) && !_routing.Contains(peer)).ToList();

            if (peers.Count == 0)
            {
                _logger.Debug("No any neighbor received.");
                return;
            }

            peers = Kademlia.SortByDistance(peers, target);

            List<BoundPeer> closestCandidate = _routing.Neighbors(target, _bucketSize).ToList();

            Task[] awaitables = peers.Select(peer =>
                PingAsync(peer, _requestTimeout, cancellationToken)
            ).ToArray();
            try
            {
                await Task.WhenAll(awaitables);
            }
            catch (AggregateException e)
            {
                if (e.InnerExceptions.All(ie => ie is TimeoutException) &&
                    e.InnerExceptions.Count == awaitables.Length)
                {
                    throw new TimeoutException(
                        $"All neighbors found do not respond in {_requestTimeout}."
                    );
                }

                _logger.Error(
                    e,
                    "Some responses from neighbors found unexpectedly terminated: {Exception}",
                    e
                );
            }

            var findNeighboursTasks = new List<Task>();
            Peer closestKnown = closestCandidate.Count == 0 ? null : closestCandidate[0];
            for (int i = 0; i < Kademlia.FindConcurrency && i < peers.Count; i++)
            {
                if (closestKnown is null ||
                    string.CompareOrdinal(
                        Kademlia.CalculateDistance(peers[i].Address, target).ToHex(),
                        Kademlia.CalculateDistance(closestKnown.Address, target).ToHex()
                    ) < 1)
                {
                    findNeighboursTasks.Add(FindPeerAsync(
                        target,
                        peers[i],
                        (depth == -1) ? depth : depth + 1,
                        timeout,
                        cancellationToken));
                }
            }

            try
            {
                await Task.WhenAll(findNeighboursTasks);
            }
            catch (TimeoutException)
            {
                if (findNeighboursTasks.All(findPeerTask => findPeerTask.IsFaulted))
                {
                    throw new TimeoutException(
                        "Timeout exception occurred during ProcessFoundAsync().");
                }
            }
        }

        // FIXME: this method is not safe from amplification attack
        // maybe ping/pong/ping/pong is required
        private async Task ReceiveFindPeerAsync(FindNeighbors findNeighbors)
        {
            if (!(findNeighbors.Remote is null))
            {
                await UpdateAsync(findNeighbors.Remote);
            }

            List<BoundPeer> found = _routing.Neighbors(findNeighbors.Target, _bucketSize).ToList();

            Neighbors neighbors = new Neighbors(found)
            {
                Identity = findNeighbors.Identity,
            };

            _swarm.ReplyMessage(neighbors);
        }
    }
}
