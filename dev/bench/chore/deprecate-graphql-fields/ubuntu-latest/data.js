window.BENCHMARK_DATA = {
  "lastUpdate": 1682071646070,
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
        "date": 1680767491360,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3959641.947368421,
            "unit": "ns",
            "range": "± 126014.02410927671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4200244.541666667,
            "unit": "ns",
            "range": "± 107644.37670362178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4839517.978260869,
            "unit": "ns",
            "range": "± 184527.35938276822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5194657.4,
            "unit": "ns",
            "range": "± 184052.6007386378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8835099.824175823,
            "unit": "ns",
            "range": "± 491661.6922517079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8881244.181818182,
            "unit": "ns",
            "range": "± 278680.934440878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24879767.06451613,
            "unit": "ns",
            "range": "± 742436.5452883245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61274803.166666664,
            "unit": "ns",
            "range": "± 1557214.4220524216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122418942.1,
            "unit": "ns",
            "range": "± 3656159.3517186134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244895210.4,
            "unit": "ns",
            "range": "± 5406417.308301764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1624161.197802198,
            "unit": "ns",
            "range": "± 127501.50230986126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3119315.921875,
            "unit": "ns",
            "range": "± 142336.1903739467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2615127.623529412,
            "unit": "ns",
            "range": "± 141014.11695633753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6906511.51,
            "unit": "ns",
            "range": "± 442142.6133817119"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54966.90697674418,
            "unit": "ns",
            "range": "± 3005.4720119765348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6904044.6265625,
            "unit": "ns",
            "range": "± 58516.07943307386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2125705.494010417,
            "unit": "ns",
            "range": "± 14893.111538047453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1573371.1059895833,
            "unit": "ns",
            "range": "± 10083.17748117526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3059871.080208333,
            "unit": "ns",
            "range": "± 30153.281873453907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 978387.9595052083,
            "unit": "ns",
            "range": "± 17209.363515190496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 887123.8386067708,
            "unit": "ns",
            "range": "± 4878.764048381081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 394656.5714285714,
            "unit": "ns",
            "range": "± 17772.391825992072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325465.46,
            "unit": "ns",
            "range": "± 12559.908813217022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274941.358974359,
            "unit": "ns",
            "range": "± 9501.700151156274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6784218.066666666,
            "unit": "ns",
            "range": "± 126815.23359341489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4845912.384615385,
            "unit": "ns",
            "range": "± 37821.458000140745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22365.032967032967,
            "unit": "ns",
            "range": "± 1619.8907813014873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105157.21348314607,
            "unit": "ns",
            "range": "± 5954.136803845462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96182.58510638298,
            "unit": "ns",
            "range": "± 6145.570990925658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 218192.306122449,
            "unit": "ns",
            "range": "± 17814.380858431214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7240.094736842106,
            "unit": "ns",
            "range": "± 764.2315577808695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21801.291666666668,
            "unit": "ns",
            "range": "± 2013.228524778659"
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
        "date": 1680767562575,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3108048.3061224488,
            "unit": "ns",
            "range": "± 276366.10254002403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3264410.288659794,
            "unit": "ns",
            "range": "± 280844.6604639727"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4131632.2474226803,
            "unit": "ns",
            "range": "± 344731.9050318617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4154628.3125,
            "unit": "ns",
            "range": "± 393323.263701482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7470180.135416667,
            "unit": "ns",
            "range": "± 527983.8936494504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7299146.05050505,
            "unit": "ns",
            "range": "± 451956.63433190127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18942035.95652174,
            "unit": "ns",
            "range": "± 1585289.9231438406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49335360.86868687,
            "unit": "ns",
            "range": "± 3082505.402180703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97026817.90476191,
            "unit": "ns",
            "range": "± 4184487.5330557995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188184740.09375,
            "unit": "ns",
            "range": "± 5819793.568304249"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1386802.357142857,
            "unit": "ns",
            "range": "± 196742.84016678156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2704630.8229166665,
            "unit": "ns",
            "range": "± 238115.87703110985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2179055.875,
            "unit": "ns",
            "range": "± 234849.76214374517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6582745.393939394,
            "unit": "ns",
            "range": "± 692982.0661128667"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59324.229166666664,
            "unit": "ns",
            "range": "± 15370.03272638311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5714633.348958333,
            "unit": "ns",
            "range": "± 155103.2508390549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1777932.6180245536,
            "unit": "ns",
            "range": "± 20943.101038588367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1320110.3246299343,
            "unit": "ns",
            "range": "± 28099.099172607996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2605783.161339962,
            "unit": "ns",
            "range": "± 80945.85299097045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833469.0124348958,
            "unit": "ns",
            "range": "± 15405.312919223448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769851.1023220486,
            "unit": "ns",
            "range": "± 15842.191475476404"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 365520.62626262626,
            "unit": "ns",
            "range": "± 60008.75837327208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298504.10638297873,
            "unit": "ns",
            "range": "± 46164.282090305394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252711.95454545456,
            "unit": "ns",
            "range": "± 30901.44201854496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5347817.010638298,
            "unit": "ns",
            "range": "± 375175.6682359481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3964224.163265306,
            "unit": "ns",
            "range": "± 360077.2597740455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22401.131313131315,
            "unit": "ns",
            "range": "± 10404.710513528766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92416.10416666667,
            "unit": "ns",
            "range": "± 14724.493003141446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88464.42268041238,
            "unit": "ns",
            "range": "± 16828.009101789103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 208415.75,
            "unit": "ns",
            "range": "± 38836.78952176525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4698.95652173913,
            "unit": "ns",
            "range": "± 424.16438636488124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24879.1,
            "unit": "ns",
            "range": "± 12145.893901922896"
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
        "date": 1680843758890,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7913203.846153846,
            "unit": "ns",
            "range": "± 76998.73051426037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21448002.846153848,
            "unit": "ns",
            "range": "± 133263.62257060636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54060211.86666667,
            "unit": "ns",
            "range": "± 574349.7949176799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105236267.28571428,
            "unit": "ns",
            "range": "± 1344534.0552562855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219168381.8,
            "unit": "ns",
            "range": "± 3790913.986051615"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49073.753246753244,
            "unit": "ns",
            "range": "± 2233.2606510839955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1440089.5319148935,
            "unit": "ns",
            "range": "± 81787.9843515823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2670204.2972972975,
            "unit": "ns",
            "range": "± 90302.7204923851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2319940.6808510637,
            "unit": "ns",
            "range": "± 132123.60959939926"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5475993.137931035,
            "unit": "ns",
            "range": "± 145805.12601774922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5929309.546875,
            "unit": "ns",
            "range": "± 29357.633170727673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1836430.7604166667,
            "unit": "ns",
            "range": "± 6156.151547434059"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1353579.9346354166,
            "unit": "ns",
            "range": "± 4418.612931782988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2608591.219050481,
            "unit": "ns",
            "range": "± 3401.096584617419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855420.9606119791,
            "unit": "ns",
            "range": "± 3577.3226352072616"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756827.865373884,
            "unit": "ns",
            "range": "± 825.0269020460406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334409.75675675675,
            "unit": "ns",
            "range": "± 11191.095824124854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281348.0888888889,
            "unit": "ns",
            "range": "± 10700.544690516335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232928.07692307694,
            "unit": "ns",
            "range": "± 3237.579817845898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5717340,
            "unit": "ns",
            "range": "± 46425.200374981076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4081563.8571428573,
            "unit": "ns",
            "range": "± 48030.265739999246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19773.302083333332,
            "unit": "ns",
            "range": "± 1657.2421931427093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91797,
            "unit": "ns",
            "range": "± 4697.85214486365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82725.0101010101,
            "unit": "ns",
            "range": "± 6894.066812425207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 199996.86458333334,
            "unit": "ns",
            "range": "± 16774.069252785943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7137.897959183673,
            "unit": "ns",
            "range": "± 869.3086539728458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21222.05154639175,
            "unit": "ns",
            "range": "± 1968.38943984635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3361267.4736842103,
            "unit": "ns",
            "range": "± 115702.7980886951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3779081.4444444445,
            "unit": "ns",
            "range": "± 123777.04781823173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4179657.846153846,
            "unit": "ns",
            "range": "± 67764.4186438652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4531270.578947368,
            "unit": "ns",
            "range": "± 154117.10323605224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7161285.066666666,
            "unit": "ns",
            "range": "± 122174.34959893917"
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
        "date": 1682071642400,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10518696.9375,
            "unit": "ns",
            "range": "± 204502.66137680417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29741477.576923076,
            "unit": "ns",
            "range": "± 1222577.6342565757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65862500,
            "unit": "ns",
            "range": "± 1639192.5379755634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131114770.06666666,
            "unit": "ns",
            "range": "± 793591.6144476566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261094493.7857143,
            "unit": "ns",
            "range": "± 1383691.1343977011"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62072.494505494506,
            "unit": "ns",
            "range": "± 7098.526822710981"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1781309.4736842106,
            "unit": "ns",
            "range": "± 131778.32237946262"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3299275.519230769,
            "unit": "ns",
            "range": "± 134467.54053885367"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2780952.673076923,
            "unit": "ns",
            "range": "± 109097.13371852126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7393518.831578948,
            "unit": "ns",
            "range": "± 471661.39758286596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7383151.783333333,
            "unit": "ns",
            "range": "± 87877.63812648554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2225084.9911458334,
            "unit": "ns",
            "range": "± 27521.271071773113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1726623.4486929087,
            "unit": "ns",
            "range": "± 41802.92277251404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3058921.314583333,
            "unit": "ns",
            "range": "± 29229.515573532703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1001497.8060599662,
            "unit": "ns",
            "range": "± 33895.24226784289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 922834.0237630209,
            "unit": "ns",
            "range": "± 1886.4177348724006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 429919.5882352941,
            "unit": "ns",
            "range": "± 7712.452269372754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 357061.09375,
            "unit": "ns",
            "range": "± 16356.93929020501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285220.7555555556,
            "unit": "ns",
            "range": "± 10389.367642309646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6978969.357142857,
            "unit": "ns",
            "range": "± 68167.22284388042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4611883.6,
            "unit": "ns",
            "range": "± 56910.68981658893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26731.01052631579,
            "unit": "ns",
            "range": "± 2763.523592955955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117024.23157894737,
            "unit": "ns",
            "range": "± 7739.095319953916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103779.33333333333,
            "unit": "ns",
            "range": "± 7064.494220692865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130191.98958333333,
            "unit": "ns",
            "range": "± 19007.047508196476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8438.404255319148,
            "unit": "ns",
            "range": "± 948.4881611331027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25274.094736842104,
            "unit": "ns",
            "range": "± 2273.366811832666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4344178.964285715,
            "unit": "ns",
            "range": "± 119864.24495930946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4576565.764705882,
            "unit": "ns",
            "range": "± 82383.80946712878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5380253.481481481,
            "unit": "ns",
            "range": "± 150523.5888105685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5745713,
            "unit": "ns",
            "range": "± 89626.01117066204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9232018.090909092,
            "unit": "ns",
            "range": "± 181160.03761970325"
          }
        ]
      }
    ]
  }
}