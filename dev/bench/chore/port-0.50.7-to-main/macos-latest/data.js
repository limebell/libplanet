window.BENCHMARK_DATA = {
  "lastUpdate": 1680074611577,
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
        "date": 1680074605072,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9139794.931818182,
            "unit": "ns",
            "range": "± 498576.5838825518"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23526898.606382977,
            "unit": "ns",
            "range": "± 2142785.3485072604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56913337.82857143,
            "unit": "ns",
            "range": "± 2766115.321044731"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116835328.0120482,
            "unit": "ns",
            "range": "± 6236302.711542225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 242231234.26190478,
            "unit": "ns",
            "range": "± 8686620.522034343"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72222.16483516483,
            "unit": "ns",
            "range": "± 9202.156129303776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 233876.6595744681,
            "unit": "ns",
            "range": "± 13614.085385667328"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 222184,
            "unit": "ns",
            "range": "± 10274.027624016182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 204160.40721649484,
            "unit": "ns",
            "range": "± 11844.8196949504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12218695.083333334,
            "unit": "ns",
            "range": "± 97552.06985312402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9807588.25,
            "unit": "ns",
            "range": "± 69790.49778264947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20553.59139784946,
            "unit": "ns",
            "range": "± 2817.2254167213623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 63633.270833333336,
            "unit": "ns",
            "range": "± 10590.427746919353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59093.193181818184,
            "unit": "ns",
            "range": "± 3807.7628160642116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 127170.98969072165,
            "unit": "ns",
            "range": "± 19298.711312489475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8305.15625,
            "unit": "ns",
            "range": "± 796.7518973025814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22517.590909090908,
            "unit": "ns",
            "range": "± 2622.712711802808"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1642597.3265306123,
            "unit": "ns",
            "range": "± 213368.61945680436"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2738326.2790697673,
            "unit": "ns",
            "range": "± 98964.19540355312"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2493067.9081632653,
            "unit": "ns",
            "range": "± 231506.73975906818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6004390.023255814,
            "unit": "ns",
            "range": "± 220254.3360079637"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3818593.9791666665,
            "unit": "ns",
            "range": "± 357220.79656587396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 7359297.629032258,
            "unit": "ns",
            "range": "± 1851886.4801345272"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 26147081.702127658,
            "unit": "ns",
            "range": "± 1512919.9048983424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6734888.050561798,
            "unit": "ns",
            "range": "± 641582.5683031057"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 29991277.138461538,
            "unit": "ns",
            "range": "± 1390571.6484361957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6919613.732965528,
            "unit": "ns",
            "range": "± 507180.90420147876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1930688.638578869,
            "unit": "ns",
            "range": "± 36534.496023869724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375047.73828125,
            "unit": "ns",
            "range": "± 18524.612603529673"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2909142.2254231772,
            "unit": "ns",
            "range": "± 114628.27992931439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 858880.4375,
            "unit": "ns",
            "range": "± 7272.333482898838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 722971.3431803385,
            "unit": "ns",
            "range": "± 4567.229282450374"
          }
        ]
      }
    ]
  }
}