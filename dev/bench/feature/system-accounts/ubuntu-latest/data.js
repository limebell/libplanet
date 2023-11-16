window.BENCHMARK_DATA = {
  "lastUpdate": 1700128596886,
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
        "date": 1700127970844,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5577448.142857143,
            "unit": "ns",
            "range": "± 45545.884008677094"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14370452.307692308,
            "unit": "ns",
            "range": "± 121742.16038167482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36756199.4,
            "unit": "ns",
            "range": "± 186219.3398241516"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74873769.14285715,
            "unit": "ns",
            "range": "± 526278.7255016778"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148724758.46153846,
            "unit": "ns",
            "range": "± 1291683.037832851"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1043702.7,
            "unit": "ns",
            "range": "± 102529.44031635916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1909044.0192307692,
            "unit": "ns",
            "range": "± 78675.13624541694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1605146.7011494252,
            "unit": "ns",
            "range": "± 115102.52806541297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6519550.411764706,
            "unit": "ns",
            "range": "± 164818.02716993354"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2393399.5636363635,
            "unit": "ns",
            "range": "± 101234.3570236471"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2551982.8529411764,
            "unit": "ns",
            "range": "± 76976.10645591878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3271662.1914893617,
            "unit": "ns",
            "range": "± 126668.13413810023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3192725,
            "unit": "ns",
            "range": "± 38329.0311100259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7450446.5,
            "unit": "ns",
            "range": "± 262922.5763971845"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40153.69587628866,
            "unit": "ns",
            "range": "± 5327.70771267057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3652896.9166666665,
            "unit": "ns",
            "range": "± 20608.350955209586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1187747.9803185095,
            "unit": "ns",
            "range": "± 2654.6369202938567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765971.5852864584,
            "unit": "ns",
            "range": "± 12889.178864316433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1957299.9052083334,
            "unit": "ns",
            "range": "± 26556.8245179514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 625352.8549107143,
            "unit": "ns",
            "range": "± 9212.430239369898"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 564123.4165736607,
            "unit": "ns",
            "range": "± 4366.016046855941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201740.58695652173,
            "unit": "ns",
            "range": "± 7624.7409335256525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192488.53968253967,
            "unit": "ns",
            "range": "± 8753.817087834934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170027.94444444444,
            "unit": "ns",
            "range": "± 3115.946753910056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3119313.714285714,
            "unit": "ns",
            "range": "± 47645.736611964596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2842855.214285714,
            "unit": "ns",
            "range": "± 37741.41017335768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15265.010638297872,
            "unit": "ns",
            "range": "± 2745.5104378606425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62776.13684210526,
            "unit": "ns",
            "range": "± 6081.819773527555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75080.79,
            "unit": "ns",
            "range": "± 18375.711129121213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84175.79,
            "unit": "ns",
            "range": "± 23785.496015703146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5780.656565656565,
            "unit": "ns",
            "range": "± 1830.1958251510493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15294.041237113403,
            "unit": "ns",
            "range": "± 2887.088819632755"
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
        "date": 1700128342618,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5572015.730769231,
            "unit": "ns",
            "range": "± 23054.966027423266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14271794,
            "unit": "ns",
            "range": "± 113603.54575137924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 39436091.5,
            "unit": "ns",
            "range": "± 127339.98249492455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75496561.83333333,
            "unit": "ns",
            "range": "± 1006232.895143257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150705254.73076922,
            "unit": "ns",
            "range": "± 644576.7713245586"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1077336.121212121,
            "unit": "ns",
            "range": "± 116311.5091825916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1987176.1304347827,
            "unit": "ns",
            "range": "± 95389.41028657726"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1608725.945054945,
            "unit": "ns",
            "range": "± 142618.96876879572"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6303333.3,
            "unit": "ns",
            "range": "± 220438.126451148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2439317.2666666666,
            "unit": "ns",
            "range": "± 38225.46052318433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2559300.6511627906,
            "unit": "ns",
            "range": "± 138385.6538361518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3161696.5714285714,
            "unit": "ns",
            "range": "± 47446.365012286464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3039401.5322580645,
            "unit": "ns",
            "range": "± 136403.1173303659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7512569.05882353,
            "unit": "ns",
            "range": "± 232473.31595025165"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38709.5,
            "unit": "ns",
            "range": "± 4592.468028138431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3861412.9322916665,
            "unit": "ns",
            "range": "± 52778.18409115583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1243042.307842548,
            "unit": "ns",
            "range": "± 18013.457774341143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 778589,
            "unit": "ns",
            "range": "± 12531.648939081122"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2032385.597935268,
            "unit": "ns",
            "range": "± 6590.782944981637"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632678.7397786458,
            "unit": "ns",
            "range": "± 2043.798898831727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 613981.9366736779,
            "unit": "ns",
            "range": "± 3048.691935812367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198302.5632183908,
            "unit": "ns",
            "range": "± 10856.577945684561"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 186745.91176470587,
            "unit": "ns",
            "range": "± 5335.156952152376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175610.5625,
            "unit": "ns",
            "range": "± 3206.739579255956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3136295.933333333,
            "unit": "ns",
            "range": "± 36005.56235890439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2841306.9285714286,
            "unit": "ns",
            "range": "± 39693.50807696448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12426.931818181818,
            "unit": "ns",
            "range": "± 971.1711474280196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60172.11827956989,
            "unit": "ns",
            "range": "± 3839.4055242102436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57317.913978494624,
            "unit": "ns",
            "range": "± 7013.020867512947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64502.882978723406,
            "unit": "ns",
            "range": "± 13259.218530513865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5041.742424242424,
            "unit": "ns",
            "range": "± 1820.2962760132023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16602.228260869564,
            "unit": "ns",
            "range": "± 1574.0342031223909"
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
        "date": 1700128593899,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5666474.633333334,
            "unit": "ns",
            "range": "± 32582.535308410384"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14470748.214285715,
            "unit": "ns",
            "range": "± 45447.103607767625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36595776.071428575,
            "unit": "ns",
            "range": "± 173797.8154871628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74298163.5,
            "unit": "ns",
            "range": "± 426031.52466310427"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 153170352,
            "unit": "ns",
            "range": "± 1146578.0974037487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1078243.04,
            "unit": "ns",
            "range": "± 132694.89404995082"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1971916.8356164384,
            "unit": "ns",
            "range": "± 94887.83562288068"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1626020.6344086023,
            "unit": "ns",
            "range": "± 146442.4097364161"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6576859.882352941,
            "unit": "ns",
            "range": "± 210896.58972558015"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2445913.3448275863,
            "unit": "ns",
            "range": "± 65789.48191351164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2531377.529411765,
            "unit": "ns",
            "range": "± 95529.03770191615"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3257365.617647059,
            "unit": "ns",
            "range": "± 57107.334011143386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2999769.94,
            "unit": "ns",
            "range": "± 137630.95529882057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7463292.558139535,
            "unit": "ns",
            "range": "± 244173.5420103323"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40609.0206185567,
            "unit": "ns",
            "range": "± 5135.827793508118"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3741890.5295410156,
            "unit": "ns",
            "range": "± 68168.7204193987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1202313.2838040865,
            "unit": "ns",
            "range": "± 16373.590207918096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771836.8946940104,
            "unit": "ns",
            "range": "± 4923.09405364944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1929934.701171875,
            "unit": "ns",
            "range": "± 3766.3042048802326"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 628184.3030133928,
            "unit": "ns",
            "range": "± 11996.291930414387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570644.7216099331,
            "unit": "ns",
            "range": "± 1147.3694349627397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198641.97872340426,
            "unit": "ns",
            "range": "± 12700.918167621492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188023.35384615386,
            "unit": "ns",
            "range": "± 8790.12390489813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169914.20833333334,
            "unit": "ns",
            "range": "± 4342.128149623595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3099445.285714286,
            "unit": "ns",
            "range": "± 28204.93720944989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2921583.423076923,
            "unit": "ns",
            "range": "± 38951.759755843166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16692.510416666668,
            "unit": "ns",
            "range": "± 1602.210325208941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71154.17708333333,
            "unit": "ns",
            "range": "± 6179.728478100655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 58842.121212121216,
            "unit": "ns",
            "range": "± 8422.251595882266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70384.51020408163,
            "unit": "ns",
            "range": "± 15908.76081552117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3174.409090909091,
            "unit": "ns",
            "range": "± 998.2241085802767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12052.329787234043,
            "unit": "ns",
            "range": "± 1347.5400019062843"
          }
        ]
      }
    ]
  }
}