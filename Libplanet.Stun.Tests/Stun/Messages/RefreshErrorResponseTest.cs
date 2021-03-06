using System.IO;
using System.Threading.Tasks;
using Libplanet.Stun.Messages;
using Xunit;

namespace Libplanet.Stun.Tests.Messages
{
    public class RefreshErrorResponseTest
    {
        [Fact]
        public async Task ParseBytes()
        {
            var bytes = new byte[]
            {
                0x01, 0x14, 0x00, 0x2c, 0x21, 0x12, 0xa4, 0x42, 0x0c, 0x85,
                0x2c, 0x24, 0x1a, 0x87, 0x02, 0xc9, 0xa8, 0x2c, 0x0b, 0xad,
                0x00, 0x09, 0x00, 0x18, 0x00, 0x00, 0x04, 0x25, 0x49, 0x6e,
                0x76, 0x61, 0x6c, 0x69, 0x64, 0x20, 0x61, 0x6c, 0x6c, 0x6f,
                0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x00, 0x00, 0x80, 0x22,
                0x00, 0x04, 0x4e, 0x6f, 0x6e, 0x65, 0x80, 0x28, 0x00, 0x04,
                0x88, 0x34, 0xf9, 0x1e,
            };

            using (var stream = new MemoryStream(bytes))
            {
                var response = (RefreshErrorResponse)await StunMessage.ParseAsync(stream);
                Assert.Equal(
                    new byte[]
                    {
                        0x0c, 0x85, 0x2c, 0x24, 0x1a, 0x87, 0x02, 0xc9, 0xa8, 0x2c,
                        0x0b, 0xad,
                    },
                    response.TransactionId);
                Assert.Equal(437, response.ErrorCode);
            }
        }
    }
}
