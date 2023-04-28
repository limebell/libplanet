window.BENCHMARK_DATA = {
  "lastUpdate": 1682673860851,
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
          "id": "efe0d5298de9699d5f33524fc892461584a16824",
          "message": "test: add regression test\n\n(cherry picked from commit 39e90e6de7b0babecc117fafbdf00cfdcfc8cb2a)",
          "timestamp": "2023-04-28T18:09:55+09:00",
          "tree_id": "ec1d8a9df9ea2267b743a28e29178caa9fd5d819",
          "url": "https://github.com/limebell/libplanet/commit/efe0d5298de9699d5f33524fc892461584a16824"
        },
        "date": 1682673857845,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303864.1052631579,
            "unit": "ns",
            "range": "± 9228.680781216412"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 285931.6530612245,
            "unit": "ns",
            "range": "± 11049.754709854838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241400.33333333334,
            "unit": "ns",
            "range": "± 6259.659795358146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4414512.461538462,
            "unit": "ns",
            "range": "± 45443.433318459014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3899107.5714285714,
            "unit": "ns",
            "range": "± 77539.60567965989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23742.556701030928,
            "unit": "ns",
            "range": "± 2626.7100658787986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102158.86734693877,
            "unit": "ns",
            "range": "± 9527.82934641394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92322.37777777777,
            "unit": "ns",
            "range": "± 6728.958804841462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108330.70212765958,
            "unit": "ns",
            "range": "± 14137.974637710826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7782.427083333333,
            "unit": "ns",
            "range": "± 1158.5515797961891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22820.041666666668,
            "unit": "ns",
            "range": "± 2370.995500080822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3593690.5714285714,
            "unit": "ns",
            "range": "± 57169.90228959813"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3772299.052631579,
            "unit": "ns",
            "range": "± 79507.17173624701"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4366011.52631579,
            "unit": "ns",
            "range": "± 93914.91015119806"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4818306.0625,
            "unit": "ns",
            "range": "± 90093.47326376737"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7316915.869565218,
            "unit": "ns",
            "range": "± 177601.29606465672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6092763.766145834,
            "unit": "ns",
            "range": "± 52497.58128828404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1852656.7223958333,
            "unit": "ns",
            "range": "± 4410.010459621005"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354301.5463541667,
            "unit": "ns",
            "range": "± 4217.562616428652"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2646205.6390625,
            "unit": "ns",
            "range": "± 6370.051839260178"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839706.1918569711,
            "unit": "ns",
            "range": "± 1629.2293852824653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771269.138671875,
            "unit": "ns",
            "range": "± 821.1539044293727"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51921.02197802198,
            "unit": "ns",
            "range": "± 4039.1203002029533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8009344.521739131,
            "unit": "ns",
            "range": "± 173766.4647900293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21936414.933333334,
            "unit": "ns",
            "range": "± 248601.35468297335"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56098109.13333333,
            "unit": "ns",
            "range": "± 371145.67495447054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112615104.53846154,
            "unit": "ns",
            "range": "± 507317.041516712"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 221948443.2,
            "unit": "ns",
            "range": "± 996097.4788864935"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1523571.53,
            "unit": "ns",
            "range": "± 135621.19606771457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2902445.23,
            "unit": "ns",
            "range": "± 178004.58274618533"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2433964.4567901236,
            "unit": "ns",
            "range": "± 122464.42772332393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5911192.754385965,
            "unit": "ns",
            "range": "± 256224.57457077433"
          }
        ]
      }
    ]
  }
}