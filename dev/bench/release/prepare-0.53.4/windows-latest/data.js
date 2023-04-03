window.BENCHMARK_DATA = {
  "lastUpdate": 1680516621261,
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
          "id": "10af4f3f30a09a30b62fe11249fc8dccd5994997",
          "message": "chore: prepare 0.53.4",
          "timestamp": "2023-04-03T18:53:01+09:00",
          "tree_id": "4792564cb097fb586ec466bed1d1f27d97fdb7bc",
          "url": "https://github.com/limebell/libplanet/commit/10af4f3f30a09a30b62fe11249fc8dccd5994997"
        },
        "date": 1680516598908,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1575037.5,
            "unit": "ns",
            "range": "± 121916.01272144172"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2933908.9552238807,
            "unit": "ns",
            "range": "± 139113.9545222955"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2430189.1304347827,
            "unit": "ns",
            "range": "± 143376.1543590704"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6131779.775280898,
            "unit": "ns",
            "range": "± 338896.8270123517"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55486.11111111111,
            "unit": "ns",
            "range": "± 2763.7648111122644"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8337816.666666667,
            "unit": "ns",
            "range": "± 211308.0394500689"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23089335.714285713,
            "unit": "ns",
            "range": "± 336853.8980424208"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58060750,
            "unit": "ns",
            "range": "± 1238627.8386371988"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 119059288.09523809,
            "unit": "ns",
            "range": "± 4000847.232040123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235469624.13793105,
            "unit": "ns",
            "range": "± 6728915.36763197"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5786793.917410715,
            "unit": "ns",
            "range": "± 60356.66801607462"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1885967.4348958333,
            "unit": "ns",
            "range": "± 21612.862810371083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1493752.5669642857,
            "unit": "ns",
            "range": "± 21084.738513249285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3326022.2526041665,
            "unit": "ns",
            "range": "± 61059.92595101502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1026203.9713541666,
            "unit": "ns",
            "range": "± 9794.102253617119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 926326.8098958334,
            "unit": "ns",
            "range": "± 8599.979186259925"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3717638.2352941176,
            "unit": "ns",
            "range": "± 75866.98789948877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6010913.333333333,
            "unit": "ns",
            "range": "± 175274.80243268306"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27488335.714285713,
            "unit": "ns",
            "range": "± 472024.2278774434"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7286251.515151516,
            "unit": "ns",
            "range": "± 226429.3310301419"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32118189.47368421,
            "unit": "ns",
            "range": "± 691505.3803074508"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222795.83333333334,
            "unit": "ns",
            "range": "± 5564.52108698819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 218085.45454545456,
            "unit": "ns",
            "range": "± 9256.237500190487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 202109.41176470587,
            "unit": "ns",
            "range": "± 10910.672184013356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13454442.857142856,
            "unit": "ns",
            "range": "± 237595.02621796713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10811286.666666666,
            "unit": "ns",
            "range": "± 195430.10027945566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25109.782608695652,
            "unit": "ns",
            "range": "± 2262.161748504628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64729.47368421053,
            "unit": "ns",
            "range": "± 5657.472439251989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49469.565217391304,
            "unit": "ns",
            "range": "± 3296.6762859221544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120993.81443298969,
            "unit": "ns",
            "range": "± 19028.01560875103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7410.309278350515,
            "unit": "ns",
            "range": "± 815.7926278680438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25082.105263157893,
            "unit": "ns",
            "range": "± 2376.7928931412803"
          }
        ]
      }
    ]
  }
}