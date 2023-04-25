window.BENCHMARK_DATA = {
  "lastUpdate": 1682410468829,
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
          "id": "a9709811647b6144a8f97265bc466fd564ae74b2",
          "message": "docs: update changelog",
          "timestamp": "2023-04-21T18:46:29+09:00",
          "tree_id": "c5cd54d5c9e2fb7e61b2ce1d07353d27ef9db935",
          "url": "https://github.com/limebell/libplanet/commit/a9709811647b6144a8f97265bc466fd564ae74b2"
        },
        "date": 1682071624450,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8148960.961538462,
            "unit": "ns",
            "range": "± 81693.80420980058"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20832592.3125,
            "unit": "ns",
            "range": "± 389576.18636106234"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51513436,
            "unit": "ns",
            "range": "± 715274.2724309702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103458939.23333333,
            "unit": "ns",
            "range": "± 1326818.4194257148"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222048749.77272728,
            "unit": "ns",
            "range": "± 6988584.601358858"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73040.62765957447,
            "unit": "ns",
            "range": "± 5794.2934310619985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 406512.9606741573,
            "unit": "ns",
            "range": "± 27869.869838581213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 361491.8804347826,
            "unit": "ns",
            "range": "± 45906.34348151342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 349529.96153846156,
            "unit": "ns",
            "range": "± 31893.99231144313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5686391.368421053,
            "unit": "ns",
            "range": "± 287927.02677207836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3716647.511627907,
            "unit": "ns",
            "range": "± 133039.12458216623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20362.618556701033,
            "unit": "ns",
            "range": "± 3118.335201017052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104129.35106382979,
            "unit": "ns",
            "range": "± 23318.820064907122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118030.58888888889,
            "unit": "ns",
            "range": "± 9857.948634402943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134310.67021276595,
            "unit": "ns",
            "range": "± 19571.395030188967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7562.381443298969,
            "unit": "ns",
            "range": "± 2425.7226476664764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18397.460674157304,
            "unit": "ns",
            "range": "± 1666.1599430493661"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1525108.83,
            "unit": "ns",
            "range": "± 172390.93728078218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2994592.6,
            "unit": "ns",
            "range": "± 213616.5861671077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2578110.2473118277,
            "unit": "ns",
            "range": "± 234002.14133146283"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6828440.043478261,
            "unit": "ns",
            "range": "± 327017.975655793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3690752.943298969,
            "unit": "ns",
            "range": "± 312958.74191350315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3797365.1428571427,
            "unit": "ns",
            "range": "± 440531.77227784274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4943026.363157894,
            "unit": "ns",
            "range": "± 579698.2238166721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4782122.540816327,
            "unit": "ns",
            "range": "± 458981.6624288344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9027985.005263157,
            "unit": "ns",
            "range": "± 659833.824817632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7019223.349513319,
            "unit": "ns",
            "range": "± 315719.5739337185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2143638.983984375,
            "unit": "ns",
            "range": "± 48947.12909225558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1326091.5623779297,
            "unit": "ns",
            "range": "± 25615.998503847728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2897918.722359035,
            "unit": "ns",
            "range": "± 294895.09475049603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 922756.5354447798,
            "unit": "ns",
            "range": "± 33667.74609455429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 886712.6281113735,
            "unit": "ns",
            "range": "± 32802.12594050798"
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
          "id": "48a655f9f53be31c0bc0ceab7ff03c4c7b8596bd",
          "message": "docs: update changelog",
          "timestamp": "2023-04-24T16:32:53+09:00",
          "tree_id": "897f563660d2483987265d81726f92641fd380c7",
          "url": "https://github.com/limebell/libplanet/commit/48a655f9f53be31c0bc0ceab7ff03c4c7b8596bd"
        },
        "date": 1682322408634,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8356349.071428572,
            "unit": "ns",
            "range": "± 87313.88620503199"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21799208.06521739,
            "unit": "ns",
            "range": "± 530376.8393444271"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52221834.3,
            "unit": "ns",
            "range": "± 487063.5487191438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106080785.76666667,
            "unit": "ns",
            "range": "± 1207610.1286682165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211026733.375,
            "unit": "ns",
            "range": "± 3904725.7274610344"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57054.907216494845,
            "unit": "ns",
            "range": "± 7579.090499089247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 392905.7948717949,
            "unit": "ns",
            "range": "± 20208.999172677304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 299428.91397849465,
            "unit": "ns",
            "range": "± 16855.636134317803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 331786.59375,
            "unit": "ns",
            "range": "± 10255.677663897502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5243215.769230769,
            "unit": "ns",
            "range": "± 130535.58624108836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3547583.3928571427,
            "unit": "ns",
            "range": "± 100108.83242837906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18765.36813186813,
            "unit": "ns",
            "range": "± 2579.823616747605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96224.93,
            "unit": "ns",
            "range": "± 17141.17787535753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 125917.9827586207,
            "unit": "ns",
            "range": "± 5535.730317566086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 138054.4347826087,
            "unit": "ns",
            "range": "± 11419.0417471989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6127.355555555556,
            "unit": "ns",
            "range": "± 1110.328570775853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21660.34375,
            "unit": "ns",
            "range": "± 5070.269713220652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1477159.6326530613,
            "unit": "ns",
            "range": "± 134675.4885252632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2829330.117647059,
            "unit": "ns",
            "range": "± 134492.57668861936"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2472758.947368421,
            "unit": "ns",
            "range": "± 274714.059738848"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6690779.03030303,
            "unit": "ns",
            "range": "± 315386.26860265614"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3336332.82,
            "unit": "ns",
            "range": "± 132706.95872372945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3579564.4777777777,
            "unit": "ns",
            "range": "± 116278.61829019456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4664613.666666667,
            "unit": "ns",
            "range": "± 127702.57094906116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4608482.5,
            "unit": "ns",
            "range": "± 226289.7519052154"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8336962,
            "unit": "ns",
            "range": "± 129078.10699234504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6286493.712053572,
            "unit": "ns",
            "range": "± 67810.15470864091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1948072.9403645834,
            "unit": "ns",
            "range": "± 11851.574698126515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1274205.0384615385,
            "unit": "ns",
            "range": "± 19656.186422673934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2442637.11875,
            "unit": "ns",
            "range": "± 32571.811914463644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 771823.3602213542,
            "unit": "ns",
            "range": "± 7081.182432447477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 716911.4796875,
            "unit": "ns",
            "range": "± 4901.846282762278"
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
          "id": "b42457c8f498fa263170705c21f54da0fe2aa4b8",
          "message": "﻿docs: update changelog",
          "timestamp": "2023-04-25T16:56:33+09:00",
          "tree_id": "8041069af671b366ac6d8a52feddc20afbd0aabe",
          "url": "https://github.com/limebell/libplanet/commit/b42457c8f498fa263170705c21f54da0fe2aa4b8"
        },
        "date": 1682410461871,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7906902.785714285,
            "unit": "ns",
            "range": "± 138613.90707530512"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19458138.272727273,
            "unit": "ns",
            "range": "± 369778.34416479204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49517492.375,
            "unit": "ns",
            "range": "± 1522312.7484206127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104037327.47058824,
            "unit": "ns",
            "range": "± 2103830.974357259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209382960.97826087,
            "unit": "ns",
            "range": "± 5229158.295848221"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57659.79473684211,
            "unit": "ns",
            "range": "± 8267.186272829036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339775.170212766,
            "unit": "ns",
            "range": "± 26912.750198363847"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316846.5617977528,
            "unit": "ns",
            "range": "± 28794.84618498874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297553.83157894737,
            "unit": "ns",
            "range": "± 31217.013731144776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4271636.647058823,
            "unit": "ns",
            "range": "± 132683.09768377646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3721942.2083333335,
            "unit": "ns",
            "range": "± 85496.13608455936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20425.895833333332,
            "unit": "ns",
            "range": "± 4439.130439930698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101878.53125,
            "unit": "ns",
            "range": "± 13165.693604734617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99692.38775510204,
            "unit": "ns",
            "range": "± 17020.5218079863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107494.89361702128,
            "unit": "ns",
            "range": "± 14802.905216321547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6206.776595744681,
            "unit": "ns",
            "range": "± 929.1524424882253"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17366.37634408602,
            "unit": "ns",
            "range": "± 2477.107060551545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1638139.9894736842,
            "unit": "ns",
            "range": "± 155261.3772889086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2915393.4696969697,
            "unit": "ns",
            "range": "± 136236.7513172418"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2474352.5263157897,
            "unit": "ns",
            "range": "± 247064.63377023008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6476840.074468086,
            "unit": "ns",
            "range": "± 235593.5253973734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3977633.7906976743,
            "unit": "ns",
            "range": "± 585821.1979941062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3791188.3205128205,
            "unit": "ns",
            "range": "± 313177.6927815276"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4600286.6823529415,
            "unit": "ns",
            "range": "± 256474.8841515997"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4466065.760416667,
            "unit": "ns",
            "range": "± 272222.04217067646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8508702.476744186,
            "unit": "ns",
            "range": "± 804556.4152401141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6734085.516084559,
            "unit": "ns",
            "range": "± 109772.51120972473"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2035362.8979048296,
            "unit": "ns",
            "range": "± 47492.993149022775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1296852.2514272837,
            "unit": "ns",
            "range": "± 19004.926612926552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2598700.812897246,
            "unit": "ns",
            "range": "± 114817.00370408918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 875014.6385742187,
            "unit": "ns",
            "range": "± 20089.266496838707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 797498.0375279018,
            "unit": "ns",
            "range": "± 11175.35337783036"
          }
        ]
      }
    ]
  }
}