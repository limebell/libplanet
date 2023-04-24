window.BENCHMARK_DATA = {
  "lastUpdate": 1682311058666,
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
          "id": "09e6e94f908526cacafcb73943e410472bcbc406",
          "message": "chore: deprecate pow block fields  [skip changelog]",
          "timestamp": "2023-04-07T13:49:10+09:00",
          "tree_id": "a74b3a7402e6c8976c8120da62ccbd6171394861",
          "url": "https://github.com/limebell/libplanet/commit/09e6e94f908526cacafcb73943e410472bcbc406"
        },
        "date": 1680843929758,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8025603.557692308,
            "unit": "ns",
            "range": "± 331106.53212810314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19600083.944444444,
            "unit": "ns",
            "range": "± 966851.0268668103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51838432.384615384,
            "unit": "ns",
            "range": "± 2411295.845903691"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98269495.03225806,
            "unit": "ns",
            "range": "± 2609622.7557713585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200793908.85714287,
            "unit": "ns",
            "range": "± 2443716.610397143"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63613.864583333336,
            "unit": "ns",
            "range": "± 10181.294362051049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 374416.24468085106,
            "unit": "ns",
            "range": "± 22278.175022594125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307543.0714285714,
            "unit": "ns",
            "range": "± 15628.379019413247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297512.9375,
            "unit": "ns",
            "range": "± 31197.27846862101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5504533.055555556,
            "unit": "ns",
            "range": "± 113197.65205030807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4079959.54,
            "unit": "ns",
            "range": "± 104533.98357889809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20428.154639175256,
            "unit": "ns",
            "range": "± 6012.571684153765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90749.15463917526,
            "unit": "ns",
            "range": "± 12139.060553076348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99941.17,
            "unit": "ns",
            "range": "± 17956.600603494924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 238736.1224489796,
            "unit": "ns",
            "range": "± 22071.852689914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6500.556701030928,
            "unit": "ns",
            "range": "± 1578.7683356620132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18265.79120879121,
            "unit": "ns",
            "range": "± 2493.26966726418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1535948.2978723405,
            "unit": "ns",
            "range": "± 133758.9345072413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3023384.0375,
            "unit": "ns",
            "range": "± 157146.17146976938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2599773.212765957,
            "unit": "ns",
            "range": "± 241387.5907069452"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6833590.55319149,
            "unit": "ns",
            "range": "± 388773.4185732224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3294150.304347826,
            "unit": "ns",
            "range": "± 125843.09722593617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3406456.5263157897,
            "unit": "ns",
            "range": "± 215602.72633676897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4643307.527777778,
            "unit": "ns",
            "range": "± 227374.42475080563"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4478242.720930233,
            "unit": "ns",
            "range": "± 241410.70977454708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8313680.9387755105,
            "unit": "ns",
            "range": "± 313134.73773883184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6856125.656510416,
            "unit": "ns",
            "range": "± 199245.17822853624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2021223.538773148,
            "unit": "ns",
            "range": "± 54235.17502895809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1371184.1893028845,
            "unit": "ns",
            "range": "± 18907.65958502138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2596040.056315104,
            "unit": "ns",
            "range": "± 62963.53377908855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832022.7926432291,
            "unit": "ns",
            "range": "± 13089.109512087509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783003.3782301683,
            "unit": "ns",
            "range": "± 12422.265605959336"
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
          "id": "883be716e2698bb13f7d8ca90df2cc3c5ea64697",
          "message": "﻿chore: deprecate pow block fields  [skip changelog]",
          "timestamp": "2023-04-21T18:50:03+09:00",
          "tree_id": "05a3e48e6ed8d0cac3bb2078a534eee8f7a848b6",
          "url": "https://github.com/limebell/libplanet/commit/883be716e2698bb13f7d8ca90df2cc3c5ea64697"
        },
        "date": 1682072057772,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8783838.070707072,
            "unit": "ns",
            "range": "± 516624.00651950965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21683185.698113207,
            "unit": "ns",
            "range": "± 895864.66422037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54025142.591836736,
            "unit": "ns",
            "range": "± 3579128.6201543757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112734447.33333333,
            "unit": "ns",
            "range": "± 6719949.845624777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234954825.48076922,
            "unit": "ns",
            "range": "± 9680246.612571849"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78583.14444444445,
            "unit": "ns",
            "range": "± 15612.669280169071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 444360.98863636365,
            "unit": "ns",
            "range": "± 51958.53764544133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 384469.824742268,
            "unit": "ns",
            "range": "± 61921.19280585778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 361276.5215053763,
            "unit": "ns",
            "range": "± 33529.98576744031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6088761.65625,
            "unit": "ns",
            "range": "± 456925.44812925725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3763903.8333333335,
            "unit": "ns",
            "range": "± 136475.38865571198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19393.666666666668,
            "unit": "ns",
            "range": "± 2161.0609649850285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116064.09375,
            "unit": "ns",
            "range": "± 26181.365833889577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 131950.1,
            "unit": "ns",
            "range": "± 11194.069504364325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 155672.24226804124,
            "unit": "ns",
            "range": "± 24717.65163901024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9083.963917525773,
            "unit": "ns",
            "range": "± 2344.150592707017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22803.90425531915,
            "unit": "ns",
            "range": "± 3613.6953536530928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1698812.101010101,
            "unit": "ns",
            "range": "± 183202.8539550501"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3113054.966666667,
            "unit": "ns",
            "range": "± 179712.67675551915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2884002.4587628865,
            "unit": "ns",
            "range": "± 359922.62584619364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8167649.267676768,
            "unit": "ns",
            "range": "± 985460.5414778893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4135475.0505050505,
            "unit": "ns",
            "range": "± 297719.1683118051"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3707730.09375,
            "unit": "ns",
            "range": "± 250242.98335281538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5051733.810526316,
            "unit": "ns",
            "range": "± 350614.7286440402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5041043.698924731,
            "unit": "ns",
            "range": "± 626609.0265791009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9601596.68367347,
            "unit": "ns",
            "range": "± 777908.4210227117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7402093.72171875,
            "unit": "ns",
            "range": "± 554763.1109504921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2330893.7610677085,
            "unit": "ns",
            "range": "± 102872.21886692608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1508187.3108326981,
            "unit": "ns",
            "range": "± 53998.956241331536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3615685.751640625,
            "unit": "ns",
            "range": "± 291134.7186793684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1062348.966966712,
            "unit": "ns",
            "range": "± 48667.28303432748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 838627.9164341518,
            "unit": "ns",
            "range": "± 28108.686045772272"
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
          "id": "717b8af052d62e22e87d41d7ebf2e0865e1a25b2",
          "message": "﻿chore: deprecate pow block fields  [skip changelog]",
          "timestamp": "2023-04-24T13:22:51+09:00",
          "tree_id": "636e83e2c030b6900d125550d30436a969802ab1",
          "url": "https://github.com/limebell/libplanet/commit/717b8af052d62e22e87d41d7ebf2e0865e1a25b2"
        },
        "date": 1682311052765,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7651302.821428572,
            "unit": "ns",
            "range": "± 410478.9778898816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18811677,
            "unit": "ns",
            "range": "± 564745.6748785834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50626016.448275864,
            "unit": "ns",
            "range": "± 2205765.137290954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99582718.46875,
            "unit": "ns",
            "range": "± 3018793.792232463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205739382.2,
            "unit": "ns",
            "range": "± 3509521.2847007294"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56416.12637362637,
            "unit": "ns",
            "range": "± 8331.241893083796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 358107.0714285714,
            "unit": "ns",
            "range": "± 17406.876790611226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 311674.3163265306,
            "unit": "ns",
            "range": "± 24543.17913375709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 260746.72784810126,
            "unit": "ns",
            "range": "± 13233.82377339854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5280438.269230769,
            "unit": "ns",
            "range": "± 144285.85859842473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3624698.1710526315,
            "unit": "ns",
            "range": "± 182873.44771189996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17832.14285714286,
            "unit": "ns",
            "range": "± 2872.8827411515067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87314.13917525773,
            "unit": "ns",
            "range": "± 10308.868104074245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81589.25280898876,
            "unit": "ns",
            "range": "± 6590.459747862986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 106785.97872340426,
            "unit": "ns",
            "range": "± 14547.647466007737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5056.2,
            "unit": "ns",
            "range": "± 555.4120478141816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16177.158536585366,
            "unit": "ns",
            "range": "± 1700.882481330382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1641807.4191919193,
            "unit": "ns",
            "range": "± 237807.09391830798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3011575.2792207794,
            "unit": "ns",
            "range": "± 154386.40591127385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2581152.237373737,
            "unit": "ns",
            "range": "± 233338.82667326686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7275180.510638298,
            "unit": "ns",
            "range": "± 559156.7635743686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3305940.734375,
            "unit": "ns",
            "range": "± 140220.81835841257"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3414192.066666667,
            "unit": "ns",
            "range": "± 128748.69673998821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4479669.9,
            "unit": "ns",
            "range": "± 146903.5313773274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4306230.397959184,
            "unit": "ns",
            "range": "± 250894.0058319486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8122827.297297297,
            "unit": "ns",
            "range": "± 399481.29692673543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6222823.239783654,
            "unit": "ns",
            "range": "± 39915.495917726694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1944654.1178850445,
            "unit": "ns",
            "range": "± 15787.062883739307"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1269975.4861778845,
            "unit": "ns",
            "range": "± 7242.410279976438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2408202.8214285714,
            "unit": "ns",
            "range": "± 21102.996412688328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 821179.4155598958,
            "unit": "ns",
            "range": "± 6417.8014099125985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747876.2865885417,
            "unit": "ns",
            "range": "± 5309.06866080148"
          }
        ]
      }
    ]
  }
}