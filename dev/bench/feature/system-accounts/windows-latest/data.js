window.BENCHMARK_DATA = {
  "lastUpdate": 1700128065840,
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
          "id": "a3fd186d8d65fdea7a31b5277958b57334a80f02",
          "message": "temp",
          "timestamp": "2023-11-16T18:06:48+09:00",
          "tree_id": "38efb60a980c476e68844c384378f140a74c39fe",
          "url": "https://github.com/limebell/libplanet/commit/a3fd186d8d65fdea7a31b5277958b57334a80f02"
        },
        "date": 1700128049913,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1040519.191919192,
            "unit": "ns",
            "range": "± 131983.38305795155"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1878851.6129032257,
            "unit": "ns",
            "range": "± 105031.61285278457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1586142.268041237,
            "unit": "ns",
            "range": "± 172153.64917412895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5796825.757575758,
            "unit": "ns",
            "range": "± 181944.51254143222"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40240.625,
            "unit": "ns",
            "range": "± 5754.715743585749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5413600,
            "unit": "ns",
            "range": "± 44440.92386849889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14011700,
            "unit": "ns",
            "range": "± 111079.1352402164"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34882707.14285714,
            "unit": "ns",
            "range": "± 256737.37393652715"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 70126292.85714285,
            "unit": "ns",
            "range": "± 491712.30560513376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 140317853.33333334,
            "unit": "ns",
            "range": "± 1900166.005855679"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3321003.90625,
            "unit": "ns",
            "range": "± 12540.89197615613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1069975.7291666667,
            "unit": "ns",
            "range": "± 2432.7534672350143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 732031.7057291666,
            "unit": "ns",
            "range": "± 1557.7413348571995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1946552.6041666667,
            "unit": "ns",
            "range": "± 8395.002429859782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623159.9083533654,
            "unit": "ns",
            "range": "± 1241.2231672749917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 552111.7885044643,
            "unit": "ns",
            "range": "± 1483.4653841672612"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2410060,
            "unit": "ns",
            "range": "± 83535.1447610909"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2496294.4444444445,
            "unit": "ns",
            "range": "± 103628.67931272996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3044450,
            "unit": "ns",
            "range": "± 81585.03416681272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2952950.704225352,
            "unit": "ns",
            "range": "± 143846.94730684062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6832558.139534884,
            "unit": "ns",
            "range": "± 246538.49620443044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 190591.5254237288,
            "unit": "ns",
            "range": "± 8447.28661057733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192490.9090909091,
            "unit": "ns",
            "range": "± 12803.507389106506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 155837.5,
            "unit": "ns",
            "range": "± 10793.275196791945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2801957.1428571427,
            "unit": "ns",
            "range": "± 36372.5956495507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2627192.8571428573,
            "unit": "ns",
            "range": "± 36570.27932174336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16132.978723404256,
            "unit": "ns",
            "range": "± 3427.823796235312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74766,
            "unit": "ns",
            "range": "± 13396.164233153317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68760.60606060606,
            "unit": "ns",
            "range": "± 8435.999368375284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83148.95833333333,
            "unit": "ns",
            "range": "± 12599.565529615998"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4592,
            "unit": "ns",
            "range": "± 1181.9501091865343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13665.90909090909,
            "unit": "ns",
            "range": "± 2008.0805934527284"
          }
        ]
      }
    ]
  }
}