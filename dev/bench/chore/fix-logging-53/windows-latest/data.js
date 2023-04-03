window.BENCHMARK_DATA = {
  "lastUpdate": 1680512322245,
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
          "id": "a944c605d4ed1590fce392dc82c4287359023f33",
          "message": "﻿chore: adjust log level  [skip changelog]\n\n(cherry picked from commit 760e5fc97537ac9b54140f5fec59df5d28c6fa25)",
          "timestamp": "2023-04-03T17:22:21+09:00",
          "tree_id": "c0833ef1f9cdc5d5b24a15c311d146f038de1c81",
          "url": "https://github.com/limebell/libplanet/commit/a944c605d4ed1590fce392dc82c4287359023f33"
        },
        "date": 1680511216799,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1379319.387755102,
            "unit": "ns",
            "range": "± 121904.86459527537"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2570868.3333333335,
            "unit": "ns",
            "range": "± 107677.09494983674"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2172271.1340206186,
            "unit": "ns",
            "range": "± 155393.59700904327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5232574.117647059,
            "unit": "ns",
            "range": "± 282368.7770042764"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48551.063829787236,
            "unit": "ns",
            "range": "± 2921.69286179736"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7209552.173913044,
            "unit": "ns",
            "range": "± 175228.68919725035"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19451138.46153846,
            "unit": "ns",
            "range": "± 181125.35041816364"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49540364.28571428,
            "unit": "ns",
            "range": "± 522155.2857843416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97205986.66666667,
            "unit": "ns",
            "range": "± 1574701.4024736185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194122026.66666666,
            "unit": "ns",
            "range": "± 2908700.9278730466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4796780.747767857,
            "unit": "ns",
            "range": "± 15237.809233253845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1513539.0364583333,
            "unit": "ns",
            "range": "± 11490.029953560224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1170680.4268973214,
            "unit": "ns",
            "range": "± 6817.995630003303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2638573.1640625,
            "unit": "ns",
            "range": "± 14867.758298437795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833431.7513020834,
            "unit": "ns",
            "range": "± 3852.927821534331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757277.4869791666,
            "unit": "ns",
            "range": "± 2583.997054112558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3230693.5483870967,
            "unit": "ns",
            "range": "± 97553.59530529486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4920280.952380952,
            "unit": "ns",
            "range": "± 116736.68069226408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22971556.52173913,
            "unit": "ns",
            "range": "± 553686.2081672475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6111652.083333333,
            "unit": "ns",
            "range": "± 240358.60087969387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26401489.47368421,
            "unit": "ns",
            "range": "± 571036.2188306223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185684.74576271186,
            "unit": "ns",
            "range": "± 8229.338046017328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 185918.29268292684,
            "unit": "ns",
            "range": "± 9786.8030070327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166562.5,
            "unit": "ns",
            "range": "± 10532.428619818838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10900004.166666666,
            "unit": "ns",
            "range": "± 277377.5381633059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8708608.333333334,
            "unit": "ns",
            "range": "± 225996.88131104564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19718.08510638298,
            "unit": "ns",
            "range": "± 1915.9187563284265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53812.903225806454,
            "unit": "ns",
            "range": "± 3525.750792891698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43346.875,
            "unit": "ns",
            "range": "± 2904.858113212199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97333.68421052632,
            "unit": "ns",
            "range": "± 16305.465801552531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6843.877551020408,
            "unit": "ns",
            "range": "± 816.9677814857162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21949.473684210527,
            "unit": "ns",
            "range": "± 2127.7234704851344"
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
          "id": "c7ba08ba25181f8add0bfcc7152a6b05e8b30757",
          "message": "docs: update changelog",
          "timestamp": "2023-04-03T17:36:53+09:00",
          "tree_id": "b4440e1d84be80722d407fd307bf349bb9acb539",
          "url": "https://github.com/limebell/libplanet/commit/c7ba08ba25181f8add0bfcc7152a6b05e8b30757"
        },
        "date": 1680512304498,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1599018.9473684211,
            "unit": "ns",
            "range": "± 117583.27270558842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3159151.6129032257,
            "unit": "ns",
            "range": "± 245890.01456682745"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2595674.210526316,
            "unit": "ns",
            "range": "± 192758.16328757067"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5938285.714285715,
            "unit": "ns",
            "range": "± 194555.2169358992"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57701.724137931036,
            "unit": "ns",
            "range": "± 3366.17449246365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8619616.216216216,
            "unit": "ns",
            "range": "± 261054.9202685067"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23018278.57142857,
            "unit": "ns",
            "range": "± 219216.77075994344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59127957.14285714,
            "unit": "ns",
            "range": "± 573853.7856046148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119220694.11764705,
            "unit": "ns",
            "range": "± 2330604.647529957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241592596.42857143,
            "unit": "ns",
            "range": "± 6658293.90890746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5868623.167067308,
            "unit": "ns",
            "range": "± 97405.2130779151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1931838.2421875,
            "unit": "ns",
            "range": "± 43174.768060370385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1414978.3761160714,
            "unit": "ns",
            "range": "± 19950.660761611452"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3161578.5006009615,
            "unit": "ns",
            "range": "± 27822.740726250653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 992650.6310096154,
            "unit": "ns",
            "range": "± 9673.75244921175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 913307.8822544643,
            "unit": "ns",
            "range": "± 10987.204034138837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3750913.6363636362,
            "unit": "ns",
            "range": "± 116371.33672586063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5900800,
            "unit": "ns",
            "range": "± 59549.914422208094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27793132.258064516,
            "unit": "ns",
            "range": "± 840476.3726153943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7197389.285714285,
            "unit": "ns",
            "range": "± 195616.53406466157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30612753.846153848,
            "unit": "ns",
            "range": "± 431754.161561462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 213054.2372881356,
            "unit": "ns",
            "range": "± 9359.327304774417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216001.49253731343,
            "unit": "ns",
            "range": "± 9699.460974359617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 198154.7619047619,
            "unit": "ns",
            "range": "± 10636.846674251883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13192685.714285715,
            "unit": "ns",
            "range": "± 210937.489308099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10628588,
            "unit": "ns",
            "range": "± 227167.21139577634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24186.17021276596,
            "unit": "ns",
            "range": "± 2424.409963195337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62523.71134020619,
            "unit": "ns",
            "range": "± 6553.92333510808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50109.574468085106,
            "unit": "ns",
            "range": "± 3942.900770199802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117160.22727272728,
            "unit": "ns",
            "range": "± 12241.774529287586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8760.416666666666,
            "unit": "ns",
            "range": "± 1124.4160277712037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24502.083333333332,
            "unit": "ns",
            "range": "± 2221.0466554338823"
          }
        ]
      }
    ]
  }
}