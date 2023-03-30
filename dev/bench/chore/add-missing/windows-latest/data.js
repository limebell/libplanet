window.BENCHMARK_DATA = {
  "lastUpdate": 1680156253298,
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
      }
    ]
  }
}