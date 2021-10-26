using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Runtime.Serialization;
using Libplanet.Serialization;

namespace Libplanet.Net.Transports
{
    [Serializable]
    public class InvalidMagicCookieException : Exception
    {
        public InvalidMagicCookieException(IEnumerable<byte> expected, IEnumerable<byte> actual)
        {
            Expected = expected.ToImmutableArray();
            Actual = actual.ToImmutableArray();
        }

        public InvalidMagicCookieException(
            IEnumerable<byte> expected,
            IEnumerable<byte> actual,
            string message)
            : base(message)
        {
            Expected = expected.ToImmutableArray();
            Actual = actual.ToImmutableArray();
        }

        public InvalidMagicCookieException(
            IEnumerable<byte> expected,
            IEnumerable<byte> actual,
            string message,
            Exception innerException)
            : base(message, innerException)
        {
            Expected = expected.ToImmutableArray();
            Actual = actual.ToImmutableArray();
        }

        protected InvalidMagicCookieException(
            SerializationInfo info,
            StreamingContext context
        )
            : base(info, context)
        {
            Expected = info.GetValue<ImmutableArray<byte>>(nameof(Expected));
            Actual = info.GetValue<ImmutableArray<byte>>(nameof(Actual));
        }

        public ImmutableArray<byte> Expected { get; private set; }

        public ImmutableArray<byte> Actual { get; private set; }

        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(Expected), Expected);
            info.AddValue(nameof(Actual), Actual);
        }
    }
}
