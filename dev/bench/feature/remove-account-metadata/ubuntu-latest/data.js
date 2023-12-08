window.BENCHMARK_DATA = {
  "lastUpdate": 1702020338227,
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
          "id": "4f668f2b53a2ca6dd65b0c923d6dba638706dc7e",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-12-07T18:43:10+09:00",
          "tree_id": "1f69a8f9dbc8e348e4b14df3661186f02c94a65a",
          "url": "https://github.com/limebell/libplanet/commit/4f668f2b53a2ca6dd65b0c923d6dba638706dc7e"
        },
        "date": 1701942878611,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 197196.11475409835,
            "unit": "ns",
            "range": "± 8879.881277544126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190800.97777777776,
            "unit": "ns",
            "range": "± 7223.881110244652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169458,
            "unit": "ns",
            "range": "± 3175.4908911851726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3199284.466666667,
            "unit": "ns",
            "range": "± 33010.3313651665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2830482.4285714286,
            "unit": "ns",
            "range": "± 35449.56515240357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16412.452631578948,
            "unit": "ns",
            "range": "± 2155.696159305156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65796.02105263158,
            "unit": "ns",
            "range": "± 6212.392378414443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61785.74117647059,
            "unit": "ns",
            "range": "± 4397.739509038222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 88226.24,
            "unit": "ns",
            "range": "± 22966.462561269243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3197.358695652174,
            "unit": "ns",
            "range": "± 636.7494993077023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12618.279569892473,
            "unit": "ns",
            "range": "± 1475.5632923350895"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39627.61224489796,
            "unit": "ns",
            "range": "± 5458.20048445532"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1046821.1,
            "unit": "ns",
            "range": "± 78898.81010111565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1978122.826923077,
            "unit": "ns",
            "range": "± 80979.37692575304"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1861958.120879121,
            "unit": "ns",
            "range": "± 110556.44478855688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9790159.868131869,
            "unit": "ns",
            "range": "± 1096063.395248369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2423129.612244898,
            "unit": "ns",
            "range": "± 95705.95107994773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2528450.493150685,
            "unit": "ns",
            "range": "± 125714.87894163118"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3195146.3666666667,
            "unit": "ns",
            "range": "± 56874.58889002648"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3375654.5529411766,
            "unit": "ns",
            "range": "± 229468.3492797098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10450837.373134328,
            "unit": "ns",
            "range": "± 459813.91754401784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5625907.1,
            "unit": "ns",
            "range": "± 48968.5948627135"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14354803.133333333,
            "unit": "ns",
            "range": "± 117536.46604769498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36522405,
            "unit": "ns",
            "range": "± 629471.3362981975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74307363.26923077,
            "unit": "ns",
            "range": "± 535054.806803651"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148452573.7857143,
            "unit": "ns",
            "range": "± 848781.7692650113"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3795648.0997596155,
            "unit": "ns",
            "range": "± 6978.6380140482515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215383.4200846355,
            "unit": "ns",
            "range": "± 4546.915042769048"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 764588.3583286831,
            "unit": "ns",
            "range": "± 2278.1405472756855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1932580.9320591518,
            "unit": "ns",
            "range": "± 2881.7415336076733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616450.2282714844,
            "unit": "ns",
            "range": "± 791.9888425417595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570629.8950195312,
            "unit": "ns",
            "range": "± 3642.73865906377"
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
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "9e2150d34868228b0e517cb51c6732355e48dd96",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-12-08T16:14:43+09:00",
          "tree_id": "8f4623e411de17a75374ad7cc6e532efdd3f7924",
          "url": "https://github.com/limebell/libplanet/commit/9e2150d34868228b0e517cb51c6732355e48dd96"
        },
        "date": 1702020335538,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 195940.91666666666,
            "unit": "ns",
            "range": "± 8053.108664511449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188034.7258064516,
            "unit": "ns",
            "range": "± 8040.743634905537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169094.0806451613,
            "unit": "ns",
            "range": "± 5114.632288993305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3167817.1923076925,
            "unit": "ns",
            "range": "± 31588.17155567522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2827312.7666666666,
            "unit": "ns",
            "range": "± 51049.80728306519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13957.484536082475,
            "unit": "ns",
            "range": "± 2232.3781373673855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67904.57777777778,
            "unit": "ns",
            "range": "± 4006.0075167452856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57604.458333333336,
            "unit": "ns",
            "range": "± 5230.526301216666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65782.55376344085,
            "unit": "ns",
            "range": "± 7646.025127285294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3391.576470588235,
            "unit": "ns",
            "range": "± 597.398833365485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12935.224489795919,
            "unit": "ns",
            "range": "± 1949.2868364441065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3773621.5401041666,
            "unit": "ns",
            "range": "± 69525.60333778372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1196648.8678850445,
            "unit": "ns",
            "range": "± 3373.9558251052704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 780817.9343098958,
            "unit": "ns",
            "range": "± 13832.144125076053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961254.5186941964,
            "unit": "ns",
            "range": "± 3704.84256532741"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 620743.305063101,
            "unit": "ns",
            "range": "± 4070.0509380500534"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 566812.6073521206,
            "unit": "ns",
            "range": "± 1640.0230961399154"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39369.72340425532,
            "unit": "ns",
            "range": "± 5945.31933252394"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2393442.238095238,
            "unit": "ns",
            "range": "± 72702.18054201592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2516317.0943396227,
            "unit": "ns",
            "range": "± 104781.14921023653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3197014,
            "unit": "ns",
            "range": "± 78238.76446774961"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3274948.2258064514,
            "unit": "ns",
            "range": "± 148195.14341007746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10947569.150537634,
            "unit": "ns",
            "range": "± 1600092.6281387652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5615465.75,
            "unit": "ns",
            "range": "± 21279.288531019163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14012806.833333334,
            "unit": "ns",
            "range": "± 139497.47761348163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36290631.461538464,
            "unit": "ns",
            "range": "± 99820.76544788947"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73734218.71428572,
            "unit": "ns",
            "range": "± 648078.0978151925"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 146392039.84615386,
            "unit": "ns",
            "range": "± 1215065.259770221"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1040031.0631578948,
            "unit": "ns",
            "range": "± 90040.46585437331"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1939946.4468085107,
            "unit": "ns",
            "range": "± 74520.74299490992"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1797776.6914893617,
            "unit": "ns",
            "range": "± 161394.8331977535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9053267.985074626,
            "unit": "ns",
            "range": "± 249537.45388603298"
          }
        ]
      }
    ]
  }
}