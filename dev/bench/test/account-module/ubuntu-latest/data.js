window.BENCHMARK_DATA = {
  "lastUpdate": 1693548618658,
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
          "id": "313bcd946ab2f3abff8d49358876b80ce560308c",
          "message": "test: add regression test",
          "timestamp": "2023-09-01T14:53:37+09:00",
          "tree_id": "d904cd4bae8c5d67d0e5443d1727273ff148d520",
          "url": "https://github.com/limebell/libplanet/commit/313bcd946ab2f3abff8d49358876b80ce560308c"
        },
        "date": 1693548615221,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1466478.3157894737,
            "unit": "ns",
            "range": "± 161199.2084569727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2913904.02020202,
            "unit": "ns",
            "range": "± 265142.58890634443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1968915.14,
            "unit": "ns",
            "range": "± 182786.94993916003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5379816.93,
            "unit": "ns",
            "range": "± 467590.2134756749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285114.18,
            "unit": "ns",
            "range": "± 31000.0504161793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 278655.10101010103,
            "unit": "ns",
            "range": "± 32094.396849172004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250234.13,
            "unit": "ns",
            "range": "± 26106.744428976555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4427845.6161616165,
            "unit": "ns",
            "range": "± 319729.75194289227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4307875.6122448975,
            "unit": "ns",
            "range": "± 250316.00558554326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19739.752688172044,
            "unit": "ns",
            "range": "± 1948.7078866013953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85883.16326530612,
            "unit": "ns",
            "range": "± 10812.846858693805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74351,
            "unit": "ns",
            "range": "± 9431.208106252048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86560.15656565657,
            "unit": "ns",
            "range": "± 13976.96775760665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5186,
            "unit": "ns",
            "range": "± 627.0814412981925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18824,
            "unit": "ns",
            "range": "± 2088.6884023485322"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48830.265957446805,
            "unit": "ns",
            "range": "± 5455.8172193225655"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8316758.22,
            "unit": "ns",
            "range": "± 523765.5060199314"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23000853.05050505,
            "unit": "ns",
            "range": "± 1397851.0799946801"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57971813.27,
            "unit": "ns",
            "range": "± 3851754.182571983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109878999.4520548,
            "unit": "ns",
            "range": "± 5268953.387689679"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222945071.75,
            "unit": "ns",
            "range": "± 9484052.12648194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3467891.35,
            "unit": "ns",
            "range": "± 283100.9468818169"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3681417.23,
            "unit": "ns",
            "range": "± 302969.38236458955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4371301.43,
            "unit": "ns",
            "range": "± 344561.06460674637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3987133.71,
            "unit": "ns",
            "range": "± 343866.4244759066"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6727792.22,
            "unit": "ns",
            "range": "± 497392.0514985243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5086822.27734375,
            "unit": "ns",
            "range": "± 95347.58002045396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1620020.0263671875,
            "unit": "ns",
            "range": "± 23619.243243181787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1159470.3681640625,
            "unit": "ns",
            "range": "± 13194.09576400043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2670146.4630859373,
            "unit": "ns",
            "range": "± 58896.530719942384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852250.1954848346,
            "unit": "ns",
            "range": "± 16599.397607817256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770431.1745117188,
            "unit": "ns",
            "range": "± 17501.000198870774"
          }
        ]
      }
    ]
  }
}