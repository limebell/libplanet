window.BENCHMARK_DATA = {
  "lastUpdate": 1683010527778,
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
          "id": "3ee4cf68a341368048cd2302e3adb578cec0b87d",
          "message": "docs: update changelog",
          "timestamp": "2023-05-02T15:38:29+09:00",
          "tree_id": "7d14b14f5e84effd95ca064156bf1c765cc0f259",
          "url": "https://github.com/limebell/libplanet/commit/3ee4cf68a341368048cd2302e3adb578cec0b87d"
        },
        "date": 1683010431322,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1326081.8181818181,
            "unit": "ns",
            "range": "± 157731.14516747842"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2380140.206185567,
            "unit": "ns",
            "range": "± 150270.11211744795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2045996.8085106383,
            "unit": "ns",
            "range": "± 158753.76649642567"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5108056.12244898,
            "unit": "ns",
            "range": "± 374014.50329294644"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46026.31578947369,
            "unit": "ns",
            "range": "± 3847.1655917968346"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6804500,
            "unit": "ns",
            "range": "± 197125.0020382281"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18290307.692307692,
            "unit": "ns",
            "range": "± 215105.0381462448"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46267100,
            "unit": "ns",
            "range": "± 798169.7832273174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91306263.33333333,
            "unit": "ns",
            "range": "± 1339334.2913907783"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183548713.33333334,
            "unit": "ns",
            "range": "± 2302470.484646148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4270616.238839285,
            "unit": "ns",
            "range": "± 17547.87290004252"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1359721.2630208333,
            "unit": "ns",
            "range": "± 5449.937320047147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1047187.24609375,
            "unit": "ns",
            "range": "± 7090.008673077486"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2389316.6015625,
            "unit": "ns",
            "range": "± 7168.698837928207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 729373.8141741072,
            "unit": "ns",
            "range": "± 3360.1514938233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 686397.1875,
            "unit": "ns",
            "range": "± 3362.5977081510646"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2921932,
            "unit": "ns",
            "range": "± 63215.79259436153"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3263270.588235294,
            "unit": "ns",
            "range": "± 66507.61953251937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3556163.1578947366,
            "unit": "ns",
            "range": "± 72200.64027514127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3915074.5098039214,
            "unit": "ns",
            "range": "± 142764.3412664903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6282605.555555556,
            "unit": "ns",
            "range": "± 117325.49230150646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 292220.4081632653,
            "unit": "ns",
            "range": "± 11649.123350275418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 244188.23529411765,
            "unit": "ns",
            "range": "± 9895.85058615627"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204316.2162162162,
            "unit": "ns",
            "range": "± 6917.751461659003"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4754886.666666667,
            "unit": "ns",
            "range": "± 64780.29756323255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3316492.3076923075,
            "unit": "ns",
            "range": "± 34956.93687807094"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21659.574468085106,
            "unit": "ns",
            "range": "± 2073.712537441789"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93638.77551020408,
            "unit": "ns",
            "range": "± 9090.332835627465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85083.67346938775,
            "unit": "ns",
            "range": "± 8498.170741644006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 184977.8947368421,
            "unit": "ns",
            "range": "± 17657.511083059704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9075.510204081633,
            "unit": "ns",
            "range": "± 1186.2886094215257"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20339.79591836735,
            "unit": "ns",
            "range": "± 2602.565736255198"
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
          "id": "dffcacbe7a34c502649b60f669408398e9445c32",
          "message": "docs: update changelog",
          "timestamp": "2023-05-02T15:34:21+09:00",
          "tree_id": "e548c26674dde90705ae42008deae845cec14d24",
          "url": "https://github.com/limebell/libplanet/commit/dffcacbe7a34c502649b60f669408398e9445c32"
        },
        "date": 1683010511776,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1780333.6734693877,
            "unit": "ns",
            "range": "± 262902.6184589117"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3550035.8695652173,
            "unit": "ns",
            "range": "± 431853.79281600064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2840279.4736842103,
            "unit": "ns",
            "range": "± 285149.01623973035"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7574681.914893617,
            "unit": "ns",
            "range": "± 723087.8295472167"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64004.395604395606,
            "unit": "ns",
            "range": "± 12976.396624366465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9825353.125,
            "unit": "ns",
            "range": "± 921989.8730980698"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25780690,
            "unit": "ns",
            "range": "± 2038121.2516591465"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62643796.62921348,
            "unit": "ns",
            "range": "± 3467182.130657057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 160219553.7037037,
            "unit": "ns",
            "range": "± 6661751.161406095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 267012637.83783785,
            "unit": "ns",
            "range": "± 8867949.750814613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5939326.011029412,
            "unit": "ns",
            "range": "± 121267.62088863262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1935347.7354307433,
            "unit": "ns",
            "range": "± 64422.75812999808"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1472651.3537176724,
            "unit": "ns",
            "range": "± 40579.77975974692"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3235443.310546875,
            "unit": "ns",
            "range": "± 94944.40786762814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1034256.9521949405,
            "unit": "ns",
            "range": "± 35386.21175893603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 962587.6674107143,
            "unit": "ns",
            "range": "± 27127.517722652654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3848138.709677419,
            "unit": "ns",
            "range": "± 314666.61309760355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4134428.4210526315,
            "unit": "ns",
            "range": "± 393356.84699426236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5045442.045454546,
            "unit": "ns",
            "range": "± 360435.48682931176"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5326910.101010101,
            "unit": "ns",
            "range": "± 684825.969475718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9390838.94736842,
            "unit": "ns",
            "range": "± 952814.5879439922"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 397420.8333333333,
            "unit": "ns",
            "range": "± 59241.00627573272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 327046.3917525773,
            "unit": "ns",
            "range": "± 55621.496260168446"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 293169.07216494845,
            "unit": "ns",
            "range": "± 52056.98272251112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6515143.333333333,
            "unit": "ns",
            "range": "± 570732.9071003274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4824138.043478261,
            "unit": "ns",
            "range": "± 415776.6438218702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27256.25,
            "unit": "ns",
            "range": "± 9506.162128906315"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 119903.15789473684,
            "unit": "ns",
            "range": "± 29619.683121523853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98514.43298969071,
            "unit": "ns",
            "range": "± 28981.58535206279"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 234654.83870967742,
            "unit": "ns",
            "range": "± 44890.97787763884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7560.227272727273,
            "unit": "ns",
            "range": "± 1862.9194596843522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 28930.303030303032,
            "unit": "ns",
            "range": "± 11330.827144775734"
          }
        ]
      }
    ]
  }
}