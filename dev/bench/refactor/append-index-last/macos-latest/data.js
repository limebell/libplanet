window.BENCHMARK_DATA = {
  "lastUpdate": 1683022571271,
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
          "id": "d83e58848771964b85d8db23a191fc6289db89b4",
          "message": "refactor: append index at last when appending new block  [skip changelog]",
          "timestamp": "2023-05-02T18:54:04+09:00",
          "tree_id": "d56012325562e1a076ddb8c3ac9c06c670ad82b7",
          "url": "https://github.com/limebell/libplanet/commit/d83e58848771964b85d8db23a191fc6289db89b4"
        },
        "date": 1683022563969,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8855836.421348315,
            "unit": "ns",
            "range": "± 671240.6172440769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21115895.022727273,
            "unit": "ns",
            "range": "± 788595.7508719693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51675206.791666664,
            "unit": "ns",
            "range": "± 2521991.851256758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103744165.12790698,
            "unit": "ns",
            "range": "± 5631817.701736601"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215683280.53448275,
            "unit": "ns",
            "range": "± 9422374.285118159"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69375.29787234042,
            "unit": "ns",
            "range": "± 10910.088406085331"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 401301.5208333333,
            "unit": "ns",
            "range": "± 37495.919974249875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 342052.8556701031,
            "unit": "ns",
            "range": "± 37546.883456716954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303568.2708333333,
            "unit": "ns",
            "range": "± 29229.221251660278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5634482.706349206,
            "unit": "ns",
            "range": "± 234078.5483962498"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4105329.9523809524,
            "unit": "ns",
            "range": "± 138032.61540840802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20425.84375,
            "unit": "ns",
            "range": "± 5058.55084267822"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102328.98,
            "unit": "ns",
            "range": "± 21545.354888755588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 116470.05263157895,
            "unit": "ns",
            "range": "± 14475.358142314277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 271331.13157894736,
            "unit": "ns",
            "range": "± 31612.281554919486"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8834.541666666666,
            "unit": "ns",
            "range": "± 1827.66389237977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21111.855670103094,
            "unit": "ns",
            "range": "± 4689.0838190722525"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1772232.2,
            "unit": "ns",
            "range": "± 204985.94191265455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3320466,
            "unit": "ns",
            "range": "± 238565.22794185107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2841340.8978494625,
            "unit": "ns",
            "range": "± 320983.7232108283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7544941.202020202,
            "unit": "ns",
            "range": "± 533838.9240205018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3428327.095238095,
            "unit": "ns",
            "range": "± 182114.1257741551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3564651.1842105263,
            "unit": "ns",
            "range": "± 180241.1182547209"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5245986.448979592,
            "unit": "ns",
            "range": "± 207972.27666547103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4618280.274193549,
            "unit": "ns",
            "range": "± 277491.99078042846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8981475.794736842,
            "unit": "ns",
            "range": "± 495797.3134879512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7179097.860677083,
            "unit": "ns",
            "range": "± 197659.31928049406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2198853.3155826433,
            "unit": "ns",
            "range": "± 116949.93761993558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1409369.83270144,
            "unit": "ns",
            "range": "± 57509.58196776516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3212504.4149078825,
            "unit": "ns",
            "range": "± 151529.263527277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 996015.9336815309,
            "unit": "ns",
            "range": "± 54849.41737154419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 804012.2179586476,
            "unit": "ns",
            "range": "± 34891.04717728732"
          }
        ]
      }
    ]
  }
}