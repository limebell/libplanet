using System.Collections.Generic;
using System.Linq;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class Ping : Message
    {
        public Ping(byte[] echo = null)
        {
            Echo = echo;
        }

        public Ping(NetMQFrame[] body)
        {
            Echo = body[0].ToByteArray();
        }

        public byte[] Echo { get; }

        protected override MessageType Type => MessageType.Ping;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(Echo);
            }
        }
    }
}
