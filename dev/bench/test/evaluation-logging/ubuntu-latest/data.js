window.BENCHMARK_DATA = {
  "lastUpdate": 1679983416308,
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
          "id": "9d89ee4362b95e3fb85bb936484eae3c96145f02",
          "message": "feat: add getstate measurement for single action execution",
          "timestamp": "2023-03-28T14:46:58+09:00",
          "tree_id": "cf1d21492170b9a59cb00ae8f0eaf617d97b074a",
          "url": "https://github.com/limebell/libplanet/commit/9d89ee4362b95e3fb85bb936484eae3c96145f02"
        },
        "date": 1679983412458,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 136287.47916666666,
            "unit": "ns",
            "range": "± 9382.627456022581"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5920908.817255435,
            "unit": "ns",
            "range": "± 283391.62221698475"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7192308.925925926,
            "unit": "ns",
            "range": "± 301813.3411168985"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33636311.928571425,
            "unit": "ns",
            "range": "± 453063.91030090704"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8155719.131147541,
            "unit": "ns",
            "range": "± 359603.7231625703"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36912108.916666664,
            "unit": "ns",
            "range": "± 943583.1030421689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7087935.226004465,
            "unit": "ns",
            "range": "± 42081.696144946305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2290706.5833333335,
            "unit": "ns",
            "range": "± 3338.749205254292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1630386.057779948,
            "unit": "ns",
            "range": "± 6166.389885054081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3151826.1473958334,
            "unit": "ns",
            "range": "± 5978.739601046585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1013117.366015625,
            "unit": "ns",
            "range": "± 1291.0587215666903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 929058.7073567709,
            "unit": "ns",
            "range": "± 976.1838373793518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 129327.30612244898,
            "unit": "ns",
            "range": "± 12506.709276049887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 256238.01388888888,
            "unit": "ns",
            "range": "± 12551.875692268888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236330.10447761195,
            "unit": "ns",
            "range": "± 11203.144431613195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4785667.866666666,
            "unit": "ns",
            "range": "± 62210.55442018394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12001092.666666666,
            "unit": "ns",
            "range": "± 148219.0619188208"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24893.815789473683,
            "unit": "ns",
            "range": "± 2824.1221052166943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65663.76804123711,
            "unit": "ns",
            "range": "± 6737.623611289481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52554.05376344086,
            "unit": "ns",
            "range": "± 4374.33752590679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127745.3125,
            "unit": "ns",
            "range": "± 17465.767938162262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8042.882978723404,
            "unit": "ns",
            "range": "± 1145.247166414429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26032.322916666668,
            "unit": "ns",
            "range": "± 2550.271438576033"
          }
        ]
      }
    ]
  }
}