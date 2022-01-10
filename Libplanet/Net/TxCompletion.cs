#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Libplanet.Action;
using Libplanet.Blockchain;
using Libplanet.Tx;
using Nito.AsyncEx;
using Serilog;

namespace Libplanet.Net
{
    public class TxCompletion<TPeer, TAction> : IDisposable
    where TPeer : notnull
    where TAction : IAction, new()
    {
        private readonly CancellationTokenSource _cancellationTokenSource;
        private readonly BlockChain<TAction> _blockChain;
        private readonly TxFetcher _txFetcher;
        private readonly TxBroadcaster _txBroadcaster;
        private readonly ILogger _logger;

        private bool _disposed;

        public TxCompletion(
            BlockChain<TAction> blockChain,
            TxFetcher txFetcher,
            TxBroadcaster txBroadcaster)
        {
            _cancellationTokenSource = new CancellationTokenSource();
            _blockChain = blockChain;
            _txFetcher = txFetcher;
            _txBroadcaster = txBroadcaster;
            TxReceived = new AsyncAutoResetEvent();

            _logger = Log.ForContext<TxCompletion<TPeer, TAction>>();
        }

        public delegate IAsyncEnumerable<Transaction<TAction>> TxFetcher(
            TPeer peer,
            IEnumerable<TxId> txIds,
            CancellationToken cancellationToken
        );

        public delegate void TxBroadcaster(TPeer except, IEnumerable<Transaction<TAction>> txs);

        internal AsyncAutoResetEvent TxReceived { get; }

        public void Dispose()
        {
            if (!_disposed)
            {
                _cancellationTokenSource.Cancel();
                _disposed = true;
            }
        }

        public void Demand(TPeer peer, TxId txId) => Demand(peer, new[] { txId });

        public void Demand(TPeer peer, IEnumerable<TxId> txIds)
        {
            if (_disposed)
            {
                throw new ObjectDisposedException(nameof(TxCompletion<TPeer, TAction>));
            }

            HashSet<TxId> required = GetRequiredTxIds(txIds);

            if (!required.Any())
            {
                _logger.Debug(
                    "[TxCompletion({Peer})] No unaware transactions to receive.",
                    peer);
                return;
            }

            _logger.Debug(
                "[TxCompletion({Peer})] Unaware transactions to receive: {TxIdCount}.",
                peer,
                required.Count
            );

            _logger.Debug(
                "[TxCompletion({Peer})] Spawn new task.",
                peer);

            // spawn task.
            _ = RequestTxsFromPeerAsync(peer, required, _cancellationTokenSource.Token);
        }

        private HashSet<TxId> GetRequiredTxIds(IEnumerable<TxId> ids)
        {
            return new HashSet<TxId>(ids
                .Where(txId =>
                    !_blockChain.StagePolicy.Ignores(_blockChain, txId)
                        && _blockChain.StagePolicy.Get(_blockChain, txId, filtered: false) is null
                        && _blockChain.Store.GetTransaction<TAction>(txId) is null));
        }

        private async Task RequestTxsFromPeerAsync(
            TPeer peer,
            HashSet<TxId> txIds,
            CancellationToken cancellationToken)
        {
            try
            {
                const string log =
                    "[TxCompletion({Peer})] Starting loop of RequestTxsFromPeerAsync " +
                    "(_requiredTxIds count: {Count})";
                _logger.Debug(log, peer, txIds.Count);

                if (cancellationToken.IsCancellationRequested)
                {
                    throw new TaskCanceledException();
                }

                try
                {
                    _logger.Debug(
                        "[TxCompletion({Peer})] Start to run _txFetcher. (count: {Count})",
                        peer,
                        txIds.Count);
                    var stopWatch = new Stopwatch();
                    stopWatch.Start();
                    var txs = new HashSet<Transaction<TAction>>(
                        await _txFetcher(
                                peer,
                                txIds,
                                cancellationToken)
                            .ToListAsync(cancellationToken)
                            .AsTask());
                    _logger.Debug(
                        "[TxCompletion({Peer})] End of _txFetcher. (received: {Count}); " +
                        "Time taken: {Elapsed}",
                        peer,
                        txs.Count,
                        stopWatch.Elapsed);

                    txs = new HashSet<Transaction<TAction>>(
                        txs.Where(
                            tx =>
                            {
                                if (_blockChain.Policy.ValidateNextBlockTx(
                                        _blockChain,
                                        tx) is null)
                                {
                                    return true;
                                }

                                _logger.Debug(
                                    "[TxCompletion({Peer})] Received transaction " +
                                    "{TxId} will not be staged " +
                                    "since it does not follow policy.",
                                    peer,
                                    tx.Id);
                                _blockChain.StagePolicy.Ignore(_blockChain, tx.Id);
                                return false;
                            }));

                    var validTxs = new List<Transaction<TAction>>();
                    IImmutableSet<TxId> stagedTxIds = _blockChain.GetStagedTransactionIds();
                    foreach (var tx in txs)
                    {
                        try
                        {
                            if (!stagedTxIds.Contains(tx.Id))
                            {
                                _blockChain.StageTransaction(tx);
                                validTxs.Add(tx);
                            }
                        }
                        catch (InvalidTxException ite)
                        {
                            var msg = "[TxCompletion({Peer})] Transaction {TxId} " +
                                      "will not be staged since it is invalid.";
                            _logger.Error(ite, msg, peer, tx.Id);
                        }
                    }

                    // To maintain the consistency of the unit tests.
                    if (txs.Any())
                    {
                        TxReceived.Set();
                    }

                    if (validTxs.Any())
                    {
                        _logger.Debug(
                            "[TxCompletion({Peer})] {ValidTxCount} txs staged " +
                            "successfully out of {TxCount}.",
                            peer,
                            validTxs.Count,
                            txs.Count);

                        _txBroadcaster(peer, validTxs);
                    }
                    else
                    {
                        _logger.Information(
                            "[TxCompletion({Peer})] Failed to get " +
                            "{TxIdCount} transactions to stage.",
                            peer,
                            txIds.Count);
                    }
                }
                catch (Exception)
                {
                    // Just ignore the exception.
                    _logger.Debug(
                        "[TxCompletion({Peer})] Error occurred during loop and ignore.",
                        peer);
                }

                _logger.Debug(
                    "[TxCompletion({Peer})] Ending RequestTxsFromPeerAsync.",
                    peer);
            }
            catch (Exception e)
            {
                _logger.Error(
                    e,
                    "[TxCompletion({Peer})] An error occurred during {FName}.",
                    peer,
                    nameof(RequestTxsFromPeerAsync));
                throw;
            }
            finally
            {
                _logger.Debug(
                    "[TxCompletion({Peer})] End of {FName}.",
                    peer,
                    nameof(RequestTxsFromPeerAsync));
            }
        }
    }
}
