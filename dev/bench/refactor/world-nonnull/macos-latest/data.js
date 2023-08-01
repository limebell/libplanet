window.BENCHMARK_DATA = {
  "lastUpdate": 1690884190536,
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
          "id": "1a400abe665869ad4df2dedbd0bb944083c434c3",
          "message": "refactor: minor refactoring",
          "timestamp": "2023-08-01T18:40:56+09:00",
          "tree_id": "c2eec30c5428e1d8a614317b3457f5b268835a5b",
          "url": "https://github.com/limebell/libplanet/commit/1a400abe665869ad4df2dedbd0bb944083c434c3"
        },
        "date": 1690884173990,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8195225.6,
            "unit": "ns",
            "range": "± 98963.83693609644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20470837.257575758,
            "unit": "ns",
            "range": "± 642205.7683650268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50312888.29787234,
            "unit": "ns",
            "range": "± 1952385.1191673325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100310044.20833333,
            "unit": "ns",
            "range": "± 2514366.2735697348"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 224561062.2795699,
            "unit": "ns",
            "range": "± 16104883.411237953"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63888.3,
            "unit": "ns",
            "range": "± 11117.501287839204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321836.4945054945,
            "unit": "ns",
            "range": "± 21716.679183610424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301713.36363636365,
            "unit": "ns",
            "range": "± 23426.660394634975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297236.4736842105,
            "unit": "ns",
            "range": "± 10095.71809551721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4379283.5,
            "unit": "ns",
            "range": "± 119721.6433193135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3731520.709677419,
            "unit": "ns",
            "range": "± 113005.2890314412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19128.96875,
            "unit": "ns",
            "range": "± 3349.9773132087266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95757.62631578947,
            "unit": "ns",
            "range": "± 13828.60165177409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101578.35789473684,
            "unit": "ns",
            "range": "± 12248.454995853246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108261.39690721649,
            "unit": "ns",
            "range": "± 19142.995856559683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7152.676767676768,
            "unit": "ns",
            "range": "± 1343.1163642529787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21069.428571428572,
            "unit": "ns",
            "range": "± 4253.04261070279"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1527377.7857142857,
            "unit": "ns",
            "range": "± 123656.54961314653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3113377.618556701,
            "unit": "ns",
            "range": "± 290308.69243392756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2146317.8608247424,
            "unit": "ns",
            "range": "± 171243.63670125243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5990066.446236559,
            "unit": "ns",
            "range": "± 392861.4758617454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3346754.086956522,
            "unit": "ns",
            "range": "± 187601.6760045539"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3547210.4891304346,
            "unit": "ns",
            "range": "± 232757.41498900205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4454178.9375,
            "unit": "ns",
            "range": "± 175540.1885459907"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4159448.8235294116,
            "unit": "ns",
            "range": "± 131818.5663950749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7231090.622641509,
            "unit": "ns",
            "range": "± 278532.44069609576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6525801.625,
            "unit": "ns",
            "range": "± 169205.98453487986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2024319.69921875,
            "unit": "ns",
            "range": "± 31767.53383342783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1312415.3506510416,
            "unit": "ns",
            "range": "± 9762.81814954033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2565490.9759114585,
            "unit": "ns",
            "range": "± 40596.077914816204"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 867383.6494791667,
            "unit": "ns",
            "range": "± 6164.727348435432"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 779764.031640625,
            "unit": "ns",
            "range": "± 12668.495426253572"
          }
        ]
      }
    ]
  }
}