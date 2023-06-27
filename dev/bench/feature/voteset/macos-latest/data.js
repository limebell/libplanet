window.BENCHMARK_DATA = {
  "lastUpdate": 1687852613635,
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
          "id": "e102b155f5f07a4d6923f5284d44f8948261df96",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-06-27T16:33:48+09:00",
          "tree_id": "339cafe715ac8791e7a8a18c68547ddcc65a1735",
          "url": "https://github.com/limebell/libplanet/commit/e102b155f5f07a4d6923f5284d44f8948261df96"
        },
        "date": 1687852606892,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9799704.959770115,
            "unit": "ns",
            "range": "± 1078338.842662831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21901070.75,
            "unit": "ns",
            "range": "± 327447.3033423921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54646555.24285714,
            "unit": "ns",
            "range": "± 2659940.74725996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115615110.2204301,
            "unit": "ns",
            "range": "± 13606172.39181659"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234823011.22727272,
            "unit": "ns",
            "range": "± 11521690.026680555"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74474.1,
            "unit": "ns",
            "range": "± 8077.118282426883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 370922.2888888889,
            "unit": "ns",
            "range": "± 35642.38913234735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 354314.2826086957,
            "unit": "ns",
            "range": "± 44529.30315029781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 324757.5777777778,
            "unit": "ns",
            "range": "± 23588.563456423177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4375212.049019608,
            "unit": "ns",
            "range": "± 177748.57097116858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4073968.8947368423,
            "unit": "ns",
            "range": "± 273886.3309375156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25249.177419354837,
            "unit": "ns",
            "range": "± 4783.939010901796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118095.00537634408,
            "unit": "ns",
            "range": "± 15889.69710058503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124095.62087912088,
            "unit": "ns",
            "range": "± 14789.439195915114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129930.80927835051,
            "unit": "ns",
            "range": "± 21808.441921154077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7966.247368421053,
            "unit": "ns",
            "range": "± 1148.5665809248803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21998.14893617021,
            "unit": "ns",
            "range": "± 3963.7582523352557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2196707.632183908,
            "unit": "ns",
            "range": "± 512147.6295803941"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3504470.8863636362,
            "unit": "ns",
            "range": "± 585727.2902911414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3016052.068421053,
            "unit": "ns",
            "range": "± 668164.1153184368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7784720.744444445,
            "unit": "ns",
            "range": "± 1203747.3528030682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3732770.618556701,
            "unit": "ns",
            "range": "± 332403.9475315715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3798133.905263158,
            "unit": "ns",
            "range": "± 341398.1761259248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4752990.867346939,
            "unit": "ns",
            "range": "± 402516.8758071828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4849672.478494624,
            "unit": "ns",
            "range": "± 647623.3465819292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8339167.226804123,
            "unit": "ns",
            "range": "± 862772.8840625042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7193833.736229482,
            "unit": "ns",
            "range": "± 437362.34981829085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2089733.4848090278,
            "unit": "ns",
            "range": "± 58097.59722331427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1321349.4646139706,
            "unit": "ns",
            "range": "± 19939.918862212704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2775318.368359375,
            "unit": "ns",
            "range": "± 55988.543019875266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 881599.3884626116,
            "unit": "ns",
            "range": "± 12408.719569496765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770168.7034254808,
            "unit": "ns",
            "range": "± 10239.48488895388"
          }
        ]
      }
    ]
  }
}