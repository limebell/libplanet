window.BENCHMARK_DATA = {
  "lastUpdate": 1689589848111,
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
          "id": "4213b00e9ddebf34119a731243f6a3afaf14e07d",
          "message": "chore: fix build",
          "timestamp": "2023-07-17T19:13:46+09:00",
          "tree_id": "ccbe3b24dbf68de772435ef30693e3fd63f70a65",
          "url": "https://github.com/limebell/libplanet/commit/4213b00e9ddebf34119a731243f6a3afaf14e07d"
        },
        "date": 1689589840590,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9168375.844827587,
            "unit": "ns",
            "range": "± 1318451.490306882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21396030.45238095,
            "unit": "ns",
            "range": "± 460385.66122420406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52244880.96428572,
            "unit": "ns",
            "range": "± 1492861.7948701743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104110104.41666667,
            "unit": "ns",
            "range": "± 2677932.7807750762"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218051403.5,
            "unit": "ns",
            "range": "± 3610085.460612234"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64861.9375,
            "unit": "ns",
            "range": "± 8615.324953779196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 355392.5416666667,
            "unit": "ns",
            "range": "± 40256.328216467155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 337919.206185567,
            "unit": "ns",
            "range": "± 34587.68509766703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 319918.8461538461,
            "unit": "ns",
            "range": "± 7545.8362966197865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4299001.833333333,
            "unit": "ns",
            "range": "± 168349.82593325977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4069534.5,
            "unit": "ns",
            "range": "± 211169.77517952726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25274.457894736843,
            "unit": "ns",
            "range": "± 3677.79343511837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116578.65053763441,
            "unit": "ns",
            "range": "± 14670.572908959355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118253.7191011236,
            "unit": "ns",
            "range": "± 7383.285216667018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125099.68947368421,
            "unit": "ns",
            "range": "± 15252.468933240365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8715.802083333334,
            "unit": "ns",
            "range": "± 1527.0172757427033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25393.8125,
            "unit": "ns",
            "range": "± 4322.945541404306"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1662782.84375,
            "unit": "ns",
            "range": "± 198639.61943870684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2978734.6794871795,
            "unit": "ns",
            "range": "± 153097.9878462312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2092358.469387755,
            "unit": "ns",
            "range": "± 192102.3850391665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5710856.014285714,
            "unit": "ns",
            "range": "± 184931.73081904504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3622101.9285714286,
            "unit": "ns",
            "range": "± 381311.2284966626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3794230.285714286,
            "unit": "ns",
            "range": "± 360792.5814996698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4916382.921348315,
            "unit": "ns",
            "range": "± 613443.9182787326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4396442,
            "unit": "ns",
            "range": "± 524873.3669897922"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7739265.5051546395,
            "unit": "ns",
            "range": "± 601206.7323811842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8342084.433832908,
            "unit": "ns",
            "range": "± 332406.45454068435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2235572.0401041666,
            "unit": "ns",
            "range": "± 26015.920386013622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1454319.96953125,
            "unit": "ns",
            "range": "± 20030.071049147216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3291913.3033854165,
            "unit": "ns",
            "range": "± 47623.936515643436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 875598.8426231971,
            "unit": "ns",
            "range": "± 9666.29872621667"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 810558.9289713542,
            "unit": "ns",
            "range": "± 9299.43304578363"
          }
        ]
      }
    ]
  }
}