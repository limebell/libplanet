using System;
using System.Collections.Immutable;
using System.Numerics;
using System.Reflection;
using BTypes = Bencodex.Types;

namespace Libplanet.Action
{
    public abstract partial class PlainValueTemplate
    {
        protected PlainValueTemplate()
        {
        }

        protected PlainValueTemplate(BTypes.Dictionary encoded)
        {
            PropertyInfo[] properties = this.GetType().GetProperties();
            foreach (PropertyInfo property in properties)
            {
                Type type = property.PropertyType;
                BTypes.IValue value = encoded[property.Name];

                if (type == typeof(bool?)
                    || type == typeof(int?)
                    || type == typeof(long?)
                    || type == typeof(BigInteger?)
                    || type == typeof(ImmutableArray<byte>?))
                {
                    throw new NotSupportedException(
                        $"Nullable value type is not supported: {type}");
                }
                else
                {
                    property.SetValue(this, DecodeFromIValue(value, type));
                }
            }
        }

        public static PlainValueTemplate Decode<T>(BTypes.Dictionary encoded)
            where T : PlainValueTemplate
        {
            object instance = Activator.CreateInstance(typeof(T), encoded)
                ?? throw new NullReferenceException(
                    $"Failed to decode {nameof(encoded)}: {encoded}");
            return (T)instance;
        }

        public BTypes.Dictionary Encode()
        {
            BTypes.Dictionary result = BTypes.Dictionary.Empty;
            PropertyInfo[] properties = this.GetType().GetProperties();
            foreach (PropertyInfo property in properties)
            {
                Type type = property.PropertyType;
                if (type == typeof(bool?)
                    || type == typeof(int?)
                    || type == typeof(long?)
                    || type == typeof(BigInteger?)
                    || type == typeof(ImmutableArray<byte>?))
                {
                    throw new NotSupportedException(
                        $"Nullable value type is not supported: {type}");
                }

                // NOTE: Additional IValue casting is needed for this to work.
                dynamic? value = property.GetValue(this, null);
                result = result.Add(property.Name, (BTypes.IValue)EncodeToIValue(value));
            }

            return result;
        }
    }
}
