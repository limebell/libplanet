using System;
using System.Runtime.Serialization;

namespace Libplanet.Common.Types.Blocks
{
    /// <summary>
    /// Serves as the base class for exceptions related <see cref="Block"/>s' integrity and
    /// validity.
    /// </summary>
    public abstract class InvalidBlockException : Exception
    {
        /// <inheritdoc cref="Exception(string)"/>
        protected InvalidBlockException(string message)
            : base(message)
        {
        }

        /// <inheritdoc cref="Exception(SerializationInfo, StreamingContext)"/>
        protected InvalidBlockException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }
    }
}
