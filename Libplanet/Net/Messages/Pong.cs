using System.Collections.Generic;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class Pong : Message
    {
        public Pong(int appProtocolVersion, byte[] echoed)
        {
            AppProtocolVersion = appProtocolVersion;
            Echoed = echoed;
        }

        public Pong(NetMQFrame[] body)
        {
            AppProtocolVersion = body[0].ConvertToInt32();
            Echoed = body[1].ToByteArray();
        }

        public int AppProtocolVersion { get; }

        public byte[] Echoed { get; }

        protected override MessageType Type => MessageType.Pong;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(AppProtocolVersion));
                yield return new NetMQFrame(Echoed);
            }
        }
    }
}
