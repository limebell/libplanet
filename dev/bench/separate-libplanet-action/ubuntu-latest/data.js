window.BENCHMARK_DATA = {
  "lastUpdate": 1689589620410,
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
          "id": "4213b00e9ddebf34119a731243f6a3afaf14e07d",
          "message": "chore: fix build",
          "timestamp": "2023-07-17T19:13:46+09:00",
          "tree_id": "ccbe3b24dbf68de772435ef30693e3fd63f70a65",
          "url": "https://github.com/limebell/libplanet/commit/4213b00e9ddebf34119a731243f6a3afaf14e07d"
        },
        "date": 1689589617209,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278915.8857142857,
            "unit": "ns",
            "range": "± 8559.150702684263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265033.0909090909,
            "unit": "ns",
            "range": "± 6379.74603845259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229501.23076923078,
            "unit": "ns",
            "range": "± 1229.4647313530493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4236213.923076923,
            "unit": "ns",
            "range": "± 40773.50013276911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3874241.4285714286,
            "unit": "ns",
            "range": "± 55918.572651138544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18165.41052631579,
            "unit": "ns",
            "range": "± 1472.296487361336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85697.19540229885,
            "unit": "ns",
            "range": "± 4217.256867281121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71433.66666666667,
            "unit": "ns",
            "range": "± 632.8293369439898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87015.05208333333,
            "unit": "ns",
            "range": "± 11515.208248106448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4416.34693877551,
            "unit": "ns",
            "range": "± 507.63464217780285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16940.073684210525,
            "unit": "ns",
            "range": "± 1522.0082145478636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1394962.71875,
            "unit": "ns",
            "range": "± 110033.57816820743"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2639313.4516129033,
            "unit": "ns",
            "range": "± 79185.35475740393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1771959.5128205128,
            "unit": "ns",
            "range": "± 91286.26749339934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4878733.703703703,
            "unit": "ns",
            "range": "± 136494.5808410933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6441059.883333334,
            "unit": "ns",
            "range": "± 26888.783770674843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1896488.01953125,
            "unit": "ns",
            "range": "± 5310.062692847335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370829.2202845982,
            "unit": "ns",
            "range": "± 677.9621930606603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2608944.9453125,
            "unit": "ns",
            "range": "± 1607.364745663796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819611.930859375,
            "unit": "ns",
            "range": "± 4218.7497085837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743873.7752604167,
            "unit": "ns",
            "range": "± 411.16329913378297"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3272254.25,
            "unit": "ns",
            "range": "± 56579.36915107249"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3494375.972222222,
            "unit": "ns",
            "range": "± 115060.38814850627"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4233850.142857143,
            "unit": "ns",
            "range": "± 48516.30948431694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3816139.4,
            "unit": "ns",
            "range": "± 66700.78354840691"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6462667.212121212,
            "unit": "ns",
            "range": "± 202048.4721301051"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7593500.538461538,
            "unit": "ns",
            "range": "± 32249.354992556015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19260835.07142857,
            "unit": "ns",
            "range": "± 122263.4058702542"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49483093.86666667,
            "unit": "ns",
            "range": "± 554021.2496463427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99193609.73333333,
            "unit": "ns",
            "range": "± 871216.9774101272"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198313441,
            "unit": "ns",
            "range": "± 1040056.1377006806"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47338.875,
            "unit": "ns",
            "range": "± 2541.389857830309"
          }
        ]
      }
    ]
  }
}