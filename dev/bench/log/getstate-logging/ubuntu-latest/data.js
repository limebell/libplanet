window.BENCHMARK_DATA = {
  "lastUpdate": 1679473695727,
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
          "id": "9853dae4111aaa2e067ade46f8dbb1b567be6dad",
          "message": "logging: added additional logging in AccountStateDeltaImpl.GetState()",
          "timestamp": "2023-03-22T17:17:10+09:00",
          "tree_id": "53e764c4d3ef8a1302b3c8813a37ec74bffa9eb3",
          "url": "https://github.com/limebell/libplanet/commit/9853dae4111aaa2e067ade46f8dbb1b567be6dad"
        },
        "date": 1679473692263,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103761.79411764706,
            "unit": "ns",
            "range": "± 3305.000671887446"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4440125.837760417,
            "unit": "ns",
            "range": "± 38218.347386738096"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5462902.068965517,
            "unit": "ns",
            "range": "± 234038.83937664513"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24715997,
            "unit": "ns",
            "range": "± 140027.46924525476"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6375285.833333333,
            "unit": "ns",
            "range": "± 188032.42094953646"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27925322.133333333,
            "unit": "ns",
            "range": "± 334790.71661943133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6221980.841666667,
            "unit": "ns",
            "range": "± 32286.587443233948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1963953.3731971155,
            "unit": "ns",
            "range": "± 897.8221358756947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376111.3936941964,
            "unit": "ns",
            "range": "± 513.0437724178421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2528987.800223214,
            "unit": "ns",
            "range": "± 7513.478671942793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807438.7315104167,
            "unit": "ns",
            "range": "± 2695.793873828495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742018.4115513393,
            "unit": "ns",
            "range": "± 486.4615019939379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 84766.08510638298,
            "unit": "ns",
            "range": "± 5592.12223484548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194804.51388888888,
            "unit": "ns",
            "range": "± 9116.364451726673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170293,
            "unit": "ns",
            "range": "± 2963.3597876007616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3746452.2666666666,
            "unit": "ns",
            "range": "± 40952.085850359785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9412968.066666666,
            "unit": "ns",
            "range": "± 62173.53614965439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16110,
            "unit": "ns",
            "range": "± 844.5806389541514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46050.58947368421,
            "unit": "ns",
            "range": "± 3157.553714085451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38796.76666666667,
            "unit": "ns",
            "range": "± 1693.2847365018256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85080.75510204081,
            "unit": "ns",
            "range": "± 14217.386596351957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5011.723404255319,
            "unit": "ns",
            "range": "± 503.70117024751545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14656.32183908046,
            "unit": "ns",
            "range": "± 1016.4577284962882"
          }
        ]
      }
    ]
  }
}