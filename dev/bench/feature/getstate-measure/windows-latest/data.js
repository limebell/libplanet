window.BENCHMARK_DATA = {
  "lastUpdate": 1679983585196,
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
        "date": 1679983570904,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 113958.33333333333,
            "unit": "ns",
            "range": "± 9113.906859608234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5611110.677083333,
            "unit": "ns",
            "range": "± 112323.90849390626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1873851.376953125,
            "unit": "ns",
            "range": "± 42754.62137377965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350967.998798077,
            "unit": "ns",
            "range": "± 17345.330745264164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3017915.4036458335,
            "unit": "ns",
            "range": "± 30937.28822241992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 967374.7896634615,
            "unit": "ns",
            "range": "± 25615.018483719752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 889940.7087053572,
            "unit": "ns",
            "range": "± 9070.021537783752"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5329760.732886905,
            "unit": "ns",
            "range": "± 192135.67274046037"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5548571.134020618,
            "unit": "ns",
            "range": "± 362434.5374681368"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 29123214.43298969,
            "unit": "ns",
            "range": "± 2115629.463904187"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6312649.462365591,
            "unit": "ns",
            "range": "± 467610.1736312026"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33395157,
            "unit": "ns",
            "range": "± 2573261.897354163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 104119.19191919192,
            "unit": "ns",
            "range": "± 12636.807889101445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 209206.1855670103,
            "unit": "ns",
            "range": "± 22190.664396096985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187900,
            "unit": "ns",
            "range": "± 16243.975401425147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4299064.285714285,
            "unit": "ns",
            "range": "± 155521.96115242652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10145724.56140351,
            "unit": "ns",
            "range": "± 437426.69315665326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22068.817204301075,
            "unit": "ns",
            "range": "± 2022.5349190635075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60012.765957446805,
            "unit": "ns",
            "range": "± 7081.22208702074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47398.94736842105,
            "unit": "ns",
            "range": "± 6233.633801366655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112929.16666666667,
            "unit": "ns",
            "range": "± 21215.946915204422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5902.127659574468,
            "unit": "ns",
            "range": "± 854.8380621849115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21611.363636363636,
            "unit": "ns",
            "range": "± 2120.476622749707"
          }
        ]
      }
    ]
  }
}