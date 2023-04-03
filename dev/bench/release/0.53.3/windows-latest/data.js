window.BENCHMARK_DATA = {
  "lastUpdate": 1680514167100,
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
        "date": 1680514151562,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1287269.0721649486,
            "unit": "ns",
            "range": "± 75774.8602781412"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2461788.888888889,
            "unit": "ns",
            "range": "± 68340.19165082723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2209448.5714285714,
            "unit": "ns",
            "range": "± 71829.32537058438"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5179750.684931506,
            "unit": "ns",
            "range": "± 256835.63384395157"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50267.34693877551,
            "unit": "ns",
            "range": "± 3898.401086731811"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6850746.153846154,
            "unit": "ns",
            "range": "± 111762.41627804803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19246235.714285713,
            "unit": "ns",
            "range": "± 339233.81965188024"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48611480,
            "unit": "ns",
            "range": "± 745933.9555215328"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96944840,
            "unit": "ns",
            "range": "± 1065831.71534186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196058013.33333334,
            "unit": "ns",
            "range": "± 3244492.420981982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4894047.135416667,
            "unit": "ns",
            "range": "± 27612.641868448067"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1519334.5703125,
            "unit": "ns",
            "range": "± 3135.947915363414"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1163760.2604166667,
            "unit": "ns",
            "range": "± 5568.458116629245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2604711.9010416665,
            "unit": "ns",
            "range": "± 5679.4383739351215"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826071.2890625,
            "unit": "ns",
            "range": "± 3544.310889240793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761734.0890066965,
            "unit": "ns",
            "range": "± 1885.153403985578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3145476.6666666665,
            "unit": "ns",
            "range": "± 139503.86710716342"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4956795.833333333,
            "unit": "ns",
            "range": "± 126544.71620449178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23872490.90909091,
            "unit": "ns",
            "range": "± 580566.8493636944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6203277.5,
            "unit": "ns",
            "range": "± 218362.6905150565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26877433.333333332,
            "unit": "ns",
            "range": "± 626581.6828900549"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185305.1948051948,
            "unit": "ns",
            "range": "± 9507.087330040957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190120,
            "unit": "ns",
            "range": "± 10518.215339713495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178054.08163265305,
            "unit": "ns",
            "range": "± 10342.387691849748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11409673.333333334,
            "unit": "ns",
            "range": "± 117488.8776904111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9103468.181818182,
            "unit": "ns",
            "range": "± 208387.1451714987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21918.947368421053,
            "unit": "ns",
            "range": "± 2302.602354637775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56897.89473684211,
            "unit": "ns",
            "range": "± 5143.8246170461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47862.5,
            "unit": "ns",
            "range": "± 3731.833188577488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107407.69230769231,
            "unit": "ns",
            "range": "± 12995.428519027852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6787.628865979382,
            "unit": "ns",
            "range": "± 1054.5790759783777"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21701.020408163266,
            "unit": "ns",
            "range": "± 2736.0704344478454"
          }
        ]
      }
    ]
  }
}