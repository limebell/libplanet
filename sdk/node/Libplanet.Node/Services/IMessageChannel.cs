using Libplanet.Net.Messages;
using Libplanet.Node.Protocols;
using Multiformats.Address;

namespace Libplanet.Node.Services;

public interface IMessageChannel
{
    EventHandler<(Multiaddress, byte[], Action<byte[]>)>? OnMessageReceived
    {
        get;
        set;
    }

    void SendMessage(Multiaddress address, byte[] message);

    void ReceiveMessage(
        Multiaddress sender,
        byte[] message,
        Action<byte[]> callback);

    bool TryGetMessageToSend(Multiaddress address, out byte[]? message);
}
