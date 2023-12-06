window.BENCHMARK_DATA = {
  "lastUpdate": 1701858309738,
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
        "date": 1701858298652,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1134615.2173913044,
            "unit": "ns",
            "range": "± 135018.6441621334"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2047890.9090909092,
            "unit": "ns",
            "range": "± 205974.41010367003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1898792.4731182796,
            "unit": "ns",
            "range": "± 274688.7987129843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8403414.285714285,
            "unit": "ns",
            "range": "± 332286.1373134474"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36638.63636363636,
            "unit": "ns",
            "range": "± 2913.994446865614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5436635.714285715,
            "unit": "ns",
            "range": "± 60887.64693639055"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13955413.333333334,
            "unit": "ns",
            "range": "± 124071.2172600114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35246392.85714286,
            "unit": "ns",
            "range": "± 377148.5617596369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 70066693.33333333,
            "unit": "ns",
            "range": "± 534372.2839084413"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 142545814.2857143,
            "unit": "ns",
            "range": "± 856320.8823953633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3279492.1875,
            "unit": "ns",
            "range": "± 7529.419389743076"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1066014.453125,
            "unit": "ns",
            "range": "± 2013.2677315265262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745805.2584134615,
            "unit": "ns",
            "range": "± 1680.399344531551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1921728.7527901786,
            "unit": "ns",
            "range": "± 5707.2390906651635"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618466.4438100961,
            "unit": "ns",
            "range": "± 1866.9174678117488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 583183.4049479166,
            "unit": "ns",
            "range": "± 908.7817005983125"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2266640.769230769,
            "unit": "ns",
            "range": "± 105140.31060188828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2430664.285714286,
            "unit": "ns",
            "range": "± 30267.92176400765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2879974.285714286,
            "unit": "ns",
            "range": "± 92444.89087418243"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3117170.8333333335,
            "unit": "ns",
            "range": "± 192576.82098958883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9395067.142857144,
            "unit": "ns",
            "range": "± 281923.75818029424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188651.06382978722,
            "unit": "ns",
            "range": "± 15774.681938281556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 182025.55555555556,
            "unit": "ns",
            "range": "± 10728.179433508421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 146131.50684931508,
            "unit": "ns",
            "range": "± 7266.817213890226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2889312.5,
            "unit": "ns",
            "range": "± 54681.68340495746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2545993.3333333335,
            "unit": "ns",
            "range": "± 47163.08281858153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12702.105263157895,
            "unit": "ns",
            "range": "± 2520.088606487175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58778.57142857143,
            "unit": "ns",
            "range": "± 7547.895743763963"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47896.77419354839,
            "unit": "ns",
            "range": "± 3879.1373876636885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 68867.01030927835,
            "unit": "ns",
            "range": "± 11494.534223286704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3090.425531914894,
            "unit": "ns",
            "range": "± 687.5340302719364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11642.857142857143,
            "unit": "ns",
            "range": "± 1678.1698270002262"
          }
        ]
      }
    ]
  }
}