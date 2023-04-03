window.BENCHMARK_DATA = {
  "lastUpdate": 1680517020675,
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
          "id": "10af4f3f30a09a30b62fe11249fc8dccd5994997",
          "message": "chore: prepare 0.53.4",
          "timestamp": "2023-04-03T18:53:01+09:00",
          "tree_id": "4792564cb097fb586ec466bed1d1f27d97fdb7bc",
          "url": "https://github.com/limebell/libplanet/commit/10af4f3f30a09a30b62fe11249fc8dccd5994997"
        },
        "date": 1680517006638,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8388994.793333333,
            "unit": "ns",
            "range": "± 378271.9435955943"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26055669.58163265,
            "unit": "ns",
            "range": "± 5502266.898402409"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52249966.884615384,
            "unit": "ns",
            "range": "± 1430347.5227755266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111108759.97619048,
            "unit": "ns",
            "range": "± 5944685.52980968"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220580624.5,
            "unit": "ns",
            "range": "± 6295269.389458353"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75124.21348314607,
            "unit": "ns",
            "range": "± 10129.636920792811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237481.17777777778,
            "unit": "ns",
            "range": "± 26769.56849831572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253084.2584269663,
            "unit": "ns",
            "range": "± 29214.79733586455"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228675.06043956045,
            "unit": "ns",
            "range": "± 15285.151510322972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13888917.4375,
            "unit": "ns",
            "range": "± 814397.7942308536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11120466.958762886,
            "unit": "ns",
            "range": "± 829316.7540076403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29433.317204301075,
            "unit": "ns",
            "range": "± 4617.403500430491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79756.87362637362,
            "unit": "ns",
            "range": "± 18492.605450496725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64360.129411764705,
            "unit": "ns",
            "range": "± 6055.955763481409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 137180.26041666666,
            "unit": "ns",
            "range": "± 25128.314238071336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8916.329670329671,
            "unit": "ns",
            "range": "± 1674.0907718317164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26285.967391304348,
            "unit": "ns",
            "range": "± 4732.525591209461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1656598.0714285714,
            "unit": "ns",
            "range": "± 198023.2465584052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2880369.702898551,
            "unit": "ns",
            "range": "± 138661.4776683276"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2470063.9574468085,
            "unit": "ns",
            "range": "± 205591.84268768688"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6583610.60989011,
            "unit": "ns",
            "range": "± 414931.1462320908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3582866.293814433,
            "unit": "ns",
            "range": "± 264997.0703246444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5439743.131578947,
            "unit": "ns",
            "range": "± 232443.1116198597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25929457.26470588,
            "unit": "ns",
            "range": "± 1203056.671134259"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6890081.489247312,
            "unit": "ns",
            "range": "± 738245.1160556437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 31215032.382978722,
            "unit": "ns",
            "range": "± 1875824.677475117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7637732.725961538,
            "unit": "ns",
            "range": "± 201066.54880753355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2297891.847592213,
            "unit": "ns",
            "range": "± 103053.25837269134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1441251.7848011365,
            "unit": "ns",
            "range": "± 34022.100487131655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3501983.8517235825,
            "unit": "ns",
            "range": "± 219388.68406903688"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 958743.8040364584,
            "unit": "ns",
            "range": "± 43513.98977688545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 870618.2558696546,
            "unit": "ns",
            "range": "± 49878.024264273554"
          }
        ]
      }
    ]
  }
}