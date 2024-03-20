window.BENCHMARK_DATA = {
  "lastUpdate": 1710917226729,
  "repoUrl": "https://github.com/limebell/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1016fbce882309452a45eda1a19c9a8b213801a5",
          "message": "Merge pull request #3681 from OnedgeLee/release/4.0.6\n\n🚀 Release 4.0.6",
          "timestamp": "2024-02-22T19:53:18+09:00",
          "tree_id": "fee32a6b01e16aac4ea8da9bae064a264cf31dbb",
          "url": "https://github.com/limebell/libplanet/commit/1016fbce882309452a45eda1a19c9a8b213801a5"
        },
        "date": 1710913129329,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 991327.659574468,
            "unit": "ns",
            "range": "± 98646.80360320944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1971734.7368421052,
            "unit": "ns",
            "range": "± 156124.78285995568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1733812.2448979593,
            "unit": "ns",
            "range": "± 170134.52137641158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8944095.454545455,
            "unit": "ns",
            "range": "± 895011.2037967066"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39004.545454545456,
            "unit": "ns",
            "range": "± 2928.492966592442"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5243140,
            "unit": "ns",
            "range": "± 115684.02246045726"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15655833.846153846,
            "unit": "ns",
            "range": "± 731002.1298440506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36823760.22727273,
            "unit": "ns",
            "range": "± 2015679.8974191607"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 70430002.7027027,
            "unit": "ns",
            "range": "± 2339623.3447438227"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 142609450,
            "unit": "ns",
            "range": "± 4973797.267114832"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3550388.3854166665,
            "unit": "ns",
            "range": "± 30309.87997577834"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1137036.146763393,
            "unit": "ns",
            "range": "± 11469.084650831754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 833726.6341145834,
            "unit": "ns",
            "range": "± 7935.003358415175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2131942.6953125,
            "unit": "ns",
            "range": "± 27944.465994504484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 671769.7526041666,
            "unit": "ns",
            "range": "± 9951.733265646537"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 612437.5065104166,
            "unit": "ns",
            "range": "± 6740.52595159804"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2409467.6767676766,
            "unit": "ns",
            "range": "± 188451.42546787503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2576343.2835820895,
            "unit": "ns",
            "range": "± 121096.55829741394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3189130.2083333335,
            "unit": "ns",
            "range": "± 201490.07661070488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3130006.896551724,
            "unit": "ns",
            "range": "± 166846.782375609"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10463147.191011235,
            "unit": "ns",
            "range": "± 902401.2357303717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 179091.93548387097,
            "unit": "ns",
            "range": "± 7071.352929819336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 174017.9775280899,
            "unit": "ns",
            "range": "± 11761.865979412922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145805.4054054054,
            "unit": "ns",
            "range": "± 4898.692906499874"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3158875,
            "unit": "ns",
            "range": "± 68632.96641518104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2929192.7710843375,
            "unit": "ns",
            "range": "± 155126.31028367637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11709.375,
            "unit": "ns",
            "range": "± 1783.2010321477026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57423.913043478264,
            "unit": "ns",
            "range": "± 5424.595383001257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48155.844155844155,
            "unit": "ns",
            "range": "± 2463.9235669586187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60656.25,
            "unit": "ns",
            "range": "± 14057.190050122505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2741.8367346938776,
            "unit": "ns",
            "range": "± 691.0209791954198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10929.347826086956,
            "unit": "ns",
            "range": "± 1808.9847825843078"
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
          "id": "13f3e504c8a403bd4421d43f7f3a340fc4b29289",
          "message": "feat: add dpos related features",
          "timestamp": "2024-03-20T15:35:28+09:00",
          "tree_id": "1551ff4285963d9cb5a3f68cd34b1d8c052dcd79",
          "url": "https://github.com/limebell/libplanet/commit/13f3e504c8a403bd4421d43f7f3a340fc4b29289"
        },
        "date": 1710917211287,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1071769,
            "unit": "ns",
            "range": "± 113015.63465183733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1834168.9655172413,
            "unit": "ns",
            "range": "± 92701.61975246902"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1703352.5773195876,
            "unit": "ns",
            "range": "± 167604.1704015642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6963050,
            "unit": "ns",
            "range": "± 254217.6235471318"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35272.52747252747,
            "unit": "ns",
            "range": "± 2385.0490763208827"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5181646.666666667,
            "unit": "ns",
            "range": "± 45676.406330162354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13239578.57142857,
            "unit": "ns",
            "range": "± 124571.04354588145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32555688.23529412,
            "unit": "ns",
            "range": "± 654333.2053342098"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66218940,
            "unit": "ns",
            "range": "± 417497.8850245831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129212707.14285715,
            "unit": "ns",
            "range": "± 734593.0309354296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3279062.860576923,
            "unit": "ns",
            "range": "± 3624.507793330739"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1058872.6822916667,
            "unit": "ns",
            "range": "± 2058.2051278307554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735648.3119419643,
            "unit": "ns",
            "range": "± 2071.9677327075524"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1956539.3229166667,
            "unit": "ns",
            "range": "± 2405.7241554346883"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620370.1953125,
            "unit": "ns",
            "range": "± 2449.397858953237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568264.2317708334,
            "unit": "ns",
            "range": "± 1833.4912008873193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2133734.375,
            "unit": "ns",
            "range": "± 59686.86897994426"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2220115.3846153845,
            "unit": "ns",
            "range": "± 113874.10578367658"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2731634.4827586208,
            "unit": "ns",
            "range": "± 79889.72433415447"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2886522.972972973,
            "unit": "ns",
            "range": "± 144266.71508512044"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7950265.116279069,
            "unit": "ns",
            "range": "± 273626.1256007834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167904.16666666666,
            "unit": "ns",
            "range": "± 6611.593889438857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 170047.311827957,
            "unit": "ns",
            "range": "± 12208.40401382383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139845,
            "unit": "ns",
            "range": "± 3226.2859533264527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2782466.6666666665,
            "unit": "ns",
            "range": "± 44886.23184812699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2449476.923076923,
            "unit": "ns",
            "range": "± 12563.250232732627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9706.818181818182,
            "unit": "ns",
            "range": "± 770.8474892088866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52609.59595959596,
            "unit": "ns",
            "range": "± 5657.4660656574115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43792.857142857145,
            "unit": "ns",
            "range": "± 776.2972128233894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 49093.10344827586,
            "unit": "ns",
            "range": "± 7115.701490259154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2296.808510638298,
            "unit": "ns",
            "range": "± 410.46842573935066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9473.033707865168,
            "unit": "ns",
            "range": "± 931.2459938832467"
          }
        ]
      }
    ]
  }
}