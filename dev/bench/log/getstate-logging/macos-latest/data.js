window.BENCHMARK_DATA = {
  "lastUpdate": 1679476283972,
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
          "id": "9853dae4111aaa2e067ade46f8dbb1b567be6dad",
          "message": "logging: added additional logging in AccountStateDeltaImpl.GetState()",
          "timestamp": "2023-03-22T17:17:10+09:00",
          "tree_id": "53e764c4d3ef8a1302b3c8813a37ec74bffa9eb3",
          "url": "https://github.com/limebell/libplanet/commit/9853dae4111aaa2e067ade46f8dbb1b567be6dad"
        },
        "date": 1679474069709,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 125962.31521739131,
            "unit": "ns",
            "range": "± 10081.809275233461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 115282.15625,
            "unit": "ns",
            "range": "± 20747.052199657883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228274.34444444443,
            "unit": "ns",
            "range": "± 32531.49486367662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297420.9784946237,
            "unit": "ns",
            "range": "± 114207.21786496707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3685949.775862069,
            "unit": "ns",
            "range": "± 143547.11797922614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9550314.07142857,
            "unit": "ns",
            "range": "± 437898.0392978326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16208.17441860465,
            "unit": "ns",
            "range": "± 1494.2281831560713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49465.75268817204,
            "unit": "ns",
            "range": "± 5143.676739994781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45758.510309278354,
            "unit": "ns",
            "range": "± 6337.544874093012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107512.5,
            "unit": "ns",
            "range": "± 16857.710719717474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5622.6741573033705,
            "unit": "ns",
            "range": "± 673.6187850854668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16533.5,
            "unit": "ns",
            "range": "± 1939.578946381743"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5004346.848460478,
            "unit": "ns",
            "range": "± 234866.2549893933"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5977262.042253521,
            "unit": "ns",
            "range": "± 292268.2761976663"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 27477380.363636363,
            "unit": "ns",
            "range": "± 1285423.3162256202"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6689541.44117647,
            "unit": "ns",
            "range": "± 130976.11593935294"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 31012274.62162162,
            "unit": "ns",
            "range": "± 1544099.6095845734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6223751.816105769,
            "unit": "ns",
            "range": "± 51534.861474221725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1954471.6404803242,
            "unit": "ns",
            "range": "± 53906.14971400288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1266086.5145833334,
            "unit": "ns",
            "range": "± 23296.290638832215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2545262.8888221155,
            "unit": "ns",
            "range": "± 16685.227836048594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 825642.0714285715,
            "unit": "ns",
            "range": "± 7531.449090519325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 693577.5736177885,
            "unit": "ns",
            "range": "± 4462.742456232923"
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
          "id": "ea5185dea75a70ede946f9c276ef35eaef0c5d1f",
          "message": "logging: added additional logging in AccountStateDeltaImpl.GetState()",
          "timestamp": "2023-03-22T17:21:05+09:00",
          "tree_id": "d1769eaa62f6eea77996dc7979c5403369dac380",
          "url": "https://github.com/limebell/libplanet/commit/ea5185dea75a70ede946f9c276ef35eaef0c5d1f"
        },
        "date": 1679474287141,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 136084.6559139785,
            "unit": "ns",
            "range": "± 10766.554238145396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 109041.57291666667,
            "unit": "ns",
            "range": "± 11272.43269755659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245333.98936170212,
            "unit": "ns",
            "range": "± 20106.875235913056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213623.3791208791,
            "unit": "ns",
            "range": "± 15577.36387328682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4159269.75,
            "unit": "ns",
            "range": "± 115358.10708001122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10360646.155555556,
            "unit": "ns",
            "range": "± 573119.8005478273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20152.705263157895,
            "unit": "ns",
            "range": "± 1504.9102459536446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58909.010309278354,
            "unit": "ns",
            "range": "± 7627.961011817593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47171.46842105263,
            "unit": "ns",
            "range": "± 3701.327842391768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129493.48958333333,
            "unit": "ns",
            "range": "± 17202.038961150596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6405.4157894736845,
            "unit": "ns",
            "range": "± 768.4072870493835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18966.260869565216,
            "unit": "ns",
            "range": "± 1506.9527608743838"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5630776.848713235,
            "unit": "ns",
            "range": "± 490435.85110970406"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7147278,
            "unit": "ns",
            "range": "± 136420.59500676574"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29344094.23809524,
            "unit": "ns",
            "range": "± 676825.7270563749"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7945518.466666667,
            "unit": "ns",
            "range": "± 104420.52042026076"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 34084307.12,
            "unit": "ns",
            "range": "± 897199.785995819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6887810.422395834,
            "unit": "ns",
            "range": "± 80450.9261113013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2239334.998046875,
            "unit": "ns",
            "range": "± 41974.50813062335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1477867.4100167411,
            "unit": "ns",
            "range": "± 13482.132461326919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2824765.237723214,
            "unit": "ns",
            "range": "± 25979.027554024353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 932607.5438058035,
            "unit": "ns",
            "range": "± 13537.213993071759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 868634.4885253906,
            "unit": "ns",
            "range": "± 5721.9121556201435"
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
          "id": "a9c34db11dadc8734faf0899c05f33ddc7dc2741",
          "message": "logging: added additional logging in AccountStateDeltaImpl.GetState()",
          "timestamp": "2023-03-22T17:55:25+09:00",
          "tree_id": "d55d2b7ea3f40a4d7b68b8b3b8bcd95836251cf9",
          "url": "https://github.com/limebell/libplanet/commit/a9c34db11dadc8734faf0899c05f33ddc7dc2741"
        },
        "date": 1679476266064,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 139915.63917525773,
            "unit": "ns",
            "range": "± 11888.95313339373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111514.78787878787,
            "unit": "ns",
            "range": "± 16263.487445290351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228889.39784946237,
            "unit": "ns",
            "range": "± 16179.07715642254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228316.15789473685,
            "unit": "ns",
            "range": "± 16491.817653532227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3746290.1923076925,
            "unit": "ns",
            "range": "± 52110.755859330704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10536222.692307692,
            "unit": "ns",
            "range": "± 93077.0271481141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26607.84375,
            "unit": "ns",
            "range": "± 3719.398677568374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64948.58947368421,
            "unit": "ns",
            "range": "± 7253.35683035094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68339.98051948052,
            "unit": "ns",
            "range": "± 3488.2703699624003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135412.81914893616,
            "unit": "ns",
            "range": "± 12749.365291570752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9651.59375,
            "unit": "ns",
            "range": "± 857.7453195580167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24491.242424242424,
            "unit": "ns",
            "range": "± 3582.8044228603285"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4776221.307744565,
            "unit": "ns",
            "range": "± 266844.43470105267"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5918915.110169492,
            "unit": "ns",
            "range": "± 260698.56238119391"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 26388023.5,
            "unit": "ns",
            "range": "± 694565.433862306"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7193014.321428572,
            "unit": "ns",
            "range": "± 202791.55253829696"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30546491.346153848,
            "unit": "ns",
            "range": "± 1098407.4084262906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7042306.528125,
            "unit": "ns",
            "range": "± 48901.175060075184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2004203.0169270833,
            "unit": "ns",
            "range": "± 9790.351949028734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1311976.0084635417,
            "unit": "ns",
            "range": "± 5454.998533225061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2790520.4880756577,
            "unit": "ns",
            "range": "± 60733.411512416154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859546.0241536458,
            "unit": "ns",
            "range": "± 6303.142419928546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728585.1136067709,
            "unit": "ns",
            "range": "± 3190.1442691651628"
          }
        ]
      }
    ]
  }
}