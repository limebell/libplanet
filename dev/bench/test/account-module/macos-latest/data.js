window.BENCHMARK_DATA = {
  "lastUpdate": 1693548659064,
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
          "id": "313bcd946ab2f3abff8d49358876b80ce560308c",
          "message": "test: add regression test",
          "timestamp": "2023-09-01T14:53:37+09:00",
          "tree_id": "d904cd4bae8c5d67d0e5443d1727273ff148d520",
          "url": "https://github.com/limebell/libplanet/commit/313bcd946ab2f3abff8d49358876b80ce560308c"
        },
        "date": 1693548643088,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8779800,
            "unit": "ns",
            "range": "± 138409.4158224349"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22715028,
            "unit": "ns",
            "range": "± 315781.8335608889"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55798589.4,
            "unit": "ns",
            "range": "± 894658.4589747722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116529447.96666667,
            "unit": "ns",
            "range": "± 2178757.627893372"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 226287172.6875,
            "unit": "ns",
            "range": "± 4237142.991736259"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65308.734042553195,
            "unit": "ns",
            "range": "± 5325.173658989774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 355837.02597402595,
            "unit": "ns",
            "range": "± 18223.45957606209"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 343879.03571428574,
            "unit": "ns",
            "range": "± 18416.211286017526"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 298143.05263157893,
            "unit": "ns",
            "range": "± 10211.360133740207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4619093.8,
            "unit": "ns",
            "range": "± 63788.105044525575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4223143.466666667,
            "unit": "ns",
            "range": "± 55096.99319624136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19871.982352941177,
            "unit": "ns",
            "range": "± 3049.3205043706625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90925.67391304347,
            "unit": "ns",
            "range": "± 10919.047740660744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87599.73333333334,
            "unit": "ns",
            "range": "± 9013.751307326882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86204.65168539326,
            "unit": "ns",
            "range": "± 18064.991093461515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4711.325301204819,
            "unit": "ns",
            "range": "± 460.4050472385962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18357.367088607596,
            "unit": "ns",
            "range": "± 2742.620790305465"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1768779.775510204,
            "unit": "ns",
            "range": "± 185181.67923178503"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3340125.85,
            "unit": "ns",
            "range": "± 149051.37114054142"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2429032.5430107526,
            "unit": "ns",
            "range": "± 212338.31845086653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6836935.350574712,
            "unit": "ns",
            "range": "± 394944.28428346076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3659692.9054054054,
            "unit": "ns",
            "range": "± 176498.09905710528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3980333.6721311477,
            "unit": "ns",
            "range": "± 178502.5247190005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4968176.5,
            "unit": "ns",
            "range": "± 123050.49112121582"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4658084.894736842,
            "unit": "ns",
            "range": "± 99454.7642129575"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8096647.096491228,
            "unit": "ns",
            "range": "± 338050.23408859246"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5750302.745833334,
            "unit": "ns",
            "range": "± 89860.06248104143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1763882.8158854167,
            "unit": "ns",
            "range": "± 28408.05813377812"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1073499.8653564453,
            "unit": "ns",
            "range": "± 20193.76208283219"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2635087.98515625,
            "unit": "ns",
            "range": "± 44199.62792862481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 924609.5864583333,
            "unit": "ns",
            "range": "± 8971.820769069245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 864343.3294270834,
            "unit": "ns",
            "range": "± 13789.05963930237"
          }
        ]
      }
    ]
  }
}