window.BENCHMARK_DATA = {
  "lastUpdate": 1704274961107,
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
      }
    ]
  }
}