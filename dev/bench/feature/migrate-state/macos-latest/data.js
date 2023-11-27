window.BENCHMARK_DATA = {
  "lastUpdate": 1701062108971,
  "repoUrl": "https://github.com/limebell/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "distinct": true,
          "id": "73186ba1c6ea1e114550f77a6e70c3358b9d680f",
          "message": "feat: migrate stae if protocol version has increased to 5",
          "timestamp": "2023-11-27T14:02:54+09:00",
          "tree_id": "45c2fc8bcc9e842b02120ae99cc8efc6a22735c6",
          "url": "https://github.com/limebell/libplanet/commit/73186ba1c6ea1e114550f77a6e70c3358b9d680f"
        },
        "date": 1701062102025,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7505738.8125,
            "unit": "ns",
            "range": "± 77673.12006970301"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18555960.333333332,
            "unit": "ns",
            "range": "± 275083.1521871852"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45768487.307692304,
            "unit": "ns",
            "range": "± 497236.0469762466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91537012.1,
            "unit": "ns",
            "range": "± 1476933.2456636913"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188481754.5,
            "unit": "ns",
            "range": "± 3644020.934430137"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33436.80459770115,
            "unit": "ns",
            "range": "± 2699.0846029593263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 215388.57777777777,
            "unit": "ns",
            "range": "± 16371.64457514902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222389.89130434784,
            "unit": "ns",
            "range": "± 20965.354252769"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 203257.64583333334,
            "unit": "ns",
            "range": "± 18570.733107984255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3810065.5714285714,
            "unit": "ns",
            "range": "± 66638.74071059946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3406733.966666667,
            "unit": "ns",
            "range": "± 62417.417364142224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12786.675257731958,
            "unit": "ns",
            "range": "± 1149.6316893023215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58824.28571428572,
            "unit": "ns",
            "range": "± 5039.172878086055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54027.420454545456,
            "unit": "ns",
            "range": "± 6444.343636216629"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60055.97777777778,
            "unit": "ns",
            "range": "± 8254.959294202414"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3684.3541666666665,
            "unit": "ns",
            "range": "± 833.5430652741744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12297.815217391304,
            "unit": "ns",
            "range": "± 1336.2921304070694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1157691.074468085,
            "unit": "ns",
            "range": "± 97387.32062472064"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2330914.885057471,
            "unit": "ns",
            "range": "± 122901.67226627593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1978543.5808080807,
            "unit": "ns",
            "range": "± 195327.82726063574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13692234.873417722,
            "unit": "ns",
            "range": "± 1214214.1924629468"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2912815.659090909,
            "unit": "ns",
            "range": "± 102219.04216742233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2966627.4363636365,
            "unit": "ns",
            "range": "± 111177.86179990445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3566352.2209302327,
            "unit": "ns",
            "range": "± 124952.18402506835"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3698861.903846154,
            "unit": "ns",
            "range": "± 141065.15790344513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13700297.358974358,
            "unit": "ns",
            "range": "± 1276078.5218596386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4214552.92109375,
            "unit": "ns",
            "range": "± 52342.096511432406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1323299.9194010417,
            "unit": "ns",
            "range": "± 15077.749810658226"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 855798.2716346154,
            "unit": "ns",
            "range": "± 11125.571260818317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939582.1885416666,
            "unit": "ns",
            "range": "± 30066.226456780292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611942.391031901,
            "unit": "ns",
            "range": "± 4957.165858634626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 543634.7666766827,
            "unit": "ns",
            "range": "± 3432.889241434884"
          }
        ]
      }
    ]
  }
}