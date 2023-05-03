window.BENCHMARK_DATA = {
  "lastUpdate": 1683083787351,
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
          "id": "dfc7c1075358b4f393ae71d1121e0debde8461bd",
          "message": "release: 1.0.1",
          "timestamp": "2023-05-03T12:01:45+09:00",
          "tree_id": "43b642e8f0bfaea31d516d1859c1d3fef911ee2d",
          "url": "https://github.com/limebell/libplanet/commit/dfc7c1075358b4f393ae71d1121e0debde8461bd"
        },
        "date": 1683083772667,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1420339,
            "unit": "ns",
            "range": "± 138746.69011977158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2476070.588235294,
            "unit": "ns",
            "range": "± 73440.4831362094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2185438.028169014,
            "unit": "ns",
            "range": "± 106075.03054266714"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5341169.565217392,
            "unit": "ns",
            "range": "± 204923.49994795097"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46142.78350515464,
            "unit": "ns",
            "range": "± 4499.311230220883"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7165300,
            "unit": "ns",
            "range": "± 49675.73423139885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18076300,
            "unit": "ns",
            "range": "± 85288.73648629444"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46393278.571428575,
            "unit": "ns",
            "range": "± 161633.92246094224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91802470,
            "unit": "ns",
            "range": "± 299075.296778014"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183057426.66666666,
            "unit": "ns",
            "range": "± 1003415.2754230826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4810899.479166667,
            "unit": "ns",
            "range": "± 11865.150692005998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1505126.450892857,
            "unit": "ns",
            "range": "± 1301.270234452125"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1130417.36328125,
            "unit": "ns",
            "range": "± 907.0964833990724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611964.620535714,
            "unit": "ns",
            "range": "± 16010.936485737559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822415.4947916666,
            "unit": "ns",
            "range": "± 2729.509707086498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735344.4661458334,
            "unit": "ns",
            "range": "± 592.186977378096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3023613.6363636362,
            "unit": "ns",
            "range": "± 73160.06779302846"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3258760.8695652173,
            "unit": "ns",
            "range": "± 81079.47133483764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3995135.714285714,
            "unit": "ns",
            "range": "± 110695.85362867937"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4249600,
            "unit": "ns",
            "range": "± 78276.30548256605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6894531.578947368,
            "unit": "ns",
            "range": "± 151858.31866370846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 319716.6666666667,
            "unit": "ns",
            "range": "± 6396.3454639440515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260227.868852459,
            "unit": "ns",
            "range": "± 11169.111142604277"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 244956.25,
            "unit": "ns",
            "range": "± 9547.415964319596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5297192.857142857,
            "unit": "ns",
            "range": "± 38189.54174772328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3752021.4285714286,
            "unit": "ns",
            "range": "± 32739.81764366838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21770.408163265307,
            "unit": "ns",
            "range": "± 1955.0731883720969"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93315,
            "unit": "ns",
            "range": "± 9474.296701064304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85933,
            "unit": "ns",
            "range": "± 9576.065017120614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 165985.85858585857,
            "unit": "ns",
            "range": "± 15687.756893423128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7105.102040816327,
            "unit": "ns",
            "range": "± 1175.8192975147851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20064.285714285714,
            "unit": "ns",
            "range": "± 2634.5542865273806"
          }
        ]
      }
    ]
  }
}