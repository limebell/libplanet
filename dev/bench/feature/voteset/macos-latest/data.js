window.BENCHMARK_DATA = {
  "lastUpdate": 1687854122759,
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
          "id": "0c62f6b3f70f49aa968d5199b11775e95bd1093e",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-06-27T16:59:05+09:00",
          "tree_id": "fe01a0e48cb493795875a583b8623dcd2261ecf0",
          "url": "https://github.com/limebell/libplanet/commit/0c62f6b3f70f49aa968d5199b11775e95bd1093e"
        },
        "date": 1687854115513,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9002688.836734693,
            "unit": "ns",
            "range": "± 574628.1450671721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22222668.383838385,
            "unit": "ns",
            "range": "± 1798474.5956667466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53930502.48421053,
            "unit": "ns",
            "range": "± 3623892.6107931025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107046396.03424658,
            "unit": "ns",
            "range": "± 5213562.905310298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221972936.52857143,
            "unit": "ns",
            "range": "± 6791621.508973233"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75392.56593406593,
            "unit": "ns",
            "range": "± 11215.797823508885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 365571.9845360825,
            "unit": "ns",
            "range": "± 47359.31666374136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331802.75,
            "unit": "ns",
            "range": "± 35191.20368976622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317556.89024390245,
            "unit": "ns",
            "range": "± 18162.193314519525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4386506.104166667,
            "unit": "ns",
            "range": "± 274692.23524988565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4333252.465116279,
            "unit": "ns",
            "range": "± 475778.0941529347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23569.782608695652,
            "unit": "ns",
            "range": "± 3476.573648987905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120684.75555555556,
            "unit": "ns",
            "range": "± 16809.087638791236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117067.6091954023,
            "unit": "ns",
            "range": "± 10744.874289476757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136322.61290322582,
            "unit": "ns",
            "range": "± 28881.889838666633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8634.031578947368,
            "unit": "ns",
            "range": "± 1083.2857273486381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24454.852272727272,
            "unit": "ns",
            "range": "± 3347.5234611206834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1826624.6666666667,
            "unit": "ns",
            "range": "± 278364.1262282355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3541626.387640449,
            "unit": "ns",
            "range": "± 501465.0233229232"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3277551.0789473685,
            "unit": "ns",
            "range": "± 695093.484964717"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8213988.868131869,
            "unit": "ns",
            "range": "± 2109200.3251633556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3438388.7291666665,
            "unit": "ns",
            "range": "± 268180.69868490886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3558874.1413043477,
            "unit": "ns",
            "range": "± 271612.857746057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4788266.93298969,
            "unit": "ns",
            "range": "± 360802.50412783277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4688130.826086956,
            "unit": "ns",
            "range": "± 386863.3198542203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8169744.505376345,
            "unit": "ns",
            "range": "± 617674.0103662327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7459102.129657452,
            "unit": "ns",
            "range": "± 305091.84304456995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2150421.092057292,
            "unit": "ns",
            "range": "± 38259.87853707534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1409223.051077178,
            "unit": "ns",
            "range": "± 41348.98689396546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3010561.611040901,
            "unit": "ns",
            "range": "± 138792.59577406183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 882450.4900878906,
            "unit": "ns",
            "range": "± 20257.56233952658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 810936.1656334918,
            "unit": "ns",
            "range": "± 20063.76954380034"
          }
        ]
      }
    ]
  }
}