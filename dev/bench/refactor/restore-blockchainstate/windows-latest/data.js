window.BENCHMARK_DATA = {
  "lastUpdate": 1701159781225,
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
          "id": "7a08e50f1264dc22ac69006080975a245447ab87",
          "message": "refactor: restore BlockChainState",
          "timestamp": "2023-11-27T19:05:57+09:00",
          "tree_id": "1124214eb0cb7943617e7acf9138b6b9d0942e53",
          "url": "https://github.com/limebell/libplanet/commit/7a08e50f1264dc22ac69006080975a245447ab87"
        },
        "date": 1701148847292,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1044366.6666666666,
            "unit": "ns",
            "range": "± 125736.62336861267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1811650,
            "unit": "ns",
            "range": "± 79438.53929563238"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1617479.5918367347,
            "unit": "ns",
            "range": "± 169360.48295709523"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5668285.135135135,
            "unit": "ns",
            "range": "± 190033.46959039758"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34099.27536231884,
            "unit": "ns",
            "range": "± 1646.4420809739117"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5142735.294117647,
            "unit": "ns",
            "range": "± 100187.81700621382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13544863.333333334,
            "unit": "ns",
            "range": "± 135095.27784211445"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33815069.23076923,
            "unit": "ns",
            "range": "± 395319.3295396676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66050500,
            "unit": "ns",
            "range": "± 780580.99881709"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134887433.33333334,
            "unit": "ns",
            "range": "± 1600347.337150223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3406222.5,
            "unit": "ns",
            "range": "± 10108.340971195095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1083673.4825721155,
            "unit": "ns",
            "range": "± 2782.845028079856"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 736533.5411658654,
            "unit": "ns",
            "range": "± 1078.4248654595392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1900661.509486607,
            "unit": "ns",
            "range": "± 3044.1463705511464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 626479.8828125,
            "unit": "ns",
            "range": "± 470.09138652735936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 562341.1263020834,
            "unit": "ns",
            "range": "± 844.2023340337444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2236425,
            "unit": "ns",
            "range": "± 91955.65400736145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2449656.3829787234,
            "unit": "ns",
            "range": "± 290617.56918321253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2899377.0833333335,
            "unit": "ns",
            "range": "± 113769.34530767762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2850815.4929577466,
            "unit": "ns",
            "range": "± 139139.7259159576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6669773.9130434785,
            "unit": "ns",
            "range": "± 253758.52076315263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 181804.34782608695,
            "unit": "ns",
            "range": "± 8631.294545101371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170296.7213114754,
            "unit": "ns",
            "range": "± 6902.052043006601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139684.61538461538,
            "unit": "ns",
            "range": "± 2335.896028595934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2759693.75,
            "unit": "ns",
            "range": "± 50802.801349925576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2545573.3333333335,
            "unit": "ns",
            "range": "± 44028.32637983783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12683.516483516483,
            "unit": "ns",
            "range": "± 1920.7211456038376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60346.46464646464,
            "unit": "ns",
            "range": "± 7359.060958441905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45115.51724137931,
            "unit": "ns",
            "range": "± 1744.1432546324788"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63750,
            "unit": "ns",
            "range": "± 12720.705177237054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2818.3673469387754,
            "unit": "ns",
            "range": "± 475.44812042056225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11880.898876404495,
            "unit": "ns",
            "range": "± 1298.6773345228091"
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
          "id": "48994c132636882a44bd8268918f72a66169d4f5",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-11-28T14:10:07+09:00",
          "tree_id": "05f6667642bdebb00c36ad80c287dde1c16e30ed",
          "url": "https://github.com/limebell/libplanet/commit/48994c132636882a44bd8268918f72a66169d4f5"
        },
        "date": 1701148947308,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1074042,
            "unit": "ns",
            "range": "± 124167.04468520859"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1891143.103448276,
            "unit": "ns",
            "range": "± 73671.25200955782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1718085.8585858585,
            "unit": "ns",
            "range": "± 198241.2759024951"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6157240.217391305,
            "unit": "ns",
            "range": "± 368307.6709121051"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35871.59090909091,
            "unit": "ns",
            "range": "± 2616.743121965392"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5010815.384615385,
            "unit": "ns",
            "range": "± 29279.226030123766"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13513933.333333334,
            "unit": "ns",
            "range": "± 180329.57790297928"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33249550,
            "unit": "ns",
            "range": "± 351003.9310540334"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65898369.23076923,
            "unit": "ns",
            "range": "± 540396.655838122"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131389573.33333333,
            "unit": "ns",
            "range": "± 2001261.3124393995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3352428.5993303573,
            "unit": "ns",
            "range": "± 10441.120911258558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1035714.8177083334,
            "unit": "ns",
            "range": "± 3068.9853722159905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742865.1141826923,
            "unit": "ns",
            "range": "± 2477.582267781695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1983590.0390625,
            "unit": "ns",
            "range": "± 5595.740368235069"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621988.6002604166,
            "unit": "ns",
            "range": "± 1675.1470409615972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557653.0198317308,
            "unit": "ns",
            "range": "± 755.8836282908107"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2145438.095238095,
            "unit": "ns",
            "range": "± 60479.44299968118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2355139.024390244,
            "unit": "ns",
            "range": "± 73285.18226097545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2865694,
            "unit": "ns",
            "range": "± 112085.70956993544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2888500,
            "unit": "ns",
            "range": "± 53749.01992461949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6413664.705882353,
            "unit": "ns",
            "range": "± 184242.90107183348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 174142.85714285713,
            "unit": "ns",
            "range": "± 9725.934892019868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170181.6091954023,
            "unit": "ns",
            "range": "± 10416.540164962958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144930,
            "unit": "ns",
            "range": "± 4700.237791231168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2752977.272727273,
            "unit": "ns",
            "range": "± 65493.74329854273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2555978.5714285714,
            "unit": "ns",
            "range": "± 33844.421846293815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13283.333333333334,
            "unit": "ns",
            "range": "± 1949.4309166719408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59822.47191011236,
            "unit": "ns",
            "range": "± 6059.82959573251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48957.73195876289,
            "unit": "ns",
            "range": "± 4541.104744707558"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62524.742268041235,
            "unit": "ns",
            "range": "± 10473.956102796068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2601.063829787234,
            "unit": "ns",
            "range": "± 429.17642582520733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11886.458333333334,
            "unit": "ns",
            "range": "± 1945.7170125643802"
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
          "id": "f4cefbfc69cf53309357222f6dcc40d88493adb3",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-11-28T17:10:10+09:00",
          "tree_id": "020e37662df65fce31cc665639eff48150fbc5bc",
          "url": "https://github.com/limebell/libplanet/commit/f4cefbfc69cf53309357222f6dcc40d88493adb3"
        },
        "date": 1701159767722,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1127168.686868687,
            "unit": "ns",
            "range": "± 143534.4718934357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1855060.9375,
            "unit": "ns",
            "range": "± 79116.98915978993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1702160.4166666667,
            "unit": "ns",
            "range": "± 143856.02706153755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9051006.122448979,
            "unit": "ns",
            "range": "± 3208514.1149668503"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36725.8064516129,
            "unit": "ns",
            "range": "± 3094.978514563566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5230250,
            "unit": "ns",
            "range": "± 99378.6093684149"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13652783.333333334,
            "unit": "ns",
            "range": "± 85959.87259744918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33051275,
            "unit": "ns",
            "range": "± 535569.6997901704"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66580828.571428575,
            "unit": "ns",
            "range": "± 594628.7871483305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 134835778.57142857,
            "unit": "ns",
            "range": "± 1161795.5097299058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3290386.9977678573,
            "unit": "ns",
            "range": "± 14472.42548900928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1063784.7526041667,
            "unit": "ns",
            "range": "± 2108.4984388848898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742794.23828125,
            "unit": "ns",
            "range": "± 2522.21814404754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921164.076450893,
            "unit": "ns",
            "range": "± 4865.281024967208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636744.5768229166,
            "unit": "ns",
            "range": "± 1707.8270462913072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584086.8684895834,
            "unit": "ns",
            "range": "± 3313.636281749911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2277398.275862069,
            "unit": "ns",
            "range": "± 99416.3149648272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2525909.090909091,
            "unit": "ns",
            "range": "± 41949.32213642584"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2940984.6153846155,
            "unit": "ns",
            "range": "± 47675.287906032376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2964147.6923076925,
            "unit": "ns",
            "range": "± 132739.19577936974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9862979.569892474,
            "unit": "ns",
            "range": "± 2754835.366601437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 178097.5,
            "unit": "ns",
            "range": "± 9300.360344182669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 177408.4745762712,
            "unit": "ns",
            "range": "± 7759.8499837879735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 148470.96774193548,
            "unit": "ns",
            "range": "± 6692.456901317448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2837164.285714286,
            "unit": "ns",
            "range": "± 49084.80271064413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2485413.3333333335,
            "unit": "ns",
            "range": "± 37335.503338294635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13053.191489361701,
            "unit": "ns",
            "range": "± 2533.3348384684086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62265.9793814433,
            "unit": "ns",
            "range": "± 7177.451477223916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50309.278350515466,
            "unit": "ns",
            "range": "± 6023.72189891465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 66551.6129032258,
            "unit": "ns",
            "range": "± 12225.317750856088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2921.4285714285716,
            "unit": "ns",
            "range": "± 505.2813853196212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12111.827956989247,
            "unit": "ns",
            "range": "± 2067.9148005305706"
          }
        ]
      }
    ]
  }
}