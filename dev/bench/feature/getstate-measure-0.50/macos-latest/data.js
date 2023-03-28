window.BENCHMARK_DATA = {
  "lastUpdate": 1679991175458,
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
        "date": 1679991105773,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 132090.47802197802,
            "unit": "ns",
            "range": "± 9978.961748463083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111580.29569892473,
            "unit": "ns",
            "range": "± 13371.058337969082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 231418.85555555555,
            "unit": "ns",
            "range": "± 23560.5007284312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199130.3350515464,
            "unit": "ns",
            "range": "± 19658.057325856877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3605698.5,
            "unit": "ns",
            "range": "± 31369.499975729177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11616424.5,
            "unit": "ns",
            "range": "± 302020.9354168736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17367.76595744681,
            "unit": "ns",
            "range": "± 1921.6356953674556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51779.32584269663,
            "unit": "ns",
            "range": "± 4851.518185005411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52850.16842105263,
            "unit": "ns",
            "range": "± 6100.639810625781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123356.53260869565,
            "unit": "ns",
            "range": "± 15008.70760917895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7231.58947368421,
            "unit": "ns",
            "range": "± 1069.7712968422702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19633.4,
            "unit": "ns",
            "range": "± 3435.802026551671"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4796081.205,
            "unit": "ns",
            "range": "± 236442.75856674818"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5911415.373563218,
            "unit": "ns",
            "range": "± 485184.3445277366"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26833095.033333335,
            "unit": "ns",
            "range": "± 775559.4075081074"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7299739.363636363,
            "unit": "ns",
            "range": "± 178981.10811813295"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30844170.282608695,
            "unit": "ns",
            "range": "± 1116064.8204809343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6788353.240084135,
            "unit": "ns",
            "range": "± 179352.6702179028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2012987.9693080357,
            "unit": "ns",
            "range": "± 18291.86784792986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1311119.4246651786,
            "unit": "ns",
            "range": "± 20767.550378137075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2613916.7001953125,
            "unit": "ns",
            "range": "± 26583.00051868189"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806433.0094401041,
            "unit": "ns",
            "range": "± 6568.231767661478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739250.0858677456,
            "unit": "ns",
            "range": "± 5729.771413933292"
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
          "id": "f9be3f1ba45edd058276138a964378131c34b5db",
          "message": "feat: add getstate measurement for single action execution  [skip changelog]\n\n(cherry picked from commit 9d89ee4362b95e3fb85bb936484eae3c96145f02)",
          "timestamp": "2023-03-28T16:58:16+09:00",
          "tree_id": "e3bed9b2029d34ce60a47a82bbc36e6733cafcf7",
          "url": "https://github.com/limebell/libplanet/commit/f9be3f1ba45edd058276138a964378131c34b5db"
        },
        "date": 1679991162806,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 133824.43037974683,
            "unit": "ns",
            "range": "± 6572.158390891281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 110632.97959183673,
            "unit": "ns",
            "range": "± 10969.958743054665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 243555.0652173913,
            "unit": "ns",
            "range": "± 14550.563327189677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 208907.76086956522,
            "unit": "ns",
            "range": "± 7968.662740691139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4222896.230769231,
            "unit": "ns",
            "range": "± 34676.49433731214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10661397.666666666,
            "unit": "ns",
            "range": "± 86886.11378668273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20918.042553191488,
            "unit": "ns",
            "range": "± 1928.0617818754913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53833.67032967033,
            "unit": "ns",
            "range": "± 7028.591839455855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45751.54255319149,
            "unit": "ns",
            "range": "± 5448.6113169426935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95278.48913043478,
            "unit": "ns",
            "range": "± 17496.988683139236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5111.861445783133,
            "unit": "ns",
            "range": "± 492.5688159998004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18077.576470588236,
            "unit": "ns",
            "range": "± 2905.6886380588917"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5239558.338704427,
            "unit": "ns",
            "range": "± 205392.7015437332"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6487660.666666667,
            "unit": "ns",
            "range": "± 76802.08472027926"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28891722.14285714,
            "unit": "ns",
            "range": "± 504832.8918331227"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8075678.076923077,
            "unit": "ns",
            "range": "± 93537.16545350796"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33457604.466666665,
            "unit": "ns",
            "range": "± 578706.9067525666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7307968.755952381,
            "unit": "ns",
            "range": "± 173655.71197337983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2282590.137920673,
            "unit": "ns",
            "range": "± 9879.01969687248"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1478762.025390625,
            "unit": "ns",
            "range": "± 6543.52495666004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3149415.7873883927,
            "unit": "ns",
            "range": "± 34030.88449120568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1046614.3472377232,
            "unit": "ns",
            "range": "± 13732.50948339941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 873017.346875,
            "unit": "ns",
            "range": "± 6127.8790753660705"
          }
        ]
      }
    ]
  }
}