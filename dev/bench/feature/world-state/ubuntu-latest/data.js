window.BENCHMARK_DATA = {
  "lastUpdate": 1690797314426,
  "repoUrl": "https://github.com/limebell/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e74fb5a87684d8831b8ca42f80318bfced1494ed",
          "message": "Merge pull request #3342 from planetarium/fix/scrypt\n\nUse @noble/hashes/scrypt instead of scrypt-js",
          "timestamp": "2023-07-31T14:02:49+09:00",
          "tree_id": "d8e2fe6ccbed1438294efe071b5c6627b80c49db",
          "url": "https://github.com/limebell/libplanet/commit/e74fb5a87684d8831b8ca42f80318bfced1494ed"
        },
        "date": 1690797310846,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285818.13513513515,
            "unit": "ns",
            "range": "± 9237.576898378355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273830.6052631579,
            "unit": "ns",
            "range": "± 8246.128197243659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240926.375,
            "unit": "ns",
            "range": "± 4605.313624861323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4333535,
            "unit": "ns",
            "range": "± 47305.02682509626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3880738.5714285714,
            "unit": "ns",
            "range": "± 22866.934191986893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20320.864583333332,
            "unit": "ns",
            "range": "± 1285.3695403087427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91209.53684210527,
            "unit": "ns",
            "range": "± 8051.944205304105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72800.5925925926,
            "unit": "ns",
            "range": "± 1979.1335178510524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86509.02083333333,
            "unit": "ns",
            "range": "± 11910.877493839216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4952.114583333333,
            "unit": "ns",
            "range": "± 681.6348284558493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16950.673684210527,
            "unit": "ns",
            "range": "± 1078.374815845144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1354818.775510204,
            "unit": "ns",
            "range": "± 99142.61153255685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2535669.96,
            "unit": "ns",
            "range": "± 61880.19968756835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1734628.9285714286,
            "unit": "ns",
            "range": "± 119244.56236756443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4718440.380952381,
            "unit": "ns",
            "range": "± 110535.47812059087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6220741.049665178,
            "unit": "ns",
            "range": "± 36519.579059336254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2037635.8065104166,
            "unit": "ns",
            "range": "± 3321.1031081091774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348866.259486607,
            "unit": "ns",
            "range": "± 649.8530340203934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586180.679129464,
            "unit": "ns",
            "range": "± 4733.894266508829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822536.2943638393,
            "unit": "ns",
            "range": "± 1866.9146056001723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764370.765485491,
            "unit": "ns",
            "range": "± 1676.43195520876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3297114.2666666666,
            "unit": "ns",
            "range": "± 54267.628025326834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3424657.1428571427,
            "unit": "ns",
            "range": "± 41134.99307413083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4333204.454545454,
            "unit": "ns",
            "range": "± 102534.91777727757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3849759.8,
            "unit": "ns",
            "range": "± 182591.5068500874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6555846.513513514,
            "unit": "ns",
            "range": "± 222330.6345878965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7677863.533333333,
            "unit": "ns",
            "range": "± 44713.17004428923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19193991.583333332,
            "unit": "ns",
            "range": "± 52965.65431134395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51134367.4,
            "unit": "ns",
            "range": "± 379465.10799409664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100743458.73333333,
            "unit": "ns",
            "range": "± 769740.7251056744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202706143,
            "unit": "ns",
            "range": "± 734120.0817775502"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48169.48351648352,
            "unit": "ns",
            "range": "± 2858.963834688821"
          }
        ]
      }
    ]
  }
}