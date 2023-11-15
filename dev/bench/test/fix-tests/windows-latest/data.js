window.BENCHMARK_DATA = {
  "lastUpdate": 1700044244019,
  "repoUrl": "https://github.com/limebell/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "distinct": true,
          "id": "671a44e9ebede8660410276cbb524d9fc311e86f",
          "message": "test: fix tests",
          "timestamp": "2023-11-15T19:08:50+09:00",
          "tree_id": "56764ebd85f0dd721d7386e4de37a4a5041d7a86",
          "url": "https://github.com/limebell/libplanet/commit/671a44e9ebede8660410276cbb524d9fc311e86f"
        },
        "date": 1700044232436,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1101485,
            "unit": "ns",
            "range": "± 153340.11472158314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1862860.606060606,
            "unit": "ns",
            "range": "± 82728.71676805207"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1620026.0416666667,
            "unit": "ns",
            "range": "± 162022.71786439908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5899488.059701492,
            "unit": "ns",
            "range": "± 278583.38859437336"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36452.808988764045,
            "unit": "ns",
            "range": "± 2969.392725168215"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5019028.571428572,
            "unit": "ns",
            "range": "± 28914.926370872312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13275075,
            "unit": "ns",
            "range": "± 203212.72385449597"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32295500,
            "unit": "ns",
            "range": "± 460228.5048393533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65860081.25,
            "unit": "ns",
            "range": "± 1274565.5357643769"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 137278180,
            "unit": "ns",
            "range": "± 2184652.664514757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3277523.3723958335,
            "unit": "ns",
            "range": "± 7251.714305154649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1060714.2159598214,
            "unit": "ns",
            "range": "± 2487.5426961419726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744505.0641741072,
            "unit": "ns",
            "range": "± 5808.006924286723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952806.3100961538,
            "unit": "ns",
            "range": "± 3640.117364626735"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 604199.1661658654,
            "unit": "ns",
            "range": "± 1371.698904134934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565200.7747395834,
            "unit": "ns",
            "range": "± 1941.442716528869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2177097.9591836734,
            "unit": "ns",
            "range": "± 77228.07534017858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2221422.448979592,
            "unit": "ns",
            "range": "± 130834.89282897563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2801342.8571428573,
            "unit": "ns",
            "range": "± 111841.11125461277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2749846.987951807,
            "unit": "ns",
            "range": "± 141309.3823696607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6878160.91954023,
            "unit": "ns",
            "range": "± 392301.58526801266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180988.46153846153,
            "unit": "ns",
            "range": "± 9044.60778972367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173764.77272727274,
            "unit": "ns",
            "range": "± 9983.216257514665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139900,
            "unit": "ns",
            "range": "± 4292.527166330367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2671988.888888889,
            "unit": "ns",
            "range": "± 54427.70584361142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2475822.222222222,
            "unit": "ns",
            "range": "± 52796.630413375206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11285.714285714286,
            "unit": "ns",
            "range": "± 2598.334121352673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54537.234042553195,
            "unit": "ns",
            "range": "± 6619.7323800396025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43731.914893617024,
            "unit": "ns",
            "range": "± 1689.7525395078885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 56815.15151515151,
            "unit": "ns",
            "range": "± 10912.232077140785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2701.0416666666665,
            "unit": "ns",
            "range": "± 537.2434108075597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12698.924731182795,
            "unit": "ns",
            "range": "± 2333.801462423947"
          }
        ]
      }
    ]
  }
}