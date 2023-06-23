window.BENCHMARK_DATA = {
  "lastUpdate": 1687500293552,
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
      }
    ]
  }
}