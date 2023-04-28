window.BENCHMARK_DATA = {
  "lastUpdate": 1682673778645,
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
          "id": "01e6999f7023d54bfe9ee8540addaf0695bdeb2f",
          "message": "test: add regression test\n\n(cherry picked from commit 39e90e6de7b0babecc117fafbdf00cfdcfc8cb2a)",
          "timestamp": "2023-04-28T16:54:03+09:00",
          "tree_id": "50a677c7bc8dc80727c0f79c7c99b926394c55ab",
          "url": "https://github.com/limebell/libplanet/commit/01e6999f7023d54bfe9ee8540addaf0695bdeb2f"
        },
        "date": 1682669220585,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292797.95,
            "unit": "ns",
            "range": "± 10395.424104149297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266117.7586206897,
            "unit": "ns",
            "range": "± 7266.066604700295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 231774.1052631579,
            "unit": "ns",
            "range": "± 5024.519146641872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4276562.466666667,
            "unit": "ns",
            "range": "± 47024.69558018982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3864828.4,
            "unit": "ns",
            "range": "± 24776.379540083853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17746.35789473684,
            "unit": "ns",
            "range": "± 1200.7251524913218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 85117.4693877551,
            "unit": "ns",
            "range": "± 3206.1189940879767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71775.50877192983,
            "unit": "ns",
            "range": "± 3103.6091152237987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82827.05154639175,
            "unit": "ns",
            "range": "± 10092.392473594422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5448.958333333333,
            "unit": "ns",
            "range": "± 607.8425682027364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16753.212765957447,
            "unit": "ns",
            "range": "± 1216.7682904002102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3424933.933333333,
            "unit": "ns",
            "range": "± 45989.5335320466"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3526224.8260869565,
            "unit": "ns",
            "range": "± 68329.4119093489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4248316.576923077,
            "unit": "ns",
            "range": "± 115061.12280250808"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4229475.4,
            "unit": "ns",
            "range": "± 75988.70295341838"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6814534.16,
            "unit": "ns",
            "range": "± 161130.2676986543"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5895466.517708333,
            "unit": "ns",
            "range": "± 29543.982179731818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1857562.2575120192,
            "unit": "ns",
            "range": "± 944.0107550903598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1342874.4495192308,
            "unit": "ns",
            "range": "± 455.294740637012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2582830.1317708334,
            "unit": "ns",
            "range": "± 1808.643383999872"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 789557.7072265625,
            "unit": "ns",
            "range": "± 582.1214337392203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 734285.0678385417,
            "unit": "ns",
            "range": "± 686.3945032423285"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44208.31764705882,
            "unit": "ns",
            "range": "± 2267.818141758645"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7645082.733333333,
            "unit": "ns",
            "range": "± 34406.665260562244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20825547.733333334,
            "unit": "ns",
            "range": "± 190788.49057434805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52294098.46666667,
            "unit": "ns",
            "range": "± 362776.7371518637"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102788027.15384616,
            "unit": "ns",
            "range": "± 685644.5463920361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 208854240.73333332,
            "unit": "ns",
            "range": "± 1690138.954481658"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1345743.82,
            "unit": "ns",
            "range": "± 99386.14773490031"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2574418.8181818184,
            "unit": "ns",
            "range": "± 63192.58847563599"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2163846.2906976743,
            "unit": "ns",
            "range": "± 110064.84564728904"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5394783.813953488,
            "unit": "ns",
            "range": "± 197151.52497064354"
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
          "id": "bb981fcf2313cfb636278c1c77b5554fc7c238bf",
          "message": "test: add regression test",
          "timestamp": "2023-04-28T18:10:15+09:00",
          "tree_id": "ec1d8a9df9ea2267b743a28e29178caa9fd5d819",
          "url": "https://github.com/limebell/libplanet/commit/bb981fcf2313cfb636278c1c77b5554fc7c238bf"
        },
        "date": 1682673775563,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279947.32558139536,
            "unit": "ns",
            "range": "± 10312.43831201389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261944.60416666666,
            "unit": "ns",
            "range": "± 10206.626051277697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223783.23076923078,
            "unit": "ns",
            "range": "± 1619.4115780042944"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4169160,
            "unit": "ns",
            "range": "± 30336.852349906047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3788692.1428571427,
            "unit": "ns",
            "range": "± 27983.90271857443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17047.618556701033,
            "unit": "ns",
            "range": "± 1154.4608630158907"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81645.59782608696,
            "unit": "ns",
            "range": "± 4863.836976419136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71156.92,
            "unit": "ns",
            "range": "± 1891.174963702019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85753.10204081633,
            "unit": "ns",
            "range": "± 13408.312003887888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5118.127659574468,
            "unit": "ns",
            "range": "± 422.207644833385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16350.840425531915,
            "unit": "ns",
            "range": "± 1086.5594170294144"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3216005.224489796,
            "unit": "ns",
            "range": "± 127236.37637553862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3371437.9591836734,
            "unit": "ns",
            "range": "± 133967.03285773942"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4091857.066666667,
            "unit": "ns",
            "range": "± 66000.26347508738"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4195429.846153846,
            "unit": "ns",
            "range": "± 57340.40419699149"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6669613.68,
            "unit": "ns",
            "range": "± 124281.29230121482"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5767701.733258928,
            "unit": "ns",
            "range": "± 25601.916324585694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1802491.7738882212,
            "unit": "ns",
            "range": "± 2812.337649309964"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1342523.075420673,
            "unit": "ns",
            "range": "± 2376.2578738959605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2576302.515324519,
            "unit": "ns",
            "range": "± 4524.913378650268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854200.6594050481,
            "unit": "ns",
            "range": "± 1476.569586074008"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742919.4302455357,
            "unit": "ns",
            "range": "± 1237.7657217673554"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46824.97435897436,
            "unit": "ns",
            "range": "± 2429.482863974757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7559624.5,
            "unit": "ns",
            "range": "± 58426.585967414634"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19875745,
            "unit": "ns",
            "range": "± 348441.5138453757"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49798503.071428575,
            "unit": "ns",
            "range": "± 560621.5205801593"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98990643.15384616,
            "unit": "ns",
            "range": "± 514617.72448858357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198600957.26666668,
            "unit": "ns",
            "range": "± 2139925.3766216934"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1349396.0206185568,
            "unit": "ns",
            "range": "± 83222.2069209369"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2616185.703703704,
            "unit": "ns",
            "range": "± 72283.89049212876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2158483.5125,
            "unit": "ns",
            "range": "± 109881.19858767073"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5318698.607142857,
            "unit": "ns",
            "range": "± 146858.39134635768"
          }
        ]
      }
    ]
  }
}