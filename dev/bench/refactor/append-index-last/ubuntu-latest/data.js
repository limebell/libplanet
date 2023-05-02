window.BENCHMARK_DATA = {
  "lastUpdate": 1683022275238,
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
          "id": "d83e58848771964b85d8db23a191fc6289db89b4",
          "message": "refactor: append index at last when appending new block  [skip changelog]",
          "timestamp": "2023-05-02T18:54:04+09:00",
          "tree_id": "d56012325562e1a076ddb8c3ac9c06c670ad82b7",
          "url": "https://github.com/limebell/libplanet/commit/d83e58848771964b85d8db23a191fc6289db89b4"
        },
        "date": 1683022271161,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 408582.4736842105,
            "unit": "ns",
            "range": "± 13786.763773167602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333406.7076923077,
            "unit": "ns",
            "range": "± 15564.472181986968"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 281898.3888888889,
            "unit": "ns",
            "range": "± 4623.692071200357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6594786.523809524,
            "unit": "ns",
            "range": "± 138680.1600736814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4831661.126582279,
            "unit": "ns",
            "range": "± 247787.59762667533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18090.52808988764,
            "unit": "ns",
            "range": "± 966.4418819224517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96122.27586206897,
            "unit": "ns",
            "range": "± 4180.368210900254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83615.12195121951,
            "unit": "ns",
            "range": "± 2851.6213826095664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 214503.15625,
            "unit": "ns",
            "range": "± 18318.059435447634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5369.551020408163,
            "unit": "ns",
            "range": "± 634.3237022418067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17506.98947368421,
            "unit": "ns",
            "range": "± 1088.288833441932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3745176.612244898,
            "unit": "ns",
            "range": "± 149291.2140796214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4019346.4631578946,
            "unit": "ns",
            "range": "± 249080.53705317504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5116450.46969697,
            "unit": "ns",
            "range": "± 238782.3832995687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5034852.25,
            "unit": "ns",
            "range": "± 236003.2342735379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9306493.694117647,
            "unit": "ns",
            "range": "± 502388.8679106299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7201032.409375,
            "unit": "ns",
            "range": "± 50326.5003505771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2321182.5736979167,
            "unit": "ns",
            "range": "± 28119.11250044919"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1635539.60390625,
            "unit": "ns",
            "range": "± 13570.60876830094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3174074.7942708335,
            "unit": "ns",
            "range": "± 35797.75539643167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1019189.3438802083,
            "unit": "ns",
            "range": "± 13280.842953193736"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 940361.1865234375,
            "unit": "ns",
            "range": "± 9606.464221798473"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54665.34444444445,
            "unit": "ns",
            "range": "± 4635.210306759569"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9345120.785714285,
            "unit": "ns",
            "range": "± 265203.56781276345"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24492597.333333332,
            "unit": "ns",
            "range": "± 764020.2276188711"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59884614.11764706,
            "unit": "ns",
            "range": "± 1790510.9870216541"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123045214.1,
            "unit": "ns",
            "range": "± 2799937.3710953626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 243208804.76923078,
            "unit": "ns",
            "range": "± 6620288.96163322"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1644631.3763440861,
            "unit": "ns",
            "range": "± 127508.9865458692"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3253822.5222222223,
            "unit": "ns",
            "range": "± 191367.49641046568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2669177.2365591396,
            "unit": "ns",
            "range": "± 192964.6314115394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7446846.458333333,
            "unit": "ns",
            "range": "± 429431.8218545577"
          }
        ]
      }
    ]
  }
}