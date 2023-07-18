window.BENCHMARK_DATA = {
  "lastUpdate": 1689675790760,
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
          "id": "400c1dd23afefa9e465482c01e7cd7ce8bc3ccbb",
          "message": "test: separate Libplanet.Action.Tests project\n\nsome tests in Libplanet.Tests.Action is not separated since it has dependency on blockchain",
          "timestamp": "2023-07-18T19:10:26+09:00",
          "tree_id": "580e9ab971c4e68d46cef5975f853c3f4fbdd62c",
          "url": "https://github.com/limebell/libplanet/commit/400c1dd23afefa9e465482c01e7cd7ce8bc3ccbb"
        },
        "date": 1689675787170,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275128.67647058825,
            "unit": "ns",
            "range": "± 7153.767838425863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265070.6857142857,
            "unit": "ns",
            "range": "± 8624.537299682428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233846.90476190476,
            "unit": "ns",
            "range": "± 5332.921628008065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4259171.076923077,
            "unit": "ns",
            "range": "± 22249.355340704213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3929922.3076923075,
            "unit": "ns",
            "range": "± 41218.03249465905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18247.081632653062,
            "unit": "ns",
            "range": "± 1703.5698701684528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90623.8493150685,
            "unit": "ns",
            "range": "± 4511.790601891008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71730.84615384616,
            "unit": "ns",
            "range": "± 816.9165447128862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86925.14285714286,
            "unit": "ns",
            "range": "± 12176.81238738307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4091.553191489362,
            "unit": "ns",
            "range": "± 476.9154839808335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16777.043956043955,
            "unit": "ns",
            "range": "± 1537.477211481255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1336117.8936170214,
            "unit": "ns",
            "range": "± 78690.21559342115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2536514.263157895,
            "unit": "ns",
            "range": "± 86771.34010492492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1897820.2222222222,
            "unit": "ns",
            "range": "± 47493.05784681615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4845764.225806451,
            "unit": "ns",
            "range": "± 147507.53847983718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6291238.319754465,
            "unit": "ns",
            "range": "± 31490.11651195826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2016002.6544270834,
            "unit": "ns",
            "range": "± 2193.576951144213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366858.1727864584,
            "unit": "ns",
            "range": "± 1470.1695953249239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2565913.2421875,
            "unit": "ns",
            "range": "± 1804.0776454300417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827534.9110630581,
            "unit": "ns",
            "range": "± 510.4677543504449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728584.1268780048,
            "unit": "ns",
            "range": "± 367.7117524865293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3310045.7333333334,
            "unit": "ns",
            "range": "± 46488.87145246494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3462893.6,
            "unit": "ns",
            "range": "± 56266.53412337695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4336580.4,
            "unit": "ns",
            "range": "± 67796.04651010263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3817324.135135135,
            "unit": "ns",
            "range": "± 129446.85136082389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6270968.6,
            "unit": "ns",
            "range": "± 183275.17068823043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7536581.538461538,
            "unit": "ns",
            "range": "± 23861.651247749614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19025687.666666668,
            "unit": "ns",
            "range": "± 76561.4943350084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49389783.333333336,
            "unit": "ns",
            "range": "± 345158.2674963693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99341778.53333333,
            "unit": "ns",
            "range": "± 915246.305176049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198432469,
            "unit": "ns",
            "range": "± 1509738.5029638174"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46324.48101265823,
            "unit": "ns",
            "range": "± 2415.5486920385642"
          }
        ]
      }
    ]
  }
}