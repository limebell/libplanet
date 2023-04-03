window.BENCHMARK_DATA = {
  "lastUpdate": 1680513879754,
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
          "id": "9bf30e78dea928867d8495c01b26c596c146ed4d",
          "message": "release: 0.53.3",
          "timestamp": "2023-04-03T18:10:19+09:00",
          "tree_id": "1e35e6c59fe736419a8076afcc627d67be75dd32",
          "url": "https://github.com/limebell/libplanet/commit/9bf30e78dea928867d8495c01b26c596c146ed4d"
        },
        "date": 1680513876754,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3530744.3333333335,
            "unit": "ns",
            "range": "± 63704.27653388651"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5461945.181818182,
            "unit": "ns",
            "range": "± 132487.030995719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25720382.933333334,
            "unit": "ns",
            "range": "± 387424.61613758147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6800640.294117647,
            "unit": "ns",
            "range": "± 134445.68071844327"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29105261.769230768,
            "unit": "ns",
            "range": "± 249788.18375414057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8056079.785714285,
            "unit": "ns",
            "range": "± 128444.32520756795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21817484.307692308,
            "unit": "ns",
            "range": "± 141277.5235540463"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54804195.333333336,
            "unit": "ns",
            "range": "± 453807.31339864415"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109370735.73333333,
            "unit": "ns",
            "range": "± 813149.354036555"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219442538.26666668,
            "unit": "ns",
            "range": "± 1462342.4890559993"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1421249.2826086956,
            "unit": "ns",
            "range": "± 78023.21214761247"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2687496.78125,
            "unit": "ns",
            "range": "± 81552.9599604174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2276387.6266666665,
            "unit": "ns",
            "range": "± 114283.5707782694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5619264.984126984,
            "unit": "ns",
            "range": "± 255067.41071190167"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50052.611940298506,
            "unit": "ns",
            "range": "± 2336.3030233308705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5900302.966145833,
            "unit": "ns",
            "range": "± 17755.93642782372"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1872376.5968191964,
            "unit": "ns",
            "range": "± 1815.558203050338"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362285.5640625,
            "unit": "ns",
            "range": "± 3029.9667047523953"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2627983.669921875,
            "unit": "ns",
            "range": "± 2088.3398151407728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841311.1130719866,
            "unit": "ns",
            "range": "± 512.3415902571554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770335.8247767857,
            "unit": "ns",
            "range": "± 717.3283609597472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 207106.5,
            "unit": "ns",
            "range": "± 4648.586683917461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204778.74324324325,
            "unit": "ns",
            "range": "± 10212.060286217336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178384.63636363635,
            "unit": "ns",
            "range": "± 7612.727248602576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12432065.07142857,
            "unit": "ns",
            "range": "± 124077.68922888239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10188737.6,
            "unit": "ns",
            "range": "± 149759.79094574848"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22211.032608695652,
            "unit": "ns",
            "range": "± 1635.9781054654584"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60006.80434782609,
            "unit": "ns",
            "range": "± 3430.088209672564"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49270.683673469386,
            "unit": "ns",
            "range": "± 3150.5633618202482"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113163.22448979592,
            "unit": "ns",
            "range": "± 15913.017937104534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7859.876288659794,
            "unit": "ns",
            "range": "± 703.3553994030441"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23690.835051546394,
            "unit": "ns",
            "range": "± 1740.2258754278394"
          }
        ]
      }
    ]
  }
}