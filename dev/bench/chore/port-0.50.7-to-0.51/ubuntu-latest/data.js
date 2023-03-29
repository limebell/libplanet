window.BENCHMARK_DATA = {
  "lastUpdate": 1680070933123,
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
        "date": 1680070930122,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3220209.277777778,
            "unit": "ns",
            "range": "± 66080.28134714848"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4936784.333333333,
            "unit": "ns",
            "range": "± 58087.952159593624"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23180911.2,
            "unit": "ns",
            "range": "± 372869.2155795189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6154076.666666667,
            "unit": "ns",
            "range": "± 171389.12577164642"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26707034.133333333,
            "unit": "ns",
            "range": "± 314851.2196239602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7637559.533333333,
            "unit": "ns",
            "range": "± 15412.727490461839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19205855.57142857,
            "unit": "ns",
            "range": "± 151948.28701629647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 49262750.85714286,
            "unit": "ns",
            "range": "± 354026.51893192256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 98343661.4,
            "unit": "ns",
            "range": "± 711233.9769282077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 194785798.57142857,
            "unit": "ns",
            "range": "± 1054696.9092679378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1309028.8,
            "unit": "ns",
            "range": "± 92961.79722630516"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2408054,
            "unit": "ns",
            "range": "± 55351.46412287081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2088446.6857142858,
            "unit": "ns",
            "range": "± 101393.39942164187"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4992202.269230769,
            "unit": "ns",
            "range": "± 135155.80713726146"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44567.743902439026,
            "unit": "ns",
            "range": "± 2341.42018637405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5927097.107142857,
            "unit": "ns",
            "range": "± 21627.465905999892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1993413.5228365385,
            "unit": "ns",
            "range": "± 1384.2663222562837"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1373843.0361328125,
            "unit": "ns",
            "range": "± 2128.127434484058"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2560955.054427083,
            "unit": "ns",
            "range": "± 2245.71075584222"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 814706.54453125,
            "unit": "ns",
            "range": "± 553.828563161574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 723271.6363932291,
            "unit": "ns",
            "range": "± 410.03307641313654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 188043.78723404257,
            "unit": "ns",
            "range": "± 7284.524394179672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193872.62162162163,
            "unit": "ns",
            "range": "± 6500.670979690187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 162954.66666666666,
            "unit": "ns",
            "range": "± 2963.4600112191897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 11327950.785714285,
            "unit": "ns",
            "range": "± 116209.17774836266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9115820.714285715,
            "unit": "ns",
            "range": "± 54998.16303425831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16334.177777777777,
            "unit": "ns",
            "range": "± 1381.034838976525"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50959.48387096774,
            "unit": "ns",
            "range": "± 4284.037616073496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 39111.294117647056,
            "unit": "ns",
            "range": "± 783.9977490964086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85457.89795918367,
            "unit": "ns",
            "range": "± 11410.48914669305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4368.04255319149,
            "unit": "ns",
            "range": "± 497.3391978716816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15943.329787234043,
            "unit": "ns",
            "range": "± 1091.4188495370076"
          }
        ]
      }
    ]
  }
}