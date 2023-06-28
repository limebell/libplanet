window.BENCHMARK_DATA = {
  "lastUpdate": 1687955064950,
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
          "id": "4a653deb88318d440f450b17538374e1189cb874",
          "message": "chore: fix doc build",
          "timestamp": "2023-06-27T17:15:19+09:00",
          "tree_id": "c34acc6d1e8fb440eac240eaf6cb99bfab5288f4",
          "url": "https://github.com/limebell/libplanet/commit/4a653deb88318d440f450b17538374e1189cb874"
        },
        "date": 1687854956852,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8367105.766666667,
            "unit": "ns",
            "range": "± 138345.60259492308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20874805.92857143,
            "unit": "ns",
            "range": "± 266387.59285952966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51847812.125,
            "unit": "ns",
            "range": "± 925297.6692022141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104361924.33333333,
            "unit": "ns",
            "range": "± 2429103.0508847153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211926090.06666666,
            "unit": "ns",
            "range": "± 1967657.0923269002"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72863.93157894736,
            "unit": "ns",
            "range": "± 6932.560803230039"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336285.5084745763,
            "unit": "ns",
            "range": "± 14638.36905058531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316903.61842105264,
            "unit": "ns",
            "range": "± 15971.299162324152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 315070.36666666664,
            "unit": "ns",
            "range": "± 9214.664892716253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4114187.6379310344,
            "unit": "ns",
            "range": "± 119958.35261120662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3681916.290322581,
            "unit": "ns",
            "range": "± 111723.61813874856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22851.8064516129,
            "unit": "ns",
            "range": "± 3951.866318198839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114476.30808080808,
            "unit": "ns",
            "range": "± 13396.2942497564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120455.13157894737,
            "unit": "ns",
            "range": "± 6149.5021995651105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127083.71649484536,
            "unit": "ns",
            "range": "± 15124.726733913523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8020.129032258064,
            "unit": "ns",
            "range": "± 740.1590637771349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21582.11224489796,
            "unit": "ns",
            "range": "± 3542.8422828118455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1598215.4948453608,
            "unit": "ns",
            "range": "± 139196.6448817496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3009390.6296296297,
            "unit": "ns",
            "range": "± 125794.02313235117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2518071,
            "unit": "ns",
            "range": "± 195985.5018216696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6449119.952380952,
            "unit": "ns",
            "range": "± 232968.42219085238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3444227.9,
            "unit": "ns",
            "range": "± 61428.06674221251"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3517762.1615384617,
            "unit": "ns",
            "range": "± 162985.54493634138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4593244,
            "unit": "ns",
            "range": "± 118719.89150169365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4492058.860465116,
            "unit": "ns",
            "range": "± 243105.12619213128"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7580201.872093023,
            "unit": "ns",
            "range": "± 274660.952740181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6793704.896935096,
            "unit": "ns",
            "range": "± 94080.51578977235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1935332.5875901442,
            "unit": "ns",
            "range": "± 7615.3376946897015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1261995.9340444712,
            "unit": "ns",
            "range": "± 4254.053229258116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2473034.7643229165,
            "unit": "ns",
            "range": "± 23817.421809019725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 864016.7157389323,
            "unit": "ns",
            "range": "± 1757.229498777732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738156.9953264509,
            "unit": "ns",
            "range": "± 7595.808514190729"
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
          "id": "c9089ae1494539bc8b038f9854830d90c70bbb65",
          "message": "chore: apply suggestions from the code review",
          "timestamp": "2023-06-27T19:07:48+09:00",
          "tree_id": "0e13e0658adafb87bb2cfbc8de4e0f51b99f5548",
          "url": "https://github.com/limebell/libplanet/commit/c9089ae1494539bc8b038f9854830d90c70bbb65"
        },
        "date": 1687861860029,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8908646.883838383,
            "unit": "ns",
            "range": "± 538713.0996889946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21204579.533333335,
            "unit": "ns",
            "range": "± 792012.2369398318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52213824,
            "unit": "ns",
            "range": "± 805828.4919709365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108992237.1875,
            "unit": "ns",
            "range": "± 6230951.931772363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223863717.4473684,
            "unit": "ns",
            "range": "± 4672624.222411112"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82616.10989010989,
            "unit": "ns",
            "range": "± 10240.939918289345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 376807.5888888889,
            "unit": "ns",
            "range": "± 52156.00375685687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 385539.73595505615,
            "unit": "ns",
            "range": "± 63971.32182986062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 372809.3777777778,
            "unit": "ns",
            "range": "± 50437.409103231024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4734552.75,
            "unit": "ns",
            "range": "± 561347.7661035077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4475939.130434782,
            "unit": "ns",
            "range": "± 581371.878973181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27138,
            "unit": "ns",
            "range": "± 3339.2147869309674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 126705.52631578948,
            "unit": "ns",
            "range": "± 17982.845300536384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 127597.35057471265,
            "unit": "ns",
            "range": "± 11364.996425713569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 141547.71348314607,
            "unit": "ns",
            "range": "± 24676.14916338148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9435.466666666667,
            "unit": "ns",
            "range": "± 1367.3539233444255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27726.586021505376,
            "unit": "ns",
            "range": "± 3913.8595836266213"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2091677.3494623655,
            "unit": "ns",
            "range": "± 565250.2694042383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4320196.25,
            "unit": "ns",
            "range": "± 1243330.017449494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3094265.3494623657,
            "unit": "ns",
            "range": "± 767763.1444948703"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8757944.186813187,
            "unit": "ns",
            "range": "± 2290284.7639924847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3461235.184782609,
            "unit": "ns",
            "range": "± 239428.38860626332"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3756769.0103092785,
            "unit": "ns",
            "range": "± 301328.380529016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5051444.662921349,
            "unit": "ns",
            "range": "± 645938.0068607052"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4809699.574468086,
            "unit": "ns",
            "range": "± 501225.11416157585"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10295838.731578948,
            "unit": "ns",
            "range": "± 3007069.00005137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8553276.933011968,
            "unit": "ns",
            "range": "± 1509958.9113558407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2341832.2199089974,
            "unit": "ns",
            "range": "± 346408.15907075495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376837.404387718,
            "unit": "ns",
            "range": "± 49886.70756173565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3064756.672439759,
            "unit": "ns",
            "range": "± 151241.9205445475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 866670.4562562004,
            "unit": "ns",
            "range": "± 39804.78698282073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 808239.94625,
            "unit": "ns",
            "range": "± 20951.59854198421"
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
          "id": "798142789a68876aa5f1d580beb7a05695098f08",
          "message": "test: fill up lacking unit test",
          "timestamp": "2023-06-28T21:05:39+09:00",
          "tree_id": "3e67241fbda948a4df7952d28f35216321beb33f",
          "url": "https://github.com/limebell/libplanet/commit/798142789a68876aa5f1d580beb7a05695098f08"
        },
        "date": 1687955054539,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8991810.994623655,
            "unit": "ns",
            "range": "± 1055142.3462447945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20232427.92857143,
            "unit": "ns",
            "range": "± 468598.3182259163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49415434.716216214,
            "unit": "ns",
            "range": "± 1515640.5133869075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98989219.85294117,
            "unit": "ns",
            "range": "± 5345819.743074646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202509813.2837838,
            "unit": "ns",
            "range": "± 10049632.819930872"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73084.53125,
            "unit": "ns",
            "range": "± 10686.456460549665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 345769.4,
            "unit": "ns",
            "range": "± 19444.442533374615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 353801.0869565217,
            "unit": "ns",
            "range": "± 24928.631510401174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 329530.1,
            "unit": "ns",
            "range": "± 7475.046212847819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4297986.269230769,
            "unit": "ns",
            "range": "± 65465.74938107438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3774634.6714285715,
            "unit": "ns",
            "range": "± 122466.97643626358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26658.14893617021,
            "unit": "ns",
            "range": "± 5822.095696582131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 128375.94444444444,
            "unit": "ns",
            "range": "± 14018.837845020136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119620.80645161291,
            "unit": "ns",
            "range": "± 10489.74248892083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134306.63829787233,
            "unit": "ns",
            "range": "± 21109.300280193507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7169.791666666667,
            "unit": "ns",
            "range": "± 1340.214436233142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22859.06818181818,
            "unit": "ns",
            "range": "± 3717.2166165839935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1780079.0454545454,
            "unit": "ns",
            "range": "± 230587.63308545397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3254171.1555555556,
            "unit": "ns",
            "range": "± 314238.8316393973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2836176.105882353,
            "unit": "ns",
            "range": "± 331809.9729532891"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8469202.766666668,
            "unit": "ns",
            "range": "± 1713749.3199048243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3273858.936170213,
            "unit": "ns",
            "range": "± 262007.0995864326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3393712.1978021977,
            "unit": "ns",
            "range": "± 189966.43148767218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4476358.363636363,
            "unit": "ns",
            "range": "± 206513.4632665078"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4644100.680722891,
            "unit": "ns",
            "range": "± 246894.1073416454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7865887.362068965,
            "unit": "ns",
            "range": "± 230173.7356012786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6854996.446614583,
            "unit": "ns",
            "range": "± 105286.39613509846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1920470.9393028845,
            "unit": "ns",
            "range": "± 12962.709704637768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1292268.1309988839,
            "unit": "ns",
            "range": "± 7095.120593227374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2674930.7236979166,
            "unit": "ns",
            "range": "± 43505.504571956655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807047.3349609375,
            "unit": "ns",
            "range": "± 2842.9679853929474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731545.45703125,
            "unit": "ns",
            "range": "± 4539.250358067766"
          }
        ]
      }
    ]
  }
}