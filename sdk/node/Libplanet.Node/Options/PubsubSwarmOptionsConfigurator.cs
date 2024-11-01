using Libplanet.Common;
using Libplanet.Crypto;
using Microsoft.Extensions.Logging;

namespace Libplanet.Node.Options;

internal sealed class PubsubSwarmOptionsConfigurator(
    ILogger<PubsubSwarmOptionsConfigurator> logger)
    : OptionsConfiguratorBase<PubsubSwarmOptions>
{
    protected override void OnConfigure(PubsubSwarmOptions options)
    {
        if (options.PrivateKey == string.Empty)
        {
            options.PrivateKey = ByteUtil.Hex(new PrivateKey().ByteArray);
            logger.LogWarning(
                "Node's private key is not set. A new private key is generated: {PrivateKey}",
                options.PrivateKey);
        }
    }
}
