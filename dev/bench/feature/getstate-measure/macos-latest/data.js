window.BENCHMARK_DATA = {
  "lastUpdate": 1679983334519,
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
        "date": 1679983327008,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 134178.96774193548,
            "unit": "ns",
            "range": "± 9922.867726764334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 127139.31443298969,
            "unit": "ns",
            "range": "± 12111.500540403991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236963.2323232323,
            "unit": "ns",
            "range": "± 26014.165704135314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234873.03125,
            "unit": "ns",
            "range": "± 7319.704458093281"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3716226.84,
            "unit": "ns",
            "range": "± 95234.6969910302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10278588.727272727,
            "unit": "ns",
            "range": "± 306341.9838615082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22116.74226804124,
            "unit": "ns",
            "range": "± 4828.02189755794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61046.78,
            "unit": "ns",
            "range": "± 12778.322745710228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62888.51063829787,
            "unit": "ns",
            "range": "± 6771.7318804849265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136733,
            "unit": "ns",
            "range": "± 18788.142535031682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8781.731958762886,
            "unit": "ns",
            "range": "± 1685.2210198483851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19237.5,
            "unit": "ns",
            "range": "± 2455.37194648884"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5324638.618376358,
            "unit": "ns",
            "range": "± 131391.7949638403"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6621037.0625,
            "unit": "ns",
            "range": "± 123959.08330196097"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28046317.0625,
            "unit": "ns",
            "range": "± 547105.0325509681"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7314198.529411765,
            "unit": "ns",
            "range": "± 230950.72236911772"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31945585.18,
            "unit": "ns",
            "range": "± 829157.962037729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6599627.290296053,
            "unit": "ns",
            "range": "± 227190.7382311707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1973680.1932091345,
            "unit": "ns",
            "range": "± 25648.598744485334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1298824.4462239584,
            "unit": "ns",
            "range": "± 6670.467266373222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2719107.829943427,
            "unit": "ns",
            "range": "± 78646.2487879384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 872916.9895368303,
            "unit": "ns",
            "range": "± 4293.778407149094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787815.7712590144,
            "unit": "ns",
            "range": "± 2722.1839733914194"
          }
        ]
      }
    ]
  }
}