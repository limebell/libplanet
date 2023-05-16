window.BENCHMARK_DATA = {
  "lastUpdate": 1684224364503,
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
          "id": "a8bd0619eacfdf0e6f42a496360e481a2d05bec3",
          "message": "chore: exclude seed peers from gossip hearbeat target  [skip changelog]\n\n(cherry picked from commit e0db5f2fc026fed656d766bc6149518cbcac0521)",
          "timestamp": "2023-05-16T16:52:23+09:00",
          "tree_id": "e9bd47d902f3ae63f7ec596f1ebcc24f8165d46b",
          "url": "https://github.com/limebell/libplanet/commit/a8bd0619eacfdf0e6f42a496360e481a2d05bec3"
        },
        "date": 1684224360416,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3241748.9,
            "unit": "ns",
            "range": "± 72767.85029111053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3437080.705882353,
            "unit": "ns",
            "range": "± 66010.26566921685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4244984.066666666,
            "unit": "ns",
            "range": "± 48332.98388776797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4393437.4,
            "unit": "ns",
            "range": "± 62579.817186648004"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7145421.72972973,
            "unit": "ns",
            "range": "± 176591.2414676662"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323375,
            "unit": "ns",
            "range": "± 7159.967288957916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261971.31578947368,
            "unit": "ns",
            "range": "± 8725.123005731744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229783.75,
            "unit": "ns",
            "range": "± 1808.8378049304074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5560962.533333333,
            "unit": "ns",
            "range": "± 33432.65751982775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3878002.076923077,
            "unit": "ns",
            "range": "± 20201.83737708668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17243.760416666668,
            "unit": "ns",
            "range": "± 1118.5204677306785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83746,
            "unit": "ns",
            "range": "± 4066.049660807876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72992.66666666667,
            "unit": "ns",
            "range": "± 2038.9491071477144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 175988.9387755102,
            "unit": "ns",
            "range": "± 15314.755914406942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4864.59375,
            "unit": "ns",
            "range": "± 487.529272063146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15063.705263157895,
            "unit": "ns",
            "range": "± 917.048675866322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5998909.416666667,
            "unit": "ns",
            "range": "± 22934.587897377925"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1861981.7177083334,
            "unit": "ns",
            "range": "± 3256.264696546703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348210.2719029018,
            "unit": "ns",
            "range": "± 2712.044664771905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2588933.6222098214,
            "unit": "ns",
            "range": "± 4675.5581996394985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 789155.6546223959,
            "unit": "ns",
            "range": "± 740.471261530661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728647.1138020833,
            "unit": "ns",
            "range": "± 412.6159922365487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7621248.266666667,
            "unit": "ns",
            "range": "± 30748.004212739834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19487581.266666666,
            "unit": "ns",
            "range": "± 201138.19494547477"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50545472.2,
            "unit": "ns",
            "range": "± 305296.98457057466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98287154.33333333,
            "unit": "ns",
            "range": "± 1038364.0211418885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200674052.06666666,
            "unit": "ns",
            "range": "± 1372688.5217676435"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1340578.6382978724,
            "unit": "ns",
            "range": "± 91187.68132716586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2576994.230769231,
            "unit": "ns",
            "range": "± 68581.51903614133"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2158192.6315789474,
            "unit": "ns",
            "range": "± 122717.96277124438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5440709.935483871,
            "unit": "ns",
            "range": "± 164489.6906544471"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44938.693333333336,
            "unit": "ns",
            "range": "± 2253.108705126567"
          }
        ]
      }
    ]
  }
}