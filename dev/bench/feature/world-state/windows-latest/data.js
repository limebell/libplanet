window.BENCHMARK_DATA = {
  "lastUpdate": 1690870237681,
  "repoUrl": "https://github.com/limebell/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e74fb5a87684d8831b8ca42f80318bfced1494ed",
          "message": "Merge pull request #3342 from planetarium/fix/scrypt\n\nUse @noble/hashes/scrypt instead of scrypt-js",
          "timestamp": "2023-07-31T14:02:49+09:00",
          "tree_id": "d8e2fe6ccbed1438294efe071b5c6627b80c49db",
          "url": "https://github.com/limebell/libplanet/commit/e74fb5a87684d8831b8ca42f80318bfced1494ed"
        },
        "date": 1690797817595,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1665091.3043478262,
            "unit": "ns",
            "range": "± 150675.05875276143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3153467.1232876712,
            "unit": "ns",
            "range": "± 157016.85866208634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2108591.3978494625,
            "unit": "ns",
            "range": "± 143290.9655029371"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5923076.530612245,
            "unit": "ns",
            "range": "± 375514.0308718886"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56652.17391304348,
            "unit": "ns",
            "range": "± 3799.2618791766304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9278670,
            "unit": "ns",
            "range": "± 206650.5035841407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24164877.272727273,
            "unit": "ns",
            "range": "± 459066.4667425033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60704223.07692308,
            "unit": "ns",
            "range": "± 888785.2497968281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127382216.21621622,
            "unit": "ns",
            "range": "± 4282690.09401759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 251398505.2631579,
            "unit": "ns",
            "range": "± 5508319.046726172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6052384.869791667,
            "unit": "ns",
            "range": "± 86295.32276512575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1931841.015625,
            "unit": "ns",
            "range": "± 30376.614757856936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1486839.9479166667,
            "unit": "ns",
            "range": "± 17137.56398485736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3234082.3381696427,
            "unit": "ns",
            "range": "± 57079.67498272796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1049201.2630208333,
            "unit": "ns",
            "range": "± 16743.328352984805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 946980.1478794643,
            "unit": "ns",
            "range": "± 9543.571352692383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3890610.714285714,
            "unit": "ns",
            "range": "± 108852.63344025401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4122690.476190476,
            "unit": "ns",
            "range": "± 175734.85133106133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4952076,
            "unit": "ns",
            "range": "± 197480.44678201558"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4553559.677419355,
            "unit": "ns",
            "range": "± 136602.36785365694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7550528.358208955,
            "unit": "ns",
            "range": "± 357118.6301522355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 312706.25,
            "unit": "ns",
            "range": "± 5982.359484350635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 307525.71428571426,
            "unit": "ns",
            "range": "± 9728.319571265753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276629.87012987013,
            "unit": "ns",
            "range": "± 14171.887154124099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5000315.384615385,
            "unit": "ns",
            "range": "± 76198.9812503405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4541973.684210527,
            "unit": "ns",
            "range": "± 98264.57393805802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26154.166666666668,
            "unit": "ns",
            "range": "± 2249.3000860696607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110204.25531914894,
            "unit": "ns",
            "range": "± 8142.863025784717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99397.36842105263,
            "unit": "ns",
            "range": "± 7731.681743035465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124850,
            "unit": "ns",
            "range": "± 18273.933117392855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8519.791666666666,
            "unit": "ns",
            "range": "± 1372.0226936642937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26700,
            "unit": "ns",
            "range": "± 2356.1267651239255"
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
          "id": "761e6d1e663d7e69b2a9812f3ccac608fefb77fa",
          "message": "chore: update docstring and minor refactoring",
          "timestamp": "2023-08-01T14:16:18+09:00",
          "tree_id": "8a0ea1506be1c58d3455476c750c017a89a132a0",
          "url": "https://github.com/limebell/libplanet/commit/761e6d1e663d7e69b2a9812f3ccac608fefb77fa"
        },
        "date": 1690868051451,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1587118.3673469387,
            "unit": "ns",
            "range": "± 125435.24089809303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2965925.806451613,
            "unit": "ns",
            "range": "± 133985.8457602633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2032106.0606060605,
            "unit": "ns",
            "range": "± 145394.59174891282"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5658078,
            "unit": "ns",
            "range": "± 346148.9060616497"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54222.10526315789,
            "unit": "ns",
            "range": "± 4725.196808855565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7671980.769230769,
            "unit": "ns",
            "range": "± 392075.7126252141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22526254,
            "unit": "ns",
            "range": "± 593015.9030189101"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58828166.666666664,
            "unit": "ns",
            "range": "± 1242029.6458524936"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116672346.66666667,
            "unit": "ns",
            "range": "± 2084708.8333408874"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235708986.66666666,
            "unit": "ns",
            "range": "± 4243479.591909496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5231683.7890625,
            "unit": "ns",
            "range": "± 20826.660194319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1668427.6041666667,
            "unit": "ns",
            "range": "± 7429.798315496898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1260831.3541666667,
            "unit": "ns",
            "range": "± 6769.925438939289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2757728.575721154,
            "unit": "ns",
            "range": "± 7524.520032150033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 871723.5546875,
            "unit": "ns",
            "range": "± 2374.064315157927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 797730.1827566965,
            "unit": "ns",
            "range": "± 2668.9925186405417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3579384.210526316,
            "unit": "ns",
            "range": "± 155612.80564900464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3745263.529411765,
            "unit": "ns",
            "range": "± 201220.6416604721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4691355.172413793,
            "unit": "ns",
            "range": "± 205001.9941472661"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4232870,
            "unit": "ns",
            "range": "± 233444.45358609906"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6911712,
            "unit": "ns",
            "range": "± 276788.2279259133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 293476.6666666667,
            "unit": "ns",
            "range": "± 12938.3199950297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283259.45945945947,
            "unit": "ns",
            "range": "± 9596.135201778412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251739.79591836734,
            "unit": "ns",
            "range": "± 21209.848615877403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4624242.857142857,
            "unit": "ns",
            "range": "± 45549.19089521559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4256850,
            "unit": "ns",
            "range": "± 102510.23526133054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27704.123711340206,
            "unit": "ns",
            "range": "± 3238.85645733224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110015.78947368421,
            "unit": "ns",
            "range": "± 9682.264063844555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97832.6530612245,
            "unit": "ns",
            "range": "± 14258.517262962037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130842.85714285714,
            "unit": "ns",
            "range": "± 22042.82149320824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8122.916666666667,
            "unit": "ns",
            "range": "± 1826.153804940385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25780.41237113402,
            "unit": "ns",
            "range": "± 3237.1746675424693"
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
          "id": "53026e7b52df867c0924a25aa3b73103ccb4befc",
          "message": "chore: update docstring and minor refactoring",
          "timestamp": "2023-08-01T14:39:39+09:00",
          "tree_id": "8a0ea1506be1c58d3455476c750c017a89a132a0",
          "url": "https://github.com/limebell/libplanet/commit/53026e7b52df867c0924a25aa3b73103ccb4befc"
        },
        "date": 1690869404482,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1370685.8585858585,
            "unit": "ns",
            "range": "± 101279.44269330039"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2551282.9545454546,
            "unit": "ns",
            "range": "± 139957.5068694115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1851942.7083333333,
            "unit": "ns",
            "range": "± 152003.33565923836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5046378.378378378,
            "unit": "ns",
            "range": "± 252336.0736134439"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52198.45360824742,
            "unit": "ns",
            "range": "± 5477.341839380627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7678913.333333333,
            "unit": "ns",
            "range": "± 120851.77383098369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20566042.85714286,
            "unit": "ns",
            "range": "± 240173.97128647493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51905885.71428572,
            "unit": "ns",
            "range": "± 497162.16338665265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103927393.33333333,
            "unit": "ns",
            "range": "± 959291.8418341334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206628703.84615386,
            "unit": "ns",
            "range": "± 2024927.325286591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4910668.489583333,
            "unit": "ns",
            "range": "± 34963.510794994545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1558667.954799107,
            "unit": "ns",
            "range": "± 7898.95785791629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1223922.7388822115,
            "unit": "ns",
            "range": "± 3766.1850909436503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2680699.549278846,
            "unit": "ns",
            "range": "± 8109.835678621773"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851547.5811298077,
            "unit": "ns",
            "range": "± 4285.185461862908"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789579.4170673077,
            "unit": "ns",
            "range": "± 3054.486507728021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3190772,
            "unit": "ns",
            "range": "± 122877.06323552721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3370697.0588235296,
            "unit": "ns",
            "range": "± 107794.52812697705"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4101571.111111111,
            "unit": "ns",
            "range": "± 154296.8502922241"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3728967.7419354836,
            "unit": "ns",
            "range": "± 160294.17503114676"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6243066.666666667,
            "unit": "ns",
            "range": "± 222383.52025566288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 272222.22222222225,
            "unit": "ns",
            "range": "± 11452.373349917996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257737.28813559323,
            "unit": "ns",
            "range": "± 11416.18479517634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238029.7619047619,
            "unit": "ns",
            "range": "± 12732.803472918957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4190878.5714285714,
            "unit": "ns",
            "range": "± 49020.40671725679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3756707.1428571427,
            "unit": "ns",
            "range": "± 44967.77417535489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20603.225806451614,
            "unit": "ns",
            "range": "± 1843.6407513928398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87663.15789473684,
            "unit": "ns",
            "range": "± 5355.5906885926415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 80130.20833333333,
            "unit": "ns",
            "range": "± 7358.033487165277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 98673.19587628866,
            "unit": "ns",
            "range": "± 14408.732273231033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6145.360824742268,
            "unit": "ns",
            "range": "± 1104.915213428605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21067.74193548387,
            "unit": "ns",
            "range": "± 1840.0237055610583"
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
          "id": "f72ba61b03c1db948eff4d0b23ece8fc641ef950",
          "message": "chore: update docstring and minor refactoring",
          "timestamp": "2023-08-01T14:50:57+09:00",
          "tree_id": "adbffacf7e50247cc7ef38db738dc495d40ca7a1",
          "url": "https://github.com/limebell/libplanet/commit/f72ba61b03c1db948eff4d0b23ece8fc641ef950"
        },
        "date": 1690870220558,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1684534.693877551,
            "unit": "ns",
            "range": "± 136467.23491961855"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3076860,
            "unit": "ns",
            "range": "± 135729.314620894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2091247.2527472528,
            "unit": "ns",
            "range": "± 116673.33346728695"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5500650,
            "unit": "ns",
            "range": "± 152799.41892638998"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56146.153846153844,
            "unit": "ns",
            "range": "± 4733.223183983797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9035305.263157895,
            "unit": "ns",
            "range": "± 196445.53803842093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24532200,
            "unit": "ns",
            "range": "± 291084.3249485778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62179230.43478261,
            "unit": "ns",
            "range": "± 1308205.76308816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125138920.83333333,
            "unit": "ns",
            "range": "± 3249040.0120623144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 253692657.14285713,
            "unit": "ns",
            "range": "± 6018944.118495489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5973760.364583333,
            "unit": "ns",
            "range": "± 56298.10507621483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1952223.5770089286,
            "unit": "ns",
            "range": "± 15752.33189861043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1439527.6432291667,
            "unit": "ns",
            "range": "± 18911.016739687417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3252991.4620535714,
            "unit": "ns",
            "range": "± 39421.25234690066"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1027384.2494419643,
            "unit": "ns",
            "range": "± 15853.161740412974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 965888.2747395834,
            "unit": "ns",
            "range": "± 14272.711170436762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4028785.294117647,
            "unit": "ns",
            "range": "± 126989.14325428112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4219312.820512821,
            "unit": "ns",
            "range": "± 147287.4403826305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5066381.081081081,
            "unit": "ns",
            "range": "± 170442.8901385998"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4582995,
            "unit": "ns",
            "range": "± 104429.19270718166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7495822.7272727275,
            "unit": "ns",
            "range": "± 275175.7348547544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322133.3333333333,
            "unit": "ns",
            "range": "± 10094.118489010094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308519.23076923075,
            "unit": "ns",
            "range": "± 12833.122708894294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280237.2340425532,
            "unit": "ns",
            "range": "± 15896.567452860532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5009893.333333333,
            "unit": "ns",
            "range": "± 74788.3725365559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4555602.631578947,
            "unit": "ns",
            "range": "± 97488.6339153958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26064.130434782608,
            "unit": "ns",
            "range": "± 2547.2925304226574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112669.58762886598,
            "unit": "ns",
            "range": "± 6822.949007688099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98412.63157894737,
            "unit": "ns",
            "range": "± 12865.864799681094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112795.91836734694,
            "unit": "ns",
            "range": "± 17813.73221235442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7075.263157894737,
            "unit": "ns",
            "range": "± 1165.3662031559036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24606.382978723403,
            "unit": "ns",
            "range": "± 2490.619325778976"
          }
        ]
      }
    ]
  }
}