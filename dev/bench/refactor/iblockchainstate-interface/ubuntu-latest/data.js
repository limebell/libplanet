window.BENCHMARK_DATA = {
  "lastUpdate": 1704275287612,
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
        "date": 1704274958446,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3720769.4267578125,
            "unit": "ns",
            "range": "± 6673.519159492451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214932.9645833333,
            "unit": "ns",
            "range": "± 20528.132085177065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 781845.6108398438,
            "unit": "ns",
            "range": "± 6580.615021930212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961297.0546875,
            "unit": "ns",
            "range": "± 11245.130698450415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 610502.914438101,
            "unit": "ns",
            "range": "± 2127.621137565256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578473.3502103365,
            "unit": "ns",
            "range": "± 540.6416249951254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2483909.0204081633,
            "unit": "ns",
            "range": "± 98770.35041100178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2596306.24,
            "unit": "ns",
            "range": "± 104819.2825436314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3181635.875,
            "unit": "ns",
            "range": "± 70507.87587910797"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3394016.229508197,
            "unit": "ns",
            "range": "± 153133.16522462765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14021178.09139785,
            "unit": "ns",
            "range": "± 918835.747158223"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42507.489583333336,
            "unit": "ns",
            "range": "± 6552.052496407505"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 217211.79787234042,
            "unit": "ns",
            "range": "± 13719.050626131568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224849.76041666666,
            "unit": "ns",
            "range": "± 23198.471215847865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169471.05,
            "unit": "ns",
            "range": "± 3890.0117774818327"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3262035.933333333,
            "unit": "ns",
            "range": "± 49307.94653786499"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2822145,
            "unit": "ns",
            "range": "± 21340.21061463366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20463.06,
            "unit": "ns",
            "range": "± 4533.550451173266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92461.06,
            "unit": "ns",
            "range": "± 16074.946295412745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93794.32795698925,
            "unit": "ns",
            "range": "± 8936.190343842492"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96883.57142857143,
            "unit": "ns",
            "range": "± 15033.6246317051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7368.183673469388,
            "unit": "ns",
            "range": "± 1040.7300703440471"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14762.036842105263,
            "unit": "ns",
            "range": "± 2621.081471659175"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5779827,
            "unit": "ns",
            "range": "± 68471.53983434076"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15011828.142857144,
            "unit": "ns",
            "range": "± 102972.76572051403"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37004363.333333336,
            "unit": "ns",
            "range": "± 367921.5053217771"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76006229.6923077,
            "unit": "ns",
            "range": "± 356341.0603668871"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150727154,
            "unit": "ns",
            "range": "± 549738.6614851642"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1072699.9239130435,
            "unit": "ns",
            "range": "± 102915.278953259"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2035110.5689655172,
            "unit": "ns",
            "range": "± 89178.63641405715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1767438.4583333333,
            "unit": "ns",
            "range": "± 135579.3436134387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12974768.107526882,
            "unit": "ns",
            "range": "± 1032645.5418466231"
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
        "date": 1704275284526,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3749222.6545758927,
            "unit": "ns",
            "range": "± 27679.014372448288"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1216927.4502704327,
            "unit": "ns",
            "range": "± 2788.128418646945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 762128.2189002404,
            "unit": "ns",
            "range": "± 3841.2167258721242"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1971411.7809244792,
            "unit": "ns",
            "range": "± 4382.349026397231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 606719.576547476,
            "unit": "ns",
            "range": "± 1880.99404082543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578305.7996744792,
            "unit": "ns",
            "range": "± 2133.7628103962984"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2429061.5681818184,
            "unit": "ns",
            "range": "± 91247.1677932941"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2507574.447368421,
            "unit": "ns",
            "range": "± 85999.90213309873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3221873.0384615385,
            "unit": "ns",
            "range": "± 77755.58653652135"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3176112.2866666666,
            "unit": "ns",
            "range": "± 160102.971194748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14352816.132653061,
            "unit": "ns",
            "range": "± 1252166.5866380956"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40224.604166666664,
            "unit": "ns",
            "range": "± 6013.339617671378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198352.42682926828,
            "unit": "ns",
            "range": "± 9972.336733518314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197049.7794117647,
            "unit": "ns",
            "range": "± 9447.263302451058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172685.2,
            "unit": "ns",
            "range": "± 5157.348089928549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3246589.3076923075,
            "unit": "ns",
            "range": "± 53633.24553450129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2817293.6923076925,
            "unit": "ns",
            "range": "± 18007.53179174673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13158.703296703297,
            "unit": "ns",
            "range": "± 1436.7433892468641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64314.67021276596,
            "unit": "ns",
            "range": "± 6667.916118890935"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65969.23,
            "unit": "ns",
            "range": "± 17382.747328427096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 73736.54545454546,
            "unit": "ns",
            "range": "± 19957.064345010065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3556.021739130435,
            "unit": "ns",
            "range": "± 1023.9121590313922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16167.831460674157,
            "unit": "ns",
            "range": "± 2202.554664660371"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5561649.307692308,
            "unit": "ns",
            "range": "± 36038.259656427676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14347012.533333333,
            "unit": "ns",
            "range": "± 249561.05296982842"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36307522.416666664,
            "unit": "ns",
            "range": "± 253644.6888533996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75042366.42307693,
            "unit": "ns",
            "range": "± 367942.83047765755"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 152724983.57142857,
            "unit": "ns",
            "range": "± 757247.448457871"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 986773.3829787234,
            "unit": "ns",
            "range": "± 87267.29479120074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1907690.2575757576,
            "unit": "ns",
            "range": "± 89379.34694273368"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1662093.569892473,
            "unit": "ns",
            "range": "± 109972.28370874793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 12670526.531914894,
            "unit": "ns",
            "range": "± 945541.3440108605"
          }
        ]
      }
    ]
  }
}