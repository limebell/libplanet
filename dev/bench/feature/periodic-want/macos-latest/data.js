window.BENCHMARK_DATA = {
  "lastUpdate": 1683802129530,
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
          "id": "6555351be63be4f12921346a3ea8a5489de2f1b7",
          "message": "feat: optimize message request",
          "timestamp": "2023-05-11T17:48:50+09:00",
          "tree_id": "f8d431c128bcc9d62f63ca253d6198e560e5f01f",
          "url": "https://github.com/limebell/libplanet/commit/6555351be63be4f12921346a3ea8a5489de2f1b7"
        },
        "date": 1683795847333,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8324093.842105263,
            "unit": "ns",
            "range": "± 176312.6359791553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21123151.4,
            "unit": "ns",
            "range": "± 343143.95638561295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54079990,
            "unit": "ns",
            "range": "± 841373.665652028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105344012.06666666,
            "unit": "ns",
            "range": "± 1081094.3487903136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219875121.7142857,
            "unit": "ns",
            "range": "± 2031211.2554575817"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76300.86666666667,
            "unit": "ns",
            "range": "± 5161.724183237635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325259.4210526316,
            "unit": "ns",
            "range": "± 22895.838253987204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320106.7582417582,
            "unit": "ns",
            "range": "± 17761.00501056593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317227.6111111111,
            "unit": "ns",
            "range": "± 10406.539726201781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4509882.357142857,
            "unit": "ns",
            "range": "± 125524.38151188716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3863541.772727273,
            "unit": "ns",
            "range": "± 94271.54244088712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23828.44680851064,
            "unit": "ns",
            "range": "± 3967.7023750434187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113558.05434782608,
            "unit": "ns",
            "range": "± 11900.169626978433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118029.68817204301,
            "unit": "ns",
            "range": "± 9492.371947789694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123326.17741935483,
            "unit": "ns",
            "range": "± 10849.484395844818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8361.020833333334,
            "unit": "ns",
            "range": "± 892.2118462051329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23611.875,
            "unit": "ns",
            "range": "± 2993.3895037319535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1653468.7857142857,
            "unit": "ns",
            "range": "± 217249.89561213728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3132748.9565217393,
            "unit": "ns",
            "range": "± 184804.30831459386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2668446.3571428573,
            "unit": "ns",
            "range": "± 339725.1983260746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6872566.587912088,
            "unit": "ns",
            "range": "± 378914.9439968655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3461620.59375,
            "unit": "ns",
            "range": "± 256507.90305282903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3528739.1136363638,
            "unit": "ns",
            "range": "± 131244.27979937472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4609725.897058823,
            "unit": "ns",
            "range": "± 220739.57667399186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4466772.540816327,
            "unit": "ns",
            "range": "± 314564.108186943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7638304.0625,
            "unit": "ns",
            "range": "± 284805.0347121325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6358381.751674107,
            "unit": "ns",
            "range": "± 75856.88144918138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1905502.574594351,
            "unit": "ns",
            "range": "± 6082.944890539095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1290977.2078536183,
            "unit": "ns",
            "range": "± 28509.15709534924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2517194.52734375,
            "unit": "ns",
            "range": "± 44352.39436557061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798280.4291616586,
            "unit": "ns",
            "range": "± 5187.313738395594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732601.4224330357,
            "unit": "ns",
            "range": "± 4804.242738373037"
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
          "id": "3324b76ba67e2a284a6e6b0e719ee90117265897",
          "message": "test: add regression test",
          "timestamp": "2023-05-11T19:26:41+09:00",
          "tree_id": "1f4ef5c278f6eaaef435b2c28cb2cd49f9a7a38f",
          "url": "https://github.com/limebell/libplanet/commit/3324b76ba67e2a284a6e6b0e719ee90117265897"
        },
        "date": 1683801932566,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8822182.13,
            "unit": "ns",
            "range": "± 524275.2168923381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21275658.046875,
            "unit": "ns",
            "range": "± 985723.9486108909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52274513.33783784,
            "unit": "ns",
            "range": "± 1755089.0311910503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98871581.92857143,
            "unit": "ns",
            "range": "± 1334281.717700084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206998053.42424244,
            "unit": "ns",
            "range": "± 6411582.042790179"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74288.19892473119,
            "unit": "ns",
            "range": "± 8655.9906734471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335566.19587628864,
            "unit": "ns",
            "range": "± 24912.46112667948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314591.4680851064,
            "unit": "ns",
            "range": "± 20035.023805075405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317239.5698924731,
            "unit": "ns",
            "range": "± 27824.44396702055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4223936,
            "unit": "ns",
            "range": "± 93421.99931136849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3736710.78125,
            "unit": "ns",
            "range": "± 116288.60621031496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19308.43820224719,
            "unit": "ns",
            "range": "± 2939.0356525840866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85475.09090909091,
            "unit": "ns",
            "range": "± 6224.931265163364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99363.97,
            "unit": "ns",
            "range": "± 21637.582969843672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114645.89690721649,
            "unit": "ns",
            "range": "± 19551.674905599804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7434.043010752688,
            "unit": "ns",
            "range": "± 1440.1900909706212"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18735.166666666668,
            "unit": "ns",
            "range": "± 219.99001354744732"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1700457.6855670102,
            "unit": "ns",
            "range": "± 239176.95376520438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3051269.436170213,
            "unit": "ns",
            "range": "± 214444.3636522325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2533600.9789473685,
            "unit": "ns",
            "range": "± 219081.93403260718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6506885.827586207,
            "unit": "ns",
            "range": "± 282580.77965532284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3322046.1153846155,
            "unit": "ns",
            "range": "± 108045.88491460356"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3326567.9607843137,
            "unit": "ns",
            "range": "± 134706.71570207045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4505516.630136986,
            "unit": "ns",
            "range": "± 224115.62913436416"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4368964,
            "unit": "ns",
            "range": "± 273930.4463501089"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8060566.722222222,
            "unit": "ns",
            "range": "± 423304.98574615206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6251288.373197115,
            "unit": "ns",
            "range": "± 53748.196065131815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2003872.6190257352,
            "unit": "ns",
            "range": "± 63228.75178790198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365411.7296195652,
            "unit": "ns",
            "range": "± 34411.07600834234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2929440.5887276786,
            "unit": "ns",
            "range": "± 134450.33478570913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 900943.9370117188,
            "unit": "ns",
            "range": "± 25592.711873582117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 879856.5104025136,
            "unit": "ns",
            "range": "± 22040.463011497366"
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
          "id": "a6487ebedb6173c9b0a3cb95e89395c6cc988f19",
          "message": "test: add regression test",
          "timestamp": "2023-05-11T19:31:26+09:00",
          "tree_id": "4fb131000ceaa2618fe8957830110f52347ccd28",
          "url": "https://github.com/limebell/libplanet/commit/a6487ebedb6173c9b0a3cb95e89395c6cc988f19"
        },
        "date": 1683802117261,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8587264.44736842,
            "unit": "ns",
            "range": "± 180146.1320004382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21545251,
            "unit": "ns",
            "range": "± 439334.8931720204"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51195786.7,
            "unit": "ns",
            "range": "± 1655882.8037339514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103670334.63333334,
            "unit": "ns",
            "range": "± 1572322.9295239698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214387737.9,
            "unit": "ns",
            "range": "± 2564802.43099271"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71617.03260869565,
            "unit": "ns",
            "range": "± 8104.799339871675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 320230.93406593404,
            "unit": "ns",
            "range": "± 21271.680707667125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323238.152173913,
            "unit": "ns",
            "range": "± 18660.33564674323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305915.27835051547,
            "unit": "ns",
            "range": "± 22116.71225272035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4129559.1904761903,
            "unit": "ns",
            "range": "± 94884.64478808943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3745231.8125,
            "unit": "ns",
            "range": "± 69983.3105978073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22413.145833333332,
            "unit": "ns",
            "range": "± 5097.490771740784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114200.26530612246,
            "unit": "ns",
            "range": "± 13099.489857503047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113705.10204081633,
            "unit": "ns",
            "range": "± 11885.177086007972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 121361.54444444444,
            "unit": "ns",
            "range": "± 11886.576474043457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6798.071428571428,
            "unit": "ns",
            "range": "± 1499.4418411700888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16871.58695652174,
            "unit": "ns",
            "range": "± 2125.558792216451"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1706652.1875,
            "unit": "ns",
            "range": "± 244216.7063350569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2935558.972972973,
            "unit": "ns",
            "range": "± 96936.48965817386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2582691.9479166665,
            "unit": "ns",
            "range": "± 252995.19777792622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6549063.206521739,
            "unit": "ns",
            "range": "± 405857.07306465076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3373165.411764706,
            "unit": "ns",
            "range": "± 67477.63680940785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3571762.236842105,
            "unit": "ns",
            "range": "± 122864.74752332101"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4557961.5,
            "unit": "ns",
            "range": "± 129797.54240996501"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4468496.653846154,
            "unit": "ns",
            "range": "± 119905.60183675901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7628814.818181818,
            "unit": "ns",
            "range": "± 260551.55545534313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6893317.0046875,
            "unit": "ns",
            "range": "± 101675.94602752176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2069337.375,
            "unit": "ns",
            "range": "± 11580.955148431232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1308535.6809430805,
            "unit": "ns",
            "range": "± 6546.351371361403"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2815329.2223772323,
            "unit": "ns",
            "range": "± 28465.105506143955"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 794096.166015625,
            "unit": "ns",
            "range": "± 4808.330085141569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 790908.5886418269,
            "unit": "ns",
            "range": "± 2333.925842242971"
          }
        ]
      }
    ]
  }
}