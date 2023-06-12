window.BENCHMARK_DATA = {
  "lastUpdate": 1686556251485,
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
      }
    ]
  }
}