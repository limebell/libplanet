window.BENCHMARK_DATA = {
  "lastUpdate": 1672747274345,
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
        "date": 1672747256780,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 137087.2340425532,
            "unit": "ns",
            "range": "± 16387.874051356685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6081077.849264706,
            "unit": "ns",
            "range": "± 117989.12393521662"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1969622.349330357,
            "unit": "ns",
            "range": "± 28725.87378490911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1589580.5989583333,
            "unit": "ns",
            "range": "± 29378.778028537374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3380016.6130514704,
            "unit": "ns",
            "range": "± 68075.0323567109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1119286.1949573865,
            "unit": "ns",
            "range": "± 26142.971028899097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1039021.9637784091,
            "unit": "ns",
            "range": "± 24701.09501018771"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6193196.8125,
            "unit": "ns",
            "range": "± 393738.21683539846"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6736491.75257732,
            "unit": "ns",
            "range": "± 491883.3638996866"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33104900,
            "unit": "ns",
            "range": "± 1268203.3075707275"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7148851.0869565215,
            "unit": "ns",
            "range": "± 487330.44061545545"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 40625635.416666664,
            "unit": "ns",
            "range": "± 2614000.475696778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 115819.35483870968,
            "unit": "ns",
            "range": "± 15944.865999849471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248823.71134020618,
            "unit": "ns",
            "range": "± 40632.84994208267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231926.8817204301,
            "unit": "ns",
            "range": "± 28907.066759685273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4745728.125,
            "unit": "ns",
            "range": "± 282674.37383270264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12049548.529411765,
            "unit": "ns",
            "range": "± 566063.7231394727"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24569.791666666668,
            "unit": "ns",
            "range": "± 8268.661443148068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65215.05376344086,
            "unit": "ns",
            "range": "± 14325.212998162724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62631.18279569892,
            "unit": "ns",
            "range": "± 10141.016355189578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 141763.04347826086,
            "unit": "ns",
            "range": "± 25888.92893081717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7024.210526315789,
            "unit": "ns",
            "range": "± 1315.1098804892156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23391.397849462366,
            "unit": "ns",
            "range": "± 6618.069072030696"
          }
        ]
      }
    ]
  }
}