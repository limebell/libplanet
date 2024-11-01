using Libplanet.Net.Messages;

namespace Libplanet.Node.Protocols;

public static class MessageContentCodec
{
    public static MessageContent Deserialize(byte[] bytes)
    {
        var rawFrames = bytes;
        var type = rawFrames[0];
        rawFrames = rawFrames.Skip(1).ToArray();
        var dataFrames = new List<byte[]>();
        var frameCount = BitConverter.ToInt32(rawFrames[..4]);
        rawFrames = rawFrames.Skip(4).ToArray();
        for (int i = 0; i < frameCount; i++)
        {
            var frameSize = BitConverter.ToInt32(rawFrames[..4]);
            dataFrames.Add(rawFrames.Skip(4).Take(frameSize).ToArray());
            rawFrames = rawFrames.Skip(4 + frameSize).ToArray();
        }

        return NetMQMessageCodec.CreateMessage(
            (MessageContent.MessageType)type,
            dataFrames.ToArray());
    }

    public static byte[] Serialize(MessageContent messageContent)
    {
        IEnumerable<byte> ba = [(byte)messageContent.Type];
        ba = ba.Concat(BitConverter.GetBytes(messageContent.DataFrames.Count()));
        foreach (var bytes in messageContent.DataFrames)
        {
            ba = ba.Concat(BitConverter.GetBytes(bytes.Length));
            ba = ba.Concat(bytes);
        }

        return ba.ToArray();
    }
}
