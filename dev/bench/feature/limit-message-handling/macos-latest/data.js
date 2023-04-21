window.BENCHMARK_DATA = {
  "lastUpdate": 1682071634234,
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
        "date": 1682071624450,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8148960.961538462,
            "unit": "ns",
            "range": "± 81693.80420980058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20832592.3125,
            "unit": "ns",
            "range": "± 389576.18636106234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51513436,
            "unit": "ns",
            "range": "± 715274.2724309702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103458939.23333333,
            "unit": "ns",
            "range": "± 1326818.4194257148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222048749.77272728,
            "unit": "ns",
            "range": "± 6988584.601358858"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73040.62765957447,
            "unit": "ns",
            "range": "± 5794.2934310619985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 406512.9606741573,
            "unit": "ns",
            "range": "± 27869.869838581213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 361491.8804347826,
            "unit": "ns",
            "range": "± 45906.34348151342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 349529.96153846156,
            "unit": "ns",
            "range": "± 31893.99231144313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5686391.368421053,
            "unit": "ns",
            "range": "± 287927.02677207836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3716647.511627907,
            "unit": "ns",
            "range": "± 133039.12458216623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20362.618556701033,
            "unit": "ns",
            "range": "± 3118.335201017052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104129.35106382979,
            "unit": "ns",
            "range": "± 23318.820064907122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118030.58888888889,
            "unit": "ns",
            "range": "± 9857.948634402943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134310.67021276595,
            "unit": "ns",
            "range": "± 19571.395030188967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7562.381443298969,
            "unit": "ns",
            "range": "± 2425.7226476664764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18397.460674157304,
            "unit": "ns",
            "range": "± 1666.1599430493661"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1525108.83,
            "unit": "ns",
            "range": "± 172390.93728078218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2994592.6,
            "unit": "ns",
            "range": "± 213616.5861671077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2578110.2473118277,
            "unit": "ns",
            "range": "± 234002.14133146283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6828440.043478261,
            "unit": "ns",
            "range": "± 327017.975655793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3690752.943298969,
            "unit": "ns",
            "range": "± 312958.74191350315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3797365.1428571427,
            "unit": "ns",
            "range": "± 440531.77227784274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4943026.363157894,
            "unit": "ns",
            "range": "± 579698.2238166721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4782122.540816327,
            "unit": "ns",
            "range": "± 458981.6624288344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9027985.005263157,
            "unit": "ns",
            "range": "± 659833.824817632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7019223.349513319,
            "unit": "ns",
            "range": "± 315719.5739337185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2143638.983984375,
            "unit": "ns",
            "range": "± 48947.12909225558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1326091.5623779297,
            "unit": "ns",
            "range": "± 25615.998503847728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2897918.722359035,
            "unit": "ns",
            "range": "± 294895.09475049603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 922756.5354447798,
            "unit": "ns",
            "range": "± 33667.74609455429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886712.6281113735,
            "unit": "ns",
            "range": "± 32802.12594050798"
          }
        ]
      }
    ]
  }
}