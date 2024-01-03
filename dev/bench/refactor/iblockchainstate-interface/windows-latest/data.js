window.BENCHMARK_DATA = {
  "lastUpdate": 1704275283512,
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
          "id": "dfaada365c0316749ef5226477879e1cc1e5ce8a",
          "message": "refactor: refactor IBlockChainStates interface",
          "timestamp": "2024-01-03T18:30:47+09:00",
          "tree_id": "0cd61258bc3067d0728a0358c9dec44a9edbdc0c",
          "url": "https://github.com/limebell/libplanet/commit/dfaada365c0316749ef5226477879e1cc1e5ce8a"
        },
        "date": 1704274970554,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 981786,
            "unit": "ns",
            "range": "± 108288.2125336704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1719944.4444444445,
            "unit": "ns",
            "range": "± 74082.89989834138"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1503836.0824742268,
            "unit": "ns",
            "range": "± 165174.9591251444"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10713721.276595745,
            "unit": "ns",
            "range": "± 1005264.4742545879"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34101.96078431373,
            "unit": "ns",
            "range": "± 1378.0406664650257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4947876.923076923,
            "unit": "ns",
            "range": "± 19091.016816212883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13398550,
            "unit": "ns",
            "range": "± 112738.22640217333"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32157371.42857143,
            "unit": "ns",
            "range": "± 336496.69887184387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63856623.07692308,
            "unit": "ns",
            "range": "± 414733.1675383707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133222033.33333333,
            "unit": "ns",
            "range": "± 820982.4364457384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3352225.1116071427,
            "unit": "ns",
            "range": "± 6852.17436635315"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1023641.7271205357,
            "unit": "ns",
            "range": "± 1520.3385556113772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744724.9399038461,
            "unit": "ns",
            "range": "± 925.8551112146141"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1900663.28125,
            "unit": "ns",
            "range": "± 4217.414049901971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 605460.5844350961,
            "unit": "ns",
            "range": "± 1109.3212473126184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 570534.8284040178,
            "unit": "ns",
            "range": "± 1098.6887676770473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2169766.6666666665,
            "unit": "ns",
            "range": "± 74622.16950624113"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2273085.714285714,
            "unit": "ns",
            "range": "± 19734.89128589094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2791719.35483871,
            "unit": "ns",
            "range": "± 83349.42279086217"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2728865.277777778,
            "unit": "ns",
            "range": "± 90455.63329217231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12453169.78021978,
            "unit": "ns",
            "range": "± 1502331.3959916346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 168657.97101449277,
            "unit": "ns",
            "range": "± 8047.275859808297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 162776.08695652173,
            "unit": "ns",
            "range": "± 7864.003100014219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 141002.7027027027,
            "unit": "ns",
            "range": "± 3951.053761444638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2813666.6666666665,
            "unit": "ns",
            "range": "± 26409.053281745928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2450040,
            "unit": "ns",
            "range": "± 44893.55346658519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10260.869565217392,
            "unit": "ns",
            "range": "± 1138.7246115903383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54518.36734693877,
            "unit": "ns",
            "range": "± 6477.643502710005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44524.61538461538,
            "unit": "ns",
            "range": "± 2082.4437844476415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52409.782608695656,
            "unit": "ns",
            "range": "± 9526.37818223185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2393.877551020408,
            "unit": "ns",
            "range": "± 465.47090146367333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9303.40909090909,
            "unit": "ns",
            "range": "± 1006.5816585447523"
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
          "id": "57eda174477e29b74dfa8c5d57eddcc7f94c76de",
          "message": "docs: update CHANGES.md",
          "timestamp": "2024-01-03T18:36:42+09:00",
          "tree_id": "3d991210004131b317cab666aff77c01eaa4b115",
          "url": "https://github.com/limebell/libplanet/commit/57eda174477e29b74dfa8c5d57eddcc7f94c76de"
        },
        "date": 1704275273179,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1010678.8659793815,
            "unit": "ns",
            "range": "± 116110.18111292223"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1760049.2063492064,
            "unit": "ns",
            "range": "± 80645.39639085035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1502989.6907216494,
            "unit": "ns",
            "range": "± 131456.29619488883"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10655863.333333334,
            "unit": "ns",
            "range": "± 885569.0081473103"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34069.333333333336,
            "unit": "ns",
            "range": "± 1719.6773215025225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5064113.333333333,
            "unit": "ns",
            "range": "± 63899.495489475696"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13553971.42857143,
            "unit": "ns",
            "range": "± 85504.25476207359"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33327742.85714286,
            "unit": "ns",
            "range": "± 214298.52906737264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65501980,
            "unit": "ns",
            "range": "± 347116.33949276595"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130240816.66666667,
            "unit": "ns",
            "range": "± 738422.0818423437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3276593.973214286,
            "unit": "ns",
            "range": "± 6096.024894179633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1042068.8541666666,
            "unit": "ns",
            "range": "± 1800.0882791134786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 742908.8346354166,
            "unit": "ns",
            "range": "± 1398.7350485210513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1903549.3861607143,
            "unit": "ns",
            "range": "± 1520.7515536112217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611994.5182291666,
            "unit": "ns",
            "range": "± 1217.990131337896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567779.0690104166,
            "unit": "ns",
            "range": "± 1083.5965283983905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2202190,
            "unit": "ns",
            "range": "± 78222.17142577993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2300984.6153846155,
            "unit": "ns",
            "range": "± 35659.09996419442"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2869159.2592592593,
            "unit": "ns",
            "range": "± 79576.75181985898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2782180.882352941,
            "unit": "ns",
            "range": "± 131882.2182093054"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12396700,
            "unit": "ns",
            "range": "± 1415905.0287138184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180423.1343283582,
            "unit": "ns",
            "range": "± 8042.323312921539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 171166.03773584907,
            "unit": "ns",
            "range": "± 6535.051744725586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 140700,
            "unit": "ns",
            "range": "± 1845.3873700268314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2823121.4285714286,
            "unit": "ns",
            "range": "± 36366.76797829047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2520078.5714285714,
            "unit": "ns",
            "range": "± 41568.00135036247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12077.894736842105,
            "unit": "ns",
            "range": "± 1452.9631460210576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 55776.74418604651,
            "unit": "ns",
            "range": "± 3210.7787004402994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46426.829268292684,
            "unit": "ns",
            "range": "± 1665.5366087606574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63832.32323232323,
            "unit": "ns",
            "range": "± 13898.581841345442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2673.404255319149,
            "unit": "ns",
            "range": "± 415.603080885973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11085.714285714286,
            "unit": "ns",
            "range": "± 1276.851285917513"
          }
        ]
      }
    ]
  }
}