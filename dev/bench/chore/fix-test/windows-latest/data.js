window.BENCHMARK_DATA = {
  "lastUpdate": 1688976657660,
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
          "id": "38f8ac1b6007597768f85fc2e0d84d7385dc43d2",
          "message": "docs: update changelog",
          "timestamp": "2023-07-10T16:51:06+09:00",
          "tree_id": "09f44e46d42374c61773950b700dba3e238e29cc",
          "url": "https://github.com/limebell/libplanet/commit/38f8ac1b6007597768f85fc2e0d84d7385dc43d2"
        },
        "date": 1688976643545,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1712497.9166666667,
            "unit": "ns",
            "range": "± 205756.9772324247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3290998.936170213,
            "unit": "ns",
            "range": "± 317373.2020093928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2317223.711340206,
            "unit": "ns",
            "range": "± 173992.236281055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6406173.958333333,
            "unit": "ns",
            "range": "± 468883.72237066063"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75723.15789473684,
            "unit": "ns",
            "range": "± 12576.00258370848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9872613.684210526,
            "unit": "ns",
            "range": "± 734975.5828352"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25087082.352941178,
            "unit": "ns",
            "range": "± 479176.5870158074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66282414.705882356,
            "unit": "ns",
            "range": "± 1991358.5884915357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134214064.70588236,
            "unit": "ns",
            "range": "± 2748279.0303527173"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 271362550,
            "unit": "ns",
            "range": "± 5316668.579853365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6712330.924479167,
            "unit": "ns",
            "range": "± 79315.25558739681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2005150.9331597222,
            "unit": "ns",
            "range": "± 41093.549079285716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1514160.6901041667,
            "unit": "ns",
            "range": "± 21683.733493271808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3399792.4479166665,
            "unit": "ns",
            "range": "± 61169.05363066986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1113813.90625,
            "unit": "ns",
            "range": "± 24676.938189000615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1021691.8229166666,
            "unit": "ns",
            "range": "± 13393.0958296098"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4176938.709677419,
            "unit": "ns",
            "range": "± 292954.4515094224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4353397.894736842,
            "unit": "ns",
            "range": "± 304548.12776173867"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5372086.170212766,
            "unit": "ns",
            "range": "± 314110.9517698072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4831309.89010989,
            "unit": "ns",
            "range": "± 296580.62574579206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8708437.777777778,
            "unit": "ns",
            "range": "± 662385.4627431321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 372971.27659574465,
            "unit": "ns",
            "range": "± 34444.28139667636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 354897.9797979798,
            "unit": "ns",
            "range": "± 42099.90542380666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 326114.1304347826,
            "unit": "ns",
            "range": "± 30650.89705774267"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5179053.191489362,
            "unit": "ns",
            "range": "± 293098.61700591515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4810825,
            "unit": "ns",
            "range": "± 281665.78262968967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30955.102040816328,
            "unit": "ns",
            "range": "± 10419.629793856724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 122407.29166666667,
            "unit": "ns",
            "range": "± 23104.662299114872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124081.44329896907,
            "unit": "ns",
            "range": "± 23069.841107569908"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 144870.61855670103,
            "unit": "ns",
            "range": "± 20009.54427550518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8844.70588235294,
            "unit": "ns",
            "range": "± 2180.5692726765583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 30477.41935483871,
            "unit": "ns",
            "range": "± 7085.075082174931"
          }
        ]
      }
    ]
  }
}