window.BENCHMARK_DATA = {
  "lastUpdate": 1688458299273,
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
          "id": "0f10562e3debb2347a96f2625766b1ec6e569af4",
          "message": "temp: test case",
          "timestamp": "2023-06-09T14:38:41+09:00",
          "tree_id": "2a18c850e206cc6f3a7c5d341f39bb98d00e58aa",
          "url": "https://github.com/limebell/libplanet/commit/0f10562e3debb2347a96f2625766b1ec6e569af4"
        },
        "date": 1686289952525,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1478841.5760869565,
            "unit": "ns",
            "range": "± 83105.30810571487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2858261.3125,
            "unit": "ns",
            "range": "± 108417.98990886609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2388629.1818181816,
            "unit": "ns",
            "range": "± 123650.61060476844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5695843.8292682925,
            "unit": "ns",
            "range": "± 204236.63729959205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3505551.52,
            "unit": "ns",
            "range": "± 91502.33049451072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3663319.75,
            "unit": "ns",
            "range": "± 110550.99854993213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4519543.363636363,
            "unit": "ns",
            "range": "± 106382.65739191812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4570331.35,
            "unit": "ns",
            "range": "± 150846.64778229714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7186211.193548387,
            "unit": "ns",
            "range": "± 211714.49280110223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8167010.071428572,
            "unit": "ns",
            "range": "± 123472.43533023524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22215225.333333332,
            "unit": "ns",
            "range": "± 149675.79827063685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56309110.333333336,
            "unit": "ns",
            "range": "± 367878.1119863019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113599374.6,
            "unit": "ns",
            "range": "± 542123.7282684513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222885602.6,
            "unit": "ns",
            "range": "± 3308834.60799301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6057939.249441965,
            "unit": "ns",
            "range": "± 20634.048379334778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1924091.3178013393,
            "unit": "ns",
            "range": "± 2302.893345573677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1398556.183314732,
            "unit": "ns",
            "range": "± 3006.3686221034245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2673287.018973214,
            "unit": "ns",
            "range": "± 1236.951141843227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852629.3729817708,
            "unit": "ns",
            "range": "± 1460.9780336344265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768493.259375,
            "unit": "ns",
            "range": "± 963.9062689313009"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48222.98611111111,
            "unit": "ns",
            "range": "± 2353.2279747642033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288034.62790697673,
            "unit": "ns",
            "range": "± 10643.521705094687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279704.3333333333,
            "unit": "ns",
            "range": "± 6506.119445055811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238090.69565217392,
            "unit": "ns",
            "range": "± 5784.129284946892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4495603.133333334,
            "unit": "ns",
            "range": "± 62879.76232787083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4129328.5,
            "unit": "ns",
            "range": "± 41968.28946084449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19888.63157894737,
            "unit": "ns",
            "range": "± 1619.8599299350494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87325.42857142857,
            "unit": "ns",
            "range": "± 4736.292406379715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73468.5,
            "unit": "ns",
            "range": "± 2613.2195978651825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92406.93478260869,
            "unit": "ns",
            "range": "± 8917.69657442448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5056.926315789474,
            "unit": "ns",
            "range": "± 648.7397806698121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18633.655555555557,
            "unit": "ns",
            "range": "± 1444.3850459361051"
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
          "id": "96f58e605e9378f62007d42d125c3d30038961be",
          "message": "test: add test case",
          "timestamp": "2023-06-09T19:12:47+09:00",
          "tree_id": "32fccaa2d4f28bbb6a422ec9287d59db1c3720d6",
          "url": "https://github.com/limebell/libplanet/commit/96f58e605e9378f62007d42d125c3d30038961be"
        },
        "date": 1686306398741,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1553303.4315789475,
            "unit": "ns",
            "range": "± 103798.40007608169"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2953723.8571428573,
            "unit": "ns",
            "range": "± 51132.39220036422"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2464184.7763157897,
            "unit": "ns",
            "range": "± 119479.82601667935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5865619.5,
            "unit": "ns",
            "range": "± 139792.49929184327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3721503.6428571427,
            "unit": "ns",
            "range": "± 48265.186967590664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3993643.304347826,
            "unit": "ns",
            "range": "± 97891.29045594626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4710394.333333333,
            "unit": "ns",
            "range": "± 55897.07553002682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4816562.113636363,
            "unit": "ns",
            "range": "± 180249.93497018033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7445639.321428572,
            "unit": "ns",
            "range": "± 180598.12809231554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8976363.6,
            "unit": "ns",
            "range": "± 162557.9363518479"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23024053.666666668,
            "unit": "ns",
            "range": "± 164887.15937342757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57527496,
            "unit": "ns",
            "range": "± 148432.9867070296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116255972.6,
            "unit": "ns",
            "range": "± 333931.6970491335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230025286.13333333,
            "unit": "ns",
            "range": "± 428949.63389438135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6143489.233816965,
            "unit": "ns",
            "range": "± 37004.5474776219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1897988.1477399555,
            "unit": "ns",
            "range": "± 1641.7421683344378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1412679.061328125,
            "unit": "ns",
            "range": "± 2379.0843478810275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2639892.302176339,
            "unit": "ns",
            "range": "± 4353.881121008025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849889.5604817708,
            "unit": "ns",
            "range": "± 810.1052460019534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772227.8394949777,
            "unit": "ns",
            "range": "± 256.27310731021265"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54772.40625,
            "unit": "ns",
            "range": "± 4007.217379673896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305637.41095890413,
            "unit": "ns",
            "range": "± 14125.155481775153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296081.724137931,
            "unit": "ns",
            "range": "± 8680.658487599032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274368.61904761905,
            "unit": "ns",
            "range": "± 6506.698091015062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4653864.8,
            "unit": "ns",
            "range": "± 77436.12671855061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4206433.333333333,
            "unit": "ns",
            "range": "± 36351.796510147215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23631.164948453606,
            "unit": "ns",
            "range": "± 1757.672500308839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98989.25531914894,
            "unit": "ns",
            "range": "± 6329.168385359977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89667.16666666667,
            "unit": "ns",
            "range": "± 4395.539701516258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104453.09782608696,
            "unit": "ns",
            "range": "± 11483.182026418606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6771.5204081632655,
            "unit": "ns",
            "range": "± 858.6126574046656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20859.76595744681,
            "unit": "ns",
            "range": "± 1245.5013795940088"
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
          "id": "a03eb569fe044c8c767226d402e9445dfc16df02",
          "message": "temp: test",
          "timestamp": "2023-06-09T19:24:54+09:00",
          "tree_id": "aa197eb7cb3ddb258652973e40233336d4280fad",
          "url": "https://github.com/limebell/libplanet/commit/a03eb569fe044c8c767226d402e9445dfc16df02"
        },
        "date": 1686307148943,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1521937.894736842,
            "unit": "ns",
            "range": "± 99250.07588040121"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2893230.3913043477,
            "unit": "ns",
            "range": "± 111221.19418737465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2447777.5529411766,
            "unit": "ns",
            "range": "± 130619.84761864028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5815585.866666666,
            "unit": "ns",
            "range": "± 171913.58138515777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3774703.6,
            "unit": "ns",
            "range": "± 67317.05964718644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3779218.772727273,
            "unit": "ns",
            "range": "± 90997.58738713473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4583980.05,
            "unit": "ns",
            "range": "± 102830.6311022747"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4778461.481481481,
            "unit": "ns",
            "range": "± 132535.7134921552"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7283331.24137931,
            "unit": "ns",
            "range": "± 209509.07892118648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8054955.071428572,
            "unit": "ns",
            "range": "± 45668.30472416423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22802864.615384616,
            "unit": "ns",
            "range": "± 155185.477543561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56663465.06666667,
            "unit": "ns",
            "range": "± 648281.5140692536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114099541.06666666,
            "unit": "ns",
            "range": "± 1447967.086886176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234279530.2,
            "unit": "ns",
            "range": "± 2067604.842403444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6077258.780133928,
            "unit": "ns",
            "range": "± 32976.33370686634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1919872.9712611607,
            "unit": "ns",
            "range": "± 3619.2914823733363"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1401547.35546875,
            "unit": "ns",
            "range": "± 4097.2390207297985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2686979.7807291667,
            "unit": "ns",
            "range": "± 3871.0220031084414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840570.0732421875,
            "unit": "ns",
            "range": "± 687.46454651136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 784663.7170061384,
            "unit": "ns",
            "range": "± 531.1996626245968"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51436.40217391304,
            "unit": "ns",
            "range": "± 2902.2324452305797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297797.5652173913,
            "unit": "ns",
            "range": "± 7493.020842612549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285438.4117647059,
            "unit": "ns",
            "range": "± 9062.412833829989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248190.09375,
            "unit": "ns",
            "range": "± 11245.064642609586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4533069.764705882,
            "unit": "ns",
            "range": "± 90646.17423637456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4242667,
            "unit": "ns",
            "range": "± 37025.84173665323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21970.107526881722,
            "unit": "ns",
            "range": "± 2228.437059340634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95162.08421052631,
            "unit": "ns",
            "range": "± 6343.44957108656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75206.28767123287,
            "unit": "ns",
            "range": "± 3542.36144745694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105138.18556701031,
            "unit": "ns",
            "range": "± 13969.24489379101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6470.469387755102,
            "unit": "ns",
            "range": "± 870.059509803566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20413.936842105264,
            "unit": "ns",
            "range": "± 1781.365635652473"
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
          "id": "a66da72edcb7e33701c4782175cd0153cbe44bca",
          "message": "test: add tests for added interfaces",
          "timestamp": "2023-06-12T16:34:16+09:00",
          "tree_id": "fd79b037c40ac531bb7e7d4c6b8e47d1956872d3",
          "url": "https://github.com/limebell/libplanet/commit/a66da72edcb7e33701c4782175cd0153cbe44bca"
        },
        "date": 1686556247695,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1682871.547368421,
            "unit": "ns",
            "range": "± 101142.56708397061"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3189814.3714285716,
            "unit": "ns",
            "range": "± 104158.17781372536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2628299.675324675,
            "unit": "ns",
            "range": "± 128720.14485476885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6460525.733333333,
            "unit": "ns",
            "range": "± 188830.0828239657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3774272.6559139783,
            "unit": "ns",
            "range": "± 208246.1808938127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3988981.0416666665,
            "unit": "ns",
            "range": "± 235655.49415793238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4885299.283783784,
            "unit": "ns",
            "range": "± 244849.7542842454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5271291.033333333,
            "unit": "ns",
            "range": "± 229710.61424041932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7986238.468085106,
            "unit": "ns",
            "range": "± 311093.0710747712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9604327.307692308,
            "unit": "ns",
            "range": "± 104343.10010759745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24633326.625,
            "unit": "ns",
            "range": "± 455001.6469474772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62766963.52173913,
            "unit": "ns",
            "range": "± 1568278.9638141224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121604315.1,
            "unit": "ns",
            "range": "± 3549516.2210432948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 241386018.27272728,
            "unit": "ns",
            "range": "± 5864064.709791179"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6809045.542708334,
            "unit": "ns",
            "range": "± 72965.76988634477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2132904.2527901786,
            "unit": "ns",
            "range": "± 13879.749625286842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1562898.0169270833,
            "unit": "ns",
            "range": "± 23074.214463051718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2977784.49375,
            "unit": "ns",
            "range": "± 36064.32360160099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 956737.633203125,
            "unit": "ns",
            "range": "± 14366.661286543262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 826580.2243009869,
            "unit": "ns",
            "range": "± 17329.593677663914"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55030.07692307692,
            "unit": "ns",
            "range": "± 4158.283180006889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317249.65555555554,
            "unit": "ns",
            "range": "± 17649.655951168897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303059.34,
            "unit": "ns",
            "range": "± 19076.131338741874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270768.67,
            "unit": "ns",
            "range": "± 18428.49517966591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5111021.363636363,
            "unit": "ns",
            "range": "± 124323.57618291509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4379535.775,
            "unit": "ns",
            "range": "± 227069.2210198944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20430.736263736264,
            "unit": "ns",
            "range": "± 1547.206362987927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99381.36458333333,
            "unit": "ns",
            "range": "± 7797.274046093952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85431.16304347826,
            "unit": "ns",
            "range": "± 4899.654366094676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100656.375,
            "unit": "ns",
            "range": "± 13433.22377050353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5663.217391304348,
            "unit": "ns",
            "range": "± 659.2798573016389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19522.302083333332,
            "unit": "ns",
            "range": "± 1874.522513909478"
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
          "id": "7da49c610154a9b1d4f65cd935630367cc958c87",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-06-12T18:05:48+09:00",
          "tree_id": "5544c6c93a099682cc8f455a78509d1b12cda0e4",
          "url": "https://github.com/limebell/libplanet/commit/7da49c610154a9b1d4f65cd935630367cc958c87"
        },
        "date": 1686561463914,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1398965.414893617,
            "unit": "ns",
            "range": "± 112905.00090102485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2636803.5185185187,
            "unit": "ns",
            "range": "± 72017.86039340432"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2217101.1075268816,
            "unit": "ns",
            "range": "± 123948.43338947733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5277436.5625,
            "unit": "ns",
            "range": "± 95586.55126949519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3215812.3214285714,
            "unit": "ns",
            "range": "± 84189.67876921273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3377654,
            "unit": "ns",
            "range": "± 104618.07524634546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4339317.315789473,
            "unit": "ns",
            "range": "± 93658.23751577543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4194398.106382979,
            "unit": "ns",
            "range": "± 160344.5622037571"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6924955.605263158,
            "unit": "ns",
            "range": "± 208384.55100445056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7501765.8,
            "unit": "ns",
            "range": "± 29038.811455410105"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19327598.866666667,
            "unit": "ns",
            "range": "± 92760.2306778585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49811272.733333334,
            "unit": "ns",
            "range": "± 401094.7042718513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100255622.6,
            "unit": "ns",
            "range": "± 818159.2223875672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201447242.93333334,
            "unit": "ns",
            "range": "± 951380.7990740517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5959989.341346154,
            "unit": "ns",
            "range": "± 13794.33011936021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1978429.673549107,
            "unit": "ns",
            "range": "± 1290.185262365488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355277.8359375,
            "unit": "ns",
            "range": "± 699.504413703866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2582532.956473214,
            "unit": "ns",
            "range": "± 3960.9039296364676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820808.1132161458,
            "unit": "ns",
            "range": "± 728.0824978215927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735092.3746744791,
            "unit": "ns",
            "range": "± 923.9402603349909"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46542.25,
            "unit": "ns",
            "range": "± 2022.4225690045707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285368.756097561,
            "unit": "ns",
            "range": "± 10201.707449688234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270395.6511627907,
            "unit": "ns",
            "range": "± 8803.396800812634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236196.8620689655,
            "unit": "ns",
            "range": "± 6809.66310119114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4327833.666666667,
            "unit": "ns",
            "range": "± 32293.198458292525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3897977.6428571427,
            "unit": "ns",
            "range": "± 30397.19944743681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18756.731958762888,
            "unit": "ns",
            "range": "± 1518.1965968122063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89361.40816326531,
            "unit": "ns",
            "range": "± 5784.120515771054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73126.76666666666,
            "unit": "ns",
            "range": "± 3011.287856516255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88215.31868131868,
            "unit": "ns",
            "range": "± 8633.565290164663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5045.087912087912,
            "unit": "ns",
            "range": "± 489.9819418067397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19265.821052631578,
            "unit": "ns",
            "range": "± 1522.8473609191615"
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
          "id": "9626e49e3c14fd20d5ad8b6c76a90301ebece760",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-06-12T18:45:53+09:00",
          "tree_id": "5544c6c93a099682cc8f455a78509d1b12cda0e4",
          "url": "https://github.com/limebell/libplanet/commit/9626e49e3c14fd20d5ad8b6c76a90301ebece760"
        },
        "date": 1686563963277,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1397543.9710144927,
            "unit": "ns",
            "range": "± 67328.86345131787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2658476.65,
            "unit": "ns",
            "range": "± 86821.8828009686"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2294131.564102564,
            "unit": "ns",
            "range": "± 112714.789128353"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5504964.2,
            "unit": "ns",
            "range": "± 123929.31332930754"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3638872.1333333333,
            "unit": "ns",
            "range": "± 34394.28665774649"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3803644,
            "unit": "ns",
            "range": "± 107957.36490650165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4565722.8,
            "unit": "ns",
            "range": "± 71571.56085964393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4705274.3,
            "unit": "ns",
            "range": "± 82768.96066090062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7241531.088235294,
            "unit": "ns",
            "range": "± 229435.89964048887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8311950.266666667,
            "unit": "ns",
            "range": "± 110071.35246314849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21761582.35714286,
            "unit": "ns",
            "range": "± 122948.740152839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55574720.2,
            "unit": "ns",
            "range": "± 284402.8516489041"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111751789.86666666,
            "unit": "ns",
            "range": "± 235191.03341140324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221872676.93333334,
            "unit": "ns",
            "range": "± 927396.1727279746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6025751.680208334,
            "unit": "ns",
            "range": "± 71816.2243544809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1852186.0474330357,
            "unit": "ns",
            "range": "± 1202.6340111430266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375872.4453125,
            "unit": "ns",
            "range": "± 2502.449501806441"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2607223.914322917,
            "unit": "ns",
            "range": "± 12132.528720018036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827422.3951822916,
            "unit": "ns",
            "range": "± 455.4466638961644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754187.9046456473,
            "unit": "ns",
            "range": "± 310.86130436161636"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49139.333333333336,
            "unit": "ns",
            "range": "± 2492.6004674014825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298834.5581395349,
            "unit": "ns",
            "range": "± 11073.21572921909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 287728.48076923075,
            "unit": "ns",
            "range": "± 11832.45807007213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280398.5714285714,
            "unit": "ns",
            "range": "± 6308.422128959258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4572844.133333334,
            "unit": "ns",
            "range": "± 27724.120140274623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4066773.4285714286,
            "unit": "ns",
            "range": "± 27310.240248258204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23633.602150537634,
            "unit": "ns",
            "range": "± 2122.5948493160795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106672.87368421053,
            "unit": "ns",
            "range": "± 6532.158154399459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95594.33,
            "unit": "ns",
            "range": "± 7766.071237489239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114591.34375,
            "unit": "ns",
            "range": "± 10484.17349685568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6571.510204081633,
            "unit": "ns",
            "range": "± 1154.3475172652527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22043.020833333332,
            "unit": "ns",
            "range": "± 2399.713487192593"
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
          "id": "6399fdf950302989b1c7037443aedfa0161961ec",
          "message": "chore: fix test",
          "timestamp": "2023-06-12T19:10:09+09:00",
          "tree_id": "e7012c9deb8e2ec93aeb0d5e61919460bbc9b810",
          "url": "https://github.com/limebell/libplanet/commit/6399fdf950302989b1c7037443aedfa0161961ec"
        },
        "date": 1686565324254,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1320260.8829787234,
            "unit": "ns",
            "range": "± 76689.64233605031"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2578893.025,
            "unit": "ns",
            "range": "± 85514.5174286252"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2130873.282828283,
            "unit": "ns",
            "range": "± 128374.27607498447"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5289187.9375,
            "unit": "ns",
            "range": "± 208313.42302185213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3119693.3214285714,
            "unit": "ns",
            "range": "± 80718.55847740738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3390462.3125,
            "unit": "ns",
            "range": "± 50079.456877670906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4198645.371428572,
            "unit": "ns",
            "range": "± 137641.0101790985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3991320.510638298,
            "unit": "ns",
            "range": "± 141802.21212321732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6540535.523809524,
            "unit": "ns",
            "range": "± 97974.54745576478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7580602.785714285,
            "unit": "ns",
            "range": "± 13883.800112574872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19142531.866666667,
            "unit": "ns",
            "range": "± 127426.77146663304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49430211.266666666,
            "unit": "ns",
            "range": "± 455188.54267583706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98662453.33333333,
            "unit": "ns",
            "range": "± 1822358.2070829335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195881316.8,
            "unit": "ns",
            "range": "± 1314329.7746247053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6199589.514583333,
            "unit": "ns",
            "range": "± 26662.65131930232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1822224.5101841518,
            "unit": "ns",
            "range": "± 3156.2077351387907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1337532.0655691964,
            "unit": "ns",
            "range": "± 1860.4343349751045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2564839.86875,
            "unit": "ns",
            "range": "± 4345.950723873123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806650.3567940848,
            "unit": "ns",
            "range": "± 942.5502735878358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744306.3743722098,
            "unit": "ns",
            "range": "± 744.391470394929"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45320.5243902439,
            "unit": "ns",
            "range": "± 2288.3647578194063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266045.4375,
            "unit": "ns",
            "range": "± 7910.066693318201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254221.320754717,
            "unit": "ns",
            "range": "± 10481.976116123526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 221640.58333333334,
            "unit": "ns",
            "range": "± 1384.565928587751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4157862.714285714,
            "unit": "ns",
            "range": "± 40072.01454387333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3754707.8571428573,
            "unit": "ns",
            "range": "± 37443.85206362504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16686.453608247422,
            "unit": "ns",
            "range": "± 1324.1483664087218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83640.60273972603,
            "unit": "ns",
            "range": "± 3986.5668352178736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67012.25,
            "unit": "ns",
            "range": "± 1217.094983967973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82982.11340206186,
            "unit": "ns",
            "range": "± 11202.479730023588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3952.0625,
            "unit": "ns",
            "range": "± 568.2604445980178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15222.58762886598,
            "unit": "ns",
            "range": "± 1134.6049216263314"
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
          "id": "724c79a2a3a7a0abc534c2469996f292ede55e7d",
          "message": "chore: fix test",
          "timestamp": "2023-06-12T20:23:59+09:00",
          "tree_id": "0e1b2d899de3de258b17335ad0413d5df88873be",
          "url": "https://github.com/limebell/libplanet/commit/724c79a2a3a7a0abc534c2469996f292ede55e7d"
        },
        "date": 1686570175788,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1916200.5483870967,
            "unit": "ns",
            "range": "± 204692.08127976436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3721324.1518987343,
            "unit": "ns",
            "range": "± 192403.6672135108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3021078.831578947,
            "unit": "ns",
            "range": "± 196432.69536596318"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7902412.697916667,
            "unit": "ns",
            "range": "± 603024.4567883344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4482063.421052632,
            "unit": "ns",
            "range": "± 311707.4925908044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4796604.5625,
            "unit": "ns",
            "range": "± 222328.1713155931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6183701,
            "unit": "ns",
            "range": "± 261165.43876178632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5835768.24742268,
            "unit": "ns",
            "range": "± 342452.33258726523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9499315.147058824,
            "unit": "ns",
            "range": "± 301417.7210011435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10733623.58064516,
            "unit": "ns",
            "range": "± 607573.7691520037"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28690022.714285713,
            "unit": "ns",
            "range": "± 460923.60247366014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 73108866.42857143,
            "unit": "ns",
            "range": "± 1167123.5748410714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 148319638.5,
            "unit": "ns",
            "range": "± 2760936.9396298784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 293301202.4375,
            "unit": "ns",
            "range": "± 5329234.26815369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7805285.759615385,
            "unit": "ns",
            "range": "± 86815.49274515492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2441355.660714286,
            "unit": "ns",
            "range": "± 42370.996663997365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1800008.4596354167,
            "unit": "ns",
            "range": "± 23161.45839486958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3400948.0078125,
            "unit": "ns",
            "range": "± 54219.343610771495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1110119.5528738839,
            "unit": "ns",
            "range": "± 17206.897462232406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1046648.1087239584,
            "unit": "ns",
            "range": "± 18563.21841234358"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74487.62886597938,
            "unit": "ns",
            "range": "± 13433.854197139086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 396504.9784946237,
            "unit": "ns",
            "range": "± 33666.01525728699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 354304.5934065934,
            "unit": "ns",
            "range": "± 24912.183905327227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 340646.8043478261,
            "unit": "ns",
            "range": "± 28452.082130973708"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5795711.854838709,
            "unit": "ns",
            "range": "± 259888.28103414018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5277909.065573771,
            "unit": "ns",
            "range": "± 235793.17935306986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25657.627659574468,
            "unit": "ns",
            "range": "± 7121.457993743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121249.27368421052,
            "unit": "ns",
            "range": "± 15343.745982496059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 136849.20430107528,
            "unit": "ns",
            "range": "± 23212.023103929838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 141690.28723404257,
            "unit": "ns",
            "range": "± 21797.192929968918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8375.563829787234,
            "unit": "ns",
            "range": "± 1495.8605000690723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26143.1935483871,
            "unit": "ns",
            "range": "± 6998.844864718228"
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
          "id": "f131361c2528d94929d0a46d387a4ca92b4005f9",
          "message": "WIP: fix test",
          "timestamp": "2023-06-21T19:02:33+09:00",
          "tree_id": "7e5c85b424d86c3017931fbc5a3b867059b3d90b",
          "url": "https://github.com/limebell/libplanet/commit/f131361c2528d94929d0a46d387a4ca92b4005f9"
        },
        "date": 1687342860453,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3747797.5353535353,
            "unit": "ns",
            "range": "± 417667.2427530374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3831688.3645833335,
            "unit": "ns",
            "range": "± 386348.7979743344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5049319.712765957,
            "unit": "ns",
            "range": "± 343715.7753214261"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4960319.29787234,
            "unit": "ns",
            "range": "± 453628.88119097636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8742402.265957447,
            "unit": "ns",
            "range": "± 630035.0526252133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6438357.043786338,
            "unit": "ns",
            "range": "± 237012.23054610434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1801204.5390625,
            "unit": "ns",
            "range": "± 42003.30955638565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1413991.2232294497,
            "unit": "ns",
            "range": "± 79407.72796053792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2667719.7907298016,
            "unit": "ns",
            "range": "± 140891.0224178201"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819182.029296875,
            "unit": "ns",
            "range": "± 11556.123330619317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767134.4432291667,
            "unit": "ns",
            "range": "± 12607.69229730284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333242.8404255319,
            "unit": "ns",
            "range": "± 30630.205148984653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341576.65625,
            "unit": "ns",
            "range": "± 45949.34354672903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273027.6551724138,
            "unit": "ns",
            "range": "± 25889.897106439745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4418615.348484849,
            "unit": "ns",
            "range": "± 207355.61938092226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4202642.138297873,
            "unit": "ns",
            "range": "± 307875.3633558503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30354.555555555555,
            "unit": "ns",
            "range": "± 6218.737490843696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104764.01075268818,
            "unit": "ns",
            "range": "± 15165.084754772997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 95621.40625,
            "unit": "ns",
            "range": "± 14973.263703982948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101949.06315789474,
            "unit": "ns",
            "range": "± 22303.911301303055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4552.615384615385,
            "unit": "ns",
            "range": "± 741.1334813397903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27881.567010309278,
            "unit": "ns",
            "range": "± 8464.145983336633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1537710.8279569892,
            "unit": "ns",
            "range": "± 195789.05838780449"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2934782.1914893617,
            "unit": "ns",
            "range": "± 258909.7286639586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2303424.111111111,
            "unit": "ns",
            "range": "± 338309.02879835694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6027024.393617021,
            "unit": "ns",
            "range": "± 618168.3062846934"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58418.34042553192,
            "unit": "ns",
            "range": "± 12099.12145086842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8537222.051546391,
            "unit": "ns",
            "range": "± 538481.7619651679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22562581.591836736,
            "unit": "ns",
            "range": "± 1916906.3372105793"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62728314.56,
            "unit": "ns",
            "range": "± 4481061.234747783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115889809.83333333,
            "unit": "ns",
            "range": "± 3868300.0142723937"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242808706.40697673,
            "unit": "ns",
            "range": "± 13080065.34309639"
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
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "7b04da4b483f6800ba79e9ab97f022f8ba9b191c",
          "message": "WIP: fix test",
          "timestamp": "2023-06-22T11:33:27+09:00",
          "tree_id": "c009bc0c56a0605159ac8696f66ceeace84970dc",
          "url": "https://github.com/limebell/libplanet/commit/7b04da4b483f6800ba79e9ab97f022f8ba9b191c"
        },
        "date": 1687402069200,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3585679.3684210526,
            "unit": "ns",
            "range": "± 75366.91509778495"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3748733.9607843137,
            "unit": "ns",
            "range": "± 152728.08565106298"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4697206.333333333,
            "unit": "ns",
            "range": "± 61906.87624358133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4688368.105263158,
            "unit": "ns",
            "range": "± 101603.18750735615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7387003.928571428,
            "unit": "ns",
            "range": "± 209112.0949924773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8678161.391304348,
            "unit": "ns",
            "range": "± 216282.686059606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23041323.266666666,
            "unit": "ns",
            "range": "± 300754.4469645026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57442198.13333333,
            "unit": "ns",
            "range": "± 293162.54742033634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112307250,
            "unit": "ns",
            "range": "± 801933.6542866488"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226010337.26666668,
            "unit": "ns",
            "range": "± 2739317.4024498584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289124.1176470588,
            "unit": "ns",
            "range": "± 8523.69683548843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279393.725,
            "unit": "ns",
            "range": "± 8774.526624641267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249877.72222222222,
            "unit": "ns",
            "range": "± 8139.597096420897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4523653.6,
            "unit": "ns",
            "range": "± 83002.95620793963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4078301.1578947366,
            "unit": "ns",
            "range": "± 87316.41442494784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20636.23157894737,
            "unit": "ns",
            "range": "± 2137.8059266086866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91877.46808510639,
            "unit": "ns",
            "range": "± 6938.607775668105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76856.87368421053,
            "unit": "ns",
            "range": "± 4939.725617416816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99954.3829787234,
            "unit": "ns",
            "range": "± 11315.910242925387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5892.0204081632655,
            "unit": "ns",
            "range": "± 1154.206908317603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20107.58762886598,
            "unit": "ns",
            "range": "± 2263.109612865749"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47757.59782608696,
            "unit": "ns",
            "range": "± 3209.0272808478885"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6169699.107700893,
            "unit": "ns",
            "range": "± 28970.69366267711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1933867.3290364584,
            "unit": "ns",
            "range": "± 1707.621962338849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1394083.8704427083,
            "unit": "ns",
            "range": "± 3283.6390154294127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2650595.210677083,
            "unit": "ns",
            "range": "± 2493.3303899872562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837838.5232421875,
            "unit": "ns",
            "range": "± 976.0995656136869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769332.173688616,
            "unit": "ns",
            "range": "± 516.1301848339633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1540087.8024691357,
            "unit": "ns",
            "range": "± 80909.79777434557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2890529.3571428573,
            "unit": "ns",
            "range": "± 124249.27411522788"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2437970.072463768,
            "unit": "ns",
            "range": "± 109981.24932611425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5904129.476190476,
            "unit": "ns",
            "range": "± 215543.61309910458"
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
          "id": "71901d9103449b1f9027913b27654379be61f0a7",
          "message": "temp: maj23",
          "timestamp": "2023-06-22T15:14:26+09:00",
          "tree_id": "619caa2707c538ad00f5e35c4205b3dda5fe166a",
          "url": "https://github.com/limebell/libplanet/commit/71901d9103449b1f9027913b27654379be61f0a7"
        },
        "date": 1687415505149,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3400866.1354166665,
            "unit": "ns",
            "range": "± 281863.0022309875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3550295.510638298,
            "unit": "ns",
            "range": "± 282185.76416234573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4674945.697916667,
            "unit": "ns",
            "range": "± 388293.58095316764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4601684.96875,
            "unit": "ns",
            "range": "± 478084.46853380534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7974765.195876288,
            "unit": "ns",
            "range": "± 704360.4419506754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6286995.2425986845,
            "unit": "ns",
            "range": "± 134572.95875542267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2061052.299609375,
            "unit": "ns",
            "range": "± 46983.063986925605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1471600.2735677084,
            "unit": "ns",
            "range": "± 26545.303930467686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2783996.9421875,
            "unit": "ns",
            "range": "± 48844.4013513394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 934569.730422247,
            "unit": "ns",
            "range": "± 21015.37490951546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 860428.5017089844,
            "unit": "ns",
            "range": "± 16083.331004136895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319640.4943820225,
            "unit": "ns",
            "range": "± 36953.922193764614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 318373.25,
            "unit": "ns",
            "range": "± 43966.957443061714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 291968.3052631579,
            "unit": "ns",
            "range": "± 28341.10887674069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4505750.35106383,
            "unit": "ns",
            "range": "± 278874.38102569914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4150010.9693877553,
            "unit": "ns",
            "range": "± 287345.056027689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28438.418367346938,
            "unit": "ns",
            "range": "± 11301.797971113507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108517.39583333333,
            "unit": "ns",
            "range": "± 21117.798949042786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103551.71875,
            "unit": "ns",
            "range": "± 21697.348159432866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122160.75531914894,
            "unit": "ns",
            "range": "± 26386.876733239696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4860.860759493671,
            "unit": "ns",
            "range": "± 1108.6049761678105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28996.17391304348,
            "unit": "ns",
            "range": "± 7587.905284515915"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1540242.5520833333,
            "unit": "ns",
            "range": "± 190218.56633826977"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2902925,
            "unit": "ns",
            "range": "± 250026.52294489657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2559940.4105263157,
            "unit": "ns",
            "range": "± 343711.9388629459"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6560885.193877551,
            "unit": "ns",
            "range": "± 664691.9117912403"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61943.85393258427,
            "unit": "ns",
            "range": "± 12073.912794599919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9003209.34065934,
            "unit": "ns",
            "range": "± 571653.8220308437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25248794.524390243,
            "unit": "ns",
            "range": "± 1327449.8338951187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64668724.24468085,
            "unit": "ns",
            "range": "± 4157054.9992140154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122475291.17171717,
            "unit": "ns",
            "range": "± 7694966.665376895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228398970.31,
            "unit": "ns",
            "range": "± 13584408.767101076"
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
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "c8f46e4a8d9a4393a0188d7c337df1344707695b",
          "message": "temp: maj23",
          "timestamp": "2023-06-22T15:18:58+09:00",
          "tree_id": "3ae73c5c3e08acbf1606183d7d6c850ca30eb6ee",
          "url": "https://github.com/limebell/libplanet/commit/c8f46e4a8d9a4393a0188d7c337df1344707695b"
        },
        "date": 1687415895168,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3954512.1208791207,
            "unit": "ns",
            "range": "± 362071.88618716266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4020378.6767676766,
            "unit": "ns",
            "range": "± 573094.1610037289"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5408971.775510204,
            "unit": "ns",
            "range": "± 549893.9443221913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5099262.363636363,
            "unit": "ns",
            "range": "± 516242.86434652365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8794987.226804124,
            "unit": "ns",
            "range": "± 850309.0314254075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7305181.401855469,
            "unit": "ns",
            "range": "± 134976.1367727236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2307335.7760416665,
            "unit": "ns",
            "range": "± 71352.2583842694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1554261.1429966518,
            "unit": "ns",
            "range": "± 27317.004252217877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3042411.1372931986,
            "unit": "ns",
            "range": "± 96450.88143418785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 989846.2575485642,
            "unit": "ns",
            "range": "± 33056.97559107766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 927646.0956169578,
            "unit": "ns",
            "range": "± 29697.155921439342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 368688.3229166667,
            "unit": "ns",
            "range": "± 54787.974869153964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 344976.3775510204,
            "unit": "ns",
            "range": "± 47424.28208055432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289935.3894736842,
            "unit": "ns",
            "range": "± 47258.69170632535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4902128.042553191,
            "unit": "ns",
            "range": "± 561640.1935351994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4342067.552083333,
            "unit": "ns",
            "range": "± 487559.3514737595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31043.340909090908,
            "unit": "ns",
            "range": "± 8707.150128125131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115588.89361702128,
            "unit": "ns",
            "range": "± 20083.816911396512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115855.90425531915,
            "unit": "ns",
            "range": "± 26770.025421266422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137590.38144329897,
            "unit": "ns",
            "range": "± 21826.530609961093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11529.373737373737,
            "unit": "ns",
            "range": "± 8625.797442680903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30496.060606060608,
            "unit": "ns",
            "range": "± 9627.341524690191"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1643086.3673469387,
            "unit": "ns",
            "range": "± 218687.56243466667"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3133234.242424242,
            "unit": "ns",
            "range": "± 367389.5196758543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2701698.515151515,
            "unit": "ns",
            "range": "± 358528.01686656615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7198626.585858586,
            "unit": "ns",
            "range": "± 785141.2491133851"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63566.673684210524,
            "unit": "ns",
            "range": "± 14149.52075155792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8567270.691489361,
            "unit": "ns",
            "range": "± 761123.7856653047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24824958.12121212,
            "unit": "ns",
            "range": "± 2427594.0544329286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64839340.59,
            "unit": "ns",
            "range": "± 3933256.2541703386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 128523093.1122449,
            "unit": "ns",
            "range": "± 8540994.927465394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256107522.3272727,
            "unit": "ns",
            "range": "± 10796928.867790347"
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
          "id": "d044310218d9e7196cc7c2b4af60c5904e1e5a5e",
          "message": "1",
          "timestamp": "2023-06-22T17:08:45+09:00",
          "tree_id": "7937ac48147a5dbb887d19eab1949688dabbb2da",
          "url": "https://github.com/limebell/libplanet/commit/d044310218d9e7196cc7c2b4af60c5904e1e5a5e"
        },
        "date": 1687421998537,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3321645.466666667,
            "unit": "ns",
            "range": "± 34836.45205377893"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3430293.772727273,
            "unit": "ns",
            "range": "± 124259.67566685044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4686560.152173913,
            "unit": "ns",
            "range": "± 302841.8938378858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4890921.697916667,
            "unit": "ns",
            "range": "± 343982.48195110844"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7951806.587628866,
            "unit": "ns",
            "range": "± 457303.09387503855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8103507.571428572,
            "unit": "ns",
            "range": "± 21213.50700239494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20313378.714285713,
            "unit": "ns",
            "range": "± 48792.385331869424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52499957.13333333,
            "unit": "ns",
            "range": "± 212375.7451610123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102458011.13333334,
            "unit": "ns",
            "range": "± 664212.2963009714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200248753,
            "unit": "ns",
            "range": "± 1042180.6455056702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 375535.3298969072,
            "unit": "ns",
            "range": "± 50386.35707475819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 357413.8762886598,
            "unit": "ns",
            "range": "± 43169.31873093284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270633.7272727273,
            "unit": "ns",
            "range": "± 32882.10727078966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4303239.666666667,
            "unit": "ns",
            "range": "± 22710.932237476252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3990192.933333333,
            "unit": "ns",
            "range": "± 70054.83573954934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21038.96907216495,
            "unit": "ns",
            "range": "± 2082.392746605894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96690.9696969697,
            "unit": "ns",
            "range": "± 10547.552101592437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73983.03225806452,
            "unit": "ns",
            "range": "± 2170.759475143373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85109.76470588235,
            "unit": "ns",
            "range": "± 5805.576511807745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5364.53125,
            "unit": "ns",
            "range": "± 598.7428400297093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18038.98969072165,
            "unit": "ns",
            "range": "± 2056.1689674755035"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50184,
            "unit": "ns",
            "range": "± 839.4680855557682"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6508340.047697368,
            "unit": "ns",
            "range": "± 141720.74402693374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1986648.9890625,
            "unit": "ns",
            "range": "± 3477.380054523373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359421.6337239584,
            "unit": "ns",
            "range": "± 3009.5055471646137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2603925.468191964,
            "unit": "ns",
            "range": "± 5703.141518940912"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808422.8692103794,
            "unit": "ns",
            "range": "± 828.0049656936026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731450.4921223958,
            "unit": "ns",
            "range": "± 694.8251041457889"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1408243.7872340425,
            "unit": "ns",
            "range": "± 96370.53514194908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2648149.709677419,
            "unit": "ns",
            "range": "± 77651.68764476126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2297070.5416666665,
            "unit": "ns",
            "range": "± 144101.01980441337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5502001.02631579,
            "unit": "ns",
            "range": "± 182580.59660080916"
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
          "id": "a603f8292ce12f811b6776bdffc93849a807132d",
          "message": "2",
          "timestamp": "2023-06-22T22:24:05+09:00",
          "tree_id": "3cfbe3d5a388b793eb9f93dea953cd8ff984640a",
          "url": "https://github.com/limebell/libplanet/commit/a603f8292ce12f811b6776bdffc93849a807132d"
        },
        "date": 1687441061361,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3644328.129032258,
            "unit": "ns",
            "range": "± 109023.9436792799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3895397.15,
            "unit": "ns",
            "range": "± 86701.93287608991"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4616672.25,
            "unit": "ns",
            "range": "± 161141.9060082981"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4750782.84375,
            "unit": "ns",
            "range": "± 146832.9828507402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7310986.806451613,
            "unit": "ns",
            "range": "± 214959.27092380694"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8770828.133333333,
            "unit": "ns",
            "range": "± 153894.13378909297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22775106.066666666,
            "unit": "ns",
            "range": "± 230447.41309227972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56865945.14285714,
            "unit": "ns",
            "range": "± 406634.96508271905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115554382.6,
            "unit": "ns",
            "range": "± 626064.7086100377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227118905.6,
            "unit": "ns",
            "range": "± 1205827.0353398712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302486.17647058825,
            "unit": "ns",
            "range": "± 6139.483907822527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283823.6346153846,
            "unit": "ns",
            "range": "± 11034.83067743056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256862.2985074627,
            "unit": "ns",
            "range": "± 12152.880712263775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4562265.266666667,
            "unit": "ns",
            "range": "± 61241.63270132345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4275126.642857143,
            "unit": "ns",
            "range": "± 32183.10870294718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20206.68817204301,
            "unit": "ns",
            "range": "± 1496.1103988741768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92691.70103092784,
            "unit": "ns",
            "range": "± 6653.428483629305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81774.67045454546,
            "unit": "ns",
            "range": "± 4443.956779230503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101006.3448275862,
            "unit": "ns",
            "range": "± 6806.7206662642275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5908.309278350515,
            "unit": "ns",
            "range": "± 955.140198705849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19469.308510638297,
            "unit": "ns",
            "range": "± 1591.1004849663404"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50129.833333333336,
            "unit": "ns",
            "range": "± 2489.356407576798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6024142.846540178,
            "unit": "ns",
            "range": "± 18246.427967669493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1893990.9561941964,
            "unit": "ns",
            "range": "± 1108.1884268747704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1399389.1920572917,
            "unit": "ns",
            "range": "± 3019.6338652267264"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2681694.537109375,
            "unit": "ns",
            "range": "± 2441.7352572023065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840536.78125,
            "unit": "ns",
            "range": "± 347.9892655374256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 781556.9671875,
            "unit": "ns",
            "range": "± 2116.59176971636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1525833.606060606,
            "unit": "ns",
            "range": "± 107670.9838822882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2856628.074074074,
            "unit": "ns",
            "range": "± 78980.12922780296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2433129.1911764704,
            "unit": "ns",
            "range": "± 115064.79766107356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5835993.243243244,
            "unit": "ns",
            "range": "± 191979.10535631582"
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
          "id": "7f36561e88654ba0e76127cdeea24b2dba2fde5d",
          "message": "123",
          "timestamp": "2023-06-23T14:51:46+09:00",
          "tree_id": "500966fcca58f0c1ec8864ded4d99441451f054f",
          "url": "https://github.com/limebell/libplanet/commit/7f36561e88654ba0e76127cdeea24b2dba2fde5d"
        },
        "date": 1687500290268,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3467134.2682926827,
            "unit": "ns",
            "range": "± 108459.69301427706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3624709.738095238,
            "unit": "ns",
            "range": "± 132199.1577665986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4328589,
            "unit": "ns",
            "range": "± 108261.21721819507"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4559061.388888889,
            "unit": "ns",
            "range": "± 150006.9770069337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7248151.724137931,
            "unit": "ns",
            "range": "± 211431.0226571535"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8690195.266666668,
            "unit": "ns",
            "range": "± 133326.3530249133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21439385.933333334,
            "unit": "ns",
            "range": "± 288679.1479773415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56284563.266666666,
            "unit": "ns",
            "range": "± 1050176.6993783521"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109143554.07142857,
            "unit": "ns",
            "range": "± 3054261.837573026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213066448.2857143,
            "unit": "ns",
            "range": "± 2428437.132646916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286063.8717948718,
            "unit": "ns",
            "range": "± 9574.231139061952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276842.06976744183,
            "unit": "ns",
            "range": "± 10200.792367438327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240926.6875,
            "unit": "ns",
            "range": "± 4376.957934741891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4443882.6,
            "unit": "ns",
            "range": "± 102287.71054000471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4070557.2608695654,
            "unit": "ns",
            "range": "± 101230.62501770057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17406.757894736842,
            "unit": "ns",
            "range": "± 1555.670832352982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89285.97894736842,
            "unit": "ns",
            "range": "± 6237.287362135078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73183.58823529411,
            "unit": "ns",
            "range": "± 1494.2567156793848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93175.23655913978,
            "unit": "ns",
            "range": "± 11089.746307324744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4688.604166666667,
            "unit": "ns",
            "range": "± 616.9546512237887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17319.32978723404,
            "unit": "ns",
            "range": "± 1554.4984835091389"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46306.11538461538,
            "unit": "ns",
            "range": "± 2383.663479586849"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6129141.356770833,
            "unit": "ns",
            "range": "± 24807.468593474674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1897593.002734375,
            "unit": "ns",
            "range": "± 11132.855011507687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368819.7231770833,
            "unit": "ns",
            "range": "± 5838.758113051229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2594278.258112981,
            "unit": "ns",
            "range": "± 3776.722131637699"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840202.361328125,
            "unit": "ns",
            "range": "± 2496.519938288738"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771865.1033203125,
            "unit": "ns",
            "range": "± 1252.7448531917746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1443911.6818181819,
            "unit": "ns",
            "range": "± 79470.59176141255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2775051.92,
            "unit": "ns",
            "range": "± 73004.49312309483"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2356633,
            "unit": "ns",
            "range": "± 127133.2429255876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5554199.863636363,
            "unit": "ns",
            "range": "± 136142.5796426027"
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
          "id": "82faef46fc8adb78cc29b0d0e0fc410f64bcd041",
          "message": "411",
          "timestamp": "2023-06-23T20:11:35+09:00",
          "tree_id": "c44313a310207ce52fc8acd9f58b76edea55e0e6",
          "url": "https://github.com/limebell/libplanet/commit/82faef46fc8adb78cc29b0d0e0fc410f64bcd041"
        },
        "date": 1687519547881,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3773492.388888889,
            "unit": "ns",
            "range": "± 76997.55932200547"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4015460.3571428573,
            "unit": "ns",
            "range": "± 67474.08837427566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4842011.5,
            "unit": "ns",
            "range": "± 59706.697564974944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4861263.841269841,
            "unit": "ns",
            "range": "± 221498.41472724825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7493664.888888889,
            "unit": "ns",
            "range": "± 140525.1754413082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8522925.066666666,
            "unit": "ns",
            "range": "± 147056.4303997748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23609298,
            "unit": "ns",
            "range": "± 281222.5357038697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58418688.538461536,
            "unit": "ns",
            "range": "± 189682.3313000868"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117091532.14285715,
            "unit": "ns",
            "range": "± 232245.4985864534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231742717.73333332,
            "unit": "ns",
            "range": "± 654147.9914753309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305683.25,
            "unit": "ns",
            "range": "± 10883.455586080463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290891.11627906974,
            "unit": "ns",
            "range": "± 10477.039670062437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276606.5507246377,
            "unit": "ns",
            "range": "± 13226.615796474025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4700825.533333333,
            "unit": "ns",
            "range": "± 83394.5101686356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4252234.6,
            "unit": "ns",
            "range": "± 69579.7960903266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24714.886597938144,
            "unit": "ns",
            "range": "± 2120.782942474158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104715.8686868687,
            "unit": "ns",
            "range": "± 9304.410072041286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92171.65979381443,
            "unit": "ns",
            "range": "± 6809.865202848792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108540.27083333333,
            "unit": "ns",
            "range": "± 13369.222323152426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6519.711340206186,
            "unit": "ns",
            "range": "± 949.3919321373866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20102.41237113402,
            "unit": "ns",
            "range": "± 2537.676244916209"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53944.79787234042,
            "unit": "ns",
            "range": "± 3956.5262720599744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6143102.502083333,
            "unit": "ns",
            "range": "± 25213.283836953437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1891710.7805989583,
            "unit": "ns",
            "range": "± 5444.538587847689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1398009.9069475445,
            "unit": "ns",
            "range": "± 7354.640169060029"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2675788.1283854167,
            "unit": "ns",
            "range": "± 6751.035898309913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 860935.0825520833,
            "unit": "ns",
            "range": "± 596.7480266423429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761146.9986049107,
            "unit": "ns",
            "range": "± 503.9512548750737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1577249.410958904,
            "unit": "ns",
            "range": "± 78196.78897887396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3045998.6666666665,
            "unit": "ns",
            "range": "± 87976.49872525061"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2504680.7666666666,
            "unit": "ns",
            "range": "± 112005.8037850622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5900287.52,
            "unit": "ns",
            "range": "± 152910.30581305936"
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
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "c565a178831a711bdf786b79a9e2e6279fa1a65c",
          "message": "Fix maj23",
          "timestamp": "2023-06-25T19:16:18+09:00",
          "tree_id": "39a2af58c0af5ea78020da440b223735127e7419",
          "url": "https://github.com/limebell/libplanet/commit/c565a178831a711bdf786b79a9e2e6279fa1a65c"
        },
        "date": 1687750583038,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3809664.1333333333,
            "unit": "ns",
            "range": "± 60742.45551255923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3987599.933333333,
            "unit": "ns",
            "range": "± 70392.16757106135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4920999.5,
            "unit": "ns",
            "range": "± 103225.24607025505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4948724.076923077,
            "unit": "ns",
            "range": "± 135438.03905725246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7499806.3,
            "unit": "ns",
            "range": "± 155138.66312299288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9356917.266666668,
            "unit": "ns",
            "range": "± 44705.101441824394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23783874.666666668,
            "unit": "ns",
            "range": "± 252897.1347870984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58506487.06666667,
            "unit": "ns",
            "range": "± 272992.98013304995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116033916.57142857,
            "unit": "ns",
            "range": "± 480200.0073819745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232207656.66666666,
            "unit": "ns",
            "range": "± 526990.0319234384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 307581.64285714284,
            "unit": "ns",
            "range": "± 18484.581045783656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298748.9183673469,
            "unit": "ns",
            "range": "± 11660.177010228615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284107.8775510204,
            "unit": "ns",
            "range": "± 11236.599866864852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4752156.066666666,
            "unit": "ns",
            "range": "± 48595.60788864222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4171605.1428571427,
            "unit": "ns",
            "range": "± 22163.566093434107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24204.608695652172,
            "unit": "ns",
            "range": "± 2566.8817828167553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106963.51,
            "unit": "ns",
            "range": "± 13605.137218612417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102767.71428571429,
            "unit": "ns",
            "range": "± 9340.495505521096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119823.07142857143,
            "unit": "ns",
            "range": "± 15312.859403735041"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8627.41237113402,
            "unit": "ns",
            "range": "± 1444.6334580711791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20759.63953488372,
            "unit": "ns",
            "range": "± 1545.8435269174952"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56761.1875,
            "unit": "ns",
            "range": "± 7383.042632400418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6356414.578645834,
            "unit": "ns",
            "range": "± 78634.0395837004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1895418.43671875,
            "unit": "ns",
            "range": "± 1339.1533848997851"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1413127.859375,
            "unit": "ns",
            "range": "± 3663.9193422294625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2688685.871354167,
            "unit": "ns",
            "range": "± 17811.262028119792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849881.8125651042,
            "unit": "ns",
            "range": "± 1986.7592487552106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 785279.5992606027,
            "unit": "ns",
            "range": "± 866.7368373542664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1549965,
            "unit": "ns",
            "range": "± 82118.76708316595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3034064.6129032257,
            "unit": "ns",
            "range": "± 90861.23454905559"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2537037.7395833335,
            "unit": "ns",
            "range": "± 175781.3975165413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5917542.428571428,
            "unit": "ns",
            "range": "± 103211.5149044869"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "a051767af9ec7510036527139e896ea7b641aae2",
          "message": "Verify vote before adding round",
          "timestamp": "2023-06-26T12:28:59+09:00",
          "tree_id": "0eb21ff13f03c671508fc33ad6b82c2afc34abee",
          "url": "https://github.com/limebell/libplanet/commit/a051767af9ec7510036527139e896ea7b641aae2"
        },
        "date": 1687751012878,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3756652.7333333334,
            "unit": "ns",
            "range": "± 41884.97828827805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3908673.8666666667,
            "unit": "ns",
            "range": "± 55587.95415486892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4806486.933333334,
            "unit": "ns",
            "range": "± 87275.32852945218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4785569.883720931,
            "unit": "ns",
            "range": "± 169135.82167837626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7574999.666666667,
            "unit": "ns",
            "range": "± 240301.052901182"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9068346.105263159,
            "unit": "ns",
            "range": "± 193244.13467393312"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22890748.066666666,
            "unit": "ns",
            "range": "± 210984.68154701477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58045323.13333333,
            "unit": "ns",
            "range": "± 322088.04960087425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114630916.73333333,
            "unit": "ns",
            "range": "± 462598.36129140714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230077548.2142857,
            "unit": "ns",
            "range": "± 616819.1165366913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300335.1458333333,
            "unit": "ns",
            "range": "± 11496.477789915692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291694.3076923077,
            "unit": "ns",
            "range": "± 3272.476518495215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270932.85714285716,
            "unit": "ns",
            "range": "± 9869.071932474824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4698203.866666666,
            "unit": "ns",
            "range": "± 32837.91109996986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4211851.357142857,
            "unit": "ns",
            "range": "± 59175.67285322464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22600.15625,
            "unit": "ns",
            "range": "± 2375.4516748482747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99564.57731958762,
            "unit": "ns",
            "range": "± 7443.083304645791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90059.94897959183,
            "unit": "ns",
            "range": "± 6213.066939216455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104282.18556701031,
            "unit": "ns",
            "range": "± 13491.168905011142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6342.278350515464,
            "unit": "ns",
            "range": "± 908.7412280900344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23025.886597938144,
            "unit": "ns",
            "range": "± 2674.1357828133337"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49802.489130434784,
            "unit": "ns",
            "range": "± 2999.3985862171494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6126076.516666667,
            "unit": "ns",
            "range": "± 26325.41056041685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1935161.579296875,
            "unit": "ns",
            "range": "± 1560.4647856202253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1395786.1798177084,
            "unit": "ns",
            "range": "± 2906.8338578716753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2683614.7938058036,
            "unit": "ns",
            "range": "± 2339.3998735387913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850281.9874441965,
            "unit": "ns",
            "range": "± 293.7758789267844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 777105.9793619792,
            "unit": "ns",
            "range": "± 226.28129398814815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1548635.6790123456,
            "unit": "ns",
            "range": "± 81561.48991954279"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2941815.1025641025,
            "unit": "ns",
            "range": "± 102048.72843963857"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2470652.23943662,
            "unit": "ns",
            "range": "± 117000.43306946283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6128190.53968254,
            "unit": "ns",
            "range": "± 278638.7903376575"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "8feecd709e10b3ca3c0133cd3ce2021a798176b7",
          "message": "wip: bootstrap",
          "timestamp": "2023-06-26T12:36:31+09:00",
          "tree_id": "528ad73d036b4904214184f6c8cd11bb6f601dd3",
          "url": "https://github.com/limebell/libplanet/commit/8feecd709e10b3ca3c0133cd3ce2021a798176b7"
        },
        "date": 1687751433527,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3540367.073170732,
            "unit": "ns",
            "range": "± 127136.36488597398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3669028.5384615385,
            "unit": "ns",
            "range": "± 81525.3185444771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4604839.595238095,
            "unit": "ns",
            "range": "± 167962.4651272202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4613647.214285715,
            "unit": "ns",
            "range": "± 213625.21981494228"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7401616.461538462,
            "unit": "ns",
            "range": "± 252917.25078912417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8607208.05882353,
            "unit": "ns",
            "range": "± 273780.8799567187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23042458.4,
            "unit": "ns",
            "range": "± 197914.0412653216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57714147.071428575,
            "unit": "ns",
            "range": "± 526041.0118447865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114184209.78571428,
            "unit": "ns",
            "range": "± 1202250.8365109414"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226082037.8888889,
            "unit": "ns",
            "range": "± 4724867.899373072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288973.0909090909,
            "unit": "ns",
            "range": "± 10049.858288525778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278363.1515151515,
            "unit": "ns",
            "range": "± 8721.989498966148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248335.83333333334,
            "unit": "ns",
            "range": "± 9088.882884793704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4433037.866666666,
            "unit": "ns",
            "range": "± 81645.62351482049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4034114,
            "unit": "ns",
            "range": "± 37295.808345800295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19118.34736842105,
            "unit": "ns",
            "range": "± 1864.1034110230262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88291.96703296703,
            "unit": "ns",
            "range": "± 5596.882520059318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75877.85714285714,
            "unit": "ns",
            "range": "± 1308.0895720750275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95565.11494252873,
            "unit": "ns",
            "range": "± 7773.755973795611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5298.556701030928,
            "unit": "ns",
            "range": "± 690.8668161729895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18165.27659574468,
            "unit": "ns",
            "range": "± 1495.268878645694"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47342.944444444445,
            "unit": "ns",
            "range": "± 2662.4304278977424"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6089409.515625,
            "unit": "ns",
            "range": "± 44828.18925937599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1885469.7253069195,
            "unit": "ns",
            "range": "± 10138.916280576033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375771.2720052083,
            "unit": "ns",
            "range": "± 7781.184819432495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2649414.2723958334,
            "unit": "ns",
            "range": "± 7964.157469901688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831798.9798177084,
            "unit": "ns",
            "range": "± 2352.106707306592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766225.0670572916,
            "unit": "ns",
            "range": "± 1483.7796760989959"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1584638.4395604397,
            "unit": "ns",
            "range": "± 87980.20927385491"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2945709.722222222,
            "unit": "ns",
            "range": "± 59745.64146328565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2501387.96,
            "unit": "ns",
            "range": "± 125024.97443088851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6053511.647058823,
            "unit": "ns",
            "range": "± 192648.61126537537"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "70f55e55fdc08df5d788fa1ba22e1115d0f7371a",
          "message": "wip: bootstrap",
          "timestamp": "2023-06-26T14:56:12+09:00",
          "tree_id": "1075f6c7131005b26de8f1a13450cb90731d141e",
          "url": "https://github.com/limebell/libplanet/commit/70f55e55fdc08df5d788fa1ba22e1115d0f7371a"
        },
        "date": 1687759773619,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3376494,
            "unit": "ns",
            "range": "± 52100.25368049016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3564754.8,
            "unit": "ns",
            "range": "± 53425.538215351655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4401536.666666667,
            "unit": "ns",
            "range": "± 42634.2447899517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4412594.545454546,
            "unit": "ns",
            "range": "± 96056.59320110513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7020037.964285715,
            "unit": "ns",
            "range": "± 175155.9115202229"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7934969.428571428,
            "unit": "ns",
            "range": "± 42560.632020166755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20557418.133333333,
            "unit": "ns",
            "range": "± 70036.92408688707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51485012.28571428,
            "unit": "ns",
            "range": "± 267013.1286076308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103297492.78571428,
            "unit": "ns",
            "range": "± 281989.8984383275"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206772149.73333332,
            "unit": "ns",
            "range": "± 537466.6607607884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292766.3387096774,
            "unit": "ns",
            "range": "± 11575.979202208011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274337.48214285716,
            "unit": "ns",
            "range": "± 11675.941316914836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241257.75,
            "unit": "ns",
            "range": "± 2185.861828509143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4295084.733333333,
            "unit": "ns",
            "range": "± 37926.3117137631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3824668,
            "unit": "ns",
            "range": "± 36897.28630749344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21004.315789473683,
            "unit": "ns",
            "range": "± 2028.6575598066834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100903.63265306123,
            "unit": "ns",
            "range": "± 9823.333447899113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73258.58333333333,
            "unit": "ns",
            "range": "± 872.1039823671293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90676.01020408163,
            "unit": "ns",
            "range": "± 11130.78940012782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4698.384615384615,
            "unit": "ns",
            "range": "± 536.1153020517293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17551.639175257733,
            "unit": "ns",
            "range": "± 1294.5235142190268"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46606.14117647059,
            "unit": "ns",
            "range": "± 2517.3588254403485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6488446.541294643,
            "unit": "ns",
            "range": "± 30414.347684113913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1894782.4365985577,
            "unit": "ns",
            "range": "± 1363.9424007662274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1408815.1708984375,
            "unit": "ns",
            "range": "± 2972.1558866559108"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2629296.5263020834,
            "unit": "ns",
            "range": "± 5494.335324095402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830502.7920572917,
            "unit": "ns",
            "range": "± 764.1369790529377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 767847.4399414062,
            "unit": "ns",
            "range": "± 1721.6687454435623"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1411338,
            "unit": "ns",
            "range": "± 93078.11425742033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2646804.3846153845,
            "unit": "ns",
            "range": "± 90240.45504639123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2235401.0898876404,
            "unit": "ns",
            "range": "± 123018.94190240496"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5462764.742857143,
            "unit": "ns",
            "range": "± 165583.80117478507"
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
          "id": "3b417c1e4e6df25ea6b937245d3b0d7003ae5afc",
          "message": "feat: add ProposalClaim and its related features",
          "timestamp": "2023-06-26T18:29:26+09:00",
          "tree_id": "7ef0639f8add49fecc2c0e1b4d6d12bd43caf5f6",
          "url": "https://github.com/limebell/libplanet/commit/3b417c1e4e6df25ea6b937245d3b0d7003ae5afc"
        },
        "date": 1687772516651,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3203321.466666667,
            "unit": "ns",
            "range": "± 36361.17621047928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3387154.533333333,
            "unit": "ns",
            "range": "± 38020.40903414651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4255586.466666667,
            "unit": "ns",
            "range": "± 46733.173871713545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4270298.666666667,
            "unit": "ns",
            "range": "± 91230.03434241186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6851343.681818182,
            "unit": "ns",
            "range": "± 164218.23256218026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7621247.25,
            "unit": "ns",
            "range": "± 27601.32915813031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19948870.933333334,
            "unit": "ns",
            "range": "± 128428.24355617346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50206626.2,
            "unit": "ns",
            "range": "± 366939.8982449695"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99247133.5,
            "unit": "ns",
            "range": "± 696504.688107117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199249690.73333332,
            "unit": "ns",
            "range": "± 748624.437224459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278313.649122807,
            "unit": "ns",
            "range": "± 12095.373675045037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261003.83333333334,
            "unit": "ns",
            "range": "± 8352.066772714796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230231.36363636365,
            "unit": "ns",
            "range": "± 5580.96923264746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4206359.733333333,
            "unit": "ns",
            "range": "± 25564.91261885172"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3744865.3571428573,
            "unit": "ns",
            "range": "± 29698.95933842993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16759.574468085106,
            "unit": "ns",
            "range": "± 1491.6483736923265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83843.48717948717,
            "unit": "ns",
            "range": "± 4313.085946622254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71356.97142857143,
            "unit": "ns",
            "range": "± 1912.0685208881582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90024.28571428571,
            "unit": "ns",
            "range": "± 7788.107124155367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5099.474226804124,
            "unit": "ns",
            "range": "± 852.8357976576283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17262.876288659794,
            "unit": "ns",
            "range": "± 1452.5427364462464"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44334,
            "unit": "ns",
            "range": "± 2233.4990237044854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6053567.082331731,
            "unit": "ns",
            "range": "± 14414.764400442056"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1974736.5951450893,
            "unit": "ns",
            "range": "± 1285.6607827268183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1373460.9354166666,
            "unit": "ns",
            "range": "± 886.3270464193155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2560006.1,
            "unit": "ns",
            "range": "± 4559.476968193188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 799329.886858259,
            "unit": "ns",
            "range": "± 720.8508367234955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745098.8811383928,
            "unit": "ns",
            "range": "± 500.1134974956784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1352193.585106383,
            "unit": "ns",
            "range": "± 86463.64808433554"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2572376.1071428573,
            "unit": "ns",
            "range": "± 108924.61634170814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2141602.5316455695,
            "unit": "ns",
            "range": "± 103956.1393787507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5237609.391304348,
            "unit": "ns",
            "range": "± 126282.15332836629"
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
          "id": "699ea6ec66d34cef98129cfe5b925e5cad5bb577",
          "message": "chore: fix test",
          "timestamp": "2023-06-26T18:54:29+09:00",
          "tree_id": "4ad86a30b5c84a1ced2d2cfa0b87e341e5fb6e3e",
          "url": "https://github.com/limebell/libplanet/commit/699ea6ec66d34cef98129cfe5b925e5cad5bb577"
        },
        "date": 1687774261076,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4404464.631578947,
            "unit": "ns",
            "range": "± 136559.5036041701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4675709.214285715,
            "unit": "ns",
            "range": "± 81648.23645293036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5570925.428571428,
            "unit": "ns",
            "range": "± 44790.34642851976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5755467.230769231,
            "unit": "ns",
            "range": "± 233737.18412618866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8937235.444444444,
            "unit": "ns",
            "range": "± 189299.81260648323"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11276226.315789474,
            "unit": "ns",
            "range": "± 248167.27075884675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28569127.933333334,
            "unit": "ns",
            "range": "± 533301.211767591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68741537.6,
            "unit": "ns",
            "range": "± 412521.8806702084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 147795060.36065573,
            "unit": "ns",
            "range": "± 6655119.272648875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 273976569.28571427,
            "unit": "ns",
            "range": "± 1164018.3860412457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 366512.8048780488,
            "unit": "ns",
            "range": "± 13099.194956598501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 359421.4,
            "unit": "ns",
            "range": "± 10622.273010210587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 326942.4,
            "unit": "ns",
            "range": "± 9493.697973592436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5572972,
            "unit": "ns",
            "range": "± 28310.646496979243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4999609.692307692,
            "unit": "ns",
            "range": "± 45219.1861739104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26351.05319148936,
            "unit": "ns",
            "range": "± 2592.2523704259497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 124523.80612244898,
            "unit": "ns",
            "range": "± 11067.375960576455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104181.83695652174,
            "unit": "ns",
            "range": "± 5877.896254589571"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122537.42708333333,
            "unit": "ns",
            "range": "± 13729.035983134652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8386.268041237114,
            "unit": "ns",
            "range": "± 1065.1485471076314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26358.829545454544,
            "unit": "ns",
            "range": "± 2751.984054274134"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59218.47777777778,
            "unit": "ns",
            "range": "± 4082.575399519163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7394529.74296875,
            "unit": "ns",
            "range": "± 39703.75816705388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2315343.969308036,
            "unit": "ns",
            "range": "± 5246.042346650608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1654615.5033854167,
            "unit": "ns",
            "range": "± 3903.593740075036"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3424997.7628348214,
            "unit": "ns",
            "range": "± 5217.293601118469"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1012581.9651041667,
            "unit": "ns",
            "range": "± 538.2074793953846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 912185.7511067708,
            "unit": "ns",
            "range": "± 587.5295247678522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1875053.956521739,
            "unit": "ns",
            "range": "± 137525.99376460855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3588052.4615384615,
            "unit": "ns",
            "range": "± 48598.13731961234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2939751.347222222,
            "unit": "ns",
            "range": "± 144846.3168948541"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7062106.071428572,
            "unit": "ns",
            "range": "± 171029.47083794014"
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
          "id": "5fa367d240a529440ad0ccfee24829bf099b028e",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-06-30T17:00:15+09:00",
          "tree_id": "45513fa3d287186155bac464774fd59445d7c07b",
          "url": "https://github.com/limebell/libplanet/commit/5fa367d240a529440ad0ccfee24829bf099b028e"
        },
        "date": 1688112741388,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7538896.153846154,
            "unit": "ns",
            "range": "± 7345.397831819072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19440308.533333335,
            "unit": "ns",
            "range": "± 98170.71623879544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49836584,
            "unit": "ns",
            "range": "± 259124.6611906452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99152058.33333333,
            "unit": "ns",
            "range": "± 731865.0569990606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196798738.26666668,
            "unit": "ns",
            "range": "± 1130857.6501630754"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45490.01351351351,
            "unit": "ns",
            "range": "± 2288.5661569221465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277328.2888888889,
            "unit": "ns",
            "range": "± 10405.228095053995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 268019.3888888889,
            "unit": "ns",
            "range": "± 5640.637116067954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232559.23076923078,
            "unit": "ns",
            "range": "± 2271.8983308328357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4161714.5833333335,
            "unit": "ns",
            "range": "± 21516.633352144243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3834497.2,
            "unit": "ns",
            "range": "± 40245.1538807558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16144,
            "unit": "ns",
            "range": "± 790.4463126198568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83047.64705882352,
            "unit": "ns",
            "range": "± 3905.370744205051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70376.30769230769,
            "unit": "ns",
            "range": "± 827.0787331138619"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84511.37755102041,
            "unit": "ns",
            "range": "± 10317.852510236615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4361.2040816326535,
            "unit": "ns",
            "range": "± 492.9931715548026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15167.623655913978,
            "unit": "ns",
            "range": "± 1037.8391317286885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1334812.8453608248,
            "unit": "ns",
            "range": "± 86642.45535512843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2516293.1818181816,
            "unit": "ns",
            "range": "± 78433.22845359235"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1684990.559139785,
            "unit": "ns",
            "range": "± 93242.46984148632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4849483.19047619,
            "unit": "ns",
            "range": "± 222170.02246716348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6268408.604910715,
            "unit": "ns",
            "range": "± 15952.9525053957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1853027.2838040865,
            "unit": "ns",
            "range": "± 1312.2188769280951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1339506.9401041667,
            "unit": "ns",
            "range": "± 974.7389503189742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2546727.7109375,
            "unit": "ns",
            "range": "± 1890.605542098795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817197.4106770833,
            "unit": "ns",
            "range": "± 466.08697104762996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739982.5953125,
            "unit": "ns",
            "range": "± 664.7156060824967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3215544.878787879,
            "unit": "ns",
            "range": "± 86274.45119202352"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3376081,
            "unit": "ns",
            "range": "± 68349.4169767294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4253425.783783784,
            "unit": "ns",
            "range": "± 134116.97016765608"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3755999.9565217393,
            "unit": "ns",
            "range": "± 93875.1472878536"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6214299.25,
            "unit": "ns",
            "range": "± 162919.45088599107"
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
          "id": "afcd2302d78eeda8be66c069c95c5deca94c156c",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-07-03T14:07:24+09:00",
          "tree_id": "41e4ea5dd5c3c1373b3f33f04ab6073ce30c2a0d",
          "url": "https://github.com/limebell/libplanet/commit/afcd2302d78eeda8be66c069c95c5deca94c156c"
        },
        "date": 1688361585993,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7743908,
            "unit": "ns",
            "range": "± 26138.445234667543"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19932915.14285714,
            "unit": "ns",
            "range": "± 127773.82030210024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50056436.928571425,
            "unit": "ns",
            "range": "± 173807.4693541742"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102312655.93333334,
            "unit": "ns",
            "range": "± 807256.49427379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207782173.33333334,
            "unit": "ns",
            "range": "± 689576.4928678706"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45884.295774647886,
            "unit": "ns",
            "range": "± 2141.160916047755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283565.1794871795,
            "unit": "ns",
            "range": "± 9245.803044658738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267006.8695652174,
            "unit": "ns",
            "range": "± 5333.052147643614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 254351.0588235294,
            "unit": "ns",
            "range": "± 4991.323364982831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4282034,
            "unit": "ns",
            "range": "± 25180.69974588291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4026985.285714286,
            "unit": "ns",
            "range": "± 19420.558216759615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18733.371134020617,
            "unit": "ns",
            "range": "± 1847.5963851695014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94182.97938144329,
            "unit": "ns",
            "range": "± 7215.37489638645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75280.9375,
            "unit": "ns",
            "range": "± 2277.117461057205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89878.85567010309,
            "unit": "ns",
            "range": "± 9685.344213885839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5184.494845360825,
            "unit": "ns",
            "range": "± 613.4489608576413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19143.20618556701,
            "unit": "ns",
            "range": "± 1592.3977330987404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1380709.1894736842,
            "unit": "ns",
            "range": "± 124890.19945180908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2694626.7407407407,
            "unit": "ns",
            "range": "± 73541.97749249826"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1797037.3541666667,
            "unit": "ns",
            "range": "± 112814.26162213238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4900754.05,
            "unit": "ns",
            "range": "± 100778.36099474352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6368435.976004465,
            "unit": "ns",
            "range": "± 19261.709407975293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1894217.0049479166,
            "unit": "ns",
            "range": "± 4605.583462205397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1349056.7782552084,
            "unit": "ns",
            "range": "± 2990.9542995790675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612975.240364583,
            "unit": "ns",
            "range": "± 2172.132850951155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810396.750390625,
            "unit": "ns",
            "range": "± 717.7095830538053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747791.7963867188,
            "unit": "ns",
            "range": "± 326.6354793773886"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3279348.785714286,
            "unit": "ns",
            "range": "± 31561.508746179497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3522945.6140350876,
            "unit": "ns",
            "range": "± 150042.99669329956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4394710.666666667,
            "unit": "ns",
            "range": "± 96261.42005202983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3865676.5555555555,
            "unit": "ns",
            "range": "± 128903.17081912841"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6393970.692307692,
            "unit": "ns",
            "range": "± 172550.87398950357"
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
          "id": "91f07b8097b95bfabe439653cc1f5818abeb3f42",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-07-04T11:10:55+09:00",
          "tree_id": "4d6fb2006c764afd445ca74592f088c3c679a249",
          "url": "https://github.com/limebell/libplanet/commit/91f07b8097b95bfabe439653cc1f5818abeb3f42"
        },
        "date": 1688437419231,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7702059.785714285,
            "unit": "ns",
            "range": "± 42052.50726482598"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19960030.153846152,
            "unit": "ns",
            "range": "± 61952.818797649226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52104847.46666667,
            "unit": "ns",
            "range": "± 476982.5454823668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103846776.21428572,
            "unit": "ns",
            "range": "± 529840.0024884404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205802600.33333334,
            "unit": "ns",
            "range": "± 1350949.816713394"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47071.129411764705,
            "unit": "ns",
            "range": "± 2539.3118621101307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289279.13157894736,
            "unit": "ns",
            "range": "± 9761.823542459213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269871.34375,
            "unit": "ns",
            "range": "± 8225.523113512441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236955.17647058822,
            "unit": "ns",
            "range": "± 4810.35687651257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4246064,
            "unit": "ns",
            "range": "± 16154.058117595921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3917873.0714285714,
            "unit": "ns",
            "range": "± 29726.542259179983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17433.884210526317,
            "unit": "ns",
            "range": "± 1589.183336792684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 88857.44565217392,
            "unit": "ns",
            "range": "± 4848.744014020267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71695.31578947368,
            "unit": "ns",
            "range": "± 1548.5691263812819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92752.48453608247,
            "unit": "ns",
            "range": "± 12028.235139240609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4625.305263157895,
            "unit": "ns",
            "range": "± 530.7899587324099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16699.073684210525,
            "unit": "ns",
            "range": "± 1470.446199773311"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1391808.2872340425,
            "unit": "ns",
            "range": "± 85329.2865826356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2625271.9111111113,
            "unit": "ns",
            "range": "± 98651.74661238257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1800829.4,
            "unit": "ns",
            "range": "± 99581.39162500713"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4941824.9677419355,
            "unit": "ns",
            "range": "± 150305.48304757744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5951512.978125,
            "unit": "ns",
            "range": "± 15742.057342399157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1998764.531529018,
            "unit": "ns",
            "range": "± 670.0563916997111"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1349132.5757211538,
            "unit": "ns",
            "range": "± 584.8915176815675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2529536.2361778845,
            "unit": "ns",
            "range": "± 1515.9442801469627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802830.1585518973,
            "unit": "ns",
            "range": "± 606.5382530275019"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732573.0426432291,
            "unit": "ns",
            "range": "± 361.1535859727299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3384939.066666667,
            "unit": "ns",
            "range": "± 51790.24829536192"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3453222.6842105263,
            "unit": "ns",
            "range": "± 71456.43653230082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4374255.333333333,
            "unit": "ns",
            "range": "± 69402.92117119595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3872813.152173913,
            "unit": "ns",
            "range": "± 147400.29336092735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6434561.714285715,
            "unit": "ns",
            "range": "± 144895.51270385942"
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
          "id": "880190bf4a09c553ab7ea36948fe840e2146e359",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-07-04T11:52:41+09:00",
          "tree_id": "8f72637bf67074cc3759fc33d9cb1e80ef9f8b2c",
          "url": "https://github.com/limebell/libplanet/commit/880190bf4a09c553ab7ea36948fe840e2146e359"
        },
        "date": 1688440178335,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8222349.357142857,
            "unit": "ns",
            "range": "± 137223.33142873735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21612015.35714286,
            "unit": "ns",
            "range": "± 590258.3044223074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54611134.9375,
            "unit": "ns",
            "range": "± 2019912.7201536307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115109089.27058823,
            "unit": "ns",
            "range": "± 6154958.186051894"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228443907.75409836,
            "unit": "ns",
            "range": "± 10241610.448509539"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59140.010309278354,
            "unit": "ns",
            "range": "± 9912.788563995298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 334931.9247311828,
            "unit": "ns",
            "range": "± 37517.651311904694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315550.75531914894,
            "unit": "ns",
            "range": "± 29279.784970303815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286161.9183673469,
            "unit": "ns",
            "range": "± 31349.34118634728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5204223.066666666,
            "unit": "ns",
            "range": "± 231279.73449687418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4264410.47368421,
            "unit": "ns",
            "range": "± 315650.1592553243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22612.29,
            "unit": "ns",
            "range": "± 6756.341521373406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98187.74226804124,
            "unit": "ns",
            "range": "± 15450.770128647278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96935.48484848485,
            "unit": "ns",
            "range": "± 15875.117382412653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 109144.02105263158,
            "unit": "ns",
            "range": "± 18431.53398562859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10411.13,
            "unit": "ns",
            "range": "± 6121.483633223092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23143.15306122449,
            "unit": "ns",
            "range": "± 7255.505648364155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1569169.7676767677,
            "unit": "ns",
            "range": "± 169646.39775468077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2929652.5816326533,
            "unit": "ns",
            "range": "± 213524.82143580943"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2013600.275510204,
            "unit": "ns",
            "range": "± 187953.81803110495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5964553.868686869,
            "unit": "ns",
            "range": "± 581022.7557784817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6693508.453125,
            "unit": "ns",
            "range": "± 142435.64214336488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2133972.862877155,
            "unit": "ns",
            "range": "± 62546.523465529346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1581675.7526633523,
            "unit": "ns",
            "range": "± 37794.75417767218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2846613.091064453,
            "unit": "ns",
            "range": "± 52892.05662372079"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 949835.5788143382,
            "unit": "ns",
            "range": "± 19507.468325459427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 891221.3955543155,
            "unit": "ns",
            "range": "± 21020.939148929105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3572307.587628866,
            "unit": "ns",
            "range": "± 241216.02655256414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3800067.5918367347,
            "unit": "ns",
            "range": "± 330451.4370102838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4792517.515151516,
            "unit": "ns",
            "range": "± 327636.2824840787"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4184937.02,
            "unit": "ns",
            "range": "± 328873.34113996715"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7559748.105263158,
            "unit": "ns",
            "range": "± 503436.61523421016"
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
          "id": "99ed9573b621625aa04c8a06fea9f594eb169e2b",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-07-04T14:02:18+09:00",
          "tree_id": "906b6b6ca581f40b2e68bdab14449e168a89df0c",
          "url": "https://github.com/limebell/libplanet/commit/99ed9573b621625aa04c8a06fea9f594eb169e2b"
        },
        "date": 1688447726643,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7716494.533333333,
            "unit": "ns",
            "range": "± 101372.5185871163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21606911.4,
            "unit": "ns",
            "range": "± 206384.50186789013"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55045750.333333336,
            "unit": "ns",
            "range": "± 674583.2581103755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107056571.26666667,
            "unit": "ns",
            "range": "± 1394500.3262352468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212282000.7142857,
            "unit": "ns",
            "range": "± 1773496.5632480604"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48150.40697674418,
            "unit": "ns",
            "range": "± 2614.375464181734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289102.5483870968,
            "unit": "ns",
            "range": "± 7810.795963872524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269846.125,
            "unit": "ns",
            "range": "± 8292.616435040854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 239097.15,
            "unit": "ns",
            "range": "± 5222.978241689112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4376975.307692308,
            "unit": "ns",
            "range": "± 33893.01172411164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4001482.7333333334,
            "unit": "ns",
            "range": "± 49488.08286917838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17477.54761904762,
            "unit": "ns",
            "range": "± 959.9602703219923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85696.046875,
            "unit": "ns",
            "range": "± 3703.026747541253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70816.23076923077,
            "unit": "ns",
            "range": "± 1171.8925685862557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94694.5612244898,
            "unit": "ns",
            "range": "± 13033.332907655658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4928.948453608247,
            "unit": "ns",
            "range": "± 641.9349066678224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17305.510869565216,
            "unit": "ns",
            "range": "± 1325.934930319355"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1424016.1684210526,
            "unit": "ns",
            "range": "± 83950.69423707123"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2689165.9583333335,
            "unit": "ns",
            "range": "± 68451.99414980652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1835080.4787234042,
            "unit": "ns",
            "range": "± 100079.44783200875"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4803232.45,
            "unit": "ns",
            "range": "± 98790.54275026586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5954425.727604167,
            "unit": "ns",
            "range": "± 28477.62108024437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1866199.5760416666,
            "unit": "ns",
            "range": "± 5042.940973626151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369615.939732143,
            "unit": "ns",
            "range": "± 5178.6437336625995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2595716.195052083,
            "unit": "ns",
            "range": "± 4655.0246939416875"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 835089.6481119791,
            "unit": "ns",
            "range": "± 1427.90568029042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 754189.6093052456,
            "unit": "ns",
            "range": "± 582.02943643824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3433107,
            "unit": "ns",
            "range": "± 80901.14816565794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3570252.512820513,
            "unit": "ns",
            "range": "± 115957.1303165804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4211021.5625,
            "unit": "ns",
            "range": "± 68114.02274027353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4064987.6666666665,
            "unit": "ns",
            "range": "± 85804.08615527104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6485118.117647059,
            "unit": "ns",
            "range": "± 264758.998534263"
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
          "id": "8396585d1f01451d24e83a500cb5271f205aa0b1",
          "message": "chore: apply suggestions from the code review",
          "timestamp": "2023-07-04T16:59:15+09:00",
          "tree_id": "87a8c2727e623f7e214fe63744c3220d44bcac9b",
          "url": "https://github.com/limebell/libplanet/commit/8396585d1f01451d24e83a500cb5271f205aa0b1"
        },
        "date": 1688458296060,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7689546.733333333,
            "unit": "ns",
            "range": "± 46609.935160200504"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19325539.666666668,
            "unit": "ns",
            "range": "± 86388.2889770422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49856152.53333333,
            "unit": "ns",
            "range": "± 572959.4862836372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99175663.26666667,
            "unit": "ns",
            "range": "± 805738.3370627452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196581192.53333333,
            "unit": "ns",
            "range": "± 1576899.3951648038"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47145.38888888889,
            "unit": "ns",
            "range": "± 2242.463751685026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278869.0857142857,
            "unit": "ns",
            "range": "± 7774.298059372717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266787.4137931034,
            "unit": "ns",
            "range": "± 7427.17057507309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231478.95238095237,
            "unit": "ns",
            "range": "± 5071.845723956817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4238737.6,
            "unit": "ns",
            "range": "± 40373.26515653644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3816507.466666667,
            "unit": "ns",
            "range": "± 42487.57586782058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16918.340206185567,
            "unit": "ns",
            "range": "± 1501.685836586376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85422.03797468354,
            "unit": "ns",
            "range": "± 4436.598504869607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71070.92857142857,
            "unit": "ns",
            "range": "± 1003.4776042332994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86517.55102040817,
            "unit": "ns",
            "range": "± 10461.884620705665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4667.326530612245,
            "unit": "ns",
            "range": "± 601.8492254848429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17221.894736842107,
            "unit": "ns",
            "range": "± 1326.5668333219692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1344093.9545454546,
            "unit": "ns",
            "range": "± 73216.43932667082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2571598.64516129,
            "unit": "ns",
            "range": "± 75086.66581737327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1770616.0416666667,
            "unit": "ns",
            "range": "± 115800.71383326178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4705197.838709678,
            "unit": "ns",
            "range": "± 143033.37550914398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6235616.428013393,
            "unit": "ns",
            "range": "± 23503.361765503152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1915661.8703125,
            "unit": "ns",
            "range": "± 5916.340175070089"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361516.04765625,
            "unit": "ns",
            "range": "± 910.9562166312154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2637896.9305245536,
            "unit": "ns",
            "range": "± 3482.9095583843527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808375.9985677083,
            "unit": "ns",
            "range": "± 697.0597662159759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722817.7916434152,
            "unit": "ns",
            "range": "± 355.0331046345419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3192838.275,
            "unit": "ns",
            "range": "± 107185.5951869891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3455317.6666666665,
            "unit": "ns",
            "range": "± 52462.72168974116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4232297.666666667,
            "unit": "ns",
            "range": "± 62676.12715228601"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3759376.9142857143,
            "unit": "ns",
            "range": "± 123288.63514017717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6269162.259259259,
            "unit": "ns",
            "range": "± 162079.1994167791"
          }
        ]
      }
    ]
  }
}