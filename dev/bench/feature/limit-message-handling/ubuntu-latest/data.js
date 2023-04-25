window.BENCHMARK_DATA = {
  "lastUpdate": 1682415051764,
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
        "date": 1682071187540,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7584031.933333334,
            "unit": "ns",
            "range": "± 46134.20478880326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19484137.933333334,
            "unit": "ns",
            "range": "± 108487.96527230018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49835842.266666666,
            "unit": "ns",
            "range": "± 127356.26493618301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99165974.53846154,
            "unit": "ns",
            "range": "± 284410.86154001905"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199063670.8,
            "unit": "ns",
            "range": "± 1727853.5263161962"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46230.31578947369,
            "unit": "ns",
            "range": "± 2660.53488168506"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1384375.2842105264,
            "unit": "ns",
            "range": "± 79221.6122264549"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2580939.7804878047,
            "unit": "ns",
            "range": "± 91163.57795839087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2199370.4657534244,
            "unit": "ns",
            "range": "± 105902.34668369437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5384915.4,
            "unit": "ns",
            "range": "± 138418.87190246134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6120298.622916667,
            "unit": "ns",
            "range": "± 19717.721434803945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1832135.362890625,
            "unit": "ns",
            "range": "± 3014.2088939986506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1363376.4248046875,
            "unit": "ns",
            "range": "± 815.9676678506174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2562420.5876116073,
            "unit": "ns",
            "range": "± 1042.3481125740404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808058.4976981027,
            "unit": "ns",
            "range": "± 469.3033341029163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740979.65703125,
            "unit": "ns",
            "range": "± 517.8993538544142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 324462.18604651163,
            "unit": "ns",
            "range": "± 11316.120587685462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266419.0256410256,
            "unit": "ns",
            "range": "± 9308.022760492777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234920.26666666666,
            "unit": "ns",
            "range": "± 4091.403993508248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5588226.533333333,
            "unit": "ns",
            "range": "± 32138.41019684938"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3822364.8571428573,
            "unit": "ns",
            "range": "± 28583.908347872242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18132.854166666668,
            "unit": "ns",
            "range": "± 1920.3476219255429"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84615.7042253521,
            "unit": "ns",
            "range": "± 4151.008488115926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74640.11764705883,
            "unit": "ns",
            "range": "± 1439.5498377250153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89704.44594594595,
            "unit": "ns",
            "range": "± 3489.3035146839948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4876.979166666667,
            "unit": "ns",
            "range": "± 336.3477830168513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16166.79381443299,
            "unit": "ns",
            "range": "± 1398.1642125937879"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3197790.5789473685,
            "unit": "ns",
            "range": "± 60860.308359312825"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3350772.1764705884,
            "unit": "ns",
            "range": "± 64475.16120688968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4103450.4285714286,
            "unit": "ns",
            "range": "± 53717.27706844746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4178775.8846153845,
            "unit": "ns",
            "range": "± 111021.9085951334"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7118719.321428572,
            "unit": "ns",
            "range": "± 193365.17691913125"
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
        "date": 1682322714506,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10647351.423076924,
            "unit": "ns",
            "range": "± 288913.62689664506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27385655.611111112,
            "unit": "ns",
            "range": "± 563111.9853749851"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69802672.4,
            "unit": "ns",
            "range": "± 1118626.1045247042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 158191936.8,
            "unit": "ns",
            "range": "± 2414537.862405682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275519394,
            "unit": "ns",
            "range": "± 4517084.6233985415"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72704.8947368421,
            "unit": "ns",
            "range": "± 20713.27461319354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1751725.5656565656,
            "unit": "ns",
            "range": "± 251529.73425881364"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3487659.11,
            "unit": "ns",
            "range": "± 327558.9621163575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2882923.969072165,
            "unit": "ns",
            "range": "± 247328.90229512085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7732669.531914894,
            "unit": "ns",
            "range": "± 549456.3893430753"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7438578.1019736845,
            "unit": "ns",
            "range": "± 164439.26381475758"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2357304.8559895833,
            "unit": "ns",
            "range": "± 37015.912762441905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1659440.650390625,
            "unit": "ns",
            "range": "± 43099.40710571988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3190639.9138849434,
            "unit": "ns",
            "range": "± 72559.52180743757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1035306.6744791666,
            "unit": "ns",
            "range": "± 15839.211725628013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 942467.0047029194,
            "unit": "ns",
            "range": "± 20361.380363051627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 460244.1978021978,
            "unit": "ns",
            "range": "± 31488.17350979034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 387896.77894736844,
            "unit": "ns",
            "range": "± 32371.644096232878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 357282.90721649484,
            "unit": "ns",
            "range": "± 44074.38450862608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 7121310.306122449,
            "unit": "ns",
            "range": "± 485272.71346450585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5065906.670103093,
            "unit": "ns",
            "range": "± 354346.14205738506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31800.731958762888,
            "unit": "ns",
            "range": "± 6414.648128689952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 142481.7789473684,
            "unit": "ns",
            "range": "± 23495.850316815322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109762.31958762887,
            "unit": "ns",
            "range": "± 25138.206719116817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 150934.49484536084,
            "unit": "ns",
            "range": "± 34080.46188437852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7902.404494382023,
            "unit": "ns",
            "range": "± 2485.012574136384"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31789.453608247422,
            "unit": "ns",
            "range": "± 8706.852839885923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4311325.368421053,
            "unit": "ns",
            "range": "± 287615.9277393797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4717725.851851852,
            "unit": "ns",
            "range": "± 196329.73970256202"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5507016.101010101,
            "unit": "ns",
            "range": "± 508104.77934375824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5476417.070707071,
            "unit": "ns",
            "range": "± 591850.6921849817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9959082.368421054,
            "unit": "ns",
            "range": "± 571353.2041164641"
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
        "date": 1682410155263,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7494920.133333334,
            "unit": "ns",
            "range": "± 17015.960691852422"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18978222.533333335,
            "unit": "ns",
            "range": "± 155344.9696108938"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48730101,
            "unit": "ns",
            "range": "± 178539.057541022"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96753550.21428572,
            "unit": "ns",
            "range": "± 546795.6038476393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 193630860.8,
            "unit": "ns",
            "range": "± 1246051.750537169"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44448.575,
            "unit": "ns",
            "range": "± 2125.6196462160738"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1345798.07,
            "unit": "ns",
            "range": "± 89372.93552699396"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2563605.1666666665,
            "unit": "ns",
            "range": "± 65343.39144900555"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2153533.0215053763,
            "unit": "ns",
            "range": "± 122294.04923575715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5237642.615384615,
            "unit": "ns",
            "range": "± 83965.04173517537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5993990.16015625,
            "unit": "ns",
            "range": "± 18439.222919157342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1843296.7816685268,
            "unit": "ns",
            "range": "± 4204.960448338899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350127.69921875,
            "unit": "ns",
            "range": "± 684.2074266524874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2508806.8777901786,
            "unit": "ns",
            "range": "± 3644.5429005513674"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 808992.9271484375,
            "unit": "ns",
            "range": "± 859.5299757564152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 733615.0590122768,
            "unit": "ns",
            "range": "± 498.71511508981325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 278660.9285714286,
            "unit": "ns",
            "range": "± 9912.223944774396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264622.8043478261,
            "unit": "ns",
            "range": "± 10104.083816005763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225445.23076923078,
            "unit": "ns",
            "range": "± 3370.3142324775927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4283489.5,
            "unit": "ns",
            "range": "± 18797.10210378185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3846798.5,
            "unit": "ns",
            "range": "± 29699.059761729313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16206.454545454546,
            "unit": "ns",
            "range": "± 840.8234927337687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85231.94444444444,
            "unit": "ns",
            "range": "± 4599.214618740732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69045.88461538461,
            "unit": "ns",
            "range": "± 1857.2179910160914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83589.57142857143,
            "unit": "ns",
            "range": "± 11020.676614025466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4794.857142857143,
            "unit": "ns",
            "range": "± 612.1401699193298"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17198.907216494845,
            "unit": "ns",
            "range": "± 1312.088388493021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3264785.8,
            "unit": "ns",
            "range": "± 74521.75634396625"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3415291.4444444445,
            "unit": "ns",
            "range": "± 68613.94476277032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4202802.866666666,
            "unit": "ns",
            "range": "± 54214.17229294867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4273320.523809524,
            "unit": "ns",
            "range": "± 100672.0804506488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6760766.333333333,
            "unit": "ns",
            "range": "± 157588.89132077218"
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
        "date": 1682415048812,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8045729.05882353,
            "unit": "ns",
            "range": "± 164014.56354523468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21859818.285714287,
            "unit": "ns",
            "range": "± 247840.3188067264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55155434.53333333,
            "unit": "ns",
            "range": "± 275146.68302999676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109779964.42857143,
            "unit": "ns",
            "range": "± 766656.6611026301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218735913.46666667,
            "unit": "ns",
            "range": "± 1493655.1561838337"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51044.55294117647,
            "unit": "ns",
            "range": "± 2697.9753674697236"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1512491.45,
            "unit": "ns",
            "range": "± 133157.85433279042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2774231.9534883723,
            "unit": "ns",
            "range": "± 101516.02461257356"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2359610.5735294116,
            "unit": "ns",
            "range": "± 111975.7016926515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6109857.38,
            "unit": "ns",
            "range": "± 401128.3103494109"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5875264.78125,
            "unit": "ns",
            "range": "± 19189.590799396763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1851909.11328125,
            "unit": "ns",
            "range": "± 4875.399847332562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366631.4268229166,
            "unit": "ns",
            "range": "± 3603.1352745295044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2630971.146354167,
            "unit": "ns",
            "range": "± 2562.1610048080065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 850215.2615094866,
            "unit": "ns",
            "range": "± 917.9523779203575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761957.446875,
            "unit": "ns",
            "range": "± 767.2855665168312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303925.21428571426,
            "unit": "ns",
            "range": "± 11019.537752103526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294720.51612903224,
            "unit": "ns",
            "range": "± 13391.854600124774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241632.72222222222,
            "unit": "ns",
            "range": "± 4902.274187804911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4420467.071428572,
            "unit": "ns",
            "range": "± 60866.52174347037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3982406.785714286,
            "unit": "ns",
            "range": "± 28985.126995591196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20945.1875,
            "unit": "ns",
            "range": "± 1895.3350339160288"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94073.33766233767,
            "unit": "ns",
            "range": "± 4788.960371219991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82825.21176470588,
            "unit": "ns",
            "range": "± 4477.903461107977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101405.72164948453,
            "unit": "ns",
            "range": "± 11578.978738197535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6794.885416666667,
            "unit": "ns",
            "range": "± 1222.1426298861716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20326.744444444445,
            "unit": "ns",
            "range": "± 1793.6437354413194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3562725,
            "unit": "ns",
            "range": "± 101921.21465713203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3824600.466666667,
            "unit": "ns",
            "range": "± 63227.55420007806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4259659.142857143,
            "unit": "ns",
            "range": "± 104693.86300656832"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4717780.310344827,
            "unit": "ns",
            "range": "± 134088.36536886077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7212343.814814814,
            "unit": "ns",
            "range": "± 185827.75303180362"
          }
        ]
      }
    ]
  }
}