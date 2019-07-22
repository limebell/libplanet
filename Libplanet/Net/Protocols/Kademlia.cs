using System;
using System.Collections.Generic;
using System.Linq;

namespace Libplanet.Net.Protocols
{
    internal class Kademlia
    {
        public static Address CalculateDistance(Address a, Address b)
        {
            byte[] d_ba = new byte[Address.Size];
            byte[] a_ba = a.ToByteArray();
            byte[] b_ba = b.ToByteArray();

            for (int i = 0; i < Address.Size; i++)
            {
                d_ba[i] = (byte)(a_ba[i] ^ b_ba[i]);
            }

            return new Address(d_ba);
        }

        // calculate length of common prefix length
        // by finding first bit of xor value
        public static int CommonPrefixLength(Peer a, Peer b)
        {
            if (a is null)
            {
                throw new ArgumentNullException(nameof(a));
            }

            if (b is null)
            {
                throw new ArgumentNullException(nameof(b));
            }

            Address distance = CalculateDistance(a.Address, b.Address);
            int length = 0;

            foreach (byte x in distance.ToByteArray())
            {
                int mask = 1 << 7;
                while (length < 160 && mask != 0)
                {
                    if ((mask & x) != 0)
                    {
                        goto done;
                    }

                    length++;
                    mask >>= 1;
                }
            }

        done:
            return length;
        }

        // sort list from closest to farthest.
        public static List<Peer> SortByDistance(List<Peer> peers, Address target_addr)
        {
            return peers.OrderBy(peer =>
                CalculateDistance(
                    peer.Address,
                    target_addr).ToHex()
                ).ToList();
        }
    }
}
