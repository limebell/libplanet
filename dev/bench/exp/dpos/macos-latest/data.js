window.BENCHMARK_DATA = {
  "lastUpdate": 1710917406249,
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
        "date": 1710913299438,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9555778.521052632,
            "unit": "ns",
            "range": "± 802929.0828732249"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23700269.60714286,
            "unit": "ns",
            "range": "± 1651528.46937116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63925224.76404494,
            "unit": "ns",
            "range": "± 3988026.0280660354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119215971.04301076,
            "unit": "ns",
            "range": "± 10922305.807014268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 265436583.23195878,
            "unit": "ns",
            "range": "± 26051697.203589458"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60835.5393258427,
            "unit": "ns",
            "range": "± 6227.838151937746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318471.98,
            "unit": "ns",
            "range": "± 12210.328355560805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248645.09793814432,
            "unit": "ns",
            "range": "± 19733.060192362773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233838.57731958764,
            "unit": "ns",
            "range": "± 19492.404918238375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3898668.566666667,
            "unit": "ns",
            "range": "± 64369.82206689568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3492300.6666666665,
            "unit": "ns",
            "range": "± 51398.75690362653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13045.632183908046,
            "unit": "ns",
            "range": "± 984.4824294195772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63380.28125,
            "unit": "ns",
            "range": "± 8401.387703923961"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 55370.85263157895,
            "unit": "ns",
            "range": "± 6493.6332549961535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63345.80927835051,
            "unit": "ns",
            "range": "± 12318.484165371856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3805.436842105263,
            "unit": "ns",
            "range": "± 744.3642841096064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12142.54255319149,
            "unit": "ns",
            "range": "± 991.7239325461543"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1479542.5760869565,
            "unit": "ns",
            "range": "± 140930.88389596314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3202898.9540229887,
            "unit": "ns",
            "range": "± 174290.31836277613"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2596918.1276595746,
            "unit": "ns",
            "range": "± 214715.60232283975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 17406695.205263156,
            "unit": "ns",
            "range": "± 7363272.23062618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4120958.5,
            "unit": "ns",
            "range": "± 253999.1586436485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4155298.14556962,
            "unit": "ns",
            "range": "± 215868.4390419573"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4843607.923913044,
            "unit": "ns",
            "range": "± 342500.5165225986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4154218.948979592,
            "unit": "ns",
            "range": "± 275873.1279304517"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22274502.604395606,
            "unit": "ns",
            "range": "± 3213306.8008093564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4374670.88764881,
            "unit": "ns",
            "range": "± 101559.0922597378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1331450.5063802083,
            "unit": "ns",
            "range": "± 16022.129013597665"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 881447.0576822917,
            "unit": "ns",
            "range": "± 15140.734872943014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1970494.15234375,
            "unit": "ns",
            "range": "± 32951.54593751006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 634822.9872395833,
            "unit": "ns",
            "range": "± 9333.1828784547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574876.5639860734,
            "unit": "ns",
            "range": "± 14171.428919241578"
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
        "date": 1710917396051,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7502671.192307692,
            "unit": "ns",
            "range": "± 33584.228179272424"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18553407.5,
            "unit": "ns",
            "range": "± 200723.43584679608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47493751.621212125,
            "unit": "ns",
            "range": "± 2092301.5197220116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95355672.93243243,
            "unit": "ns",
            "range": "± 3213958.8150158585"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 197023968.75,
            "unit": "ns",
            "range": "± 7756669.283812211"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34490.454545454544,
            "unit": "ns",
            "range": "± 3205.7963843139273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 216734.45555555556,
            "unit": "ns",
            "range": "± 13254.799696426366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 220740.20833333334,
            "unit": "ns",
            "range": "± 20901.557209133167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 199634.31632653062,
            "unit": "ns",
            "range": "± 21487.028122042902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3912104.6578947366,
            "unit": "ns",
            "range": "± 84287.92590167953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3561260.5090909093,
            "unit": "ns",
            "range": "± 150984.9344257593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12835.611111111111,
            "unit": "ns",
            "range": "± 1386.0886338898936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59965.5,
            "unit": "ns",
            "range": "± 5611.565990270265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53030.3595505618,
            "unit": "ns",
            "range": "± 3817.92264210166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62306.073684210525,
            "unit": "ns",
            "range": "± 12885.22094712446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3348.715909090909,
            "unit": "ns",
            "range": "± 461.6353974770151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11905.115384615385,
            "unit": "ns",
            "range": "± 1129.5177315929602"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1081534.75,
            "unit": "ns",
            "range": "± 94763.7504184016"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2289175.402173913,
            "unit": "ns",
            "range": "± 128149.4329809616"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1777451.797979798,
            "unit": "ns",
            "range": "± 115418.49216389608"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12486149.288659794,
            "unit": "ns",
            "range": "± 4565464.606698499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2892602.5483870967,
            "unit": "ns",
            "range": "± 87917.99936677309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3111833.340425532,
            "unit": "ns",
            "range": "± 120424.34359674824"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3604655.8,
            "unit": "ns",
            "range": "± 63483.02611969822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3767542.989361702,
            "unit": "ns",
            "range": "± 250070.8975178579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16890078.90425532,
            "unit": "ns",
            "range": "± 2331526.424388381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4415932.7928125,
            "unit": "ns",
            "range": "± 115738.4607236351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1354538.6382378472,
            "unit": "ns",
            "range": "± 23346.547253124583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 909874.0200683593,
            "unit": "ns",
            "range": "± 20356.24850048744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2031880.5751953125,
            "unit": "ns",
            "range": "± 57035.04020682675"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636923.7189275568,
            "unit": "ns",
            "range": "± 19651.37366436821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 586898.9234008789,
            "unit": "ns",
            "range": "± 17691.58052492011"
          }
        ]
      }
    ]
  }
}