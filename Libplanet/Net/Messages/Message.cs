using System;
using System.Collections.Generic;
using System.Linq;
using Libplanet.Crypto;
using Libplanet.Net.Protocols;
using NetMQ;

namespace Libplanet.Net.Messages
{
    internal abstract class Message
    {
        internal enum MessageType : byte
        {
            /// <summary>
            /// Check message to determine peer is alive.
            /// </summary>
            Ping = 0x01,

            /// <summary>
            /// A reply to <see cref="Ping"/>.
            /// </summary>
            Pong = 0x02,

            /// <summary>
            /// Request to query block hashes.
            /// </summary>
            GetBlockHashes = 0x04,

            /// <summary>
            /// Inventory to transfer blocks.
            /// </summary>
            BlockHashes = 0x05,

            /// <summary>
            /// Inventory to transfer transactions.
            /// </summary>
            TxIds = 0x06,

            /// <summary>
            /// Request to query blocks.
            /// </summary>
            GetBlocks = 0x07,

            /// <summary>
            /// Request to query transactions.
            /// </summary>
            GetTxs = 0x08,

            /// <summary>
            /// Message containing serialized blocks.
            /// </summary>
            Blocks = 0x0a,

            /// <summary>
            /// Message containing serialized transaction.
            /// </summary>
            Tx = 0x10,

            /// <summary>
            /// Message containing request for nearby peers.
            /// </summary>
            FindPeer = 0x11,

            /// <summary>
            /// Message containing nearby peers.
            /// </summary>
            Neighbours = 0x12,

            /// <summary>
            /// Request to query calculated states.
            /// </summary>
            GetRecentStates = 0x0b,

            /// <summary>
            /// A reply to <see cref="GetRecentStates"/>.
            /// Contains the calculated recent states and state references.
            /// </summary>
            RecentStates = 0x0c,
        }

        public byte[] Identity { get; set; }

        public Peer Remote { get; set; }

        protected abstract MessageType Type { get; }

        protected abstract IEnumerable<NetMQFrame> DataFrames { get; }

        public static Message Parse(NetMQMessage raw, bool reply)
        {
            if (raw.FrameCount == 0)
            {
                throw new ArgumentException("Can't parse empty NetMQMessage.");
            }

            // (reply == true)  [type, sign, peer, frames...]
            // (reply == false) [identity, type, sign, peer, frames...]
            int headerCount = reply ? 3 : 4;
            var rawType = (MessageType)raw[headerCount - 3].ConvertToInt32();
            var peer = raw[headerCount - 2].ToByteArray();
            byte[] signature = raw[headerCount - 1].ToByteArray();

            NetMQFrame[] body = raw.Skip(headerCount).ToArray();

            var types = new Dictionary<MessageType, Type>
            {
                { MessageType.Ping, typeof(Ping) },
                { MessageType.Pong, typeof(Pong) },
                { MessageType.GetBlockHashes, typeof(GetBlockHashes) },
                { MessageType.BlockHashes, typeof(BlockHashes) },
                { MessageType.TxIds, typeof(TxIds) },
                { MessageType.GetBlocks, typeof(GetBlocks) },
                { MessageType.GetTxs, typeof(GetTxs) },
                { MessageType.Blocks, typeof(Blocks) },
                { MessageType.Tx, typeof(Tx) },
                { MessageType.FindPeer, typeof(FindPeer) },
                { MessageType.Neighbours, typeof(Neighbours) },
                { MessageType.GetRecentStates, typeof(GetRecentStates) },
                { MessageType.RecentStates, typeof(RecentStates) },
            };

            if (!types.TryGetValue(rawType, out Type type))
            {
                throw new InvalidMessageException(
                    $"Can't determine NetMQMessage. [type: {rawType}]");
            }

            var message = (Message)Activator.CreateInstance(
                type, new[] { body });
            message.Remote = Peer.Deserialize(peer);

            if (!message.Remote.PublicKey.Verify(body.ToByteArray(), signature))
            {
                throw new InvalidMessageException(
                    "the message signature is invalid"
                );
            }

            if (!reply)
            {
                message.Identity = raw[0].Buffer.ToArray();
            }

            return message;
        }

        public NetMQMessage ToNetMQMessage(PrivateKey key, Peer self)
        {
            if (self is null)
            {
                throw new ArgumentNullException(nameof(self));
            }

            var message = new NetMQMessage();

            // Write body (by concrete class)
            foreach (NetMQFrame frame in DataFrames)
            {
                message.Append(frame);
            }

            // Write headers. (inverse order)
            message.Push(key.Sign(message.ToByteArray()));
            message.Push(self.Serialize());
            message.Push((byte)Type);

            if (Identity is byte[] to)
            {
                message.Push(to);
            }

            return message;
        }
    }
}
