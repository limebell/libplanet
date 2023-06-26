window.BENCHMARK_DATA = {
  "lastUpdate": 1687751643583,
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
          "id": "9626e49e3c14fd20d5ad8b6c76a90301ebece760",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-06-12T18:45:53+09:00",
          "tree_id": "5544c6c93a099682cc8f455a78509d1b12cda0e4",
          "url": "https://github.com/limebell/libplanet/commit/9626e49e3c14fd20d5ad8b6c76a90301ebece760"
        },
        "date": 1686564718527,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8723705.590909092,
            "unit": "ns",
            "range": "± 560262.4435083441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21591805.660714287,
            "unit": "ns",
            "range": "± 927704.1315352703"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54059298.83962264,
            "unit": "ns",
            "range": "± 2196612.582672045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 158595069.0860215,
            "unit": "ns",
            "range": "± 51491701.21974106"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 322720215.53061223,
            "unit": "ns",
            "range": "± 84831030.0515291"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74415.30681818182,
            "unit": "ns",
            "range": "± 7737.067454877997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343684.5740740741,
            "unit": "ns",
            "range": "± 21142.720737749067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 350319.3409090909,
            "unit": "ns",
            "range": "± 42446.937379438095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 337413.23076923075,
            "unit": "ns",
            "range": "± 37117.24239340254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4515788.162921349,
            "unit": "ns",
            "range": "± 517726.5884409485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4288087.068181818,
            "unit": "ns",
            "range": "± 613858.1148175086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25397.58695652174,
            "unit": "ns",
            "range": "± 5628.236091161242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110000.10638297872,
            "unit": "ns",
            "range": "± 16230.259149785814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118073.51136363637,
            "unit": "ns",
            "range": "± 9960.93517397334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122445.22527472528,
            "unit": "ns",
            "range": "± 16377.965967906688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8054.695652173913,
            "unit": "ns",
            "range": "± 1216.8152427241957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22891.793478260868,
            "unit": "ns",
            "range": "± 4739.2142426987575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1698797.755319149,
            "unit": "ns",
            "range": "± 228985.30184595363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3576444.195652174,
            "unit": "ns",
            "range": "± 643661.3408655606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3024305.1551724137,
            "unit": "ns",
            "range": "± 697335.6022364085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8598995.1827957,
            "unit": "ns",
            "range": "± 2129161.2032756913"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3918881.172413793,
            "unit": "ns",
            "range": "± 766153.0949695368"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4566783.186813187,
            "unit": "ns",
            "range": "± 1144947.528639718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5220940.078651685,
            "unit": "ns",
            "range": "± 724095.1774286561"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5711990.348314607,
            "unit": "ns",
            "range": "± 1472961.5969149696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11443043.956989247,
            "unit": "ns",
            "range": "± 4136000.1382966214"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8346848.663213315,
            "unit": "ns",
            "range": "± 1098517.8524511927"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2377208.016149009,
            "unit": "ns",
            "range": "± 217986.45954783077"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1477199.9313299006,
            "unit": "ns",
            "range": "± 104625.14539624873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3320900.2333885734,
            "unit": "ns",
            "range": "± 278764.47534093936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 959129.7905101103,
            "unit": "ns",
            "range": "± 51688.54401265053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 893218.9833519345,
            "unit": "ns",
            "range": "± 40934.54629635252"
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
          "id": "6399fdf950302989b1c7037443aedfa0161961ec",
          "message": "chore: fix test",
          "timestamp": "2023-06-12T19:10:09+09:00",
          "tree_id": "e7012c9deb8e2ec93aeb0d5e61919460bbc9b810",
          "url": "https://github.com/limebell/libplanet/commit/6399fdf950302989b1c7037443aedfa0161961ec"
        },
        "date": 1686566137494,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9735041.456989247,
            "unit": "ns",
            "range": "± 844418.0913122942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23453564.739583332,
            "unit": "ns",
            "range": "± 1511457.128457386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60216256.442028984,
            "unit": "ns",
            "range": "± 2882247.6207137723"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117521002.99180327,
            "unit": "ns",
            "range": "± 5091334.013306065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237258751.5,
            "unit": "ns",
            "range": "± 5525659.510379923"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 91213.03370786516,
            "unit": "ns",
            "range": "± 11984.668592005975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 392208.4761904762,
            "unit": "ns",
            "range": "± 45353.00703264383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 405126.13483146066,
            "unit": "ns",
            "range": "± 68364.22127692083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 367456.3333333333,
            "unit": "ns",
            "range": "± 41972.905502748996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5456672.516853932,
            "unit": "ns",
            "range": "± 1021087.5358471088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4515621.676470588,
            "unit": "ns",
            "range": "± 555462.5766991563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 32046.088888888888,
            "unit": "ns",
            "range": "± 3130.1190868125072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 143923.53488372092,
            "unit": "ns",
            "range": "± 15401.837965529174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 153355.66853932585,
            "unit": "ns",
            "range": "± 26752.863609780998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 162342.2789473684,
            "unit": "ns",
            "range": "± 33794.93861266202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10646.895604395604,
            "unit": "ns",
            "range": "± 1570.1117290684258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34712.296703296706,
            "unit": "ns",
            "range": "± 6539.231408276436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2090828.3139534884,
            "unit": "ns",
            "range": "± 414111.37879281054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3967772.347826087,
            "unit": "ns",
            "range": "± 843584.4255848671"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3153926.3586956523,
            "unit": "ns",
            "range": "± 572165.1104560638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8245685.761363637,
            "unit": "ns",
            "range": "± 1400543.5047161628"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3837065.9896907215,
            "unit": "ns",
            "range": "± 452143.11097813863"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4093920.6827956988,
            "unit": "ns",
            "range": "± 409040.5397706545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5060114.47979798,
            "unit": "ns",
            "range": "± 497249.2802600957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4799000.691489362,
            "unit": "ns",
            "range": "± 377787.363303673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11877906.274193548,
            "unit": "ns",
            "range": "± 3509626.807952351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 9178049.498487903,
            "unit": "ns",
            "range": "± 1375133.7756105869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2830915.6661931816,
            "unit": "ns",
            "range": "± 575001.9069958586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1711897.6347439236,
            "unit": "ns",
            "range": "± 247177.0211816171"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3489781.673063859,
            "unit": "ns",
            "range": "± 627296.4615502027"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 859779.4690290178,
            "unit": "ns",
            "range": "± 19724.26125323376"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 812200.6582519531,
            "unit": "ns",
            "range": "± 17778.981035201956"
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
          "id": "724c79a2a3a7a0abc534c2469996f292ede55e7d",
          "message": "chore: fix test",
          "timestamp": "2023-06-12T20:23:59+09:00",
          "tree_id": "0e1b2d899de3de258b17335ad0413d5df88873be",
          "url": "https://github.com/limebell/libplanet/commit/724c79a2a3a7a0abc534c2469996f292ede55e7d"
        },
        "date": 1686570629561,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10142732.633333333,
            "unit": "ns",
            "range": "± 1841161.4730608396"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25728183.78409091,
            "unit": "ns",
            "range": "± 4556164.102454532"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71041622.64893617,
            "unit": "ns",
            "range": "± 14452960.901489513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126838047.63953489,
            "unit": "ns",
            "range": "± 14298679.911206478"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 274779533.6348315,
            "unit": "ns",
            "range": "± 41442059.676073365"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 81347.31034482758,
            "unit": "ns",
            "range": "± 4751.720758841792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 434197.07446808513,
            "unit": "ns",
            "range": "± 101943.70144354444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 391607.5869565217,
            "unit": "ns",
            "range": "± 59734.712199923924"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 362680.3404255319,
            "unit": "ns",
            "range": "± 53590.72887993654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5152621.382978723,
            "unit": "ns",
            "range": "± 872908.6343865452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4476885.005494505,
            "unit": "ns",
            "range": "± 516711.0478179672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29271.93181818182,
            "unit": "ns",
            "range": "± 3298.0231550020976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 137865.72471910113,
            "unit": "ns",
            "range": "± 18867.05577717222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 130110.77011494253,
            "unit": "ns",
            "range": "± 14630.146881824106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 136770.23684210525,
            "unit": "ns",
            "range": "± 25802.191061592952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9642.317204301075,
            "unit": "ns",
            "range": "± 1222.560338568173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26491.664705882355,
            "unit": "ns",
            "range": "± 2814.2725603568656"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1738244.9387755103,
            "unit": "ns",
            "range": "± 200663.3518043646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3286286.340909091,
            "unit": "ns",
            "range": "± 332032.2159635651"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2838837.415730337,
            "unit": "ns",
            "range": "± 414830.11930870876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10812817.046391753,
            "unit": "ns",
            "range": "± 2977700.6612957497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3962351.887640449,
            "unit": "ns",
            "range": "± 543507.1400643619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4114616.315217391,
            "unit": "ns",
            "range": "± 457665.92005719704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5234120.650537634,
            "unit": "ns",
            "range": "± 618408.3752209825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5620428.410526316,
            "unit": "ns",
            "range": "± 1213232.734599314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9602019.35483871,
            "unit": "ns",
            "range": "± 1824888.0847327004"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8537455.828947369,
            "unit": "ns",
            "range": "± 513801.48907981813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2321322.0077327807,
            "unit": "ns",
            "range": "± 195442.56882572226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1490517.4858398438,
            "unit": "ns",
            "range": "± 44844.133392485855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3374564.529641544,
            "unit": "ns",
            "range": "± 102459.83442085094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1086051.4010074013,
            "unit": "ns",
            "range": "± 70394.58629944456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1023105.0054492188,
            "unit": "ns",
            "range": "± 60749.35384290473"
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
          "id": "f131361c2528d94929d0a46d387a4ca92b4005f9",
          "message": "WIP: fix test",
          "timestamp": "2023-06-21T19:02:33+09:00",
          "tree_id": "7e5c85b424d86c3017931fbc5a3b867059b3d90b",
          "url": "https://github.com/limebell/libplanet/commit/f131361c2528d94929d0a46d387a4ca92b4005f9"
        },
        "date": 1687342754818,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7845518,
            "unit": "ns",
            "range": "± 56534.21255793216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19630368.43478261,
            "unit": "ns",
            "range": "± 481044.6605727265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48674273.85714286,
            "unit": "ns",
            "range": "± 778315.7014869803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110980040.34615384,
            "unit": "ns",
            "range": "± 2971206.8644186985"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210166729,
            "unit": "ns",
            "range": "± 9567528.445521882"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74008.5617977528,
            "unit": "ns",
            "range": "± 10158.35212002582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321029.92553191487,
            "unit": "ns",
            "range": "± 24136.7999100465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 353476.07216494845,
            "unit": "ns",
            "range": "± 45844.05459209139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 316823.11363636365,
            "unit": "ns",
            "range": "± 24506.67063232359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4149695.214285714,
            "unit": "ns",
            "range": "± 70659.24807910423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3938878.714285714,
            "unit": "ns",
            "range": "± 168632.45396118576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19567.468085106382,
            "unit": "ns",
            "range": "± 3832.5918781350606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103867.43298969071,
            "unit": "ns",
            "range": "± 21373.913858811644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105286.19565217392,
            "unit": "ns",
            "range": "± 13758.10690141453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112490.97872340426,
            "unit": "ns",
            "range": "± 15886.332930310278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6968.0625,
            "unit": "ns",
            "range": "± 1424.3266169815495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20457.40425531915,
            "unit": "ns",
            "range": "± 3953.070455781024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1779338.0303030303,
            "unit": "ns",
            "range": "± 215459.87832216258"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3341942.48989899,
            "unit": "ns",
            "range": "± 333580.0800780335"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2875946.7959183673,
            "unit": "ns",
            "range": "± 454698.5844562298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7065447,
            "unit": "ns",
            "range": "± 462945.93943272135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3308084.620689655,
            "unit": "ns",
            "range": "± 143996.70930107328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3407512.3210526314,
            "unit": "ns",
            "range": "± 197506.91205900788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4503618.877777778,
            "unit": "ns",
            "range": "± 249662.0866420049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4409174.468421052,
            "unit": "ns",
            "range": "± 271287.3242573093"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7883430.4186046515,
            "unit": "ns",
            "range": "± 424449.0219899749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7258786.3840625,
            "unit": "ns",
            "range": "± 184883.73166320418"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2022839.0828683036,
            "unit": "ns",
            "range": "± 17341.652774334823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1306259.5399739584,
            "unit": "ns",
            "range": "± 8990.734350534618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572361.1255208333,
            "unit": "ns",
            "range": "± 21033.311976334615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 920554.0226702009,
            "unit": "ns",
            "range": "± 5679.652909116566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768159.9501065341,
            "unit": "ns",
            "range": "± 18107.548323942447"
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
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "7b04da4b483f6800ba79e9ab97f022f8ba9b191c",
          "message": "WIP: fix test",
          "timestamp": "2023-06-22T11:33:27+09:00",
          "tree_id": "c009bc0c56a0605159ac8696f66ceeace84970dc",
          "url": "https://github.com/limebell/libplanet/commit/7b04da4b483f6800ba79e9ab97f022f8ba9b191c"
        },
        "date": 1687402360070,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7853677.433333334,
            "unit": "ns",
            "range": "± 127869.3075356166"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20380097.242424242,
            "unit": "ns",
            "range": "± 627559.0536573047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50816181.26744186,
            "unit": "ns",
            "range": "± 1797116.2036094281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101064381.5,
            "unit": "ns",
            "range": "± 2603704.142044026"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205982969.7,
            "unit": "ns",
            "range": "± 2303284.1308302185"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67225.41489361702,
            "unit": "ns",
            "range": "± 13776.840609156308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318908.5053763441,
            "unit": "ns",
            "range": "± 24553.69083724378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308306.7197802198,
            "unit": "ns",
            "range": "± 28054.77335095371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305370.57446808513,
            "unit": "ns",
            "range": "± 27211.843637275964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4190564.8095238097,
            "unit": "ns",
            "range": "± 152849.25423172512"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3598573.0833333335,
            "unit": "ns",
            "range": "± 118709.58659070345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16851,
            "unit": "ns",
            "range": "± 2192.813850146735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86285.44252873563,
            "unit": "ns",
            "range": "± 7949.448751337857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101891.02040816327,
            "unit": "ns",
            "range": "± 15926.68199793971"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110627.55319148937,
            "unit": "ns",
            "range": "± 19117.718412040867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6291.355670103093,
            "unit": "ns",
            "range": "± 1150.8401459159695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18193.489247311827,
            "unit": "ns",
            "range": "± 2585.1118321391305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1705537.4347826086,
            "unit": "ns",
            "range": "± 193255.58586253755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3184031.7808988765,
            "unit": "ns",
            "range": "± 341532.373345851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2745367.8720930233,
            "unit": "ns",
            "range": "± 337855.6600865156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7536310.541176471,
            "unit": "ns",
            "range": "± 1480652.5380536779"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3319654.776119403,
            "unit": "ns",
            "range": "± 156976.7358425523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3606647.282608696,
            "unit": "ns",
            "range": "± 268040.0061634775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4504885.174698795,
            "unit": "ns",
            "range": "± 239785.88612898212"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4464836.546391753,
            "unit": "ns",
            "range": "± 328896.1717982471"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8017957.31884058,
            "unit": "ns",
            "range": "± 383487.9142878405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6761365.197916667,
            "unit": "ns",
            "range": "± 90856.06116479359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2022554.932391827,
            "unit": "ns",
            "range": "± 66897.55702094462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1364627.1436197916,
            "unit": "ns",
            "range": "± 20083.842463656576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2782207.295107887,
            "unit": "ns",
            "range": "± 65496.536295407524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827754.586171875,
            "unit": "ns",
            "range": "± 21658.67854708592"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888389.5715895433,
            "unit": "ns",
            "range": "± 24058.57915362737"
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
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "c8f46e4a8d9a4393a0188d7c337df1344707695b",
          "message": "temp: maj23",
          "timestamp": "2023-06-22T15:18:58+09:00",
          "tree_id": "3ae73c5c3e08acbf1606183d7d6c850ca30eb6ee",
          "url": "https://github.com/limebell/libplanet/commit/c8f46e4a8d9a4393a0188d7c337df1344707695b"
        },
        "date": 1687416211630,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9466176.494505495,
            "unit": "ns",
            "range": "± 1577472.8311022269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22110145.533333335,
            "unit": "ns",
            "range": "± 308888.8953176407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63354326.928571425,
            "unit": "ns",
            "range": "± 778562.5593512023"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110116353.26666667,
            "unit": "ns",
            "range": "± 1385899.3055799268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228942890.7631579,
            "unit": "ns",
            "range": "± 7237481.279268933"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 79198.95698924731,
            "unit": "ns",
            "range": "± 12639.666421122847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 321969.20430107525,
            "unit": "ns",
            "range": "± 21280.135391833483"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313483.8021978022,
            "unit": "ns",
            "range": "± 23529.324249738424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293807.6195652174,
            "unit": "ns",
            "range": "± 22010.352488723453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4177275.7333333334,
            "unit": "ns",
            "range": "± 71884.51648747521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3881331.5862068967,
            "unit": "ns",
            "range": "± 111509.5032876818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17264.913978494624,
            "unit": "ns",
            "range": "± 2063.729194485566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91617.48947368421,
            "unit": "ns",
            "range": "± 9875.739472980538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92712.35789473684,
            "unit": "ns",
            "range": "± 9005.29063398087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110466.76595744681,
            "unit": "ns",
            "range": "± 13590.974924816861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5887.030927835051,
            "unit": "ns",
            "range": "± 918.9686185883455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16367.279569892473,
            "unit": "ns",
            "range": "± 1584.1474004045547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1744250.5632183908,
            "unit": "ns",
            "range": "± 225646.4883459895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3275409.647727273,
            "unit": "ns",
            "range": "± 267904.03498102794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3002357.2528089886,
            "unit": "ns",
            "range": "± 362312.16415055806"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8898461.836956521,
            "unit": "ns",
            "range": "± 3041283.836741631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3543895.776595745,
            "unit": "ns",
            "range": "± 284547.5568878934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3641760.7560975607,
            "unit": "ns",
            "range": "± 128484.9174871861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4600244.86,
            "unit": "ns",
            "range": "± 232365.99626745874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4460833.12962963,
            "unit": "ns",
            "range": "± 221346.1816451463"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8060379.240740741,
            "unit": "ns",
            "range": "± 339438.40877277823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6805815.617431641,
            "unit": "ns",
            "range": "± 210160.10913413813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2066117.9041666666,
            "unit": "ns",
            "range": "± 35411.373792654624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358954.0059621711,
            "unit": "ns",
            "range": "± 28630.80797509359"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2712751.7290104167,
            "unit": "ns",
            "range": "± 135270.27765825688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830657.052780878,
            "unit": "ns",
            "range": "± 19743.989323395675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770228.9953497024,
            "unit": "ns",
            "range": "± 18171.040972069288"
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
          "id": "71901d9103449b1f9027913b27654379be61f0a7",
          "message": "temp: maj23",
          "timestamp": "2023-06-22T15:14:26+09:00",
          "tree_id": "619caa2707c538ad00f5e35c4205b3dda5fe166a",
          "url": "https://github.com/limebell/libplanet/commit/71901d9103449b1f9027913b27654379be61f0a7"
        },
        "date": 1687418579043,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 45791692.92553192,
            "unit": "ns",
            "range": "± 6507111.296894399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 104868319.23913044,
            "unit": "ns",
            "range": "± 12269023.053566186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 112937218.2736842,
            "unit": "ns",
            "range": "± 51708007.53634534"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 557815480.2150538,
            "unit": "ns",
            "range": "± 70208798.27300322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 791116355.1938776,
            "unit": "ns",
            "range": "± 158848705.3530357"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 497494.8144329897,
            "unit": "ns",
            "range": "± 357602.8107352873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 928022.5612244898,
            "unit": "ns",
            "range": "± 648495.7863417553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 1018556.2164948453,
            "unit": "ns",
            "range": "± 748346.4736732388"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 1518037.4081632653,
            "unit": "ns",
            "range": "± 803014.6788789408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 16240879.06185567,
            "unit": "ns",
            "range": "± 4089231.993408977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 14356339.357894737,
            "unit": "ns",
            "range": "± 2694945.3743991116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 257615.1649484536,
            "unit": "ns",
            "range": "± 150511.89209734395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 1263317.2872340425,
            "unit": "ns",
            "range": "± 412012.7002276234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 1487859.0824742268,
            "unit": "ns",
            "range": "± 453629.4063427645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 1654110.706521739,
            "unit": "ns",
            "range": "± 409278.6347937663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 179663.4105263158,
            "unit": "ns",
            "range": "± 66593.90186995988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 261999.0206185567,
            "unit": "ns",
            "range": "± 149272.45362200256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 4620622.231578947,
            "unit": "ns",
            "range": "± 1539877.0693738349"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 9223238.1875,
            "unit": "ns",
            "range": "± 2478485.5893781604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 6397202.215053763,
            "unit": "ns",
            "range": "± 1958051.1776829157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13052759.280898876,
            "unit": "ns",
            "range": "± 1968760.0235527572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 9357049.032967033,
            "unit": "ns",
            "range": "± 2559621.2652555862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6800727.344086021,
            "unit": "ns",
            "range": "± 1587402.0611116008"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 11561010.193877552,
            "unit": "ns",
            "range": "± 4095921.920610834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 11457625.81,
            "unit": "ns",
            "range": "± 5213785.796048852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15677147.01098901,
            "unit": "ns",
            "range": "± 2090285.3208255435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 26187934.6884375,
            "unit": "ns",
            "range": "± 7914417.823292769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 4762379.0315755205,
            "unit": "ns",
            "range": "± 992135.8531822743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 2258491.3303301414,
            "unit": "ns",
            "range": "± 172703.24330464183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3765777.411034059,
            "unit": "ns",
            "range": "± 230759.12450225724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1199752.0657087055,
            "unit": "ns",
            "range": "± 18909.430566954983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1196405.395592731,
            "unit": "ns",
            "range": "± 78467.650914728"
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
          "id": "d044310218d9e7196cc7c2b4af60c5904e1e5a5e",
          "message": "1",
          "timestamp": "2023-06-22T17:08:45+09:00",
          "tree_id": "7937ac48147a5dbb887d19eab1949688dabbb2da",
          "url": "https://github.com/limebell/libplanet/commit/d044310218d9e7196cc7c2b4af60c5904e1e5a5e"
        },
        "date": 1687422235684,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8571377.689655172,
            "unit": "ns",
            "range": "± 244944.08555585315"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20253564.672413792,
            "unit": "ns",
            "range": "± 583785.6186701385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51273360.35294118,
            "unit": "ns",
            "range": "± 1604404.2644737544"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100757308.54545455,
            "unit": "ns",
            "range": "± 2101252.522419709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 207798811.16666666,
            "unit": "ns",
            "range": "± 3262622.379834984"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60420.269230769234,
            "unit": "ns",
            "range": "± 6404.144566133063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335851.8842105263,
            "unit": "ns",
            "range": "± 21008.914240157203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314333.38372093026,
            "unit": "ns",
            "range": "± 17004.06636568656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306221.8645833333,
            "unit": "ns",
            "range": "± 22459.17629066466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4339287.259259259,
            "unit": "ns",
            "range": "± 106888.27654993234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3899910.433333333,
            "unit": "ns",
            "range": "± 106181.84523753166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17956.93181818182,
            "unit": "ns",
            "range": "± 1712.1439325805873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93728.18947368421,
            "unit": "ns",
            "range": "± 9566.851583412223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96160.97872340426,
            "unit": "ns",
            "range": "± 9418.200534675952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119441.55102040817,
            "unit": "ns",
            "range": "± 20510.886103857418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6143.863157894737,
            "unit": "ns",
            "range": "± 1103.4367744087474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17899.935483870966,
            "unit": "ns",
            "range": "± 2292.520896526315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1682372.448979592,
            "unit": "ns",
            "range": "± 205088.09758626675"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3115397.7021276597,
            "unit": "ns",
            "range": "± 196021.01204590726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2619562.9375,
            "unit": "ns",
            "range": "± 219585.17218949643"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7087757.691489362,
            "unit": "ns",
            "range": "± 453598.89651518216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3329373.6363636362,
            "unit": "ns",
            "range": "± 122343.09925418967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3451682.1578947366,
            "unit": "ns",
            "range": "± 117978.81969676574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4473580.774509804,
            "unit": "ns",
            "range": "± 181695.2540473282"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4391827.578947368,
            "unit": "ns",
            "range": "± 252833.39605674482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8008994.2676056335,
            "unit": "ns",
            "range": "± 379086.15111935243"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6763668.2015625,
            "unit": "ns",
            "range": "± 84583.1895281132"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2045559.8461914062,
            "unit": "ns",
            "range": "± 39250.84645768686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1318492.353515625,
            "unit": "ns",
            "range": "± 7747.232331806135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2577575.5970052085,
            "unit": "ns",
            "range": "± 18206.51017836857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 812917.8388671875,
            "unit": "ns",
            "range": "± 6528.7303129310585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 806190.8924278846,
            "unit": "ns",
            "range": "± 7409.3711296247"
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
          "id": "a603f8292ce12f811b6776bdffc93849a807132d",
          "message": "2",
          "timestamp": "2023-06-22T22:24:05+09:00",
          "tree_id": "3cfbe3d5a388b793eb9f93dea953cd8ff984640a",
          "url": "https://github.com/limebell/libplanet/commit/a603f8292ce12f811b6776bdffc93849a807132d"
        },
        "date": 1687441696523,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8461753.051282052,
            "unit": "ns",
            "range": "± 292791.77339212"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20839297.958333332,
            "unit": "ns",
            "range": "± 965572.2197141675"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53927627.277777776,
            "unit": "ns",
            "range": "± 2649946.3741950514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 144440234.36,
            "unit": "ns",
            "range": "± 41576545.365146145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 280155207.1185567,
            "unit": "ns",
            "range": "± 59936346.349450834"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75228.56818181818,
            "unit": "ns",
            "range": "± 11040.351919257144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 361023.606741573,
            "unit": "ns",
            "range": "± 37144.45432871079"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 336210.4186046512,
            "unit": "ns",
            "range": "± 32797.470688423564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 333004.9036144578,
            "unit": "ns",
            "range": "± 22724.824287396277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4491739.961538462,
            "unit": "ns",
            "range": "± 593494.8314944716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4168462.5176470587,
            "unit": "ns",
            "range": "± 434118.1224599286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25568.478723404256,
            "unit": "ns",
            "range": "± 3857.3807112022714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119332.76666666666,
            "unit": "ns",
            "range": "± 17257.80305832698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113364.83333333333,
            "unit": "ns",
            "range": "± 12425.321679113878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121144.31182795699,
            "unit": "ns",
            "range": "± 16968.29530584876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8631.15625,
            "unit": "ns",
            "range": "± 1376.1354341865062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24143.239130434784,
            "unit": "ns",
            "range": "± 3638.4207338753095"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1607599.8020833333,
            "unit": "ns",
            "range": "± 142971.9954100412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2975011.075,
            "unit": "ns",
            "range": "± 103327.24682510307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2703277.4431818184,
            "unit": "ns",
            "range": "± 279883.4772691532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9494584.268817205,
            "unit": "ns",
            "range": "± 2869058.8876947244"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3453632.125,
            "unit": "ns",
            "range": "± 259821.12099002447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4038950.8352941177,
            "unit": "ns",
            "range": "± 729906.7251810794"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4953019.266666667,
            "unit": "ns",
            "range": "± 619432.5535418233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4816986.561797753,
            "unit": "ns",
            "range": "± 641904.7114109085"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9184316.217391305,
            "unit": "ns",
            "range": "± 2002831.0882508282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8262179.901204427,
            "unit": "ns",
            "range": "± 1311314.5782570436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2180185.978589794,
            "unit": "ns",
            "range": "± 113081.00013160428"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1389926.0055930398,
            "unit": "ns",
            "range": "± 51665.242670926455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3186947.9132339014,
            "unit": "ns",
            "range": "± 310963.41060699505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1034739.0086348684,
            "unit": "ns",
            "range": "± 59186.72487050151"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 814465.5548117898,
            "unit": "ns",
            "range": "± 34394.09446750247"
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
          "id": "7f36561e88654ba0e76127cdeea24b2dba2fde5d",
          "message": "123",
          "timestamp": "2023-06-23T14:51:46+09:00",
          "tree_id": "500966fcca58f0c1ec8864ded4d99441451f054f",
          "url": "https://github.com/limebell/libplanet/commit/7f36561e88654ba0e76127cdeea24b2dba2fde5d"
        },
        "date": 1687500550705,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8804877.615384616,
            "unit": "ns",
            "range": "± 101465.52041090811"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22724448.346153848,
            "unit": "ns",
            "range": "± 226678.83380341085"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56002075.23076923,
            "unit": "ns",
            "range": "± 362678.719760836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114650743,
            "unit": "ns",
            "range": "± 2054505.5759686877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226863251.53333333,
            "unit": "ns",
            "range": "± 3179674.0914353128"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 69170.67021276595,
            "unit": "ns",
            "range": "± 7192.8073562597565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373038.2948717949,
            "unit": "ns",
            "range": "± 19187.104229927536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355536.48387096776,
            "unit": "ns",
            "range": "± 12855.254805824987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 326711.17647058825,
            "unit": "ns",
            "range": "± 10562.559247732237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5071156.380952381,
            "unit": "ns",
            "range": "± 115946.96488674302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4464242.4,
            "unit": "ns",
            "range": "± 63176.156786062435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19814.873684210525,
            "unit": "ns",
            "range": "± 2202.6974915302667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103259.07575757576,
            "unit": "ns",
            "range": "± 8205.808126068712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 104304.65979381443,
            "unit": "ns",
            "range": "± 17324.953993978477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120374.58064516129,
            "unit": "ns",
            "range": "± 12320.838298451037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6069.333333333333,
            "unit": "ns",
            "range": "± 782.8809503724946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19953.612903225807,
            "unit": "ns",
            "range": "± 1571.3073415378756"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1976525.81,
            "unit": "ns",
            "range": "± 215735.002697061"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3520188.3181818184,
            "unit": "ns",
            "range": "± 165631.81397860547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3117883.217171717,
            "unit": "ns",
            "range": "± 271731.58387295145"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7794760.736842105,
            "unit": "ns",
            "range": "± 235875.6747875232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3683756.4210526315,
            "unit": "ns",
            "range": "± 126744.08102292173"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4045111.8571428573,
            "unit": "ns",
            "range": "± 62348.89677002761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5139107.890909091,
            "unit": "ns",
            "range": "± 215992.27395859023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5063697.5,
            "unit": "ns",
            "range": "± 215359.7630285845"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9165358.523076924,
            "unit": "ns",
            "range": "± 428305.77299069834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7086877.736778846,
            "unit": "ns",
            "range": "± 72773.22408866335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2256276.69921875,
            "unit": "ns",
            "range": "± 7229.1820330226265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1420378.3154046475,
            "unit": "ns",
            "range": "± 49721.414943153344"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2956283.3225446427,
            "unit": "ns",
            "range": "± 35709.111059692215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 877358.5399693081,
            "unit": "ns",
            "range": "± 7921.295311997312"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 811508.5531005859,
            "unit": "ns",
            "range": "± 15756.31404335476"
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
          "id": "82faef46fc8adb78cc29b0d0e0fc410f64bcd041",
          "message": "411",
          "timestamp": "2023-06-23T20:11:35+09:00",
          "tree_id": "c44313a310207ce52fc8acd9f58b76edea55e0e6",
          "url": "https://github.com/limebell/libplanet/commit/82faef46fc8adb78cc29b0d0e0fc410f64bcd041"
        },
        "date": 1687519997511,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11727879.462365592,
            "unit": "ns",
            "range": "± 2711354.3494107113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24070338.472527474,
            "unit": "ns",
            "range": "± 3498002.4597107647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69879437.74157304,
            "unit": "ns",
            "range": "± 16675618.819093479"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 138338847.92222223,
            "unit": "ns",
            "range": "± 25839282.134825785"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 282074785.0106383,
            "unit": "ns",
            "range": "± 55346693.38240143"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80785.30588235294,
            "unit": "ns",
            "range": "± 7614.826823256014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 370013.2,
            "unit": "ns",
            "range": "± 36053.62133487324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 378710.82258064515,
            "unit": "ns",
            "range": "± 44501.10372279529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 349408.09375,
            "unit": "ns",
            "range": "± 32283.249579172145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4611018.526881721,
            "unit": "ns",
            "range": "± 331918.46723501734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4001907.370786517,
            "unit": "ns",
            "range": "± 255862.1691328157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22423.6,
            "unit": "ns",
            "range": "± 3274.568230105615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113072.13917525773,
            "unit": "ns",
            "range": "± 10783.051923027142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 117232.69318181818,
            "unit": "ns",
            "range": "± 6460.429153493544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129101.60638297872,
            "unit": "ns",
            "range": "± 20171.083071138113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8862.790322580646,
            "unit": "ns",
            "range": "± 983.6535885096636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25608.988764044945,
            "unit": "ns",
            "range": "± 2375.40159520631"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1833030.9787234042,
            "unit": "ns",
            "range": "± 322864.40743218694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4020240.2032967033,
            "unit": "ns",
            "range": "± 930502.7978269178"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3306861.6348314607,
            "unit": "ns",
            "range": "± 823089.7131122517"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8177768.275862069,
            "unit": "ns",
            "range": "± 1188810.7820516569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3738883.736842105,
            "unit": "ns",
            "range": "± 525220.1956396471"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4311711.556179775,
            "unit": "ns",
            "range": "± 951664.6418513355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5033390.355555556,
            "unit": "ns",
            "range": "± 714488.2914197721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5711238.428571428,
            "unit": "ns",
            "range": "± 1789623.5522939337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9216571.413978495,
            "unit": "ns",
            "range": "± 1788077.5895702457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6793275.360276442,
            "unit": "ns",
            "range": "± 100585.43030775082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2041728.5545372595,
            "unit": "ns",
            "range": "± 19109.130138608496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1335561.865513393,
            "unit": "ns",
            "range": "± 13335.958974313737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3172822.5754774306,
            "unit": "ns",
            "range": "± 219885.97212628156"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1014142.2704467773,
            "unit": "ns",
            "range": "± 31062.791956587258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 800132.7553323413,
            "unit": "ns",
            "range": "± 36359.79810314612"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "a051767af9ec7510036527139e896ea7b641aae2",
          "message": "Verify vote before adding round",
          "timestamp": "2023-06-26T12:28:59+09:00",
          "tree_id": "0eb21ff13f03c671508fc33ad6b82c2afc34abee",
          "url": "https://github.com/limebell/libplanet/commit/a051767af9ec7510036527139e896ea7b641aae2"
        },
        "date": 1687751342426,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8180810.177419355,
            "unit": "ns",
            "range": "± 247252.2062537747"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21899794.80487805,
            "unit": "ns",
            "range": "± 2471395.6237661913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52631785.145833336,
            "unit": "ns",
            "range": "± 2034763.1346338359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104348913.1923077,
            "unit": "ns",
            "range": "± 1297177.9826612966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214278428,
            "unit": "ns",
            "range": "± 3323246.139271725"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80586.83333333333,
            "unit": "ns",
            "range": "± 5670.524908822202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 396584.04639175255,
            "unit": "ns",
            "range": "± 62014.72620911984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 346483.93,
            "unit": "ns",
            "range": "± 42082.558878263626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 355039.9081632653,
            "unit": "ns",
            "range": "± 43797.08526804056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4541429.178571428,
            "unit": "ns",
            "range": "± 242859.98288964876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3995183.653846154,
            "unit": "ns",
            "range": "± 206218.77734738743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24039.182795698925,
            "unit": "ns",
            "range": "± 4544.014184823228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118446.93010752689,
            "unit": "ns",
            "range": "± 16106.762422226271"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 114085.90909090909,
            "unit": "ns",
            "range": "± 4868.324288753922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128401.88043478261,
            "unit": "ns",
            "range": "± 19331.008013854345"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8106.958333333333,
            "unit": "ns",
            "range": "± 922.7364328785353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25112.620879120877,
            "unit": "ns",
            "range": "± 4268.171609158409"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1684891.9468085107,
            "unit": "ns",
            "range": "± 187525.7456560638"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3335664.533333333,
            "unit": "ns",
            "range": "± 359568.3715912061"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2858144.2906976743,
            "unit": "ns",
            "range": "± 349339.4121556087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11809278.666666666,
            "unit": "ns",
            "range": "± 3990794.210008075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3391742.7555555557,
            "unit": "ns",
            "range": "± 126609.96685188076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3642231.7976190476,
            "unit": "ns",
            "range": "± 443113.4186237519"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4816969.1022727275,
            "unit": "ns",
            "range": "± 392311.97470448137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4848223.344444444,
            "unit": "ns",
            "range": "± 445174.4076242217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8520935.168421052,
            "unit": "ns",
            "range": "± 652471.406727425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7382083.955528846,
            "unit": "ns",
            "range": "± 82700.32465927419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2219341.958828125,
            "unit": "ns",
            "range": "± 89507.84749399449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1442253.646484375,
            "unit": "ns",
            "range": "± 24783.242885906737"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2897442.5607546545,
            "unit": "ns",
            "range": "± 109095.04329268084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 962536.2340745192,
            "unit": "ns",
            "range": "± 11292.303330330897"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772738.8520507812,
            "unit": "ns",
            "range": "± 13627.379652007907"
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
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "c565a178831a711bdf786b79a9e2e6279fa1a65c",
          "message": "Fix maj23",
          "timestamp": "2023-06-25T19:16:18+09:00",
          "tree_id": "39a2af58c0af5ea78020da440b223735127e7419",
          "url": "https://github.com/limebell/libplanet/commit/c565a178831a711bdf786b79a9e2e6279fa1a65c"
        },
        "date": 1687751632692,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8939712.593023255,
            "unit": "ns",
            "range": "± 1050239.471966618"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 30169578.06521739,
            "unit": "ns",
            "range": "± 7926578.110248983"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57280272.82258064,
            "unit": "ns",
            "range": "± 6945959.299578836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124548744.54494382,
            "unit": "ns",
            "range": "± 23030646.55978005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261329936.79787233,
            "unit": "ns",
            "range": "± 50746768.08188453"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72198.55555555556,
            "unit": "ns",
            "range": "± 10197.961467488713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 371765.54545454547,
            "unit": "ns",
            "range": "± 63972.100883120984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332403.8461538461,
            "unit": "ns",
            "range": "± 47000.549310010574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 322687.9606741573,
            "unit": "ns",
            "range": "± 27187.335873300282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4460980.553571428,
            "unit": "ns",
            "range": "± 191829.961974085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3849771.701754386,
            "unit": "ns",
            "range": "± 165759.85439494828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21060.63157894737,
            "unit": "ns",
            "range": "± 4531.031886730287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105954.90449438202,
            "unit": "ns",
            "range": "± 15367.093501226382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105845.12244897959,
            "unit": "ns",
            "range": "± 13810.885352388183"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108477.40425531915,
            "unit": "ns",
            "range": "± 15486.95774359912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6143.252631578947,
            "unit": "ns",
            "range": "± 862.0125013708312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17382.344444444443,
            "unit": "ns",
            "range": "± 2676.7558394155403"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1785932.597826087,
            "unit": "ns",
            "range": "± 214990.21973012105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3386531.6666666665,
            "unit": "ns",
            "range": "± 394689.75803763414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2712061.2444444443,
            "unit": "ns",
            "range": "± 301103.81101791555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7562360.5121951215,
            "unit": "ns",
            "range": "± 1048899.8060595372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3442906.382022472,
            "unit": "ns",
            "range": "± 340010.84342737263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4126935.2352941176,
            "unit": "ns",
            "range": "± 750701.1809546972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5021296.604651162,
            "unit": "ns",
            "range": "± 558587.0838178397"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4907680.548387097,
            "unit": "ns",
            "range": "± 826837.151604436"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8787024.266666668,
            "unit": "ns",
            "range": "± 1228412.0029133784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7740584.215078125,
            "unit": "ns",
            "range": "± 541084.0505096791"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2177650.7740716315,
            "unit": "ns",
            "range": "± 110897.6632429392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1405401.554239909,
            "unit": "ns",
            "range": "± 55281.43346393941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3018812.112428161,
            "unit": "ns",
            "range": "± 163041.6788328601"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814485.7388020833,
            "unit": "ns",
            "range": "± 13017.924658305563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 827953.34375,
            "unit": "ns",
            "range": "± 11226.838792202636"
          }
        ]
      }
    ]
  }
}