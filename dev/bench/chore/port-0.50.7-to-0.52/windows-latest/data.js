window.BENCHMARK_DATA = {
  "lastUpdate": 1680072172597,
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
          "id": "3bdf5893b11c5c3d825a23e8c3a9a1d70e04d780",
          "message": "docs: port changelog",
          "timestamp": "2023-03-29T15:26:54+09:00",
          "tree_id": "854dfc97e54aae3f4aacf7783b5388ed1462fb1e",
          "url": "https://github.com/limebell/libplanet/commit/3bdf5893b11c5c3d825a23e8c3a9a1d70e04d780"
        },
        "date": 1680072158930,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1323124.7311827957,
            "unit": "ns",
            "range": "± 74842.34103871425"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2551829.411764706,
            "unit": "ns",
            "range": "± 103360.61202240946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2150834.3434343436,
            "unit": "ns",
            "range": "± 136075.27640724974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5228922.5,
            "unit": "ns",
            "range": "± 273286.1439029924"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51548.936170212764,
            "unit": "ns",
            "range": "± 2982.12396996269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7118443.333333333,
            "unit": "ns",
            "range": "± 100495.32659117373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20013292.85714286,
            "unit": "ns",
            "range": "± 175908.1161563341"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 48598340,
            "unit": "ns",
            "range": "± 562516.1036425027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 100401440,
            "unit": "ns",
            "range": "± 2202021.7357309577"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 194886393.33333334,
            "unit": "ns",
            "range": "± 3133521.3893971625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4850863.125,
            "unit": "ns",
            "range": "± 20105.365020791844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1588167.7018229167,
            "unit": "ns",
            "range": "± 8379.178481111161"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1172093.6197916667,
            "unit": "ns",
            "range": "± 8785.956957748294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2644741.7708333335,
            "unit": "ns",
            "range": "± 7609.9457727382"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838328.5807291666,
            "unit": "ns",
            "range": "± 2387.06709294921"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770723.5481770834,
            "unit": "ns",
            "range": "± 2224.3500073518126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3202189.285714286,
            "unit": "ns",
            "range": "± 89722.94945402854"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4957666.666666667,
            "unit": "ns",
            "range": "± 164655.67536095265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 22907456.666666668,
            "unit": "ns",
            "range": "± 679884.917078813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6059352.94117647,
            "unit": "ns",
            "range": "± 190750.32941755443"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25902442.85714286,
            "unit": "ns",
            "range": "± 372523.72297053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185402.32558139536,
            "unit": "ns",
            "range": "± 6880.354654898769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 186831.42857142858,
            "unit": "ns",
            "range": "± 8490.395987029295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173080,
            "unit": "ns",
            "range": "± 11013.004250714817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11312556,
            "unit": "ns",
            "range": "± 296558.74499554606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9196122.222222222,
            "unit": "ns",
            "range": "± 185379.76142964588"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23298.958333333332,
            "unit": "ns",
            "range": "± 1867.364863942695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56202.27272727273,
            "unit": "ns",
            "range": "± 3654.849628893419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48814.14141414141,
            "unit": "ns",
            "range": "± 3925.8174789153363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105031.76470588235,
            "unit": "ns",
            "range": "± 9889.258383344477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8190.625,
            "unit": "ns",
            "range": "± 1001.1654392966756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23314.893617021276,
            "unit": "ns",
            "range": "± 2518.531635986373"
          }
        ]
      }
    ]
  }
}