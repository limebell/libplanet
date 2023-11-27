window.BENCHMARK_DATA = {
  "lastUpdate": 1701074517554,
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
          "id": "73186ba1c6ea1e114550f77a6e70c3358b9d680f",
          "message": "feat: migrate stae if protocol version has increased to 5",
          "timestamp": "2023-11-27T14:02:54+09:00",
          "tree_id": "45c2fc8bcc9e842b02120ae99cc8efc6a22735c6",
          "url": "https://github.com/limebell/libplanet/commit/73186ba1c6ea1e114550f77a6e70c3358b9d680f"
        },
        "date": 1701062212243,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1096139.7959183673,
            "unit": "ns",
            "range": "± 150560.5537938832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1818301.851851852,
            "unit": "ns",
            "range": "± 76230.80021990008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1708149.4623655914,
            "unit": "ns",
            "range": "± 139098.35246082715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7448117.808219178,
            "unit": "ns",
            "range": "± 312750.04855780146"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35237.5,
            "unit": "ns",
            "range": "± 1536.0741549560066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4963914.285714285,
            "unit": "ns",
            "range": "± 36343.69286394836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13198507.692307692,
            "unit": "ns",
            "range": "± 65729.66683746467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33388606.25,
            "unit": "ns",
            "range": "± 609423.9153700813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68526146.66666667,
            "unit": "ns",
            "range": "± 1280852.4961729127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131256866.66666667,
            "unit": "ns",
            "range": "± 1362236.7801663906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3254401.6927083335,
            "unit": "ns",
            "range": "± 7682.24359583805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1067898.203125,
            "unit": "ns",
            "range": "± 5005.363203861305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735354.16015625,
            "unit": "ns",
            "range": "± 1994.5433718846782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1911713.5463169643,
            "unit": "ns",
            "range": "± 2296.93502843471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623410.2213541666,
            "unit": "ns",
            "range": "± 920.9034576379353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567986.5304129465,
            "unit": "ns",
            "range": "± 1192.395252772252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2179865.625,
            "unit": "ns",
            "range": "± 54799.509118209935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2318691.304347826,
            "unit": "ns",
            "range": "± 65554.57040117869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2795774.193548387,
            "unit": "ns",
            "range": "± 85034.1969160719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2924098.214285714,
            "unit": "ns",
            "range": "± 124883.17084535294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9706521.505376345,
            "unit": "ns",
            "range": "± 2794044.309265905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173562.68656716417,
            "unit": "ns",
            "range": "± 8005.828100958049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168901.16279069768,
            "unit": "ns",
            "range": "± 9286.150271630599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145704.7619047619,
            "unit": "ns",
            "range": "± 5297.351035254175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2821093.3333333335,
            "unit": "ns",
            "range": "± 46811.01010090112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2494980,
            "unit": "ns",
            "range": "± 45886.38453522227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11268.965517241379,
            "unit": "ns",
            "range": "± 1330.5279896925329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57980.208333333336,
            "unit": "ns",
            "range": "± 6086.855895532803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45483.333333333336,
            "unit": "ns",
            "range": "± 2344.178568320502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58477.52808988764,
            "unit": "ns",
            "range": "± 7194.833259944703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2609.375,
            "unit": "ns",
            "range": "± 519.7323450838093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10706.382978723404,
            "unit": "ns",
            "range": "± 1583.640050244821"
          }
        ]
      },
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
          "id": "98914965b2a82b0c5c77178b74d525436924d2c7",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-11-27T17:29:40+09:00",
          "tree_id": "b6944d1bd4caae010e0e33f5d500a9c14a66bba5",
          "url": "https://github.com/limebell/libplanet/commit/98914965b2a82b0c5c77178b74d525436924d2c7"
        },
        "date": 1701074503339,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1031087.3684210526,
            "unit": "ns",
            "range": "± 101539.8865576974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1767683.9285714286,
            "unit": "ns",
            "range": "± 75662.07835269495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1699913.1313131314,
            "unit": "ns",
            "range": "± 224053.4086503705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7171805.9701492535,
            "unit": "ns",
            "range": "± 280943.191108957"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34086.27450980392,
            "unit": "ns",
            "range": "± 1389.966849654068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4848426.666666667,
            "unit": "ns",
            "range": "± 36570.3132270399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13060092.857142856,
            "unit": "ns",
            "range": "± 72501.97306902136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32581757.692307692,
            "unit": "ns",
            "range": "± 183401.3516014284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63497307.14285714,
            "unit": "ns",
            "range": "± 457024.5094661196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130003669.23076923,
            "unit": "ns",
            "range": "± 807346.3882628233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3220158.7332589286,
            "unit": "ns",
            "range": "± 6602.062599484569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1055588.2161458333,
            "unit": "ns",
            "range": "± 1664.8646232897497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745739.2020089285,
            "unit": "ns",
            "range": "± 1825.0876578348634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961310.3515625,
            "unit": "ns",
            "range": "± 4288.751977841533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614700.8528645834,
            "unit": "ns",
            "range": "± 1730.268775569044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557088.4505208334,
            "unit": "ns",
            "range": "± 1048.6497101630462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2165970.8333333335,
            "unit": "ns",
            "range": "± 51869.078324488124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2293788.3333333335,
            "unit": "ns",
            "range": "± 102426.52445743427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2788042.8571428573,
            "unit": "ns",
            "range": "± 48230.24448949522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2894001,
            "unit": "ns",
            "range": "± 299912.8383464944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8494603.086419754,
            "unit": "ns",
            "range": "± 1340835.7739751744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167339.68253968254,
            "unit": "ns",
            "range": "± 6566.865498716919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157880,
            "unit": "ns",
            "range": "± 6969.240908490659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139696.66666666666,
            "unit": "ns",
            "range": "± 4185.729725308758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2799721.4285714286,
            "unit": "ns",
            "range": "± 48797.953591572616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2450653.3333333335,
            "unit": "ns",
            "range": "± 43067.98391026956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10986.315789473685,
            "unit": "ns",
            "range": "± 1656.1690302209297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52315.38461538462,
            "unit": "ns",
            "range": "± 3816.016628106186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44056.25,
            "unit": "ns",
            "range": "± 1745.3776339538624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50381.17647058824,
            "unit": "ns",
            "range": "± 5847.06874298174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2495.744680851064,
            "unit": "ns",
            "range": "± 397.7530691316666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9919.565217391304,
            "unit": "ns",
            "range": "± 1581.9197636280721"
          }
        ]
      }
    ]
  }
}