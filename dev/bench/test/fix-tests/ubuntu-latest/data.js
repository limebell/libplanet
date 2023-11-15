window.BENCHMARK_DATA = {
  "lastUpdate": 1700044210916,
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
          "id": "33e84fa3d8b3aa6544f34227330b0a4868114be1",
          "message": "test: fix tests  [skip changelog]",
          "timestamp": "2023-11-15T19:19:08+09:00",
          "tree_id": "56764ebd85f0dd721d7386e4de37a4a5041d7a86",
          "url": "https://github.com/limebell/libplanet/commit/33e84fa3d8b3aa6544f34227330b0a4868114be1"
        },
        "date": 1700044207553,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5866748.8,
            "unit": "ns",
            "range": "± 109700.0485253181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 15046625,
            "unit": "ns",
            "range": "± 161165.59024565626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37266852.928571425,
            "unit": "ns",
            "range": "± 119833.16676463431"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76396224.73333333,
            "unit": "ns",
            "range": "± 570201.4305945459"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 148624756.03333333,
            "unit": "ns",
            "range": "± 664646.8822715312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1054642.65625,
            "unit": "ns",
            "range": "± 90895.33922795382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2062790.2323943663,
            "unit": "ns",
            "range": "± 100207.99425836497"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1728749.0408163266,
            "unit": "ns",
            "range": "± 181442.61841065568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6619937.130434782,
            "unit": "ns",
            "range": "± 253107.05378981514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2555407.4,
            "unit": "ns",
            "range": "± 48669.77055345871"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2635312.170886076,
            "unit": "ns",
            "range": "± 126136.50887235494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3365046.25,
            "unit": "ns",
            "range": "± 70294.14274459408"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3226423.73943662,
            "unit": "ns",
            "range": "± 156053.22077213318"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7616914.55882353,
            "unit": "ns",
            "range": "± 180257.1906056087"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43415.79347826087,
            "unit": "ns",
            "range": "± 6431.903521736317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3703461.0005208333,
            "unit": "ns",
            "range": "± 53632.07520198597"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1247441.0598958333,
            "unit": "ns",
            "range": "± 3503.9772366682932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770835.0883789062,
            "unit": "ns",
            "range": "± 3272.129918117848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1926231.6888950893,
            "unit": "ns",
            "range": "± 8392.215259743602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 608784.8389973958,
            "unit": "ns",
            "range": "± 3619.2788371314423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582148.1354817708,
            "unit": "ns",
            "range": "± 3945.767474371856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246888.63636363635,
            "unit": "ns",
            "range": "± 6030.402231672244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222916.68539325843,
            "unit": "ns",
            "range": "± 15165.11145509166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 180428.66666666666,
            "unit": "ns",
            "range": "± 6518.733019449545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3116139.5714285714,
            "unit": "ns",
            "range": "± 28003.644682335645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2877190.714285714,
            "unit": "ns",
            "range": "± 25663.42020322842"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24901.76530612245,
            "unit": "ns",
            "range": "± 4039.731486817911"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105489.48734177215,
            "unit": "ns",
            "range": "± 5496.3469954788625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92476.82352941176,
            "unit": "ns",
            "range": "± 1781.353180706107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99673.98979591837,
            "unit": "ns",
            "range": "± 10798.173074282653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6998.916666666667,
            "unit": "ns",
            "range": "± 919.0987423806074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19692.918367346938,
            "unit": "ns",
            "range": "± 5028.132792072094"
          }
        ]
      }
    ]
  }
}