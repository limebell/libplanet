window.BENCHMARK_DATA = {
  "lastUpdate": 1701858223188,
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
      }
    ]
  }
}