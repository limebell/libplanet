window.BENCHMARK_DATA = {
  "lastUpdate": 1680510213877,
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
          "id": "0802d4ac5631d749d2848fc5e3e67a15377edf77",
          "message": "﻿chore: adjust log level  [skip changelog]",
          "timestamp": "2023-04-03T16:50:50+09:00",
          "tree_id": "b9cca4217c1a6989a26950c12c53c6532cb53661",
          "url": "https://github.com/limebell/libplanet/commit/0802d4ac5631d749d2848fc5e3e67a15377edf77"
        },
        "date": 1680509168484,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1310382.2916666667,
            "unit": "ns",
            "range": "± 87943.59914446564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2431071.4285714286,
            "unit": "ns",
            "range": "± 78935.11323131384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2123531.3131313133,
            "unit": "ns",
            "range": "± 124929.73588158171"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5175108,
            "unit": "ns",
            "range": "± 195562.30891812398"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42756.45161290323,
            "unit": "ns",
            "range": "± 1734.4977038052123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6844742.857142857,
            "unit": "ns",
            "range": "± 26900.37787225915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17992021.42857143,
            "unit": "ns",
            "range": "± 117978.058120153"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45356935.71428572,
            "unit": "ns",
            "range": "± 386466.8930136247"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90705278.57142857,
            "unit": "ns",
            "range": "± 464792.90868841036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179565113.33333334,
            "unit": "ns",
            "range": "± 896058.9233388829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4851203.064903846,
            "unit": "ns",
            "range": "± 5658.7827984617215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1519201.6043526786,
            "unit": "ns",
            "range": "± 1617.9826153989309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1133609.4140625,
            "unit": "ns",
            "range": "± 1467.894951337092"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2565360.1004464286,
            "unit": "ns",
            "range": "± 8565.796028426275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846719.8763020834,
            "unit": "ns",
            "range": "± 1386.614508776692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735649.7628348215,
            "unit": "ns",
            "range": "± 618.6423903503246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2883912.8205128205,
            "unit": "ns",
            "range": "± 89774.06195405273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3154484,
            "unit": "ns",
            "range": "± 127198.627190641"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3893306.6666666665,
            "unit": "ns",
            "range": "± 63644.55387615847"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4083977.272727273,
            "unit": "ns",
            "range": "± 152340.87216477358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7057130.555555556,
            "unit": "ns",
            "range": "± 222326.66676304993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292051.4285714286,
            "unit": "ns",
            "range": "± 7378.08246364434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238916.66666666666,
            "unit": "ns",
            "range": "± 8130.728124676065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214538.88888888888,
            "unit": "ns",
            "range": "± 7019.005944180732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5198592.857142857,
            "unit": "ns",
            "range": "± 36247.13175465833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3678392.8571428573,
            "unit": "ns",
            "range": "± 29355.001258748038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16965.625,
            "unit": "ns",
            "range": "± 1551.8293534101176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81458.82352941176,
            "unit": "ns",
            "range": "± 4383.526904588279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70187.5,
            "unit": "ns",
            "range": "± 4247.3335288464405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 156380.61224489796,
            "unit": "ns",
            "range": "± 14879.201966761642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5689.7959183673465,
            "unit": "ns",
            "range": "± 819.1949525555239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16865.625,
            "unit": "ns",
            "range": "± 1370.0424983804046"
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
          "id": "501e7c236aff0d40223e8ce8f89326310aa4c92f",
          "message": "﻿chore: adjust log level  [skip changelog]",
          "timestamp": "2023-04-03T16:57:44+09:00",
          "tree_id": "30b2f298db0b833dac6fab1d7b0beb020b9267ac",
          "url": "https://github.com/limebell/libplanet/commit/501e7c236aff0d40223e8ce8f89326310aa4c92f"
        },
        "date": 1680509772187,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1552653.5353535353,
            "unit": "ns",
            "range": "± 148112.95903914998"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2886976,
            "unit": "ns",
            "range": "± 114512.63331071861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2628549.494949495,
            "unit": "ns",
            "range": "± 202957.9092654824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6465452.525252526,
            "unit": "ns",
            "range": "± 398626.0795464572"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55480.85106382979,
            "unit": "ns",
            "range": "± 3993.2275084909384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8229996.153846154,
            "unit": "ns",
            "range": "± 225045.784640849"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23053485.714285713,
            "unit": "ns",
            "range": "± 353805.48514498945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56601721.428571425,
            "unit": "ns",
            "range": "± 782687.5643266912"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117211973.33333333,
            "unit": "ns",
            "range": "± 1319091.912462437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234145307.14285713,
            "unit": "ns",
            "range": "± 3221890.748628653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5662697.265625,
            "unit": "ns",
            "range": "± 47716.995473668154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1728994.78515625,
            "unit": "ns",
            "range": "± 22771.133461356356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1352066.0766601562,
            "unit": "ns",
            "range": "± 25639.002788135604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3009095.342548077,
            "unit": "ns",
            "range": "± 33792.536029710966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 965075.751953125,
            "unit": "ns",
            "range": "± 10321.963508331748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 882798.9145132211,
            "unit": "ns",
            "range": "± 5074.123168004121"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3692966.6666666665,
            "unit": "ns",
            "range": "± 139561.52764999386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3899115.789473684,
            "unit": "ns",
            "range": "± 133320.62861472243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4525091.891891892,
            "unit": "ns",
            "range": "± 145420.14490277314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4877005.797101449,
            "unit": "ns",
            "range": "± 224947.3434358374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8504991.463414634,
            "unit": "ns",
            "range": "± 447619.31279323314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 355194.7368421053,
            "unit": "ns",
            "range": "± 20130.041952906013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 292678.75,
            "unit": "ns",
            "range": "± 15272.426496007416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 248241.42857142858,
            "unit": "ns",
            "range": "± 12013.729981755629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5973811.111111111,
            "unit": "ns",
            "range": "± 292193.6665091216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4255569.76744186,
            "unit": "ns",
            "range": "± 154809.38745819882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24747.95918367347,
            "unit": "ns",
            "range": "± 2805.1583409683813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106208.51063829787,
            "unit": "ns",
            "range": "± 9266.005154401275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102671.71717171717,
            "unit": "ns",
            "range": "± 12013.564106102604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 205243.8775510204,
            "unit": "ns",
            "range": "± 21772.36528180237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9061.458333333334,
            "unit": "ns",
            "range": "± 1319.9178436687214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24482.474226804123,
            "unit": "ns",
            "range": "± 3434.2942721564095"
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
          "id": "760e5fc97537ac9b54140f5fec59df5d28c6fa25",
          "message": "﻿chore: adjust log level  [skip changelog]",
          "timestamp": "2023-04-03T17:04:43+09:00",
          "tree_id": "c241f8fef321a695129e2e1e3863334646461156",
          "url": "https://github.com/limebell/libplanet/commit/760e5fc97537ac9b54140f5fec59df5d28c6fa25"
        },
        "date": 1680510192496,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1321796.907216495,
            "unit": "ns",
            "range": "± 106976.3549162542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2627529.292929293,
            "unit": "ns",
            "range": "± 211766.5923685143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2090256.5656565656,
            "unit": "ns",
            "range": "± 151815.28327893908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5818222,
            "unit": "ns",
            "range": "± 645085.055010562"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49951.063829787236,
            "unit": "ns",
            "range": "± 3753.500006255124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6734713.333333333,
            "unit": "ns",
            "range": "± 52320.11176629972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19121790.90909091,
            "unit": "ns",
            "range": "± 717584.4109874305"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47413807.692307696,
            "unit": "ns",
            "range": "± 1650995.2292615916"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91487936.84210527,
            "unit": "ns",
            "range": "± 2003983.2953424775"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185169273.68421054,
            "unit": "ns",
            "range": "± 4114205.3008573037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4771977.674278846,
            "unit": "ns",
            "range": "± 72575.10439706713"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1574168.0193865742,
            "unit": "ns",
            "range": "± 43474.17839802369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1157784.0690104167,
            "unit": "ns",
            "range": "± 11104.341708345899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2678318.875,
            "unit": "ns",
            "range": "± 69414.77090947017"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830692.9752604166,
            "unit": "ns",
            "range": "± 4384.851445837689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 772372.2028459822,
            "unit": "ns",
            "range": "± 5991.228043648284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2997050,
            "unit": "ns",
            "range": "± 119896.77405406465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3096014.285714286,
            "unit": "ns",
            "range": "± 127590.80392705914"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3819558.8235294116,
            "unit": "ns",
            "range": "± 78180.38483871393"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4317508.080808081,
            "unit": "ns",
            "range": "± 420534.1733491374"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7459460.377358491,
            "unit": "ns",
            "range": "± 308473.7729405249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299932.2580645161,
            "unit": "ns",
            "range": "± 18815.252608330495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 257932.63157894736,
            "unit": "ns",
            "range": "± 20079.853575085264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 211381.25,
            "unit": "ns",
            "range": "± 8142.367689790524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5466973.333333333,
            "unit": "ns",
            "range": "± 98610.96336228593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3842614.285714286,
            "unit": "ns",
            "range": "± 42600.376617021684"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26607.44680851064,
            "unit": "ns",
            "range": "± 3041.831627108554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112432,
            "unit": "ns",
            "range": "± 11687.504161939518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98244.32989690722,
            "unit": "ns",
            "range": "± 11223.737578158523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 240853.0612244898,
            "unit": "ns",
            "range": "± 32040.561291149115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10480.808080808081,
            "unit": "ns",
            "range": "± 2290.5162401660996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22239.583333333332,
            "unit": "ns",
            "range": "± 7011.681668798248"
          }
        ]
      }
    ]
  }
}