using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Net.Messages;

namespace Libplanet.Net.Protocols
{
    internal interface IProtocol
    {
        int Count { get; }

        ImmutableList<Peer> Peers { get; }

        ImmutableList<Peer> PeersToBroadcast { get; }

        Task BootstrapAsync(List<Peer> bootstrapPeers, CancellationToken cancellationToken);

        void ReceiveMessage(object sender, Message message);

        void Timeout(object senter, Peer peer);
    }
}
