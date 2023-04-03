window.BENCHMARK_DATA = {
  "lastUpdate": 1680490681469,
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
          "id": "04e978d13bd8174a153245c2ae549630ef19a462",
          "message": "docs: update changelog",
          "timestamp": "2023-04-03T11:41:59+09:00",
          "tree_id": "f23b154f71dffce638e7a492ed325f533d089930",
          "url": "https://github.com/limebell/libplanet/commit/04e978d13bd8174a153245c2ae549630ef19a462"
        },
        "date": 1680490677425,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4227551.866666666,
            "unit": "ns",
            "range": "± 108752.33915668468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4469885.8,
            "unit": "ns",
            "range": "± 156480.0487843377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5007573,
            "unit": "ns",
            "range": "± 75450.4594807556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5522705.333333333,
            "unit": "ns",
            "range": "± 190942.66710032613"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9155503.47826087,
            "unit": "ns",
            "range": "± 222924.8891732308"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10800967.6,
            "unit": "ns",
            "range": "± 161736.7817812987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27961680.07142857,
            "unit": "ns",
            "range": "± 221302.6830444828"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68814267.4,
            "unit": "ns",
            "range": "± 274078.4543519819"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137615533.93333334,
            "unit": "ns",
            "range": "± 466990.42420168174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 260585392.7857143,
            "unit": "ns",
            "range": "± 1422218.58883913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1734622.505376344,
            "unit": "ns",
            "range": "± 105466.06973135375"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3295912.411764706,
            "unit": "ns",
            "range": "± 133857.3252252078"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2772082.7808219176,
            "unit": "ns",
            "range": "± 136588.11030605508"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6891468.333333333,
            "unit": "ns",
            "range": "± 250686.44499976042"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59737.31460674157,
            "unit": "ns",
            "range": "± 3329.894045528072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6854079.224330357,
            "unit": "ns",
            "range": "± 86316.78487876622"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2185351.1552083334,
            "unit": "ns",
            "range": "± 27191.339245277573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1583175.7041666666,
            "unit": "ns",
            "range": "± 12669.207219126647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3118276.61171875,
            "unit": "ns",
            "range": "± 4486.116398856545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 973510.05390625,
            "unit": "ns",
            "range": "± 11074.754702031065"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 911627.8623697917,
            "unit": "ns",
            "range": "± 6806.727396840511"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 411818.0857142857,
            "unit": "ns",
            "range": "± 13344.950436007464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330401.34146341466,
            "unit": "ns",
            "range": "± 10873.823974595496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284745.04545454547,
            "unit": "ns",
            "range": "± 10585.148085779709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6929425.071428572,
            "unit": "ns",
            "range": "± 57354.03398925536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4886891.5,
            "unit": "ns",
            "range": "± 86160.05939283539"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26761.417582417584,
            "unit": "ns",
            "range": "± 1848.6341508496005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111828.58947368422,
            "unit": "ns",
            "range": "± 7809.4297929731965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103324.8125,
            "unit": "ns",
            "range": "± 6743.247945069514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 231551.3469387755,
            "unit": "ns",
            "range": "± 19204.312563943815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7507.968421052631,
            "unit": "ns",
            "range": "± 877.8214384005244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23602,
            "unit": "ns",
            "range": "± 2083.7735529035344"
          }
        ]
      }
    ]
  }
}