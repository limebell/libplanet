window.BENCHMARK_DATA = {
  "lastUpdate": 1680156027404,
  "repoUrl": "https://github.com/limebell/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "riemannulus@hitagi.moe",
            "name": "Lee Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "6e999ead08b2f210ed40ee3a30c464e6fbf6e6c3",
          "message": "fix: make `ValidatorStateExtensions` to public\n\n(cherry picked from commit 84da0b42fe7f01833b1c9846eca09c2a45778b34)",
          "timestamp": "2023-03-30T14:44:00+09:00",
          "tree_id": "b2ca2ebd4b092a4793d818439be5a2fb2c3d2848",
          "url": "https://github.com/limebell/libplanet/commit/6e999ead08b2f210ed40ee3a30c464e6fbf6e6c3"
        },
        "date": 1680155771582,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3294394.1428571427,
            "unit": "ns",
            "range": "± 92749.68235371099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5154231,
            "unit": "ns",
            "range": "± 57582.21203511674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23929888.466666665,
            "unit": "ns",
            "range": "± 186133.717918009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6403826.5,
            "unit": "ns",
            "range": "± 71085.35690362245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26925175.333333332,
            "unit": "ns",
            "range": "± 291520.71698610927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7823265.733333333,
            "unit": "ns",
            "range": "± 33610.13032122196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19757464,
            "unit": "ns",
            "range": "± 90500.5840549425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50164712.2,
            "unit": "ns",
            "range": "± 243782.0167621066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101345539.8,
            "unit": "ns",
            "range": "± 492932.3437262533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202752913.14285713,
            "unit": "ns",
            "range": "± 229311.76100901357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1365531.42,
            "unit": "ns",
            "range": "± 118594.36487235967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2505172.6818181816,
            "unit": "ns",
            "range": "± 57798.35458638887"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2174991.565217391,
            "unit": "ns",
            "range": "± 103372.36735754048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5058750.71875,
            "unit": "ns",
            "range": "± 154372.4969011611"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46258.586956521736,
            "unit": "ns",
            "range": "± 1775.9079878077637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6126813.702604166,
            "unit": "ns",
            "range": "± 23782.851673789184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1934747.650390625,
            "unit": "ns",
            "range": "± 3591.3114631934523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1335965.9563802083,
            "unit": "ns",
            "range": "± 1368.944173042919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2545012.8015625,
            "unit": "ns",
            "range": "± 1692.833490946229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796872.0559645433,
            "unit": "ns",
            "range": "± 367.92987817933096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730675.4102213542,
            "unit": "ns",
            "range": "± 477.13391326086065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199233,
            "unit": "ns",
            "range": "± 1971.0250217497585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191979.6857142857,
            "unit": "ns",
            "range": "± 5171.4486750154765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163594.05714285714,
            "unit": "ns",
            "range": "± 5312.971838937652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11297517.6,
            "unit": "ns",
            "range": "± 80402.0825439242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9183582.066666666,
            "unit": "ns",
            "range": "± 78282.74029938497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18566.59375,
            "unit": "ns",
            "range": "± 1347.8547210338204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53604.22826086957,
            "unit": "ns",
            "range": "± 3209.9227442802257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39544.75862068965,
            "unit": "ns",
            "range": "± 1143.21766003968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89342.60416666667,
            "unit": "ns",
            "range": "± 9744.691920251458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4825.773195876289,
            "unit": "ns",
            "range": "± 499.43266782492475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18068.021276595744,
            "unit": "ns",
            "range": "± 1287.4484140722989"
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
          "id": "b7adad72eb5ce755993d4cd3e0cba9ba383afcbd",
          "message": "chore: update changelog",
          "timestamp": "2023-03-30T14:46:23+09:00",
          "tree_id": "e9e4138353a2808dc8e02aab5bdc269078c1ba27",
          "url": "https://github.com/limebell/libplanet/commit/b7adad72eb5ce755993d4cd3e0cba9ba383afcbd"
        },
        "date": 1680156024477,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3831885.8,
            "unit": "ns",
            "range": "± 44091.91066591953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6013938.666666667,
            "unit": "ns",
            "range": "± 61060.451212205226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26947825.5,
            "unit": "ns",
            "range": "± 254667.4037369435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7271049,
            "unit": "ns",
            "range": "± 88974.00985508245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30315542.866666667,
            "unit": "ns",
            "range": "± 495651.157640398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8763615.733333332,
            "unit": "ns",
            "range": "± 21223.0805070688"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22947860.285714287,
            "unit": "ns",
            "range": "± 126942.97881479553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56820254.333333336,
            "unit": "ns",
            "range": "± 178159.41503033842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112619993.06666666,
            "unit": "ns",
            "range": "± 190320.04687873478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 225934458.35714287,
            "unit": "ns",
            "range": "± 359682.31304510654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1608947.625,
            "unit": "ns",
            "range": "± 114009.56543786832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2954583.361111111,
            "unit": "ns",
            "range": "± 96547.19886715744"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2506337.3076923075,
            "unit": "ns",
            "range": "± 128162.44882821316"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5845964.484848484,
            "unit": "ns",
            "range": "± 182217.3000506746"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 82515.1129032258,
            "unit": "ns",
            "range": "± 3754.4997226490455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6490556.419791667,
            "unit": "ns",
            "range": "± 30853.067670838533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1932315.1402064732,
            "unit": "ns",
            "range": "± 2957.925559538852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367184.1342447917,
            "unit": "ns",
            "range": "± 3280.60233540809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3041077.597916667,
            "unit": "ns",
            "range": "± 39691.040928730436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 848080.5909598215,
            "unit": "ns",
            "range": "± 335.49523888464216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766409.27578125,
            "unit": "ns",
            "range": "± 374.2748181606315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247110.72916666666,
            "unit": "ns",
            "range": "± 8944.646031409868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250875.55172413794,
            "unit": "ns",
            "range": "± 7332.28460589685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227395.20833333334,
            "unit": "ns",
            "range": "± 5254.22874862789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12894404.2,
            "unit": "ns",
            "range": "± 41168.29092569738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10419067.133333333,
            "unit": "ns",
            "range": "± 55977.97801797553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32426.645161290322,
            "unit": "ns",
            "range": "± 2114.7490633599455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73466.49462365592,
            "unit": "ns",
            "range": "± 7236.525234536219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67638.0303030303,
            "unit": "ns",
            "range": "± 2158.262980455123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137720.92857142858,
            "unit": "ns",
            "range": "± 17261.3560327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11720.263157894737,
            "unit": "ns",
            "range": "± 927.8310238047673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30953.629213483146,
            "unit": "ns",
            "range": "± 1736.1716660909065"
          }
        ]
      }
    ]
  }
}