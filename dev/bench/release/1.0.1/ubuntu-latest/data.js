window.BENCHMARK_DATA = {
  "lastUpdate": 1683084148951,
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
        "date": 1683084144593,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 441960.75531914894,
            "unit": "ns",
            "range": "± 34523.16739280972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 370464.7261904762,
            "unit": "ns",
            "range": "± 27156.52531287284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305626.9438202247,
            "unit": "ns",
            "range": "± 22811.91525893648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7033292.363636363,
            "unit": "ns",
            "range": "± 260289.98103243372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5205124.521276596,
            "unit": "ns",
            "range": "± 395718.4568146912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23059.70786516854,
            "unit": "ns",
            "range": "± 2674.8447839515643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112988.86956521739,
            "unit": "ns",
            "range": "± 14427.273423774095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98740.0425531915,
            "unit": "ns",
            "range": "± 12241.673555483741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 232923.24731182796,
            "unit": "ns",
            "range": "± 24779.16626648453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6330.855421686747,
            "unit": "ns",
            "range": "± 1071.1629778813592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23091.222222222223,
            "unit": "ns",
            "range": "± 6177.639734138538"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4151876.6470588236,
            "unit": "ns",
            "range": "± 266913.59110887523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4415784.865979382,
            "unit": "ns",
            "range": "± 291408.3834877621"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5697333.381443299,
            "unit": "ns",
            "range": "± 407509.57944288576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5649775.084210526,
            "unit": "ns",
            "range": "± 452767.71678992646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10691723.927835051,
            "unit": "ns",
            "range": "± 1080219.7239593805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7538146.558854166,
            "unit": "ns",
            "range": "± 110083.33748457771"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2372517.720775463,
            "unit": "ns",
            "range": "± 66063.38194952779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1748016.1524286685,
            "unit": "ns",
            "range": "± 43527.54975264482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3250295.477921196,
            "unit": "ns",
            "range": "± 79806.04173060555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1124409.7936580882,
            "unit": "ns",
            "range": "± 45673.374753978635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 977756.1973876953,
            "unit": "ns",
            "range": "± 19081.931073145166"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63194.31460674157,
            "unit": "ns",
            "range": "± 8589.79539072051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10558011.802083334,
            "unit": "ns",
            "range": "± 780307.7071435427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26880960.082474228,
            "unit": "ns",
            "range": "± 1749842.1333256434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65947788.416666664,
            "unit": "ns",
            "range": "± 938439.185211706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141844004.36363637,
            "unit": "ns",
            "range": "± 9718138.302657172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 284976568.1263158,
            "unit": "ns",
            "range": "± 16264085.317556655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1784324.0833333333,
            "unit": "ns",
            "range": "± 168725.3822906614"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3580773.431578947,
            "unit": "ns",
            "range": "± 370329.22525672737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2824927.9270833335,
            "unit": "ns",
            "range": "± 212099.61047534866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7682454.806451613,
            "unit": "ns",
            "range": "± 580446.0437586893"
          }
        ]
      }
    ]
  }
}