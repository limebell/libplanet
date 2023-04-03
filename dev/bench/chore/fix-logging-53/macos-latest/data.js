window.BENCHMARK_DATA = {
  "lastUpdate": 1680512129529,
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
        "date": 1680512119625,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8492282.076923076,
            "unit": "ns",
            "range": "± 205671.61350695396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22006436.333333332,
            "unit": "ns",
            "range": "± 600687.4603186559"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53443321.5882353,
            "unit": "ns",
            "range": "± 1095243.727348567"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114021109.31034483,
            "unit": "ns",
            "range": "± 3309440.7094707657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224134237.95714286,
            "unit": "ns",
            "range": "± 7263837.090976133"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66845.02222222222,
            "unit": "ns",
            "range": "± 4319.297945392706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 234659.79166666666,
            "unit": "ns",
            "range": "± 15969.409143679852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 230098.39583333334,
            "unit": "ns",
            "range": "± 19109.69119278938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200557.13402061857,
            "unit": "ns",
            "range": "± 13844.964982522277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13424286.92,
            "unit": "ns",
            "range": "± 357932.4220121633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10891344.076923076,
            "unit": "ns",
            "range": "± 159444.5086910916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20334.114942528737,
            "unit": "ns",
            "range": "± 1384.0484887433422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58840.74444444444,
            "unit": "ns",
            "range": "± 5880.291069596048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45761.375,
            "unit": "ns",
            "range": "± 3839.623321181808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110010.93157894736,
            "unit": "ns",
            "range": "± 13582.908620334372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5736.36170212766,
            "unit": "ns",
            "range": "± 543.7646075370986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18978.08620689655,
            "unit": "ns",
            "range": "± 1896.8570182579697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1701799.5674157303,
            "unit": "ns",
            "range": "± 157764.57699757154"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3218981.404109589,
            "unit": "ns",
            "range": "± 159526.32583928693"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2825717.1720430106,
            "unit": "ns",
            "range": "± 187946.96669681926"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7568344.543478261,
            "unit": "ns",
            "range": "± 584885.4006378376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3629187.388888889,
            "unit": "ns",
            "range": "± 119494.73504415588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6166048.857142857,
            "unit": "ns",
            "range": "± 276731.64255319437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25715854.275,
            "unit": "ns",
            "range": "± 808093.3310591868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7318207.768041237,
            "unit": "ns",
            "range": "± 465974.14184239955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31489223.77142857,
            "unit": "ns",
            "range": "± 1033030.6300873427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6781754.147916666,
            "unit": "ns",
            "range": "± 117848.16877314053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2206123.5867745536,
            "unit": "ns",
            "range": "± 34902.48427588443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1420568.1548549107,
            "unit": "ns",
            "range": "± 24982.65490836739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2764586.8359375,
            "unit": "ns",
            "range": "± 31430.44562748136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 908230.1963500977,
            "unit": "ns",
            "range": "± 15708.98416540424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 856834.7452566965,
            "unit": "ns",
            "range": "± 20260.801423099485"
          }
        ]
      }
    ]
  }
}