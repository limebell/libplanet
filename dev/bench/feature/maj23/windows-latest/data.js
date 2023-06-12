window.BENCHMARK_DATA = {
  "lastUpdate": 1686556770888,
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
          "id": "0f10562e3debb2347a96f2625766b1ec6e569af4",
          "message": "temp: test case",
          "timestamp": "2023-06-09T14:38:41+09:00",
          "tree_id": "2a18c850e206cc6f3a7c5d341f39bb98d00e58aa",
          "url": "https://github.com/limebell/libplanet/commit/0f10562e3debb2347a96f2625766b1ec6e569af4"
        },
        "date": 1686289902490,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 961673.9583333334,
            "unit": "ns",
            "range": "± 69064.3045052815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1771608.9743589743,
            "unit": "ns",
            "range": "± 88662.86970242654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1551540.8163265307,
            "unit": "ns",
            "range": "± 144749.87302078342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3839149.3827160494,
            "unit": "ns",
            "range": "± 196274.6335644629"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40367.36842105263,
            "unit": "ns",
            "range": "± 8135.48102522267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6534933.333333333,
            "unit": "ns",
            "range": "± 95319.69266381321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 16173930.76923077,
            "unit": "ns",
            "range": "± 65953.17006047277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 40935413.333333336,
            "unit": "ns",
            "range": "± 281444.7620675114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 80726946.66666667,
            "unit": "ns",
            "range": "± 358355.41787980474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154401504,
            "unit": "ns",
            "range": "± 3993408.379596724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3940958.035714286,
            "unit": "ns",
            "range": "± 32871.645693979175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1097554.0559895833,
            "unit": "ns",
            "range": "± 3876.5139614884097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 856128.7109375,
            "unit": "ns",
            "range": "± 10231.587871802063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964959.9739583333,
            "unit": "ns",
            "range": "± 7828.191199444896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 595572.2721354166,
            "unit": "ns",
            "range": "± 1631.4877472917842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 534550.7184709822,
            "unit": "ns",
            "range": "± 595.7312261941884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2517173.417721519,
            "unit": "ns",
            "range": "± 127758.34330611551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2511494.5945945946,
            "unit": "ns",
            "range": "± 69261.63739339703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3110728.846153846,
            "unit": "ns",
            "range": "± 127169.93314727247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3059782.926829268,
            "unit": "ns",
            "range": "± 90858.15291551723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4829097.959183673,
            "unit": "ns",
            "range": "± 190219.62250886468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246354.25531914894,
            "unit": "ns",
            "range": "± 17103.257973569107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224867.64705882352,
            "unit": "ns",
            "range": "± 7070.455841814705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213844.23076923078,
            "unit": "ns",
            "range": "± 8665.763455081546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3305950,
            "unit": "ns",
            "range": "± 87717.8488108321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2916200,
            "unit": "ns",
            "range": "± 41108.67398643596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26968.13186813187,
            "unit": "ns",
            "range": "± 2140.0871799936417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106729.72972972973,
            "unit": "ns",
            "range": "± 5229.231058214958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101114.44444444444,
            "unit": "ns",
            "range": "± 6412.3049040319465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110584.21052631579,
            "unit": "ns",
            "range": "± 13021.645774579012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9090.20618556701,
            "unit": "ns",
            "range": "± 1090.647723623294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25035.5421686747,
            "unit": "ns",
            "range": "± 1371.587341956301"
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
          "id": "96f58e605e9378f62007d42d125c3d30038961be",
          "message": "test: add test case",
          "timestamp": "2023-06-09T19:12:47+09:00",
          "tree_id": "32fccaa2d4f28bbb6a422ec9287d59db1c3720d6",
          "url": "https://github.com/limebell/libplanet/commit/96f58e605e9378f62007d42d125c3d30038961be"
        },
        "date": 1686306816888,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1626105.2083333333,
            "unit": "ns",
            "range": "± 135030.11077049805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3050684.285714286,
            "unit": "ns",
            "range": "± 147484.08180940597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2582410.8695652173,
            "unit": "ns",
            "range": "± 172792.26424771143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6392783.333333333,
            "unit": "ns",
            "range": "± 339871.7993006177"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57600,
            "unit": "ns",
            "range": "± 4577.897209106257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8906367.391304348,
            "unit": "ns",
            "range": "± 327977.97151932685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24187686.111111112,
            "unit": "ns",
            "range": "± 807779.6206366394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61148776.92307692,
            "unit": "ns",
            "range": "± 1668902.35239997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125463558.33333333,
            "unit": "ns",
            "range": "± 2907633.836901193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248505644.44444445,
            "unit": "ns",
            "range": "± 8189313.389549454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6055255.588942308,
            "unit": "ns",
            "range": "± 161748.86968362497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1864827.3567708333,
            "unit": "ns",
            "range": "± 31987.166925168192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1407212.5057444852,
            "unit": "ns",
            "range": "± 27608.934428537123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3239610.2251838236,
            "unit": "ns",
            "range": "± 64893.40111966296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1036689.4986979166,
            "unit": "ns",
            "range": "± 12284.53370689842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 941521.3671875,
            "unit": "ns",
            "range": "± 14855.916527761283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3753361.7647058824,
            "unit": "ns",
            "range": "± 115137.54097706791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3925961.904761905,
            "unit": "ns",
            "range": "± 210863.86626810432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4990114.285714285,
            "unit": "ns",
            "range": "± 63220.71054455369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4795753.333333333,
            "unit": "ns",
            "range": "± 165217.2077214499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7930152.857142857,
            "unit": "ns",
            "range": "± 385074.8171126322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305475.40983606555,
            "unit": "ns",
            "range": "± 13704.873290642578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302247.88732394367,
            "unit": "ns",
            "range": "± 14641.202713623235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275468.6046511628,
            "unit": "ns",
            "range": "± 14905.707644490984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4833490.625,
            "unit": "ns",
            "range": "± 148777.56369043447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4231981.081081081,
            "unit": "ns",
            "range": "± 143061.01036861053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22964.772727272728,
            "unit": "ns",
            "range": "± 1879.474111622489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102834.78260869565,
            "unit": "ns",
            "range": "± 6324.2501146508475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91571.73913043478,
            "unit": "ns",
            "range": "± 6716.804022959698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110102.63157894737,
            "unit": "ns",
            "range": "± 18026.42765677519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6547.872340425532,
            "unit": "ns",
            "range": "± 1106.3578455692027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22260.752688172044,
            "unit": "ns",
            "range": "± 2026.2657002900787"
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
          "id": "a03eb569fe044c8c767226d402e9445dfc16df02",
          "message": "temp: test",
          "timestamp": "2023-06-09T19:24:54+09:00",
          "tree_id": "aa197eb7cb3ddb258652973e40233336d4280fad",
          "url": "https://github.com/limebell/libplanet/commit/a03eb569fe044c8c767226d402e9445dfc16df02"
        },
        "date": 1686307203185,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1288027,
            "unit": "ns",
            "range": "± 95777.66747456677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2460131.7647058824,
            "unit": "ns",
            "range": "± 129440.44522460504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2161279.1666666665,
            "unit": "ns",
            "range": "± 48910.39703790798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5297082,
            "unit": "ns",
            "range": "± 328188.248633942"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46228.88888888889,
            "unit": "ns",
            "range": "± 2585.7537290055616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7162516.666666667,
            "unit": "ns",
            "range": "± 8111.925377697538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19556670,
            "unit": "ns",
            "range": "± 237089.6159683085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49156765,
            "unit": "ns",
            "range": "± 1125053.4458766603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95427833.33333333,
            "unit": "ns",
            "range": "± 431426.4697348539"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191484126.66666666,
            "unit": "ns",
            "range": "± 2253696.830120511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4800752.604166667,
            "unit": "ns",
            "range": "± 31004.5909602992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1556582.6953125,
            "unit": "ns",
            "range": "± 9422.887070426617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1191102.4479166667,
            "unit": "ns",
            "range": "± 7794.3938117521275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642217.4869791665,
            "unit": "ns",
            "range": "± 12012.611854742805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832956.5290178572,
            "unit": "ns",
            "range": "± 3220.4669389237506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756845.4622395834,
            "unit": "ns",
            "range": "± 2506.978032818225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3171183.3333333335,
            "unit": "ns",
            "range": "± 93873.44776560782"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3246485,
            "unit": "ns",
            "range": "± 65569.11399833244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4003802.6315789474,
            "unit": "ns",
            "range": "± 138004.86769096638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4031935.294117647,
            "unit": "ns",
            "range": "± 164573.93696880367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6492047.5,
            "unit": "ns",
            "range": "± 229025.18726953625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252298.11320754717,
            "unit": "ns",
            "range": "± 9913.190330332569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239732.43243243243,
            "unit": "ns",
            "range": "± 7989.92608970314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212272.22222222222,
            "unit": "ns",
            "range": "± 7103.424168711518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3922900,
            "unit": "ns",
            "range": "± 64722.46242887506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3561273.529411765,
            "unit": "ns",
            "range": "± 62002.16255716171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16760.21505376344,
            "unit": "ns",
            "range": "± 1078.862100321469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78984.88372093023,
            "unit": "ns",
            "range": "± 4306.971569904678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68415.38461538461,
            "unit": "ns",
            "range": "± 651.7235531600724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81167.39130434782,
            "unit": "ns",
            "range": "± 11239.315890718268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4477.083333333333,
            "unit": "ns",
            "range": "± 581.5549332185886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16386.315789473683,
            "unit": "ns",
            "range": "± 1254.5755004981438"
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
          "id": "a66da72edcb7e33701c4782175cd0153cbe44bca",
          "message": "test: add tests for added interfaces",
          "timestamp": "2023-06-12T16:34:16+09:00",
          "tree_id": "fd79b037c40ac531bb7e7d4c6b8e47d1956872d3",
          "url": "https://github.com/limebell/libplanet/commit/a66da72edcb7e33701c4782175cd0153cbe44bca"
        },
        "date": 1686556755221,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2121312.6315789474,
            "unit": "ns",
            "range": "± 429349.54049568076"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3818316.091954023,
            "unit": "ns",
            "range": "± 372849.5172703535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3210628.723404255,
            "unit": "ns",
            "range": "± 462642.7629989925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8014994.680851064,
            "unit": "ns",
            "range": "± 930982.6329608024"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 98376.54320987655,
            "unit": "ns",
            "range": "± 9859.453225267342"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10909743.243243244,
            "unit": "ns",
            "range": "± 333026.4842158792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27980488.04347826,
            "unit": "ns",
            "range": "± 1820943.0139861985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71528907.44680852,
            "unit": "ns",
            "range": "± 4589048.865523116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 143579853.73134327,
            "unit": "ns",
            "range": "± 6804349.695829118"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 292357394.6666667,
            "unit": "ns",
            "range": "± 14727695.622587828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7322877.838541667,
            "unit": "ns",
            "range": "± 101665.43783147357"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2278087.787224265,
            "unit": "ns",
            "range": "± 71658.99509425776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1622470.5208333333,
            "unit": "ns",
            "range": "± 28745.539856535852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 4611595.263671875,
            "unit": "ns",
            "range": "± 181992.38787743394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1279288.623046875,
            "unit": "ns",
            "range": "± 76743.19449889498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1145236.701171875,
            "unit": "ns",
            "range": "± 76750.6417133054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4560516.4948453605,
            "unit": "ns",
            "range": "± 430792.76864491653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4878037.894736842,
            "unit": "ns",
            "range": "± 553401.7253429393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5801895,
            "unit": "ns",
            "range": "± 202232.59641136503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5984107.216494845,
            "unit": "ns",
            "range": "± 674714.8109336366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9711225,
            "unit": "ns",
            "range": "± 1113930.1491778893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 422046.84210526315,
            "unit": "ns",
            "range": "± 64189.49249969516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 400722.3404255319,
            "unit": "ns",
            "range": "± 54686.04115941578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 351098.1927710843,
            "unit": "ns",
            "range": "± 19693.687000399474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5589408.219178082,
            "unit": "ns",
            "range": "± 270275.0557577228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4871624.324324325,
            "unit": "ns",
            "range": "± 153598.51418082972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 39274.41860465116,
            "unit": "ns",
            "range": "± 6691.771699746798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 162605.88235294117,
            "unit": "ns",
            "range": "± 21126.3621873646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 157777.10843373495,
            "unit": "ns",
            "range": "± 11190.809876109088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 185695.45454545456,
            "unit": "ns",
            "range": "± 41217.64187929562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 13689.759036144578,
            "unit": "ns",
            "range": "± 2474.057581552637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 43588.65979381443,
            "unit": "ns",
            "range": "± 15322.416015763882"
          }
        ]
      }
    ]
  }
}