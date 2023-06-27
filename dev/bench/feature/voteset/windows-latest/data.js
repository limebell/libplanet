window.BENCHMARK_DATA = {
  "lastUpdate": 1687852267198,
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
          "id": "e102b155f5f07a4d6923f5284d44f8948261df96",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-06-27T16:33:48+09:00",
          "tree_id": "339cafe715ac8791e7a8a18c68547ddcc65a1735",
          "url": "https://github.com/limebell/libplanet/commit/e102b155f5f07a4d6923f5284d44f8948261df96"
        },
        "date": 1687852254161,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1439798.9795918367,
            "unit": "ns",
            "range": "± 137432.3552406393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2522432.8125,
            "unit": "ns",
            "range": "± 115483.80434060941"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2169005.4054054054,
            "unit": "ns",
            "range": "± 108565.36588162671"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5230236,
            "unit": "ns",
            "range": "± 204534.13941871686"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47428.9156626506,
            "unit": "ns",
            "range": "± 2477.2393230231464"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7253050,
            "unit": "ns",
            "range": "± 43476.42597298697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20054323.529411763,
            "unit": "ns",
            "range": "± 396373.5383596699"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51559447.82608695,
            "unit": "ns",
            "range": "± 1294902.8481878706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97831730.76923077,
            "unit": "ns",
            "range": "± 1219153.56592502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198862471.42857143,
            "unit": "ns",
            "range": "± 2402189.764626168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4959720.78125,
            "unit": "ns",
            "range": "± 28250.680909256593"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1509299.86328125,
            "unit": "ns",
            "range": "± 8748.718589281112"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1186968.3984375,
            "unit": "ns",
            "range": "± 6336.182753669956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2650757.5520833335,
            "unit": "ns",
            "range": "± 8180.2173258480725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 847561.9070870535,
            "unit": "ns",
            "range": "± 2619.2490707303514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783471.953125,
            "unit": "ns",
            "range": "± 2570.8049040336296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3203975.757575758,
            "unit": "ns",
            "range": "± 100335.21948418408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3360976.5625,
            "unit": "ns",
            "range": "± 155599.73144607697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4130827.5862068967,
            "unit": "ns",
            "range": "± 118290.28729767087"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4329389.130434782,
            "unit": "ns",
            "range": "± 104671.61957600557"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6637853.846153846,
            "unit": "ns",
            "range": "± 232263.33154888276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261114,
            "unit": "ns",
            "range": "± 10378.9231087796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249077.58620689655,
            "unit": "ns",
            "range": "± 10818.292551068685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 230392.75362318842,
            "unit": "ns",
            "range": "± 11034.029167035676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4019416.6666666665,
            "unit": "ns",
            "range": "± 85016.45688439663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3752100,
            "unit": "ns",
            "range": "± 76857.0177437987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18000.515463917527,
            "unit": "ns",
            "range": "± 2031.3236505283633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83459.77011494253,
            "unit": "ns",
            "range": "± 4581.77531780176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74860.52631578948,
            "unit": "ns",
            "range": "± 6406.204998749435"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96746.9387755102,
            "unit": "ns",
            "range": "± 13811.667367872318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4930.6122448979595,
            "unit": "ns",
            "range": "± 773.8853858059218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17315.625,
            "unit": "ns",
            "range": "± 1918.2408676482185"
          }
        ]
      }
    ]
  }
}