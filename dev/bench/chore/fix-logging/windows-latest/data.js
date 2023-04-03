window.BENCHMARK_DATA = {
  "lastUpdate": 1680509183562,
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
          "id": "0802d4ac5631d749d2848fc5e3e67a15377edf77",
          "message": "﻿chore: adjust log level  [skip changelog]",
          "timestamp": "2023-04-03T16:50:50+09:00",
          "tree_id": "b9cca4217c1a6989a26950c12c53c6532cb53661",
          "url": "https://github.com/limebell/libplanet/commit/0802d4ac5631d749d2848fc5e3e67a15377edf77"
        },
        "date": 1680509168484,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1310382.2916666667,
            "unit": "ns",
            "range": "± 87943.59914446564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2431071.4285714286,
            "unit": "ns",
            "range": "± 78935.11323131384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2123531.3131313133,
            "unit": "ns",
            "range": "± 124929.73588158171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5175108,
            "unit": "ns",
            "range": "± 195562.30891812398"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42756.45161290323,
            "unit": "ns",
            "range": "± 1734.4977038052123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6844742.857142857,
            "unit": "ns",
            "range": "± 26900.37787225915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17992021.42857143,
            "unit": "ns",
            "range": "± 117978.058120153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45356935.71428572,
            "unit": "ns",
            "range": "± 386466.8930136247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90705278.57142857,
            "unit": "ns",
            "range": "± 464792.90868841036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179565113.33333334,
            "unit": "ns",
            "range": "± 896058.9233388829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4851203.064903846,
            "unit": "ns",
            "range": "± 5658.7827984617215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1519201.6043526786,
            "unit": "ns",
            "range": "± 1617.9826153989309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1133609.4140625,
            "unit": "ns",
            "range": "± 1467.894951337092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2565360.1004464286,
            "unit": "ns",
            "range": "± 8565.796028426275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846719.8763020834,
            "unit": "ns",
            "range": "± 1386.614508776692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735649.7628348215,
            "unit": "ns",
            "range": "± 618.6423903503246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2883912.8205128205,
            "unit": "ns",
            "range": "± 89774.06195405273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3154484,
            "unit": "ns",
            "range": "± 127198.627190641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3893306.6666666665,
            "unit": "ns",
            "range": "± 63644.55387615847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4083977.272727273,
            "unit": "ns",
            "range": "± 152340.87216477358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7057130.555555556,
            "unit": "ns",
            "range": "± 222326.66676304993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292051.4285714286,
            "unit": "ns",
            "range": "± 7378.08246364434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238916.66666666666,
            "unit": "ns",
            "range": "± 8130.728124676065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214538.88888888888,
            "unit": "ns",
            "range": "± 7019.005944180732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5198592.857142857,
            "unit": "ns",
            "range": "± 36247.13175465833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3678392.8571428573,
            "unit": "ns",
            "range": "± 29355.001258748038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16965.625,
            "unit": "ns",
            "range": "± 1551.8293534101176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81458.82352941176,
            "unit": "ns",
            "range": "± 4383.526904588279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70187.5,
            "unit": "ns",
            "range": "± 4247.3335288464405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 156380.61224489796,
            "unit": "ns",
            "range": "± 14879.201966761642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5689.7959183673465,
            "unit": "ns",
            "range": "± 819.1949525555239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16865.625,
            "unit": "ns",
            "range": "± 1370.0424983804046"
          }
        ]
      }
    ]
  }
}