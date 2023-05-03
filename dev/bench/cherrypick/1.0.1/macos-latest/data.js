window.BENCHMARK_DATA = {
  "lastUpdate": 1683136512476,
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
        "date": 1683087525714,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11244031.692307692,
            "unit": "ns",
            "range": "± 2269887.863844892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29262129.583333332,
            "unit": "ns",
            "range": "± 7959512.039415542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59657439.1368421,
            "unit": "ns",
            "range": "± 7572931.670344933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122105801.04444444,
            "unit": "ns",
            "range": "± 14306389.080474773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235687937.5625,
            "unit": "ns",
            "range": "± 4325365.94946846"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78382.44736842105,
            "unit": "ns",
            "range": "± 11963.980001484617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354284.1041666667,
            "unit": "ns",
            "range": "± 26808.757047878833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343421.77956989245,
            "unit": "ns",
            "range": "± 24111.41004089395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 336481.8965517241,
            "unit": "ns",
            "range": "± 18390.301686407456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4560348.041666667,
            "unit": "ns",
            "range": "± 115503.62672227305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3898020,
            "unit": "ns",
            "range": "± 76760.72820948223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26645.652173913044,
            "unit": "ns",
            "range": "± 3904.7129115523426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118409.51612903226,
            "unit": "ns",
            "range": "± 12213.351351316936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118305.20454545454,
            "unit": "ns",
            "range": "± 6523.093233810981"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125744.02577319587,
            "unit": "ns",
            "range": "± 15203.69440101428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8114.642857142857,
            "unit": "ns",
            "range": "± 935.6571139689127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24459.31111111111,
            "unit": "ns",
            "range": "± 3021.1732992944203"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1738680.8777777778,
            "unit": "ns",
            "range": "± 196270.6800812253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3232333.408045977,
            "unit": "ns",
            "range": "± 290571.8391830164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3377813.8146067415,
            "unit": "ns",
            "range": "± 941480.2610044293"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8093011.516483516,
            "unit": "ns",
            "range": "± 1512042.6222248892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3351653.722222222,
            "unit": "ns",
            "range": "± 160550.5673611121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3700009.375,
            "unit": "ns",
            "range": "± 61542.93140334369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4538559.45,
            "unit": "ns",
            "range": "± 201199.00177637817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4595109.661290322,
            "unit": "ns",
            "range": "± 207551.78793572902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7903878.983333333,
            "unit": "ns",
            "range": "± 324761.88224310515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7483526.3781795055,
            "unit": "ns",
            "range": "± 272286.743572695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2211183.6567770336,
            "unit": "ns",
            "range": "± 101333.61928605915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1374769.7815163352,
            "unit": "ns",
            "range": "± 24979.57147302102"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2982618.6830078126,
            "unit": "ns",
            "range": "± 155370.51016086747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 887950.0829923115,
            "unit": "ns",
            "range": "± 40257.354442230666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 802672.3275479403,
            "unit": "ns",
            "range": "± 37260.8858776835"
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
        "date": 1683136505653,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8813319.3125,
            "unit": "ns",
            "range": "± 403441.7157756053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21696065.184210528,
            "unit": "ns",
            "range": "± 1094668.8855745522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52789343.925,
            "unit": "ns",
            "range": "± 1859860.7824225873"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102675594.95454545,
            "unit": "ns",
            "range": "± 2463048.913284885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219893180.3939394,
            "unit": "ns",
            "range": "± 6965978.658528529"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69654.42105263157,
            "unit": "ns",
            "range": "± 11233.376422167346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 367079.4789473684,
            "unit": "ns",
            "range": "± 36294.644418531454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323838.5652173913,
            "unit": "ns",
            "range": "± 23137.83095193962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320177.3917525773,
            "unit": "ns",
            "range": "± 31505.488487311188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4358024.186440678,
            "unit": "ns",
            "range": "± 191770.67230225206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3900976.285714286,
            "unit": "ns",
            "range": "± 188901.07654106608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20199.763157894737,
            "unit": "ns",
            "range": "± 2765.557202947926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98843.87096774194,
            "unit": "ns",
            "range": "± 15179.799038614934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104968.20652173914,
            "unit": "ns",
            "range": "± 7878.295756939007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119648.3829787234,
            "unit": "ns",
            "range": "± 17578.225254378944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7491.682795698925,
            "unit": "ns",
            "range": "± 887.9491508433372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19154.79120879121,
            "unit": "ns",
            "range": "± 2093.0948405357585"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1723500.33,
            "unit": "ns",
            "range": "± 198999.60599281106"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3163925.210526316,
            "unit": "ns",
            "range": "± 155449.7961251212"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2683707.629032258,
            "unit": "ns",
            "range": "± 247471.0214352391"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7246207.5,
            "unit": "ns",
            "range": "± 517293.4833544438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3481533.784090909,
            "unit": "ns",
            "range": "± 190691.33370729725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3660220.4897959186,
            "unit": "ns",
            "range": "± 285824.61223366624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4750160.114457832,
            "unit": "ns",
            "range": "± 251599.86618898064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4709505.873737373,
            "unit": "ns",
            "range": "± 326138.4100497006"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8156121.1,
            "unit": "ns",
            "range": "± 327901.26977505255"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7180854.2626953125,
            "unit": "ns",
            "range": "± 136645.02018755177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2181877.2959375,
            "unit": "ns",
            "range": "± 56945.89725937397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376114.09921875,
            "unit": "ns",
            "range": "± 12375.262589199507"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3072927.9919113005,
            "unit": "ns",
            "range": "± 250073.10666608394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 956492.3402258832,
            "unit": "ns",
            "range": "± 23393.029149228427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 890372.2151285807,
            "unit": "ns",
            "range": "± 22181.981083687893"
          }
        ]
      }
    ]
  }
}