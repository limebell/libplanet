window.BENCHMARK_DATA = {
  "lastUpdate": 1700128671914,
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
          "id": "0b03699216f356b995f836c05c9801db5db58ef1",
          "message": "chore: fix test and exception message",
          "timestamp": "2023-11-16T18:36:18+09:00",
          "tree_id": "a9a3f87316e119adae7f7a425e240470a3e6b197",
          "url": "https://github.com/limebell/libplanet/commit/0b03699216f356b995f836c05c9801db5db58ef1"
        },
        "date": 1700128403816,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 993664.2857142857,
            "unit": "ns",
            "range": "± 121054.41649348162"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1720231.884057971,
            "unit": "ns",
            "range": "± 82434.8111303957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1484002.0408163266,
            "unit": "ns",
            "range": "± 131908.4413637301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5393613.333333333,
            "unit": "ns",
            "range": "± 205159.7654600832"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33435.9375,
            "unit": "ns",
            "range": "± 1544.4593431678325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5087357.142857143,
            "unit": "ns",
            "range": "± 29845.13139746361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12813978.57142857,
            "unit": "ns",
            "range": "± 142224.78513077286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32462971.42857143,
            "unit": "ns",
            "range": "± 116158.13775639211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 62813915.384615384,
            "unit": "ns",
            "range": "± 272487.42431579554"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 127295953.33333333,
            "unit": "ns",
            "range": "± 730681.1976961407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3293047.823660714,
            "unit": "ns",
            "range": "± 5042.689517929381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1080729.0104166667,
            "unit": "ns",
            "range": "± 9120.880417402172"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742660.3352864584,
            "unit": "ns",
            "range": "± 1894.6233943653317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1889737.4720982143,
            "unit": "ns",
            "range": "± 4824.6375976650215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618493.2421875,
            "unit": "ns",
            "range": "± 1674.4354249023406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565522.4934895834,
            "unit": "ns",
            "range": "± 1833.6143577167309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2329620,
            "unit": "ns",
            "range": "± 58548.135467038286"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2200970.3703703703,
            "unit": "ns",
            "range": "± 89423.05774499108"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2775143.3333333335,
            "unit": "ns",
            "range": "± 81138.79098371413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2607500,
            "unit": "ns",
            "range": "± 113020.30077422717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6396010.810810811,
            "unit": "ns",
            "range": "± 188177.14730744742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 165250.94339622642,
            "unit": "ns",
            "range": "± 6543.923271646447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 158609.52380952382,
            "unit": "ns",
            "range": "± 6494.50671810575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144326.66666666666,
            "unit": "ns",
            "range": "± 3446.9310021138126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2665625,
            "unit": "ns",
            "range": "± 49798.29314344017"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2466437.5,
            "unit": "ns",
            "range": "± 46198.09339500206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9658.241758241758,
            "unit": "ns",
            "range": "± 1171.3302915978277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 49279.06976744186,
            "unit": "ns",
            "range": "± 2854.268888733661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43967.64705882353,
            "unit": "ns",
            "range": "± 1418.0055537428732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 44320.93023255814,
            "unit": "ns",
            "range": "± 3714.712126573274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2031.868131868132,
            "unit": "ns",
            "range": "± 287.4713979508303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 8881.111111111111,
            "unit": "ns",
            "range": "± 995.5964216019546"
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
          "id": "8e0dc6b2769817601965b04a9d0abb88068279b3",
          "message": "chore: fix test and exception message",
          "timestamp": "2023-11-16T18:45:02+09:00",
          "tree_id": "c01522acba9e2d795921d0a1040cfefde3f38682",
          "url": "https://github.com/limebell/libplanet/commit/8e0dc6b2769817601965b04a9d0abb88068279b3"
        },
        "date": 1700128650074,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1008168.75,
            "unit": "ns",
            "range": "± 130947.65391479709"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1742973.076923077,
            "unit": "ns",
            "range": "± 66560.4240164444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1544632.6530612244,
            "unit": "ns",
            "range": "± 162198.9646359408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5805661.111111111,
            "unit": "ns",
            "range": "± 335570.03746415646"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34215.942028985504,
            "unit": "ns",
            "range": "± 1635.8684677102751"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5081471.428571428,
            "unit": "ns",
            "range": "± 54029.940824458674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12931892.857142856,
            "unit": "ns",
            "range": "± 89456.64583202572"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31853292.307692308,
            "unit": "ns",
            "range": "± 301468.0509925235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63791163.333333336,
            "unit": "ns",
            "range": "± 339759.82665630704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130418369.23076923,
            "unit": "ns",
            "range": "± 332090.13431249704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3302486.484375,
            "unit": "ns",
            "range": "± 6208.874899329215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1046973.8802083334,
            "unit": "ns",
            "range": "± 4575.775870713261"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736474.2838541666,
            "unit": "ns",
            "range": "± 1777.2308310545423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1919760.0911458333,
            "unit": "ns",
            "range": "± 2143.846137247499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615681.9791666666,
            "unit": "ns",
            "range": "± 2282.2453474362283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568625.5231584822,
            "unit": "ns",
            "range": "± 1898.4483671276253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2145016.9014084507,
            "unit": "ns",
            "range": "± 105074.78151422238"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2224361.5384615385,
            "unit": "ns",
            "range": "± 25934.871584462573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2851768.9655172415,
            "unit": "ns",
            "range": "± 81076.56920400386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2624885.507246377,
            "unit": "ns",
            "range": "± 102450.32982371954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6374781.081081081,
            "unit": "ns",
            "range": "± 180993.36979544282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 169693.47826086957,
            "unit": "ns",
            "range": "± 10162.945021253274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 165039.1891891892,
            "unit": "ns",
            "range": "± 8231.01081639476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148275.67567567568,
            "unit": "ns",
            "range": "± 4950.892478769493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2614805.882352941,
            "unit": "ns",
            "range": "± 48347.92485965963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2389281.25,
            "unit": "ns",
            "range": "± 45577.60003554378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10436.363636363636,
            "unit": "ns",
            "range": "± 1318.7578462527879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52566.27906976744,
            "unit": "ns",
            "range": "± 4383.353818444778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44607.93650793651,
            "unit": "ns",
            "range": "± 1916.5073733311779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 51926.88172043011,
            "unit": "ns",
            "range": "± 7510.878194831615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2414.8936170212764,
            "unit": "ns",
            "range": "± 435.50920556385773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9967.41573033708,
            "unit": "ns",
            "range": "± 1086.4637467175621"
          }
        ]
      }
    ]
  }
}