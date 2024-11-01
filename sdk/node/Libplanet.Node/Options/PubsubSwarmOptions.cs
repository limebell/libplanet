using System.ComponentModel;
using Libplanet.Node.DataAnnotations;

namespace Libplanet.Node.Options;

[Options(Position)]
public class PubsubSwarmOptions : OptionsBase<PubsubSwarmOptions>
{
    public const string Position = "PubsubSwarm";

    public bool Proposer { get; set; }

    public long BlockInterval { get; set; } = 4000;

    [PrivateKey]
    [Description("The private key of the node.")]
    public string PrivateKey { get; set; } = string.Empty;
}
