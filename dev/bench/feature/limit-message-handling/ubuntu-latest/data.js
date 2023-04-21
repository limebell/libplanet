window.BENCHMARK_DATA = {
  "lastUpdate": 1682071190772,
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
          "id": "a9709811647b6144a8f97265bc466fd564ae74b2",
          "message": "docs: update changelog",
          "timestamp": "2023-04-21T18:46:29+09:00",
          "tree_id": "c5cd54d5c9e2fb7e61b2ce1d07353d27ef9db935",
          "url": "https://github.com/limebell/libplanet/commit/a9709811647b6144a8f97265bc466fd564ae74b2"
        },
        "date": 1682071187540,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7584031.933333334,
            "unit": "ns",
            "range": "± 46134.20478880326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19484137.933333334,
            "unit": "ns",
            "range": "± 108487.96527230018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49835842.266666666,
            "unit": "ns",
            "range": "± 127356.26493618301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99165974.53846154,
            "unit": "ns",
            "range": "± 284410.86154001905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199063670.8,
            "unit": "ns",
            "range": "± 1727853.5263161962"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46230.31578947369,
            "unit": "ns",
            "range": "± 2660.53488168506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1384375.2842105264,
            "unit": "ns",
            "range": "± 79221.6122264549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2580939.7804878047,
            "unit": "ns",
            "range": "± 91163.57795839087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2199370.4657534244,
            "unit": "ns",
            "range": "± 105902.34668369437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5384915.4,
            "unit": "ns",
            "range": "± 138418.87190246134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6120298.622916667,
            "unit": "ns",
            "range": "± 19717.721434803945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1832135.362890625,
            "unit": "ns",
            "range": "± 3014.2088939986506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363376.4248046875,
            "unit": "ns",
            "range": "± 815.9676678506174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2562420.5876116073,
            "unit": "ns",
            "range": "± 1042.3481125740404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808058.4976981027,
            "unit": "ns",
            "range": "± 469.3033341029163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740979.65703125,
            "unit": "ns",
            "range": "± 517.8993538544142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324462.18604651163,
            "unit": "ns",
            "range": "± 11316.120587685462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266419.0256410256,
            "unit": "ns",
            "range": "± 9308.022760492777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234920.26666666666,
            "unit": "ns",
            "range": "± 4091.403993508248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5588226.533333333,
            "unit": "ns",
            "range": "± 32138.41019684938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3822364.8571428573,
            "unit": "ns",
            "range": "± 28583.908347872242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18132.854166666668,
            "unit": "ns",
            "range": "± 1920.3476219255429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84615.7042253521,
            "unit": "ns",
            "range": "± 4151.008488115926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74640.11764705883,
            "unit": "ns",
            "range": "± 1439.5498377250153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89704.44594594595,
            "unit": "ns",
            "range": "± 3489.3035146839948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4876.979166666667,
            "unit": "ns",
            "range": "± 336.3477830168513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16166.79381443299,
            "unit": "ns",
            "range": "± 1398.1642125937879"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3197790.5789473685,
            "unit": "ns",
            "range": "± 60860.308359312825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3350772.1764705884,
            "unit": "ns",
            "range": "± 64475.16120688968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4103450.4285714286,
            "unit": "ns",
            "range": "± 53717.27706844746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4178775.8846153845,
            "unit": "ns",
            "range": "± 111021.9085951334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7118719.321428572,
            "unit": "ns",
            "range": "± 193365.17691913125"
          }
        ]
      }
    ]
  }
}