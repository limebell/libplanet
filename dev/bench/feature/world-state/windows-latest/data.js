window.BENCHMARK_DATA = {
  "lastUpdate": 1690868071787,
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
      }
    ]
  }
}