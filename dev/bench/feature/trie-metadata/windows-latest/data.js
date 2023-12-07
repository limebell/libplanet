window.BENCHMARK_DATA = {
  "lastUpdate": 1701922649845,
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
          "id": "46b3ec7f3f72770d81fe9efbb02bc0841c1612a9",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-12-06T19:12:30+09:00",
          "tree_id": "5f4f39ed176058ea2d93ea8ac11c6c8f1ce56dbf",
          "url": "https://github.com/limebell/libplanet/commit/46b3ec7f3f72770d81fe9efbb02bc0841c1612a9"
        },
        "date": 1701858298652,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1134615.2173913044,
            "unit": "ns",
            "range": "± 135018.6441621334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2047890.9090909092,
            "unit": "ns",
            "range": "± 205974.41010367003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1898792.4731182796,
            "unit": "ns",
            "range": "± 274688.7987129843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8403414.285714285,
            "unit": "ns",
            "range": "± 332286.1373134474"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36638.63636363636,
            "unit": "ns",
            "range": "± 2913.994446865614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5436635.714285715,
            "unit": "ns",
            "range": "± 60887.64693639055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13955413.333333334,
            "unit": "ns",
            "range": "± 124071.2172600114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35246392.85714286,
            "unit": "ns",
            "range": "± 377148.5617596369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 70066693.33333333,
            "unit": "ns",
            "range": "± 534372.2839084413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 142545814.2857143,
            "unit": "ns",
            "range": "± 856320.8823953633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3279492.1875,
            "unit": "ns",
            "range": "± 7529.419389743076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1066014.453125,
            "unit": "ns",
            "range": "± 2013.2677315265262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745805.2584134615,
            "unit": "ns",
            "range": "± 1680.399344531551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921728.7527901786,
            "unit": "ns",
            "range": "± 5707.2390906651635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618466.4438100961,
            "unit": "ns",
            "range": "± 1866.9174678117488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583183.4049479166,
            "unit": "ns",
            "range": "± 908.7817005983125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2266640.769230769,
            "unit": "ns",
            "range": "± 105140.31060188828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2430664.285714286,
            "unit": "ns",
            "range": "± 30267.92176400765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2879974.285714286,
            "unit": "ns",
            "range": "± 92444.89087418243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3117170.8333333335,
            "unit": "ns",
            "range": "± 192576.82098958883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9395067.142857144,
            "unit": "ns",
            "range": "± 281923.75818029424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188651.06382978722,
            "unit": "ns",
            "range": "± 15774.681938281556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 182025.55555555556,
            "unit": "ns",
            "range": "± 10728.179433508421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146131.50684931508,
            "unit": "ns",
            "range": "± 7266.817213890226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2889312.5,
            "unit": "ns",
            "range": "± 54681.68340495746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2545993.3333333335,
            "unit": "ns",
            "range": "± 47163.08281858153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12702.105263157895,
            "unit": "ns",
            "range": "± 2520.088606487175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58778.57142857143,
            "unit": "ns",
            "range": "± 7547.895743763963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47896.77419354839,
            "unit": "ns",
            "range": "± 3879.1373876636885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68867.01030927835,
            "unit": "ns",
            "range": "± 11494.534223286704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3090.425531914894,
            "unit": "ns",
            "range": "± 687.5340302719364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11642.857142857143,
            "unit": "ns",
            "range": "± 1678.1698270002262"
          }
        ]
      },
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
          "id": "1288a2c7e1f7316ea786f3a4e8e8be6e1bdc67c6",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-12-07T13:06:06+09:00",
          "tree_id": "3bf99737f60078b5c9ca653135fc191dfdfa742a",
          "url": "https://github.com/limebell/libplanet/commit/1288a2c7e1f7316ea786f3a4e8e8be6e1bdc67c6"
        },
        "date": 1701922638405,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1106354,
            "unit": "ns",
            "range": "± 143445.5610109193"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1918568.0412371133,
            "unit": "ns",
            "range": "± 214091.47166300577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1804492.4731182796,
            "unit": "ns",
            "range": "± 256119.00734032047"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10024287.75510204,
            "unit": "ns",
            "range": "± 2615784.991017029"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34151.16279069767,
            "unit": "ns",
            "range": "± 1868.2325202334966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4931966.666666667,
            "unit": "ns",
            "range": "± 21074.855250025415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12805950,
            "unit": "ns",
            "range": "± 102895.43422628327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31811492.307692308,
            "unit": "ns",
            "range": "± 259532.34371826844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 64021863.333333336,
            "unit": "ns",
            "range": "± 624303.1702473985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128352528.57142857,
            "unit": "ns",
            "range": "± 905507.6565352477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3304751.7447916665,
            "unit": "ns",
            "range": "± 7515.180224350352"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1052879.4642857143,
            "unit": "ns",
            "range": "± 3411.0545208830285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 739209.1666666666,
            "unit": "ns",
            "range": "± 2488.609166322444"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1866109.2215401786,
            "unit": "ns",
            "range": "± 1612.8795128105874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606023.3642578125,
            "unit": "ns",
            "range": "± 758.6605367269397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563452.8459821428,
            "unit": "ns",
            "range": "± 1451.7519416612379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2126306.896551724,
            "unit": "ns",
            "range": "± 58559.88345906193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2180400,
            "unit": "ns",
            "range": "± 52359.24340907124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2793572.4137931033,
            "unit": "ns",
            "range": "± 81133.02963366367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3032539.393939394,
            "unit": "ns",
            "range": "± 93454.08277395488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8832113.93442623,
            "unit": "ns",
            "range": "± 226582.50081944905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 170907.60869565216,
            "unit": "ns",
            "range": "± 11875.778597454053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 164140.625,
            "unit": "ns",
            "range": "± 7022.519756480485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 135600,
            "unit": "ns",
            "range": "± 1433.1246121137385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2772557.1428571427,
            "unit": "ns",
            "range": "± 27539.138981169617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2461715,
            "unit": "ns",
            "range": "± 56448.712399654854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10518.888888888889,
            "unit": "ns",
            "range": "± 1525.4319295810185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56125.77319587629,
            "unit": "ns",
            "range": "± 6296.101279603438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45245.744680851065,
            "unit": "ns",
            "range": "± 2661.944672506837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 55650,
            "unit": "ns",
            "range": "± 9196.040337815883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2461.7977528089887,
            "unit": "ns",
            "range": "± 366.9609893737555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10578.021978021978,
            "unit": "ns",
            "range": "± 1820.915654755547"
          }
        ]
      }
    ]
  }
}