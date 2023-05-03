window.BENCHMARK_DATA = {
  "lastUpdate": 1683087532565,
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
      }
    ]
  }
}