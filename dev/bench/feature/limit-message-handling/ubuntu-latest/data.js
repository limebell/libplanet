window.BENCHMARK_DATA = {
  "lastUpdate": 1683773424202,
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
        "date": 1682669371091,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 354389.4032258064,
            "unit": "ns",
            "range": "± 15988.212477065492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 339139.7419354839,
            "unit": "ns",
            "range": "± 20250.336781366517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 282202.47222222225,
            "unit": "ns",
            "range": "± 9263.464691189827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5349425.416666667,
            "unit": "ns",
            "range": "± 209667.745993191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4781418.0869565215,
            "unit": "ns",
            "range": "± 106881.63286505865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25195.275510204083,
            "unit": "ns",
            "range": "± 5873.4750840100505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107624.35164835164,
            "unit": "ns",
            "range": "± 9875.911996563073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101184.35416666667,
            "unit": "ns",
            "range": "± 12589.05119369431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120140.52083333333,
            "unit": "ns",
            "range": "± 15796.948428817488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11588.505050505051,
            "unit": "ns",
            "range": "± 5469.377628238917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25127.9793814433,
            "unit": "ns",
            "range": "± 6628.858956266188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4058677.7,
            "unit": "ns",
            "range": "± 90539.02122818588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4409812.010526316,
            "unit": "ns",
            "range": "± 289071.520323387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5411339.073529412,
            "unit": "ns",
            "range": "± 258393.23150025387"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5198616.2,
            "unit": "ns",
            "range": "± 271817.26357463025"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9286082.327586208,
            "unit": "ns",
            "range": "± 404889.2200116752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7272080.794642857,
            "unit": "ns",
            "range": "± 113150.48128971664"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2305492.74921875,
            "unit": "ns",
            "range": "± 24616.98069100877"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1648365.713736979,
            "unit": "ns",
            "range": "± 19166.878210647017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3160973.7528645834,
            "unit": "ns",
            "range": "± 29266.2850367873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1015776.8020833334,
            "unit": "ns",
            "range": "± 9968.354036447992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 953093.0362630208,
            "unit": "ns",
            "range": "± 10446.59256717428"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68285.32258064517,
            "unit": "ns",
            "range": "± 10520.501605210917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9500672.935064934,
            "unit": "ns",
            "range": "± 477747.152871583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26215695.833333332,
            "unit": "ns",
            "range": "± 1102364.054708972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65948514.14285714,
            "unit": "ns",
            "range": "± 1564592.160043386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 133799077.0625,
            "unit": "ns",
            "range": "± 2588260.0139196073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 275366929.4285714,
            "unit": "ns",
            "range": "± 3229501.8342435444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1777781.2783505155,
            "unit": "ns",
            "range": "± 165913.65382686898"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3472800.9693877553,
            "unit": "ns",
            "range": "± 297242.8222344938"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2890525.425531915,
            "unit": "ns",
            "range": "± 283886.93333027227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7420063.40625,
            "unit": "ns",
            "range": "± 481677.70856906835"
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
        "date": 1682675922494,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 289491.5,
            "unit": "ns",
            "range": "± 3203.3558237157067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270071.4222222222,
            "unit": "ns",
            "range": "± 9165.058171934836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236123.45833333334,
            "unit": "ns",
            "range": "± 6011.177472582561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4301533.071428572,
            "unit": "ns",
            "range": "± 19677.092364411525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3763943.9285714286,
            "unit": "ns",
            "range": "± 22537.46449278925"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18318.16129032258,
            "unit": "ns",
            "range": "± 1338.16363698721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87592.89130434782,
            "unit": "ns",
            "range": "± 5038.389988911448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73518.21875,
            "unit": "ns",
            "range": "± 2015.1234290920759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89586.0612244898,
            "unit": "ns",
            "range": "± 10905.972177217101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5409.322916666667,
            "unit": "ns",
            "range": "± 473.48496324241034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18888.242105263158,
            "unit": "ns",
            "range": "± 1687.8044514378414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3259138,
            "unit": "ns",
            "range": "± 96688.66125807508"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3458808.1333333333,
            "unit": "ns",
            "range": "± 48399.477519120075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4241205.318181818,
            "unit": "ns",
            "range": "± 102706.26516679977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4257998.392156863,
            "unit": "ns",
            "range": "± 160056.53457526545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6939101.761904762,
            "unit": "ns",
            "range": "± 158584.18467360002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5961907.216666667,
            "unit": "ns",
            "range": "± 18606.007706472177"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1980869.5622395833,
            "unit": "ns",
            "range": "± 4060.4465268544154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1374627.0708705357,
            "unit": "ns",
            "range": "± 557.6175495168128"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2576762.19453125,
            "unit": "ns",
            "range": "± 1702.577579214328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 801418.8252650669,
            "unit": "ns",
            "range": "± 401.6714878631276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 731687.5783854167,
            "unit": "ns",
            "range": "± 537.4740701459133"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45831.41176470588,
            "unit": "ns",
            "range": "± 2471.801349575792"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7553064.8,
            "unit": "ns",
            "range": "± 50841.603692532866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19456444.4,
            "unit": "ns",
            "range": "± 111650.75958912492"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49517824.666666664,
            "unit": "ns",
            "range": "± 198101.32381639836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99633027.57142857,
            "unit": "ns",
            "range": "± 424638.47714419453"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199312752.6,
            "unit": "ns",
            "range": "± 590086.5815128682"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1409300.606060606,
            "unit": "ns",
            "range": "± 101873.82466900007"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2599480.6285714284,
            "unit": "ns",
            "range": "± 67426.75569006264"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2280566.612244898,
            "unit": "ns",
            "range": "± 162722.89185116146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5456687.4,
            "unit": "ns",
            "range": "± 140641.9238210404"
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
        "date": 1683692534269,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285024.5625,
            "unit": "ns",
            "range": "± 11249.034717748764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274921.1219512195,
            "unit": "ns",
            "range": "± 9835.736604838303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238521.21212121213,
            "unit": "ns",
            "range": "± 7561.483943138972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4372594.8,
            "unit": "ns",
            "range": "± 73273.38923335577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3999697.785714286,
            "unit": "ns",
            "range": "± 65476.15266548293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19805.288659793816,
            "unit": "ns",
            "range": "± 1355.0926318180466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87695.58333333333,
            "unit": "ns",
            "range": "± 5709.32405745045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73488,
            "unit": "ns",
            "range": "± 3310.660693805422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87762.29761904762,
            "unit": "ns",
            "range": "± 6499.52716311661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5536.1752577319585,
            "unit": "ns",
            "range": "± 672.1085448408687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17733.244680851065,
            "unit": "ns",
            "range": "± 1516.4472322849663"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3398143.4444444445,
            "unit": "ns",
            "range": "± 91946.28990563055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3625995.8,
            "unit": "ns",
            "range": "± 106134.11467228134"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4282554.888888889,
            "unit": "ns",
            "range": "± 89023.49359770076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4415794.326530612,
            "unit": "ns",
            "range": "± 169420.68984931018"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6871298.807692308,
            "unit": "ns",
            "range": "± 170711.42921480548"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5876751.070833334,
            "unit": "ns",
            "range": "± 20543.697682841273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1863370.206280048,
            "unit": "ns",
            "range": "± 1482.654345867754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370046.5958333334,
            "unit": "ns",
            "range": "± 3770.0307640049505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625673.687239583,
            "unit": "ns",
            "range": "± 5360.661009039117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 833583.1818359375,
            "unit": "ns",
            "range": "± 1987.6382460452023"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 757910.9128255208,
            "unit": "ns",
            "range": "± 1318.2480525480912"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48254.8275862069,
            "unit": "ns",
            "range": "± 2645.1160444359484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7696087.266666667,
            "unit": "ns",
            "range": "± 122338.31253271553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21181124.57142857,
            "unit": "ns",
            "range": "± 199410.57798487958"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53550598.733333334,
            "unit": "ns",
            "range": "± 749662.9493303228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108821905.64285715,
            "unit": "ns",
            "range": "± 1003751.7447744665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 212911412.06666666,
            "unit": "ns",
            "range": "± 2515846.603847428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1384236.855670103,
            "unit": "ns",
            "range": "± 94985.14311130338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2648406.3829787234,
            "unit": "ns",
            "range": "± 92214.77893095512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2265598.244680851,
            "unit": "ns",
            "range": "± 128065.72852214298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5579212,
            "unit": "ns",
            "range": "± 221223.9708853714"
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
          "id": "f907d77acbcd54af95b5a48f08d97b01a9202a16",
          "message": "﻿chore: apply suggestions from the review",
          "timestamp": "2023-05-11T11:38:11+09:00",
          "tree_id": "169eb27b177cdc00ec69921a1cf7024a24c3bb95",
          "url": "https://github.com/limebell/libplanet/commit/f907d77acbcd54af95b5a48f08d97b01a9202a16"
        },
        "date": 1683773421119,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 273785.2727272727,
            "unit": "ns",
            "range": "± 8532.775183347178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 259940.27272727274,
            "unit": "ns",
            "range": "± 8473.670595777872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229183.93333333332,
            "unit": "ns",
            "range": "± 3344.7062964517245"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4254453.266666667,
            "unit": "ns",
            "range": "± 34571.62308985024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3912416.9285714286,
            "unit": "ns",
            "range": "± 17091.260701865176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18480.537634408603,
            "unit": "ns",
            "range": "± 1497.438345679626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87471.10256410256,
            "unit": "ns",
            "range": "± 4400.549734222983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69168.84615384616,
            "unit": "ns",
            "range": "± 838.0526878975496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82161.60204081633,
            "unit": "ns",
            "range": "± 10809.460333229681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4085.3958333333335,
            "unit": "ns",
            "range": "± 528.5444457567886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15465.886597938144,
            "unit": "ns",
            "range": "± 1442.165356014818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3130494.375,
            "unit": "ns",
            "range": "± 58785.143761413055"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3354415.076923077,
            "unit": "ns",
            "range": "± 135346.76746175694"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4241815.368421053,
            "unit": "ns",
            "range": "± 89861.01073460956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4149823.9545454546,
            "unit": "ns",
            "range": "± 193752.0039701372"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6612620.7,
            "unit": "ns",
            "range": "± 135777.23857503937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5888511.612723215,
            "unit": "ns",
            "range": "± 16151.799900892998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1982754.4861979166,
            "unit": "ns",
            "range": "± 1804.2260258216936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1360526.81640625,
            "unit": "ns",
            "range": "± 2005.1070938067055"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2540088.2981770835,
            "unit": "ns",
            "range": "± 2426.952936163629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803071.6247209822,
            "unit": "ns",
            "range": "± 348.3178655032511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722793.5552133414,
            "unit": "ns",
            "range": "± 726.9030293036652"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44942.0625,
            "unit": "ns",
            "range": "± 2262.3962167608756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7453472,
            "unit": "ns",
            "range": "± 13318.451630957476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19231960.53846154,
            "unit": "ns",
            "range": "± 92630.30388918394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49745241.666666664,
            "unit": "ns",
            "range": "± 288109.9474297137"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98306875.06666666,
            "unit": "ns",
            "range": "± 637049.4360214202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196262244.93333334,
            "unit": "ns",
            "range": "± 1474894.9576308557"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1338616.94,
            "unit": "ns",
            "range": "± 104623.62314745845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2521990.8421052634,
            "unit": "ns",
            "range": "± 54749.94786427062"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2082065.1282051282,
            "unit": "ns",
            "range": "± 105713.08613649888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5192145.181818182,
            "unit": "ns",
            "range": "± 194321.62202740466"
          }
        ]
      }
    ]
  }
}