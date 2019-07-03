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

        void Bootstrap(List<Peer> bootstrapPeers);

        void Update(Peer peer, string pid);

        void RecvPing(Ping ping, int appProtocolVersion, long? tipIndex);

        void RecvPong(Peer remote, byte[] echoed);

        void RecvNeighbours(Peer remote, List<Peer> neighbours);

        void RecvFindPeer(FindPeer findPeer);
    }
}
