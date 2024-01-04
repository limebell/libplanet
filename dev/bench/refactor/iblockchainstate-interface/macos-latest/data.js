window.BENCHMARK_DATA = {
  "lastUpdate": 1704346851738,
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
          "id": "57eda174477e29b74dfa8c5d57eddcc7f94c76de",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-01-03T18:36:42+09:00",
          "tree_id": "3d991210004131b317cab666aff77c01eaa4b115",
          "url": "https://github.com/limebell/libplanet/commit/57eda174477e29b74dfa8c5d57eddcc7f94c76de"
        },
        "date": 1704275957769,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10563512.677419355,
            "unit": "ns",
            "range": "± 314976.99132670916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25295367.85714286,
            "unit": "ns",
            "range": "± 248446.39742658226"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66542721.31818182,
            "unit": "ns",
            "range": "± 1587759.3954424427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134934935.2051282,
            "unit": "ns",
            "range": "± 6920713.076067483"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275975538.9375,
            "unit": "ns",
            "range": "± 5321755.001385877"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50875.79069767442,
            "unit": "ns",
            "range": "± 4569.451981857418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300596.01851851854,
            "unit": "ns",
            "range": "± 10256.274449093213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 296986.4464285714,
            "unit": "ns",
            "range": "± 12745.932876333025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 280691.18888888886,
            "unit": "ns",
            "range": "± 15605.754838041114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5468009.090909091,
            "unit": "ns",
            "range": "± 131733.19462302042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3750326.73,
            "unit": "ns",
            "range": "± 355838.18265014037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14100.082417582418,
            "unit": "ns",
            "range": "± 1273.2281637714261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65957.36458333333,
            "unit": "ns",
            "range": "± 6394.593178483788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61942.32323232323,
            "unit": "ns",
            "range": "± 11455.361643538394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66444.44736842105,
            "unit": "ns",
            "range": "± 13226.549189212099"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3396.550561797753,
            "unit": "ns",
            "range": "± 376.7658125787024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12798.505263157895,
            "unit": "ns",
            "range": "± 1280.6107657999141"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1483224.9315789475,
            "unit": "ns",
            "range": "± 133619.27441162997"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3072653.3863636362,
            "unit": "ns",
            "range": "± 115311.43335418258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3151122.887755102,
            "unit": "ns",
            "range": "± 767960.5332991307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 26778643.760869566,
            "unit": "ns",
            "range": "± 3619925.4352501817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4133715.554054054,
            "unit": "ns",
            "range": "± 130226.42719487255"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4049721.1896551726,
            "unit": "ns",
            "range": "± 177567.99422817669"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5012293.653846154,
            "unit": "ns",
            "range": "± 241435.40132326365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5199781.021276596,
            "unit": "ns",
            "range": "± 301950.92500744946"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31603328.2628866,
            "unit": "ns",
            "range": "± 4550382.555751346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4430625.501674107,
            "unit": "ns",
            "range": "± 74433.12741660401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1473020.5183423914,
            "unit": "ns",
            "range": "± 56226.41736961273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 980933.3753645833,
            "unit": "ns",
            "range": "± 49230.092833255294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2202125.8290550597,
            "unit": "ns",
            "range": "± 145048.53280013055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 644040.7958456504,
            "unit": "ns",
            "range": "± 21734.90546844107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 691025.0349511718,
            "unit": "ns",
            "range": "± 88008.42814639836"
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
          "id": "e94b607042e69021dd5345a7f68d4f94a8b23472",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-01-04T14:21:41+09:00",
          "tree_id": "06b04296a3843604f2fe65d23dc90ba66ca14e10",
          "url": "https://github.com/limebell/libplanet/commit/e94b607042e69021dd5345a7f68d4f94a8b23472"
        },
        "date": 1704346836257,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10540774.714285715,
            "unit": "ns",
            "range": "± 109101.574533818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26475701.769230768,
            "unit": "ns",
            "range": "± 197991.53876624536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65717079.71428572,
            "unit": "ns",
            "range": "± 1074715.3984472374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 131107903.07692307,
            "unit": "ns",
            "range": "± 771868.5614323056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270016811.64285713,
            "unit": "ns",
            "range": "± 2916098.5887564435"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62012.316091954024,
            "unit": "ns",
            "range": "± 4229.937026109764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 322337.2988505747,
            "unit": "ns",
            "range": "± 22591.886048136294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 322060.037037037,
            "unit": "ns",
            "range": "± 8825.956389586523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 302963.25268817204,
            "unit": "ns",
            "range": "± 19536.800339168127"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5364131.785714285,
            "unit": "ns",
            "range": "± 69048.11940337591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4639583.730769231,
            "unit": "ns",
            "range": "± 46503.64904347802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22253.61797752809,
            "unit": "ns",
            "range": "± 4224.426035531116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100618.81182795699,
            "unit": "ns",
            "range": "± 12182.45324938477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105598.59090909091,
            "unit": "ns",
            "range": "± 8851.627539982863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101361.89130434782,
            "unit": "ns",
            "range": "± 11153.482710860408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8232.617021276596,
            "unit": "ns",
            "range": "± 1189.8233726909993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23709.869565217392,
            "unit": "ns",
            "range": "± 2718.1980707870757"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1465244.0108695652,
            "unit": "ns",
            "range": "± 140891.904862838"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3162141.738095238,
            "unit": "ns",
            "range": "± 144363.00446284417"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2412985.876344086,
            "unit": "ns",
            "range": "± 162871.0831413922"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 25983396.729166668,
            "unit": "ns",
            "range": "± 3798894.270695305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3939415.8309859154,
            "unit": "ns",
            "range": "± 191065.53033605928"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4129072.9565217393,
            "unit": "ns",
            "range": "± 158877.13034944911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4923960,
            "unit": "ns",
            "range": "± 47751.92553950855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5103660.829545454,
            "unit": "ns",
            "range": "± 334200.63538605353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 30840923.63131313,
            "unit": "ns",
            "range": "± 4146167.3678791267"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6387911.430989583,
            "unit": "ns",
            "range": "± 135514.30259624965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1881658.8542596726,
            "unit": "ns",
            "range": "± 44419.4687297511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1237915.7427455357,
            "unit": "ns",
            "range": "± 28666.425954893766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2866069.078125,
            "unit": "ns",
            "range": "± 65086.49255413814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854600.7201450893,
            "unit": "ns",
            "range": "± 7706.274179555663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 801528.4092221467,
            "unit": "ns",
            "range": "± 20246.02053025965"
          }
        ]
      }
    ]
  }
}