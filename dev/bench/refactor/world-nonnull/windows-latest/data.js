window.BENCHMARK_DATA = {
  "lastUpdate": 1690884067972,
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
          "id": "1a400abe665869ad4df2dedbd0bb944083c434c3",
          "message": "refactor: minor refactoring",
          "timestamp": "2023-08-01T18:40:56+09:00",
          "tree_id": "c2eec30c5428e1d8a614317b3457f5b268835a5b",
          "url": "https://github.com/limebell/libplanet/commit/1a400abe665869ad4df2dedbd0bb944083c434c3"
        },
        "date": 1690884052758,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1562351.8987341772,
            "unit": "ns",
            "range": "± 80207.07472593787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2993883.673469388,
            "unit": "ns",
            "range": "± 193836.78525585716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2000502.06185567,
            "unit": "ns",
            "range": "± 130980.33645311472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5563516.842105263,
            "unit": "ns",
            "range": "± 317367.315097269"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52706.45161290323,
            "unit": "ns",
            "range": "± 4016.5907686151627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8613957.894736841,
            "unit": "ns",
            "range": "± 186543.05822811904"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23850969.230769232,
            "unit": "ns",
            "range": "± 633060.3874950515"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61405761.36363637,
            "unit": "ns",
            "range": "± 2284148.1582720573"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123139462.5,
            "unit": "ns",
            "range": "± 4279781.125106061"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 240590221.42857143,
            "unit": "ns",
            "range": "± 4213977.44365811"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5798039.118303572,
            "unit": "ns",
            "range": "± 85038.3104420123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1901776.674107143,
            "unit": "ns",
            "range": "± 15186.268166248981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1420578.431919643,
            "unit": "ns",
            "range": "± 15973.423977682582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3162275.2473958335,
            "unit": "ns",
            "range": "± 48606.753067917554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1004632.7734375,
            "unit": "ns",
            "range": "± 18006.778174582487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 914042.919921875,
            "unit": "ns",
            "range": "± 6665.015496703681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3683767.2413793104,
            "unit": "ns",
            "range": "± 160880.8291523503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3946918.1818181816,
            "unit": "ns",
            "range": "± 146615.91853789397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4828096.96969697,
            "unit": "ns",
            "range": "± 147566.06250432486"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4402255.128205128,
            "unit": "ns",
            "range": "± 225306.36322798854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7277866.666666667,
            "unit": "ns",
            "range": "± 296396.4457726621"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 309048.21428571426,
            "unit": "ns",
            "range": "± 13184.674175605673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291129.24528301886,
            "unit": "ns",
            "range": "± 12032.957282310532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 258556.3829787234,
            "unit": "ns",
            "range": "± 18227.80316664237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4821280,
            "unit": "ns",
            "range": "± 69277.05453982788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4345527.027027027,
            "unit": "ns",
            "range": "± 143931.35448818927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23703.191489361703,
            "unit": "ns",
            "range": "± 2680.332675855765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100216.84210526316,
            "unit": "ns",
            "range": "± 7326.106809584631"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85521.05263157895,
            "unit": "ns",
            "range": "± 8387.692284466722"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103728.86597938144,
            "unit": "ns",
            "range": "± 17167.835470503207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5771.134020618557,
            "unit": "ns",
            "range": "± 992.2573971848442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21634.090909090908,
            "unit": "ns",
            "range": "± 1933.7228916071715"
          }
        ]
      }
    ]
  }
}