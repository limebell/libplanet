window.BENCHMARK_DATA = {
  "lastUpdate": 1684224598160,
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
          "id": "a8bd0619eacfdf0e6f42a496360e481a2d05bec3",
          "message": "chore: exclude seed peers from gossip hearbeat target  [skip changelog]\n\n(cherry picked from commit e0db5f2fc026fed656d766bc6149518cbcac0521)",
          "timestamp": "2023-05-16T16:52:23+09:00",
          "tree_id": "e9bd47d902f3ae63f7ec596f1ebcc24f8165d46b",
          "url": "https://github.com/limebell/libplanet/commit/a8bd0619eacfdf0e6f42a496360e481a2d05bec3"
        },
        "date": 1684224583274,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1299724.2105263157,
            "unit": "ns",
            "range": "± 100326.80717237052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2404765.9574468085,
            "unit": "ns",
            "range": "± 86651.76000268757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2057440.8163265307,
            "unit": "ns",
            "range": "± 119401.24922651569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5068251.111111111,
            "unit": "ns",
            "range": "± 189534.07899639077"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42989.47368421053,
            "unit": "ns",
            "range": "± 2105.711531200696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6805046.153846154,
            "unit": "ns",
            "range": "± 16022.308166252418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17242363.333333332,
            "unit": "ns",
            "range": "± 115861.33255298068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 43975013.333333336,
            "unit": "ns",
            "range": "± 460129.3092578381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 89013486.66666667,
            "unit": "ns",
            "range": "± 835262.5616848757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 174932914.2857143,
            "unit": "ns",
            "range": "± 709425.0172955808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4876401.432291667,
            "unit": "ns",
            "range": "± 13641.220840859914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1521591.7903645833,
            "unit": "ns",
            "range": "± 6247.541501180644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146146.6145833333,
            "unit": "ns",
            "range": "± 2468.540937092005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2592080.4129464286,
            "unit": "ns",
            "range": "± 12270.312873885945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 804064.7330729166,
            "unit": "ns",
            "range": "± 5750.07343824257"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726896.8017578125,
            "unit": "ns",
            "range": "± 834.0856200322885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2961286.9565217393,
            "unit": "ns",
            "range": "± 73944.07164354216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3080633.3333333335,
            "unit": "ns",
            "range": "± 36944.933282360864"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3843460.8695652173,
            "unit": "ns",
            "range": "± 76292.6467273487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3841090.625,
            "unit": "ns",
            "range": "± 99049.350226248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6600437.096774193,
            "unit": "ns",
            "range": "± 198211.03188594303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 290617.2413793103,
            "unit": "ns",
            "range": "± 8264.211524291148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238288.88888888888,
            "unit": "ns",
            "range": "± 4865.108533810077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211789.47368421053,
            "unit": "ns",
            "range": "± 7107.962397567583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5178246.666666667,
            "unit": "ns",
            "range": "± 34811.03820560916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3598957.1428571427,
            "unit": "ns",
            "range": "± 27994.65510210323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15974.468085106382,
            "unit": "ns",
            "range": "± 1244.4229279877763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76785.89743589744,
            "unit": "ns",
            "range": "± 3958.968918599248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67010.52631578948,
            "unit": "ns",
            "range": "± 4519.943364459021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 154238.77551020408,
            "unit": "ns",
            "range": "± 13650.50229545261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5109.183673469388,
            "unit": "ns",
            "range": "± 717.2523078615772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15859.183673469388,
            "unit": "ns",
            "range": "± 1512.6161357607175"
          }
        ]
      }
    ]
  }
}