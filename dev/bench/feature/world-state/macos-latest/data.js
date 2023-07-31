window.BENCHMARK_DATA = {
  "lastUpdate": 1690797554886,
  "repoUrl": "https://github.com/limebell/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e74fb5a87684d8831b8ca42f80318bfced1494ed",
          "message": "Merge pull request #3342 from planetarium/fix/scrypt\n\nUse @noble/hashes/scrypt instead of scrypt-js",
          "timestamp": "2023-07-31T14:02:49+09:00",
          "tree_id": "d8e2fe6ccbed1438294efe071b5c6627b80c49db",
          "url": "https://github.com/limebell/libplanet/commit/e74fb5a87684d8831b8ca42f80318bfced1494ed"
        },
        "date": 1690797547664,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8977177.145833334,
            "unit": "ns",
            "range": "± 705778.1016277743"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20341881.53846154,
            "unit": "ns",
            "range": "± 303347.67788123235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52291429.86,
            "unit": "ns",
            "range": "± 2086010.1785047818"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106240875.93548387,
            "unit": "ns",
            "range": "± 2617349.558833235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208991492.14285713,
            "unit": "ns",
            "range": "± 2988834.9191071247"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63198.651685393255,
            "unit": "ns",
            "range": "± 7135.907445481625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302639.1458333333,
            "unit": "ns",
            "range": "± 10949.194685221188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290845.2075471698,
            "unit": "ns",
            "range": "± 11268.798248940593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 305589.38095238095,
            "unit": "ns",
            "range": "± 7281.680928715501"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4124001.2352941176,
            "unit": "ns",
            "range": "± 82887.25209473514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3825969.153846154,
            "unit": "ns",
            "range": "± 55497.3963020581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17455.422222222223,
            "unit": "ns",
            "range": "± 1848.4377246671131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100163.04301075269,
            "unit": "ns",
            "range": "± 15079.776209931242"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107193.34782608696,
            "unit": "ns",
            "range": "± 21093.11716834872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103400.9247311828,
            "unit": "ns",
            "range": "± 15242.56340791381"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6178.122222222222,
            "unit": "ns",
            "range": "± 1121.8352622735654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17489.808988764045,
            "unit": "ns",
            "range": "± 1691.2078784407618"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1530968.6082474226,
            "unit": "ns",
            "range": "± 159465.12266640502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2814507.019230769,
            "unit": "ns",
            "range": "± 114840.21742753514"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2127498.0729166665,
            "unit": "ns",
            "range": "± 175758.6214107737"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5703138.525,
            "unit": "ns",
            "range": "± 200731.26475336755"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3528792.89,
            "unit": "ns",
            "range": "± 289233.3930877771"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3448496.0361445784,
            "unit": "ns",
            "range": "± 183770.3268896609"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4784916.684210527,
            "unit": "ns",
            "range": "± 384174.6757515572"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4005757.26,
            "unit": "ns",
            "range": "± 303673.3505668839"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7272829.205479452,
            "unit": "ns",
            "range": "± 357579.0730198303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6986787.92578125,
            "unit": "ns",
            "range": "± 133665.0141722395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2069073.7541666667,
            "unit": "ns",
            "range": "± 38598.716331325806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343667.6157670454,
            "unit": "ns",
            "range": "± 31111.4430019761"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2967367.2502893517,
            "unit": "ns",
            "range": "± 125167.88330744651"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 881573.1141113281,
            "unit": "ns",
            "range": "± 19340.559434013714"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 810823.6764973958,
            "unit": "ns",
            "range": "± 13495.946341101017"
          }
        ]
      }
    ]
  }
}