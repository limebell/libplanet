window.BENCHMARK_DATA = {
  "lastUpdate": 1700127974404,
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
          "id": "a3fd186d8d65fdea7a31b5277958b57334a80f02",
          "message": "temp",
          "timestamp": "2023-11-16T18:06:48+09:00",
          "tree_id": "38efb60a980c476e68844c384378f140a74c39fe",
          "url": "https://github.com/limebell/libplanet/commit/a3fd186d8d65fdea7a31b5277958b57334a80f02"
        },
        "date": 1700127970844,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5577448.142857143,
            "unit": "ns",
            "range": "± 45545.884008677094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14370452.307692308,
            "unit": "ns",
            "range": "± 121742.16038167482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36756199.4,
            "unit": "ns",
            "range": "± 186219.3398241516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74873769.14285715,
            "unit": "ns",
            "range": "± 526278.7255016778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148724758.46153846,
            "unit": "ns",
            "range": "± 1291683.037832851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1043702.7,
            "unit": "ns",
            "range": "± 102529.44031635916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1909044.0192307692,
            "unit": "ns",
            "range": "± 78675.13624541694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1605146.7011494252,
            "unit": "ns",
            "range": "± 115102.52806541297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6519550.411764706,
            "unit": "ns",
            "range": "± 164818.02716993354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2393399.5636363635,
            "unit": "ns",
            "range": "± 101234.3570236471"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2551982.8529411764,
            "unit": "ns",
            "range": "± 76976.10645591878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3271662.1914893617,
            "unit": "ns",
            "range": "± 126668.13413810023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3192725,
            "unit": "ns",
            "range": "± 38329.0311100259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7450446.5,
            "unit": "ns",
            "range": "± 262922.5763971845"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40153.69587628866,
            "unit": "ns",
            "range": "± 5327.70771267057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3652896.9166666665,
            "unit": "ns",
            "range": "± 20608.350955209586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1187747.9803185095,
            "unit": "ns",
            "range": "± 2654.6369202938567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765971.5852864584,
            "unit": "ns",
            "range": "± 12889.178864316433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957299.9052083334,
            "unit": "ns",
            "range": "± 26556.8245179514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625352.8549107143,
            "unit": "ns",
            "range": "± 9212.430239369898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564123.4165736607,
            "unit": "ns",
            "range": "± 4366.016046855941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201740.58695652173,
            "unit": "ns",
            "range": "± 7624.7409335256525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192488.53968253967,
            "unit": "ns",
            "range": "± 8753.817087834934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170027.94444444444,
            "unit": "ns",
            "range": "± 3115.946753910056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3119313.714285714,
            "unit": "ns",
            "range": "± 47645.736611964596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2842855.214285714,
            "unit": "ns",
            "range": "± 37741.41017335768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15265.010638297872,
            "unit": "ns",
            "range": "± 2745.5104378606425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62776.13684210526,
            "unit": "ns",
            "range": "± 6081.819773527555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75080.79,
            "unit": "ns",
            "range": "± 18375.711129121213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84175.79,
            "unit": "ns",
            "range": "± 23785.496015703146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5780.656565656565,
            "unit": "ns",
            "range": "± 1830.1958251510493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15294.041237113403,
            "unit": "ns",
            "range": "± 2887.088819632755"
          }
        ]
      }
    ]
  }
}