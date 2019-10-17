using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Libplanet.Action;

namespace Libplanet.Tests.Common.Action
{
    public class ThrowException : IAction
    {
        public ThrowException()
        {
        }

        public bool ThrowOnRehearsal { get; set; }

        public bool ThrowOnExecution { get; set; }

        public IImmutableDictionary<string, object> PlainValue =>
            new Dictionary<string, object>()
            {
                { "throw_on_rehearsal", ThrowOnRehearsal },
                { "throw_on_execution", ThrowOnExecution },
            }.ToImmutableDictionary();

        public void LoadPlainValue(IImmutableDictionary<string, object> plainValue)
        {
            ThrowOnRehearsal = (bool)plainValue["throw_on_rehearsal"];
            ThrowOnExecution = (bool)plainValue["throw_on_execution"];
        }

        public IAccountStateDelta Execute(IActionContext context)
        {
            if (context.Rehearsal ? ThrowOnRehearsal : ThrowOnExecution)
            {
                throw new SomeException("An expected exception.");
            }

            return context.PreviousStates;
        }

        public void Render(
            IActionContext context,
            IAccountStateDelta nextStates)
        {
        }

        public void Unrender(
            IActionContext context,
            IAccountStateDelta nextStates)
        {
        }

        public class SomeException : Exception
        {
            public SomeException(string message)
                : base(message)
            {
            }
        }
    }
}
