window.BENCHMARK_DATA = {
  "lastUpdate": 1701942881298,
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
      }
    ]
  }
}