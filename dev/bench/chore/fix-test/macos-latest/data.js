window.BENCHMARK_DATA = {
  "lastUpdate": 1688976463080,
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
          "id": "38f8ac1b6007597768f85fc2e0d84d7385dc43d2",
          "message": "docs: update changelog",
          "timestamp": "2023-07-10T16:51:06+09:00",
          "tree_id": "09f44e46d42374c61773950b700dba3e238e29cc",
          "url": "https://github.com/limebell/libplanet/commit/38f8ac1b6007597768f85fc2e0d84d7385dc43d2"
        },
        "date": 1688976455767,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8271601.005882353,
            "unit": "ns",
            "range": "± 446006.2932792867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21230848.471698113,
            "unit": "ns",
            "range": "± 884344.1321608741"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53083930.82258064,
            "unit": "ns",
            "range": "± 2412167.0932818796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103933601.64285715,
            "unit": "ns",
            "range": "± 1828893.5731449497"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222721678.32608697,
            "unit": "ns",
            "range": "± 5460203.101826838"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72042.48314606742,
            "unit": "ns",
            "range": "± 11296.89581972165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348861.59574468085,
            "unit": "ns",
            "range": "± 31749.79044044605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 335188.3453608247,
            "unit": "ns",
            "range": "± 33496.12608146532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 334186.5520833333,
            "unit": "ns",
            "range": "± 35203.783110811375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4615533.153061224,
            "unit": "ns",
            "range": "± 423993.4598768868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4188972.5505050505,
            "unit": "ns",
            "range": "± 401942.87623068964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19516.24175824176,
            "unit": "ns",
            "range": "± 4008.6326356465006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99465.4,
            "unit": "ns",
            "range": "± 15000.117318264618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104724.93023255814,
            "unit": "ns",
            "range": "± 10651.843279082455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113595,
            "unit": "ns",
            "range": "± 15361.557599889955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7211.097826086957,
            "unit": "ns",
            "range": "± 951.5804789440091"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18570.73157894737,
            "unit": "ns",
            "range": "± 3387.994252088343"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1568901.543478261,
            "unit": "ns",
            "range": "± 148414.08324912906"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2999704.11827957,
            "unit": "ns",
            "range": "± 185339.92778891727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2048721.2142857143,
            "unit": "ns",
            "range": "± 241948.53096152114"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6124395.542253521,
            "unit": "ns",
            "range": "± 298856.41609606426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3380705.9534883723,
            "unit": "ns",
            "range": "± 252220.00241239704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3776284.303030303,
            "unit": "ns",
            "range": "± 343915.8924195327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4765435.8877551025,
            "unit": "ns",
            "range": "± 340738.7062144823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4219111.878787879,
            "unit": "ns",
            "range": "± 306463.1174770639"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7785997.23655914,
            "unit": "ns",
            "range": "± 696632.9082637801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6610922.388521635,
            "unit": "ns",
            "range": "± 52975.760360303764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2143558.662369792,
            "unit": "ns",
            "range": "± 27135.711040745722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358992.599888393,
            "unit": "ns",
            "range": "± 13527.491822011923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2676173.8077566964,
            "unit": "ns",
            "range": "± 27810.301678011496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 954926.988046875,
            "unit": "ns",
            "range": "± 23018.708894763906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 841432.6534830729,
            "unit": "ns",
            "range": "± 5002.146493428623"
          }
        ]
      }
    ]
  }
}