window.BENCHMARK_DATA = {
  "lastUpdate": 1679991197633,
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
          "id": "7ac3a83dada720d6e83d3bf9fd41e2dbb1a2d4ff",
          "message": "feat: add getstate measurement for single action execution\n\n(cherry picked from commit 9d89ee4362b95e3fb85bb936484eae3c96145f02)",
          "timestamp": "2023-03-28T16:56:18+09:00",
          "tree_id": "f97c7f1286e48802c7d99538392d8032adc3d5cd",
          "url": "https://github.com/limebell/libplanet/commit/7ac3a83dada720d6e83d3bf9fd41e2dbb1a2d4ff"
        },
        "date": 1679991122395,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 91752.08333333333,
            "unit": "ns",
            "range": "± 3605.2555953498527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4892249.639423077,
            "unit": "ns",
            "range": "± 7146.442313316998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1518830.3292410714,
            "unit": "ns",
            "range": "± 935.5195778326904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1122092.7036830357,
            "unit": "ns",
            "range": "± 1625.4961917225814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612729.4010416665,
            "unit": "ns",
            "range": "± 3421.4977237013236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804724.2903645834,
            "unit": "ns",
            "range": "± 603.4981347364233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 738529.0876116072,
            "unit": "ns",
            "range": "± 647.8849013028806"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 3953374.2745535714,
            "unit": "ns",
            "range": "± 18912.288128626995"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5423257.142857143,
            "unit": "ns",
            "range": "± 51818.51041836326"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23108140,
            "unit": "ns",
            "range": "± 249537.87802942577"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5662010.638297873,
            "unit": "ns",
            "range": "± 218981.40603419766"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26388463.333333332,
            "unit": "ns",
            "range": "± 302592.91575756803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 84481.05263157895,
            "unit": "ns",
            "range": "± 7071.59879507294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181655.1724137931,
            "unit": "ns",
            "range": "± 7435.103378598964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 153772.72727272726,
            "unit": "ns",
            "range": "± 3404.0846358150684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3330557.1428571427,
            "unit": "ns",
            "range": "± 16122.545813750492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8402120,
            "unit": "ns",
            "range": "± 55824.382793594006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15863.157894736842,
            "unit": "ns",
            "range": "± 1386.2587514125423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 43438.63636363636,
            "unit": "ns",
            "range": "± 2732.580432534728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38887.5,
            "unit": "ns",
            "range": "± 3055.219864601013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83236.36363636363,
            "unit": "ns",
            "range": "± 9598.493438037127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5463.541666666667,
            "unit": "ns",
            "range": "± 817.1992982023761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15719.387755102041,
            "unit": "ns",
            "range": "± 1853.6482925371351"
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
          "id": "f804adf2299b6ed3bb4cd40316c40f6de29e311c",
          "message": "feat: add getstate measurement for single action execution\n\n(cherry picked from commit 9d89ee4362b95e3fb85bb936484eae3c96145f02)",
          "timestamp": "2023-03-28T16:57:04+09:00",
          "tree_id": "e3bed9b2029d34ce60a47a82bbc36e6733cafcf7",
          "url": "https://github.com/limebell/libplanet/commit/f804adf2299b6ed3bb4cd40316c40f6de29e311c"
        },
        "date": 1679991180557,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 99419.76744186046,
            "unit": "ns",
            "range": "± 5116.888295403113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4770184.322916667,
            "unit": "ns",
            "range": "± 24701.219267116758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1483022.3177083333,
            "unit": "ns",
            "range": "± 8979.392637341762"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1138387.05078125,
            "unit": "ns",
            "range": "± 5995.549296550057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2681543.0989583335,
            "unit": "ns",
            "range": "± 7238.683682043578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834122.24609375,
            "unit": "ns",
            "range": "± 2741.6661600776943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761571.42578125,
            "unit": "ns",
            "range": "± 3941.1515510074605"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4467196.041666667,
            "unit": "ns",
            "range": "± 71547.61835766838"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5480930.769230769,
            "unit": "ns",
            "range": "± 87521.02018577581"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 23928592.85714286,
            "unit": "ns",
            "range": "± 595372.5810931004"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6061871.428571428,
            "unit": "ns",
            "range": "± 58891.70541793612"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 26710000,
            "unit": "ns",
            "range": "± 626917.8223658983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 80528.42105263157,
            "unit": "ns",
            "range": "± 4553.200024062916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178839.2857142857,
            "unit": "ns",
            "range": "± 9609.984991239146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 154562.06896551725,
            "unit": "ns",
            "range": "± 4425.931200897037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3457973.3333333335,
            "unit": "ns",
            "range": "± 58303.80368217433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9595650,
            "unit": "ns",
            "range": "± 225722.32784045598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16950,
            "unit": "ns",
            "range": "± 1382.522484827148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 44358.82352941176,
            "unit": "ns",
            "range": "± 3136.6229230407243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36831.57894736842,
            "unit": "ns",
            "range": "± 762.3447977413337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 80478.65168539326,
            "unit": "ns",
            "range": "± 12078.234292144472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4949.473684210527,
            "unit": "ns",
            "range": "± 549.8304737207887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15712.90322580645,
            "unit": "ns",
            "range": "± 1350.0584372578915"
          }
        ]
      }
    ]
  }
}