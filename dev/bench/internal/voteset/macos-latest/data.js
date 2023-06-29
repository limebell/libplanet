window.BENCHMARK_DATA = {
  "lastUpdate": 1688027462005,
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
        "date": 1688027455046,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8695009.877551021,
            "unit": "ns",
            "range": "± 342822.65714546404"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21248451.106382977,
            "unit": "ns",
            "range": "± 824697.7289449552"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54595359.253012046,
            "unit": "ns",
            "range": "± 2909662.0625214465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110021059.48809524,
            "unit": "ns",
            "range": "± 5687186.054545461"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 258989799.53092784,
            "unit": "ns",
            "range": "± 48897063.71983721"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76852.79545454546,
            "unit": "ns",
            "range": "± 4805.759727179606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322829.59550561797,
            "unit": "ns",
            "range": "± 22537.8374929196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308462.01136363635,
            "unit": "ns",
            "range": "± 18384.81396877695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316740.47777777776,
            "unit": "ns",
            "range": "± 22469.295255159777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4303292.029411765,
            "unit": "ns",
            "range": "± 135703.10420697162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3929898.2717391304,
            "unit": "ns",
            "range": "± 276667.3548729952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19949.434065934067,
            "unit": "ns",
            "range": "± 3066.238161374791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89332.89784946236,
            "unit": "ns",
            "range": "± 10565.466933589729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101328.14285714286,
            "unit": "ns",
            "range": "± 14561.083970355798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121660.86363636363,
            "unit": "ns",
            "range": "± 16271.192120298809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7486.725806451613,
            "unit": "ns",
            "range": "± 1216.1264873522948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19798.469387755104,
            "unit": "ns",
            "range": "± 5217.700784184546"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1850760.4333333333,
            "unit": "ns",
            "range": "± 315072.2875298334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3335347.8791208793,
            "unit": "ns",
            "range": "± 404309.35999190394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2839950.8295454546,
            "unit": "ns",
            "range": "± 423485.39232197497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7544000.043956044,
            "unit": "ns",
            "range": "± 1278727.8000941223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3527116.34375,
            "unit": "ns",
            "range": "± 290996.0144667866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3790118.227272727,
            "unit": "ns",
            "range": "± 496950.8654996431"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4640936.978021978,
            "unit": "ns",
            "range": "± 276148.8653418248"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4527759.428571428,
            "unit": "ns",
            "range": "± 372515.5662108675"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8223075.189473684,
            "unit": "ns",
            "range": "± 634473.5943815743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7137000.6357421875,
            "unit": "ns",
            "range": "± 163913.15475018742"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2493467.8933159723,
            "unit": "ns",
            "range": "± 411360.7098869459"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1471781.9975897607,
            "unit": "ns",
            "range": "± 144732.0329402658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2840954.467702964,
            "unit": "ns",
            "range": "± 165566.8198792843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 919942.9093128551,
            "unit": "ns",
            "range": "± 22588.122296373946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 878216.8803977272,
            "unit": "ns",
            "range": "± 36904.043528831695"
          }
        ]
      }
    ]
  }
}