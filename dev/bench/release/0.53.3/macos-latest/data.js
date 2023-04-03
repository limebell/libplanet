window.BENCHMARK_DATA = {
  "lastUpdate": 1680514134808,
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
          "id": "9bf30e78dea928867d8495c01b26c596c146ed4d",
          "message": "release: 0.53.3",
          "timestamp": "2023-04-03T18:10:19+09:00",
          "tree_id": "1e35e6c59fe736419a8076afcc627d67be75dd32",
          "url": "https://github.com/limebell/libplanet/commit/9bf30e78dea928867d8495c01b26c596c146ed4d"
        },
        "date": 1680514125669,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9127898.289473685,
            "unit": "ns",
            "range": "± 201908.5156400126"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23951338.891304348,
            "unit": "ns",
            "range": "± 521978.6950773983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60442763.91954023,
            "unit": "ns",
            "range": "± 2932762.482407136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120300659.14285715,
            "unit": "ns",
            "range": "± 1381326.7485444152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 247946044.43333334,
            "unit": "ns",
            "range": "± 4468536.484428231"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64543.88764044944,
            "unit": "ns",
            "range": "± 4101.978193611984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 239853.42592592593,
            "unit": "ns",
            "range": "± 9974.594495189573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 245603.6222222222,
            "unit": "ns",
            "range": "± 18665.85016368685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238295.74468085106,
            "unit": "ns",
            "range": "± 18422.72002959796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13766803.357142856,
            "unit": "ns",
            "range": "± 200731.55859231777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10891576.469696969,
            "unit": "ns",
            "range": "± 340700.2940275629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22502.073684210525,
            "unit": "ns",
            "range": "± 2926.8867064485457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59195.95652173913,
            "unit": "ns",
            "range": "± 7291.042857790155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46294.793103448275,
            "unit": "ns",
            "range": "± 3553.4733651310894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103650.78021978022,
            "unit": "ns",
            "range": "± 14825.913523139288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5566.811111111111,
            "unit": "ns",
            "range": "± 533.6631863866661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19829.340425531915,
            "unit": "ns",
            "range": "± 1924.6791915514684"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1767250.8163265307,
            "unit": "ns",
            "range": "± 142887.2248737824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3295377.6818181816,
            "unit": "ns",
            "range": "± 145380.5081380115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2819508.3411764707,
            "unit": "ns",
            "range": "± 135327.74870296617"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7292607.2830188675,
            "unit": "ns",
            "range": "± 301661.95734536625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3867295.608108108,
            "unit": "ns",
            "range": "± 192986.8288020286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6146334.184210527,
            "unit": "ns",
            "range": "± 310382.53818579897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27929437.147058822,
            "unit": "ns",
            "range": "± 543173.058246626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7790143.384615385,
            "unit": "ns",
            "range": "± 526310.0022444476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 33707019.0625,
            "unit": "ns",
            "range": "± 1562354.9271585494"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7278750.699519231,
            "unit": "ns",
            "range": "± 68959.33949536826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2273388.708984375,
            "unit": "ns",
            "range": "± 19237.262922007372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1468329.411358173,
            "unit": "ns",
            "range": "± 20203.877291157027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2828946.1267755684,
            "unit": "ns",
            "range": "± 69150.83265462951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1005234.550812752,
            "unit": "ns",
            "range": "± 30243.746062185208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 822373.4193474265,
            "unit": "ns",
            "range": "± 16704.316242202956"
          }
        ]
      }
    ]
  }
}