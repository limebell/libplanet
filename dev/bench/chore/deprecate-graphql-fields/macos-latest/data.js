window.BENCHMARK_DATA = {
  "lastUpdate": 1680767730560,
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
      },
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
          "id": "0a725161dc6c381e99e03dbf84b9886381f709aa",
          "message": "chore: deprecate pow block fields  [skip changelog]",
          "timestamp": "2023-04-06T16:36:43+09:00",
          "tree_id": "45db6b6d92a72eb3fc89b9a6f39be841c113bad6",
          "url": "https://github.com/limebell/libplanet/commit/0a725161dc6c381e99e03dbf84b9886381f709aa"
        },
        "date": 1680767722775,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9327063.989361702,
            "unit": "ns",
            "range": "± 361117.0595743804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24830711.685714286,
            "unit": "ns",
            "range": "± 815292.500768058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59797085,
            "unit": "ns",
            "range": "± 1829246.6126379515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119345474.33333333,
            "unit": "ns",
            "range": "± 2503479.6717145517"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242039082.6111111,
            "unit": "ns",
            "range": "± 4949846.099141505"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70209.32222222222,
            "unit": "ns",
            "range": "± 8452.385029513332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 456116.7951807229,
            "unit": "ns",
            "range": "± 24281.05528594259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 375087.3076923077,
            "unit": "ns",
            "range": "± 22835.444168948467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 314217.3703703704,
            "unit": "ns",
            "range": "± 8815.252028109482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6451654.285714285,
            "unit": "ns",
            "range": "± 68387.46819008984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4600567.833333333,
            "unit": "ns",
            "range": "± 152882.296726506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19219.170454545456,
            "unit": "ns",
            "range": "± 1991.9695170404048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100632.63829787234,
            "unit": "ns",
            "range": "± 10119.940218915895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93027.79591836735,
            "unit": "ns",
            "range": "± 9271.875834417173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 259947.94845360826,
            "unit": "ns",
            "range": "± 15333.628073732756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5316.093023255814,
            "unit": "ns",
            "range": "± 668.7045883938496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19825.086021505376,
            "unit": "ns",
            "range": "± 1402.9157576115012"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2002262.99,
            "unit": "ns",
            "range": "± 227954.35861604052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3577248.686746988,
            "unit": "ns",
            "range": "± 183941.5124603953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3010205.4375,
            "unit": "ns",
            "range": "± 257347.3404486961"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7959162.076923077,
            "unit": "ns",
            "range": "± 263011.42980380397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4197477.386363637,
            "unit": "ns",
            "range": "± 154544.73298409858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4183916.1458333335,
            "unit": "ns",
            "range": "± 255553.2889021276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5508805.434210527,
            "unit": "ns",
            "range": "± 278811.370773113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5640020.381443299,
            "unit": "ns",
            "range": "± 494825.5934555891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10113923.576923076,
            "unit": "ns",
            "range": "± 411008.4858695717"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7174872.938038793,
            "unit": "ns",
            "range": "± 204837.53872893582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2316384.6015625,
            "unit": "ns",
            "range": "± 12202.885879248752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1469059.967476223,
            "unit": "ns",
            "range": "± 35897.86447061593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3085513.875,
            "unit": "ns",
            "range": "± 16786.03366374091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 924877.1405598958,
            "unit": "ns",
            "range": "± 12494.039253294182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 867600.5455078125,
            "unit": "ns",
            "range": "± 8855.115444450938"
          }
        ]
      }
    ]
  }
}