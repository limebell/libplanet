window.BENCHMARK_DATA = {
  "lastUpdate": 1689130470556,
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
      }
    ]
  }
}