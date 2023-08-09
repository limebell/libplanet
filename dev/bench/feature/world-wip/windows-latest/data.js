window.BENCHMARK_DATA = {
  "lastUpdate": 1691550099938,
  "repoUrl": "https://github.com/limebell/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "f6f3d48aed11a3c3883db57b87cd134dee39353d",
          "message": "fix test",
          "timestamp": "2023-08-09T11:46:58+09:00",
          "tree_id": "85a1d0e44b14a0b54b7bca7e6116d3602dc9bc35",
          "url": "https://github.com/limebell/libplanet/commit/f6f3d48aed11a3c3883db57b87cd134dee39353d"
        },
        "date": 1691550073983,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1348572.9166666667,
            "unit": "ns",
            "range": "± 109108.02805058718"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2436935.294117647,
            "unit": "ns",
            "range": "± 76413.40863754111"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1819929.1666666667,
            "unit": "ns",
            "range": "± 126921.4161487059"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4885834.782608695,
            "unit": "ns",
            "range": "± 187405.8435794612"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42350,
            "unit": "ns",
            "range": "± 2083.266665599966"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7169464.285714285,
            "unit": "ns",
            "range": "± 44187.79168578052"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17903800,
            "unit": "ns",
            "range": "± 132486.77022900924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46711743.333333336,
            "unit": "ns",
            "range": "± 152120.0769442476"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98637406.66666667,
            "unit": "ns",
            "range": "± 1562581.2653000378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 184016853.33333334,
            "unit": "ns",
            "range": "± 1856529.0159198644"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4898669.170673077,
            "unit": "ns",
            "range": "± 4992.166049357531"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1562099.135044643,
            "unit": "ns",
            "range": "± 3267.9252316420702"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1155587.8645833333,
            "unit": "ns",
            "range": "± 1597.5288907815907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2544942.8125,
            "unit": "ns",
            "range": "± 3427.5421821118775"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807205.1688058035,
            "unit": "ns",
            "range": "± 706.6831507855538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723090.9249441965,
            "unit": "ns",
            "range": "± 986.9756243979156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2956035.294117647,
            "unit": "ns",
            "range": "± 83653.29562003336"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3132586.111111111,
            "unit": "ns",
            "range": "± 67458.85583197161"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4011662.5,
            "unit": "ns",
            "range": "± 124657.63372197184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3523707.1428571427,
            "unit": "ns",
            "range": "± 97356.99076488371"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6180048,
            "unit": "ns",
            "range": "± 222713.40464409246"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254684.84848484848,
            "unit": "ns",
            "range": "± 8034.033903188096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 235867.5,
            "unit": "ns",
            "range": "± 8067.865586895033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 209602.7027027027,
            "unit": "ns",
            "range": "± 7035.761290502752"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3833160,
            "unit": "ns",
            "range": "± 42880.361805509856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3445064.285714286,
            "unit": "ns",
            "range": "± 38585.42186136858"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16988.297872340427,
            "unit": "ns",
            "range": "± 1553.4115340723376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79569.73684210527,
            "unit": "ns",
            "range": "± 4055.022227208859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64757.692307692305,
            "unit": "ns",
            "range": "± 1762.3105462824824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79653.40909090909,
            "unit": "ns",
            "range": "± 9901.398355481886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3950,
            "unit": "ns",
            "range": "± 600.5260851514848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18593.877551020407,
            "unit": "ns",
            "range": "± 2000.5059322210654"
          }
        ]
      }
    ]
  }
}