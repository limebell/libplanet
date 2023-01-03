window.BENCHMARK_DATA = {
  "lastUpdate": 1672746573665,
  "repoUrl": "https://github.com/limebell/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1bcca8a2514c6d02a3cda98b50ac71f0abfc19ed",
          "message": "Merge pull request #2681 from greymistcube/fix/try-complete-benchmark\n\n🔧 Try running benchmarks to completion on other os failure",
          "timestamp": "2022-12-29T02:06:52+09:00",
          "tree_id": "49b46aa0a355cd5cbb89a97429f6a0ae33ff3d4d",
          "url": "https://github.com/limebell/libplanet/commit/1bcca8a2514c6d02a3cda98b50ac71f0abfc19ed"
        },
        "date": 1672746570517,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4402279.46233259,
            "unit": "ns",
            "range": "± 35154.93140317095"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5403972.155555556,
            "unit": "ns",
            "range": "± 146500.00441978828"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24913497.933333334,
            "unit": "ns",
            "range": "± 298550.3145651061"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6087695.632653061,
            "unit": "ns",
            "range": "± 241897.22606147686"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28082279.64285714,
            "unit": "ns",
            "range": "± 269340.03894351353"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 106250,
            "unit": "ns",
            "range": "± 2184.891301644089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 84145.65432098765,
            "unit": "ns",
            "range": "± 4118.8666103689675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197461.61643835617,
            "unit": "ns",
            "range": "± 9434.516159103905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175142.85714285713,
            "unit": "ns",
            "range": "± 4155.186088320405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3726766.1333333333,
            "unit": "ns",
            "range": "± 31824.416730973506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9270806.92857143,
            "unit": "ns",
            "range": "± 132891.2981844498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16992.55319148936,
            "unit": "ns",
            "range": "± 1862.201227343258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46218.74117647059,
            "unit": "ns",
            "range": "± 2570.6784177432583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39296,
            "unit": "ns",
            "range": "± 911.2628599915614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78401.01052631579,
            "unit": "ns",
            "range": "± 10174.985130936633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4117.708333333333,
            "unit": "ns",
            "range": "± 405.227627173372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15740.793103448275,
            "unit": "ns",
            "range": "± 1098.245039141264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5924585.646763393,
            "unit": "ns",
            "range": "± 13166.046400271343"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1856707.1438802083,
            "unit": "ns",
            "range": "± 2857.0645509885608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365805.2780412945,
            "unit": "ns",
            "range": "± 1660.9596587396652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2577780.607872596,
            "unit": "ns",
            "range": "± 3175.8811646559197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799435.921875,
            "unit": "ns",
            "range": "± 2208.8589081846635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742704.2813197544,
            "unit": "ns",
            "range": "± 726.0432318108151"
          }
        ]
      }
    ]
  }
}