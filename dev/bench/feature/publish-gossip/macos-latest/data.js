window.BENCHMARK_DATA = {
  "lastUpdate": 1680689215642,
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
        "date": 1680671610974,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7853833.625,
            "unit": "ns",
            "range": "± 304719.96553449816"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19610944.64864865,
            "unit": "ns",
            "range": "± 932802.3921124141"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48191992.06666667,
            "unit": "ns",
            "range": "± 900188.1955054468"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96530559,
            "unit": "ns",
            "range": "± 2811449.8282738915"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202192506.21212122,
            "unit": "ns",
            "range": "± 6268994.383051084"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58360.488505747126,
            "unit": "ns",
            "range": "± 6813.5092527328125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373636.88636363635,
            "unit": "ns",
            "range": "± 14047.150607724287"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 309787.6447368421,
            "unit": "ns",
            "range": "± 15572.474736066795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279576.3958333333,
            "unit": "ns",
            "range": "± 11007.886938008687"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5426397.793103448,
            "unit": "ns",
            "range": "± 157506.1783396764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3926259,
            "unit": "ns",
            "range": "± 168161.42324978358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18453.684210526317,
            "unit": "ns",
            "range": "± 2112.8400432006906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90499.02061855671,
            "unit": "ns",
            "range": "± 9727.94589912162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91991.42708333333,
            "unit": "ns",
            "range": "± 11239.278971296477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 240066.41666666666,
            "unit": "ns",
            "range": "± 21427.44494170559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6222.697916666667,
            "unit": "ns",
            "range": "± 1085.7332144906711"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18154.065934065933,
            "unit": "ns",
            "range": "± 1916.97727223644"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1595278.1979166667,
            "unit": "ns",
            "range": "± 160335.1737374337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3047294.318681319,
            "unit": "ns",
            "range": "± 240762.0363467666"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2628335.206185567,
            "unit": "ns",
            "range": "± 296356.08524005575"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7194638.979166667,
            "unit": "ns",
            "range": "± 448600.62376036553"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3226972.967391304,
            "unit": "ns",
            "range": "± 230425.24116556268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3374319.563829787,
            "unit": "ns",
            "range": "± 194762.69108617876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4411575.616666666,
            "unit": "ns",
            "range": "± 158888.09122669994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4749846.03030303,
            "unit": "ns",
            "range": "± 508205.5310736856"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9037669.405405406,
            "unit": "ns",
            "range": "± 419196.94641157903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6372077.914713542,
            "unit": "ns",
            "range": "± 52441.16672599528"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1913056.7268229167,
            "unit": "ns",
            "range": "± 31995.446581198506"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1280511.9529854911,
            "unit": "ns",
            "range": "± 13491.457971604803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2549265.386160714,
            "unit": "ns",
            "range": "± 26767.996877513513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 783713.224609375,
            "unit": "ns",
            "range": "± 6197.669912928196"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724432.3207682292,
            "unit": "ns",
            "range": "± 12584.873977333555"
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
        "date": 1680689208830,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8992822.247191012,
            "unit": "ns",
            "range": "± 915082.9639030909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20453984.03968254,
            "unit": "ns",
            "range": "± 882745.5997937825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49604116.26470588,
            "unit": "ns",
            "range": "± 974887.5703271845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104312681.65,
            "unit": "ns",
            "range": "± 5445551.353045469"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214938126.50617284,
            "unit": "ns",
            "range": "± 11226004.4662446"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61307.41935483871,
            "unit": "ns",
            "range": "± 10012.659726047885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 396108.7802197802,
            "unit": "ns",
            "range": "± 36307.583022406456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 338700.2105263158,
            "unit": "ns",
            "range": "± 50013.41744161509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 311056.5430107527,
            "unit": "ns",
            "range": "± 31319.666770366915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5666955.422535211,
            "unit": "ns",
            "range": "± 257919.82232500426"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4628965.319148936,
            "unit": "ns",
            "range": "± 536890.5536320932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18375.913978494624,
            "unit": "ns",
            "range": "± 2503.574712355506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 93954.56382978724,
            "unit": "ns",
            "range": "± 15777.502865918106"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99001.55154639175,
            "unit": "ns",
            "range": "± 17220.94814243393"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 238109.71739130435,
            "unit": "ns",
            "range": "± 22217.236680097605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7182.68556701031,
            "unit": "ns",
            "range": "± 1670.8892114299058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18152.21505376344,
            "unit": "ns",
            "range": "± 2438.419988477314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1543165.7222222222,
            "unit": "ns",
            "range": "± 177676.5526643423"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2886556.5444444446,
            "unit": "ns",
            "range": "± 107601.74224192646"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2599461.255319149,
            "unit": "ns",
            "range": "± 218500.4198893107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6503622.6,
            "unit": "ns",
            "range": "± 195953.87845435945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3357078.765957447,
            "unit": "ns",
            "range": "± 201295.85180163744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3577483.8085106383,
            "unit": "ns",
            "range": "± 256527.6719925551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4650454.5,
            "unit": "ns",
            "range": "± 395582.2265331022"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4623914.96875,
            "unit": "ns",
            "range": "± 326149.84628985147"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8698474.337837838,
            "unit": "ns",
            "range": "± 414083.0369318611"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6839356.8984375,
            "unit": "ns",
            "range": "± 122179.22351906025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2112076.208550347,
            "unit": "ns",
            "range": "± 33627.05769576746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1327660.8999399038,
            "unit": "ns",
            "range": "± 11390.046890310949"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2595486.791015625,
            "unit": "ns",
            "range": "± 49927.11578863232"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 817414.1073521206,
            "unit": "ns",
            "range": "± 13407.982751217809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 745076.9575892857,
            "unit": "ns",
            "range": "± 11518.176292580196"
          }
        ]
      }
    ]
  }
}