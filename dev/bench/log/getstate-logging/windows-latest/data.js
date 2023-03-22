window.BENCHMARK_DATA = {
  "lastUpdate": 1679474010024,
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
        "date": 1679473988253,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 96398.27586206897,
            "unit": "ns",
            "range": "± 3636.293243695285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4700559.375,
            "unit": "ns",
            "range": "± 36447.92849787779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1500389.7916666667,
            "unit": "ns",
            "range": "± 9813.54202096124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1127737.1651785714,
            "unit": "ns",
            "range": "± 5815.838272966071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2576493.125,
            "unit": "ns",
            "range": "± 8080.8491430349595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826041.5114182692,
            "unit": "ns",
            "range": "± 2027.232708628143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769278.7955729166,
            "unit": "ns",
            "range": "± 2426.757289514561"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4582956.354166667,
            "unit": "ns",
            "range": "± 44586.24091181184"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5951738.461538462,
            "unit": "ns",
            "range": "± 206529.2570269335"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25486781.48148148,
            "unit": "ns",
            "range": "± 709186.2324778889"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6517475,
            "unit": "ns",
            "range": "± 142220.6805414888"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28659806.818181816,
            "unit": "ns",
            "range": "± 1062170.4664129356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92136.73469387754,
            "unit": "ns",
            "range": "± 10548.155530904194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188265,
            "unit": "ns",
            "range": "± 7430.875236448329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157770.49180327868,
            "unit": "ns",
            "range": "± 7089.084197137058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3516150,
            "unit": "ns",
            "range": "± 42269.374256073395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8806855,
            "unit": "ns",
            "range": "± 194072.990813142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16712.90322580645,
            "unit": "ns",
            "range": "± 1437.632852571834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46890.217391304344,
            "unit": "ns",
            "range": "± 3921.147504802579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36392.75362318841,
            "unit": "ns",
            "range": "± 1757.1131772932447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81827.84810126582,
            "unit": "ns",
            "range": "± 6461.025891170421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5024.226804123711,
            "unit": "ns",
            "range": "± 676.7382480378866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15942.391304347826,
            "unit": "ns",
            "range": "± 1417.6465325856534"
          }
        ]
      }
    ]
  }
}