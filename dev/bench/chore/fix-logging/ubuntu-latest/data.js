window.BENCHMARK_DATA = {
  "lastUpdate": 1680509817033,
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
      },
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
          "id": "760e5fc97537ac9b54140f5fec59df5d28c6fa25",
          "message": "﻿chore: adjust log level  [skip changelog]",
          "timestamp": "2023-04-03T17:04:43+09:00",
          "tree_id": "c241f8fef321a695129e2e1e3863334646461156",
          "url": "https://github.com/limebell/libplanet/commit/760e5fc97537ac9b54140f5fec59df5d28c6fa25"
        },
        "date": 1680509813943,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3289201.4,
            "unit": "ns",
            "range": "± 51542.67201316927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3458802.238095238,
            "unit": "ns",
            "range": "± 79700.31671762964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4267371,
            "unit": "ns",
            "range": "± 47462.60968059286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4550189.088235294,
            "unit": "ns",
            "range": "± 145585.5687654156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7618840.740740741,
            "unit": "ns",
            "range": "± 136066.63767818172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7649604.333333333,
            "unit": "ns",
            "range": "± 63995.63726610774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19569560.923076924,
            "unit": "ns",
            "range": "± 97459.38102483306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50700937.86666667,
            "unit": "ns",
            "range": "± 306473.57984122424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101142428.93333334,
            "unit": "ns",
            "range": "± 649284.8186294194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200094326.2142857,
            "unit": "ns",
            "range": "± 881968.8755159089"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1399970.31,
            "unit": "ns",
            "range": "± 107480.71671612549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2572503.15,
            "unit": "ns",
            "range": "± 56857.96858588212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2180386.9896907215,
            "unit": "ns",
            "range": "± 146910.03241656206"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5396158.444444444,
            "unit": "ns",
            "range": "± 149720.28478808622"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46379.78571428572,
            "unit": "ns",
            "range": "± 1979.951374189741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5902331.3390625,
            "unit": "ns",
            "range": "± 14932.683964550632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1833301.5625,
            "unit": "ns",
            "range": "± 2020.4178983935608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1349862.0378069195,
            "unit": "ns",
            "range": "± 2039.7234335583623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572389.2138020834,
            "unit": "ns",
            "range": "± 1350.352287074907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794012.2750418527,
            "unit": "ns",
            "range": "± 415.0780217320988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739153.3352050781,
            "unit": "ns",
            "range": "± 517.2145277481835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 328018.3870967742,
            "unit": "ns",
            "range": "± 10013.691759044777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267847.16,
            "unit": "ns",
            "range": "± 6583.3302216026395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 235506.35,
            "unit": "ns",
            "range": "± 5201.857484793799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5548421.333333333,
            "unit": "ns",
            "range": "± 29887.663899691997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3985213.4285714286,
            "unit": "ns",
            "range": "± 23962.601694224355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17352.583333333332,
            "unit": "ns",
            "range": "± 1397.4812204117482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81700.75342465754,
            "unit": "ns",
            "range": "± 4046.509976993967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73219.64705882352,
            "unit": "ns",
            "range": "± 2322.6774764345873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 181143.3908045977,
            "unit": "ns",
            "range": "± 9681.210700950245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5268.96875,
            "unit": "ns",
            "range": "± 644.7225344142851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17656.333333333332,
            "unit": "ns",
            "range": "± 1438.8873595015466"
          }
        ]
      }
    ]
  }
}