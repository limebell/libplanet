window.BENCHMARK_DATA = {
  "lastUpdate": 1682648823539,
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
          "id": "0a725161dc6c381e99e03dbf84b9886381f709aa",
          "message": "chore: deprecate pow block fields  [skip changelog]",
          "timestamp": "2023-04-06T16:36:43+09:00",
          "tree_id": "45db6b6d92a72eb3fc89b9a6f39be841c113bad6",
          "url": "https://github.com/limebell/libplanet/commit/0a725161dc6c381e99e03dbf84b9886381f709aa"
        },
        "date": 1680767507800,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1308953.0612244897,
            "unit": "ns",
            "range": "± 102656.25676201118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2473571.590909091,
            "unit": "ns",
            "range": "± 136080.94189439315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2098829,
            "unit": "ns",
            "range": "± 149876.0553884038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5412667,
            "unit": "ns",
            "range": "± 352962.38648578036"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46019.04761904762,
            "unit": "ns",
            "range": "± 2383.855143900882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6739940,
            "unit": "ns",
            "range": "± 79629.38079449246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18267070.588235293,
            "unit": "ns",
            "range": "± 373366.7596424223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45330013.333333336,
            "unit": "ns",
            "range": "± 805961.2768672721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91431095.45454545,
            "unit": "ns",
            "range": "± 1863255.2933808316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183211466.66666666,
            "unit": "ns",
            "range": "± 2749804.2022937527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4709271.979166667,
            "unit": "ns",
            "range": "± 30567.997716252416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526180.1822916667,
            "unit": "ns",
            "range": "± 10344.011767665785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1156398.046875,
            "unit": "ns",
            "range": "± 8021.926849994191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2679087.8125,
            "unit": "ns",
            "range": "± 15082.142285256998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842767.3893229166,
            "unit": "ns",
            "range": "± 3796.670684872931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749555.7877604166,
            "unit": "ns",
            "range": "± 2856.635785789877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2949450,
            "unit": "ns",
            "range": "± 94465.73934020159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3119461.224489796,
            "unit": "ns",
            "range": "± 123177.27877657764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3817848.717948718,
            "unit": "ns",
            "range": "± 131627.13060562775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3963831.8181818184,
            "unit": "ns",
            "range": "± 217289.72213103555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6524185.714285715,
            "unit": "ns",
            "range": "± 114629.569665764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299460,
            "unit": "ns",
            "range": "± 12729.109247006336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246493.5483870968,
            "unit": "ns",
            "range": "± 7494.128167388606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212800,
            "unit": "ns",
            "range": "± 5687.454866382929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5150803.333333333,
            "unit": "ns",
            "range": "± 55963.91524477008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3618940,
            "unit": "ns",
            "range": "± 56007.08883703919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19085.106382978724,
            "unit": "ns",
            "range": "± 1543.4187333353293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81660.41666666667,
            "unit": "ns",
            "range": "± 5564.312586600748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73686.66666666667,
            "unit": "ns",
            "range": "± 4085.138865517524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 166687.62886597938,
            "unit": "ns",
            "range": "± 21570.191902117098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5891.7525773195875,
            "unit": "ns",
            "range": "± 714.6779728038334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18472.448979591838,
            "unit": "ns",
            "range": "± 2181.3067403068803"
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
          "id": "b382c82bfb6ccb3dddd5cbb05fe75a6667e430d5",
          "message": "chore: deprecate pow block fields",
          "timestamp": "2023-04-06T16:35:17+09:00",
          "tree_id": "45db6b6d92a72eb3fc89b9a6f39be841c113bad6",
          "url": "https://github.com/limebell/libplanet/commit/b382c82bfb6ccb3dddd5cbb05fe75a6667e430d5"
        },
        "date": 1680767749167,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1865991.3043478262,
            "unit": "ns",
            "range": "± 223952.54435115692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3345709.523809524,
            "unit": "ns",
            "range": "± 121518.26483114623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2815031.1827956988,
            "unit": "ns",
            "range": "± 172012.04771917086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7641897.849462366,
            "unit": "ns",
            "range": "± 432801.2341204615"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76293.6170212766,
            "unit": "ns",
            "range": "± 13289.156453650461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9659041.237113401,
            "unit": "ns",
            "range": "± 667578.097608652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25039993.333333332,
            "unit": "ns",
            "range": "± 358578.6892454045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67076435.71428572,
            "unit": "ns",
            "range": "± 792690.4445835499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134119100,
            "unit": "ns",
            "range": "± 4210905.772784844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 266742506.66666666,
            "unit": "ns",
            "range": "± 3851208.612976798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6370828.072916667,
            "unit": "ns",
            "range": "± 189187.93504252264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2020441.015625,
            "unit": "ns",
            "range": "± 30917.531931015754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1574760.239955357,
            "unit": "ns",
            "range": "± 18810.695158869446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3360836.3541666665,
            "unit": "ns",
            "range": "± 31584.19053712666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1094918.3854166667,
            "unit": "ns",
            "range": "± 14919.072869682306"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1053053.8643973214,
            "unit": "ns",
            "range": "± 14063.515378669166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4030197.5903614457,
            "unit": "ns",
            "range": "± 213269.34703413604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4412906.25,
            "unit": "ns",
            "range": "± 230441.98003613553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5373680.85106383,
            "unit": "ns",
            "range": "± 312477.14076447766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5523237.34939759,
            "unit": "ns",
            "range": "± 292113.68640160037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9629353.731343284,
            "unit": "ns",
            "range": "± 453841.53332658944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 430435.71428571426,
            "unit": "ns",
            "range": "± 22987.055775339926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355133.6842105263,
            "unit": "ns",
            "range": "± 23301.071158495237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 337480.95238095237,
            "unit": "ns",
            "range": "± 12339.6295571396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7052781.666666667,
            "unit": "ns",
            "range": "± 272884.31117473706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5324281.132075472,
            "unit": "ns",
            "range": "± 221895.57926802814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 35834.375,
            "unit": "ns",
            "range": "± 9500.214159635949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 135472.04301075268,
            "unit": "ns",
            "range": "± 17159.87081632355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 131234.375,
            "unit": "ns",
            "range": "± 17086.885264035565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 259467.02127659574,
            "unit": "ns",
            "range": "± 25637.314825502064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10947.916666666666,
            "unit": "ns",
            "range": "± 2203.059077338966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 33180.208333333336,
            "unit": "ns",
            "range": "± 7283.2702283588405"
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
          "id": "09e6e94f908526cacafcb73943e410472bcbc406",
          "message": "chore: deprecate pow block fields  [skip changelog]",
          "timestamp": "2023-04-07T13:49:10+09:00",
          "tree_id": "a74b3a7402e6c8976c8120da62ccbd6171394861",
          "url": "https://github.com/limebell/libplanet/commit/09e6e94f908526cacafcb73943e410472bcbc406"
        },
        "date": 1680843997503,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1439358.163265306,
            "unit": "ns",
            "range": "± 140560.31902065946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2522761.8181818184,
            "unit": "ns",
            "range": "± 106982.72184988928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2215119.387755102,
            "unit": "ns",
            "range": "± 168346.73941536926"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5167274.074074074,
            "unit": "ns",
            "range": "± 144466.5534690472"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48974.71264367816,
            "unit": "ns",
            "range": "± 2641.4063550967044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6973542.857142857,
            "unit": "ns",
            "range": "± 73824.46659564746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19568900,
            "unit": "ns",
            "range": "± 313574.3386859852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49175930.76923077,
            "unit": "ns",
            "range": "± 683752.037638177"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97026066.66666667,
            "unit": "ns",
            "range": "± 1786421.917315914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195987900,
            "unit": "ns",
            "range": "± 2812604.7596997544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4783616.510416667,
            "unit": "ns",
            "range": "± 13788.715137731546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1529857.7213541667,
            "unit": "ns",
            "range": "± 9630.136353197477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1169710.6380208333,
            "unit": "ns",
            "range": "± 7345.606988166074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2671712.3046875,
            "unit": "ns",
            "range": "± 9808.324004582963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831528.8364955357,
            "unit": "ns",
            "range": "± 2505.582192047888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771632.0768229166,
            "unit": "ns",
            "range": "± 2916.946384791409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3158120.930232558,
            "unit": "ns",
            "range": "± 116512.23225816562"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3253320.754716981,
            "unit": "ns",
            "range": "± 133403.07971086173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3945255.5555555555,
            "unit": "ns",
            "range": "± 163697.78489605233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4139291.5789473685,
            "unit": "ns",
            "range": "± 251837.69835215335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6828184.042553191,
            "unit": "ns",
            "range": "± 266307.3986111569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308166.6666666667,
            "unit": "ns",
            "range": "± 13632.2855398333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263000,
            "unit": "ns",
            "range": "± 6278.289821035907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 217212.19512195123,
            "unit": "ns",
            "range": "± 7766.021990760494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5294753.846153846,
            "unit": "ns",
            "range": "± 55819.211379007844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3715314.285714286,
            "unit": "ns",
            "range": "± 42224.671190464665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21877.659574468085,
            "unit": "ns",
            "range": "± 1820.4427120375335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96193.93939393939,
            "unit": "ns",
            "range": "± 8846.719883107353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87763.15789473684,
            "unit": "ns",
            "range": "± 7663.717400171906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 191883.67346938775,
            "unit": "ns",
            "range": "± 19314.241814836256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7271.134020618557,
            "unit": "ns",
            "range": "± 932.2864772168341"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21022.680412371134,
            "unit": "ns",
            "range": "± 2014.6600806463182"
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
          "id": "883be716e2698bb13f7d8ca90df2cc3c5ea64697",
          "message": "﻿chore: deprecate pow block fields  [skip changelog]",
          "timestamp": "2023-04-21T18:50:03+09:00",
          "tree_id": "05a3e48e6ed8d0cac3bb2078a534eee8f7a848b6",
          "url": "https://github.com/limebell/libplanet/commit/883be716e2698bb13f7d8ca90df2cc3c5ea64697"
        },
        "date": 1682071789661,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1737006.25,
            "unit": "ns",
            "range": "± 177053.81329593435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3197294.736842105,
            "unit": "ns",
            "range": "± 203797.83023943694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2689847.4226804124,
            "unit": "ns",
            "range": "± 197379.28435965587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7292178.787878788,
            "unit": "ns",
            "range": "± 501774.54105968605"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58519.14893617021,
            "unit": "ns",
            "range": "± 7875.868637476363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8706179.365079366,
            "unit": "ns",
            "range": "± 399308.84730378096"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23481996.875,
            "unit": "ns",
            "range": "± 680873.8689902781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60401870.45454545,
            "unit": "ns",
            "range": "± 2213967.5727735516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120903456.52173913,
            "unit": "ns",
            "range": "± 2721414.6304359776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241085566.66666666,
            "unit": "ns",
            "range": "± 3896445.6170549416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6137743.958333333,
            "unit": "ns",
            "range": "± 86485.74153875172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1897394.775390625,
            "unit": "ns",
            "range": "± 36171.16904539547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1428171.958705357,
            "unit": "ns",
            "range": "± 12033.739381902607"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3178817.745535714,
            "unit": "ns",
            "range": "± 26078.495584185806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1020869.5572916666,
            "unit": "ns",
            "range": "± 15926.068341845226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 952035.3190104166,
            "unit": "ns",
            "range": "± 13915.736346012336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3676470.4081632653,
            "unit": "ns",
            "range": "± 222238.30061361054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4029551.6483516484,
            "unit": "ns",
            "range": "± 210730.80793732897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5105805.797101449,
            "unit": "ns",
            "range": "± 244493.24595751223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4965206.849315069,
            "unit": "ns",
            "range": "± 234836.85845991934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8986855.172413792,
            "unit": "ns",
            "range": "± 384570.7173452542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 372656.6666666667,
            "unit": "ns",
            "range": "± 16599.850588123452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297664.5569620253,
            "unit": "ns",
            "range": "± 14747.020889715785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252321.62162162163,
            "unit": "ns",
            "range": "± 12565.448062267953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6321347.368421053,
            "unit": "ns",
            "range": "± 213801.37503267045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4258294.565217392,
            "unit": "ns",
            "range": "± 254497.10219388278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23523.157894736843,
            "unit": "ns",
            "range": "± 5406.702944505383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98267.58241758242,
            "unit": "ns",
            "range": "± 7769.035309863745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98474.73684210527,
            "unit": "ns",
            "range": "± 12637.187342101599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 132147.8260869565,
            "unit": "ns",
            "range": "± 15360.942895888275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8267.857142857143,
            "unit": "ns",
            "range": "± 1270.7232277386881"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22211.224489795917,
            "unit": "ns",
            "range": "± 4449.067611183112"
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
          "id": "717b8af052d62e22e87d41d7ebf2e0865e1a25b2",
          "message": "﻿chore: deprecate pow block fields  [skip changelog]",
          "timestamp": "2023-04-24T13:22:51+09:00",
          "tree_id": "636e83e2c030b6900d125550d30436a969802ab1",
          "url": "https://github.com/limebell/libplanet/commit/717b8af052d62e22e87d41d7ebf2e0865e1a25b2"
        },
        "date": 1682311109748,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1351207.3684210526,
            "unit": "ns",
            "range": "± 99833.90380719418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2417976.086956522,
            "unit": "ns",
            "range": "± 92564.44766223418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2150980.459770115,
            "unit": "ns",
            "range": "± 114389.15202986574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5090665.151515151,
            "unit": "ns",
            "range": "± 128906.89741343392"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42739.68253968254,
            "unit": "ns",
            "range": "± 1967.1938162002918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6864640,
            "unit": "ns",
            "range": "± 25996.23049597768"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17626353.333333332,
            "unit": "ns",
            "range": "± 171398.06994523708"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45947920,
            "unit": "ns",
            "range": "± 433743.36915475066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90277380,
            "unit": "ns",
            "range": "± 729998.6088049366"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182759640,
            "unit": "ns",
            "range": "± 1626072.7737184984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4792327.884615385,
            "unit": "ns",
            "range": "± 5447.092750825687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1502223.6703725962,
            "unit": "ns",
            "range": "± 1607.4158439234284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1137460.09765625,
            "unit": "ns",
            "range": "± 1777.579802135289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2575874.7005208335,
            "unit": "ns",
            "range": "± 3388.5435001242745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818682.9752604166,
            "unit": "ns",
            "range": "± 6164.1779729104555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730956.5778459822,
            "unit": "ns",
            "range": "± 510.2982854118387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2974460,
            "unit": "ns",
            "range": "± 52593.88611942321"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3137411.6279069767,
            "unit": "ns",
            "range": "± 115278.6215039816"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3923031.25,
            "unit": "ns",
            "range": "± 75169.77866802589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4007547.727272727,
            "unit": "ns",
            "range": "± 150134.73404514897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6780302.2727272725,
            "unit": "ns",
            "range": "± 253039.00194701704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300515.9090909091,
            "unit": "ns",
            "range": "± 10879.78589011747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251884.4827586207,
            "unit": "ns",
            "range": "± 6354.934857599641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229187.5,
            "unit": "ns",
            "range": "± 12626.407398508234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5262820,
            "unit": "ns",
            "range": "± 43054.30457988078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3486507.1428571427,
            "unit": "ns",
            "range": "± 35420.278074869755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17903.125,
            "unit": "ns",
            "range": "± 1831.9648999740257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81406.31578947368,
            "unit": "ns",
            "range": "± 4782.788524431003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 77140,
            "unit": "ns",
            "range": "± 7735.932165204557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93360,
            "unit": "ns",
            "range": "± 12179.442044307214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5532.291666666667,
            "unit": "ns",
            "range": "± 790.8016973688179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17164.736842105263,
            "unit": "ns",
            "range": "± 1638.6273719347396"
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
          "id": "392325741db814b89db460c4b65a83983eb4032c",
          "message": "﻿chore: deprecate pow block fields  [skip changelog]",
          "timestamp": "2023-04-26T18:48:13+09:00",
          "tree_id": "3affaecb6d61937bd0a4714cf948fae00a0afee0",
          "url": "https://github.com/limebell/libplanet/commit/392325741db814b89db460c4b65a83983eb4032c"
        },
        "date": 1682503830345,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1675058.762886598,
            "unit": "ns",
            "range": "± 235781.372405569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3328768.3673469387,
            "unit": "ns",
            "range": "± 355763.9100733927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2740275.5319148935,
            "unit": "ns",
            "range": "± 251539.93544973753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7018109.090909091,
            "unit": "ns",
            "range": "± 444147.5644401811"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67905.15463917526,
            "unit": "ns",
            "range": "± 17176.360760832144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9424411.340206185,
            "unit": "ns",
            "range": "± 653331.0009858914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25697800,
            "unit": "ns",
            "range": "± 881212.6507202865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65566200,
            "unit": "ns",
            "range": "± 1933591.689237843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127531936.36363636,
            "unit": "ns",
            "range": "± 4705281.098841179"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 257330421.875,
            "unit": "ns",
            "range": "± 7809067.666284037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5926291.5409482755,
            "unit": "ns",
            "range": "± 170745.97525377557"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1821327.3828125,
            "unit": "ns",
            "range": "± 33215.49625826909"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1391022.7734375,
            "unit": "ns",
            "range": "± 21840.02591453963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3006198.856026786,
            "unit": "ns",
            "range": "± 43456.205579738446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1050348.4450120192,
            "unit": "ns",
            "range": "± 27798.284717772938"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 977462.6538825758,
            "unit": "ns",
            "range": "± 30875.928944028456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4000887.3684210526,
            "unit": "ns",
            "range": "± 350624.4348399451"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4259098.924731183,
            "unit": "ns",
            "range": "± 306482.23421617044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4746960.204081632,
            "unit": "ns",
            "range": "± 358142.06267869694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4997065.306122449,
            "unit": "ns",
            "range": "± 412155.62322137266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8476756,
            "unit": "ns",
            "range": "± 665669.3110552777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 368605.2083333333,
            "unit": "ns",
            "range": "± 37503.78330330693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331347.9166666667,
            "unit": "ns",
            "range": "± 46362.75950909571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300211.3402061856,
            "unit": "ns",
            "range": "± 45345.34585702784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5512078.571428572,
            "unit": "ns",
            "range": "± 295897.6052425839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4901420.3125,
            "unit": "ns",
            "range": "± 226441.08395229012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30532.323232323233,
            "unit": "ns",
            "range": "± 10892.272380396134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120596.84210526316,
            "unit": "ns",
            "range": "± 25480.6453567007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88305.43478260869,
            "unit": "ns",
            "range": "± 16844.488217971193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130979.16666666667,
            "unit": "ns",
            "range": "± 21062.37311898896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6434.04255319149,
            "unit": "ns",
            "range": "± 1330.4177686087821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27802.04081632653,
            "unit": "ns",
            "range": "± 10707.700086991417"
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
          "id": "70271d0d30acf1aea01a0a2885a8d52664f509ae",
          "message": "﻿chore: deprecate pow block fields  [skip changelog]",
          "timestamp": "2023-04-28T11:11:37+09:00",
          "tree_id": "7609b3eb033edae67625bdf07021c4af8cb8547d",
          "url": "https://github.com/limebell/libplanet/commit/70271d0d30acf1aea01a0a2885a8d52664f509ae"
        },
        "date": 1682648809414,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1266513.1313131314,
            "unit": "ns",
            "range": "± 100491.5354811545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2354334.6153846155,
            "unit": "ns",
            "range": "± 59955.36968317479"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2261993.3333333335,
            "unit": "ns",
            "range": "± 40378.76858425666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5136590.7894736845,
            "unit": "ns",
            "range": "± 258761.05280232645"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45657.142857142855,
            "unit": "ns",
            "range": "± 2347.9794545091304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6785553.846153846,
            "unit": "ns",
            "range": "± 22527.931381014376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18186330,
            "unit": "ns",
            "range": "± 541725.635577069"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45426262.96296296,
            "unit": "ns",
            "range": "± 1260896.38510074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89716486.66666667,
            "unit": "ns",
            "range": "± 1617903.1080235867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 178310316.66666666,
            "unit": "ns",
            "range": "± 2271783.4670039266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4699062.395833333,
            "unit": "ns",
            "range": "± 43955.6145790183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1478389.4466145833,
            "unit": "ns",
            "range": "± 4723.462723259236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1113882.7373798077,
            "unit": "ns",
            "range": "± 4619.6168150936155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2629353.8504464286,
            "unit": "ns",
            "range": "± 13321.327242937763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810619.7916666666,
            "unit": "ns",
            "range": "± 4423.134676269333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772680.2018229166,
            "unit": "ns",
            "range": "± 2774.8689518591436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2872090.625,
            "unit": "ns",
            "range": "± 80906.99702336449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3015400,
            "unit": "ns",
            "range": "± 48472.76898768352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3783007.6923076925,
            "unit": "ns",
            "range": "± 47691.88368297869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3802826.6666666665,
            "unit": "ns",
            "range": "± 168589.89742604477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6190766.666666667,
            "unit": "ns",
            "range": "± 145992.20983783118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248512.06896551725,
            "unit": "ns",
            "range": "± 10740.954212669798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233304,
            "unit": "ns",
            "range": "± 5709.092163674828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 200523.07692307694,
            "unit": "ns",
            "range": "± 1523.238789637531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3849676.470588235,
            "unit": "ns",
            "range": "± 73675.86553115414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3454535.714285714,
            "unit": "ns",
            "range": "± 58504.75138025914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16918.478260869564,
            "unit": "ns",
            "range": "± 1323.5756887756065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78679.51807228915,
            "unit": "ns",
            "range": "± 4201.328449493453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68058.82352941176,
            "unit": "ns",
            "range": "± 2595.008783845499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83833.50515463918,
            "unit": "ns",
            "range": "± 12250.439451406522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5523.711340206186,
            "unit": "ns",
            "range": "± 771.0616593205933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16011.111111111111,
            "unit": "ns",
            "range": "± 1365.5014672927036"
          }
        ]
      }
    ]
  }
}