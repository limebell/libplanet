using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Libplanet.Net.Protocols;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal class Neighbours : Message
    {
        public Neighbours(IEnumerable<Peer> found)
        {
            if (found.Count() > int.MaxValue)
            {
                throw new ArgumentOutOfRangeException(
                    nameof(found),
                    $"The number of found peers can't exceed {int.MaxValue}.");
            }

            Found = found.ToList();
        }

        public Neighbours(NetMQFrame[] body)
        {
            int foundCount = body[0].ConvertToInt32();
            Found = body.Skip(1).Take(foundCount)
                .Select(f => Peer.Deserialize(f.ToByteArray()))
                .ToList();
        }

        public List<Peer> Found { get; }

        protected override MessageType Type => MessageType.Neighbours;

        protected override IEnumerable<NetMQFrame> DataFrames
        {
            get
            {
                yield return new NetMQFrame(
                    NetworkOrderBitsConverter.GetBytes(Found.Count));

                foreach (Peer peer in Found)
                {
                    yield return new NetMQFrame(peer.Serialize());
                }
            }
        }
    }
}
