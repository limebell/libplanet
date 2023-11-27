window.BENCHMARK_DATA = {
  "lastUpdate": 1701074789136,
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
      },
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
          "id": "98914965b2a82b0c5c77178b74d525436924d2c7",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-11-27T17:29:40+09:00",
          "tree_id": "b6944d1bd4caae010e0e33f5d500a9c14a66bba5",
          "url": "https://github.com/limebell/libplanet/commit/98914965b2a82b0c5c77178b74d525436924d2c7"
        },
        "date": 1701074782069,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7935254.583333333,
            "unit": "ns",
            "range": "± 199843.67112601583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19640228.85714286,
            "unit": "ns",
            "range": "± 441156.887246746"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49217633.38181818,
            "unit": "ns",
            "range": "± 1801787.1635135706"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99513535.625,
            "unit": "ns",
            "range": "± 3020098.005358048"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 206543931.7804878,
            "unit": "ns",
            "range": "± 7428182.749085942"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52259.44623655914,
            "unit": "ns",
            "range": "± 13953.536500741051"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 242002.73913043478,
            "unit": "ns",
            "range": "± 24026.240811342206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 239467.7619047619,
            "unit": "ns",
            "range": "± 19680.535901655792"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226202.32222222222,
            "unit": "ns",
            "range": "± 16420.872074330375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4056886.8095238097,
            "unit": "ns",
            "range": "± 143402.81323230182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3461097.8260869565,
            "unit": "ns",
            "range": "± 132963.8527020791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17736.702127659573,
            "unit": "ns",
            "range": "± 4382.768845037082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84498.61363636363,
            "unit": "ns",
            "range": "± 14883.663991975187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76312.54301075269,
            "unit": "ns",
            "range": "± 15260.951350704347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76770.16483516483,
            "unit": "ns",
            "range": "± 10416.714741503716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5541.473684210527,
            "unit": "ns",
            "range": "± 1430.9518543286124"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18078.626315789475,
            "unit": "ns",
            "range": "± 3855.3362969523137"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1343397.4137931035,
            "unit": "ns",
            "range": "± 149001.89290787253"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2507556.787234043,
            "unit": "ns",
            "range": "± 179993.36674298794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2205275.1894736844,
            "unit": "ns",
            "range": "± 245527.41249366853"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15083992.090909092,
            "unit": "ns",
            "range": "± 2655110.9608423067"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3396595.25,
            "unit": "ns",
            "range": "± 589350.9128323072"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4017845.04,
            "unit": "ns",
            "range": "± 897279.9529398591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5092483.282828283,
            "unit": "ns",
            "range": "± 1164070.629578746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5045895.04040404,
            "unit": "ns",
            "range": "± 1195184.4256529133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17777648.510416668,
            "unit": "ns",
            "range": "± 4241631.256190728"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4984998.02834109,
            "unit": "ns",
            "range": "± 490196.3750537091"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1399112.2072916667,
            "unit": "ns",
            "range": "± 21863.561941150638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 892810.1703776042,
            "unit": "ns",
            "range": "± 3858.0347613848594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1968907.6162109375,
            "unit": "ns",
            "range": "± 38111.93760235211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 621971.0900530134,
            "unit": "ns",
            "range": "± 3733.676172326225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 585152.6356119792,
            "unit": "ns",
            "range": "± 9720.111439068183"
          }
        ]
      }
    ]
  }
}