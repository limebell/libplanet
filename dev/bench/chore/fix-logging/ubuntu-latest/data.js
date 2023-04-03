window.BENCHMARK_DATA = {
  "lastUpdate": 1680509235563,
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
        "date": 1680509231399,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4181603.066666667,
            "unit": "ns",
            "range": "± 69009.45029431701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4202197.19047619,
            "unit": "ns",
            "range": "± 223082.01175193078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4476426.28,
            "unit": "ns",
            "range": "± 119028.77466762677"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5469468.555555556,
            "unit": "ns",
            "range": "± 152893.80114624897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8701839.767857144,
            "unit": "ns",
            "range": "± 372566.59790739504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9573081.1875,
            "unit": "ns",
            "range": "± 296839.6084894286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25813676.533333335,
            "unit": "ns",
            "range": "± 387577.61596059083"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63587015.5,
            "unit": "ns",
            "range": "± 430466.6884114978"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129927779.42857143,
            "unit": "ns",
            "range": "± 621270.8686852129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 255283885.2,
            "unit": "ns",
            "range": "± 1701585.8793196506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1625885.0103092783,
            "unit": "ns",
            "range": "± 142286.00406183777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3110565.12,
            "unit": "ns",
            "range": "± 265032.01567183604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2555212.10989011,
            "unit": "ns",
            "range": "± 141197.29705065183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6676135.75,
            "unit": "ns",
            "range": "± 557770.3225296192"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56886.74736842105,
            "unit": "ns",
            "range": "± 4681.18371320491"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6376740.883333334,
            "unit": "ns",
            "range": "± 49163.29294881237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1957061.9653645833,
            "unit": "ns",
            "range": "± 2685.2370146422522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1424595.0723958334,
            "unit": "ns",
            "range": "± 4402.303012462294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2731552.201302083,
            "unit": "ns",
            "range": "± 3214.626035744883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 866156.5675130208,
            "unit": "ns",
            "range": "± 1574.2997236093286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 791089.6401041667,
            "unit": "ns",
            "range": "± 1184.9998486046736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 399457.4426229508,
            "unit": "ns",
            "range": "± 17077.967195116824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327878.03921568627,
            "unit": "ns",
            "range": "± 13375.147366606145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249317.86301369863,
            "unit": "ns",
            "range": "± 12356.412520220541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6210461.642857143,
            "unit": "ns",
            "range": "± 78688.29839563883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4485730.80952381,
            "unit": "ns",
            "range": "± 101887.52659212954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30176.46875,
            "unit": "ns",
            "range": "± 4140.269612256073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 122161.898989899,
            "unit": "ns",
            "range": "± 13442.848506521403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114071.63636363637,
            "unit": "ns",
            "range": "± 13947.35778609548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 277566.9569892473,
            "unit": "ns",
            "range": "± 27001.528713129483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8868.536842105263,
            "unit": "ns",
            "range": "± 1475.5956879397952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26870.197916666668,
            "unit": "ns",
            "range": "± 3586.5441147060296"
          }
        ]
      }
    ]
  }
}