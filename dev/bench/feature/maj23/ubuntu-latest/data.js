window.BENCHMARK_DATA = {
  "lastUpdate": 1686289955460,
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
          "id": "0f10562e3debb2347a96f2625766b1ec6e569af4",
          "message": "temp: test case",
          "timestamp": "2023-06-09T14:38:41+09:00",
          "tree_id": "2a18c850e206cc6f3a7c5d341f39bb98d00e58aa",
          "url": "https://github.com/limebell/libplanet/commit/0f10562e3debb2347a96f2625766b1ec6e569af4"
        },
        "date": 1686289952525,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1478841.5760869565,
            "unit": "ns",
            "range": "± 83105.30810571487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2858261.3125,
            "unit": "ns",
            "range": "± 108417.98990886609"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2388629.1818181816,
            "unit": "ns",
            "range": "± 123650.61060476844"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5695843.8292682925,
            "unit": "ns",
            "range": "± 204236.63729959205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3505551.52,
            "unit": "ns",
            "range": "± 91502.33049451072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3663319.75,
            "unit": "ns",
            "range": "± 110550.99854993213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4519543.363636363,
            "unit": "ns",
            "range": "± 106382.65739191812"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4570331.35,
            "unit": "ns",
            "range": "± 150846.64778229714"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7186211.193548387,
            "unit": "ns",
            "range": "± 211714.49280110223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8167010.071428572,
            "unit": "ns",
            "range": "± 123472.43533023524"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22215225.333333332,
            "unit": "ns",
            "range": "± 149675.79827063685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56309110.333333336,
            "unit": "ns",
            "range": "± 367878.1119863019"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113599374.6,
            "unit": "ns",
            "range": "± 542123.7282684513"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222885602.6,
            "unit": "ns",
            "range": "± 3308834.60799301"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6057939.249441965,
            "unit": "ns",
            "range": "± 20634.048379334778"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1924091.3178013393,
            "unit": "ns",
            "range": "± 2302.893345573677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1398556.183314732,
            "unit": "ns",
            "range": "± 3006.3686221034245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2673287.018973214,
            "unit": "ns",
            "range": "± 1236.951141843227"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852629.3729817708,
            "unit": "ns",
            "range": "± 1460.9780336344265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 768493.259375,
            "unit": "ns",
            "range": "± 963.9062689313009"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48222.98611111111,
            "unit": "ns",
            "range": "± 2353.2279747642033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 288034.62790697673,
            "unit": "ns",
            "range": "± 10643.521705094687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279704.3333333333,
            "unit": "ns",
            "range": "± 6506.119445055811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 238090.69565217392,
            "unit": "ns",
            "range": "± 5784.129284946892"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4495603.133333334,
            "unit": "ns",
            "range": "± 62879.76232787083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4129328.5,
            "unit": "ns",
            "range": "± 41968.28946084449"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19888.63157894737,
            "unit": "ns",
            "range": "± 1619.8599299350494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87325.42857142857,
            "unit": "ns",
            "range": "± 4736.292406379715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73468.5,
            "unit": "ns",
            "range": "± 2613.2195978651825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92406.93478260869,
            "unit": "ns",
            "range": "± 8917.69657442448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5056.926315789474,
            "unit": "ns",
            "range": "± 648.7397806698121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18633.655555555557,
            "unit": "ns",
            "range": "± 1444.3850459361051"
          }
        ]
      }
    ]
  }
}