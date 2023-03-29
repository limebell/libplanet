window.BENCHMARK_DATA = {
  "lastUpdate": 1680071265892,
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
          "id": "d0b037ac11087c14d2f6d1f2c35fdaf253955f70",
          "message": "docs: update changelog",
          "timestamp": "2023-03-29T15:09:25+09:00",
          "tree_id": "66c09e34a079fe78451c2a4a5697733cec8a69b0",
          "url": "https://github.com/limebell/libplanet/commit/d0b037ac11087c14d2f6d1f2c35fdaf253955f70"
        },
        "date": 1680071259830,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 8450185.583333334,
            "unit": "ns",
            "range": "± 377300.3235510206"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 20684038.61764706,
            "unit": "ns",
            "range": "± 422083.39213816536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 54534881.829896905,
            "unit": "ns",
            "range": "± 3176023.6479836074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 113869599.1091954,
            "unit": "ns",
            "range": "± 6229847.2576079145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 223660591.25,
            "unit": "ns",
            "range": "± 7930482.462428984"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72095.1170212766,
            "unit": "ns",
            "range": "± 8629.489249774011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 237863.02173913043,
            "unit": "ns",
            "range": "± 33002.22658471656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237207,
            "unit": "ns",
            "range": "± 25288.44172457336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 228691.91758241758,
            "unit": "ns",
            "range": "± 18430.229504247716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13771726.022222223,
            "unit": "ns",
            "range": "± 762335.3358436739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12002854.397959184,
            "unit": "ns",
            "range": "± 850081.4623175282"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19345.263157894737,
            "unit": "ns",
            "range": "± 3587.2106517179095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52884.36666666667,
            "unit": "ns",
            "range": "± 5025.606631055833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 57051.01648351648,
            "unit": "ns",
            "range": "± 6341.478191439521"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128467.35483870968,
            "unit": "ns",
            "range": "± 18075.621840073152"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8066.5625,
            "unit": "ns",
            "range": "± 1343.4264660698188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21561.319587628866,
            "unit": "ns",
            "range": "± 4934.439065018754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1721727.3854166667,
            "unit": "ns",
            "range": "± 183358.8716075301"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2886803,
            "unit": "ns",
            "range": "± 120967.75277796535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2598385.9684210527,
            "unit": "ns",
            "range": "± 251925.9906912655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6102522.151162791,
            "unit": "ns",
            "range": "± 226023.29724493145"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3696856.994736842,
            "unit": "ns",
            "range": "± 323559.18336746807"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5469977.258064516,
            "unit": "ns",
            "range": "± 423409.48110851843"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 27688941.133802816,
            "unit": "ns",
            "range": "± 1357526.9466376216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 7157104.2,
            "unit": "ns",
            "range": "± 597403.7902102104"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 32303859.760416668,
            "unit": "ns",
            "range": "± 2346909.9647723907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7173436.178013393,
            "unit": "ns",
            "range": "± 109770.75229439422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2153187.191778274,
            "unit": "ns",
            "range": "± 77294.32071197893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1385597.0376674107,
            "unit": "ns",
            "range": "± 18879.264641187394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2976596.2252604165,
            "unit": "ns",
            "range": "± 28847.406120656626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811848.5870535715,
            "unit": "ns",
            "range": "± 18230.43581974342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773409.9780598958,
            "unit": "ns",
            "range": "± 9701.074166902234"
          }
        ]
      }
    ]
  }
}