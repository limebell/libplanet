window.BENCHMARK_DATA = {
  "lastUpdate": 1701148756558,
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
      }
    ]
  }
}