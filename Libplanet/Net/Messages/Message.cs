using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
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
            /// Reply of `Ping`.
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
        }

        public byte[] Identity { get; set; }

        public Peer Remote { get; set; }

        public int Level { get; set; }

        protected abstract MessageType Type { get; }

        protected abstract IEnumerable<NetMQFrame> DataFrames { get; }

        public static Message Parse(NetMQMessage raw, bool reply)
        {
            if (raw.FrameCount == 0)
            {
                throw new ArgumentException("Can't parse empty NetMQMessage.");
            }

            // (reply == true)  [type, pubkey, host, port, level, sign, frames...]
            // (reply == false) [identity, type, pubkey, host, port, level, sign, frames...]
            int headerCount = reply ? 6 : 7;
            MessageType rawType = (MessageType)raw[headerCount - 6].ConvertToInt32();
            PublicKey publicKey = new PublicKey(raw[headerCount - 5].ToByteArray());
            DnsEndPoint endPoint = new DnsEndPoint(
                raw[headerCount - 4].ConvertToString(),
                raw[headerCount - 3].ConvertToInt32());
            int level = raw[headerCount - 2].ConvertToInt32();
            byte[] signature = raw[headerCount - 1].ToByteArray();

            NetMQFrame[] body = raw.Skip(headerCount).ToArray();

            if (!publicKey.Verify(body.ToByteArray(), signature))
            {
                throw new InvalidMessageException(
                    "the message signature is invalid"
                );
            }

            Dictionary<MessageType, Type> types = new Dictionary<MessageType, Type>
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
            };

            if (!types.TryGetValue(rawType, out Type type))
            {
                throw new InvalidMessageException(
                    $"Can't determine NetMQMessage. [type: {rawType}]");
            }

            Message message = (Message)Activator.CreateInstance(
                type, new[] { body });

            message.Remote = new Peer(publicKey, endPoint);
            message.Level = level;
            if (!reply)
            {
                message.Identity = raw[0].Buffer.ToArray();
            }

            return message;
        }

        public NetMQMessage ToNetMQMessage(PrivateKey key, DnsEndPoint endPoint)
        {
            if (endPoint is null)
            {
                throw new InvalidMessageException(
                    "Can't make message from unbound Swarm.");
            }

            NetMQMessage message = new NetMQMessage();

            // Write body (by concrete class)
            foreach (NetMQFrame frame in DataFrames)
            {
                message.Append(frame);
            }

            // Write headers. (inverse order)
            message.Push(key.Sign(message.ToByteArray()));
            message.Push(Level);
            message.Push(endPoint.Port);
            message.Push(endPoint.Host);
            message.Push(key.PublicKey.Format(true));
            message.Push((byte)Type);

            if (Identity is byte[] to)
            {
                message.Push(to);
            }

            return message;
        }
    }
}
