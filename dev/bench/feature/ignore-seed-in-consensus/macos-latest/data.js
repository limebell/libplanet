window.BENCHMARK_DATA = {
  "lastUpdate": 1682674512297,
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
          "id": "01e6999f7023d54bfe9ee8540addaf0695bdeb2f",
          "message": "test: add regression test\n\n(cherry picked from commit 39e90e6de7b0babecc117fafbdf00cfdcfc8cb2a)",
          "timestamp": "2023-04-28T16:54:03+09:00",
          "tree_id": "50a677c7bc8dc80727c0f79c7c99b926394c55ab",
          "url": "https://github.com/limebell/libplanet/commit/01e6999f7023d54bfe9ee8540addaf0695bdeb2f"
        },
        "date": 1682669897003,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9789982.717391305,
            "unit": "ns",
            "range": "± 1407872.2939376303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26895562.3,
            "unit": "ns",
            "range": "± 4888338.41232503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62151957.51123595,
            "unit": "ns",
            "range": "± 4069708.576025562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120987567.03571428,
            "unit": "ns",
            "range": "± 3032074.163848893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235442309.92857143,
            "unit": "ns",
            "range": "± 1897339.0458543396"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72190.07608695653,
            "unit": "ns",
            "range": "± 10075.925932129096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 389829.64556962025,
            "unit": "ns",
            "range": "± 19191.509223691213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 370892.706185567,
            "unit": "ns",
            "range": "± 23220.39182348591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313881.87012987013,
            "unit": "ns",
            "range": "± 16098.287644596709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5002256.458333333,
            "unit": "ns",
            "range": "± 128865.12187419202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4495706.394736842,
            "unit": "ns",
            "range": "± 99490.9667897849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21630.226315789474,
            "unit": "ns",
            "range": "± 2128.8452140953573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106651.52127659574,
            "unit": "ns",
            "range": "± 10067.418010195839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98333.15957446808,
            "unit": "ns",
            "range": "± 7821.841541689171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116279.89130434782,
            "unit": "ns",
            "range": "± 11274.46838536837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7065.2040816326535,
            "unit": "ns",
            "range": "± 671.7484642025065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21871.378947368423,
            "unit": "ns",
            "range": "± 1728.1312017945577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2032947.9655172413,
            "unit": "ns",
            "range": "± 276832.8032330542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3817289.769230769,
            "unit": "ns",
            "range": "± 317281.1069488197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3320530.593023256,
            "unit": "ns",
            "range": "± 451842.8330251605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9060906.296703296,
            "unit": "ns",
            "range": "± 1100380.070645396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3889027.7375,
            "unit": "ns",
            "range": "± 201764.8361881512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4321159.342105263,
            "unit": "ns",
            "range": "± 148145.29677865768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5373129.137931035,
            "unit": "ns",
            "range": "± 155448.4808924359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5156116.841772152,
            "unit": "ns",
            "range": "± 259900.5269445377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9583901.318181818,
            "unit": "ns",
            "range": "± 344488.73125703615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7417026.020432692,
            "unit": "ns",
            "range": "± 50706.64767804732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2374236.163802083,
            "unit": "ns",
            "range": "± 43591.280514864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1499168.030078125,
            "unit": "ns",
            "range": "± 19460.757738055814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3197058.4893229166,
            "unit": "ns",
            "range": "± 31505.057290246514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 954877.7776925223,
            "unit": "ns",
            "range": "± 4849.470603018454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 900727.7520282452,
            "unit": "ns",
            "range": "± 7569.715812891351"
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
          "id": "efe0d5298de9699d5f33524fc892461584a16824",
          "message": "test: add regression test\n\n(cherry picked from commit 39e90e6de7b0babecc117fafbdf00cfdcfc8cb2a)",
          "timestamp": "2023-04-28T18:09:55+09:00",
          "tree_id": "ec1d8a9df9ea2267b743a28e29178caa9fd5d819",
          "url": "https://github.com/limebell/libplanet/commit/efe0d5298de9699d5f33524fc892461584a16824"
        },
        "date": 1682674365672,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9064908.421348315,
            "unit": "ns",
            "range": "± 802281.1110452812"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21400989.620253164,
            "unit": "ns",
            "range": "± 1176862.7042523967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55228465.95555556,
            "unit": "ns",
            "range": "± 4924487.73394379"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108378685.20689656,
            "unit": "ns",
            "range": "± 3154525.3633168964"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265479054.17021278,
            "unit": "ns",
            "range": "± 62683786.38957667"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77180.89247311828,
            "unit": "ns",
            "range": "± 13165.811903383279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 383438.05319148937,
            "unit": "ns",
            "range": "± 44344.85391283755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 349474.35294117645,
            "unit": "ns",
            "range": "± 39618.80988233994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 348292.532967033,
            "unit": "ns",
            "range": "± 45720.57840026148"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4634140.390804598,
            "unit": "ns",
            "range": "± 399896.63692036417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3951832.5895522386,
            "unit": "ns",
            "range": "± 185688.73453800366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21668.32978723404,
            "unit": "ns",
            "range": "± 3467.632182713018"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114791.52631578948,
            "unit": "ns",
            "range": "± 15157.607621427309"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109131.21875,
            "unit": "ns",
            "range": "± 16968.392712832523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120804.74468085106,
            "unit": "ns",
            "range": "± 25588.370417902515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7867.333333333333,
            "unit": "ns",
            "range": "± 1488.8894318756097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19068.84946236559,
            "unit": "ns",
            "range": "± 3887.9201491012836"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1785321.3977272727,
            "unit": "ns",
            "range": "± 217135.047433727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3496840.5344827585,
            "unit": "ns",
            "range": "± 518690.726142845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2819618.909090909,
            "unit": "ns",
            "range": "± 329939.96060487384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13775751.742424242,
            "unit": "ns",
            "range": "± 5113649.829242777"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3544004.1091954024,
            "unit": "ns",
            "range": "± 519034.35105501575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4214086.404494382,
            "unit": "ns",
            "range": "± 1020339.2851133761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4987602.1477272725,
            "unit": "ns",
            "range": "± 656588.1200055003"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4642716.678571428,
            "unit": "ns",
            "range": "± 448363.801241889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8591590.38095238,
            "unit": "ns",
            "range": "± 748788.2847946786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7411677.857142857,
            "unit": "ns",
            "range": "± 258548.8150277042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2070578.1423339844,
            "unit": "ns",
            "range": "± 38466.720443769045"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1426711.226469494,
            "unit": "ns",
            "range": "± 32689.416171826542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3110368.9040570175,
            "unit": "ns",
            "range": "± 134593.17450640502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 952368.9132570876,
            "unit": "ns",
            "range": "± 57597.60933013597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776993.1324303668,
            "unit": "ns",
            "range": "± 19599.714088809593"
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
          "id": "bb981fcf2313cfb636278c1c77b5554fc7c238bf",
          "message": "test: add regression test",
          "timestamp": "2023-04-28T18:10:15+09:00",
          "tree_id": "ec1d8a9df9ea2267b743a28e29178caa9fd5d819",
          "url": "https://github.com/limebell/libplanet/commit/bb981fcf2313cfb636278c1c77b5554fc7c238bf"
        },
        "date": 1682674497078,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8956803.109756097,
            "unit": "ns",
            "range": "± 728216.0116358902"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25475288.51612903,
            "unit": "ns",
            "range": "± 5676698.687378174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52557818.0862069,
            "unit": "ns",
            "range": "± 2292493.4282252057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114422764.8908046,
            "unit": "ns",
            "range": "± 19336187.75390434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252141101.8764045,
            "unit": "ns",
            "range": "± 45781726.415684365"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74273.39010989011,
            "unit": "ns",
            "range": "± 11611.838399237746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 378156.8588235294,
            "unit": "ns",
            "range": "± 39703.94842910191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 358065.76923076925,
            "unit": "ns",
            "range": "± 39547.27769984144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 349905.875,
            "unit": "ns",
            "range": "± 35029.49188284641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4818325.362637362,
            "unit": "ns",
            "range": "± 783086.6210304156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4121969.224137931,
            "unit": "ns",
            "range": "± 492053.9131665632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23085.005263157895,
            "unit": "ns",
            "range": "± 5427.024061815573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106365.10869565218,
            "unit": "ns",
            "range": "± 18144.76611391601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118712.70652173914,
            "unit": "ns",
            "range": "± 17805.314132373078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127131.48958333333,
            "unit": "ns",
            "range": "± 23623.808354684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10260.194736842106,
            "unit": "ns",
            "range": "± 1525.4484800862786"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22989.076923076922,
            "unit": "ns",
            "range": "± 4156.921086121231"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1866965.6989247312,
            "unit": "ns",
            "range": "± 306533.4249599369"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3456560.114942529,
            "unit": "ns",
            "range": "± 509419.83769679914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2829003.322222222,
            "unit": "ns",
            "range": "± 398674.00195625547"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13607589.051020408,
            "unit": "ns",
            "range": "± 5289120.808204631"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3825891.5057471264,
            "unit": "ns",
            "range": "± 595828.5790211749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3823398,
            "unit": "ns",
            "range": "± 553819.920307746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5579995.949438202,
            "unit": "ns",
            "range": "± 1351967.4002309814"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6373354.351648352,
            "unit": "ns",
            "range": "± 1762843.8155303702"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12619654.28125,
            "unit": "ns",
            "range": "± 3479219.6297027194"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7415866.928635817,
            "unit": "ns",
            "range": "± 303248.7160080392"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2107648.55584287,
            "unit": "ns",
            "range": "± 103099.86876419903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1350813.6724494486,
            "unit": "ns",
            "range": "± 26032.128548468576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3046261.831390881,
            "unit": "ns",
            "range": "± 137213.01300683978"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 853174.9053230932,
            "unit": "ns",
            "range": "± 35362.50998400528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 800717.5886439732,
            "unit": "ns",
            "range": "± 38800.45507216627"
          }
        ]
      }
    ]
  }
}