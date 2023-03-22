window.BENCHMARK_DATA = {
  "lastUpdate": 1679473937062,
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
          "id": "ea5185dea75a70ede946f9c276ef35eaef0c5d1f",
          "message": "logging: added additional logging in AccountStateDeltaImpl.GetState()",
          "timestamp": "2023-03-22T17:21:05+09:00",
          "tree_id": "d1769eaa62f6eea77996dc7979c5403369dac380",
          "url": "https://github.com/limebell/libplanet/commit/ea5185dea75a70ede946f9c276ef35eaef0c5d1f"
        },
        "date": 1679473932944,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103277.43396226416,
            "unit": "ns",
            "range": "± 4309.7491427506275"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4480586.338341346,
            "unit": "ns",
            "range": "± 16728.50260993307"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5399188.073170732,
            "unit": "ns",
            "range": "± 119812.09717582575"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25779650.133333333,
            "unit": "ns",
            "range": "± 418422.67613364133"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6835127.94117647,
            "unit": "ns",
            "range": "± 133360.21501626272"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28377119.933333334,
            "unit": "ns",
            "range": "± 455174.03671334754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6043246.7640625,
            "unit": "ns",
            "range": "± 28362.91361955458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1932823.3098958333,
            "unit": "ns",
            "range": "± 9027.556307310608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1390710.7651041667,
            "unit": "ns",
            "range": "± 1823.7502346171216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2607831.651141827,
            "unit": "ns",
            "range": "± 1205.227113684244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824438.2030498798,
            "unit": "ns",
            "range": "± 1143.8752019230164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741767.9933143029,
            "unit": "ns",
            "range": "± 490.9892643182236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90830.25,
            "unit": "ns",
            "range": "± 4976.247619799805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196056.91549295775,
            "unit": "ns",
            "range": "± 6886.631836384126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173058.8,
            "unit": "ns",
            "range": "± 2791.9648165480353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3773849.066666667,
            "unit": "ns",
            "range": "± 24186.877813235442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9547072.714285715,
            "unit": "ns",
            "range": "± 53473.860227258665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16989.354166666668,
            "unit": "ns",
            "range": "± 2179.6468616880734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52150.62765957447,
            "unit": "ns",
            "range": "± 4191.119905726029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45751.81690140845,
            "unit": "ns",
            "range": "± 2143.2978148495445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96665.95555555556,
            "unit": "ns",
            "range": "± 9818.814175766196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6324.425531914893,
            "unit": "ns",
            "range": "± 669.8782025285136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16554.78021978022,
            "unit": "ns",
            "range": "± 1779.5434358421376"
          }
        ]
      }
    ]
  }
}