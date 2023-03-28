window.BENCHMARK_DATA = {
  "lastUpdate": 1679983737488,
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
        "date": 1679983728127,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 136637.09473684212,
            "unit": "ns",
            "range": "± 12056.585694905049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 99703.95918367348,
            "unit": "ns",
            "range": "± 13244.552353698606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240075.52150537635,
            "unit": "ns",
            "range": "± 30487.501990294775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225502.2857142857,
            "unit": "ns",
            "range": "± 26888.625941284343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3769737.727272727,
            "unit": "ns",
            "range": "± 171477.56870228698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10700916.37012987,
            "unit": "ns",
            "range": "± 542572.9817420479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20500.81914893617,
            "unit": "ns",
            "range": "± 4309.240461385043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61854.88775510204,
            "unit": "ns",
            "range": "± 10416.006609459411"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58696.145833333336,
            "unit": "ns",
            "range": "± 6806.050544964682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126635.71875,
            "unit": "ns",
            "range": "± 17497.661019752642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8243.142105263158,
            "unit": "ns",
            "range": "± 1053.6608412677454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20094.258620689656,
            "unit": "ns",
            "range": "± 3041.9284312083055"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4851611.03813244,
            "unit": "ns",
            "range": "± 108622.36846884059"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6263563.192307692,
            "unit": "ns",
            "range": "± 100621.87180014147"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27513943.666666668,
            "unit": "ns",
            "range": "± 1278009.6435436006"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6841862.193181818,
            "unit": "ns",
            "range": "± 440346.1228547552"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31730933.63157895,
            "unit": "ns",
            "range": "± 1363531.854674989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7643536.548287899,
            "unit": "ns",
            "range": "± 296333.7212618462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2213279.522418478,
            "unit": "ns",
            "range": "± 74172.71921823181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1432684.496212121,
            "unit": "ns",
            "range": "± 66366.57161233018"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3396377.84375,
            "unit": "ns",
            "range": "± 358589.8818499721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 902151.56953125,
            "unit": "ns",
            "range": "± 23195.030718624115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789219.292246943,
            "unit": "ns",
            "range": "± 19553.81997768087"
          }
        ]
      }
    ]
  }
}