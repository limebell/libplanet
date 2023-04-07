window.BENCHMARK_DATA = {
  "lastUpdate": 1680844018277,
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
      }
    ]
  }
}