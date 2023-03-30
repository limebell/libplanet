window.BENCHMARK_DATA = {
  "lastUpdate": 1680156176589,
  "repoUrl": "https://github.com/limebell/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "6e999ead08b2f210ed40ee3a30c464e6fbf6e6c3",
          "message": "fix: make `ValidatorStateExtensions` to public\n\n(cherry picked from commit 84da0b42fe7f01833b1c9846eca09c2a45778b34)",
          "timestamp": "2023-03-30T14:44:00+09:00",
          "tree_id": "b2ca2ebd4b092a4793d818439be5a2fb2c3d2848",
          "url": "https://github.com/limebell/libplanet/commit/6e999ead08b2f210ed40ee3a30c464e6fbf6e6c3"
        },
        "date": 1680156078225,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7793140.833333333,
            "unit": "ns",
            "range": "± 136487.26286395825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19980350.354166668,
            "unit": "ns",
            "range": "± 786484.8081523143"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49465803.677777775,
            "unit": "ns",
            "range": "± 1773387.0472543018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97590632.28571428,
            "unit": "ns",
            "range": "± 3195250.2970750337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203417406.90625,
            "unit": "ns",
            "range": "± 6245838.138731744"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59477.967391304344,
            "unit": "ns",
            "range": "± 6888.168680292009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 210132.51612903227,
            "unit": "ns",
            "range": "± 12120.197588263212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205628.8111111111,
            "unit": "ns",
            "range": "± 11088.032038481491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196373.7323232323,
            "unit": "ns",
            "range": "± 17267.648711301255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12350108.666666666,
            "unit": "ns",
            "range": "± 365354.529295939"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9704886.666666666,
            "unit": "ns",
            "range": "± 338189.84143644385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19164.333333333332,
            "unit": "ns",
            "range": "± 2564.7079939445152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55817.22340425532,
            "unit": "ns",
            "range": "± 7123.610206132051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57748.97474747475,
            "unit": "ns",
            "range": "± 6786.577330595425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122109.52577319587,
            "unit": "ns",
            "range": "± 15270.24554150215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7493.111111111111,
            "unit": "ns",
            "range": "± 734.3759323313337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19353.032608695652,
            "unit": "ns",
            "range": "± 2676.4441329359342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1470672.7916666667,
            "unit": "ns",
            "range": "± 110710.81452247484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2754021.794117647,
            "unit": "ns",
            "range": "± 85964.06798422072"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2554799.175257732,
            "unit": "ns",
            "range": "± 293969.9118490562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6354999.705128205,
            "unit": "ns",
            "range": "± 323936.8889356807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3221226.6964285714,
            "unit": "ns",
            "range": "± 137704.94501049168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4917446.8125,
            "unit": "ns",
            "range": "± 96586.7602560646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24774544.25,
            "unit": "ns",
            "range": "± 763489.0824580989"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6221843.064516129,
            "unit": "ns",
            "range": "± 281799.547698672"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28728162.045454547,
            "unit": "ns",
            "range": "± 1339379.7759125698"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6553153.199479166,
            "unit": "ns",
            "range": "± 191172.162700183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2099995.533203125,
            "unit": "ns",
            "range": "± 27074.47043814761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371743.6733630951,
            "unit": "ns",
            "range": "± 62437.180251976664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2696413.4141826923,
            "unit": "ns",
            "range": "± 121007.26764301422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 791261.1999126234,
            "unit": "ns",
            "range": "± 17097.436394232274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 796757.2273370151,
            "unit": "ns",
            "range": "± 21391.871582064858"
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
          "id": "b7adad72eb5ce755993d4cd3e0cba9ba383afcbd",
          "message": "chore: update changelog",
          "timestamp": "2023-03-30T14:46:23+09:00",
          "tree_id": "e9e4138353a2808dc8e02aab5bdc269078c1ba27",
          "url": "https://github.com/limebell/libplanet/commit/b7adad72eb5ce755993d4cd3e0cba9ba383afcbd"
        },
        "date": 1680156167768,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8905541.866666667,
            "unit": "ns",
            "range": "± 151520.01544957055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23694906.733333334,
            "unit": "ns",
            "range": "± 157206.46534890108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59290320.428571425,
            "unit": "ns",
            "range": "± 469587.3716510165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113704724.57692307,
            "unit": "ns",
            "range": "± 981916.5993572181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 233767261.46666667,
            "unit": "ns",
            "range": "± 4040360.8089940585"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63995.85555555556,
            "unit": "ns",
            "range": "± 6335.842979414834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 245092.05660377358,
            "unit": "ns",
            "range": "± 9584.117981196998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247877.25675675675,
            "unit": "ns",
            "range": "± 7533.139390591287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214014.84,
            "unit": "ns",
            "range": "± 14575.67540976778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13341356.615384616,
            "unit": "ns",
            "range": "± 138523.862399551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10685352.57142857,
            "unit": "ns",
            "range": "± 124568.95139607454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22586.958333333332,
            "unit": "ns",
            "range": "± 2246.345827603796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62941.9010989011,
            "unit": "ns",
            "range": "± 4544.009142828599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48896.83870967742,
            "unit": "ns",
            "range": "± 3718.901477851159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123843.88043478261,
            "unit": "ns",
            "range": "± 13603.911370189262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6281.357894736842,
            "unit": "ns",
            "range": "± 594.1596410556261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21266.358695652172,
            "unit": "ns",
            "range": "± 2265.519922286097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1770088.0505050505,
            "unit": "ns",
            "range": "± 178430.70280749042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3179637.2435897435,
            "unit": "ns",
            "range": "± 162303.33865441114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2803035.335164835,
            "unit": "ns",
            "range": "± 170529.201099288"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7034332.7272727275,
            "unit": "ns",
            "range": "± 164884.3141236222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3871107.882352941,
            "unit": "ns",
            "range": "± 105618.73088263495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6196680.714285715,
            "unit": "ns",
            "range": "± 102501.61832582003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27186369.85714286,
            "unit": "ns",
            "range": "± 388215.06749339483"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7328786.5,
            "unit": "ns",
            "range": "± 200262.31983571636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32477244.2,
            "unit": "ns",
            "range": "± 581327.260962139"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7149130.917410715,
            "unit": "ns",
            "range": "± 84464.21706101012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2280715.83828125,
            "unit": "ns",
            "range": "± 35515.360583131594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1469613.755580357,
            "unit": "ns",
            "range": "± 4745.88796004051"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3022531.470833333,
            "unit": "ns",
            "range": "± 54522.64508474744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 952757.6244791667,
            "unit": "ns",
            "range": "± 14298.537059395558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 881265.1365234375,
            "unit": "ns",
            "range": "± 7353.327284521128"
          }
        ]
      }
    ]
  }
}