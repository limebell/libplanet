window.BENCHMARK_DATA = {
  "lastUpdate": 1690884114827,
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
          "id": "1a400abe665869ad4df2dedbd0bb944083c434c3",
          "message": "refactor: minor refactoring",
          "timestamp": "2023-08-01T18:40:56+09:00",
          "tree_id": "c2eec30c5428e1d8a614317b3457f5b268835a5b",
          "url": "https://github.com/limebell/libplanet/commit/1a400abe665869ad4df2dedbd0bb944083c434c3"
        },
        "date": 1690884111100,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 400160.7849462366,
            "unit": "ns",
            "range": "± 38203.4912614272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 364516.8494623656,
            "unit": "ns",
            "range": "± 29626.76587690459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 347168.3125,
            "unit": "ns",
            "range": "± 33808.208642066886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5461517.666666667,
            "unit": "ns",
            "range": "± 147723.71064175593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5715328.150537634,
            "unit": "ns",
            "range": "± 324250.16362688853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 30010.81818181818,
            "unit": "ns",
            "range": "± 9411.208056835943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 148858.05050505052,
            "unit": "ns",
            "range": "± 18922.603756512857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 138532.96703296702,
            "unit": "ns",
            "range": "± 17308.48727419942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 148312.8144329897,
            "unit": "ns",
            "range": "± 28616.7112789632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7676.894736842105,
            "unit": "ns",
            "range": "± 1223.552940134766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23789.489361702126,
            "unit": "ns",
            "range": "± 8063.628567334226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1943936.7282608696,
            "unit": "ns",
            "range": "± 144368.99871632384"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3672154.551020408,
            "unit": "ns",
            "range": "± 259692.60512232344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2444270.448979592,
            "unit": "ns",
            "range": "± 222296.44948021029"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6961837.602150538,
            "unit": "ns",
            "range": "± 481260.45004808076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7368154.474724265,
            "unit": "ns",
            "range": "± 146442.64013563487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2448702.849909856,
            "unit": "ns",
            "range": "± 65350.03332068074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1727570.6842447917,
            "unit": "ns",
            "range": "± 10400.307630176425"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3422703.356026786,
            "unit": "ns",
            "range": "± 57499.266238841075"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1050311.6170372595,
            "unit": "ns",
            "range": "± 13788.846292325772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1014774.2764616936,
            "unit": "ns",
            "range": "± 30690.665715954045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4484243.686046512,
            "unit": "ns",
            "range": "± 243914.14853853136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4741798.888888889,
            "unit": "ns",
            "range": "± 216433.26932441597"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5982901.627906977,
            "unit": "ns",
            "range": "± 221519.0857617361"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5529242.846153846,
            "unit": "ns",
            "range": "± 76775.93779395355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8671116.771428572,
            "unit": "ns",
            "range": "± 278944.5867833088"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9800195.306122448,
            "unit": "ns",
            "range": "± 642826.755036752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26450681.854166668,
            "unit": "ns",
            "range": "± 1023310.0146182899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 67738999.5076923,
            "unit": "ns",
            "range": "± 3084834.0625890954"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139811962.375,
            "unit": "ns",
            "range": "± 2682371.813804837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 278337276.28,
            "unit": "ns",
            "range": "± 11236957.756347863"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74266.39583333333,
            "unit": "ns",
            "range": "± 16390.712607403893"
          }
        ]
      }
    ]
  }
}