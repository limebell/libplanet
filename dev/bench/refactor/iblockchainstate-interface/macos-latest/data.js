window.BENCHMARK_DATA = {
  "lastUpdate": 1704275176506,
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
          "id": "dfaada365c0316749ef5226477879e1cc1e5ce8a",
          "message": "refactor: refactor IBlockChainStates interface",
          "timestamp": "2024-01-03T18:30:47+09:00",
          "tree_id": "0cd61258bc3067d0728a0358c9dec44a9edbdc0c",
          "url": "https://github.com/limebell/libplanet/commit/dfaada365c0316749ef5226477879e1cc1e5ce8a"
        },
        "date": 1704275169832,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9503267.333333334,
            "unit": "ns",
            "range": "± 198051.16786659838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22999278.888888888,
            "unit": "ns",
            "range": "± 705623.6415570385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54054620.61764706,
            "unit": "ns",
            "range": "± 1050784.9363193263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112005778.6,
            "unit": "ns",
            "range": "± 1608217.9869309561"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226316730.76923078,
            "unit": "ns",
            "range": "± 3278465.360550043"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49641.211764705884,
            "unit": "ns",
            "range": "± 8043.613046111445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219706.64,
            "unit": "ns",
            "range": "± 11008.654712764175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 228191.4105263158,
            "unit": "ns",
            "range": "± 17969.630361520387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 222203.42424242425,
            "unit": "ns",
            "range": "± 20698.17487521836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4323611.238636363,
            "unit": "ns",
            "range": "± 237723.0740342609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3849777.7346938774,
            "unit": "ns",
            "range": "± 296565.5970012577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17747.591836734693,
            "unit": "ns",
            "range": "± 4003.5186922648572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 66170.85263157895,
            "unit": "ns",
            "range": "± 6264.16693781863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56871.78735632184,
            "unit": "ns",
            "range": "± 5263.414472074025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63111.51052631579,
            "unit": "ns",
            "range": "± 10781.577031544228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5047.010101010101,
            "unit": "ns",
            "range": "± 1202.076464467856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20473.385057471263,
            "unit": "ns",
            "range": "± 2279.088671526648"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1174484.73,
            "unit": "ns",
            "range": "± 169509.17316477944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2501297.7959183673,
            "unit": "ns",
            "range": "± 241089.54128939973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1934674.0102040817,
            "unit": "ns",
            "range": "± 168909.42120637646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 22288781.5,
            "unit": "ns",
            "range": "± 4319375.371787055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3309920.1071428573,
            "unit": "ns",
            "range": "± 128767.5933834679"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3435845.3829787234,
            "unit": "ns",
            "range": "± 131692.34495473237"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4107379.289473684,
            "unit": "ns",
            "range": "± 86852.37734325664"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4363009.415492957,
            "unit": "ns",
            "range": "± 212775.08081075034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 25172449.96236559,
            "unit": "ns",
            "range": "± 3803641.9570860937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4368285.745833334,
            "unit": "ns",
            "range": "± 59716.390632951516"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1361410.3302283655,
            "unit": "ns",
            "range": "± 12177.554619304114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 894422.8339146206,
            "unit": "ns",
            "range": "± 14852.36272330305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1967939.3852251838,
            "unit": "ns",
            "range": "± 21988.178377177766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 646081.4270833334,
            "unit": "ns",
            "range": "± 9819.731769732136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 560066.9350210336,
            "unit": "ns",
            "range": "± 5784.259713457568"
          }
        ]
      }
    ]
  }
}