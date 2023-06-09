window.BENCHMARK_DATA = {
  "lastUpdate": 1686290667463,
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
      }
    ]
  }
}