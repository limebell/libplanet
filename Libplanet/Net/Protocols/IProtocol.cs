using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Protocols
{
    internal interface IProtocol
    {
        int Count { get; }

        ImmutableList<Peer> Peers { get; }

        Task BootstrapAsync(List<Peer> bootstrapPeers);

        Task UpdateAsync();

        Task RecvPingAsync(Ping ping, int appProtocolVersion);

        Task RecvPongAsync(Peer remote, byte[] echoed);

        Task RecvNeighboursAsync(Peer remote, List<Peer> neighbours);

        Task RecvFindPeerAsync(FindPeer findPeer);
    }
}
