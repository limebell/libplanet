window.BENCHMARK_DATA = {
  "lastUpdate": 1689676494419,
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
          "id": "d5fddba73cefa3a3d2e218afbe51e48311585704",
          "message": "test: separate Libplanet.Action.Tests project  [skip changelog]\n\nsome tests in Libplanet.Tests.Action is not separated since it has dependency on blockchain",
          "timestamp": "2023-07-18T19:15:00+09:00",
          "tree_id": "580e9ab971c4e68d46cef5975f853c3f4fbdd62c",
          "url": "https://github.com/limebell/libplanet/commit/d5fddba73cefa3a3d2e218afbe51e48311585704"
        },
        "date": 1689676470228,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1706584.6153846155,
            "unit": "ns",
            "range": "± 26648.603658035765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2985917.7419354836,
            "unit": "ns",
            "range": "± 135798.6003020572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2103608.0808080807,
            "unit": "ns",
            "range": "± 129534.81422883783"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5737862.686567164,
            "unit": "ns",
            "range": "± 272651.34348057763"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54534.04255319149,
            "unit": "ns",
            "range": "± 3743.827987257128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8481972.727272727,
            "unit": "ns",
            "range": "± 236088.44644635738"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23462818.75,
            "unit": "ns",
            "range": "± 450459.46205883316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60195573.333333336,
            "unit": "ns",
            "range": "± 466825.4850838903"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121580033.33333333,
            "unit": "ns",
            "range": "± 1939600.4904054217"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238407613.33333334,
            "unit": "ns",
            "range": "± 3607316.418824915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5791927.03125,
            "unit": "ns",
            "range": "± 38118.747139369196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1928781.1067708333,
            "unit": "ns",
            "range": "± 13429.09000471619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1419530.4947916667,
            "unit": "ns",
            "range": "± 9709.88059384983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3151418.2477678573,
            "unit": "ns",
            "range": "± 14741.690697695609"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 986156.7608173077,
            "unit": "ns",
            "range": "± 4033.058436306449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 939176.953125,
            "unit": "ns",
            "range": "± 6560.562878116546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3824964,
            "unit": "ns",
            "range": "± 152250.3399815245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3964831.8181818184,
            "unit": "ns",
            "range": "± 176468.37255012445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4913765.116279069,
            "unit": "ns",
            "range": "± 180693.69225520713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4474890,
            "unit": "ns",
            "range": "± 158759.210998679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7273621.052631579,
            "unit": "ns",
            "range": "± 250468.18124280428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302861.1111111111,
            "unit": "ns",
            "range": "± 12198.01509783637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 293954.54545454547,
            "unit": "ns",
            "range": "± 11045.9179989599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 273427.2727272727,
            "unit": "ns",
            "range": "± 18991.097904780087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4849535,
            "unit": "ns",
            "range": "± 105624.38551674265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4547593.333333333,
            "unit": "ns",
            "range": "± 55039.32966092347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24988.297872340427,
            "unit": "ns",
            "range": "± 2260.595429364627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104217.3469387755,
            "unit": "ns",
            "range": "± 6951.674507319239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90364.64646464646,
            "unit": "ns",
            "range": "± 8857.469039285466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107475.25773195876,
            "unit": "ns",
            "range": "± 14939.524137110224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6290.909090909091,
            "unit": "ns",
            "range": "± 1278.6385384694806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22149.473684210527,
            "unit": "ns",
            "range": "± 1970.0347596139886"
          }
        ]
      }
    ]
  }
}