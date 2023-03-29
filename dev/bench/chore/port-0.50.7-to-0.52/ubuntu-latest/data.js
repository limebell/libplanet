window.BENCHMARK_DATA = {
  "lastUpdate": 1680071967395,
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
          "id": "3bdf5893b11c5c3d825a23e8c3a9a1d70e04d780",
          "message": "docs: port changelog",
          "timestamp": "2023-03-29T15:26:54+09:00",
          "tree_id": "854dfc97e54aae3f4aacf7783b5388ed1462fb1e",
          "url": "https://github.com/limebell/libplanet/commit/3bdf5893b11c5c3d825a23e8c3a9a1d70e04d780"
        },
        "date": 1680071963961,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3225889.7333333334,
            "unit": "ns",
            "range": "± 58955.97958461001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5144521.764705882,
            "unit": "ns",
            "range": "± 104308.33477695432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23839077.333333332,
            "unit": "ns",
            "range": "± 284661.5277346731"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6108103.694444444,
            "unit": "ns",
            "range": "± 178970.86508029644"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27708480.2,
            "unit": "ns",
            "range": "± 330617.85375268006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7670604.928571428,
            "unit": "ns",
            "range": "± 26663.10774334018"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19544603.266666666,
            "unit": "ns",
            "range": "± 94925.26939008891"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 50278611.93333333,
            "unit": "ns",
            "range": "± 224939.2637089484"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 99563013.4,
            "unit": "ns",
            "range": "± 435151.40911572374"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 200195419.93333334,
            "unit": "ns",
            "range": "± 711347.4750641978"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1354631.111111111,
            "unit": "ns",
            "range": "± 95922.3091976734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2503881.5675675673,
            "unit": "ns",
            "range": "± 83573.82508016507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2154092,
            "unit": "ns",
            "range": "± 102095.57159008198"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5020617,
            "unit": "ns",
            "range": "± 139938.63556441313"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44960.40845070423,
            "unit": "ns",
            "range": "± 2072.0139242324794"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6266144.379464285,
            "unit": "ns",
            "range": "± 14834.735464738793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1829498.055438702,
            "unit": "ns",
            "range": "± 2417.2225865312075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1382140.8536551339,
            "unit": "ns",
            "range": "± 581.7648850326804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2589253.303485577,
            "unit": "ns",
            "range": "± 1281.5558897821493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 806782.9333844866,
            "unit": "ns",
            "range": "± 610.5070399616053"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 752925.9643179086,
            "unit": "ns",
            "range": "± 1371.509357424215"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 198199.5,
            "unit": "ns",
            "range": "± 5929.858425651987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 198296.33333333334,
            "unit": "ns",
            "range": "± 6194.4344408240095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166718.25,
            "unit": "ns",
            "range": "± 2642.504859661252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11573619.266666668,
            "unit": "ns",
            "range": "± 83679.03187048086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9351677.866666667,
            "unit": "ns",
            "range": "± 79316.32515068713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17578.68085106383,
            "unit": "ns",
            "range": "± 1128.9803203401716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52701.936170212764,
            "unit": "ns",
            "range": "± 3503.9585381026077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37947,
            "unit": "ns",
            "range": "± 741.5375917645713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87588.45918367348,
            "unit": "ns",
            "range": "± 11090.443726231544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4663.53125,
            "unit": "ns",
            "range": "± 599.9317847735515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17005.279569892475,
            "unit": "ns",
            "range": "± 1163.0470509529046"
          }
        ]
      }
    ]
  }
}