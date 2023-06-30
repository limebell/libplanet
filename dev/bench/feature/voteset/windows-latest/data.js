window.BENCHMARK_DATA = {
  "lastUpdate": 1688103351375,
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
          "id": "4a653deb88318d440f450b17538374e1189cb874",
          "message": "chore: fix doc build",
          "timestamp": "2023-06-27T17:15:19+09:00",
          "tree_id": "c34acc6d1e8fb440eac240eaf6cb99bfab5288f4",
          "url": "https://github.com/limebell/libplanet/commit/4a653deb88318d440f450b17538374e1189cb874"
        },
        "date": 1687854590273,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1142045.3608247424,
            "unit": "ns",
            "range": "± 137578.50790595476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1895177.2151898735,
            "unit": "ns",
            "range": "± 98045.35573849991"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1789296.907216495,
            "unit": "ns",
            "range": "± 211682.00180026735"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3980793.220338983,
            "unit": "ns",
            "range": "± 175178.8552667075"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33855.555555555555,
            "unit": "ns",
            "range": "± 1926.3466680851986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4943860,
            "unit": "ns",
            "range": "± 38955.04368591349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13176800,
            "unit": "ns",
            "range": "± 123117.95157490236"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32497040,
            "unit": "ns",
            "range": "± 292379.5229296529"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66053086.666666664,
            "unit": "ns",
            "range": "± 559933.4499571823"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130192673.33333333,
            "unit": "ns",
            "range": "± 1015035.6098374554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3715634.0494791665,
            "unit": "ns",
            "range": "± 9910.35167791782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1152687.9166666667,
            "unit": "ns",
            "range": "± 4632.038677724859"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 867769.189453125,
            "unit": "ns",
            "range": "± 2353.1725609107825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1980264.4921875,
            "unit": "ns",
            "range": "± 20899.186593613114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630337.7554086539,
            "unit": "ns",
            "range": "± 1300.2923047132826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 561680.8138020834,
            "unit": "ns",
            "range": "± 1851.2842551223848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2121650,
            "unit": "ns",
            "range": "± 70818.1309723619"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2335491.304347826,
            "unit": "ns",
            "range": "± 128252.8543496379"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2889327.027027027,
            "unit": "ns",
            "range": "± 96241.04185916805"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2884715.3846153845,
            "unit": "ns",
            "range": "± 74015.60482144977"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4596590,
            "unit": "ns",
            "range": "± 132878.08931757582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180367.64705882352,
            "unit": "ns",
            "range": "± 7522.928954381915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 175176.8115942029,
            "unit": "ns",
            "range": "± 8353.814643402988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 147385.7142857143,
            "unit": "ns",
            "range": "± 3485.8140327475116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2809996.6666666665,
            "unit": "ns",
            "range": "± 34527.067366812094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2619740,
            "unit": "ns",
            "range": "± 54540.89146782681"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11253.60824742268,
            "unit": "ns",
            "range": "± 1869.82964106304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57733.68421052631,
            "unit": "ns",
            "range": "± 5785.760409508624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46516.666666666664,
            "unit": "ns",
            "range": "± 2092.4467336908083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69635.48387096774,
            "unit": "ns",
            "range": "± 11508.11287707871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3374.7368421052633,
            "unit": "ns",
            "range": "± 966.235117531765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12221.212121212122,
            "unit": "ns",
            "range": "± 2729.628543439143"
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
          "id": "c9089ae1494539bc8b038f9854830d90c70bbb65",
          "message": "chore: apply suggestions from the code review",
          "timestamp": "2023-06-27T19:07:48+09:00",
          "tree_id": "0e13e0658adafb87bb2cfbc8de4e0f51b99f5548",
          "url": "https://github.com/limebell/libplanet/commit/c9089ae1494539bc8b038f9854830d90c70bbb65"
        },
        "date": 1687861450962,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1386057,
            "unit": "ns",
            "range": "± 134008.03025463538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2420272.727272727,
            "unit": "ns",
            "range": "± 89054.02427122895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2133613.131313131,
            "unit": "ns",
            "range": "± 136814.76800468747"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5008035.714285715,
            "unit": "ns",
            "range": "± 182472.63586554903"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42432.92682926829,
            "unit": "ns",
            "range": "± 2254.545744290513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6897650,
            "unit": "ns",
            "range": "± 19330.953655491732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17882100,
            "unit": "ns",
            "range": "± 90106.24284698592"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45978733.333333336,
            "unit": "ns",
            "range": "± 243742.2633692831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90630266.66666667,
            "unit": "ns",
            "range": "± 894584.5401770642"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 179800706.66666666,
            "unit": "ns",
            "range": "± 997362.6066973311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4828413.28125,
            "unit": "ns",
            "range": "± 7114.397251327727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1519316.6536458333,
            "unit": "ns",
            "range": "± 1308.7797947661595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1140008.3203125,
            "unit": "ns",
            "range": "± 660.6884593260963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2591933.7053571427,
            "unit": "ns",
            "range": "± 24632.11698306818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822182.65625,
            "unit": "ns",
            "range": "± 6314.833074615188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735919.1336495535,
            "unit": "ns",
            "range": "± 1134.008465647642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3042228.5714285714,
            "unit": "ns",
            "range": "± 42478.61776273996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3111504.8780487804,
            "unit": "ns",
            "range": "± 108444.67241690464"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3965100,
            "unit": "ns",
            "range": "± 60321.62606751057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3929837.5,
            "unit": "ns",
            "range": "± 138708.22852396467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6330871.875,
            "unit": "ns",
            "range": "± 143002.58115057158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 253211.11111111112,
            "unit": "ns",
            "range": "± 9152.82425916678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246064.51612903227,
            "unit": "ns",
            "range": "± 7332.691565271094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228364,
            "unit": "ns",
            "range": "± 11510.284942583283"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3926150,
            "unit": "ns",
            "range": "± 13632.547951001809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3529400,
            "unit": "ns",
            "range": "± 38754.63247744118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16394.791666666668,
            "unit": "ns",
            "range": "± 1661.4749181100424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78384.81012658228,
            "unit": "ns",
            "range": "± 3944.781967508241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65443.10344827586,
            "unit": "ns",
            "range": "± 2637.3240071965497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82952.81690140846,
            "unit": "ns",
            "range": "± 3008.130498260906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4581.632653061224,
            "unit": "ns",
            "range": "± 957.2670440174785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17269.696969696968,
            "unit": "ns",
            "range": "± 2848.109095073379"
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
          "id": "798142789a68876aa5f1d580beb7a05695098f08",
          "message": "test: fill up lacking unit test",
          "timestamp": "2023-06-28T21:05:39+09:00",
          "tree_id": "3e67241fbda948a4df7952d28f35216321beb33f",
          "url": "https://github.com/limebell/libplanet/commit/798142789a68876aa5f1d580beb7a05695098f08"
        },
        "date": 1687954834668,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1426968.3673469387,
            "unit": "ns",
            "range": "± 145630.0981387601"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2548267.4418604653,
            "unit": "ns",
            "range": "± 84827.29715899305"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2225719.1919191917,
            "unit": "ns",
            "range": "± 179063.4021090031"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5070576.923076923,
            "unit": "ns",
            "range": "± 114266.15390011822"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43977.02702702703,
            "unit": "ns",
            "range": "± 2211.585143867313"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6912460,
            "unit": "ns",
            "range": "± 70004.00804851922"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17929713.333333332,
            "unit": "ns",
            "range": "± 106606.029490876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46037814.28571428,
            "unit": "ns",
            "range": "± 330856.7616103632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91467010,
            "unit": "ns",
            "range": "± 245997.8013839032"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183491686.66666666,
            "unit": "ns",
            "range": "± 530355.8412810707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4858503.580729167,
            "unit": "ns",
            "range": "± 6848.055342813892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1517972.3567708333,
            "unit": "ns",
            "range": "± 1751.3552013389115"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1132452.2330729167,
            "unit": "ns",
            "range": "± 1411.4312151024944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2528382.6302083335,
            "unit": "ns",
            "range": "± 13145.168604919989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834607.1986607143,
            "unit": "ns",
            "range": "± 1367.6847997619843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732819.08203125,
            "unit": "ns",
            "range": "± 786.9614113546174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3064061.904761905,
            "unit": "ns",
            "range": "± 136086.76362902837"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3256540,
            "unit": "ns",
            "range": "± 74526.52230123038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4025442.8571428573,
            "unit": "ns",
            "range": "± 37910.25260727305"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4120886.3636363638,
            "unit": "ns",
            "range": "± 98939.0410950796"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6487990.476190476,
            "unit": "ns",
            "range": "± 154264.09467131976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 260687.5,
            "unit": "ns",
            "range": "± 9576.736551598535"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246114.2857142857,
            "unit": "ns",
            "range": "± 9616.698140052184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226281.81818181818,
            "unit": "ns",
            "range": "± 12461.84563602909"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3870660,
            "unit": "ns",
            "range": "± 33258.034475038614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3617653.846153846,
            "unit": "ns",
            "range": "± 26761.216196348254"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20147.36842105263,
            "unit": "ns",
            "range": "± 2246.360749777537"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87252.17391304347,
            "unit": "ns",
            "range": "± 6184.267139874696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69768.66666666667,
            "unit": "ns",
            "range": "± 3164.742136856144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 90698.42105263157,
            "unit": "ns",
            "range": "± 10596.756460370461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5102.040816326531,
            "unit": "ns",
            "range": "± 920.8892600333048"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18838.144329896906,
            "unit": "ns",
            "range": "± 2033.287736799334"
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
          "id": "6fcfaaed46b6cecfdbe6d7faa8f15352106b3566",
          "message": "chore: reply pong when received published message",
          "timestamp": "2023-06-30T12:43:54+09:00",
          "tree_id": "a5d6320e2ef15810caa3f5ebebc3210684b20159",
          "url": "https://github.com/limebell/libplanet/commit/6fcfaaed46b6cecfdbe6d7faa8f15352106b3566"
        },
        "date": 1688097947304,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1646724.4897959183,
            "unit": "ns",
            "range": "± 232513.35004848198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2826140.404040404,
            "unit": "ns",
            "range": "± 432178.3524782974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2312154.1666666665,
            "unit": "ns",
            "range": "± 308911.9281459963"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6397030.85106383,
            "unit": "ns",
            "range": "± 828189.1737595953"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59476.84210526316,
            "unit": "ns",
            "range": "± 14436.231404201553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7606314,
            "unit": "ns",
            "range": "± 985629.0637542969"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20033963.636363637,
            "unit": "ns",
            "range": "± 2808518.0273027625"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56651451.515151516,
            "unit": "ns",
            "range": "± 6648315.891650776"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105401948,
            "unit": "ns",
            "range": "± 9201363.378441108"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229337236,
            "unit": "ns",
            "range": "± 19637507.82399021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5353914.619140625,
            "unit": "ns",
            "range": "± 276636.8249120899"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1682962.5130208333,
            "unit": "ns",
            "range": "± 50100.45982775582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1282579.9262152778,
            "unit": "ns",
            "range": "± 62724.334695068406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2998275.339988426,
            "unit": "ns",
            "range": "± 125198.62431269436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 956255.0211588541,
            "unit": "ns",
            "range": "± 37277.14158522148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 904465.0944010416,
            "unit": "ns",
            "range": "± 14251.306637943288"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3339745.4545454546,
            "unit": "ns",
            "range": "± 407015.82486226707"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3460271.1340206186,
            "unit": "ns",
            "range": "± 509786.3469873849"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4653377,
            "unit": "ns",
            "range": "± 576526.2032215102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4206293.939393939,
            "unit": "ns",
            "range": "± 583238.5341504762"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7301559.375,
            "unit": "ns",
            "range": "± 745184.0018027516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285536.4583333333,
            "unit": "ns",
            "range": "± 43641.1059722649"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298682.2916666667,
            "unit": "ns",
            "range": "± 58523.25492763164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 243315.7894736842,
            "unit": "ns",
            "range": "± 45086.798831713226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4291181.958762887,
            "unit": "ns",
            "range": "± 488568.696241547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3842018.3673469387,
            "unit": "ns",
            "range": "± 466854.669233302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26638.775510204083,
            "unit": "ns",
            "range": "± 9252.234421162075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 98977.8947368421,
            "unit": "ns",
            "range": "± 16831.803603357344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 94625.80645161291,
            "unit": "ns",
            "range": "± 19655.566216976757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113769.47368421052,
            "unit": "ns",
            "range": "± 26022.797181016118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5803.488372093023,
            "unit": "ns",
            "range": "± 1455.0073922932168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25242.708333333332,
            "unit": "ns",
            "range": "± 9721.936614434786"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "distinct": true,
          "id": "316d7bfe8021cfd66367657722f18e018547fdf5",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-06-30T14:19:13+09:00",
          "tree_id": "a198b1670bd95540853f0dd1d7cf019ad924fa3c",
          "url": "https://github.com/limebell/libplanet/commit/316d7bfe8021cfd66367657722f18e018547fdf5"
        },
        "date": 1688103329301,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1294720.4081632653,
            "unit": "ns",
            "range": "± 145430.2503729641"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2310594.0476190476,
            "unit": "ns",
            "range": "± 123471.87997623254"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2057468.3673469387,
            "unit": "ns",
            "range": "± 180717.26313566478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5165259.793814433,
            "unit": "ns",
            "range": "± 371729.8494482121"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36902.1978021978,
            "unit": "ns",
            "range": "± 2621.364276774724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7432283.870967742,
            "unit": "ns",
            "range": "± 220822.49145225855"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17790626.923076924,
            "unit": "ns",
            "range": "± 175820.6621998969"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 43358225,
            "unit": "ns",
            "range": "± 620427.5800167611"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 87322750,
            "unit": "ns",
            "range": "± 629944.2331850311"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 176450114.2857143,
            "unit": "ns",
            "range": "± 1032747.9891101163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4974050.721153846,
            "unit": "ns",
            "range": "± 18109.322628597794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1505065.220424107,
            "unit": "ns",
            "range": "± 9027.929552599353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1035747.8385416666,
            "unit": "ns",
            "range": "± 6000.372463866517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2545868.5677083335,
            "unit": "ns",
            "range": "± 28101.50647718689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816860.7046274039,
            "unit": "ns",
            "range": "± 3242.5009144827227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 739843.0013020834,
            "unit": "ns",
            "range": "± 4010.183458406785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2852560.3174603176,
            "unit": "ns",
            "range": "± 122455.9967573376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2954367.2413793104,
            "unit": "ns",
            "range": "± 123913.42533487409"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3747320.338983051,
            "unit": "ns",
            "range": "± 156134.07565036355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3846548.9795918367,
            "unit": "ns",
            "range": "± 241369.89291362252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6487524.242424242,
            "unit": "ns",
            "range": "± 205069.60408344137"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219465.55555555556,
            "unit": "ns",
            "range": "± 17101.19360517265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205818.27956989247,
            "unit": "ns",
            "range": "± 17938.426971876295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165368.42105263157,
            "unit": "ns",
            "range": "± 3670.7632617722174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3706762.5,
            "unit": "ns",
            "range": "± 65542.66676499108"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3465773.076923077,
            "unit": "ns",
            "range": "± 94685.71405525676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11464.835164835165,
            "unit": "ns",
            "range": "± 1666.3582132151823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62939.36170212766,
            "unit": "ns",
            "range": "± 10358.999184492868"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43740.54054054054,
            "unit": "ns",
            "range": "± 2187.0677760961275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 97083.67346938775,
            "unit": "ns",
            "range": "± 28172.841692788425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3420.408163265306,
            "unit": "ns",
            "range": "± 1355.1702585370576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9604.494382022473,
            "unit": "ns",
            "range": "± 1470.4598934563073"
          }
        ]
      }
    ]
  }
}