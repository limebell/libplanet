window.BENCHMARK_DATA = {
  "lastUpdate": 1710913310640,
  "repoUrl": "https://github.com/limebell/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1016fbce882309452a45eda1a19c9a8b213801a5",
          "message": "Merge pull request #3681 from OnedgeLee/release/4.0.6\n\n🚀 Release 4.0.6",
          "timestamp": "2024-02-22T19:53:18+09:00",
          "tree_id": "fee32a6b01e16aac4ea8da9bae064a264cf31dbb",
          "url": "https://github.com/limebell/libplanet/commit/1016fbce882309452a45eda1a19c9a8b213801a5"
        },
        "date": 1710913299438,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9555778.521052632,
            "unit": "ns",
            "range": "± 802929.0828732249"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23700269.60714286,
            "unit": "ns",
            "range": "± 1651528.46937116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63925224.76404494,
            "unit": "ns",
            "range": "± 3988026.0280660354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119215971.04301076,
            "unit": "ns",
            "range": "± 10922305.807014268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265436583.23195878,
            "unit": "ns",
            "range": "± 26051697.203589458"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60835.5393258427,
            "unit": "ns",
            "range": "± 6227.838151937746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318471.98,
            "unit": "ns",
            "range": "± 12210.328355560805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248645.09793814432,
            "unit": "ns",
            "range": "± 19733.060192362773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233838.57731958764,
            "unit": "ns",
            "range": "± 19492.404918238375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3898668.566666667,
            "unit": "ns",
            "range": "± 64369.82206689568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3492300.6666666665,
            "unit": "ns",
            "range": "± 51398.75690362653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13045.632183908046,
            "unit": "ns",
            "range": "± 984.4824294195772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63380.28125,
            "unit": "ns",
            "range": "± 8401.387703923961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55370.85263157895,
            "unit": "ns",
            "range": "± 6493.6332549961535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63345.80927835051,
            "unit": "ns",
            "range": "± 12318.484165371856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3805.436842105263,
            "unit": "ns",
            "range": "± 744.3642841096064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12142.54255319149,
            "unit": "ns",
            "range": "± 991.7239325461543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1479542.5760869565,
            "unit": "ns",
            "range": "± 140930.88389596314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3202898.9540229887,
            "unit": "ns",
            "range": "± 174290.31836277613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2596918.1276595746,
            "unit": "ns",
            "range": "± 214715.60232283975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 17406695.205263156,
            "unit": "ns",
            "range": "± 7363272.23062618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4120958.5,
            "unit": "ns",
            "range": "± 253999.1586436485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4155298.14556962,
            "unit": "ns",
            "range": "± 215868.4390419573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4843607.923913044,
            "unit": "ns",
            "range": "± 342500.5165225986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4154218.948979592,
            "unit": "ns",
            "range": "± 275873.1279304517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22274502.604395606,
            "unit": "ns",
            "range": "± 3213306.8008093564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4374670.88764881,
            "unit": "ns",
            "range": "± 101559.0922597378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1331450.5063802083,
            "unit": "ns",
            "range": "± 16022.129013597665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 881447.0576822917,
            "unit": "ns",
            "range": "± 15140.734872943014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1970494.15234375,
            "unit": "ns",
            "range": "± 32951.54593751006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634822.9872395833,
            "unit": "ns",
            "range": "± 9333.1828784547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574876.5639860734,
            "unit": "ns",
            "range": "± 14171.428919241578"
          }
        ]
      }
    ]
  }
}