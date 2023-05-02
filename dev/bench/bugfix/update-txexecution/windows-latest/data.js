window.BENCHMARK_DATA = {
  "lastUpdate": 1683010445449,
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
      }
    ]
  }
}