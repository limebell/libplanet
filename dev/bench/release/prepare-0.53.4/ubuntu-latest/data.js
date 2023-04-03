window.BENCHMARK_DATA = {
  "lastUpdate": 1680516667078,
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
          "id": "10af4f3f30a09a30b62fe11249fc8dccd5994997",
          "message": "chore: prepare 0.53.4",
          "timestamp": "2023-04-03T18:53:01+09:00",
          "tree_id": "4792564cb097fb586ec466bed1d1f27d97fdb7bc",
          "url": "https://github.com/limebell/libplanet/commit/10af4f3f30a09a30b62fe11249fc8dccd5994997"
        },
        "date": 1680516663569,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4198315.47761194,
            "unit": "ns",
            "range": "± 187891.08126480973"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 6618311.052631579,
            "unit": "ns",
            "range": "± 224340.73185488704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 31228872.42105263,
            "unit": "ns",
            "range": "± 1052003.624418986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 8151624.682926829,
            "unit": "ns",
            "range": "± 289258.9466677253"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 36364290.80701754,
            "unit": "ns",
            "range": "± 1572096.7647433865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10620974.090909092,
            "unit": "ns",
            "range": "± 321059.15998324624"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29208419.156626508,
            "unit": "ns",
            "range": "± 1552243.080745649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66185878.09090909,
            "unit": "ns",
            "range": "± 1564664.9645111435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134857886.625,
            "unit": "ns",
            "range": "± 2547922.989464029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269520257.21428573,
            "unit": "ns",
            "range": "± 4056671.0547740455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1728685.0531914893,
            "unit": "ns",
            "range": "± 109586.2835426773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3275689.915254237,
            "unit": "ns",
            "range": "± 144329.0862614979"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2777982.4945054944,
            "unit": "ns",
            "range": "± 163643.6757555454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6702514.635135135,
            "unit": "ns",
            "range": "± 334737.2904435175"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59549.606741573036,
            "unit": "ns",
            "range": "± 3370.199878136369"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7410227.315104167,
            "unit": "ns",
            "range": "± 97363.97631841814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2326006.3680889425,
            "unit": "ns",
            "range": "± 26071.252771487143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1752881.5412454044,
            "unit": "ns",
            "range": "± 35241.77141819729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3369490.3172433036,
            "unit": "ns",
            "range": "± 51195.28880865568"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1069823.0143229167,
            "unit": "ns",
            "range": "± 22208.95606209629"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 978339.2347167969,
            "unit": "ns",
            "range": "± 21196.556767464554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 240582.09523809524,
            "unit": "ns",
            "range": "± 11016.692167495834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 238326.7068965517,
            "unit": "ns",
            "range": "± 10417.033715933676"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 218373.83870967742,
            "unit": "ns",
            "range": "± 12293.61826959359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 15082581.310344828,
            "unit": "ns",
            "range": "± 393988.15616100724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11962265.777777778,
            "unit": "ns",
            "range": "± 240838.7379734436"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25271.30769230769,
            "unit": "ns",
            "range": "± 2003.3275745469514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65979.18478260869,
            "unit": "ns",
            "range": "± 5447.77828277064"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52667.927835051545,
            "unit": "ns",
            "range": "± 3224.9320285066433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118310.5052631579,
            "unit": "ns",
            "range": "± 16635.50335486284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7467.438775510204,
            "unit": "ns",
            "range": "± 1223.4601351897354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26677.680412371134,
            "unit": "ns",
            "range": "± 2749.9665018656433"
          }
        ]
      }
    ]
  }
}