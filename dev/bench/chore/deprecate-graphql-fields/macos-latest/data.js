window.BENCHMARK_DATA = {
  "lastUpdate": 1680767613934,
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
          "id": "b382c82bfb6ccb3dddd5cbb05fe75a6667e430d5",
          "message": "chore: deprecate pow block fields",
          "timestamp": "2023-04-06T16:35:17+09:00",
          "tree_id": "45db6b6d92a72eb3fc89b9a6f39be841c113bad6",
          "url": "https://github.com/limebell/libplanet/commit/b382c82bfb6ccb3dddd5cbb05fe75a6667e430d5"
        },
        "date": 1680767607273,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7739174.2,
            "unit": "ns",
            "range": "± 98992.65126130756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19749048.135135137,
            "unit": "ns",
            "range": "± 979542.8325587754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54504697.368421055,
            "unit": "ns",
            "range": "± 3050212.3745041373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113723370.05263157,
            "unit": "ns",
            "range": "± 2490139.9708510023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208147013.5625,
            "unit": "ns",
            "range": "± 3518838.5466725607"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75764.44623655915,
            "unit": "ns",
            "range": "± 10445.590735439306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 422802.2684210526,
            "unit": "ns",
            "range": "± 51182.74942446847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321151.3043478261,
            "unit": "ns",
            "range": "± 34652.980426895374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306709.3947368421,
            "unit": "ns",
            "range": "± 28587.223804347734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5615451.5,
            "unit": "ns",
            "range": "± 132330.07463422668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4096274.75,
            "unit": "ns",
            "range": "± 54861.34854360333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19403.836734693876,
            "unit": "ns",
            "range": "± 2537.014052575694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95493.27083333333,
            "unit": "ns",
            "range": "± 15529.621261168957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112790.43157894736,
            "unit": "ns",
            "range": "± 10375.623766588718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 248070.39361702127,
            "unit": "ns",
            "range": "± 23642.023483559165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5658.511627906977,
            "unit": "ns",
            "range": "± 1011.5621988865253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15916.357142857143,
            "unit": "ns",
            "range": "± 1427.067619769346"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1636005.752631579,
            "unit": "ns",
            "range": "± 149875.6218615366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3108021.5392156863,
            "unit": "ns",
            "range": "± 124480.21735343504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2594894.747368421,
            "unit": "ns",
            "range": "± 163597.13577435823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6948565.528571429,
            "unit": "ns",
            "range": "± 215517.55268375075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3427533.5714285714,
            "unit": "ns",
            "range": "± 98000.43821309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3504944.6555555556,
            "unit": "ns",
            "range": "± 194020.51878974508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4670137.216216216,
            "unit": "ns",
            "range": "± 148633.79946984077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4533252.170212766,
            "unit": "ns",
            "range": "± 325921.73366891366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9277407.407894736,
            "unit": "ns",
            "range": "± 467319.2724755721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6312793.102678572,
            "unit": "ns",
            "range": "± 65286.4598149391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1957832.1638734879,
            "unit": "ns",
            "range": "± 59080.13143285955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1308189.5325137868,
            "unit": "ns",
            "range": "± 25253.707801475222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2843470.747488839,
            "unit": "ns",
            "range": "± 46075.87021737089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 879010.725390625,
            "unit": "ns",
            "range": "± 8677.31390322386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 753254.6591796875,
            "unit": "ns",
            "range": "± 13349.197661020124"
          }
        ]
      }
    ]
  }
}