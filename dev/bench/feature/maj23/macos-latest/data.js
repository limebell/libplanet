window.BENCHMARK_DATA = {
  "lastUpdate": 1686562277653,
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
          "id": "0f10562e3debb2347a96f2625766b1ec6e569af4",
          "message": "temp: test case",
          "timestamp": "2023-06-09T14:38:41+09:00",
          "tree_id": "2a18c850e206cc6f3a7c5d341f39bb98d00e58aa",
          "url": "https://github.com/limebell/libplanet/commit/0f10562e3debb2347a96f2625766b1ec6e569af4"
        },
        "date": 1686290660462,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9063902.2,
            "unit": "ns",
            "range": "± 289041.28653783386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22901850.895348836,
            "unit": "ns",
            "range": "± 839884.5556801284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56897082.625,
            "unit": "ns",
            "range": "± 2444694.3892371636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116166490.5,
            "unit": "ns",
            "range": "± 5379991.815674999"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232120751.13793105,
            "unit": "ns",
            "range": "± 6655785.822179809"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 86764.34615384616,
            "unit": "ns",
            "range": "± 11814.924841932465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 387199.42391304346,
            "unit": "ns",
            "range": "± 29666.461333820556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 366562.402173913,
            "unit": "ns",
            "range": "± 31692.504444731665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 353468.0824175824,
            "unit": "ns",
            "range": "± 26658.074277814314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5095014.303370787,
            "unit": "ns",
            "range": "± 911083.0913654913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4661737.808988764,
            "unit": "ns",
            "range": "± 675616.6401827915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28442.63157894737,
            "unit": "ns",
            "range": "± 4442.856348458131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 146453.5879120879,
            "unit": "ns",
            "range": "± 19368.79497751666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 136640.76373626373,
            "unit": "ns",
            "range": "± 11112.83673739035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 140732.67021276595,
            "unit": "ns",
            "range": "± 18800.91178319068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9948.170212765957,
            "unit": "ns",
            "range": "± 2207.696456209298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30258.236559139787,
            "unit": "ns",
            "range": "± 4791.661952759028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1807412.4204545454,
            "unit": "ns",
            "range": "± 210425.67344364608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3509228.488235294,
            "unit": "ns",
            "range": "± 555224.6564618278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3228006.752873563,
            "unit": "ns",
            "range": "± 635052.3245159577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9697685.010638298,
            "unit": "ns",
            "range": "± 3015747.208869686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3598045.134408602,
            "unit": "ns",
            "range": "± 278281.2978507845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3964108.2916666665,
            "unit": "ns",
            "range": "± 364369.2739256908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5588813.252747253,
            "unit": "ns",
            "range": "± 1109566.011683593"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5972772.7894736845,
            "unit": "ns",
            "range": "± 1571364.8906527623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12744461.163265307,
            "unit": "ns",
            "range": "± 4292107.378648789"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8342706.177777777,
            "unit": "ns",
            "range": "± 828983.2306638719"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2387412.3024929776,
            "unit": "ns",
            "range": "± 384168.32215376553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1656231.880859375,
            "unit": "ns",
            "range": "± 267128.7195041665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3375094.8238407257,
            "unit": "ns",
            "range": "± 470410.7905657608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 900685.0552654655,
            "unit": "ns",
            "range": "± 35418.79664594672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 862428.22785794,
            "unit": "ns",
            "range": "± 57687.73732550444"
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
          "id": "96f58e605e9378f62007d42d125c3d30038961be",
          "message": "test: add test case",
          "timestamp": "2023-06-09T19:12:47+09:00",
          "tree_id": "32fccaa2d4f28bbb6a422ec9287d59db1c3720d6",
          "url": "https://github.com/limebell/libplanet/commit/96f58e605e9378f62007d42d125c3d30038961be"
        },
        "date": 1686306758921,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8475293.362068966,
            "unit": "ns",
            "range": "± 244286.81363376416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20727585.785714287,
            "unit": "ns",
            "range": "± 1104877.934101473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51612207.921052635,
            "unit": "ns",
            "range": "± 1083915.4010545553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101970135.9,
            "unit": "ns",
            "range": "± 2069295.4053772548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216837779.44444445,
            "unit": "ns",
            "range": "± 4461151.249435605"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70726.62631578947,
            "unit": "ns",
            "range": "± 8664.492282631998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 331037.0416666667,
            "unit": "ns",
            "range": "± 33109.835426927835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319698.26086956525,
            "unit": "ns",
            "range": "± 32183.900577319087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316603.5344827586,
            "unit": "ns",
            "range": "± 18961.42047130159"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4300553.778688525,
            "unit": "ns",
            "range": "± 189777.88631249347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3849962.9285714286,
            "unit": "ns",
            "range": "± 57311.69260176426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23874.067010309278,
            "unit": "ns",
            "range": "± 3684.650082061209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111747.61224489796,
            "unit": "ns",
            "range": "± 19577.30351399354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103917.89361702128,
            "unit": "ns",
            "range": "± 9005.445958601504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113640.16666666667,
            "unit": "ns",
            "range": "± 16307.418516105494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6935.65,
            "unit": "ns",
            "range": "± 1136.0268204882695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20018.118556701033,
            "unit": "ns",
            "range": "± 3737.703340185708"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1682714.7415730336,
            "unit": "ns",
            "range": "± 202628.5523583804"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3346746.340909091,
            "unit": "ns",
            "range": "± 519464.9748730731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2779229.340659341,
            "unit": "ns",
            "range": "± 400887.8671679822"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7018444.078651685,
            "unit": "ns",
            "range": "± 661491.6745057447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3535515.796296296,
            "unit": "ns",
            "range": "± 98781.81325948572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3578454.881443299,
            "unit": "ns",
            "range": "± 299583.4918414663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4547075.805555556,
            "unit": "ns",
            "range": "± 145194.99492865632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4443035.966666667,
            "unit": "ns",
            "range": "± 222650.27524362746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8043979.790697674,
            "unit": "ns",
            "range": "± 402553.05576827185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7141711.387019231,
            "unit": "ns",
            "range": "± 167834.19595632754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2065179.5786830357,
            "unit": "ns",
            "range": "± 32396.110837445824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1303190.154296875,
            "unit": "ns",
            "range": "± 21367.05537452632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2672526.342122396,
            "unit": "ns",
            "range": "± 26192.08002090832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801898.1662248884,
            "unit": "ns",
            "range": "± 6271.3350970622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 815411.3660807292,
            "unit": "ns",
            "range": "± 8986.071664573845"
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
          "id": "a03eb569fe044c8c767226d402e9445dfc16df02",
          "message": "temp: test",
          "timestamp": "2023-06-09T19:24:54+09:00",
          "tree_id": "aa197eb7cb3ddb258652973e40233336d4280fad",
          "url": "https://github.com/limebell/libplanet/commit/a03eb569fe044c8c767226d402e9445dfc16df02"
        },
        "date": 1686307817253,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8189805.771428571,
            "unit": "ns",
            "range": "± 384236.93414460507"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20579765.548387095,
            "unit": "ns",
            "range": "± 623820.0158944799"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52571285.23728813,
            "unit": "ns",
            "range": "± 2274743.3348407745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111075237.08791208,
            "unit": "ns",
            "range": "± 14010168.744055627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 216411746.5471698,
            "unit": "ns",
            "range": "± 9002992.74311854"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 84430.90659340659,
            "unit": "ns",
            "range": "± 12200.402458733364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 366724,
            "unit": "ns",
            "range": "± 48112.60970672518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341430.17391304346,
            "unit": "ns",
            "range": "± 48016.51574509642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 333150.60869565216,
            "unit": "ns",
            "range": "± 37109.364953348406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4604860.071428572,
            "unit": "ns",
            "range": "± 198059.31980374485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4149245.011235955,
            "unit": "ns",
            "range": "± 262506.8968784653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27170.703296703297,
            "unit": "ns",
            "range": "± 3514.3607273727785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 132230.87234042553,
            "unit": "ns",
            "range": "± 19594.843198748178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 145122.80434782608,
            "unit": "ns",
            "range": "± 16908.67574226036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 146501.8563218391,
            "unit": "ns",
            "range": "± 19557.96295688079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10303.90625,
            "unit": "ns",
            "range": "± 1893.882698407942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26674.55376344086,
            "unit": "ns",
            "range": "± 7227.9908438225375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1771217.787356322,
            "unit": "ns",
            "range": "± 223772.60092490216"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3264485.8571428573,
            "unit": "ns",
            "range": "± 293072.4996324882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2966744.011235955,
            "unit": "ns",
            "range": "± 496271.0767152385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8425045.308988765,
            "unit": "ns",
            "range": "± 2319065.5602714056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3510765.138297872,
            "unit": "ns",
            "range": "± 276986.15834655496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3524885.855555556,
            "unit": "ns",
            "range": "± 224996.0769040038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4724692.5612244895,
            "unit": "ns",
            "range": "± 388964.04318581964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4680162.308510638,
            "unit": "ns",
            "range": "± 472619.49960942124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8455508.217391305,
            "unit": "ns",
            "range": "± 642733.1616610328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7353267.660661764,
            "unit": "ns",
            "range": "± 378203.20342933375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2207060.029747596,
            "unit": "ns",
            "range": "± 31938.582960620795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1403086.0173688617,
            "unit": "ns",
            "range": "± 39731.16454442014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3127162.5948828124,
            "unit": "ns",
            "range": "± 262815.8436602261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839480.5255408654,
            "unit": "ns",
            "range": "± 13125.318960316978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 821711.9589217749,
            "unit": "ns",
            "range": "± 42391.40679704086"
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
          "id": "a66da72edcb7e33701c4782175cd0153cbe44bca",
          "message": "test: add tests for added interfaces",
          "timestamp": "2023-06-12T16:34:16+09:00",
          "tree_id": "fd79b037c40ac531bb7e7d4c6b8e47d1956872d3",
          "url": "https://github.com/limebell/libplanet/commit/a66da72edcb7e33701c4782175cd0153cbe44bca"
        },
        "date": 1686557034750,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9201699.866666667,
            "unit": "ns",
            "range": "± 836329.5146213715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24813483.325581394,
            "unit": "ns",
            "range": "± 3106336.611908879"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 91269739.73626374,
            "unit": "ns",
            "range": "± 40965085.54456056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 154755811.59139785,
            "unit": "ns",
            "range": "± 41500581.330759704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 376718085.09375,
            "unit": "ns",
            "range": "± 125564028.585343"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 90435.45348837209,
            "unit": "ns",
            "range": "± 9837.082452347433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 462071.2444444444,
            "unit": "ns",
            "range": "± 114084.61252795247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 382795.7173913043,
            "unit": "ns",
            "range": "± 50370.61348585337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 382024.56842105265,
            "unit": "ns",
            "range": "± 60029.853657505664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5257089.738636363,
            "unit": "ns",
            "range": "± 843591.8585023154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4563482.795698925,
            "unit": "ns",
            "range": "± 556639.8237197668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31008.97701149425,
            "unit": "ns",
            "range": "± 4308.394758470285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 147027.83516483515,
            "unit": "ns",
            "range": "± 26643.461152061613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 144388.989010989,
            "unit": "ns",
            "range": "± 19742.324954548512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 156580.93617021278,
            "unit": "ns",
            "range": "± 32308.46266499618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10650.956989247312,
            "unit": "ns",
            "range": "± 1569.0725654096666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28249.191011235955,
            "unit": "ns",
            "range": "± 4789.81999537562"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2066053.0368421052,
            "unit": "ns",
            "range": "± 560497.2402558288"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3416214.2108433736,
            "unit": "ns",
            "range": "± 477074.1906611215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2781492.4418604653,
            "unit": "ns",
            "range": "± 342227.26760607504"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8293085.122222222,
            "unit": "ns",
            "range": "± 1827934.597794508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4718058.431034483,
            "unit": "ns",
            "range": "± 1563520.4677155972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5111513.971910113,
            "unit": "ns",
            "range": "± 1629831.2667267201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5537456.17816092,
            "unit": "ns",
            "range": "± 1133265.122502053"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5485218.411111111,
            "unit": "ns",
            "range": "± 961082.8550222077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11260943.402173912,
            "unit": "ns",
            "range": "± 3611331.517461754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 9827040.825816762,
            "unit": "ns",
            "range": "± 1412599.1088191553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2313582.1528008645,
            "unit": "ns",
            "range": "± 235676.53642210754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1427195.880859375,
            "unit": "ns",
            "range": "± 44150.25742466347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3224545.3965657554,
            "unit": "ns",
            "range": "± 330147.15207137575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1047522.0188382056,
            "unit": "ns",
            "range": "± 83209.556199822"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1049892.0184366414,
            "unit": "ns",
            "range": "± 67455.71868095563"
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
          "id": "7da49c610154a9b1d4f65cd935630367cc958c87",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-06-12T18:05:48+09:00",
          "tree_id": "5544c6c93a099682cc8f455a78509d1b12cda0e4",
          "url": "https://github.com/limebell/libplanet/commit/7da49c610154a9b1d4f65cd935630367cc958c87"
        },
        "date": 1686562270696,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8807242.011904761,
            "unit": "ns",
            "range": "± 1000928.6295889107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28590609.1344086,
            "unit": "ns",
            "range": "± 9314610.216131043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71383015.65555556,
            "unit": "ns",
            "range": "± 20661372.561427027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108256324.66666667,
            "unit": "ns",
            "range": "± 3215305.8276279136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222068793.5483871,
            "unit": "ns",
            "range": "± 10102503.42313868"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80112.70731707317,
            "unit": "ns",
            "range": "± 6559.577531728747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 348380.20408163266,
            "unit": "ns",
            "range": "± 47094.18634003657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316949.0543478261,
            "unit": "ns",
            "range": "± 33813.33798778427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305098.8181818182,
            "unit": "ns",
            "range": "± 21535.530902532184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4424681.0322580645,
            "unit": "ns",
            "range": "± 272160.6538016635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3927982.3854166665,
            "unit": "ns",
            "range": "± 233943.18486485782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20560.489583333332,
            "unit": "ns",
            "range": "± 4500.293871093992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106258.4375,
            "unit": "ns",
            "range": "± 15119.846256397757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110087.5,
            "unit": "ns",
            "range": "± 18124.59342326389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123753.15217391304,
            "unit": "ns",
            "range": "± 17314.79288109015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8844.262886597939,
            "unit": "ns",
            "range": "± 1470.5092285015583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23294.515789473684,
            "unit": "ns",
            "range": "± 4142.050267997768"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1766981.9659090908,
            "unit": "ns",
            "range": "± 195807.34279798606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3454663.5,
            "unit": "ns",
            "range": "± 503457.21572420595"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3388577.565217391,
            "unit": "ns",
            "range": "± 971848.9768006094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8658602.923913043,
            "unit": "ns",
            "range": "± 1898095.338020857"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3670265.0888888887,
            "unit": "ns",
            "range": "± 623648.566106424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3806597.223404255,
            "unit": "ns",
            "range": "± 359482.58785165776"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4700359.611111111,
            "unit": "ns",
            "range": "± 251788.5370467098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4602773.078947368,
            "unit": "ns",
            "range": "± 335074.8043789428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8351803.97752809,
            "unit": "ns",
            "range": "± 715382.8225013033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8362930.812915559,
            "unit": "ns",
            "range": "± 1030837.6861361327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2413121.3164511495,
            "unit": "ns",
            "range": "± 237904.55634448281"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1616336.0449862638,
            "unit": "ns",
            "range": "± 152401.71143313625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3094574.860440341,
            "unit": "ns",
            "range": "± 407745.6096427883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 963216.6424512987,
            "unit": "ns",
            "range": "± 48669.112400845595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 831635.1156969572,
            "unit": "ns",
            "range": "± 17694.595422184262"
          }
        ]
      }
    ]
  }
}