window.BENCHMARK_DATA = {
  "lastUpdate": 1679983352560,
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
          "id": "9d89ee4362b95e3fb85bb936484eae3c96145f02",
          "message": "feat: add getstate measurement for single action execution",
          "timestamp": "2023-03-28T14:46:58+09:00",
          "tree_id": "cf1d21492170b9a59cb00ae8f0eaf617d97b074a",
          "url": "https://github.com/limebell/libplanet/commit/9d89ee4362b95e3fb85bb936484eae3c96145f02"
        },
        "date": 1679983336394,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 100620.68965517242,
            "unit": "ns",
            "range": "± 4371.428712642547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4773922.630208333,
            "unit": "ns",
            "range": "± 19257.990800904765"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526647.65625,
            "unit": "ns",
            "range": "± 5484.9471987122615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1149075.78125,
            "unit": "ns",
            "range": "± 6025.095875445862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2579274.5182291665,
            "unit": "ns",
            "range": "± 8767.086876297593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 828307.7083333334,
            "unit": "ns",
            "range": "± 2050.5239739059407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760902.0247395834,
            "unit": "ns",
            "range": "± 1880.333496049948"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4647603.580729167,
            "unit": "ns",
            "range": "± 25556.137839031853"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5597064.285714285,
            "unit": "ns",
            "range": "± 67668.37242296895"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24348628.57142857,
            "unit": "ns",
            "range": "± 682535.9205617992"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5765700,
            "unit": "ns",
            "range": "± 227521.73888810418"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27306770.588235293,
            "unit": "ns",
            "range": "± 553850.753548176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 87191.30434782608,
            "unit": "ns",
            "range": "± 8079.504012819581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177428.1690140845,
            "unit": "ns",
            "range": "± 8657.386327764807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 158305.73770491802,
            "unit": "ns",
            "range": "± 6984.065783151529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3502620,
            "unit": "ns",
            "range": "± 59897.99901260714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8676546.666666666,
            "unit": "ns",
            "range": "± 150662.6689313707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18004.301075268817,
            "unit": "ns",
            "range": "± 1680.8327373588047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49874.22680412371,
            "unit": "ns",
            "range": "± 6121.568398405542"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37010.34482758621,
            "unit": "ns",
            "range": "± 1057.4041083123623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89071.11111111111,
            "unit": "ns",
            "range": "± 11645.978661163675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5178.9473684210525,
            "unit": "ns",
            "range": "± 680.4089409962822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16988.043478260868,
            "unit": "ns",
            "range": "± 1550.1749203890354"
          }
        ]
      }
    ]
  }
}