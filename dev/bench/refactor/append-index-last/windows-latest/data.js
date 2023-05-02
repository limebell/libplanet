window.BENCHMARK_DATA = {
  "lastUpdate": 1683022661292,
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
          "id": "d83e58848771964b85d8db23a191fc6289db89b4",
          "message": "refactor: append index at last when appending new block  [skip changelog]",
          "timestamp": "2023-05-02T18:54:04+09:00",
          "tree_id": "d56012325562e1a076ddb8c3ac9c06c670ad82b7",
          "url": "https://github.com/limebell/libplanet/commit/d83e58848771964b85d8db23a191fc6289db89b4"
        },
        "date": 1683022642645,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1559818.75,
            "unit": "ns",
            "range": "± 203296.51629940362"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3093850,
            "unit": "ns",
            "range": "± 302043.13134300767"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2536730.9278350514,
            "unit": "ns",
            "range": "± 242994.734322588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6756839.361702127,
            "unit": "ns",
            "range": "± 512775.5733740158"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64196.875,
            "unit": "ns",
            "range": "± 16822.916407310844"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8203486.458333333,
            "unit": "ns",
            "range": "± 565254.7840286931"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22282978.125,
            "unit": "ns",
            "range": "± 2017553.1526659278"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59603356.12244898,
            "unit": "ns",
            "range": "± 3687010.732959986"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116953722.68041237,
            "unit": "ns",
            "range": "± 7475032.9440816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235035674.62686568,
            "unit": "ns",
            "range": "± 11077709.93973447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5706695.479910715,
            "unit": "ns",
            "range": "± 100021.79761736072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1834470.3125,
            "unit": "ns",
            "range": "± 31799.528726648427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1382282.3133680555,
            "unit": "ns",
            "range": "± 28891.47799403466"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3015511.9466145835,
            "unit": "ns",
            "range": "± 20318.832961259304"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1008284.1796875,
            "unit": "ns",
            "range": "± 28338.50034913604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 974478.4840303309,
            "unit": "ns",
            "range": "± 19755.413780123414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3285735.4838709678,
            "unit": "ns",
            "range": "± 291249.64140495233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3605601.063829787,
            "unit": "ns",
            "range": "± 343541.02930517687"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4476897.872340426,
            "unit": "ns",
            "range": "± 383923.39176991105"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4777632.653061224,
            "unit": "ns",
            "range": "± 420001.7670005811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8432759.375,
            "unit": "ns",
            "range": "± 869845.4487742574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 389272.0430107527,
            "unit": "ns",
            "range": "± 48713.12510748268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 321021.4285714286,
            "unit": "ns",
            "range": "± 44535.39829204324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 272068.81720430107,
            "unit": "ns",
            "range": "± 43201.53222548092"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6302341.304347826,
            "unit": "ns",
            "range": "± 435346.3817712936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4565533.673469388,
            "unit": "ns",
            "range": "± 444333.80712407734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24298.979591836734,
            "unit": "ns",
            "range": "± 9091.374578771793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 104436.17021276595,
            "unit": "ns",
            "range": "± 24865.153969947798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87055.31914893616,
            "unit": "ns",
            "range": "± 16958.76952716627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 230226.31578947368,
            "unit": "ns",
            "range": "± 38959.155399901625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5719.540229885058,
            "unit": "ns",
            "range": "± 1240.0149174327544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28439.79591836735,
            "unit": "ns",
            "range": "± 10472.770188533637"
          }
        ]
      }
    ]
  }
}