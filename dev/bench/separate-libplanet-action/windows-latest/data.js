window.BENCHMARK_DATA = {
  "lastUpdate": 1689589886078,
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
          "id": "4213b00e9ddebf34119a731243f6a3afaf14e07d",
          "message": "chore: fix build",
          "timestamp": "2023-07-17T19:13:46+09:00",
          "tree_id": "ccbe3b24dbf68de772435ef30693e3fd63f70a65",
          "url": "https://github.com/limebell/libplanet/commit/4213b00e9ddebf34119a731243f6a3afaf14e07d"
        },
        "date": 1689589863898,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1427291.7525773195,
            "unit": "ns",
            "range": "± 128118.09385460799"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2652948.214285714,
            "unit": "ns",
            "range": "± 113265.79037591412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1866235.0515463918,
            "unit": "ns",
            "range": "± 145393.431076709"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5129309,
            "unit": "ns",
            "range": "± 327057.2976999411"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48111.82795698925,
            "unit": "ns",
            "range": "± 2916.2904318882493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7131116.666666667,
            "unit": "ns",
            "range": "± 119944.60427730001"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20504100,
            "unit": "ns",
            "range": "± 521198.8379646027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52686993.333333336,
            "unit": "ns",
            "range": "± 557744.0676084157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100984107.14285715,
            "unit": "ns",
            "range": "± 1614405.5030897886"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206141163.33333334,
            "unit": "ns",
            "range": "± 2217254.7520580064"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4935756.041666667,
            "unit": "ns",
            "range": "± 25046.54356787575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1571272.8255208333,
            "unit": "ns",
            "range": "± 3939.072673227696"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1213996.71875,
            "unit": "ns",
            "range": "± 6531.10927310756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2721827.734375,
            "unit": "ns",
            "range": "± 7476.86372001613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843121.5234375,
            "unit": "ns",
            "range": "± 3593.391860991132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 796915.4817708334,
            "unit": "ns",
            "range": "± 2958.585923994331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3291374.025974026,
            "unit": "ns",
            "range": "± 167224.56411301775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3470415.789473684,
            "unit": "ns",
            "range": "± 146041.32584095318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4172638.2352941176,
            "unit": "ns",
            "range": "± 132149.66954339237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3830353.846153846,
            "unit": "ns",
            "range": "± 157969.18719346536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6404646.341463415,
            "unit": "ns",
            "range": "± 218762.9037309125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 267543.3333333333,
            "unit": "ns",
            "range": "± 7323.777211499416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264285,
            "unit": "ns",
            "range": "± 7505.230654649275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247184,
            "unit": "ns",
            "range": "± 18930.189239584073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4198818.75,
            "unit": "ns",
            "range": "± 78355.55048410206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3849777.272727273,
            "unit": "ns",
            "range": "± 94386.76729196121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21905.434782608696,
            "unit": "ns",
            "range": "± 1682.9699108940354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92184.94623655915,
            "unit": "ns",
            "range": "± 6458.39437302437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77837.75510204081,
            "unit": "ns",
            "range": "± 6861.764903353308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109188.77551020408,
            "unit": "ns",
            "range": "± 16415.003714247996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6270.103092783505,
            "unit": "ns",
            "range": "± 1164.4173210642743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21604.639175257733,
            "unit": "ns",
            "range": "± 2292.1069555177055"
          }
        ]
      }
    ]
  }
}