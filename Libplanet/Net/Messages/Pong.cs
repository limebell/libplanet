using System.Collections.Generic;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class Pong : Message
    {
        public Pong(int appProtocolVersion, long? tipIndex, byte[] echoed)
        {
            AppProtocolVersion = appProtocolVersion;
            TipIndex = tipIndex;
            Echoed = echoed;
        }

        public Pong(NetMQFrame[] body)
        {
            AppProtocolVersion = body[0].ConvertToInt32();
            TipIndex = body[1].ConvertToInt64();
            Echoed = body[2].ToByteArray();

            if (TipIndex < 0)
            {
                TipIndex = null;
            }
        }

        public int AppProtocolVersion { get; }

        public long? TipIndex { get; }

        public byte[] Echoed { get; }

        protected override MessageType Type => MessageType.Pong;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(AppProtocolVersion));
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(TipIndex ?? -1));
                yield return new NetMQFrame(Echoed);
            }
        }
    }
}
