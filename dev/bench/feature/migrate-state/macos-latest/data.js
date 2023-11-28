window.BENCHMARK_DATA = {
  "lastUpdate": 1701148995771,
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
          "id": "255f180b2d949d05246640865338e4ad7661376e",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-11-27T17:30:10+09:00",
          "tree_id": "c21e21a8b01befe44fd3c52fe70a4a0806f05b78",
          "url": "https://github.com/limebell/libplanet/commit/255f180b2d949d05246640865338e4ad7661376e"
        },
        "date": 1701074912624,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10122480.5,
            "unit": "ns",
            "range": "± 2304412.3381829853"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21933744.835164834,
            "unit": "ns",
            "range": "± 1380299.963564235"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53286015.375,
            "unit": "ns",
            "range": "± 1044619.2364507989"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101314580.78571428,
            "unit": "ns",
            "range": "± 1347015.0280328481"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 215536915.42857143,
            "unit": "ns",
            "range": "± 1536341.4536984866"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68471.70833333333,
            "unit": "ns",
            "range": "± 8378.840819106772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 335375.25531914894,
            "unit": "ns",
            "range": "± 42005.04892283045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 339203.56382978725,
            "unit": "ns",
            "range": "± 46375.406821519886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317453.1222222222,
            "unit": "ns",
            "range": "± 25138.798793998067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4270389.653846154,
            "unit": "ns",
            "range": "± 147789.38622785904"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3673966.4838709678,
            "unit": "ns",
            "range": "± 111969.52293395763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20174.947916666668,
            "unit": "ns",
            "range": "± 2537.853201220075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97478.97916666667,
            "unit": "ns",
            "range": "± 16968.147990607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90601.21052631579,
            "unit": "ns",
            "range": "± 10054.81637304395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104693.95652173914,
            "unit": "ns",
            "range": "± 10870.645452204732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5455.055555555556,
            "unit": "ns",
            "range": "± 1266.929918435592"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17610.633333333335,
            "unit": "ns",
            "range": "± 1898.1077889971596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1599155.5555555555,
            "unit": "ns",
            "range": "± 183608.3931934653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2807217.6428571427,
            "unit": "ns",
            "range": "± 124639.43515097724"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2845974.3061224488,
            "unit": "ns",
            "range": "± 357102.2010006569"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19385464.343373492,
            "unit": "ns",
            "range": "± 1972000.5258109209"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3308543.430107527,
            "unit": "ns",
            "range": "± 246610.4948745481"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3444229.3172043012,
            "unit": "ns",
            "range": "± 229306.864417102"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4673103.568181818,
            "unit": "ns",
            "range": "± 174709.41316946404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4694903.797979798,
            "unit": "ns",
            "range": "± 366802.75975209713"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 20661572.164948452,
            "unit": "ns",
            "range": "± 2344995.619775119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5783856.555376838,
            "unit": "ns",
            "range": "± 186355.13819675677"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1803749.5083984374,
            "unit": "ns",
            "range": "± 17844.087712625576"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1056845.6312779018,
            "unit": "ns",
            "range": "± 8881.223659190337"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2970103.5190234375,
            "unit": "ns",
            "range": "± 193436.62368571793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839627.9330078125,
            "unit": "ns",
            "range": "± 12883.13461852711"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740255.2672526041,
            "unit": "ns",
            "range": "± 12885.507262198314"
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
          "id": "4090f2c08e1dc9bfc36343d2e39fdbe4cc719a77",
          "message": "chore: apply suggestions from the code review",
          "timestamp": "2023-11-28T14:02:56+09:00",
          "tree_id": "24ccdb8812b8876e89081ca0b38e36135ebe06cf",
          "url": "https://github.com/limebell/libplanet/commit/4090f2c08e1dc9bfc36343d2e39fdbe4cc719a77"
        },
        "date": 1701148988965,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8815456.602564102,
            "unit": "ns",
            "range": "± 308343.53730665194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21444278.477272727,
            "unit": "ns",
            "range": "± 797163.9253371623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52566220.29787234,
            "unit": "ns",
            "range": "± 2042563.1624284456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105909339.60526316,
            "unit": "ns",
            "range": "± 2036604.2041848293"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 211625260.65384614,
            "unit": "ns",
            "range": "± 5654917.910625349"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67206.43684210526,
            "unit": "ns",
            "range": "± 8801.358241179918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 298896.74725274724,
            "unit": "ns",
            "range": "± 17905.980863383425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301665.35164835164,
            "unit": "ns",
            "range": "± 24178.024490743028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 308575.2688172043,
            "unit": "ns",
            "range": "± 26553.54584450224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4340310.505747126,
            "unit": "ns",
            "range": "± 236522.98275210077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3729193.8103448274,
            "unit": "ns",
            "range": "± 108562.54368470325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21211.545454545456,
            "unit": "ns",
            "range": "± 3413.331260918095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101993.07291666667,
            "unit": "ns",
            "range": "± 15910.808324594815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74047.32608695653,
            "unit": "ns",
            "range": "± 2829.5038281519555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99570.35416666667,
            "unit": "ns",
            "range": "± 12135.360073142641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6818.015463917526,
            "unit": "ns",
            "range": "± 1584.3360012517996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22232.79213483146,
            "unit": "ns",
            "range": "± 5575.446374715105"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1577016.16,
            "unit": "ns",
            "range": "± 184083.0340929414"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2989148.0774647887,
            "unit": "ns",
            "range": "± 145104.09469733512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2768416.845360825,
            "unit": "ns",
            "range": "± 283380.43884151056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 20628146.74698795,
            "unit": "ns",
            "range": "± 1936482.3980146972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3254769.08,
            "unit": "ns",
            "range": "± 149753.62911911303"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3441199.8333333335,
            "unit": "ns",
            "range": "± 120870.54540527689"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4278516.037037037,
            "unit": "ns",
            "range": "± 106689.53958258855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4785027.84375,
            "unit": "ns",
            "range": "± 430050.80136271345"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 21683951.04040404,
            "unit": "ns",
            "range": "± 2740498.2016349747"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5746194.87109375,
            "unit": "ns",
            "range": "± 121404.46809060976"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1822154.80859375,
            "unit": "ns",
            "range": "± 26052.08677959635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1109766.3194754464,
            "unit": "ns",
            "range": "± 17133.213645980926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2645963.9555412373,
            "unit": "ns",
            "range": "± 153130.2161876082"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822530.5181206597,
            "unit": "ns",
            "range": "± 15190.750678530167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755027.2885454963,
            "unit": "ns",
            "range": "± 14637.695645589323"
          }
        ]
      }
    ]
  }
}