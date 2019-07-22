using System.Collections.Generic;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class FindPeer : Message
    {
        public FindPeer(Address target)
        {
            Target = target;
        }

        public FindPeer(NetMQFrame[] body)
        {
            Target = new Address(body[0].ToByteArray());
        }

        public Address Target { get; }

        protected override MessageType Type => MessageType.FindPeer;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(Target.ToByteArray());
            }
        }
    }
}
