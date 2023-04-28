window.BENCHMARK_DATA = {
  "lastUpdate": 1682669223755,
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
          "id": "01e6999f7023d54bfe9ee8540addaf0695bdeb2f",
          "message": "test: add regression test\n\n(cherry picked from commit 39e90e6de7b0babecc117fafbdf00cfdcfc8cb2a)",
          "timestamp": "2023-04-28T16:54:03+09:00",
          "tree_id": "50a677c7bc8dc80727c0f79c7c99b926394c55ab",
          "url": "https://github.com/limebell/libplanet/commit/01e6999f7023d54bfe9ee8540addaf0695bdeb2f"
        },
        "date": 1682669220585,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292797.95,
            "unit": "ns",
            "range": "± 10395.424104149297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266117.7586206897,
            "unit": "ns",
            "range": "± 7266.066604700295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231774.1052631579,
            "unit": "ns",
            "range": "± 5024.519146641872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4276562.466666667,
            "unit": "ns",
            "range": "± 47024.69558018982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3864828.4,
            "unit": "ns",
            "range": "± 24776.379540083853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17746.35789473684,
            "unit": "ns",
            "range": "± 1200.7251524913218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85117.4693877551,
            "unit": "ns",
            "range": "± 3206.1189940879767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71775.50877192983,
            "unit": "ns",
            "range": "± 3103.6091152237987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82827.05154639175,
            "unit": "ns",
            "range": "± 10092.392473594422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5448.958333333333,
            "unit": "ns",
            "range": "± 607.8425682027364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16753.212765957447,
            "unit": "ns",
            "range": "± 1216.7682904002102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3424933.933333333,
            "unit": "ns",
            "range": "± 45989.5335320466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3526224.8260869565,
            "unit": "ns",
            "range": "± 68329.4119093489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4248316.576923077,
            "unit": "ns",
            "range": "± 115061.12280250808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4229475.4,
            "unit": "ns",
            "range": "± 75988.70295341838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6814534.16,
            "unit": "ns",
            "range": "± 161130.2676986543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5895466.517708333,
            "unit": "ns",
            "range": "± 29543.982179731818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1857562.2575120192,
            "unit": "ns",
            "range": "± 944.0107550903598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1342874.4495192308,
            "unit": "ns",
            "range": "± 455.294740637012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2582830.1317708334,
            "unit": "ns",
            "range": "± 1808.643383999872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 789557.7072265625,
            "unit": "ns",
            "range": "± 582.1214337392203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734285.0678385417,
            "unit": "ns",
            "range": "± 686.3945032423285"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44208.31764705882,
            "unit": "ns",
            "range": "± 2267.818141758645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7645082.733333333,
            "unit": "ns",
            "range": "± 34406.665260562244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20825547.733333334,
            "unit": "ns",
            "range": "± 190788.49057434805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52294098.46666667,
            "unit": "ns",
            "range": "± 362776.7371518637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102788027.15384616,
            "unit": "ns",
            "range": "± 685644.5463920361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208854240.73333332,
            "unit": "ns",
            "range": "± 1690138.954481658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1345743.82,
            "unit": "ns",
            "range": "± 99386.14773490031"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2574418.8181818184,
            "unit": "ns",
            "range": "± 63192.58847563599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2163846.2906976743,
            "unit": "ns",
            "range": "± 110064.84564728904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5394783.813953488,
            "unit": "ns",
            "range": "± 197151.52497064354"
          }
        ]
      }
    ]
  }
}