window.BENCHMARK_DATA = {
  "lastUpdate": 1680156434514,
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
        "date": 1680156238840,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1732708.163265306,
            "unit": "ns",
            "range": "± 192375.2093430635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3157119.7916666665,
            "unit": "ns",
            "range": "± 239481.2367640969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2674754.0816326533,
            "unit": "ns",
            "range": "± 277137.92508289265"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6657624.193548387,
            "unit": "ns",
            "range": "± 490360.753160193"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63823.958333333336,
            "unit": "ns",
            "range": "± 8259.345517484602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9467602.173913043,
            "unit": "ns",
            "range": "± 340679.67652205063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24951581.818181816,
            "unit": "ns",
            "range": "± 1079912.1541067183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62492037.03703704,
            "unit": "ns",
            "range": "± 1750078.1664187172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125657771.42857143,
            "unit": "ns",
            "range": "± 1849614.4947315047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 254644021.42857143,
            "unit": "ns",
            "range": "± 3793240.2493785564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6329612.083333333,
            "unit": "ns",
            "range": "± 111681.33325127864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1907337.9427083333,
            "unit": "ns",
            "range": "± 17613.154679530908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1493240.513392857,
            "unit": "ns",
            "range": "± 10713.837972604364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3203759.7450657897,
            "unit": "ns",
            "range": "± 60524.71009274426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1036071.2611607143,
            "unit": "ns",
            "range": "± 12954.216024068528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 943006.8489583334,
            "unit": "ns",
            "range": "± 10230.658145524796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3914865.5555555555,
            "unit": "ns",
            "range": "± 245312.76031483445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6221971.428571428,
            "unit": "ns",
            "range": "± 331939.8858958306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29575543.333333332,
            "unit": "ns",
            "range": "± 874560.7645075853"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7639409.89010989,
            "unit": "ns",
            "range": "± 451372.5256383012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33118816.666666668,
            "unit": "ns",
            "range": "± 690808.8722223944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 227236.26373626373,
            "unit": "ns",
            "range": "± 13879.26123941374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 223527.47252747254,
            "unit": "ns",
            "range": "± 14577.075350121706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218653.57142857142,
            "unit": "ns",
            "range": "± 9347.570696286706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14213912.195121951,
            "unit": "ns",
            "range": "± 507619.1851157331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11461293.103448275,
            "unit": "ns",
            "range": "± 501519.4750069555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30832.323232323233,
            "unit": "ns",
            "range": "± 6848.578405783863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70541.57894736843,
            "unit": "ns",
            "range": "± 9127.112558230885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56505.26315789474,
            "unit": "ns",
            "range": "± 7263.173921140441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134178.72340425532,
            "unit": "ns",
            "range": "± 17723.72732189075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8218.75,
            "unit": "ns",
            "range": "± 1742.6223328468818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29556.122448979593,
            "unit": "ns",
            "range": "± 6336.444518773194"
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
        "date": 1680156410167,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1382001,
            "unit": "ns",
            "range": "± 100176.88143852091"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2609414.7540983604,
            "unit": "ns",
            "range": "± 117799.55268175623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2177888,
            "unit": "ns",
            "range": "± 135909.7087976225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5336872.151898734,
            "unit": "ns",
            "range": "± 276559.31247583195"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53050,
            "unit": "ns",
            "range": "± 3726.4912239404593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6942173.333333333,
            "unit": "ns",
            "range": "± 119182.72565786577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19687473.333333332,
            "unit": "ns",
            "range": "± 277345.33519131155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49981544,
            "unit": "ns",
            "range": "± 1307566.7016383267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100753426.66666667,
            "unit": "ns",
            "range": "± 1466717.9734099566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202698106.25,
            "unit": "ns",
            "range": "± 3973575.20879602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4840254.114583333,
            "unit": "ns",
            "range": "± 28143.72777160991"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1536302.7994791667,
            "unit": "ns",
            "range": "± 9215.703182107189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1183532.6432291667,
            "unit": "ns",
            "range": "± 9941.013580487826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2674408.6495535714,
            "unit": "ns",
            "range": "± 11825.043796397673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832205.1409040178,
            "unit": "ns",
            "range": "± 4901.343668732815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765477.9672475961,
            "unit": "ns",
            "range": "± 1854.0367386140003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3305084.6153846155,
            "unit": "ns",
            "range": "± 79305.1256467459"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5014171.739130435,
            "unit": "ns",
            "range": "± 189340.68373413096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24111553.333333332,
            "unit": "ns",
            "range": "± 445103.1659974487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6233825,
            "unit": "ns",
            "range": "± 121700.49301461354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27159605,
            "unit": "ns",
            "range": "± 597375.4346921911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 189840.35087719298,
            "unit": "ns",
            "range": "± 8179.4136108613475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192480.21978021978,
            "unit": "ns",
            "range": "± 10490.092889962836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173320,
            "unit": "ns",
            "range": "± 11777.96264387029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11021892.857142856,
            "unit": "ns",
            "range": "± 167248.18713188224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9195205.555555556,
            "unit": "ns",
            "range": "± 190006.27380422817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23903.030303030304,
            "unit": "ns",
            "range": "± 2814.0846391349382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61437.89473684211,
            "unit": "ns",
            "range": "± 6152.566994929812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43997.89473684211,
            "unit": "ns",
            "range": "± 3168.9980612499667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117829.29292929293,
            "unit": "ns",
            "range": "± 25506.118723790423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7549.484536082474,
            "unit": "ns",
            "range": "± 1177.9328390005417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22531.57894736842,
            "unit": "ns",
            "range": "± 2371.4733349281996"
          }
        ]
      }
    ]
  }
}