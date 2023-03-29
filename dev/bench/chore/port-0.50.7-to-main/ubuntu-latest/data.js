window.BENCHMARK_DATA = {
  "lastUpdate": 1680074616806,
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
          "id": "02329f5313b1f2b9f6ebd3b25875a925b2a8d4c9",
          "message": "docs: update changelog",
          "timestamp": "2023-03-29T16:05:25+09:00",
          "tree_id": "7c7d9dbc5dbc68d2a7a569c855bc984be3575069",
          "url": "https://github.com/limebell/libplanet/commit/02329f5313b1f2b9f6ebd3b25875a925b2a8d4c9"
        },
        "date": 1680074612510,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3991889.712121212,
            "unit": "ns",
            "range": "± 185950.71111244382"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6408640.666666667,
            "unit": "ns",
            "range": "± 212763.85147052453"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 31080566.8313253,
            "unit": "ns",
            "range": "± 1583379.9290919458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7666972.181818182,
            "unit": "ns",
            "range": "± 391485.23670428985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 34388236.071428575,
            "unit": "ns",
            "range": "± 1149529.4350701093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9976835.487179488,
            "unit": "ns",
            "range": "± 348342.1667403498"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25770749.153846152,
            "unit": "ns",
            "range": "± 998687.6487169449"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64342349.35294118,
            "unit": "ns",
            "range": "± 2041722.4648398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129943898.34615384,
            "unit": "ns",
            "range": "± 5292820.444714474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268507664.8695652,
            "unit": "ns",
            "range": "± 6766265.207643842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1684747.28125,
            "unit": "ns",
            "range": "± 117330.73145041108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3317198.845238095,
            "unit": "ns",
            "range": "± 177687.26068861535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2639137.8666666667,
            "unit": "ns",
            "range": "± 133095.58331558984"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6450122.94117647,
            "unit": "ns",
            "range": "± 305350.50185421883"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56433.629213483146,
            "unit": "ns",
            "range": "± 3555.2041412491426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6927422.274939904,
            "unit": "ns",
            "range": "± 66411.55768100295"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2268006.513411458,
            "unit": "ns",
            "range": "± 25414.984332601052"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1587186.8714192708,
            "unit": "ns",
            "range": "± 6446.6922533153465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3101172.6885416666,
            "unit": "ns",
            "range": "± 37156.69391438716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 973279.3642578125,
            "unit": "ns",
            "range": "± 11160.576560836138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 924604.7726236979,
            "unit": "ns",
            "range": "± 12001.502456519358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 229953.28235294117,
            "unit": "ns",
            "range": "± 13269.925067621149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 226128.10638297873,
            "unit": "ns",
            "range": "± 13309.584958724567"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206605.4347826087,
            "unit": "ns",
            "range": "± 11841.178148341274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 14117159.285714285,
            "unit": "ns",
            "range": "± 393723.3143446143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11657473.52631579,
            "unit": "ns",
            "range": "± 398096.8298081129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24671.2688172043,
            "unit": "ns",
            "range": "± 2272.3915487575837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62383.22727272727,
            "unit": "ns",
            "range": "± 4522.136436216116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49312.10344827586,
            "unit": "ns",
            "range": "± 3768.8475323011085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113589.94791666667,
            "unit": "ns",
            "range": "± 16845.28802107724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6969.239583333333,
            "unit": "ns",
            "range": "± 971.6985209826272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23081.159574468085,
            "unit": "ns",
            "range": "± 2024.895676607539"
          }
        ]
      }
    ]
  }
}