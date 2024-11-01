using System.Text;
using Bencodex;
using Libplanet.Blockchain;
using Libplanet.Crypto;
using Libplanet.Net.Messages;
using Libplanet.Node.Options;
using Libplanet.Node.Protocols;
using Libplanet.Types.Blocks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Multiformats.Address;
using Nethermind.Libp2p.Core;
using Nethermind.Libp2p.Protocols;
using Nethermind.Libp2p.Protocols.Pubsub;

namespace Libplanet.Node.Services;

public class PubsubSwarmService(IServiceProvider serviceProvider) : BackgroundService
{
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        await using var serviceScope = serviceProvider.CreateAsyncScope();
        var swarm = serviceScope.ServiceProvider.GetRequiredService<PubsubSwarm>();

        await swarm.StartAsync(stoppingToken);
    }
}
