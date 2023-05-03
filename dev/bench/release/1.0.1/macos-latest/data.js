window.BENCHMARK_DATA = {
  "lastUpdate": 1683083987900,
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
          "id": "dfc7c1075358b4f393ae71d1121e0debde8461bd",
          "message": "release: 1.0.1",
          "timestamp": "2023-05-03T12:01:45+09:00",
          "tree_id": "43b642e8f0bfaea31d516d1859c1d3fef911ee2d",
          "url": "https://github.com/limebell/libplanet/commit/dfc7c1075358b4f393ae71d1121e0debde8461bd"
        },
        "date": 1683083980824,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8034645.427835052,
            "unit": "ns",
            "range": "± 631545.1782652516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20221796.85714286,
            "unit": "ns",
            "range": "± 1131425.961091966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50266346.572289154,
            "unit": "ns",
            "range": "± 2635886.8754468663"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104024372.70512821,
            "unit": "ns",
            "range": "± 5368175.880887501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215990756.96363637,
            "unit": "ns",
            "range": "± 9154862.38835182"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63197.857894736844,
            "unit": "ns",
            "range": "± 10052.803093702843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 426608.9193548387,
            "unit": "ns",
            "range": "± 34599.56059199577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 369529.8404255319,
            "unit": "ns",
            "range": "± 38934.4101693133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 349582.55319148937,
            "unit": "ns",
            "range": "± 43213.027265561126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6107332.041237113,
            "unit": "ns",
            "range": "± 564501.9232093552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4408443.823232323,
            "unit": "ns",
            "range": "± 446272.8536098038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20985.957446808512,
            "unit": "ns",
            "range": "± 5025.528695056513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94267.45454545454,
            "unit": "ns",
            "range": "± 11225.242667503513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110232.01648351649,
            "unit": "ns",
            "range": "± 10565.483236950444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 245245.67582417582,
            "unit": "ns",
            "range": "± 20527.14254866436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7076.782608695652,
            "unit": "ns",
            "range": "± 790.3640603077084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18068.15053763441,
            "unit": "ns",
            "range": "± 1910.3285623741622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1653053.3936170214,
            "unit": "ns",
            "range": "± 179547.13306098394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3152679.5104166665,
            "unit": "ns",
            "range": "± 203804.5870371908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2619932.5353535353,
            "unit": "ns",
            "range": "± 298421.52070708445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7162533.53125,
            "unit": "ns",
            "range": "± 473232.31400885736"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3351097.787234043,
            "unit": "ns",
            "range": "± 254300.7148597609"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3388201.6268656715,
            "unit": "ns",
            "range": "± 159666.6356503578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4916558.494736842,
            "unit": "ns",
            "range": "± 326964.96328414395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5021217.575757576,
            "unit": "ns",
            "range": "± 543582.4933148881"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8920116.765306123,
            "unit": "ns",
            "range": "± 596225.7499237172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6915266.990364583,
            "unit": "ns",
            "range": "± 96099.65168688512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2268759.06302472,
            "unit": "ns",
            "range": "± 104295.08344972722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1409077.2489149305,
            "unit": "ns",
            "range": "± 29041.303405229784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3119895.085834704,
            "unit": "ns",
            "range": "± 107217.79047734637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806536.3524088542,
            "unit": "ns",
            "range": "± 9974.213982802847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747994.0522460938,
            "unit": "ns",
            "range": "± 5381.0748533113365"
          }
        ]
      }
    ]
  }
}