window.BENCHMARK_DATA = {
  "lastUpdate": 1672746782286,
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
        "date": 1672746771386,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 138637.89534883722,
            "unit": "ns",
            "range": "± 4810.493070161632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 114913.84946236559,
            "unit": "ns",
            "range": "± 9088.681850600773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270387.94,
            "unit": "ns",
            "range": "± 29676.927516585107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227432.07692307694,
            "unit": "ns",
            "range": "± 9313.01399338719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4192719.9,
            "unit": "ns",
            "range": "± 41619.79952378435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10614008.666666666,
            "unit": "ns",
            "range": "± 145891.23688148486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23587.933333333334,
            "unit": "ns",
            "range": "± 2423.9846561979607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62221.681818181816,
            "unit": "ns",
            "range": "± 4759.167261615569"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50783.084210526315,
            "unit": "ns",
            "range": "± 3596.1289017413615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112184.1649484536,
            "unit": "ns",
            "range": "± 17174.332832553988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5904.282608695652,
            "unit": "ns",
            "range": "± 446.39226149519027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22042.5,
            "unit": "ns",
            "range": "± 2053.230210875189"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5151508.840473791,
            "unit": "ns",
            "range": "± 152116.40940099434"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7086922.193548387,
            "unit": "ns",
            "range": "± 210476.69471264817"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28919923.714285713,
            "unit": "ns",
            "range": "± 241084.06397679198"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7220879.173913044,
            "unit": "ns",
            "range": "± 255748.62586437006"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34162793.64285714,
            "unit": "ns",
            "range": "± 971624.6063649431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6526501.392578125,
            "unit": "ns",
            "range": "± 214941.26768110238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2078986.7330729167,
            "unit": "ns",
            "range": "± 24968.06078809438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1460689.6509114583,
            "unit": "ns",
            "range": "± 24450.00725105757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2679944.55625,
            "unit": "ns",
            "range": "± 24088.968467002444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 867789.8743024553,
            "unit": "ns",
            "range": "± 6645.611612255133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787350.90546875,
            "unit": "ns",
            "range": "± 9332.264357446318"
          }
        ]
      }
    ]
  }
}