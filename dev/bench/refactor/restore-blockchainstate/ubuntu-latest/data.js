window.BENCHMARK_DATA = {
  "lastUpdate": 1701148875250,
  "repoUrl": "https://github.com/limebell/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "distinct": true,
          "id": "7a08e50f1264dc22ac69006080975a245447ab87",
          "message": "refactor: restore BlockChainState",
          "timestamp": "2023-11-27T19:05:57+09:00",
          "tree_id": "1124214eb0cb7943617e7acf9138b6b9d0942e53",
          "url": "https://github.com/limebell/libplanet/commit/7a08e50f1264dc22ac69006080975a245447ab87"
        },
        "date": 1701148753853,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 209474.32258064515,
            "unit": "ns",
            "range": "± 12178.929379448477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193367.36,
            "unit": "ns",
            "range": "± 9722.84264494589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168860.13157894736,
            "unit": "ns",
            "range": "± 5721.699399895069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3163169.5,
            "unit": "ns",
            "range": "± 38703.8591973621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2915837.1428571427,
            "unit": "ns",
            "range": "± 41854.363683642805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16958.774725274725,
            "unit": "ns",
            "range": "± 1382.117425996424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 72677.87234042553,
            "unit": "ns",
            "range": "± 9241.957640959585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89854.2741935484,
            "unit": "ns",
            "range": "± 2572.893011244702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73848.48484848485,
            "unit": "ns",
            "range": "± 24667.502389789654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6717.828282828283,
            "unit": "ns",
            "range": "± 1492.0092536809111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13084.478260869566,
            "unit": "ns",
            "range": "± 1803.9954525798591"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3754775.6106770835,
            "unit": "ns",
            "range": "± 18357.891437457725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214707.95703125,
            "unit": "ns",
            "range": "± 5550.91572631982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766068.6752929688,
            "unit": "ns",
            "range": "± 2837.9916159610734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1962059.5651041667,
            "unit": "ns",
            "range": "± 4324.1616819902665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614486.3234863281,
            "unit": "ns",
            "range": "± 1060.5536516723757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 576597.7740384615,
            "unit": "ns",
            "range": "± 2611.455328161786"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42261.68041237113,
            "unit": "ns",
            "range": "± 5519.082831689504"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2481935.8732394367,
            "unit": "ns",
            "range": "± 121328.14899212438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2640131.9024390243,
            "unit": "ns",
            "range": "± 71977.0054877962"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3261694.1836734693,
            "unit": "ns",
            "range": "± 127653.52410589009"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3117764.7711864407,
            "unit": "ns",
            "range": "± 111058.37847041039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7409569.035714285,
            "unit": "ns",
            "range": "± 130971.30192597103"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5812120.444444444,
            "unit": "ns",
            "range": "± 119671.93294818781"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14703699,
            "unit": "ns",
            "range": "± 134063.30010918973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37207708.571428575,
            "unit": "ns",
            "range": "± 161713.83966151887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 80633350.64285715,
            "unit": "ns",
            "range": "± 1059332.2006185425"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148144080.42857143,
            "unit": "ns",
            "range": "± 1100213.7137804332"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1031775.3978494623,
            "unit": "ns",
            "range": "± 91516.54884098234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1992383.1727272726,
            "unit": "ns",
            "range": "± 76536.65463807003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1619360.8125,
            "unit": "ns",
            "range": "± 112591.35364898959"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6381801.222222222,
            "unit": "ns",
            "range": "± 210536.84349709586"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "distinct": true,
          "id": "48994c132636882a44bd8268918f72a66169d4f5",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-11-28T14:10:07+09:00",
          "tree_id": "05f6667642bdebb00c36ad80c287dde1c16e30ed",
          "url": "https://github.com/limebell/libplanet/commit/48994c132636882a44bd8268918f72a66169d4f5"
        },
        "date": 1701148872616,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 207152.15217391305,
            "unit": "ns",
            "range": "± 13669.85396349142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203414.62371134022,
            "unit": "ns",
            "range": "± 18312.08566041935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174126.25,
            "unit": "ns",
            "range": "± 4979.3475522699055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3149672.153846154,
            "unit": "ns",
            "range": "± 33563.03466823323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2880754.3076923075,
            "unit": "ns",
            "range": "± 17134.989745083087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16237.185567010309,
            "unit": "ns",
            "range": "± 3058.359511683704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70691.90816326531,
            "unit": "ns",
            "range": "± 8083.819719313739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89937.06666666667,
            "unit": "ns",
            "range": "± 8754.838034295186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64814,
            "unit": "ns",
            "range": "± 11300.213102634323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3581.6063829787236,
            "unit": "ns",
            "range": "± 801.7425138119115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13372.382978723404,
            "unit": "ns",
            "range": "± 2895.1706473982886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3728909.50859375,
            "unit": "ns",
            "range": "± 46622.108496168745"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1206107.6487630208,
            "unit": "ns",
            "range": "± 4116.8862493721"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 769138.9698567708,
            "unit": "ns",
            "range": "± 12978.827906783277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946864.7826822917,
            "unit": "ns",
            "range": "± 26009.67007297499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615654.15625,
            "unit": "ns",
            "range": "± 3416.829524408807"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567424.3654436384,
            "unit": "ns",
            "range": "± 916.6520332260847"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39624.92857142857,
            "unit": "ns",
            "range": "± 5192.978662251361"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2503919.94,
            "unit": "ns",
            "range": "± 65529.49271770689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2566619.9565217393,
            "unit": "ns",
            "range": "± 76204.45407154698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3240409.5,
            "unit": "ns",
            "range": "± 88630.13327136544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3111767.703125,
            "unit": "ns",
            "range": "± 142494.19493491153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7451185.235294118,
            "unit": "ns",
            "range": "± 195419.72272258822"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5575930.033333333,
            "unit": "ns",
            "range": "± 52601.09037146157"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14322768.4,
            "unit": "ns",
            "range": "± 188544.01619091496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36921416.6,
            "unit": "ns",
            "range": "± 257169.56623842008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75861446.07142857,
            "unit": "ns",
            "range": "± 449676.266441582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152747469.42857143,
            "unit": "ns",
            "range": "± 712292.1156829618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1039992.649484536,
            "unit": "ns",
            "range": "± 102856.39534018225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1957360.4464285714,
            "unit": "ns",
            "range": "± 82267.09714558253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1636234.551020408,
            "unit": "ns",
            "range": "± 131027.46251899817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6603532.013513514,
            "unit": "ns",
            "range": "± 330999.18276241"
          }
        ]
      }
    ]
  }
}