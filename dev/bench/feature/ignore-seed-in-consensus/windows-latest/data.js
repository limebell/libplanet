window.BENCHMARK_DATA = {
  "lastUpdate": 1682669548110,
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
          "id": "01e6999f7023d54bfe9ee8540addaf0695bdeb2f",
          "message": "test: add regression test\n\n(cherry picked from commit 39e90e6de7b0babecc117fafbdf00cfdcfc8cb2a)",
          "timestamp": "2023-04-28T16:54:03+09:00",
          "tree_id": "50a677c7bc8dc80727c0f79c7c99b926394c55ab",
          "url": "https://github.com/limebell/libplanet/commit/01e6999f7023d54bfe9ee8540addaf0695bdeb2f"
        },
        "date": 1682669533217,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1487015.1515151516,
            "unit": "ns",
            "range": "± 142526.36158858784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2541907.272727273,
            "unit": "ns",
            "range": "± 106477.03256874913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2282927.8350515463,
            "unit": "ns",
            "range": "± 145613.77835323772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5619282.142857143,
            "unit": "ns",
            "range": "± 299448.9546221"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53295.833333333336,
            "unit": "ns",
            "range": "± 4554.417558617744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7087896.666666667,
            "unit": "ns",
            "range": "± 210794.2966632331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19813778.57142857,
            "unit": "ns",
            "range": "± 241374.8606455286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50006773.333333336,
            "unit": "ns",
            "range": "± 443773.3856480397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100036264.28571428,
            "unit": "ns",
            "range": "± 1336664.5304966809"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191258830,
            "unit": "ns",
            "range": "± 4051384.215185303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4878834.791666667,
            "unit": "ns",
            "range": "± 45746.08008273712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1529613.8932291667,
            "unit": "ns",
            "range": "± 6062.226669090107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1192391.1197916667,
            "unit": "ns",
            "range": "± 6724.351112338455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617057.03125,
            "unit": "ns",
            "range": "± 14727.587522647249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846121.15234375,
            "unit": "ns",
            "range": "± 2230.745246033345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770284.7916666666,
            "unit": "ns",
            "range": "± 2031.889955243458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3197747.8260869565,
            "unit": "ns",
            "range": "± 80665.05872808091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3342007.2916666665,
            "unit": "ns",
            "range": "± 192168.26193115333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3968731.8181818184,
            "unit": "ns",
            "range": "± 95745.59736919717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4138105.769230769,
            "unit": "ns",
            "range": "± 161407.84587857366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6621744.444444444,
            "unit": "ns",
            "range": "± 182496.24513172728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280039.1304347826,
            "unit": "ns",
            "range": "± 10661.341968081993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253603.0303030303,
            "unit": "ns",
            "range": "± 11958.762087941655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225405.10204081633,
            "unit": "ns",
            "range": "± 16603.485986283024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4039985.714285714,
            "unit": "ns",
            "range": "± 67362.89616858661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3555321.4285714286,
            "unit": "ns",
            "range": "± 57302.88190593275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23353.684210526317,
            "unit": "ns",
            "range": "± 2144.4540309145086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92568.0412371134,
            "unit": "ns",
            "range": "± 8439.114615780602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87990.8163265306,
            "unit": "ns",
            "range": "± 9234.137546839851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104571.13402061856,
            "unit": "ns",
            "range": "± 16720.346629449243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6992.929292929293,
            "unit": "ns",
            "range": "± 1243.0420654918112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22453,
            "unit": "ns",
            "range": "± 3312.0366647558217"
          }
        ]
      }
    ]
  }
}