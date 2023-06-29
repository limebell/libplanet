window.BENCHMARK_DATA = {
  "lastUpdate": 1688026958602,
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
          "id": "79e20b2af762b8e695d3f065ce20fed65aa43881",
          "message": "test: fill up lacking unit test\n\n(cherry picked from commit 798142789a68876aa5f1d580beb7a05695098f08)",
          "timestamp": "2023-06-29T14:56:59+09:00",
          "tree_id": "c37ae4d67cb60eeba36db02cd0797068587bf624",
          "url": "https://github.com/limebell/libplanet/commit/79e20b2af762b8e695d3f065ce20fed65aa43881"
        },
        "date": 1688026946128,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1467861,
            "unit": "ns",
            "range": "± 137003.07664096783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2719900,
            "unit": "ns",
            "range": "± 112016.88598197166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2266590.7216494847,
            "unit": "ns",
            "range": "± 132123.82929351588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5558082.222222222,
            "unit": "ns",
            "range": "± 210153.59998310424"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50925,
            "unit": "ns",
            "range": "± 3145.959383011872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8145730.952380952,
            "unit": "ns",
            "range": "± 278574.88329702104"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21269473.333333332,
            "unit": "ns",
            "range": "± 203375.47424360077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54119550,
            "unit": "ns",
            "range": "± 398296.77329271025"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107821964.28571428,
            "unit": "ns",
            "range": "± 962793.481016522"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216103457.14285713,
            "unit": "ns",
            "range": "± 1372775.6288821374"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5011301.510416667,
            "unit": "ns",
            "range": "± 61810.859891716325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1623943.666294643,
            "unit": "ns",
            "range": "± 6157.482851875663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1210410.9793526786,
            "unit": "ns",
            "range": "± 10406.776493556988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2706262.0833333335,
            "unit": "ns",
            "range": "± 13129.75922368575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843665.8984375,
            "unit": "ns",
            "range": "± 2431.810824194537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 794838.9873798077,
            "unit": "ns",
            "range": "± 6764.443387770686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3547473.6842105263,
            "unit": "ns",
            "range": "± 73841.8267658443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3763665.5172413792,
            "unit": "ns",
            "range": "± 106470.58707140696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4389933.333333333,
            "unit": "ns",
            "range": "± 103790.21790772642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4482840,
            "unit": "ns",
            "range": "± 148875.75875693982"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6961514.285714285,
            "unit": "ns",
            "range": "± 147082.22967345268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275891.3043478261,
            "unit": "ns",
            "range": "± 9574.568770955613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 263813.829787234,
            "unit": "ns",
            "range": "± 9358.776990237906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244932.97872340426,
            "unit": "ns",
            "range": "± 13928.275474676226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4227385.714285715,
            "unit": "ns",
            "range": "± 47705.004690571746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3915428.5714285714,
            "unit": "ns",
            "range": "± 27029.113323099726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22326.041666666668,
            "unit": "ns",
            "range": "± 2334.9177734498335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90553.33333333333,
            "unit": "ns",
            "range": "± 5419.133808640921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 78761.70212765958,
            "unit": "ns",
            "range": "± 5336.506577148802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105048.42105263157,
            "unit": "ns",
            "range": "± 11580.595133697401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6279.591836734694,
            "unit": "ns",
            "range": "± 1455.098337533047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20676.842105263157,
            "unit": "ns",
            "range": "± 1962.220443922831"
          }
        ]
      }
    ]
  }
}