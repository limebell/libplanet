using System.Buffers;
using Libplanet.Node.Services;
using Nethermind.Libp2p.Core;

namespace Libplanet.Node.Protocols
{
    internal class PingPongProtocol(IMessageChannel messageChannel) : IProtocol
    {
        public string Id => "/blockchain/ping-pong/1.0.0";

        public async Task DialAsync(
            IChannel downChannel,
            IChannelFactory? upChannelFactory,
            IPeerContext context)
        {
            TimeSpan elapsed = TimeSpan.Zero;

            _ = Task.Run(
                async () =>
                {
                    while (true)
                    {
                        ReadOnlySequence<byte> read =
                            await downChannel.ReadAsync(0, ReadBlockingMode.WaitAny).OrThrow();
                        messageChannel.ReceiveMessage(
                            context.RemotePeer.Address,
                            read.ToArray(),
                            reply => _ =
                                downChannel.WriteAsync(
                                    new ReadOnlySequence<byte>(reply)));
                    }
                });

            // Keep connection for 5 seconds
            while (true)
            {
                if (messageChannel.TryGetMessageToSend(
                        context.RemotePeer.Address,
                        out byte[]? msg))
                {
                    if (msg is not null)
                    {
                        await downChannel.WriteAsync(
                            new ReadOnlySequence<byte>(msg));
                    }

                    elapsed = TimeSpan.Zero;
                }
                else
                {
                    await Task.Delay(50);
                    elapsed += TimeSpan.FromMilliseconds(50);
                }
            }
        }

        public async Task ListenAsync(
            IChannel downChannel,
            IChannelFactory? upChannelFactory,
            IPeerContext context)
        {
            while (true)
            {
                ReadOnlySequence<byte> read =
                    await downChannel.ReadAsync(0, ReadBlockingMode.WaitAny).OrThrow();
                messageChannel.ReceiveMessage(
                    context.RemotePeer.Address,
                    read.ToArray(),
                    msg => _ =
                        downChannel.WriteAsync(
                            new ReadOnlySequence<byte>(msg)));
            }
        }
    }
}
