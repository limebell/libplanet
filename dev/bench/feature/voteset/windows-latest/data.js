window.BENCHMARK_DATA = {
  "lastUpdate": 1687853777763,
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
          "id": "0c62f6b3f70f49aa968d5199b11775e95bd1093e",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-06-27T16:59:05+09:00",
          "tree_id": "fe01a0e48cb493795875a583b8623dcd2261ecf0",
          "url": "https://github.com/limebell/libplanet/commit/0c62f6b3f70f49aa968d5199b11775e95bd1093e"
        },
        "date": 1687853764759,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1380885.5670103093,
            "unit": "ns",
            "range": "± 102665.76128154363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2637888.888888889,
            "unit": "ns",
            "range": "± 137778.36550053858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2246326.6666666665,
            "unit": "ns",
            "range": "± 124118.78036965009"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5238942.55319149,
            "unit": "ns",
            "range": "± 204114.35493122888"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47598.82352941176,
            "unit": "ns",
            "range": "± 2585.0989719308373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7103146.153846154,
            "unit": "ns",
            "range": "± 17298.48815092499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19281209.375,
            "unit": "ns",
            "range": "± 593502.063131656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47417420,
            "unit": "ns",
            "range": "± 800977.4361009536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94421553.33333333,
            "unit": "ns",
            "range": "± 1361163.0005606376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196195021.42857143,
            "unit": "ns",
            "range": "± 3260229.7128077843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4812429.583333333,
            "unit": "ns",
            "range": "± 46615.95560315923"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1542189.58984375,
            "unit": "ns",
            "range": "± 10557.838397022831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1212105.9988839286,
            "unit": "ns",
            "range": "± 7430.044134794096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2657422.5,
            "unit": "ns",
            "range": "± 11630.933084958948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 845132.2916666666,
            "unit": "ns",
            "range": "± 2892.489748056329"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 782373.9322916666,
            "unit": "ns",
            "range": "± 3183.5587582010567"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3124513.5135135134,
            "unit": "ns",
            "range": "± 104598.16272595634"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3307913.0434782607,
            "unit": "ns",
            "range": "± 72078.96114898026"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3999317.9487179485,
            "unit": "ns",
            "range": "± 134193.038237723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4029791.6666666665,
            "unit": "ns",
            "range": "± 199149.45392845038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6751729.661016949,
            "unit": "ns",
            "range": "± 297403.1379722567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 251080,
            "unit": "ns",
            "range": "± 11211.431817115534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 250697.16981132075,
            "unit": "ns",
            "range": "± 10302.73682410472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210561.53846153847,
            "unit": "ns",
            "range": "± 3352.744761519647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3862313.3333333335,
            "unit": "ns",
            "range": "± 45131.425014168606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3537963.1578947366,
            "unit": "ns",
            "range": "± 75881.14397988413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17015.05376344086,
            "unit": "ns",
            "range": "± 1117.7370613800106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87289.79591836735,
            "unit": "ns",
            "range": "± 5883.026253219141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70542.85714285714,
            "unit": "ns",
            "range": "± 2325.3444671180014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86611.45833333333,
            "unit": "ns",
            "range": "± 13229.415945986799"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4420,
            "unit": "ns",
            "range": "± 646.8940485986554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17071.57894736842,
            "unit": "ns",
            "range": "± 1540.562425475227"
          }
        ]
      }
    ]
  }
}