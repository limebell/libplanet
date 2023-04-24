window.BENCHMARK_DATA = {
  "lastUpdate": 1682322677314,
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
          "id": "a9709811647b6144a8f97265bc466fd564ae74b2",
          "message": "docs: update changelog",
          "timestamp": "2023-04-21T18:46:29+09:00",
          "tree_id": "c5cd54d5c9e2fb7e61b2ce1d07353d27ef9db935",
          "url": "https://github.com/limebell/libplanet/commit/a9709811647b6144a8f97265bc466fd564ae74b2"
        },
        "date": 1682071635403,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1774020.8333333333,
            "unit": "ns",
            "range": "± 208509.86644163574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3309126.086956522,
            "unit": "ns",
            "range": "± 221538.51691484152"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2782373.9583333335,
            "unit": "ns",
            "range": "± 271963.89011267526"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7298030.434782608,
            "unit": "ns",
            "range": "± 530546.7616678971"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60015.217391304344,
            "unit": "ns",
            "range": "± 10274.84857012671"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8754568.367346939,
            "unit": "ns",
            "range": "± 728676.613372254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25665368.57142857,
            "unit": "ns",
            "range": "± 1233702.8651898478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66414730.15873016,
            "unit": "ns",
            "range": "± 3022072.203276705"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123086058.8235294,
            "unit": "ns",
            "range": "± 4996226.461327648"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270433778.5714286,
            "unit": "ns",
            "range": "± 2851130.071548843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5628159.921875,
            "unit": "ns",
            "range": "± 97377.41842717804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1763729.2236328125,
            "unit": "ns",
            "range": "± 28371.16276229356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1301277.1484375,
            "unit": "ns",
            "range": "± 25668.867391460117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2964556.3895089286,
            "unit": "ns",
            "range": "± 46739.5902963196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 977386.2025669643,
            "unit": "ns",
            "range": "± 11777.909955286277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 872926.5266927084,
            "unit": "ns",
            "range": "± 9897.99945435322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3714429.0322580645,
            "unit": "ns",
            "range": "± 357903.35183770215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4160505.376344086,
            "unit": "ns",
            "range": "± 316506.77799102344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4967373.469387755,
            "unit": "ns",
            "range": "± 295985.34811571246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5059315.625,
            "unit": "ns",
            "range": "± 296012.858656734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9141178.94736842,
            "unit": "ns",
            "range": "± 605708.1803681024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 388293.4065934066,
            "unit": "ns",
            "range": "± 26318.015807502587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299053.488372093,
            "unit": "ns",
            "range": "± 23156.32652810747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259282.1052631579,
            "unit": "ns",
            "range": "± 21170.95048543846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6429359.89010989,
            "unit": "ns",
            "range": "± 365688.7070400923"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4219263.043478261,
            "unit": "ns",
            "range": "± 260152.8623829076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24902,
            "unit": "ns",
            "range": "± 7193.655734623588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94021.05263157895,
            "unit": "ns",
            "range": "± 12378.016672816353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112022.44897959183,
            "unit": "ns",
            "range": "± 17332.780043713756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134656.25,
            "unit": "ns",
            "range": "± 19178.523144392533"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8978,
            "unit": "ns",
            "range": "± 5315.549516904783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21869.38775510204,
            "unit": "ns",
            "range": "± 7460.347524633295"
          }
        ]
      },
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
          "id": "48a655f9f53be31c0bc0ceab7ff03c4c7b8596bd",
          "message": "docs: update changelog",
          "timestamp": "2023-04-24T16:32:53+09:00",
          "tree_id": "897f563660d2483987265d81726f92641fd380c7",
          "url": "https://github.com/limebell/libplanet/commit/48a655f9f53be31c0bc0ceab7ff03c4c7b8596bd"
        },
        "date": 1682322661888,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1499064,
            "unit": "ns",
            "range": "± 136143.44004272358"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2609977.419354839,
            "unit": "ns",
            "range": "± 77428.78323413251"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2403327.272727273,
            "unit": "ns",
            "range": "± 177858.35560010048"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5997724.242424242,
            "unit": "ns",
            "range": "± 383525.48064537655"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62814.28571428572,
            "unit": "ns",
            "range": "± 7350.222663013435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7797031.25,
            "unit": "ns",
            "range": "± 143756.61245661014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20862326.666666668,
            "unit": "ns",
            "range": "± 208089.12055952876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51849573.333333336,
            "unit": "ns",
            "range": "± 611426.2862551867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104471033.33333333,
            "unit": "ns",
            "range": "± 1147057.1480760586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 204639550,
            "unit": "ns",
            "range": "± 1426611.5033282787"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4864946.261160715,
            "unit": "ns",
            "range": "± 15988.158501493263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1537220.7421875,
            "unit": "ns",
            "range": "± 4161.142983903148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1158962.2916666667,
            "unit": "ns",
            "range": "± 3416.668589982434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2636820.3125,
            "unit": "ns",
            "range": "± 13475.600033566165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 851003.1380208334,
            "unit": "ns",
            "range": "± 3140.854269711553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773871.4518229166,
            "unit": "ns",
            "range": "± 2038.9291946831077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3452853.3333333335,
            "unit": "ns",
            "range": "± 63392.50594134774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3597835.135135135,
            "unit": "ns",
            "range": "± 114931.32542768557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4176863.1578947366,
            "unit": "ns",
            "range": "± 91981.34599850072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4668882.352941177,
            "unit": "ns",
            "range": "± 90752.1090339924"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7185318.181818182,
            "unit": "ns",
            "range": "± 167867.31902468926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 346370.14925373136,
            "unit": "ns",
            "range": "± 16447.860825498297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294334.4262295082,
            "unit": "ns",
            "range": "± 13280.63609477977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 256468.3673469388,
            "unit": "ns",
            "range": "± 19985.570036356174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5473200,
            "unit": "ns",
            "range": "± 111594.56554341492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3635050,
            "unit": "ns",
            "range": "± 113256.96781026656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30641.23711340206,
            "unit": "ns",
            "range": "± 3489.052897316823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115186.8686868687,
            "unit": "ns",
            "range": "± 11750.871843162007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117786,
            "unit": "ns",
            "range": "± 15711.091237682629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 140545.45454545456,
            "unit": "ns",
            "range": "± 13707.694869728766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10968.75,
            "unit": "ns",
            "range": "± 1724.395393662431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27193.81443298969,
            "unit": "ns",
            "range": "± 2874.9208116989093"
          }
        ]
      }
    ]
  }
}