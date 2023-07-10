window.BENCHMARK_DATA = {
  "lastUpdate": 1688976229194,
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
          "id": "38f8ac1b6007597768f85fc2e0d84d7385dc43d2",
          "message": "docs: update changelog",
          "timestamp": "2023-07-10T16:51:06+09:00",
          "tree_id": "09f44e46d42374c61773950b700dba3e238e29cc",
          "url": "https://github.com/limebell/libplanet/commit/38f8ac1b6007597768f85fc2e0d84d7385dc43d2"
        },
        "date": 1688976225199,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280797.21428571426,
            "unit": "ns",
            "range": "± 4586.59084352791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 274047.1818181818,
            "unit": "ns",
            "range": "± 9706.5489838292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 241768.5806451613,
            "unit": "ns",
            "range": "± 7066.393190184054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4251149.266666667,
            "unit": "ns",
            "range": "± 25632.488208930332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3821310.3571428573,
            "unit": "ns",
            "range": "± 29015.49838277983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18022.44210526316,
            "unit": "ns",
            "range": "± 1862.1546414963993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87027.5052631579,
            "unit": "ns",
            "range": "± 4740.032112005608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70634.78571428571,
            "unit": "ns",
            "range": "± 1161.4073808942342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84693.8947368421,
            "unit": "ns",
            "range": "± 2503.253965429516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4556.061224489796,
            "unit": "ns",
            "range": "± 611.2148257554192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17003.072164948455,
            "unit": "ns",
            "range": "± 1715.5820880937097"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1423534.7373737374,
            "unit": "ns",
            "range": "± 106559.68974802634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2659075.2580645164,
            "unit": "ns",
            "range": "± 80993.81137879928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1819816.9583333333,
            "unit": "ns",
            "range": "± 109127.7988250393"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4903523.322580645,
            "unit": "ns",
            "range": "± 148146.9315349657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5997108.890625,
            "unit": "ns",
            "range": "± 9251.777298036479"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1896264.0649414062,
            "unit": "ns",
            "range": "± 746.5771709646021"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1373490.176171875,
            "unit": "ns",
            "range": "± 563.4177003993107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2611064.623604911,
            "unit": "ns",
            "range": "± 1496.0277885464166"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803552.6671875,
            "unit": "ns",
            "range": "± 649.5528286101658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743524.0887920673,
            "unit": "ns",
            "range": "± 300.4633087489323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3537309.8,
            "unit": "ns",
            "range": "± 53486.26656201438"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3436131.6486486485,
            "unit": "ns",
            "range": "± 114035.2517297505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4225891.571428572,
            "unit": "ns",
            "range": "± 44635.37549404626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3898140.3333333335,
            "unit": "ns",
            "range": "± 63752.93495167404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6376430,
            "unit": "ns",
            "range": "± 91717.51472864929"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7719979.866666666,
            "unit": "ns",
            "range": "± 51160.695886123176"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19861286.714285713,
            "unit": "ns",
            "range": "± 79534.43340749056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51642097.46666667,
            "unit": "ns",
            "range": "± 186850.85581434294"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102402136,
            "unit": "ns",
            "range": "± 497484.0209913423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205524860.86666667,
            "unit": "ns",
            "range": "± 899535.5794459294"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45972.69512195122,
            "unit": "ns",
            "range": "± 2009.7300456825344"
          }
        ]
      }
    ]
  }
}