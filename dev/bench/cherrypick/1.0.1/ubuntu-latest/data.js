window.BENCHMARK_DATA = {
  "lastUpdate": 1683136368477,
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
        "date": 1683086790849,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 286722.88636363635,
            "unit": "ns",
            "range": "± 10288.180547929089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 271226.5,
            "unit": "ns",
            "range": "± 8860.374685724559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228637,
            "unit": "ns",
            "range": "± 2216.9540119066723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4236831.866666666,
            "unit": "ns",
            "range": "± 37690.50991556413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3883163.8571428573,
            "unit": "ns",
            "range": "± 24453.311878438384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19799.322580645163,
            "unit": "ns",
            "range": "± 1229.8302919446132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86614.7108433735,
            "unit": "ns",
            "range": "± 4385.129854656308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75005.11538461539,
            "unit": "ns",
            "range": "± 1990.0288103828666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 91133.01086956522,
            "unit": "ns",
            "range": "± 8541.15735330678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5772.5,
            "unit": "ns",
            "range": "± 541.2880645434594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18605.965909090908,
            "unit": "ns",
            "range": "± 1046.3032510115436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3466674.8666666667,
            "unit": "ns",
            "range": "± 60515.141017843824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4000517.3076923075,
            "unit": "ns",
            "range": "± 61700.34715783564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4256510.785714285,
            "unit": "ns",
            "range": "± 54626.45779526842"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4530638.962962963,
            "unit": "ns",
            "range": "± 108744.96950610263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6842651.029411765,
            "unit": "ns",
            "range": "± 211363.02140665625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5819407.2484375,
            "unit": "ns",
            "range": "± 25343.702990863927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1834532.2367466518,
            "unit": "ns",
            "range": "± 11631.248042934942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1367382.68125,
            "unit": "ns",
            "range": "± 3774.9215662003276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618805.7080729166,
            "unit": "ns",
            "range": "± 1918.7040195132836"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826973.5799479167,
            "unit": "ns",
            "range": "± 3090.5311798046605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750049.871875,
            "unit": "ns",
            "range": "± 747.2986567121129"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48518.50632911392,
            "unit": "ns",
            "range": "± 2146.926269579538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7813768.375,
            "unit": "ns",
            "range": "± 93365.12779753476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21588077.8,
            "unit": "ns",
            "range": "± 323709.1185456474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54771947.2,
            "unit": "ns",
            "range": "± 690325.5056859772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107997210.26666667,
            "unit": "ns",
            "range": "± 1197875.4576053428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 217064730.6,
            "unit": "ns",
            "range": "± 3018496.6423949427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1431735.808988764,
            "unit": "ns",
            "range": "± 79008.73654192766"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2612072.1363636362,
            "unit": "ns",
            "range": "± 63213.939203685026"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2278974,
            "unit": "ns",
            "range": "± 116090.78783174287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5742894.65,
            "unit": "ns",
            "range": "± 379841.58880037256"
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
        "date": 1683136364519,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 345903.4871794872,
            "unit": "ns",
            "range": "± 11157.297835643376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328541.8888888889,
            "unit": "ns",
            "range": "± 13705.514744164691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277271.243902439,
            "unit": "ns",
            "range": "± 9910.007088242894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5063089.5625,
            "unit": "ns",
            "range": "± 94497.08348019267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4707642.428571428,
            "unit": "ns",
            "range": "± 78089.02490965463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25150.76595744681,
            "unit": "ns",
            "range": "± 1611.8920187527967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108871.86315789474,
            "unit": "ns",
            "range": "± 7761.63804219807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100257.78571428571,
            "unit": "ns",
            "range": "± 7522.294895841295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115550.24742268042,
            "unit": "ns",
            "range": "± 14837.481218768602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6849.21875,
            "unit": "ns",
            "range": "± 897.841073770854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23054.520833333332,
            "unit": "ns",
            "range": "± 2421.3929700382955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4146792.523809524,
            "unit": "ns",
            "range": "± 94229.99743214421"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4502410.785714285,
            "unit": "ns",
            "range": "± 78934.86191613803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5007168.05,
            "unit": "ns",
            "range": "± 110474.43451551894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5449532.595238095,
            "unit": "ns",
            "range": "± 124881.21689425707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8097203.605263158,
            "unit": "ns",
            "range": "± 276486.45617369504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6860083.786458333,
            "unit": "ns",
            "range": "± 79565.63802586797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2180476.8307291665,
            "unit": "ns",
            "range": "± 12583.454236727186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1598253.53984375,
            "unit": "ns",
            "range": "± 14388.532452519958"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3081914.1963541666,
            "unit": "ns",
            "range": "± 20561.94641703507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 980502.3608072917,
            "unit": "ns",
            "range": "± 3092.8208309597385"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 918037.4802734375,
            "unit": "ns",
            "range": "± 2322.7915030309227"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56660.61956521739,
            "unit": "ns",
            "range": "± 4613.2591226593595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9682512.47826087,
            "unit": "ns",
            "range": "± 238787.2972953639"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25603157.6,
            "unit": "ns",
            "range": "± 462687.33921852056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63740396.2,
            "unit": "ns",
            "range": "± 949721.9228028351"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125074563,
            "unit": "ns",
            "range": "± 3214982.0334067727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274538190.5714286,
            "unit": "ns",
            "range": "± 1889075.8954861714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1696528.2840909092,
            "unit": "ns",
            "range": "± 92393.88896631997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3180951.290322581,
            "unit": "ns",
            "range": "± 95260.28004689522"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2759884.0476190476,
            "unit": "ns",
            "range": "± 147165.19122850694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6784946.98989899,
            "unit": "ns",
            "range": "± 440180.54540897283"
          }
        ]
      }
    ]
  }
}