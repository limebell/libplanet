window.BENCHMARK_DATA = {
  "lastUpdate": 1683795674176,
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
          "id": "6555351be63be4f12921346a3ea8a5489de2f1b7",
          "message": "feat: optimize message request",
          "timestamp": "2023-05-11T17:48:50+09:00",
          "tree_id": "f8d431c128bcc9d62f63ca253d6198e560e5f01f",
          "url": "https://github.com/limebell/libplanet/commit/6555351be63be4f12921346a3ea8a5489de2f1b7"
        },
        "date": 1683795671057,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3318529.6666666665,
            "unit": "ns",
            "range": "± 50315.250127381376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3400756.947368421,
            "unit": "ns",
            "range": "± 112556.56207266983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4197994.769230769,
            "unit": "ns",
            "range": "± 38422.8250005858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4309435.295454546,
            "unit": "ns",
            "range": "± 156714.2701009795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6776138.947368421,
            "unit": "ns",
            "range": "± 138709.35579175522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282554.2786885246,
            "unit": "ns",
            "range": "± 11203.0960216825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269442.8604651163,
            "unit": "ns",
            "range": "± 9815.493453819385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233007.70588235295,
            "unit": "ns",
            "range": "± 7478.3352284891125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4298286.214285715,
            "unit": "ns",
            "range": "± 33166.62719379358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3808203.846153846,
            "unit": "ns",
            "range": "± 26715.851127642534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17935.021276595744,
            "unit": "ns",
            "range": "± 1198.09309939222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82047.42045454546,
            "unit": "ns",
            "range": "± 4528.87662283531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69996.61764705883,
            "unit": "ns",
            "range": "± 2239.0137576513175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83293.43298969071,
            "unit": "ns",
            "range": "± 11778.676289969953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4723.147368421052,
            "unit": "ns",
            "range": "± 492.1544033887293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17237.416666666668,
            "unit": "ns",
            "range": "± 1504.2221537124422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5901029.992745535,
            "unit": "ns",
            "range": "± 11050.34279219184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1829983.5237379808,
            "unit": "ns",
            "range": "± 1341.7036963629407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358030.9610770089,
            "unit": "ns",
            "range": "± 1033.574069383316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2593621.241629464,
            "unit": "ns",
            "range": "± 9433.097577452627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811999.4415364583,
            "unit": "ns",
            "range": "± 548.1615063708085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735459.0385366586,
            "unit": "ns",
            "range": "± 559.9792528632848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7736560.2,
            "unit": "ns",
            "range": "± 68510.2828592697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19381772.923076924,
            "unit": "ns",
            "range": "± 55015.35834725539"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50469562.733333334,
            "unit": "ns",
            "range": "± 571129.3592455299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99571958.93333334,
            "unit": "ns",
            "range": "± 988879.3703452167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199047979.73333332,
            "unit": "ns",
            "range": "± 1289426.8169728676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1384425.6276595744,
            "unit": "ns",
            "range": "± 104814.8163914933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2547015.846153846,
            "unit": "ns",
            "range": "± 36495.15176898194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2193941.6304347827,
            "unit": "ns",
            "range": "± 123335.54707718677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5331600.606060606,
            "unit": "ns",
            "range": "± 168648.2461669368"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46338.425,
            "unit": "ns",
            "range": "± 2298.31943982301"
          }
        ]
      }
    ]
  }
}