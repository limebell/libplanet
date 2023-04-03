window.BENCHMARK_DATA = {
  "lastUpdate": 1680509691975,
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
          "id": "0802d4ac5631d749d2848fc5e3e67a15377edf77",
          "message": "﻿chore: adjust log level  [skip changelog]",
          "timestamp": "2023-04-03T16:50:50+09:00",
          "tree_id": "b9cca4217c1a6989a26950c12c53c6532cb53661",
          "url": "https://github.com/limebell/libplanet/commit/0802d4ac5631d749d2848fc5e3e67a15377edf77"
        },
        "date": 1680509448791,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11003082.97368421,
            "unit": "ns",
            "range": "± 1812623.4296372337"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25790000,
            "unit": "ns",
            "range": "± 3016079.0907753"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67417396.0909091,
            "unit": "ns",
            "range": "± 9979645.563004714"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112766361.05434783,
            "unit": "ns",
            "range": "± 8132630.692008943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205024163.46875,
            "unit": "ns",
            "range": "± 9424121.567130456"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84169.20652173914,
            "unit": "ns",
            "range": "± 20646.92502371484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 383549.57692307694,
            "unit": "ns",
            "range": "± 15648.026978737611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320522.5574712644,
            "unit": "ns",
            "range": "± 21565.276358695042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303882.2395833333,
            "unit": "ns",
            "range": "± 26994.693579818817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5746926.215053763,
            "unit": "ns",
            "range": "± 545055.2909089541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4394645.8367346935,
            "unit": "ns",
            "range": "± 573035.7308232336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26448.510869565216,
            "unit": "ns",
            "range": "± 4725.030617947347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114833.7741935484,
            "unit": "ns",
            "range": "± 30175.396209397306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106666.3829787234,
            "unit": "ns",
            "range": "± 21558.31801900926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 245559.8052631579,
            "unit": "ns",
            "range": "± 22056.350764924773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8453.916666666666,
            "unit": "ns",
            "range": "± 1294.1637955933406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19293.479166666668,
            "unit": "ns",
            "range": "± 2956.3782785491426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1823139.7268041237,
            "unit": "ns",
            "range": "± 379599.27251572657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3736159.0217391304,
            "unit": "ns",
            "range": "± 844652.4385125566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2920399.1413043477,
            "unit": "ns",
            "range": "± 605171.4736379547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7400337.8,
            "unit": "ns",
            "range": "± 503830.0872239736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3445805.71875,
            "unit": "ns",
            "range": "± 461958.7019469369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3338466.3586956523,
            "unit": "ns",
            "range": "± 241803.1863354799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4469065.270833333,
            "unit": "ns",
            "range": "± 282335.83517877123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5096528.978494624,
            "unit": "ns",
            "range": "± 648926.7738082923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10952639.01075269,
            "unit": "ns",
            "range": "± 1761814.208836599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6379792.720703125,
            "unit": "ns",
            "range": "± 83531.11611571789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2000353.0627297794,
            "unit": "ns",
            "range": "± 38834.353272089844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366230.1920072115,
            "unit": "ns",
            "range": "± 21825.273885242816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2590295.1454133065,
            "unit": "ns",
            "range": "± 78404.91832749249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 920992.1469053071,
            "unit": "ns",
            "range": "± 26142.747696782677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 765184.121294807,
            "unit": "ns",
            "range": "± 24045.13693156615"
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
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "501e7c236aff0d40223e8ce8f89326310aa4c92f",
          "message": "﻿chore: adjust log level  [skip changelog]",
          "timestamp": "2023-04-03T16:57:44+09:00",
          "tree_id": "30b2f298db0b833dac6fab1d7b0beb020b9267ac",
          "url": "https://github.com/limebell/libplanet/commit/501e7c236aff0d40223e8ce8f89326310aa4c92f"
        },
        "date": 1680509678983,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8474279.55,
            "unit": "ns",
            "range": "± 194693.12614619016"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20725924.842105262,
            "unit": "ns",
            "range": "± 459518.07848552515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51113037.14102564,
            "unit": "ns",
            "range": "± 1774358.742037758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95320123.92857143,
            "unit": "ns",
            "range": "± 1396472.9139766984"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203976225.45833334,
            "unit": "ns",
            "range": "± 5255004.947651507"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67377.6914893617,
            "unit": "ns",
            "range": "± 9497.821843422267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 369911.43076923076,
            "unit": "ns",
            "range": "± 17052.53586344384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305887.61267605633,
            "unit": "ns",
            "range": "± 14915.656439315506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299652.49494949495,
            "unit": "ns",
            "range": "± 27261.374490096052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5448705.684210527,
            "unit": "ns",
            "range": "± 119769.37097515218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4137780.6785714286,
            "unit": "ns",
            "range": "± 176669.72774737375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18232.78021978022,
            "unit": "ns",
            "range": "± 1986.8936883833844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91021.48936170213,
            "unit": "ns",
            "range": "± 11071.50742011444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 119696.34090909091,
            "unit": "ns",
            "range": "± 9561.22645656453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 242277.52150537635,
            "unit": "ns",
            "range": "± 19633.50281322525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6359.56043956044,
            "unit": "ns",
            "range": "± 1470.940403723574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20618.447916666668,
            "unit": "ns",
            "range": "± 3837.0814727912307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1590486.793814433,
            "unit": "ns",
            "range": "± 186259.23539675033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2962405.493150685,
            "unit": "ns",
            "range": "± 146931.5092595227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2581687.131313131,
            "unit": "ns",
            "range": "± 251798.67762813708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6650497.725490196,
            "unit": "ns",
            "range": "± 251220.3405386657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3290417.2,
            "unit": "ns",
            "range": "± 67020.67131085673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3350276.9791666665,
            "unit": "ns",
            "range": "± 131122.57146370673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4343531.119047619,
            "unit": "ns",
            "range": "± 152654.47752841475"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4637675.933333334,
            "unit": "ns",
            "range": "± 125162.01022066626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8727107.076923076,
            "unit": "ns",
            "range": "± 213458.10904117426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6644508.22582348,
            "unit": "ns",
            "range": "± 225380.35956073555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1972070.7820870536,
            "unit": "ns",
            "range": "± 7950.552623624347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1295301.9061104911,
            "unit": "ns",
            "range": "± 7191.263109739882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2632509.5984933036,
            "unit": "ns",
            "range": "± 46512.38481171547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 855331.8014787947,
            "unit": "ns",
            "range": "± 3081.7304538740705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732579.2661830357,
            "unit": "ns",
            "range": "± 3893.0907175727684"
          }
        ]
      }
    ]
  }
}