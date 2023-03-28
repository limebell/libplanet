window.BENCHMARK_DATA = {
  "lastUpdate": 1679983254580,
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
        "date": 1679983251708,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 110459.4255319149,
            "unit": "ns",
            "range": "± 6314.324162048313"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5131148.770052084,
            "unit": "ns",
            "range": "± 49763.12969914013"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6520301.230769231,
            "unit": "ns",
            "range": "± 99259.42366189876"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27865475.8,
            "unit": "ns",
            "range": "± 741256.8437270916"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6437887.024096386,
            "unit": "ns",
            "range": "± 342622.86019965104"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30438930.45,
            "unit": "ns",
            "range": "± 645433.5807386402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5886419.790625,
            "unit": "ns",
            "range": "± 33068.65979330555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1884242.3570033482,
            "unit": "ns",
            "range": "± 4642.814528887595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371859.4311197917,
            "unit": "ns",
            "range": "± 3654.574466346236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625762.845572917,
            "unit": "ns",
            "range": "± 3078.915615152826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830521.7682059152,
            "unit": "ns",
            "range": "± 1512.183608613628"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777871.3538643973,
            "unit": "ns",
            "range": "± 361.1039319206047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 96116.43298969071,
            "unit": "ns",
            "range": "± 10276.97827154949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203231.13846153847,
            "unit": "ns",
            "range": "± 9493.667807209911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175912.23636363636,
            "unit": "ns",
            "range": "± 7056.287548110277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3988430.1428571427,
            "unit": "ns",
            "range": "± 62084.12226581353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9803438.7,
            "unit": "ns",
            "range": "± 223087.85394621175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18031.277777777777,
            "unit": "ns",
            "range": "± 1330.9596438877954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53675.434782608696,
            "unit": "ns",
            "range": "± 4457.947493280154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40489.607142857145,
            "unit": "ns",
            "range": "± 1157.0009872042178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99644.10309278351,
            "unit": "ns",
            "range": "± 17481.139362946604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6176.591836734694,
            "unit": "ns",
            "range": "± 704.2075876690136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18412.426966292136,
            "unit": "ns",
            "range": "± 1569.1763248135835"
          }
        ]
      }
    ]
  }
}