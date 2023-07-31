window.BENCHMARK_DATA = {
  "lastUpdate": 1690797263064,
  "repoUrl": "https://github.com/limebell/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d7d58f7ce685aa62bdf83862001ebd213454d03",
          "message": "Merge pull request #3291 from greymistcube/refactor/tx-success\n\n🧹 Removed ActionsLogsList from TxExecution",
          "timestamp": "2023-07-12T11:06:26+09:00",
          "tree_id": "cb1787efb83c661ea8d11c9c0f014cbbcfd2c083",
          "url": "https://github.com/limebell/libplanet/commit/9d7d58f7ce685aa62bdf83862001ebd213454d03"
        },
        "date": 1689130329997,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277445.9761904762,
            "unit": "ns",
            "range": "± 10032.13391080369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 270928.25,
            "unit": "ns",
            "range": "± 10139.547910028703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232468.15384615384,
            "unit": "ns",
            "range": "± 3487.4110704588547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4210186.466666667,
            "unit": "ns",
            "range": "± 32851.436563210846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3789853.4285714286,
            "unit": "ns",
            "range": "± 26313.384388102644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16569.35789473684,
            "unit": "ns",
            "range": "± 1147.91212796426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82776.53846153847,
            "unit": "ns",
            "range": "± 3379.9912893584155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69276.69230769231,
            "unit": "ns",
            "range": "± 1134.267045615463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78901.96385542168,
            "unit": "ns",
            "range": "± 5634.823256573713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4214.5625,
            "unit": "ns",
            "range": "± 519.3015919685329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15842.468085106382,
            "unit": "ns",
            "range": "± 1277.8176767831628"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1345491.414893617,
            "unit": "ns",
            "range": "± 89367.71764576461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2528183,
            "unit": "ns",
            "range": "± 61783.93868266135"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1762790.3541666667,
            "unit": "ns",
            "range": "± 122985.12246429424"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4814113.555555556,
            "unit": "ns",
            "range": "± 103808.44669513367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6018439.4390625,
            "unit": "ns",
            "range": "± 25639.311960514766"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1900037.701953125,
            "unit": "ns",
            "range": "± 6608.71145363551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362105.9678485577,
            "unit": "ns",
            "range": "± 752.8234418102572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2532127.273737981,
            "unit": "ns",
            "range": "± 1719.7624922613218"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817343.6725260416,
            "unit": "ns",
            "range": "± 871.5033627447981"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 751875.1822916666,
            "unit": "ns",
            "range": "± 396.7608811692607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3300957.409090909,
            "unit": "ns",
            "range": "± 79884.29849276901"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3444814,
            "unit": "ns",
            "range": "± 62539.94689796274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4240921.318181818,
            "unit": "ns",
            "range": "± 83075.13284823012"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3698573.1612903224,
            "unit": "ns",
            "range": "± 110555.24881406485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6308525.041666667,
            "unit": "ns",
            "range": "± 154437.6715026878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7593632.933333334,
            "unit": "ns",
            "range": "± 26415.401896476626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19246407.733333334,
            "unit": "ns",
            "range": "± 147311.35554738992"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50084577.46666667,
            "unit": "ns",
            "range": "± 244712.56100893632"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98620954.4,
            "unit": "ns",
            "range": "± 575696.8350405322"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196225501.46666667,
            "unit": "ns",
            "range": "± 1217363.6756263727"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44651.11538461538,
            "unit": "ns",
            "range": "± 2147.7636147758544"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d7d58f7ce685aa62bdf83862001ebd213454d03",
          "message": "Merge pull request #3291 from greymistcube/refactor/tx-success\n\n🧹 Removed ActionsLogsList from TxExecution",
          "timestamp": "2023-07-12T11:06:26+09:00",
          "tree_id": "cb1787efb83c661ea8d11c9c0f014cbbcfd2c083",
          "url": "https://github.com/limebell/libplanet/commit/9d7d58f7ce685aa62bdf83862001ebd213454d03"
        },
        "date": 1689130466847,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310913.10638297873,
            "unit": "ns",
            "range": "± 12028.952148578215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289162.23255813954,
            "unit": "ns",
            "range": "± 10667.326607197749"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 264687.23232323234,
            "unit": "ns",
            "range": "± 15860.040870851088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4659149.222222222,
            "unit": "ns",
            "range": "± 96194.36043305337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4248801.8,
            "unit": "ns",
            "range": "± 56693.386712082334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22619.382978723403,
            "unit": "ns",
            "range": "± 2545.916203278451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101088.6105263158,
            "unit": "ns",
            "range": "± 7556.2576861192965"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87276.3163265306,
            "unit": "ns",
            "range": "± 8399.656540102664"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110643.18279569893,
            "unit": "ns",
            "range": "± 13617.557696133581"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6710.371134020618,
            "unit": "ns",
            "range": "± 1206.0696006690805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22832.604166666668,
            "unit": "ns",
            "range": "± 3087.8709731674057"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1588538.03,
            "unit": "ns",
            "range": "± 104492.16430556755"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2964762.9210526315,
            "unit": "ns",
            "range": "± 100543.76880456606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2017043.7216494845,
            "unit": "ns",
            "range": "± 119709.38683029953"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5422966.133333334,
            "unit": "ns",
            "range": "± 157529.14563359562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6192735.077566965,
            "unit": "ns",
            "range": "± 41887.18568328105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1945489.0242745536,
            "unit": "ns",
            "range": "± 2583.9184063416906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1403419.3856026786,
            "unit": "ns",
            "range": "± 2583.86555873726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2702010.50390625,
            "unit": "ns",
            "range": "± 5637.640594207319"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 849060.7192708333,
            "unit": "ns",
            "range": "± 311.8756261662268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773815.861328125,
            "unit": "ns",
            "range": "± 480.8275575732621"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3800193.1875,
            "unit": "ns",
            "range": "± 70152.48709890833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3933716.8,
            "unit": "ns",
            "range": "± 126057.43813968764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4706100.178571428,
            "unit": "ns",
            "range": "± 132720.59257398284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4437102.269230769,
            "unit": "ns",
            "range": "± 105872.314896599"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6979164.038461538,
            "unit": "ns",
            "range": "± 186366.54689605228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8403763.533333333,
            "unit": "ns",
            "range": "± 137150.26524992145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22879949.533333335,
            "unit": "ns",
            "range": "± 259925.4505853187"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57552795.93333333,
            "unit": "ns",
            "range": "± 461985.10618347034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115502065.46666667,
            "unit": "ns",
            "range": "± 954352.7738477202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231593333.2,
            "unit": "ns",
            "range": "± 2220247.5387090514"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48729.89010989011,
            "unit": "ns",
            "range": "± 2814.7667574598604"
          }
        ]
      },
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
          "distinct": false,
          "id": "e74fb5a87684d8831b8ca42f80318bfced1494ed",
          "message": "Merge pull request #3342 from planetarium/fix/scrypt\n\nUse @noble/hashes/scrypt instead of scrypt-js",
          "timestamp": "2023-07-31T14:02:49+09:00",
          "tree_id": "d8e2fe6ccbed1438294efe071b5c6627b80c49db",
          "url": "https://github.com/limebell/libplanet/commit/e74fb5a87684d8831b8ca42f80318bfced1494ed"
        },
        "date": 1690797259845,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 283014.28571428574,
            "unit": "ns",
            "range": "± 6683.5832989711225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266691.76,
            "unit": "ns",
            "range": "± 7123.93064653683"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229753.06666666668,
            "unit": "ns",
            "range": "± 2435.4841544684023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4239148.6,
            "unit": "ns",
            "range": "± 38654.19949611832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3824917.6,
            "unit": "ns",
            "range": "± 43932.27876402497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17689.35106382979,
            "unit": "ns",
            "range": "± 1493.249114662291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86808.89743589744,
            "unit": "ns",
            "range": "± 4320.620492925691"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74390.33333333333,
            "unit": "ns",
            "range": "± 1730.0786205642023"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85690.48421052631,
            "unit": "ns",
            "range": "± 9077.22928584085"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4427.659574468085,
            "unit": "ns",
            "range": "± 446.1072380163424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17170.833333333332,
            "unit": "ns",
            "range": "± 1549.5953065349313"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1309661.606741573,
            "unit": "ns",
            "range": "± 72117.93199015604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2523503.777777778,
            "unit": "ns",
            "range": "± 81906.94905217091"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1694373.717647059,
            "unit": "ns",
            "range": "± 90962.33017568731"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4727022.583333333,
            "unit": "ns",
            "range": "± 157545.82666647006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6165725.110491072,
            "unit": "ns",
            "range": "± 22464.205642770892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2046115.0065104167,
            "unit": "ns",
            "range": "± 952.09966011354"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1374825.2101004464,
            "unit": "ns",
            "range": "± 430.339445992475"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2577761.153738839,
            "unit": "ns",
            "range": "± 1256.118865445226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 796099.1590983073,
            "unit": "ns",
            "range": "± 909.9411297925037"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729497.2658854167,
            "unit": "ns",
            "range": "± 531.5226313328739"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3303088.380952381,
            "unit": "ns",
            "range": "± 78548.87314880856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3382197.2666666666,
            "unit": "ns",
            "range": "± 99400.0944989953"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4216596.7272727275,
            "unit": "ns",
            "range": "± 101001.44468659456"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3671743.6666666665,
            "unit": "ns",
            "range": "± 60766.03687994831"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6290028.575757576,
            "unit": "ns",
            "range": "± 153040.8535128428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7587107.428571428,
            "unit": "ns",
            "range": "± 21954.861889144933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19408637.333333332,
            "unit": "ns",
            "range": "± 82499.4707053728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49866338.93333333,
            "unit": "ns",
            "range": "± 566936.1225523014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100052039.21428572,
            "unit": "ns",
            "range": "± 836784.2537359848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199634648,
            "unit": "ns",
            "range": "± 1261851.6859648307"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 47595.791666666664,
            "unit": "ns",
            "range": "± 2219.7853210341923"
          }
        ]
      }
    ]
  }
}