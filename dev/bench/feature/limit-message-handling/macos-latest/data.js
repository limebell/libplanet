window.BENCHMARK_DATA = {
  "lastUpdate": 1683692954320,
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
          "id": "097c5a4c58380bc7df37e86885ba762104aa8d0e",
          "message": "﻿docs: update changelog",
          "timestamp": "2023-04-25T18:16:34+09:00",
          "tree_id": "c705feab8f6ccfa5cb811351d56c9721f7bc2b17",
          "url": "https://github.com/limebell/libplanet/commit/097c5a4c58380bc7df37e86885ba762104aa8d0e"
        },
        "date": 1682415576252,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8836628.185185185,
            "unit": "ns",
            "range": "± 368493.25232739816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20980278.48888889,
            "unit": "ns",
            "range": "± 780892.9860352076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53231580.057971016,
            "unit": "ns",
            "range": "± 2562390.895069519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106949756.42857143,
            "unit": "ns",
            "range": "± 1628255.2888315627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223718883.5,
            "unit": "ns",
            "range": "± 10315610.938767793"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72683.5,
            "unit": "ns",
            "range": "± 10136.505428238239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 460089.94444444444,
            "unit": "ns",
            "range": "± 98127.23712464332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 404805.4247311828,
            "unit": "ns",
            "range": "± 68119.81670783833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 387347.48387096776,
            "unit": "ns",
            "range": "± 37364.742806442344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5205203,
            "unit": "ns",
            "range": "± 594483.5269829408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4211753.425531914,
            "unit": "ns",
            "range": "± 351830.0242241935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28047.88172043011,
            "unit": "ns",
            "range": "± 4240.488427695928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 149510.5760869565,
            "unit": "ns",
            "range": "± 28028.025353455196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 138688.72289156626,
            "unit": "ns",
            "range": "± 11799.0567557205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 147391.09550561797,
            "unit": "ns",
            "range": "± 22710.49704167611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11151.930107526881,
            "unit": "ns",
            "range": "± 1331.5349788695937"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 34045.01136363636,
            "unit": "ns",
            "range": "± 3165.9842380011437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1859159.0333333334,
            "unit": "ns",
            "range": "± 351376.22824798466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3916112.1483516484,
            "unit": "ns",
            "range": "± 1122736.917035691"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3018101.8988764044,
            "unit": "ns",
            "range": "± 417245.46784700337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7768316.425531914,
            "unit": "ns",
            "range": "± 772351.8817710623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4262695.443298969,
            "unit": "ns",
            "range": "± 325294.0227437828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3780927.0459770113,
            "unit": "ns",
            "range": "± 354769.5018427673"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4723827.24590164,
            "unit": "ns",
            "range": "± 208197.2619998204"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4659578.279569892,
            "unit": "ns",
            "range": "± 362920.58613991353"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8946703.79213483,
            "unit": "ns",
            "range": "± 909369.694544526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7864754.111037234,
            "unit": "ns",
            "range": "± 303424.21000418084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2319026.640972222,
            "unit": "ns",
            "range": "± 87679.67576302215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1568054.8196797976,
            "unit": "ns",
            "range": "± 76875.25903177321"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3787958.4545344715,
            "unit": "ns",
            "range": "± 316826.1781000659"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 961398.5906871449,
            "unit": "ns",
            "range": "± 58126.00283907313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 792179.2577008929,
            "unit": "ns",
            "range": "± 25924.07070745458"
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
          "id": "1304efb203f0fea02b8377e284869c86722bcbf8",
          "message": "chore: apply suggestions from the review",
          "timestamp": "2023-04-28T16:51:34+09:00",
          "tree_id": "3c337d09646ecc55f4ada547751691ef0e23c2ee",
          "url": "https://github.com/limebell/libplanet/commit/1304efb203f0fea02b8377e284869c86722bcbf8"
        },
        "date": 1682669259565,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7980046.78125,
            "unit": "ns",
            "range": "± 242523.87148095728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21130828.266666666,
            "unit": "ns",
            "range": "± 341656.1382953975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49368959.9054054,
            "unit": "ns",
            "range": "± 1668925.622278321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97924762.5,
            "unit": "ns",
            "range": "± 1727552.6122584627"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197020714.9090909,
            "unit": "ns",
            "range": "± 4152041.867886667"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70314.33333333333,
            "unit": "ns",
            "range": "± 12435.672848422097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 337127.93956043955,
            "unit": "ns",
            "range": "± 18762.241149126432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323906.2755102041,
            "unit": "ns",
            "range": "± 20469.85461739609"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320475.05,
            "unit": "ns",
            "range": "± 31772.053845845938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4126234.106060606,
            "unit": "ns",
            "range": "± 129546.31770527564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3624893.9285714286,
            "unit": "ns",
            "range": "± 62373.574474494206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20222.27659574468,
            "unit": "ns",
            "range": "± 2839.9490763049766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92499.21649484536,
            "unit": "ns",
            "range": "± 10213.585968603702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106560.66326530612,
            "unit": "ns",
            "range": "± 15830.21797490052"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 122273.59677419355,
            "unit": "ns",
            "range": "± 13364.056170470456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9473.877551020409,
            "unit": "ns",
            "range": "± 1514.4294391251071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23535.459595959597,
            "unit": "ns",
            "range": "± 5587.9867389131505"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1645251.58,
            "unit": "ns",
            "range": "± 191294.70840860953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3104523.5625,
            "unit": "ns",
            "range": "± 142673.39115403706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2658530.102040816,
            "unit": "ns",
            "range": "± 190503.62864978955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6913197.395833333,
            "unit": "ns",
            "range": "± 267661.2521713315"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3307355.7375,
            "unit": "ns",
            "range": "± 167506.20590409753"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3369885.845238095,
            "unit": "ns",
            "range": "± 170189.92350882478"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4471174.230769231,
            "unit": "ns",
            "range": "± 184212.4189011063"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4372175.962962963,
            "unit": "ns",
            "range": "± 229752.78777364403"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8014962.69047619,
            "unit": "ns",
            "range": "± 274272.60074466665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6330409.234375,
            "unit": "ns",
            "range": "± 82002.2711192759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1901898.6946614583,
            "unit": "ns",
            "range": "± 25304.95987085033"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1295182.197265625,
            "unit": "ns",
            "range": "± 26114.61815675092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2550561.874674479,
            "unit": "ns",
            "range": "± 26247.710704196757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 861286.956891741,
            "unit": "ns",
            "range": "± 19761.950009576605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 706997.5362723215,
            "unit": "ns",
            "range": "± 4290.872404181818"
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
          "id": "cf8de3ee9b706382cbf37b7e87f39189b2bb3421",
          "message": "chore: apply suggestions from the review",
          "timestamp": "2023-04-28T18:45:53+09:00",
          "tree_id": "7205b66cfdbf11ecbf9dd53eff86f8b803596c37",
          "url": "https://github.com/limebell/libplanet/commit/cf8de3ee9b706382cbf37b7e87f39189b2bb3421"
        },
        "date": 1682676459548,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 11450303.043010753,
            "unit": "ns",
            "range": "± 2942109.768637181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25689171.556818184,
            "unit": "ns",
            "range": "± 4659880.40281506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64695088.34736842,
            "unit": "ns",
            "range": "± 18554564.108898185"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114701123.06818181,
            "unit": "ns",
            "range": "± 10487934.00025518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 261231684.17391303,
            "unit": "ns",
            "range": "± 38142333.65782914"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74855.71348314607,
            "unit": "ns",
            "range": "± 10639.96234343976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 357211.7126436782,
            "unit": "ns",
            "range": "± 26334.033798316676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329494.2105263158,
            "unit": "ns",
            "range": "± 26737.81938939464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 299404.1182795699,
            "unit": "ns",
            "range": "± 29944.3547263084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4230436.982142857,
            "unit": "ns",
            "range": "± 171933.4968452513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3742606.172413793,
            "unit": "ns",
            "range": "± 109534.14305270591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21734.19587628866,
            "unit": "ns",
            "range": "± 4883.878122283167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111473.60309278351,
            "unit": "ns",
            "range": "± 21297.506761592882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109184.62886597938,
            "unit": "ns",
            "range": "± 16899.815267925016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123035.11458333333,
            "unit": "ns",
            "range": "± 19736.258392463882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9014.604166666666,
            "unit": "ns",
            "range": "± 1427.1414231486192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20314,
            "unit": "ns",
            "range": "± 3753.2779007155864"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1790366.0777777778,
            "unit": "ns",
            "range": "± 231572.61762877603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3392237.5,
            "unit": "ns",
            "range": "± 367257.88518765086"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2770007.7333333334,
            "unit": "ns",
            "range": "± 419183.36253318156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12464740.570707072,
            "unit": "ns",
            "range": "± 5649918.856435141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3823569.977272727,
            "unit": "ns",
            "range": "± 703597.8616089188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3629123.0172413792,
            "unit": "ns",
            "range": "± 244075.78864746194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4661255.067567567,
            "unit": "ns",
            "range": "± 218186.93156187376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4635399.953488372,
            "unit": "ns",
            "range": "± 350479.488980887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8504887.080246914,
            "unit": "ns",
            "range": "± 693623.8202649701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7039157.371157787,
            "unit": "ns",
            "range": "± 293098.38091076375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2076516.8536931819,
            "unit": "ns",
            "range": "± 50385.21058228989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1359406.2528645834,
            "unit": "ns",
            "range": "± 22574.963410403918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2760378.063125,
            "unit": "ns",
            "range": "± 111520.4695424694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 924589.61953125,
            "unit": "ns",
            "range": "± 22651.891155603756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760871.465625,
            "unit": "ns",
            "range": "± 14227.315547811391"
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
          "id": "2af8b35832cb621cbb8cd4fe0c1a33167865b22a",
          "message": "﻿chore: apply suggestions from the review",
          "timestamp": "2023-05-10T13:08:57+09:00",
          "tree_id": "a9e4a2a3ba0969cf65123087969225bda0306e85",
          "url": "https://github.com/limebell/libplanet/commit/2af8b35832cb621cbb8cd4fe0c1a33167865b22a"
        },
        "date": 1683692944109,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10434695.722222222,
            "unit": "ns",
            "range": "± 1291538.8191724147"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21836077.383838385,
            "unit": "ns",
            "range": "± 1484978.2102885928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65387937.355421685,
            "unit": "ns",
            "range": "± 10547459.59243326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112888404.5,
            "unit": "ns",
            "range": "± 7591949.886844993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239956059.1190476,
            "unit": "ns",
            "range": "± 5429402.670433079"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 78230.16091954023,
            "unit": "ns",
            "range": "± 9974.621825172075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 384796.5879120879,
            "unit": "ns",
            "range": "± 52006.79331280745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 372604.44943820225,
            "unit": "ns",
            "range": "± 53426.61423136906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 355381.32954545453,
            "unit": "ns",
            "range": "± 26975.59857131916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4791758.910526316,
            "unit": "ns",
            "range": "± 403580.2675745464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4409175.35,
            "unit": "ns",
            "range": "± 363295.07322965015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28585.352631578946,
            "unit": "ns",
            "range": "± 6555.072416251925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118636.82989690722,
            "unit": "ns",
            "range": "± 22622.244166289092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 120484.77173913043,
            "unit": "ns",
            "range": "± 19667.41585683757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127972.85393258427,
            "unit": "ns",
            "range": "± 13787.691249436419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7073.011235955056,
            "unit": "ns",
            "range": "± 1739.4741596658016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19724.645833333332,
            "unit": "ns",
            "range": "± 3032.496793001008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1609742.2758620689,
            "unit": "ns",
            "range": "± 149955.1741969401"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3031533.925373134,
            "unit": "ns",
            "range": "± 142058.60529760385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2678655.52020202,
            "unit": "ns",
            "range": "± 212568.31653765487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6668825.217647059,
            "unit": "ns",
            "range": "± 338928.69765119976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3536796.4139784947,
            "unit": "ns",
            "range": "± 316003.3732300233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4007235.8279569894,
            "unit": "ns",
            "range": "± 368437.22307590354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5145726.242268041,
            "unit": "ns",
            "range": "± 455589.4274069416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5136308.621212121,
            "unit": "ns",
            "range": "± 574135.9403716992"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8797801.054347826,
            "unit": "ns",
            "range": "± 941742.8983739725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7222501.378720238,
            "unit": "ns",
            "range": "± 369853.2258730716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2185358.520268278,
            "unit": "ns",
            "range": "± 91216.45400599569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1414927.8413085938,
            "unit": "ns",
            "range": "± 21982.958982964476"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3221467.8238839284,
            "unit": "ns",
            "range": "± 100004.07680659003"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 913067.2342900815,
            "unit": "ns",
            "range": "± 22490.989024980256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 970767.6732271635,
            "unit": "ns",
            "range": "± 13493.59665082662"
          }
        ]
      }
    ]
  }
}