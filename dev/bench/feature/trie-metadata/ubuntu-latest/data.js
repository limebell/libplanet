window.BENCHMARK_DATA = {
  "lastUpdate": 1701922644874,
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
          "id": "46b3ec7f3f72770d81fe9efbb02bc0841c1612a9",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-12-06T19:12:30+09:00",
          "tree_id": "5f4f39ed176058ea2d93ea8ac11c6c8f1ce56dbf",
          "url": "https://github.com/limebell/libplanet/commit/46b3ec7f3f72770d81fe9efbb02bc0841c1612a9"
        },
        "date": 1701858220287,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205188.6607142857,
            "unit": "ns",
            "range": "± 8818.346268952919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189291.87012987013,
            "unit": "ns",
            "range": "± 8833.292216249198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 168419.36111111112,
            "unit": "ns",
            "range": "± 5545.017027683646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3274722.0714285714,
            "unit": "ns",
            "range": "± 32704.723255010325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2853107.3,
            "unit": "ns",
            "range": "± 42903.047069942644"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13788.858695652174,
            "unit": "ns",
            "range": "± 2152.4426430132853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60905.606060606064,
            "unit": "ns",
            "range": "± 2874.809147531699"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52705.13725490196,
            "unit": "ns",
            "range": "± 2145.057724347835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 72154.02061855671,
            "unit": "ns",
            "range": "± 15083.148557095223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3717.467741935484,
            "unit": "ns",
            "range": "± 460.1292221996117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14464.572916666666,
            "unit": "ns",
            "range": "± 2187.3849984557583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3731477.643329327,
            "unit": "ns",
            "range": "± 5280.193679053429"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1186188.384014423,
            "unit": "ns",
            "range": "± 7672.738640822147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 766595.3591496394,
            "unit": "ns",
            "range": "± 1288.4450202414732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1943767.568359375,
            "unit": "ns",
            "range": "± 2872.5023283111072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624970.8576660156,
            "unit": "ns",
            "range": "± 1522.5267750119294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 578050.3167067308,
            "unit": "ns",
            "range": "± 1442.8771849815898"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38220.82978723404,
            "unit": "ns",
            "range": "± 4281.8900619906335"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2398011.388888889,
            "unit": "ns",
            "range": "± 100822.59089981556"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2541227.606060606,
            "unit": "ns",
            "range": "± 70299.20907180401"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3208449.3571428573,
            "unit": "ns",
            "range": "± 91116.28809718086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3308223.0735294116,
            "unit": "ns",
            "range": "± 157565.86177113708"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10712023.243243244,
            "unit": "ns",
            "range": "± 443748.3088889501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5591553.071428572,
            "unit": "ns",
            "range": "± 29071.563691939682"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14067011.692307692,
            "unit": "ns",
            "range": "± 72859.29060568805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35979078.64285714,
            "unit": "ns",
            "range": "± 191901.3920861269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74013322.85714285,
            "unit": "ns",
            "range": "± 1000176.7108346872"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150369245.6153846,
            "unit": "ns",
            "range": "± 797668.2913206612"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1120996.07,
            "unit": "ns",
            "range": "± 120361.20389677025"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2032692.4242424243,
            "unit": "ns",
            "range": "± 94608.97172472365"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1947180.543478261,
            "unit": "ns",
            "range": "± 158062.7135099545"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9302429.129032258,
            "unit": "ns",
            "range": "± 337052.34391505213"
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
          "id": "1288a2c7e1f7316ea786f3a4e8e8be6e1bdc67c6",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-12-07T13:06:06+09:00",
          "tree_id": "3bf99737f60078b5c9ca653135fc191dfdfa742a",
          "url": "https://github.com/limebell/libplanet/commit/1288a2c7e1f7316ea786f3a4e8e8be6e1bdc67c6"
        },
        "date": 1701922642153,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201605.15432098764,
            "unit": "ns",
            "range": "± 10338.536722090432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197645.67164179104,
            "unit": "ns",
            "range": "± 9207.593576299121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172576.89743589744,
            "unit": "ns",
            "range": "± 5940.807457943884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3120971.0714285714,
            "unit": "ns",
            "range": "± 47377.46039312573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2797934.6666666665,
            "unit": "ns",
            "range": "± 48211.05234526721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15050.959183673469,
            "unit": "ns",
            "range": "± 2945.6765589706943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64954.19587628866,
            "unit": "ns",
            "range": "± 6118.348469356973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52195.53658536585,
            "unit": "ns",
            "range": "± 1719.3351490846828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61031.65957446808,
            "unit": "ns",
            "range": "± 7171.938220582605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2931.108695652174,
            "unit": "ns",
            "range": "± 451.25272411638235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14749.902173913044,
            "unit": "ns",
            "range": "± 1436.2528172853333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3763009.8080729167,
            "unit": "ns",
            "range": "± 57074.71483104722"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218443.514423077,
            "unit": "ns",
            "range": "± 6985.805103108365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765353.5925292969,
            "unit": "ns",
            "range": "± 866.8861856125455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933566.0205729166,
            "unit": "ns",
            "range": "± 3265.692523939814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 616319.6950334822,
            "unit": "ns",
            "range": "± 623.3497625971103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571169.5703938802,
            "unit": "ns",
            "range": "± 4035.6824356546877"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39750.397849462366,
            "unit": "ns",
            "range": "± 6329.119693132319"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2385836.2,
            "unit": "ns",
            "range": "± 80946.23323950062"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2683463.2666666666,
            "unit": "ns",
            "range": "± 42161.703380245555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3187407.1,
            "unit": "ns",
            "range": "± 39324.05904750206"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3264443.433333333,
            "unit": "ns",
            "range": "± 145395.06792434293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10294470.042857142,
            "unit": "ns",
            "range": "± 399600.3559491036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5594954.214285715,
            "unit": "ns",
            "range": "± 34430.475887992405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14274123.2,
            "unit": "ns",
            "range": "± 127597.17527280923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35951591.35714286,
            "unit": "ns",
            "range": "± 186209.7789527496"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74940682.28571428,
            "unit": "ns",
            "range": "± 288459.421748184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147637602.53846154,
            "unit": "ns",
            "range": "± 1054969.060129697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1105381.0612244897,
            "unit": "ns",
            "range": "± 113557.3202845486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1957338.6170212766,
            "unit": "ns",
            "range": "± 75303.53628123205"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1793768.043478261,
            "unit": "ns",
            "range": "± 111732.3109139604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9868445.989130436,
            "unit": "ns",
            "range": "± 1461846.6940996205"
          }
        ]
      }
    ]
  }
}