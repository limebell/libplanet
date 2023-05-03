window.BENCHMARK_DATA = {
  "lastUpdate": 1683087111413,
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
          "id": "47f95e41a0b9dbca56895ff8811928cea151bc8e",
          "message": "chore: adjust API changes",
          "timestamp": "2023-05-03T12:52:47+09:00",
          "tree_id": "5527a4559af14670b47df85a90312c56c25df203",
          "url": "https://github.com/limebell/libplanet/commit/47f95e41a0b9dbca56895ff8811928cea151bc8e"
        },
        "date": 1683087087127,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1412602.1276595744,
            "unit": "ns",
            "range": "± 115307.84227470413"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2618604.255319149,
            "unit": "ns",
            "range": "± 100521.82968076227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2290579.5918367347,
            "unit": "ns",
            "range": "± 155417.6129805562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5578134.343434343,
            "unit": "ns",
            "range": "± 356521.3864729221"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54783.333333333336,
            "unit": "ns",
            "range": "± 5662.353363579058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7419822.7272727275,
            "unit": "ns",
            "range": "± 260730.72170133816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19805142.85714286,
            "unit": "ns",
            "range": "± 110633.111362152"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51048406.666666664,
            "unit": "ns",
            "range": "± 644296.2178850288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102336113.33333333,
            "unit": "ns",
            "range": "± 763562.0246737063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204182426.66666666,
            "unit": "ns",
            "range": "± 2195711.746455761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4782694.230769231,
            "unit": "ns",
            "range": "± 28984.34386499209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1530224.31640625,
            "unit": "ns",
            "range": "± 9911.120351377913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1176573.5286458333,
            "unit": "ns",
            "range": "± 6548.219877712221"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2656575.3756009615,
            "unit": "ns",
            "range": "± 11025.260766063591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829956.0616629465,
            "unit": "ns",
            "range": "± 3087.4524107120615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787323.5909598215,
            "unit": "ns",
            "range": "± 3442.0657207242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3368066.6666666665,
            "unit": "ns",
            "range": "± 88712.9595684999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3468264.5833333335,
            "unit": "ns",
            "range": "± 130393.84936803648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3959941.6666666665,
            "unit": "ns",
            "range": "± 131736.5994811508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4276740,
            "unit": "ns",
            "range": "± 132597.61339075104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6500655.263157895,
            "unit": "ns",
            "range": "± 222198.16052145453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 271558.6206896552,
            "unit": "ns",
            "range": "± 7717.860419710121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265581.94444444444,
            "unit": "ns",
            "range": "± 13127.718512711293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225995.94594594595,
            "unit": "ns",
            "range": "± 11252.390177618572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3987857.1428571427,
            "unit": "ns",
            "range": "± 65985.31846363442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3663444.4444444445,
            "unit": "ns",
            "range": "± 76329.32881866902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22678.125,
            "unit": "ns",
            "range": "± 2164.654007846106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93780,
            "unit": "ns",
            "range": "± 7330.780342196314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86861.45833333333,
            "unit": "ns",
            "range": "± 8053.915292271687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105321.42857142857,
            "unit": "ns",
            "range": "± 15979.931034778861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6170.833333333333,
            "unit": "ns",
            "range": "± 1028.5315712132792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24322.448979591838,
            "unit": "ns",
            "range": "± 2481.998305832135"
          }
        ]
      }
    ]
  }
}