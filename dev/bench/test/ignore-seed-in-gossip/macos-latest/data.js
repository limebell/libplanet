window.BENCHMARK_DATA = {
  "lastUpdate": 1684224529469,
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
          "id": "a8bd0619eacfdf0e6f42a496360e481a2d05bec3",
          "message": "chore: exclude seed peers from gossip hearbeat target  [skip changelog]\n\n(cherry picked from commit e0db5f2fc026fed656d766bc6149518cbcac0521)",
          "timestamp": "2023-05-16T16:52:23+09:00",
          "tree_id": "e9bd47d902f3ae63f7ec596f1ebcc24f8165d46b",
          "url": "https://github.com/limebell/libplanet/commit/a8bd0619eacfdf0e6f42a496360e481a2d05bec3"
        },
        "date": 1684224516816,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8012757.25,
            "unit": "ns",
            "range": "± 184055.8275403574"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20418723.1,
            "unit": "ns",
            "range": "± 525983.6995989832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49906244.5,
            "unit": "ns",
            "range": "± 973880.2744628658"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 97146525.91666667,
            "unit": "ns",
            "range": "± 706125.0554314606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200221272.36666667,
            "unit": "ns",
            "range": "± 3281743.3982684496"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65017.88888888889,
            "unit": "ns",
            "range": "± 8779.04434977867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 381030.2105263158,
            "unit": "ns",
            "range": "± 21964.203984149637"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314496.1666666667,
            "unit": "ns",
            "range": "± 16713.503627643007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 301044.55555555556,
            "unit": "ns",
            "range": "± 16699.51936559321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5458577.466666667,
            "unit": "ns",
            "range": "± 90165.18273691321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3827000.8571428573,
            "unit": "ns",
            "range": "± 136417.99710123747"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20277.436170212764,
            "unit": "ns",
            "range": "± 4336.6466718072625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100544.05154639175,
            "unit": "ns",
            "range": "± 14317.239458640946"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102117.84020618557,
            "unit": "ns",
            "range": "± 14017.434305094408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 260688.54255319148,
            "unit": "ns",
            "range": "± 18176.51932130997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7666.979166666667,
            "unit": "ns",
            "range": "± 1752.9448364285176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17095.170454545456,
            "unit": "ns",
            "range": "± 3469.0442428883825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1619390.05,
            "unit": "ns",
            "range": "± 151209.3239558973"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2984212.1463414636,
            "unit": "ns",
            "range": "± 105879.00021688933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2549853.9791666665,
            "unit": "ns",
            "range": "± 227145.80972030782"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6562606.857142857,
            "unit": "ns",
            "range": "± 186951.62073306445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3278014.2352941176,
            "unit": "ns",
            "range": "± 85500.5185244099"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3371399.617647059,
            "unit": "ns",
            "range": "± 108519.44736369654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4453288.693877551,
            "unit": "ns",
            "range": "± 177875.99660346296"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4486394.34375,
            "unit": "ns",
            "range": "± 205826.02749812216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8315126.04,
            "unit": "ns",
            "range": "± 334028.7531402148"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6504596.627840909,
            "unit": "ns",
            "range": "± 151837.80498887497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2092453.7184895833,
            "unit": "ns",
            "range": "± 36829.61065815379"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1302548.5524902344,
            "unit": "ns",
            "range": "± 23798.68319888804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617467.8970853365,
            "unit": "ns",
            "range": "± 17254.23982410025"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 881986.6782226562,
            "unit": "ns",
            "range": "± 8256.641904268316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 699727.0358537947,
            "unit": "ns",
            "range": "± 8138.090579520494"
          }
        ]
      }
    ]
  }
}