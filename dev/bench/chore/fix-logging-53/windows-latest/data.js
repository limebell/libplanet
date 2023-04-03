window.BENCHMARK_DATA = {
  "lastUpdate": 1680511237340,
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
      }
    ]
  }
}