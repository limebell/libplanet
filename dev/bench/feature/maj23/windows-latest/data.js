window.BENCHMARK_DATA = {
  "lastUpdate": 1687774418219,
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
          "id": "7da49c610154a9b1d4f65cd935630367cc958c87",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-06-12T18:05:48+09:00",
          "tree_id": "5544c6c93a099682cc8f455a78509d1b12cda0e4",
          "url": "https://github.com/limebell/libplanet/commit/7da49c610154a9b1d4f65cd935630367cc958c87"
        },
        "date": 1686561847880,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1576348.9583333333,
            "unit": "ns",
            "range": "± 164912.16034750882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2896239.5833333335,
            "unit": "ns",
            "range": "± 204109.81692225166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2465617.3469387754,
            "unit": "ns",
            "range": "± 217363.9373087754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6387645.918367347,
            "unit": "ns",
            "range": "± 660127.7210327951"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53769.791666666664,
            "unit": "ns",
            "range": "± 11347.646357323496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8165365.7534246575,
            "unit": "ns",
            "range": "± 400693.7848626423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21496203.19148936,
            "unit": "ns",
            "range": "± 1224911.877581064"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56030712.90322581,
            "unit": "ns",
            "range": "± 2517815.1669478733"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113141141.93548387,
            "unit": "ns",
            "range": "± 5130880.702612573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225668622.91666666,
            "unit": "ns",
            "range": "± 8787552.275858905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5727350.885416667,
            "unit": "ns",
            "range": "± 105910.31099324061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1848617.9947916667,
            "unit": "ns",
            "range": "± 25050.814327045508"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1441952.7901785714,
            "unit": "ns",
            "range": "± 20778.15750895077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3117433.9322916665,
            "unit": "ns",
            "range": "± 57004.378631769294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1023961.2890625,
            "unit": "ns",
            "range": "± 17779.212674917046"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 958825.0906808035,
            "unit": "ns",
            "range": "± 10656.898818824795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3453195.87628866,
            "unit": "ns",
            "range": "± 216381.79650288945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3624283.1578947366,
            "unit": "ns",
            "range": "± 307742.86194001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4841264.285714285,
            "unit": "ns",
            "range": "± 345356.54077740014"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4470646.315789473,
            "unit": "ns",
            "range": "± 311568.7106386778"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8041242.857142857,
            "unit": "ns",
            "range": "± 567396.7974646983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 306611.2244897959,
            "unit": "ns",
            "range": "± 39185.86396352186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286930.5263157895,
            "unit": "ns",
            "range": "± 37148.38009034938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 257367.39130434784,
            "unit": "ns",
            "range": "± 29820.702701369064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4437704.87804878,
            "unit": "ns",
            "range": "± 234983.77033657007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4182400,
            "unit": "ns",
            "range": "± 111306.0393689399"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16934.615384615383,
            "unit": "ns",
            "range": "± 1820.0775581502887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88612.76595744681,
            "unit": "ns",
            "range": "± 13222.994260508938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86142.26804123711,
            "unit": "ns",
            "range": "± 17066.779591819275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 102081.31868131868,
            "unit": "ns",
            "range": "± 20077.914411876725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4922.340425531915,
            "unit": "ns",
            "range": "± 810.9670657856976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16865.853658536584,
            "unit": "ns",
            "range": "± 2276.6782989885096"
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
          "id": "9626e49e3c14fd20d5ad8b6c76a90301ebece760",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-06-12T18:45:53+09:00",
          "tree_id": "5544c6c93a099682cc8f455a78509d1b12cda0e4",
          "url": "https://github.com/limebell/libplanet/commit/9626e49e3c14fd20d5ad8b6c76a90301ebece760"
        },
        "date": 1686564532333,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1704409.574468085,
            "unit": "ns",
            "range": "± 198364.95802941237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3198548.9583333335,
            "unit": "ns",
            "range": "± 312894.6814554604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2645402.1505376343,
            "unit": "ns",
            "range": "± 267910.23885301856"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6703145.833333333,
            "unit": "ns",
            "range": "± 582893.2367562179"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66235.86956521739,
            "unit": "ns",
            "range": "± 12927.350522950916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8976765.263157895,
            "unit": "ns",
            "range": "± 836825.3106766224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24889603.06122449,
            "unit": "ns",
            "range": "± 1948326.2158033005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64727442.02898551,
            "unit": "ns",
            "range": "± 3121982.3005304234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130491889.1891892,
            "unit": "ns",
            "range": "± 6539706.811315298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 272071053.030303,
            "unit": "ns",
            "range": "± 12465240.185426645"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6376752.630208333,
            "unit": "ns",
            "range": "± 92662.6120939668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2009652.987132353,
            "unit": "ns",
            "range": "± 39189.178960127705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1566374.27734375,
            "unit": "ns",
            "range": "± 21969.88945913656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3446358.7890625,
            "unit": "ns",
            "range": "± 66263.8685189585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1088464.04296875,
            "unit": "ns",
            "range": "± 24093.383146952518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1026033.2400760135,
            "unit": "ns",
            "range": "± 33197.701180931246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4023342.222222222,
            "unit": "ns",
            "range": "± 391228.63425964763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4298134.40860215,
            "unit": "ns",
            "range": "± 345972.59331472806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5433310,
            "unit": "ns",
            "range": "± 389114.6513835586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4974406.382978723,
            "unit": "ns",
            "range": "± 593982.2456360649"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8842132.978723405,
            "unit": "ns",
            "range": "± 708156.2846747637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333708.3333333333,
            "unit": "ns",
            "range": "± 24744.541607340998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 326587.9120879121,
            "unit": "ns",
            "range": "± 32971.54947043093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298168.08510638296,
            "unit": "ns",
            "range": "± 26050.113874086885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5241019.75308642,
            "unit": "ns",
            "range": "± 273843.57187076396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4749659.523809524,
            "unit": "ns",
            "range": "± 140233.43962839822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25182.795698924732,
            "unit": "ns",
            "range": "± 4518.9365730540685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103495.74468085106,
            "unit": "ns",
            "range": "± 15300.747855035012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115748.93617021276,
            "unit": "ns",
            "range": "± 20529.301087888314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132903.15789473685,
            "unit": "ns",
            "range": "± 24023.049448711325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8043.617021276596,
            "unit": "ns",
            "range": "± 1760.8989951456638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22204.6511627907,
            "unit": "ns",
            "range": "± 3232.2968332220757"
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
          "id": "6399fdf950302989b1c7037443aedfa0161961ec",
          "message": "chore: fix test",
          "timestamp": "2023-06-12T19:10:09+09:00",
          "tree_id": "e7012c9deb8e2ec93aeb0d5e61919460bbc9b810",
          "url": "https://github.com/limebell/libplanet/commit/6399fdf950302989b1c7037443aedfa0161961ec"
        },
        "date": 1686565531901,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1376378.3505154639,
            "unit": "ns",
            "range": "± 103489.70281587208"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2558936.6666666665,
            "unit": "ns",
            "range": "± 107520.121832474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2180557.2916666665,
            "unit": "ns",
            "range": "± 136511.06895146612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5169522.5,
            "unit": "ns",
            "range": "± 170464.24316764483"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48110.9375,
            "unit": "ns",
            "range": "± 2072.8875027859926"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7281210,
            "unit": "ns",
            "range": "± 159015.17603840935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19819416.666666668,
            "unit": "ns",
            "range": "± 217787.6523477663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51054563.04347826,
            "unit": "ns",
            "range": "± 1288050.9286600954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100487447.61904761,
            "unit": "ns",
            "range": "± 2283283.730205041"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205923966.66666666,
            "unit": "ns",
            "range": "± 4238380.938935221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4951364.676339285,
            "unit": "ns",
            "range": "± 53627.98352659876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1564033.1473214286,
            "unit": "ns",
            "range": "± 12278.377825987804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1201239.4080528845,
            "unit": "ns",
            "range": "± 16565.118853188196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2742747.7734375,
            "unit": "ns",
            "range": "± 33102.99548421677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846557.5846354166,
            "unit": "ns",
            "range": "± 14296.085618473015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787311.03515625,
            "unit": "ns",
            "range": "± 10340.261650694083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3154566.6666666665,
            "unit": "ns",
            "range": "± 109758.64270809296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3303317.6470588236,
            "unit": "ns",
            "range": "± 129283.515895697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4167661.8421052634,
            "unit": "ns",
            "range": "± 210298.5800979837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4170322.8571428573,
            "unit": "ns",
            "range": "± 127389.28315280243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6697402.5,
            "unit": "ns",
            "range": "± 233827.59974786156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272522.5,
            "unit": "ns",
            "range": "± 9397.503419143859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261915.55555555556,
            "unit": "ns",
            "range": "± 14432.354111284412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240820,
            "unit": "ns",
            "range": "± 22576.518596081016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4142973.3333333335,
            "unit": "ns",
            "range": "± 76330.5917577955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3783461.5384615385,
            "unit": "ns",
            "range": "± 51377.04640630772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18624.7311827957,
            "unit": "ns",
            "range": "± 1489.7954275947693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92846.46464646465,
            "unit": "ns",
            "range": "± 7546.093909573662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 79076.04166666667,
            "unit": "ns",
            "range": "± 6828.542956115072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103291.66666666667,
            "unit": "ns",
            "range": "± 13940.11754588111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6570.212765957447,
            "unit": "ns",
            "range": "± 951.9453525512273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22925.77319587629,
            "unit": "ns",
            "range": "± 2112.378120276778"
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
          "id": "724c79a2a3a7a0abc534c2469996f292ede55e7d",
          "message": "chore: fix test",
          "timestamp": "2023-06-12T20:23:59+09:00",
          "tree_id": "0e1b2d899de3de258b17335ad0413d5df88873be",
          "url": "https://github.com/limebell/libplanet/commit/724c79a2a3a7a0abc534c2469996f292ede55e7d"
        },
        "date": 1686570300171,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1755110.5263157894,
            "unit": "ns",
            "range": "± 188065.2894063848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3274493.1506849313,
            "unit": "ns",
            "range": "± 156418.20309027613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2647538.5416666665,
            "unit": "ns",
            "range": "± 168027.23737211034"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6512964.583333333,
            "unit": "ns",
            "range": "± 253634.91394134887"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58237.80487804878,
            "unit": "ns",
            "range": "± 3100.3241664003513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9472708.108108109,
            "unit": "ns",
            "range": "± 317559.6517702343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25084711.53846154,
            "unit": "ns",
            "range": "± 589305.3574010154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63658592.307692304,
            "unit": "ns",
            "range": "± 712795.1744850905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128273703.03030303,
            "unit": "ns",
            "range": "± 3975443.0251926677"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258491233.33333334,
            "unit": "ns",
            "range": "± 6103013.024591488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6222002.552083333,
            "unit": "ns",
            "range": "± 86115.7641703672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1963910.2213541667,
            "unit": "ns",
            "range": "± 24242.30238291015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1460289.1796875,
            "unit": "ns",
            "range": "± 16541.612278030185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3325110.8333333335,
            "unit": "ns",
            "range": "± 43987.34322152397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1034240.8138020834,
            "unit": "ns",
            "range": "± 15858.703866049109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 976967.2005208334,
            "unit": "ns",
            "range": "± 15964.789940785911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4085212,
            "unit": "ns",
            "range": "± 78131.03480691908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4285975,
            "unit": "ns",
            "range": "± 83669.01855924132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5214782.352941177,
            "unit": "ns",
            "range": "± 105758.59442200264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5172988.75,
            "unit": "ns",
            "range": "± 268162.34219324985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8287861.904761905,
            "unit": "ns",
            "range": "± 191692.78149213255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324947.77777777775,
            "unit": "ns",
            "range": "± 12222.287557217476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315438.8888888889,
            "unit": "ns",
            "range": "± 12972.28419487888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298993.3333333333,
            "unit": "ns",
            "range": "± 16620.118105557987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5136966.666666667,
            "unit": "ns",
            "range": "± 119729.90993621157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4571260,
            "unit": "ns",
            "range": "± 51989.13073216088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26543.877551020407,
            "unit": "ns",
            "range": "± 2966.724957683539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110848.97959183673,
            "unit": "ns",
            "range": "± 7965.3404467460705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95602.68817204301,
            "unit": "ns",
            "range": "± 7606.9703647357055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120605.15463917526,
            "unit": "ns",
            "range": "± 19493.515861765958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8350.515463917525,
            "unit": "ns",
            "range": "± 1459.8889592006224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25687.628865979383,
            "unit": "ns",
            "range": "± 2125.6987935323154"
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
          "id": "f131361c2528d94929d0a46d387a4ca92b4005f9",
          "message": "WIP: fix test",
          "timestamp": "2023-06-21T19:02:33+09:00",
          "tree_id": "7e5c85b424d86c3017931fbc5a3b867059b3d90b",
          "url": "https://github.com/limebell/libplanet/commit/f131361c2528d94929d0a46d387a4ca92b4005f9"
        },
        "date": 1687342635058,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1498376.2886597938,
            "unit": "ns",
            "range": "± 126239.87977028417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2618308.695652174,
            "unit": "ns",
            "range": "± 96230.4637052505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2336192.783505155,
            "unit": "ns",
            "range": "± 175506.35983693885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5444136.538461538,
            "unit": "ns",
            "range": "± 222667.5522720848"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51190.52631578947,
            "unit": "ns",
            "range": "± 6784.322881031485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7209976.923076923,
            "unit": "ns",
            "range": "± 66567.84952019699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18496190.625,
            "unit": "ns",
            "range": "± 548914.666004139"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46513800,
            "unit": "ns",
            "range": "± 192735.05928326346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93140178.57142857,
            "unit": "ns",
            "range": "± 667489.5045888465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184027113.33333334,
            "unit": "ns",
            "range": "± 1048610.6419357723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4897006.310096154,
            "unit": "ns",
            "range": "± 23143.667436107473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1528254.9203725962,
            "unit": "ns",
            "range": "± 4393.4451438407095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1137557.0591517857,
            "unit": "ns",
            "range": "± 1697.5001356940406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2581336.6276041665,
            "unit": "ns",
            "range": "± 24390.028732563813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831722.2981770834,
            "unit": "ns",
            "range": "± 4521.8209379584105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741487.1012369791,
            "unit": "ns",
            "range": "± 1380.5999867494904"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3188215.3846153845,
            "unit": "ns",
            "range": "± 99838.20737484154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3197430.769230769,
            "unit": "ns",
            "range": "± 110712.29464804176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4102300,
            "unit": "ns",
            "range": "± 75757.47959301255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4234460,
            "unit": "ns",
            "range": "± 125522.1552088549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6604693.023255814,
            "unit": "ns",
            "range": "± 217119.61745429508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 270027.0588235294,
            "unit": "ns",
            "range": "± 14551.087246526367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244098.03921568627,
            "unit": "ns",
            "range": "± 8731.105089187242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218340.6779661017,
            "unit": "ns",
            "range": "± 9572.124014717258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3853338.4615384615,
            "unit": "ns",
            "range": "± 44311.99119992876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3436660,
            "unit": "ns",
            "range": "± 37696.45303511421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17227.777777777777,
            "unit": "ns",
            "range": "± 1216.9244506549073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104727.27272727272,
            "unit": "ns",
            "range": "± 9981.61389533141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76113.04347826086,
            "unit": "ns",
            "range": "± 6570.517188924857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84919.04761904762,
            "unit": "ns",
            "range": "± 5793.618761978637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4264.210526315789,
            "unit": "ns",
            "range": "± 659.9348435719683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17087.894736842107,
            "unit": "ns",
            "range": "± 1648.092317400373"
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
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "7b04da4b483f6800ba79e9ab97f022f8ba9b191c",
          "message": "WIP: fix test",
          "timestamp": "2023-06-22T11:33:27+09:00",
          "tree_id": "c009bc0c56a0605159ac8696f66ceeace84970dc",
          "url": "https://github.com/limebell/libplanet/commit/7b04da4b483f6800ba79e9ab97f022f8ba9b191c"
        },
        "date": 1687402512191,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1845922.448979592,
            "unit": "ns",
            "range": "± 152877.89719122503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3478817.3684210526,
            "unit": "ns",
            "range": "± 214814.86954857508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2823568.4210526315,
            "unit": "ns",
            "range": "± 222084.86218884404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6738640.206185567,
            "unit": "ns",
            "range": "± 546599.1042459336"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55546.739130434784,
            "unit": "ns",
            "range": "± 11276.674857567152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8336153.535353536,
            "unit": "ns",
            "range": "± 608837.9049908934"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21507382.82828283,
            "unit": "ns",
            "range": "± 1716525.4111579887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63629415.217391305,
            "unit": "ns",
            "range": "± 2445877.3587830868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126607328.26086956,
            "unit": "ns",
            "range": "± 4807191.849055748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252345203.7037037,
            "unit": "ns",
            "range": "± 10610342.406758854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5810335.326086956,
            "unit": "ns",
            "range": "± 142593.02311659695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1860691.6276041667,
            "unit": "ns",
            "range": "± 31464.541659316303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1428604.7058105469,
            "unit": "ns",
            "range": "± 44223.685242616164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3207269.8046875,
            "unit": "ns",
            "range": "± 69518.86262267441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1006596.7215401785,
            "unit": "ns",
            "range": "± 15222.469791833322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 953678.4635416666,
            "unit": "ns",
            "range": "± 17314.885882656512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3679456.1224489794,
            "unit": "ns",
            "range": "± 356235.4227992698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3899053.7634408604,
            "unit": "ns",
            "range": "± 317246.70675617596"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5227948.979591837,
            "unit": "ns",
            "range": "± 360635.8411852621"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4387561.224489796,
            "unit": "ns",
            "range": "± 381248.1546029775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8167773.469387755,
            "unit": "ns",
            "range": "± 569854.6062624755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335047.9166666667,
            "unit": "ns",
            "range": "± 36175.09459971384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323703.15789473685,
            "unit": "ns",
            "range": "± 41825.09033356623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 263182.2916666667,
            "unit": "ns",
            "range": "± 42169.56246990842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4567477.777777778,
            "unit": "ns",
            "range": "± 420931.3053062793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4197473.737373738,
            "unit": "ns",
            "range": "± 282821.7519655606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24868.68686868687,
            "unit": "ns",
            "range": "± 9869.067801899999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96858.06451612903,
            "unit": "ns",
            "range": "± 17806.571347952013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92253.125,
            "unit": "ns",
            "range": "± 21822.185491037857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111056.3829787234,
            "unit": "ns",
            "range": "± 25237.817495531817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7233.505154639175,
            "unit": "ns",
            "range": "± 1920.7572515140964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24857.731958762888,
            "unit": "ns",
            "range": "± 7193.151184916953"
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
          "id": "71901d9103449b1f9027913b27654379be61f0a7",
          "message": "temp: maj23",
          "timestamp": "2023-06-22T15:14:26+09:00",
          "tree_id": "619caa2707c538ad00f5e35c4205b3dda5fe166a",
          "url": "https://github.com/limebell/libplanet/commit/71901d9103449b1f9027913b27654379be61f0a7"
        },
        "date": 1687415465704,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1354570.2127659575,
            "unit": "ns",
            "range": "± 85515.78088633351"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2503013.0434782607,
            "unit": "ns",
            "range": "± 95037.27130551501"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2204107.1428571427,
            "unit": "ns",
            "range": "± 169097.57827769575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5514643,
            "unit": "ns",
            "range": "± 334013.1492769394"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46846.84210526316,
            "unit": "ns",
            "range": "± 3568.880050552213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7091328.571428572,
            "unit": "ns",
            "range": "± 118203.49095828463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19325066.666666668,
            "unit": "ns",
            "range": "± 215402.12007622706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49185120,
            "unit": "ns",
            "range": "± 735451.9302539668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98688333.33333333,
            "unit": "ns",
            "range": "± 1575653.0966403682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198816478.57142857,
            "unit": "ns",
            "range": "± 2248280.7449175543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4758057.96875,
            "unit": "ns",
            "range": "± 24939.591263388924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1523397.03125,
            "unit": "ns",
            "range": "± 9244.880260136262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1189538.3333333333,
            "unit": "ns",
            "range": "± 5659.818092721007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2606752.9817708335,
            "unit": "ns",
            "range": "± 15529.816366516021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831079.8452524039,
            "unit": "ns",
            "range": "± 1883.8281611028956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771147.0572916666,
            "unit": "ns",
            "range": "± 5025.413988199976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3191955.072463768,
            "unit": "ns",
            "range": "± 141078.68532075605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3283898.3870967743,
            "unit": "ns",
            "range": "± 148168.68487532638"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3980181.8181818184,
            "unit": "ns",
            "range": "± 123297.28924064351"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4113359.523809524,
            "unit": "ns",
            "range": "± 144200.47369687055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6749490,
            "unit": "ns",
            "range": "± 297973.34467296436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 262810.76923076925,
            "unit": "ns",
            "range": "± 10983.227597638977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249337.5,
            "unit": "ns",
            "range": "± 10147.56988658736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218874,
            "unit": "ns",
            "range": "± 8769.86514684676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4019728,
            "unit": "ns",
            "range": "± 103290.81324106225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3654376.923076923,
            "unit": "ns",
            "range": "± 56939.751109486395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18695.918367346938,
            "unit": "ns",
            "range": "± 1794.3162478758088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85554.16666666667,
            "unit": "ns",
            "range": "± 6374.91658012156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73243.40659340659,
            "unit": "ns",
            "range": "± 4098.259852880711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88555.421686747,
            "unit": "ns",
            "range": "± 7528.94014845623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5938.541666666667,
            "unit": "ns",
            "range": "± 792.7792274705309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18952.747252747253,
            "unit": "ns",
            "range": "± 1487.827697561535"
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
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "c8f46e4a8d9a4393a0188d7c337df1344707695b",
          "message": "temp: maj23",
          "timestamp": "2023-06-22T15:18:58+09:00",
          "tree_id": "3ae73c5c3e08acbf1606183d7d6c850ca30eb6ee",
          "url": "https://github.com/limebell/libplanet/commit/c8f46e4a8d9a4393a0188d7c337df1344707695b"
        },
        "date": 1687415668565,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1324409.0909090908,
            "unit": "ns",
            "range": "± 72453.63898012925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2505914.035087719,
            "unit": "ns",
            "range": "± 102751.53185962119"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2238931.6326530613,
            "unit": "ns",
            "range": "± 169101.94911722664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5163497.619047619,
            "unit": "ns",
            "range": "± 185287.35163825843"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44215.93406593407,
            "unit": "ns",
            "range": "± 2468.2976490879873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7074106.666666667,
            "unit": "ns",
            "range": "± 64226.16808331839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17959600,
            "unit": "ns",
            "range": "± 108125.84599173581"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45954366.666666664,
            "unit": "ns",
            "range": "± 180333.85177286627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91725646.15384616,
            "unit": "ns",
            "range": "± 278941.9312789689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182550400,
            "unit": "ns",
            "range": "± 495771.2573509931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4849063.191105769,
            "unit": "ns",
            "range": "± 4447.193458443868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1509036.216517857,
            "unit": "ns",
            "range": "± 2012.568233208905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1148708.8151041667,
            "unit": "ns",
            "range": "± 1269.58735681879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2591759.1796875,
            "unit": "ns",
            "range": "± 19111.101976184713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815330.8138020834,
            "unit": "ns",
            "range": "± 3704.563769788249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768761.7606026785,
            "unit": "ns",
            "range": "± 638.5347618697713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3139519.35483871,
            "unit": "ns",
            "range": "± 94921.09853049826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3266005.5555555555,
            "unit": "ns",
            "range": "± 66881.33013226814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4043452.380952381,
            "unit": "ns",
            "range": "± 95684.72510828267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4057931.884057971,
            "unit": "ns",
            "range": "± 195277.16915191687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6476711.111111111,
            "unit": "ns",
            "range": "± 105883.02029564563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 258954.54545454544,
            "unit": "ns",
            "range": "± 6931.634498311479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240875.92592592593,
            "unit": "ns",
            "range": "± 9377.390214750185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227867.46987951806,
            "unit": "ns",
            "range": "± 12128.8922184696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3865214.285714286,
            "unit": "ns",
            "range": "± 35055.62299113657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3547953.3333333335,
            "unit": "ns",
            "range": "± 62760.87118883032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18301.041666666668,
            "unit": "ns",
            "range": "± 1797.336906687322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86090.72164948453,
            "unit": "ns",
            "range": "± 6752.57794096427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68817.1875,
            "unit": "ns",
            "range": "± 3093.082640062171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88229.03225806452,
            "unit": "ns",
            "range": "± 10903.156509900373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4553.6082474226805,
            "unit": "ns",
            "range": "± 843.2405073670292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17102.127659574468,
            "unit": "ns",
            "range": "± 1771.3963099074147"
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
          "id": "d044310218d9e7196cc7c2b4af60c5904e1e5a5e",
          "message": "1",
          "timestamp": "2023-06-22T17:08:45+09:00",
          "tree_id": "7937ac48147a5dbb887d19eab1949688dabbb2da",
          "url": "https://github.com/limebell/libplanet/commit/d044310218d9e7196cc7c2b4af60c5904e1e5a5e"
        },
        "date": 1687422171199,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1326841,
            "unit": "ns",
            "range": "± 102139.55505121709"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2497709.090909091,
            "unit": "ns",
            "range": "± 126809.52373936583"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2095390.7216494845,
            "unit": "ns",
            "range": "± 143985.65906777704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5044932.608695652,
            "unit": "ns",
            "range": "± 183795.38992446987"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41479.166666666664,
            "unit": "ns",
            "range": "± 2038.0837105643147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6848564.285714285,
            "unit": "ns",
            "range": "± 22057.289293768874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17573346.666666668,
            "unit": "ns",
            "range": "± 76753.91908715865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45057957.14285714,
            "unit": "ns",
            "range": "± 235718.79829180334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90843113.33333333,
            "unit": "ns",
            "range": "± 751361.8120896661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181260433.33333334,
            "unit": "ns",
            "range": "± 1049353.294494598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4887490.680803572,
            "unit": "ns",
            "range": "± 9210.679784892318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526336.42578125,
            "unit": "ns",
            "range": "± 2279.3048630239327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1147143.1361607143,
            "unit": "ns",
            "range": "± 2158.6654580838717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2582756.1458333335,
            "unit": "ns",
            "range": "± 2168.804850370886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812520.859375,
            "unit": "ns",
            "range": "± 3724.4827947960825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 736764.1861979166,
            "unit": "ns",
            "range": "± 715.6248081625057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2999768.75,
            "unit": "ns",
            "range": "± 57640.29515018118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3098650,
            "unit": "ns",
            "range": "± 65055.23671103973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3943820,
            "unit": "ns",
            "range": "± 45551.46539904067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3953853.125,
            "unit": "ns",
            "range": "± 114969.36754540456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6409884.848484849,
            "unit": "ns",
            "range": "± 198592.9869123217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247883.33333333334,
            "unit": "ns",
            "range": "± 9457.459812195386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239372.97297297296,
            "unit": "ns",
            "range": "± 7419.518127833455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211998.07692307694,
            "unit": "ns",
            "range": "± 8719.47314437836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3826926.6666666665,
            "unit": "ns",
            "range": "± 52581.018664623865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3479353.3333333335,
            "unit": "ns",
            "range": "± 52426.95417253919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15906.25,
            "unit": "ns",
            "range": "± 1272.6939930713902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78180.72289156627,
            "unit": "ns",
            "range": "± 4156.465954047081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65633.87096774194,
            "unit": "ns",
            "range": "± 2874.1466900964692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75912.31884057971,
            "unit": "ns",
            "range": "± 2689.418341294778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3928.723404255319,
            "unit": "ns",
            "range": "± 548.8252048401716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14190.449438202248,
            "unit": "ns",
            "range": "± 806.8906511929827"
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
          "id": "a603f8292ce12f811b6776bdffc93849a807132d",
          "message": "2",
          "timestamp": "2023-06-22T22:24:05+09:00",
          "tree_id": "3cfbe3d5a388b793eb9f93dea953cd8ff984640a",
          "url": "https://github.com/limebell/libplanet/commit/a603f8292ce12f811b6776bdffc93849a807132d"
        },
        "date": 1687441627858,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1775178.125,
            "unit": "ns",
            "range": "± 199616.0436559858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3403666.3157894737,
            "unit": "ns",
            "range": "± 277001.1454813577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2728615.463917526,
            "unit": "ns",
            "range": "± 326273.6528272082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7130049.47368421,
            "unit": "ns",
            "range": "± 490763.6209778104"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63122.58064516129,
            "unit": "ns",
            "range": "± 13174.738088579401"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8901231.958762886,
            "unit": "ns",
            "range": "± 628287.8421661775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25290313.157894738,
            "unit": "ns",
            "range": "± 866880.0135718315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63141436.36363637,
            "unit": "ns",
            "range": "± 2584367.396723189"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130271628.57142857,
            "unit": "ns",
            "range": "± 3701774.209339518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 255149637.73584905,
            "unit": "ns",
            "range": "± 10640791.971505519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5993684.716796875,
            "unit": "ns",
            "range": "± 115620.28185861038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1939119.891826923,
            "unit": "ns",
            "range": "± 26068.627422827292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1443776.4506392046,
            "unit": "ns",
            "range": "± 61011.56725355697"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3124962.1299342103,
            "unit": "ns",
            "range": "± 69031.64749868089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1059801.2284128289,
            "unit": "ns",
            "range": "± 22662.203377521477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 969500.0279017857,
            "unit": "ns",
            "range": "± 14490.300055325495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3710277.551020408,
            "unit": "ns",
            "range": "± 545357.3217702076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3685582.474226804,
            "unit": "ns",
            "range": "± 379393.2307564468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5216575.7894736845,
            "unit": "ns",
            "range": "± 554180.3905396495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4622018.367346939,
            "unit": "ns",
            "range": "± 670458.027215053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7955620.4301075265,
            "unit": "ns",
            "range": "± 774736.6885873491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318623.40425531915,
            "unit": "ns",
            "range": "± 41595.798034090956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325598.97959183675,
            "unit": "ns",
            "range": "± 58390.986620673415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 264458.6956521739,
            "unit": "ns",
            "range": "± 42501.50133656926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4437384.042553191,
            "unit": "ns",
            "range": "± 364696.16940568626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4330658.762886598,
            "unit": "ns",
            "range": "± 349748.89258598135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30027,
            "unit": "ns",
            "range": "± 10375.640226078105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113202.04081632652,
            "unit": "ns",
            "range": "± 20403.648246612975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124721.64948453609,
            "unit": "ns",
            "range": "± 26216.296723937303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 142278.72340425532,
            "unit": "ns",
            "range": "± 30509.021660057453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7221.686746987952,
            "unit": "ns",
            "range": "± 2047.1305433829775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26871.428571428572,
            "unit": "ns",
            "range": "± 7902.811714174311"
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
          "id": "7f36561e88654ba0e76127cdeea24b2dba2fde5d",
          "message": "123",
          "timestamp": "2023-06-23T14:51:46+09:00",
          "tree_id": "500966fcca58f0c1ec8864ded4d99441451f054f",
          "url": "https://github.com/limebell/libplanet/commit/7f36561e88654ba0e76127cdeea24b2dba2fde5d"
        },
        "date": 1687500691004,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1559339.3617021276,
            "unit": "ns",
            "range": "± 213817.09006505832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2953996.8421052634,
            "unit": "ns",
            "range": "± 322651.78069501853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2679264.6464646463,
            "unit": "ns",
            "range": "± 392760.18759780575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6401795.833333333,
            "unit": "ns",
            "range": "± 708689.8607425523"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53896.739130434784,
            "unit": "ns",
            "range": "± 10862.137598370062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7585010.989010989,
            "unit": "ns",
            "range": "± 507111.5455752093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20177257.291666668,
            "unit": "ns",
            "range": "± 1292805.5050319862"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52880136.98630137,
            "unit": "ns",
            "range": "± 2624274.657590955"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102761938.09523809,
            "unit": "ns",
            "range": "± 3758102.456576073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206144835.8974359,
            "unit": "ns",
            "range": "± 6749382.8682210175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5673657.074652778,
            "unit": "ns",
            "range": "± 119300.5996761926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1860396.4916087964,
            "unit": "ns",
            "range": "± 50476.388259671265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1399965.1137408088,
            "unit": "ns",
            "range": "± 44300.38992641515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3043532.7864583335,
            "unit": "ns",
            "range": "± 49006.588417954146"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 936569.453125,
            "unit": "ns",
            "range": "± 10547.370941689525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 892198.2877604166,
            "unit": "ns",
            "range": "± 15864.848561778914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3265840,
            "unit": "ns",
            "range": "± 285151.88726100104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3436612.3595505618,
            "unit": "ns",
            "range": "± 294325.5092812844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4480162.765957447,
            "unit": "ns",
            "range": "± 338658.09414179233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4214130.208333333,
            "unit": "ns",
            "range": "± 320224.9269102781"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7663751.546391753,
            "unit": "ns",
            "range": "± 532465.762810429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299322.9166666667,
            "unit": "ns",
            "range": "± 47071.55019456336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283957.8947368421,
            "unit": "ns",
            "range": "± 40182.64306925759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249621.05263157896,
            "unit": "ns",
            "range": "± 32673.60798036616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4336913.265306123,
            "unit": "ns",
            "range": "± 369989.9677207074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3850925,
            "unit": "ns",
            "range": "± 287769.20906207204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23157.575757575756,
            "unit": "ns",
            "range": "± 9983.42596822753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96818.42105263157,
            "unit": "ns",
            "range": "± 21156.309169918302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89016.49484536082,
            "unit": "ns",
            "range": "± 21620.147241695126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124881.05263157895,
            "unit": "ns",
            "range": "± 26097.425057366483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7056.989247311828,
            "unit": "ns",
            "range": "± 1799.661674089736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23534,
            "unit": "ns",
            "range": "± 9974.059485799282"
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
          "id": "82faef46fc8adb78cc29b0d0e0fc410f64bcd041",
          "message": "411",
          "timestamp": "2023-06-23T20:11:35+09:00",
          "tree_id": "c44313a310207ce52fc8acd9f58b76edea55e0e6",
          "url": "https://github.com/limebell/libplanet/commit/82faef46fc8adb78cc29b0d0e0fc410f64bcd041"
        },
        "date": 1687519719413,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1380429.797979798,
            "unit": "ns",
            "range": "± 119053.92019687756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2512643.9393939395,
            "unit": "ns",
            "range": "± 78200.1076541536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2203321.649484536,
            "unit": "ns",
            "range": "± 138221.45367338674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5128657.142857143,
            "unit": "ns",
            "range": "± 149012.66090250085"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44034.21052631579,
            "unit": "ns",
            "range": "± 2253.6815883692148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7028553.333333333,
            "unit": "ns",
            "range": "± 56431.19535792068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18044776.666666668,
            "unit": "ns",
            "range": "± 121175.20059028266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46267986.666666664,
            "unit": "ns",
            "range": "± 242595.33285661024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92673473.33333333,
            "unit": "ns",
            "range": "± 440007.7701694867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 186090626.66666666,
            "unit": "ns",
            "range": "± 988666.9665092825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4914798.707932692,
            "unit": "ns",
            "range": "± 3710.599160099092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1541430.1041666667,
            "unit": "ns",
            "range": "± 1596.2397119116797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1139174.6484375,
            "unit": "ns",
            "range": "± 1301.67474332399"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2574578.7239583335,
            "unit": "ns",
            "range": "± 3288.0226656075415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827726.4453125,
            "unit": "ns",
            "range": "± 7508.854602126045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742304.0169270834,
            "unit": "ns",
            "range": "± 957.3982083259501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3102617.2413793104,
            "unit": "ns",
            "range": "± 125103.6235580098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3182650,
            "unit": "ns",
            "range": "± 55929.25378164301"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4050856.25,
            "unit": "ns",
            "range": "± 69029.32679907384"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4000592.8571428573,
            "unit": "ns",
            "range": "± 112725.01424253109"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6427360.869565218,
            "unit": "ns",
            "range": "± 107105.57976777542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 264583.0188679245,
            "unit": "ns",
            "range": "± 10955.640202637047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254750,
            "unit": "ns",
            "range": "± 5411.126880571834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228638.37209302327,
            "unit": "ns",
            "range": "± 12434.554970675126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3969980.769230769,
            "unit": "ns",
            "range": "± 36846.22062517368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3461016.6666666665,
            "unit": "ns",
            "range": "± 14927.998911949033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18902.061855670105,
            "unit": "ns",
            "range": "± 2103.4683353453856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86811.90476190476,
            "unit": "ns",
            "range": "± 4597.285861464919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73367.1875,
            "unit": "ns",
            "range": "± 3412.7703538467454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85286.25,
            "unit": "ns",
            "range": "± 4721.020693918325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4755.208333333333,
            "unit": "ns",
            "range": "± 753.5697211017726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18811.340206185567,
            "unit": "ns",
            "range": "± 2009.8650601812692"
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
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "c565a178831a711bdf786b79a9e2e6279fa1a65c",
          "message": "Fix maj23",
          "timestamp": "2023-06-25T19:16:18+09:00",
          "tree_id": "39a2af58c0af5ea78020da440b223735127e7419",
          "url": "https://github.com/limebell/libplanet/commit/c565a178831a711bdf786b79a9e2e6279fa1a65c"
        },
        "date": 1687750711992,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1463381.4432989692,
            "unit": "ns",
            "range": "± 138735.85838586165"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2636845.8333333335,
            "unit": "ns",
            "range": "± 129395.6438928711"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2268142.8571428573,
            "unit": "ns",
            "range": "± 146211.2460660618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5297158.064516129,
            "unit": "ns",
            "range": "± 158817.9435164544"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51514.583333333336,
            "unit": "ns",
            "range": "± 4286.895064991166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7471450,
            "unit": "ns",
            "range": "± 33475.77195065571"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18370164.285714287,
            "unit": "ns",
            "range": "± 77497.7206329109"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47355613.333333336,
            "unit": "ns",
            "range": "± 391181.48120545695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93628284.61538461,
            "unit": "ns",
            "range": "± 270320.9630733863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188329884.6153846,
            "unit": "ns",
            "range": "± 641737.5603860634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5094461.770833333,
            "unit": "ns",
            "range": "± 45764.700700877365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1550103.013392857,
            "unit": "ns",
            "range": "± 8448.707516693945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1163824.3088942308,
            "unit": "ns",
            "range": "± 7910.221489979558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2616471.1197916665,
            "unit": "ns",
            "range": "± 30006.13599695273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 899389.5703125,
            "unit": "ns",
            "range": "± 12092.01254891137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763380.7584635416,
            "unit": "ns",
            "range": "± 4888.868563007718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3193575,
            "unit": "ns",
            "range": "± 61417.97239679387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3382177.1428571427,
            "unit": "ns",
            "range": "± 109522.43413945807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4225428.571428572,
            "unit": "ns",
            "range": "± 55275.4978208307"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4221886.666666667,
            "unit": "ns",
            "range": "± 78032.86731212933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6583395.833333333,
            "unit": "ns",
            "range": "± 170695.20122432997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288053.3333333333,
            "unit": "ns",
            "range": "± 10970.365039090953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 275686.53846153844,
            "unit": "ns",
            "range": "± 11246.908574745674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266663.63636363635,
            "unit": "ns",
            "range": "± 5548.341275470617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4015741.6666666665,
            "unit": "ns",
            "range": "± 33095.19213457209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3717385.714285714,
            "unit": "ns",
            "range": "± 53846.88559157427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23154.736842105263,
            "unit": "ns",
            "range": "± 2004.1854301740238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105418.08510638298,
            "unit": "ns",
            "range": "± 6855.1364113696145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87695.91836734694,
            "unit": "ns",
            "range": "± 7700.0859329432615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103571.13402061856,
            "unit": "ns",
            "range": "± 15270.191269559615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5525.257731958763,
            "unit": "ns",
            "range": "± 993.4190673119622"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22935.416666666668,
            "unit": "ns",
            "range": "± 1814.5017681630036"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "a051767af9ec7510036527139e896ea7b641aae2",
          "message": "Verify vote before adding round",
          "timestamp": "2023-06-26T12:28:59+09:00",
          "tree_id": "0eb21ff13f03c671508fc33ad6b82c2afc34abee",
          "url": "https://github.com/limebell/libplanet/commit/a051767af9ec7510036527139e896ea7b641aae2"
        },
        "date": 1687751098998,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1383832,
            "unit": "ns",
            "range": "± 117815.1161435543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2482002.272727273,
            "unit": "ns",
            "range": "± 89651.11833084069"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2163424.358974359,
            "unit": "ns",
            "range": "± 111123.86932607832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5180392.7272727275,
            "unit": "ns",
            "range": "± 211360.4082328338"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43226.086956521736,
            "unit": "ns",
            "range": "± 2008.1197068484857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6916086.666666667,
            "unit": "ns",
            "range": "± 46223.84768967308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17760766.666666668,
            "unit": "ns",
            "range": "± 89169.79522771364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45568520,
            "unit": "ns",
            "range": "± 180688.79402363137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91119461.53846154,
            "unit": "ns",
            "range": "± 223593.34567640699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183627933.33333334,
            "unit": "ns",
            "range": "± 572431.5413425518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4849866.796875,
            "unit": "ns",
            "range": "± 8445.07981043518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1507903.26171875,
            "unit": "ns",
            "range": "± 2456.010379508387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1151056.3020833333,
            "unit": "ns",
            "range": "± 1705.1901351117876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2565607.2823660714,
            "unit": "ns",
            "range": "± 23158.11315044053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828897.421875,
            "unit": "ns",
            "range": "± 5135.676330560309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738026.38671875,
            "unit": "ns",
            "range": "± 985.9505562136956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2994436.8421052634,
            "unit": "ns",
            "range": "± 44778.68057366283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3198220,
            "unit": "ns",
            "range": "± 49949.09122582426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4053747.0588235296,
            "unit": "ns",
            "range": "± 83085.34104797803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4020487.272727273,
            "unit": "ns",
            "range": "± 166463.139123557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6450996.551724138,
            "unit": "ns",
            "range": "± 187339.26154508072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260505,
            "unit": "ns",
            "range": "± 9257.594249158432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246775,
            "unit": "ns",
            "range": "± 6890.230604107367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224240.40404040404,
            "unit": "ns",
            "range": "± 13897.459165748856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3923453.3333333335,
            "unit": "ns",
            "range": "± 65332.33575526054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3530280,
            "unit": "ns",
            "range": "± 29852.73856784332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18103.157894736843,
            "unit": "ns",
            "range": "± 1783.640350613303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85441.66666666667,
            "unit": "ns",
            "range": "± 5685.8210843737215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69814.70588235294,
            "unit": "ns",
            "range": "± 2202.0833596834277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88098.91304347826,
            "unit": "ns",
            "range": "± 9200.54339729683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4840,
            "unit": "ns",
            "range": "± 817.5469275359086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18271.428571428572,
            "unit": "ns",
            "range": "± 2005.4564742479688"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "8feecd709e10b3ca3c0133cd3ce2021a798176b7",
          "message": "wip: bootstrap",
          "timestamp": "2023-06-26T12:36:31+09:00",
          "tree_id": "528ad73d036b4904214184f6c8cd11bb6f601dd3",
          "url": "https://github.com/limebell/libplanet/commit/8feecd709e10b3ca3c0133cd3ce2021a798176b7"
        },
        "date": 1687751642013,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1411356.8421052631,
            "unit": "ns",
            "range": "± 95054.81694245781"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2721432.3529411764,
            "unit": "ns",
            "range": "± 128775.24148011384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2310087.878787879,
            "unit": "ns",
            "range": "± 162139.49604617502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5593247.05882353,
            "unit": "ns",
            "range": "± 265360.9462265786"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47427.36842105263,
            "unit": "ns",
            "range": "± 3155.388572533185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7250846.153846154,
            "unit": "ns",
            "range": "± 42137.38671268496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20283706.666666668,
            "unit": "ns",
            "range": "± 331133.94240023755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51164192,
            "unit": "ns",
            "range": "± 1336841.1953556787"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98562328.57142857,
            "unit": "ns",
            "range": "± 1318367.4201471664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196087446.66666666,
            "unit": "ns",
            "range": "± 2911416.7358537875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4950373.660714285,
            "unit": "ns",
            "range": "± 36395.249759835526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1542018.5807291667,
            "unit": "ns",
            "range": "± 10277.899652558568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1200016.8684895833,
            "unit": "ns",
            "range": "± 7244.469503107138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2669619.375,
            "unit": "ns",
            "range": "± 5725.957189203938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829456.4583333334,
            "unit": "ns",
            "range": "± 2930.6977050330106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777139.31640625,
            "unit": "ns",
            "range": "± 3538.342757801486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3141523.6363636362,
            "unit": "ns",
            "range": "± 131398.69068015064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3346282.6086956523,
            "unit": "ns",
            "range": "± 128765.65156964255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4142702.1739130435,
            "unit": "ns",
            "range": "± 89338.56374674945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4104451.807228916,
            "unit": "ns",
            "range": "± 218530.84693874978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6961581.481481481,
            "unit": "ns",
            "range": "± 280279.0723978137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272248.5714285714,
            "unit": "ns",
            "range": "± 7657.536519417879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 255052.63157894736,
            "unit": "ns",
            "range": "± 7792.849697070897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239124.24242424243,
            "unit": "ns",
            "range": "± 15412.710702726401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4085250,
            "unit": "ns",
            "range": "± 86489.65256029186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3652339.1304347827,
            "unit": "ns",
            "range": "± 90679.69472584876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19317.525773195877,
            "unit": "ns",
            "range": "± 1711.6640483555732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83240.90909090909,
            "unit": "ns",
            "range": "± 5319.442464165918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73239.36170212766,
            "unit": "ns",
            "range": "± 4564.742583871748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96487.62886597938,
            "unit": "ns",
            "range": "± 16555.495422794156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5490.721649484536,
            "unit": "ns",
            "range": "± 1166.644268317147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20625,
            "unit": "ns",
            "range": "± 2004.4686919086826"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "70f55e55fdc08df5d788fa1ba22e1115d0f7371a",
          "message": "wip: bootstrap",
          "timestamp": "2023-06-26T14:56:12+09:00",
          "tree_id": "1075f6c7131005b26de8f1a13450cb90731d141e",
          "url": "https://github.com/limebell/libplanet/commit/70f55e55fdc08df5d788fa1ba22e1115d0f7371a"
        },
        "date": 1687760269327,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1859880.2083333333,
            "unit": "ns",
            "range": "± 206162.64944266528"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3540097.8260869565,
            "unit": "ns",
            "range": "± 296139.46223717515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2905465.217391304,
            "unit": "ns",
            "range": "± 237331.17096357406"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7452202.105263158,
            "unit": "ns",
            "range": "± 641537.9539657022"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60968.47826086957,
            "unit": "ns",
            "range": "± 11108.465530849508"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9779776.767676767,
            "unit": "ns",
            "range": "± 656285.4776149029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26956158.974358976,
            "unit": "ns",
            "range": "± 839058.0466457764"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69302996.55172414,
            "unit": "ns",
            "range": "± 1990107.0384857547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140142545.45454547,
            "unit": "ns",
            "range": "± 3106074.1914187116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 279674830.4347826,
            "unit": "ns",
            "range": "± 6916545.583298776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6506445.252403846,
            "unit": "ns",
            "range": "± 79184.33944402002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2118254.4921875,
            "unit": "ns",
            "range": "± 38418.02425061658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1605819.2838541667,
            "unit": "ns",
            "range": "± 23080.195003301833"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3551483.203125,
            "unit": "ns",
            "range": "± 69466.84282355875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1139631.9921875,
            "unit": "ns",
            "range": "± 12493.121693327726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1060453.6197916667,
            "unit": "ns",
            "range": "± 19122.50151966434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4277644.329896907,
            "unit": "ns",
            "range": "± 374533.7309489717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4443682.105263158,
            "unit": "ns",
            "range": "± 322887.7609413734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5740870.422535211,
            "unit": "ns",
            "range": "± 279745.9962151208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5718682.474226804,
            "unit": "ns",
            "range": "± 492389.8428012243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9509164.835164836,
            "unit": "ns",
            "range": "± 530987.6509075908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 361542.69662921346,
            "unit": "ns",
            "range": "± 32020.738619470754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 346879.78723404254,
            "unit": "ns",
            "range": "± 43123.15903450875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 304148.93617021275,
            "unit": "ns",
            "range": "± 34976.35682129437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5437836.956521739,
            "unit": "ns",
            "range": "± 324655.92766259424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4912048.235294118,
            "unit": "ns",
            "range": "± 252357.97543312534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25871.428571428572,
            "unit": "ns",
            "range": "± 5145.899893535213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115750.5376344086,
            "unit": "ns",
            "range": "± 21923.898136289907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 128837.11340206186,
            "unit": "ns",
            "range": "± 27857.690139602193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 151143.75,
            "unit": "ns",
            "range": "± 27636.119814855567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9197.872340425532,
            "unit": "ns",
            "range": "± 2056.49920320313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27340.909090909092,
            "unit": "ns",
            "range": "± 4873.966412414195"
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
          "id": "3b417c1e4e6df25ea6b937245d3b0d7003ae5afc",
          "message": "feat: add ProposalClaim and its related features",
          "timestamp": "2023-06-26T18:29:26+09:00",
          "tree_id": "7ef0639f8add49fecc2c0e1b4d6d12bd43caf5f6",
          "url": "https://github.com/limebell/libplanet/commit/3b417c1e4e6df25ea6b937245d3b0d7003ae5afc"
        },
        "date": 1687772572377,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1379991.7525773195,
            "unit": "ns",
            "range": "± 91175.97530565903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2459361.6666666665,
            "unit": "ns",
            "range": "± 107501.06990664532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2023632.9896907217,
            "unit": "ns",
            "range": "± 116569.1155152612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5353488.3838383835,
            "unit": "ns",
            "range": "± 384223.97186076693"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45168.181818181816,
            "unit": "ns",
            "range": "± 2131.1722372664076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6840780,
            "unit": "ns",
            "range": "± 36657.394498635214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19155980.769230768,
            "unit": "ns",
            "range": "± 521972.53875600063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47461671.875,
            "unit": "ns",
            "range": "± 1463591.5308526037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92533839.28571428,
            "unit": "ns",
            "range": "± 2639016.39088552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183472092.85714287,
            "unit": "ns",
            "range": "± 4316777.252253286"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4606707.109375,
            "unit": "ns",
            "range": "± 13870.174504756986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1489377.1033653845,
            "unit": "ns",
            "range": "± 7386.655765561774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1142941.8489583333,
            "unit": "ns",
            "range": "± 6211.648012318187"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2603462.96875,
            "unit": "ns",
            "range": "± 18763.61188400275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797156.4713541666,
            "unit": "ns",
            "range": "± 2782.3042705485927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742425.4361979166,
            "unit": "ns",
            "range": "± 2248.6604802071047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3112931.111111111,
            "unit": "ns",
            "range": "± 117513.60621844878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3085315,
            "unit": "ns",
            "range": "± 160742.36253683735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3952834.090909091,
            "unit": "ns",
            "range": "± 145019.24642625218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4003926.8292682925,
            "unit": "ns",
            "range": "± 133757.13256568834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6292001.923076923,
            "unit": "ns",
            "range": "± 257977.82887742057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247733.33333333334,
            "unit": "ns",
            "range": "± 9946.490168228522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241700,
            "unit": "ns",
            "range": "± 3641.1994360832987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 207695.74468085106,
            "unit": "ns",
            "range": "± 7668.68157839314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3724228.5714285714,
            "unit": "ns",
            "range": "± 58372.54924615255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3446688.2352941176,
            "unit": "ns",
            "range": "± 70465.37165829168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18192.391304347828,
            "unit": "ns",
            "range": "± 1642.8488854982663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 75906.97674418605,
            "unit": "ns",
            "range": "± 3992.5751883648873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67341.93548387097,
            "unit": "ns",
            "range": "± 2047.2378454148716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78522.47191011236,
            "unit": "ns",
            "range": "± 9475.515730854931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4153.684210526316,
            "unit": "ns",
            "range": "± 605.4382141317304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15939.36170212766,
            "unit": "ns",
            "range": "± 1158.9964221146201"
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
          "id": "699ea6ec66d34cef98129cfe5b925e5cad5bb577",
          "message": "chore: fix test",
          "timestamp": "2023-06-26T18:54:29+09:00",
          "tree_id": "4ad86a30b5c84a1ced2d2cfa0b87e341e5fb6e3e",
          "url": "https://github.com/limebell/libplanet/commit/699ea6ec66d34cef98129cfe5b925e5cad5bb577"
        },
        "date": 1687774401521,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1524565.2631578948,
            "unit": "ns",
            "range": "± 126188.72793205763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2809309.090909091,
            "unit": "ns",
            "range": "± 87669.94340863194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2459257.7319587627,
            "unit": "ns",
            "range": "± 204535.01169066978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5954308.695652174,
            "unit": "ns",
            "range": "± 283427.3538726875"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56769.89247311828,
            "unit": "ns",
            "range": "± 7421.938469192952"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8121326.315789473,
            "unit": "ns",
            "range": "± 174517.67450161112"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21945326.666666668,
            "unit": "ns",
            "range": "± 379533.44378642173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54577953.333333336,
            "unit": "ns",
            "range": "± 424151.88800150127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108250292.85714285,
            "unit": "ns",
            "range": "± 864433.9112205929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216225016.66666666,
            "unit": "ns",
            "range": "± 1330051.8758232524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5137465.052083333,
            "unit": "ns",
            "range": "± 79544.76383851306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1567353.1901041667,
            "unit": "ns",
            "range": "± 5220.20511891642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1217789.6033653845,
            "unit": "ns",
            "range": "± 4901.5862863069715"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2684212.1651785714,
            "unit": "ns",
            "range": "± 12316.115887480535"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 836285.2213541666,
            "unit": "ns",
            "range": "± 3454.9616754054687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780058.3072916666,
            "unit": "ns",
            "range": "± 3527.879731678773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3544677.1428571427,
            "unit": "ns",
            "range": "± 115360.61129629759"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3625132.8571428573,
            "unit": "ns",
            "range": "± 104046.24674722715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4439315.384615385,
            "unit": "ns",
            "range": "± 61417.32717176055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4604702.94117647,
            "unit": "ns",
            "range": "± 87869.03690754111"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7132971.428571428,
            "unit": "ns",
            "range": "± 169746.58506979496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309052.77777777775,
            "unit": "ns",
            "range": "± 15264.180405212704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314145.1612903226,
            "unit": "ns",
            "range": "± 14272.381645766465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 290776.0869565217,
            "unit": "ns",
            "range": "± 11050.252581982182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4420893.333333333,
            "unit": "ns",
            "range": "± 80218.60727026462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4132543.3333333335,
            "unit": "ns",
            "range": "± 35231.0834079118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27850,
            "unit": "ns",
            "range": "± 4065.490195082973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115073.4693877551,
            "unit": "ns",
            "range": "± 12654.468678296262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93497.91666666667,
            "unit": "ns",
            "range": "± 8783.357218916222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120248.97959183673,
            "unit": "ns",
            "range": "± 19515.820940695015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8013.265306122449,
            "unit": "ns",
            "range": "± 1588.920255510501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25273.19587628866,
            "unit": "ns",
            "range": "± 3060.96102365191"
          }
        ]
      }
    ]
  }
}