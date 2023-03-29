window.BENCHMARK_DATA = {
  "lastUpdate": 1680074682247,
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
          "id": "02329f5313b1f2b9f6ebd3b25875a925b2a8d4c9",
          "message": "docs: update changelog",
          "timestamp": "2023-03-29T16:05:25+09:00",
          "tree_id": "7c7d9dbc5dbc68d2a7a569c855bc984be3575069",
          "url": "https://github.com/limebell/libplanet/commit/02329f5313b1f2b9f6ebd3b25875a925b2a8d4c9"
        },
        "date": 1680074667467,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1418903.0612244897,
            "unit": "ns",
            "range": "± 120231.76798071884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2540793.3333333335,
            "unit": "ns",
            "range": "± 74990.39448067876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2430100,
            "unit": "ns",
            "range": "± 47723.03427067478"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5267145.2830188675,
            "unit": "ns",
            "range": "± 216882.01114008596"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53006.18556701031,
            "unit": "ns",
            "range": "± 5392.738451554354"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7243357.142857143,
            "unit": "ns",
            "range": "± 307718.32920687407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19357242.85714286,
            "unit": "ns",
            "range": "± 240948.56685220575"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49272126.666666664,
            "unit": "ns",
            "range": "± 660906.0874140533"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99673873.33333333,
            "unit": "ns",
            "range": "± 1577232.1735363172"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202916310,
            "unit": "ns",
            "range": "± 2447419.6381962313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4829319.583333333,
            "unit": "ns",
            "range": "± 22985.76499888437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1527927.0442708333,
            "unit": "ns",
            "range": "± 5894.521755650123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1184129.453125,
            "unit": "ns",
            "range": "± 6429.267437777351"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2675152.1875,
            "unit": "ns",
            "range": "± 11604.922729730826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 837689.0885416666,
            "unit": "ns",
            "range": "± 2676.974218814144"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769230.2994791666,
            "unit": "ns",
            "range": "± 3098.0486526052186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3407523.076923077,
            "unit": "ns",
            "range": "± 91409.44068395697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5198479.411764706,
            "unit": "ns",
            "range": "± 163448.70157981783"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23776800,
            "unit": "ns",
            "range": "± 375277.5563309299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6340747.619047619,
            "unit": "ns",
            "range": "± 148720.95554778964"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26950933.333333332,
            "unit": "ns",
            "range": "± 428805.9928730119"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 190401.04166666666,
            "unit": "ns",
            "range": "± 11951.476409933335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 189305.95238095237,
            "unit": "ns",
            "range": "± 10120.078469985743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174322.72727272726,
            "unit": "ns",
            "range": "± 12542.375667474025"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11293346.666666666,
            "unit": "ns",
            "range": "± 165183.66776179205"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9217635.714285715,
            "unit": "ns",
            "range": "± 105040.62662493136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25135.78947368421,
            "unit": "ns",
            "range": "± 2213.878650380689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 60690.721649484534,
            "unit": "ns",
            "range": "± 5244.403415273332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47150,
            "unit": "ns",
            "range": "± 3609.8569799550696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 114103.33333333333,
            "unit": "ns",
            "range": "± 16476.332702571974"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7757.575757575758,
            "unit": "ns",
            "range": "± 1081.0134048415514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23054.255319148935,
            "unit": "ns",
            "range": "± 2288.243205249226"
          }
        ]
      }
    ]
  }
}