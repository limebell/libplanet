window.BENCHMARK_DATA = {
  "lastUpdate": 1700128548094,
  "repoUrl": "https://github.com/limebell/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "distinct": true,
          "id": "0b03699216f356b995f836c05c9801db5db58ef1",
          "message": "chore: fix test and exception message",
          "timestamp": "2023-11-16T18:36:18+09:00",
          "tree_id": "a9a3f87316e119adae7f7a425e240470a3e6b197",
          "url": "https://github.com/limebell/libplanet/commit/0b03699216f356b995f836c05c9801db5db58ef1"
        },
        "date": 1700128541294,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8256159.3125,
            "unit": "ns",
            "range": "± 155037.1136649625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19486749.07142857,
            "unit": "ns",
            "range": "± 336851.7347620838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49724796.782608695,
            "unit": "ns",
            "range": "± 1246874.1459596967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98355464.93939394,
            "unit": "ns",
            "range": "± 3045386.2423898196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202191825.76666668,
            "unit": "ns",
            "range": "± 7572361.120871264"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51000.02577319588,
            "unit": "ns",
            "range": "± 10547.84942544844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 236551.34782608695,
            "unit": "ns",
            "range": "± 13555.332761437174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222851.19318181818,
            "unit": "ns",
            "range": "± 14208.088195026594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231771.625,
            "unit": "ns",
            "range": "± 7217.278661254084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3990919.590909091,
            "unit": "ns",
            "range": "± 277176.0789403557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3551009.8,
            "unit": "ns",
            "range": "± 106101.23334593046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15916.714285714286,
            "unit": "ns",
            "range": "± 3359.7636453443147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70361.31578947368,
            "unit": "ns",
            "range": "± 10857.577372961909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69851.68817204301,
            "unit": "ns",
            "range": "± 7938.518333141232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77067.43548387097,
            "unit": "ns",
            "range": "± 11578.096150665417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5371.164948453608,
            "unit": "ns",
            "range": "± 1235.9212545743324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15027.54347826087,
            "unit": "ns",
            "range": "± 2593.649878144033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1192039.142857143,
            "unit": "ns",
            "range": "± 91786.99532572036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2432349.052631579,
            "unit": "ns",
            "range": "± 148680.65488584733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1921858.9885057472,
            "unit": "ns",
            "range": "± 138769.66801263552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10108876.072164949,
            "unit": "ns",
            "range": "± 2641091.5472965366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2984113.7647058824,
            "unit": "ns",
            "range": "± 93900.24572338806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3132694.603896104,
            "unit": "ns",
            "range": "± 160150.99969088254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3857017.188888889,
            "unit": "ns",
            "range": "± 257707.44048010453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3827058.255319149,
            "unit": "ns",
            "range": "± 236083.64080799822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11501115.684210526,
            "unit": "ns",
            "range": "± 1167252.606571519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4599740.120793269,
            "unit": "ns",
            "range": "± 56867.44348543782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1398013.8079427083,
            "unit": "ns",
            "range": "± 7312.55927885293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 894277.91328125,
            "unit": "ns",
            "range": "± 6622.359131887262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1994104.1658653845,
            "unit": "ns",
            "range": "± 6885.681136831217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 643165.4749581473,
            "unit": "ns",
            "range": "± 4971.748375747225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569461.83515625,
            "unit": "ns",
            "range": "± 2226.989418167991"
          }
        ]
      }
    ]
  }
}