window.BENCHMARK_DATA = {
  "lastUpdate": 1700129141876,
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
          "id": "0b03699216f356b995f836c05c9801db5db58ef1",
          "message": "chore: fix test and exception message",
          "timestamp": "2023-11-16T18:36:18+09:00",
          "tree_id": "a9a3f87316e119adae7f7a425e240470a3e6b197",
          "url": "https://github.com/limebell/libplanet/commit/0b03699216f356b995f836c05c9801db5db58ef1"
        },
        "date": 1700128541294,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8256159.3125,
            "unit": "ns",
            "range": "± 155037.1136649625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19486749.07142857,
            "unit": "ns",
            "range": "± 336851.7347620838"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49724796.782608695,
            "unit": "ns",
            "range": "± 1246874.1459596967"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98355464.93939394,
            "unit": "ns",
            "range": "± 3045386.2423898196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202191825.76666668,
            "unit": "ns",
            "range": "± 7572361.120871264"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51000.02577319588,
            "unit": "ns",
            "range": "± 10547.84942544844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 236551.34782608695,
            "unit": "ns",
            "range": "± 13555.332761437174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222851.19318181818,
            "unit": "ns",
            "range": "± 14208.088195026594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231771.625,
            "unit": "ns",
            "range": "± 7217.278661254084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3990919.590909091,
            "unit": "ns",
            "range": "± 277176.0789403557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3551009.8,
            "unit": "ns",
            "range": "± 106101.23334593046"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15916.714285714286,
            "unit": "ns",
            "range": "± 3359.7636453443147"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 70361.31578947368,
            "unit": "ns",
            "range": "± 10857.577372961909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69851.68817204301,
            "unit": "ns",
            "range": "± 7938.518333141232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 77067.43548387097,
            "unit": "ns",
            "range": "± 11578.096150665417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5371.164948453608,
            "unit": "ns",
            "range": "± 1235.9212545743324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15027.54347826087,
            "unit": "ns",
            "range": "± 2593.649878144033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1192039.142857143,
            "unit": "ns",
            "range": "± 91786.99532572036"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2432349.052631579,
            "unit": "ns",
            "range": "± 148680.65488584733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1921858.9885057472,
            "unit": "ns",
            "range": "± 138769.66801263552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10108876.072164949,
            "unit": "ns",
            "range": "± 2641091.5472965366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2984113.7647058824,
            "unit": "ns",
            "range": "± 93900.24572338806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3132694.603896104,
            "unit": "ns",
            "range": "± 160150.99969088254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3857017.188888889,
            "unit": "ns",
            "range": "± 257707.44048010453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3827058.255319149,
            "unit": "ns",
            "range": "± 236083.64080799822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11501115.684210526,
            "unit": "ns",
            "range": "± 1167252.606571519"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4599740.120793269,
            "unit": "ns",
            "range": "± 56867.44348543782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1398013.8079427083,
            "unit": "ns",
            "range": "± 7312.55927885293"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 894277.91328125,
            "unit": "ns",
            "range": "± 6622.359131887262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1994104.1658653845,
            "unit": "ns",
            "range": "± 6885.681136831217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 643165.4749581473,
            "unit": "ns",
            "range": "± 4971.748375747225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 569461.83515625,
            "unit": "ns",
            "range": "± 2226.989418167991"
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
          "id": "a3fd186d8d65fdea7a31b5277958b57334a80f02",
          "message": "temp",
          "timestamp": "2023-11-16T18:06:48+09:00",
          "tree_id": "38efb60a980c476e68844c384378f140a74c39fe",
          "url": "https://github.com/limebell/libplanet/commit/a3fd186d8d65fdea7a31b5277958b57334a80f02"
        },
        "date": 1700128639758,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9970728.28125,
            "unit": "ns",
            "range": "± 1775046.1425525262"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23937747.520833332,
            "unit": "ns",
            "range": "± 3993079.919029027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60443935.947916664,
            "unit": "ns",
            "range": "± 9327968.223788759"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 130158724.48969072,
            "unit": "ns",
            "range": "± 16497317.260281947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 302343614.0425532,
            "unit": "ns",
            "range": "± 93783255.91593257"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65098.35106382979,
            "unit": "ns",
            "range": "± 15745.177764395617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333052.47,
            "unit": "ns",
            "range": "± 76615.43075350125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286315.4893617021,
            "unit": "ns",
            "range": "± 64063.81975752473"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 281758.14210526313,
            "unit": "ns",
            "range": "± 63748.11751812434"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4977803.255102041,
            "unit": "ns",
            "range": "± 913336.6681543926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4573620.803030303,
            "unit": "ns",
            "range": "± 931132.9518990475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23833.860215053763,
            "unit": "ns",
            "range": "± 6972.695814812227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97601.67894736842,
            "unit": "ns",
            "range": "± 21950.217932315565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93154.85555555555,
            "unit": "ns",
            "range": "± 22585.587472894196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 93498.18085106384,
            "unit": "ns",
            "range": "± 17612.010048108736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7471.468085106383,
            "unit": "ns",
            "range": "± 1417.218686520221"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23616.644329896906,
            "unit": "ns",
            "range": "± 5891.158507652399"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1909887.0376344086,
            "unit": "ns",
            "range": "± 915726.2517849182"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3042364.9838709678,
            "unit": "ns",
            "range": "± 774389.9670938973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2515659.5515463916,
            "unit": "ns",
            "range": "± 722630.1693843438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12428314.135416666,
            "unit": "ns",
            "range": "± 3582607.5562317693"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4225843.407216495,
            "unit": "ns",
            "range": "± 1062739.8261003457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4086662.112244898,
            "unit": "ns",
            "range": "± 963819.4599487149"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4193122.311111111,
            "unit": "ns",
            "range": "± 560146.4307116166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4628531.979166667,
            "unit": "ns",
            "range": "± 974250.7064552358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14459304.416666666,
            "unit": "ns",
            "range": "± 3387887.0927446657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5433362.394929847,
            "unit": "ns",
            "range": "± 564590.0349694509"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1465096.8595204456,
            "unit": "ns",
            "range": "± 48520.7724431763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 928419.6866048177,
            "unit": "ns",
            "range": "± 9450.043307878024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2170894.025327621,
            "unit": "ns",
            "range": "± 65031.19716236823"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 663867.3828500601,
            "unit": "ns",
            "range": "± 17908.590407443022"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 596503.9749691612,
            "unit": "ns",
            "range": "± 9869.48236999863"
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
        "date": 1700129135323,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10616289.444444444,
            "unit": "ns",
            "range": "± 1586636.7135898713"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23822841,
            "unit": "ns",
            "range": "± 228980.81338182028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62731256.7264151,
            "unit": "ns",
            "range": "± 2601216.1340771765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113809692.74742268,
            "unit": "ns",
            "range": "± 12997242.023548363"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 227449503.95604396,
            "unit": "ns",
            "range": "± 21037333.00944795"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72934.91836734694,
            "unit": "ns",
            "range": "± 18958.762806906077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 247984.3052631579,
            "unit": "ns",
            "range": "± 25748.925017046495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 276405.5967741936,
            "unit": "ns",
            "range": "± 12403.409044488835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 250103.09278350516,
            "unit": "ns",
            "range": "± 25806.760677550858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4529778.923076923,
            "unit": "ns",
            "range": "± 123644.18602519832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3401391.785714286,
            "unit": "ns",
            "range": "± 110531.71752263782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21746.59375,
            "unit": "ns",
            "range": "± 6427.296916610926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89007.06976744186,
            "unit": "ns",
            "range": "± 12543.107275725954"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93992.90217391304,
            "unit": "ns",
            "range": "± 23440.035153585282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88673.89690721649,
            "unit": "ns",
            "range": "± 19085.04736561045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6797.551020408163,
            "unit": "ns",
            "range": "± 2221.145038234837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17951.614583333332,
            "unit": "ns",
            "range": "± 4820.1742245642445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1268425.6022727273,
            "unit": "ns",
            "range": "± 134072.06841167485"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2711225.0494505493,
            "unit": "ns",
            "range": "± 176421.1546497795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2112156.404255319,
            "unit": "ns",
            "range": "± 277060.29693293484"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11400774.8172043,
            "unit": "ns",
            "range": "± 3299988.2752021784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3367526.363157895,
            "unit": "ns",
            "range": "± 192296.46600455968"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3580158.5,
            "unit": "ns",
            "range": "± 197163.41502526155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4469846,
            "unit": "ns",
            "range": "± 168379.36335192624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4331137.730769231,
            "unit": "ns",
            "range": "± 150987.19170764496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12101252.477777777,
            "unit": "ns",
            "range": "± 2170822.309238915"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5088292.239039179,
            "unit": "ns",
            "range": "± 240471.14316551774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1504709.2251764112,
            "unit": "ns",
            "range": "± 101450.37384374725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 916302.1177368164,
            "unit": "ns",
            "range": "± 17453.39939422942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1908853.9296875,
            "unit": "ns",
            "range": "± 20663.284035879245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 662834.621233259,
            "unit": "ns",
            "range": "± 41977.706315621115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564870.2151692709,
            "unit": "ns",
            "range": "± 7624.078417216136"
          }
        ]
      }
    ]
  }
}