window.BENCHMARK_DATA = {
  "lastUpdate": 1680072250901,
  "repoUrl": "https://github.com/limebell/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "3bdf5893b11c5c3d825a23e8c3a9a1d70e04d780",
          "message": "docs: port changelog",
          "timestamp": "2023-03-29T15:26:54+09:00",
          "tree_id": "854dfc97e54aae3f4aacf7783b5388ed1462fb1e",
          "url": "https://github.com/limebell/libplanet/commit/3bdf5893b11c5c3d825a23e8c3a9a1d70e04d780"
        },
        "date": 1680072241002,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8753275.578947369,
            "unit": "ns",
            "range": "± 380509.60334070167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 21215561.42105263,
            "unit": "ns",
            "range": "± 464551.0844828006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 52627831.4137931,
            "unit": "ns",
            "range": "± 2188187.9333702647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 100712070.73529412,
            "unit": "ns",
            "range": "± 1552325.8941897287"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 215712861.77272728,
            "unit": "ns",
            "range": "± 5208518.548481982"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56388.86315789474,
            "unit": "ns",
            "range": "± 7389.786286044777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 214913.51041666666,
            "unit": "ns",
            "range": "± 24979.843514740893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 216898.63541666666,
            "unit": "ns",
            "range": "± 18991.919412224153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 187440.5652173913,
            "unit": "ns",
            "range": "± 13706.299793476976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12449768.24074074,
            "unit": "ns",
            "range": "± 280099.4571711699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9929699.785714285,
            "unit": "ns",
            "range": "± 285905.122332317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17409.827586206895,
            "unit": "ns",
            "range": "± 2486.6414269465745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52408.42857142857,
            "unit": "ns",
            "range": "± 6297.541728753915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51273.04347826087,
            "unit": "ns",
            "range": "± 6316.756952241654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120501.80412371134,
            "unit": "ns",
            "range": "± 15230.396171280296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7118.521276595745,
            "unit": "ns",
            "range": "± 964.4822331370663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16465.70731707317,
            "unit": "ns",
            "range": "± 1943.8250091933564"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1657591.3505154639,
            "unit": "ns",
            "range": "± 221267.7513216944"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2774448.3387096776,
            "unit": "ns",
            "range": "± 122465.16507073115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2376769.8829787234,
            "unit": "ns",
            "range": "± 181856.6244308817"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5878690.2727272725,
            "unit": "ns",
            "range": "± 215384.81685960322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3401097.12371134,
            "unit": "ns",
            "range": "± 204799.99622254728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5047297.108695652,
            "unit": "ns",
            "range": "± 191818.0773271589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 24798512.208333332,
            "unit": "ns",
            "range": "± 634754.0130212359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6340234.925925926,
            "unit": "ns",
            "range": "± 330730.52438049077"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 28596670.170212764,
            "unit": "ns",
            "range": "± 1105476.666972203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6381183.438058035,
            "unit": "ns",
            "range": "± 47629.74177055928"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1812633.6309988839,
            "unit": "ns",
            "range": "± 17963.739581590333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1224254.4934430805,
            "unit": "ns",
            "range": "± 10145.803526023747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2690809.4001116073,
            "unit": "ns",
            "range": "± 35889.31780686395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 776785.4968405331,
            "unit": "ns",
            "range": "± 15367.785799111582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 726049.6964983259,
            "unit": "ns",
            "range": "± 11051.386197695785"
          }
        ]
      }
    ]
  }
}