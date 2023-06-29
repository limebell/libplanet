window.BENCHMARK_DATA = {
  "lastUpdate": 1688026810629,
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
        "date": 1688026806817,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3265180.2666666666,
            "unit": "ns",
            "range": "± 47738.848185379036"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3394645.6,
            "unit": "ns",
            "range": "± 39101.19194712246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4285787.090909091,
            "unit": "ns",
            "range": "± 135687.3546752708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4190450.1052631577,
            "unit": "ns",
            "range": "± 90416.13687518811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6848977.571428572,
            "unit": "ns",
            "range": "± 183224.89443232174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7767295.307692308,
            "unit": "ns",
            "range": "± 29861.767837779393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19368299.35714286,
            "unit": "ns",
            "range": "± 157429.84181953617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49723809.733333334,
            "unit": "ns",
            "range": "± 334002.6349822209"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99132610.33333333,
            "unit": "ns",
            "range": "± 822755.5000631082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197298422.46666667,
            "unit": "ns",
            "range": "± 1453483.447962901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282650.4666666667,
            "unit": "ns",
            "range": "± 10644.23079461785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266078.9024390244,
            "unit": "ns",
            "range": "± 8501.32619302682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229185.82352941178,
            "unit": "ns",
            "range": "± 4251.250451856696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4197539.6,
            "unit": "ns",
            "range": "± 30359.98748776328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3803228.6428571427,
            "unit": "ns",
            "range": "± 19728.037769815142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16308.273684210526,
            "unit": "ns",
            "range": "± 1135.265040214907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84295.39622641509,
            "unit": "ns",
            "range": "± 3362.0424214800796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71107.66666666667,
            "unit": "ns",
            "range": "± 663.7430134312435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81891.46753246753,
            "unit": "ns",
            "range": "± 2883.202375212671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4282.270833333333,
            "unit": "ns",
            "range": "± 486.8851259560031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15799.41237113402,
            "unit": "ns",
            "range": "± 1470.908072363926"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45568.57142857143,
            "unit": "ns",
            "range": "± 2464.192892063103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6335615.053125,
            "unit": "ns",
            "range": "± 14970.663719986522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1912475.7572916667,
            "unit": "ns",
            "range": "± 5030.894906458055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1380825.4129464286,
            "unit": "ns",
            "range": "± 700.9415880096512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2576139.06796875,
            "unit": "ns",
            "range": "± 1706.3288258601115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798434.710546875,
            "unit": "ns",
            "range": "± 441.7543582441899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746415.7377554086,
            "unit": "ns",
            "range": "± 404.6697181230911"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1337502.4166666667,
            "unit": "ns",
            "range": "± 91889.56977322711"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2585529.923076923,
            "unit": "ns",
            "range": "± 68626.01361403594"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2133053.3333333335,
            "unit": "ns",
            "range": "± 113999.62355606134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5281231.96875,
            "unit": "ns",
            "range": "± 163232.56010199254"
          }
        ]
      }
    ]
  }
}