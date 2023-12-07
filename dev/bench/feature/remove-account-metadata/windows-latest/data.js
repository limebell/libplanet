window.BENCHMARK_DATA = {
  "lastUpdate": 1701942946741,
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
        "date": 1701942926883,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1052044.8979591837,
            "unit": "ns",
            "range": "± 139189.1253028296"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1755768.1818181819,
            "unit": "ns",
            "range": "± 82275.71687571362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1739351,
            "unit": "ns",
            "range": "± 190029.95377656448"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7819501.639344262,
            "unit": "ns",
            "range": "± 308195.2257318962"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33762.16216216216,
            "unit": "ns",
            "range": "± 1702.1101088526193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4911600,
            "unit": "ns",
            "range": "± 23709.491770175082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12742193.333333334,
            "unit": "ns",
            "range": "± 117481.03474097223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 31275807.14285714,
            "unit": "ns",
            "range": "± 182484.0286553476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 61870946.666666664,
            "unit": "ns",
            "range": "± 503184.9118602519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128302592.3076923,
            "unit": "ns",
            "range": "± 577843.8521226106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3284740.0390625,
            "unit": "ns",
            "range": "± 7745.341605041814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1037168.9192708334,
            "unit": "ns",
            "range": "± 3619.764927339868"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 738192.40234375,
            "unit": "ns",
            "range": "± 1089.0424211374734"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1910595.0911458333,
            "unit": "ns",
            "range": "± 5425.462366239687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 617164.3179086539,
            "unit": "ns",
            "range": "± 709.6119192787769"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 558513.6944110577,
            "unit": "ns",
            "range": "± 883.7296216143469"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2183484.210526316,
            "unit": "ns",
            "range": "± 46416.31972530896"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2306359.090909091,
            "unit": "ns",
            "range": "± 51102.07021331503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2826851.8181818184,
            "unit": "ns",
            "range": "± 120343.86763817456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2938323.1578947366,
            "unit": "ns",
            "range": "± 251341.13397575708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8996584.126984127,
            "unit": "ns",
            "range": "± 325740.1151949348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 164662.06896551725,
            "unit": "ns",
            "range": "± 6652.867145698778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157438.82352941178,
            "unit": "ns",
            "range": "± 8518.859946607643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 143640,
            "unit": "ns",
            "range": "± 3696.9582091227376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2707513.3333333335,
            "unit": "ns",
            "range": "± 33697.91995841597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2357740,
            "unit": "ns",
            "range": "± 30136.968280549674"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 9406.666666666666,
            "unit": "ns",
            "range": "± 1147.0333008498171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 51129.166666666664,
            "unit": "ns",
            "range": "± 4698.351707985454"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44205.769230769234,
            "unit": "ns",
            "range": "± 1807.0030937979811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 45706.818181818184,
            "unit": "ns",
            "range": "± 5437.498483647202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2181.25,
            "unit": "ns",
            "range": "± 310.96200478684307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9243.023255813954,
            "unit": "ns",
            "range": "± 1138.7858030969462"
          }
        ]
      }
    ]
  }
}