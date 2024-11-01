// SPDX-FileCopyrightText: 2024 Demerzel Solutions Limited
// SPDX-License-Identifier: MIT

using System.Collections.Concurrent;
using Multiformats.Address;

namespace Libplanet.Node.Services;

public class MessageChannel : IMessageChannel
{
    private readonly ConcurrentDictionary<Multiaddress, ConcurrentBag<byte[]>>
        _messagesToSend = new();

    public EventHandler<(Multiaddress, byte[], Action<byte[]>)>? OnMessageReceived
    {
        get;
        set;
    }

    public void SendMessage(Multiaddress address, byte[] message)
    {
        if (!_messagesToSend.TryGetValue(address, out ConcurrentBag<byte[]>? bag))
        {
            bag = [];
            _messagesToSend.TryAdd(address, bag);
        }

        bag.Add(message);
    }

    public void ReceiveMessage(
        Multiaddress sender,
        byte[] message,
        Action<byte[]> callback)
    {
        OnMessageReceived?.Invoke(this, (sender, message, callback));
    }

    public bool TryGetMessageToSend(Multiaddress address, out byte[]? message)
    {
        if (_messagesToSend.TryGetValue(address, out ConcurrentBag<byte[]>? bag))
        {
            if (bag.IsEmpty)
            {
                message = null;
                return false;
            }

            return bag.TryTake(out message);
        }

        message = null;
        return false;
    }
}
