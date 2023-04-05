window.BENCHMARK_DATA = {
  "lastUpdate": 1680671618509,
  "repoUrl": "https://github.com/limebell/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "321c7adbb4abc343d04241d5237a93cb52fde07e",
          "message": "docs: update changelog",
          "timestamp": "2023-04-05T13:57:54+09:00",
          "tree_id": "2fdd54d6c8cf1f6252b0256d0feef6f54f9a6b48",
          "url": "https://github.com/limebell/libplanet/commit/321c7adbb4abc343d04241d5237a93cb52fde07e"
        },
        "date": 1680671610974,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7853833.625,
            "unit": "ns",
            "range": "± 304719.96553449816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19610944.64864865,
            "unit": "ns",
            "range": "± 932802.3921124141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48191992.06666667,
            "unit": "ns",
            "range": "± 900188.1955054468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96530559,
            "unit": "ns",
            "range": "± 2811449.8282738915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202192506.21212122,
            "unit": "ns",
            "range": "± 6268994.383051084"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58360.488505747126,
            "unit": "ns",
            "range": "± 6813.5092527328125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373636.88636363635,
            "unit": "ns",
            "range": "± 14047.150607724287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309787.6447368421,
            "unit": "ns",
            "range": "± 15572.474736066795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279576.3958333333,
            "unit": "ns",
            "range": "± 11007.886938008687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5426397.793103448,
            "unit": "ns",
            "range": "± 157506.1783396764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3926259,
            "unit": "ns",
            "range": "± 168161.42324978358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18453.684210526317,
            "unit": "ns",
            "range": "± 2112.8400432006906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90499.02061855671,
            "unit": "ns",
            "range": "± 9727.94589912162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91991.42708333333,
            "unit": "ns",
            "range": "± 11239.278971296477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 240066.41666666666,
            "unit": "ns",
            "range": "± 21427.44494170559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6222.697916666667,
            "unit": "ns",
            "range": "± 1085.7332144906711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18154.065934065933,
            "unit": "ns",
            "range": "± 1916.97727223644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1595278.1979166667,
            "unit": "ns",
            "range": "± 160335.1737374337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3047294.318681319,
            "unit": "ns",
            "range": "± 240762.0363467666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2628335.206185567,
            "unit": "ns",
            "range": "± 296356.08524005575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7194638.979166667,
            "unit": "ns",
            "range": "± 448600.62376036553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3226972.967391304,
            "unit": "ns",
            "range": "± 230425.24116556268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3374319.563829787,
            "unit": "ns",
            "range": "± 194762.69108617876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4411575.616666666,
            "unit": "ns",
            "range": "± 158888.09122669994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4749846.03030303,
            "unit": "ns",
            "range": "± 508205.5310736856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9037669.405405406,
            "unit": "ns",
            "range": "± 419196.94641157903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6372077.914713542,
            "unit": "ns",
            "range": "± 52441.16672599528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1913056.7268229167,
            "unit": "ns",
            "range": "± 31995.446581198506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1280511.9529854911,
            "unit": "ns",
            "range": "± 13491.457971604803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2549265.386160714,
            "unit": "ns",
            "range": "± 26767.996877513513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 783713.224609375,
            "unit": "ns",
            "range": "± 6197.669912928196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724432.3207682292,
            "unit": "ns",
            "range": "± 12584.873977333555"
          }
        ]
      }
    ]
  }
}