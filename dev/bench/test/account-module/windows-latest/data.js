window.BENCHMARK_DATA = {
  "lastUpdate": 1693548609696,
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
        "date": 1693548593264,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1486500,
            "unit": "ns",
            "range": "± 22418.423545952428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2566897.8873239434,
            "unit": "ns",
            "range": "± 120111.52300990338"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1800475.8241758242,
            "unit": "ns",
            "range": "± 100640.81604140467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4696700,
            "unit": "ns",
            "range": "± 186220.22073943767"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46504.395604395606,
            "unit": "ns",
            "range": "± 2611.2539383689073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7440405.882352941,
            "unit": "ns",
            "range": "± 152727.2874709536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20693613.333333332,
            "unit": "ns",
            "range": "± 309115.5351890909"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51710166.666666664,
            "unit": "ns",
            "range": "± 488772.388842944"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104560900,
            "unit": "ns",
            "range": "± 1647087.0277987309"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205559258.82352942,
            "unit": "ns",
            "range": "± 4164573.6621620143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4553252.213541667,
            "unit": "ns",
            "range": "± 13101.99671136391"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1441863.950892857,
            "unit": "ns",
            "range": "± 3780.58874069947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1054292.0833333333,
            "unit": "ns",
            "range": "± 2427.2300633512673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2671460.9895833335,
            "unit": "ns",
            "range": "± 7419.227684974983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 854916.85546875,
            "unit": "ns",
            "range": "± 2051.0638287193433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749405.2994791666,
            "unit": "ns",
            "range": "± 2960.2394537806763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3283050.8474576273,
            "unit": "ns",
            "range": "± 137993.72221213215"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3394637.0967741935,
            "unit": "ns",
            "range": "± 144217.47607189586"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4137028.846153846,
            "unit": "ns",
            "range": "± 169727.88410211148"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3791171.111111111,
            "unit": "ns",
            "range": "± 143631.10675714657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6143086.206896552,
            "unit": "ns",
            "range": "± 175998.36793914138"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 252012.96296296295,
            "unit": "ns",
            "range": "± 10562.036794287615"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 248603.33333333334,
            "unit": "ns",
            "range": "± 6347.059233971291"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 214592.3076923077,
            "unit": "ns",
            "range": "± 5847.4557254876645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4062031.5789473685,
            "unit": "ns",
            "range": "± 85662.749927528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3771406.6666666665,
            "unit": "ns",
            "range": "± 69890.19414835845"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21338.043478260868,
            "unit": "ns",
            "range": "± 1919.4689278865217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84658.42696629213,
            "unit": "ns",
            "range": "± 4677.4558204211635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71604.34782608696,
            "unit": "ns",
            "range": "± 3435.9019186939713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 82962.76595744681,
            "unit": "ns",
            "range": "± 11971.597067778268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5228.125,
            "unit": "ns",
            "range": "± 613.137423421536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19755.78947368421,
            "unit": "ns",
            "range": "± 1958.8704837810085"
          }
        ]
      }
    ]
  }
}