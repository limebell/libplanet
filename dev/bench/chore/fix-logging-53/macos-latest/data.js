window.BENCHMARK_DATA = {
  "lastUpdate": 1680511512693,
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
        "date": 1680511503110,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9361135.855555555,
            "unit": "ns",
            "range": "± 521473.13374728075"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23640552.80107527,
            "unit": "ns",
            "range": "± 3288261.019856196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54229474.51428571,
            "unit": "ns",
            "range": "± 1645699.0032686517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116921397.13636364,
            "unit": "ns",
            "range": "± 6399903.88103531"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228801858.1551724,
            "unit": "ns",
            "range": "± 6572419.129253606"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76010.63953488372,
            "unit": "ns",
            "range": "± 7875.58804551469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252388.62903225806,
            "unit": "ns",
            "range": "± 41062.141050307444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262538.7826086957,
            "unit": "ns",
            "range": "± 47309.35069500522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243275.84375,
            "unit": "ns",
            "range": "± 38681.64123724468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14601918.767676767,
            "unit": "ns",
            "range": "± 1285289.9871660648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12250884.615384616,
            "unit": "ns",
            "range": "± 1289114.768595538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25806.77011494253,
            "unit": "ns",
            "range": "± 2900.724639622046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62584.489130434784,
            "unit": "ns",
            "range": "± 7962.083110682719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68372.2808988764,
            "unit": "ns",
            "range": "± 8138.545471158116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 142998.87894736842,
            "unit": "ns",
            "range": "± 26725.770775732533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9408.29347826087,
            "unit": "ns",
            "range": "± 803.1821948964989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25454.670454545456,
            "unit": "ns",
            "range": "± 2461.7751035109723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1605879.0051546392,
            "unit": "ns",
            "range": "± 144790.2647805844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2841928.390909091,
            "unit": "ns",
            "range": "± 109795.21348918643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2629207.489361702,
            "unit": "ns",
            "range": "± 278285.33091243403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6372827.153846154,
            "unit": "ns",
            "range": "± 355335.7011072745"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3689983.036082474,
            "unit": "ns",
            "range": "± 342272.375002292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5950049.52247191,
            "unit": "ns",
            "range": "± 751866.7456118498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 32187543.054347824,
            "unit": "ns",
            "range": "± 7515178.841299918"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7267551.6344086025,
            "unit": "ns",
            "range": "± 853115.233166731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32702998.677419353,
            "unit": "ns",
            "range": "± 2062653.3203001153"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7704390.819791666,
            "unit": "ns",
            "range": "± 223930.00309572666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2201137.3521634615,
            "unit": "ns",
            "range": "± 60198.57847025472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1499443.862326389,
            "unit": "ns",
            "range": "± 56694.15423557081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3155816.590880102,
            "unit": "ns",
            "range": "± 225648.74269627288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 899370.2840254934,
            "unit": "ns",
            "range": "± 27232.72341005552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 882626.8366071428,
            "unit": "ns",
            "range": "± 28738.8312013161"
          }
        ]
      }
    ]
  }
}