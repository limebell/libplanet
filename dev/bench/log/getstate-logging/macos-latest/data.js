window.BENCHMARK_DATA = {
  "lastUpdate": 1679474076090,
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
        "date": 1679474069709,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 125962.31521739131,
            "unit": "ns",
            "range": "± 10081.809275233461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 115282.15625,
            "unit": "ns",
            "range": "± 20747.052199657883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228274.34444444443,
            "unit": "ns",
            "range": "± 32531.49486367662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297420.9784946237,
            "unit": "ns",
            "range": "± 114207.21786496707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3685949.775862069,
            "unit": "ns",
            "range": "± 143547.11797922614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9550314.07142857,
            "unit": "ns",
            "range": "± 437898.0392978326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16208.17441860465,
            "unit": "ns",
            "range": "± 1494.2281831560713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49465.75268817204,
            "unit": "ns",
            "range": "± 5143.676739994781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45758.510309278354,
            "unit": "ns",
            "range": "± 6337.544874093012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107512.5,
            "unit": "ns",
            "range": "± 16857.710719717474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5622.6741573033705,
            "unit": "ns",
            "range": "± 673.6187850854668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16533.5,
            "unit": "ns",
            "range": "± 1939.578946381743"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5004346.848460478,
            "unit": "ns",
            "range": "± 234866.2549893933"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5977262.042253521,
            "unit": "ns",
            "range": "± 292268.2761976663"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27477380.363636363,
            "unit": "ns",
            "range": "± 1285423.3162256202"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6689541.44117647,
            "unit": "ns",
            "range": "± 130976.11593935294"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31012274.62162162,
            "unit": "ns",
            "range": "± 1544099.6095845734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6223751.816105769,
            "unit": "ns",
            "range": "± 51534.861474221725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1954471.6404803242,
            "unit": "ns",
            "range": "± 53906.14971400288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1266086.5145833334,
            "unit": "ns",
            "range": "± 23296.290638832215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2545262.8888221155,
            "unit": "ns",
            "range": "± 16685.227836048594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825642.0714285715,
            "unit": "ns",
            "range": "± 7531.449090519325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 693577.5736177885,
            "unit": "ns",
            "range": "± 4462.742456232923"
          }
        ]
      }
    ]
  }
}