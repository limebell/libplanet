window.BENCHMARK_DATA = {
  "lastUpdate": 1689675917452,
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
          "id": "400c1dd23afefa9e465482c01e7cd7ce8bc3ccbb",
          "message": "test: separate Libplanet.Action.Tests project\n\nsome tests in Libplanet.Tests.Action is not separated since it has dependency on blockchain",
          "timestamp": "2023-07-18T19:10:26+09:00",
          "tree_id": "580e9ab971c4e68d46cef5975f853c3f4fbdd62c",
          "url": "https://github.com/limebell/libplanet/commit/400c1dd23afefa9e465482c01e7cd7ce8bc3ccbb"
        },
        "date": 1689675902453,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1336113,
            "unit": "ns",
            "range": "± 114315.64723619555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2428288.5714285714,
            "unit": "ns",
            "range": "± 69151.73330067292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1940830,
            "unit": "ns",
            "range": "± 44593.00865665639"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4581145.454545454,
            "unit": "ns",
            "range": "± 183316.74654076085"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43820.149253731346,
            "unit": "ns",
            "range": "± 2069.1833351241485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6938292.857142857,
            "unit": "ns",
            "range": "± 67764.99509658036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17719833.333333332,
            "unit": "ns",
            "range": "± 96834.80533263608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45537975,
            "unit": "ns",
            "range": "± 165676.1799140392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91524046.66666667,
            "unit": "ns",
            "range": "± 574462.9589782924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182859313.33333334,
            "unit": "ns",
            "range": "± 577374.6467127446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4889105.747767857,
            "unit": "ns",
            "range": "± 13823.113273158466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1520047.430889423,
            "unit": "ns",
            "range": "± 1623.190326683177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1162176.0026041667,
            "unit": "ns",
            "range": "± 1172.0118708822288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2561401.5625,
            "unit": "ns",
            "range": "± 2844.664039016391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817053.2575334822,
            "unit": "ns",
            "range": "± 1056.1332444383384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 746411.89453125,
            "unit": "ns",
            "range": "± 1135.514808489594"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3020406.25,
            "unit": "ns",
            "range": "± 46555.67947809018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3147226.6666666665,
            "unit": "ns",
            "range": "± 58067.921641897294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3968545.4545454546,
            "unit": "ns",
            "range": "± 94679.48300537188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3471673.6842105263,
            "unit": "ns",
            "range": "± 150577.4617055428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5927741.176470588,
            "unit": "ns",
            "range": "± 166315.55507281944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253492.72727272726,
            "unit": "ns",
            "range": "± 8174.007008339947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246436.95652173914,
            "unit": "ns",
            "range": "± 9382.73494114831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214693.5483870968,
            "unit": "ns",
            "range": "± 6191.872925261035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3924586.6666666665,
            "unit": "ns",
            "range": "± 31912.668032497393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3564000,
            "unit": "ns",
            "range": "± 44302.90839558609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17557.731958762888,
            "unit": "ns",
            "range": "± 1444.9506228260875"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82219.56521739131,
            "unit": "ns",
            "range": "± 4844.828195968068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65960,
            "unit": "ns",
            "range": "± 1522.083060186028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90004.54545454546,
            "unit": "ns",
            "range": "± 15884.521234280262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4527.551020408163,
            "unit": "ns",
            "range": "± 761.818309405425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17308.24742268041,
            "unit": "ns",
            "range": "± 1508.6328042782081"
          }
        ]
      }
    ]
  }
}