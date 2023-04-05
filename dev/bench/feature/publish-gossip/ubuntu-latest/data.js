window.BENCHMARK_DATA = {
  "lastUpdate": 1680689255261,
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
          "id": "321c7adbb4abc343d04241d5237a93cb52fde07e",
          "message": "docs: update changelog",
          "timestamp": "2023-04-05T13:57:54+09:00",
          "tree_id": "2fdd54d6c8cf1f6252b0256d0feef6f54f9a6b48",
          "url": "https://github.com/limebell/libplanet/commit/321c7adbb4abc343d04241d5237a93cb52fde07e"
        },
        "date": 1680671520758,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3385573.12,
            "unit": "ns",
            "range": "± 88937.06927013057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3635048.6875,
            "unit": "ns",
            "range": "± 68939.6572844385"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4237526.384615385,
            "unit": "ns",
            "range": "± 61690.06201912166"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4620223.807692308,
            "unit": "ns",
            "range": "± 125095.92174999767"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7690237.055555556,
            "unit": "ns",
            "range": "± 226239.79568602418"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7815011.733333333,
            "unit": "ns",
            "range": "± 126716.90831391877"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21346082.133333333,
            "unit": "ns",
            "range": "± 201948.92095310587"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54034455.21428572,
            "unit": "ns",
            "range": "± 416941.240472744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108925937.26666667,
            "unit": "ns",
            "range": "± 1363681.5487722128"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215212746.26666668,
            "unit": "ns",
            "range": "± 2176628.0109073515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1480678.8125,
            "unit": "ns",
            "range": "± 102122.23354972964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2699479.32,
            "unit": "ns",
            "range": "± 60911.49364153972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2329392.471264368,
            "unit": "ns",
            "range": "± 126915.63104400727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6098592.89,
            "unit": "ns",
            "range": "± 396789.69881390093"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51425.41935483871,
            "unit": "ns",
            "range": "± 2813.078494409332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5914669.409895834,
            "unit": "ns",
            "range": "± 55095.452265075015"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1871941.8727864583,
            "unit": "ns",
            "range": "± 10565.625798027451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1337936.1990885416,
            "unit": "ns",
            "range": "± 6613.700904345231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2612165.8175223214,
            "unit": "ns",
            "range": "± 11359.563747214512"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 820849.5704427083,
            "unit": "ns",
            "range": "± 1338.852069013783"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761125.4880208333,
            "unit": "ns",
            "range": "± 782.4234809793136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336070.6857142857,
            "unit": "ns",
            "range": "± 9257.410696846286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 286898.8888888889,
            "unit": "ns",
            "range": "± 6016.606126467458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 232795.84615384616,
            "unit": "ns",
            "range": "± 2616.2973469566314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5699670.733333333,
            "unit": "ns",
            "range": "± 52915.0417225125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3985294.5,
            "unit": "ns",
            "range": "± 49125.164760342224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21304.39175257732,
            "unit": "ns",
            "range": "± 2167.76563903126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92205.70652173914,
            "unit": "ns",
            "range": "± 5792.039056274357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84158.37755102041,
            "unit": "ns",
            "range": "± 7390.916401078982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 195428.6494845361,
            "unit": "ns",
            "range": "± 15551.71206011927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6659.896907216495,
            "unit": "ns",
            "range": "± 995.4208122336174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20808.546391752578,
            "unit": "ns",
            "range": "± 1827.5021204993318"
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
          "id": "3ae73a518d31cfab74e9a76e0b4eec91c405c8b8",
          "message": "docs: update changelog",
          "timestamp": "2023-04-05T18:49:25+09:00",
          "tree_id": "c54ac2f904324029f65a532b7a9f2fee91b2d2b9",
          "url": "https://github.com/limebell/libplanet/commit/3ae73a518d31cfab74e9a76e0b4eec91c405c8b8"
        },
        "date": 1680689251017,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8610053.094117647,
            "unit": "ns",
            "range": "± 464501.59063100006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24905235.390804596,
            "unit": "ns",
            "range": "± 1362959.9077213786"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58440126.07,
            "unit": "ns",
            "range": "± 3503981.7172634373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117812721.82666667,
            "unit": "ns",
            "range": "± 5951088.342791163"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 234567374.20754716,
            "unit": "ns",
            "range": "± 9581660.479954716"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61405.41052631579,
            "unit": "ns",
            "range": "± 11343.03269655903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1667018.0102040817,
            "unit": "ns",
            "range": "± 179299.43023779476"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3217336.4646464647,
            "unit": "ns",
            "range": "± 285109.5548816677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2564611.15625,
            "unit": "ns",
            "range": "± 219620.669811781"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7084539.618556701,
            "unit": "ns",
            "range": "± 509555.3858179828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7142357.8625,
            "unit": "ns",
            "range": "± 86220.99094653076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2205404.2213541665,
            "unit": "ns",
            "range": "± 21949.34661304134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1607732.221484375,
            "unit": "ns",
            "range": "± 18110.901026016294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3123104.6354166665,
            "unit": "ns",
            "range": "± 33835.48613951224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 980841.2323644301,
            "unit": "ns",
            "range": "± 19625.44611763999"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 922786.8176106771,
            "unit": "ns",
            "range": "± 17185.271384687112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 417171.40625,
            "unit": "ns",
            "range": "± 34041.298744652755"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341053.2083333333,
            "unit": "ns",
            "range": "± 31004.91070847247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275603.8152173913,
            "unit": "ns",
            "range": "± 20981.81562604819"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6486268.37113402,
            "unit": "ns",
            "range": "± 375220.599353548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4686526.81443299,
            "unit": "ns",
            "range": "± 291701.5569910927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25459.98,
            "unit": "ns",
            "range": "± 7738.900399509952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111208.33333333333,
            "unit": "ns",
            "range": "± 12490.241176439069"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101819.57894736843,
            "unit": "ns",
            "range": "± 13845.765229829378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 239632.9375,
            "unit": "ns",
            "range": "± 20734.04367488026"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 13200.535353535353,
            "unit": "ns",
            "range": "± 5819.376697658227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27901.072916666668,
            "unit": "ns",
            "range": "± 5976.905749800278"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3800570.2,
            "unit": "ns",
            "range": "± 329472.5602483266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3950609.4693877553,
            "unit": "ns",
            "range": "± 327636.343900865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5151335.15625,
            "unit": "ns",
            "range": "± 446144.4661063171"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5263504.489361702,
            "unit": "ns",
            "range": "± 349097.41511379636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9692464.34939759,
            "unit": "ns",
            "range": "± 511696.0719034068"
          }
        ]
      }
    ]
  }
}