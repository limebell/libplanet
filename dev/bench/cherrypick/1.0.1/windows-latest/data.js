window.BENCHMARK_DATA = {
  "lastUpdate": 1683136307749,
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
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "swen@planetariumhq.com",
            "name": "Swen Mun",
            "username": "longfin"
          },
          "distinct": true,
          "id": "1629e24181760944ef2e1d72f1737f1821b58f57",
          "message": "chore: adjust API changes",
          "timestamp": "2023-05-04T02:36:46+09:00",
          "tree_id": "889dfae22e65d823fb3586d7d9c2edca0416ab17",
          "url": "https://github.com/limebell/libplanet/commit/1629e24181760944ef2e1d72f1737f1821b58f57"
        },
        "date": 1683136291623,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1363317,
            "unit": "ns",
            "range": "± 123800.4895920542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2394141.1764705884,
            "unit": "ns",
            "range": "± 47052.710586420115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2118150,
            "unit": "ns",
            "range": "± 143463.27267304552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4921251.851851852,
            "unit": "ns",
            "range": "± 136001.00217495675"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42813.48314606742,
            "unit": "ns",
            "range": "± 2291.0989329872777"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6958180,
            "unit": "ns",
            "range": "± 72872.62076488575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17736186.666666668,
            "unit": "ns",
            "range": "± 173028.2134990322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45374480,
            "unit": "ns",
            "range": "± 253644.89857166173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90408200,
            "unit": "ns",
            "range": "± 572368.9132518842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182719753.33333334,
            "unit": "ns",
            "range": "± 847793.3793650656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4795518.900240385,
            "unit": "ns",
            "range": "± 8580.967798579097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1495122.0572916667,
            "unit": "ns",
            "range": "± 2875.392944272617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1149100.4947916667,
            "unit": "ns",
            "range": "± 1076.568923330974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2565466.824776786,
            "unit": "ns",
            "range": "± 16757.353773380277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823006.0686383928,
            "unit": "ns",
            "range": "± 1052.5287666042893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762707.1568080357,
            "unit": "ns",
            "range": "± 648.7410530326808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2970737.5,
            "unit": "ns",
            "range": "± 76551.47635812582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3148434.782608696,
            "unit": "ns",
            "range": "± 67352.0372148909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3843928.5714285714,
            "unit": "ns",
            "range": "± 38075.601486666346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3891917.9487179485,
            "unit": "ns",
            "range": "± 135225.53455498524"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6183064.285714285,
            "unit": "ns",
            "range": "± 154540.66278823337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253902.12765957447,
            "unit": "ns",
            "range": "± 9886.255046928232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240892.1052631579,
            "unit": "ns",
            "range": "± 8194.93520509145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231896.92307692306,
            "unit": "ns",
            "range": "± 10853.037726121447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3869026.6666666665,
            "unit": "ns",
            "range": "± 43743.69287870728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3478733.3333333335,
            "unit": "ns",
            "range": "± 45280.15438304491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17030.107526881722,
            "unit": "ns",
            "range": "± 1961.2986462078243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81542.55319148937,
            "unit": "ns",
            "range": "± 4985.883068249647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72695.91836734694,
            "unit": "ns",
            "range": "± 7136.199548307728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81521.83908045977,
            "unit": "ns",
            "range": "± 8320.253032927743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4368.421052631579,
            "unit": "ns",
            "range": "± 810.8654632872655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16196.39175257732,
            "unit": "ns",
            "range": "± 1641.9666723976477"
          }
        ]
      }
    ]
  }
}