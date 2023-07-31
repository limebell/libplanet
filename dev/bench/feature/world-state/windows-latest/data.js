window.BENCHMARK_DATA = {
  "lastUpdate": 1690797836657,
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
      }
    ]
  }
}