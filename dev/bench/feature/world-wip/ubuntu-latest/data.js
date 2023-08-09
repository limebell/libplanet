window.BENCHMARK_DATA = {
  "lastUpdate": 1691550503972,
  "repoUrl": "https://github.com/limebell/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "f6f3d48aed11a3c3883db57b87cd134dee39353d",
          "message": "fix test",
          "timestamp": "2023-08-09T11:46:58+09:00",
          "tree_id": "85a1d0e44b14a0b54b7bca7e6116d3602dc9bc35",
          "url": "https://github.com/limebell/libplanet/commit/f6f3d48aed11a3c3883db57b87cd134dee39353d"
        },
        "date": 1691550499767,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3177753.737373737,
            "unit": "ns",
            "range": "± 229978.93382582895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3486479,
            "unit": "ns",
            "range": "± 395142.96434561093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4275857.540816327,
            "unit": "ns",
            "range": "± 345099.4411784429"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3874212.5102040814,
            "unit": "ns",
            "range": "± 463819.3321352803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6948924.319587629,
            "unit": "ns",
            "range": "± 495671.84480650735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7533304.6329113925,
            "unit": "ns",
            "range": "± 391157.0229802525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19128673.145454545,
            "unit": "ns",
            "range": "± 813049.9463192857"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51002034.848101266,
            "unit": "ns",
            "range": "± 2620341.1913977875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98000081.35714285,
            "unit": "ns",
            "range": "± 3140223.850647856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195661224.21052632,
            "unit": "ns",
            "range": "± 4295582.020807135"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60046.14893617021,
            "unit": "ns",
            "range": "± 12540.991389493212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6070784.284352022,
            "unit": "ns",
            "range": "± 289688.3785841299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2059868.90919066,
            "unit": "ns",
            "range": "± 113304.35327484053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1539230.5169602998,
            "unit": "ns",
            "range": "± 94142.86755273683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2917872.510758197,
            "unit": "ns",
            "range": "± 129871.54993087068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 967925.0525691105,
            "unit": "ns",
            "range": "± 44717.99346870502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 954512.2946166992,
            "unit": "ns",
            "range": "± 18102.0759362301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331056.93684210523,
            "unit": "ns",
            "range": "± 47853.752532066115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323922.306122449,
            "unit": "ns",
            "range": "± 50251.707235789596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 283138.28125,
            "unit": "ns",
            "range": "± 34603.82255419437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4637736.826530612,
            "unit": "ns",
            "range": "± 368896.6135133098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4143143.7604166665,
            "unit": "ns",
            "range": "± 332570.4472077345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31702.58620689655,
            "unit": "ns",
            "range": "± 6775.396532722015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113497.66315789474,
            "unit": "ns",
            "range": "± 18282.586866877038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104320.42391304347,
            "unit": "ns",
            "range": "± 17163.981871857235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120972.08510638298,
            "unit": "ns",
            "range": "± 22906.704664679066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5169.536585365854,
            "unit": "ns",
            "range": "± 930.965941946718"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29061.22,
            "unit": "ns",
            "range": "± 8845.458135556279"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1526245.1414141415,
            "unit": "ns",
            "range": "± 237192.2627707454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3156705.8865979384,
            "unit": "ns",
            "range": "± 294759.04385827994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2172157.897959184,
            "unit": "ns",
            "range": "± 296779.7687343777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6503452.948979592,
            "unit": "ns",
            "range": "± 571386.4184903094"
          }
        ]
      }
    ]
  }
}