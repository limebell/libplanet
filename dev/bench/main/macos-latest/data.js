window.BENCHMARK_DATA = {
  "lastUpdate": 1689130734738,
  "repoUrl": "https://github.com/limebell/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d7d58f7ce685aa62bdf83862001ebd213454d03",
          "message": "Merge pull request #3291 from greymistcube/refactor/tx-success\n\n🧹 Removed ActionsLogsList from TxExecution",
          "timestamp": "2023-07-12T11:06:26+09:00",
          "tree_id": "cb1787efb83c661ea8d11c9c0f014cbbcfd2c083",
          "url": "https://github.com/limebell/libplanet/commit/9d7d58f7ce685aa62bdf83862001ebd213454d03"
        },
        "date": 1689130529883,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7712845.607142857,
            "unit": "ns",
            "range": "± 215901.5160961537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18894267.326086957,
            "unit": "ns",
            "range": "± 469501.5641340634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46224345.78571428,
            "unit": "ns",
            "range": "± 725696.3684127477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 93908608.75,
            "unit": "ns",
            "range": "± 2142905.262540993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195271538.7142857,
            "unit": "ns",
            "range": "± 2733570.3494059085"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58374.05263157895,
            "unit": "ns",
            "range": "± 8922.51325910489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317683.72340425535,
            "unit": "ns",
            "range": "± 20501.408420752465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 303239.152173913,
            "unit": "ns",
            "range": "± 19696.754811046383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286872.3367346939,
            "unit": "ns",
            "range": "± 21645.79636433516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4027953,
            "unit": "ns",
            "range": "± 84524.02363477359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3500541.285714286,
            "unit": "ns",
            "range": "± 56843.29897104924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17270.1797752809,
            "unit": "ns",
            "range": "± 1815.1240350918529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83971.40816326531,
            "unit": "ns",
            "range": "± 7253.8993109312305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78053.47826086957,
            "unit": "ns",
            "range": "± 6088.368403169197"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99148.36734693877,
            "unit": "ns",
            "range": "± 15946.066608936973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4648.298850574713,
            "unit": "ns",
            "range": "± 526.2213062374026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16780.934782608696,
            "unit": "ns",
            "range": "± 1865.7277977990711"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1641221.06,
            "unit": "ns",
            "range": "± 204449.04861972705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2905154.843137255,
            "unit": "ns",
            "range": "± 110542.47137681925"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2061422.875,
            "unit": "ns",
            "range": "± 142330.76535415664"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6010146.513157895,
            "unit": "ns",
            "range": "± 289856.96319435415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3069803.769230769,
            "unit": "ns",
            "range": "± 46146.39442786736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3271072.679245283,
            "unit": "ns",
            "range": "± 113484.4118114184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4194473.542857143,
            "unit": "ns",
            "range": "± 203432.53911485136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3680418.9210526315,
            "unit": "ns",
            "range": "± 174289.31839396726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7071819.551020408,
            "unit": "ns",
            "range": "± 256489.4968326401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6910412.394010416,
            "unit": "ns",
            "range": "± 40129.887618353685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2008457.1646634615,
            "unit": "ns",
            "range": "± 6096.235239910043"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1314048.350716146,
            "unit": "ns",
            "range": "± 9565.85267028846"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2664984.025627367,
            "unit": "ns",
            "range": "± 111240.5319230834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 757555.1904296875,
            "unit": "ns",
            "range": "± 3757.350474574435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 792689.7788411458,
            "unit": "ns",
            "range": "± 7786.367312997231"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d7d58f7ce685aa62bdf83862001ebd213454d03",
          "message": "Merge pull request #3291 from greymistcube/refactor/tx-success\n\n🧹 Removed ActionsLogsList from TxExecution",
          "timestamp": "2023-07-12T11:06:26+09:00",
          "tree_id": "cb1787efb83c661ea8d11c9c0f014cbbcfd2c083",
          "url": "https://github.com/limebell/libplanet/commit/9d7d58f7ce685aa62bdf83862001ebd213454d03"
        },
        "date": 1689130728448,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8580039.774193548,
            "unit": "ns",
            "range": "± 261806.6139995588"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20945445.423076924,
            "unit": "ns",
            "range": "± 340070.6005232496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54290420.7,
            "unit": "ns",
            "range": "± 1891563.1408876167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110498445.42857143,
            "unit": "ns",
            "range": "± 1836411.6365114672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220554293.6470588,
            "unit": "ns",
            "range": "± 4425372.959253786"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76882.75,
            "unit": "ns",
            "range": "± 5139.203478804057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 377142.170212766,
            "unit": "ns",
            "range": "± 61196.27281953513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 346924.69662921346,
            "unit": "ns",
            "range": "± 31720.280164490014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 328515.11363636365,
            "unit": "ns",
            "range": "± 23048.752519877744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4373973.273333333,
            "unit": "ns",
            "range": "± 195904.25508275468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3680213.6304347827,
            "unit": "ns",
            "range": "± 92823.2825614469"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15851.451807228916,
            "unit": "ns",
            "range": "± 1620.0964808940334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84085.3595505618,
            "unit": "ns",
            "range": "± 4731.4145041587135"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97620.46464646465,
            "unit": "ns",
            "range": "± 18805.426848800165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116835.0425531915,
            "unit": "ns",
            "range": "± 15313.831893474951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7201.164948453608,
            "unit": "ns",
            "range": "± 927.1846575387545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17934.438144329895,
            "unit": "ns",
            "range": "± 3049.941778182116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1681226.612244898,
            "unit": "ns",
            "range": "± 210492.79602977048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2947478.157142857,
            "unit": "ns",
            "range": "± 135448.56065730035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2076925.21875,
            "unit": "ns",
            "range": "± 159139.0941351359"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5961465.935483871,
            "unit": "ns",
            "range": "± 269436.99526190956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3593314.207070707,
            "unit": "ns",
            "range": "± 323647.29517303477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3827473.714285714,
            "unit": "ns",
            "range": "± 367797.5783243869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4719603.108247423,
            "unit": "ns",
            "range": "± 308658.00877854537"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4256174.64,
            "unit": "ns",
            "range": "± 333681.43990930915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8040853.457446809,
            "unit": "ns",
            "range": "± 936159.7973750123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6725163.070012019,
            "unit": "ns",
            "range": "± 69077.7179297369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2173864.607204861,
            "unit": "ns",
            "range": "± 80467.70946657986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1390457.848248106,
            "unit": "ns",
            "range": "± 43949.57920532185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2725783.1425,
            "unit": "ns",
            "range": "± 205161.0940225591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865078.5653820504,
            "unit": "ns",
            "range": "± 30810.91919694105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 796361.4836588542,
            "unit": "ns",
            "range": "± 13986.206190413712"
          }
        ]
      }
    ]
  }
}