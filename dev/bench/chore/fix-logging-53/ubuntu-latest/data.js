window.BENCHMARK_DATA = {
  "lastUpdate": 1680512183617,
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
          "id": "a944c605d4ed1590fce392dc82c4287359023f33",
          "message": "﻿chore: adjust log level  [skip changelog]\n\n(cherry picked from commit 760e5fc97537ac9b54140f5fec59df5d28c6fa25)",
          "timestamp": "2023-04-03T17:22:21+09:00",
          "tree_id": "c0833ef1f9cdc5d5b24a15c311d146f038de1c81",
          "url": "https://github.com/limebell/libplanet/commit/a944c605d4ed1590fce392dc82c4287359023f33"
        },
        "date": 1680511034693,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3317139.3255813955,
            "unit": "ns",
            "range": "± 122068.73727140103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5283078.454545454,
            "unit": "ns",
            "range": "± 126271.30466568415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 25010651.35,
            "unit": "ns",
            "range": "± 515993.02030461765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6621257.28,
            "unit": "ns",
            "range": "± 173275.11040551477"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 27923700.9375,
            "unit": "ns",
            "range": "± 525835.4554119845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7810124.866666666,
            "unit": "ns",
            "range": "± 111960.39707788685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22172235.785714287,
            "unit": "ns",
            "range": "± 116780.21647138866"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53452648.333333336,
            "unit": "ns",
            "range": "± 740007.2388268207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105175126.6,
            "unit": "ns",
            "range": "± 1645597.9048229074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210004683,
            "unit": "ns",
            "range": "± 2979083.893388033"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1435841.0823529412,
            "unit": "ns",
            "range": "± 69436.04237014701"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2683740.210526316,
            "unit": "ns",
            "range": "± 91004.62781435983"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2315174.927536232,
            "unit": "ns",
            "range": "± 106816.71625985696"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5530937.276923077,
            "unit": "ns",
            "range": "± 257810.2953360589"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49192.734042553195,
            "unit": "ns",
            "range": "± 2806.9575776068573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6027450.985416667,
            "unit": "ns",
            "range": "± 23951.694166418933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1828317.6841145833,
            "unit": "ns",
            "range": "± 2896.150474507332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1343378.6772135417,
            "unit": "ns",
            "range": "± 4463.8408232606525"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2647615.2221354167,
            "unit": "ns",
            "range": "± 1783.233479536759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839262.6574869792,
            "unit": "ns",
            "range": "± 855.2777821793411"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 763430.78359375,
            "unit": "ns",
            "range": "± 487.2293248853895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199472.421875,
            "unit": "ns",
            "range": "± 8461.284755170773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 205157.70454545456,
            "unit": "ns",
            "range": "± 7062.659419331165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172296.73333333334,
            "unit": "ns",
            "range": "± 8714.616104387322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 12087268.533333333,
            "unit": "ns",
            "range": "± 143363.29561834293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9922582,
            "unit": "ns",
            "range": "± 226472.8493625671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21305.054945054944,
            "unit": "ns",
            "range": "± 1973.8381525604002"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56974.882978723406,
            "unit": "ns",
            "range": "± 4209.1461189503625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 41296.23809523809,
            "unit": "ns",
            "range": "± 963.574693771163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94254.24489795919,
            "unit": "ns",
            "range": "± 14828.447362300614"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6004.234693877551,
            "unit": "ns",
            "range": "± 641.6462204252339"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19767.204301075268,
            "unit": "ns",
            "range": "± 1812.7166230918372"
          }
        ]
      },
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
          "id": "c7ba08ba25181f8add0bfcc7152a6b05e8b30757",
          "message": "docs: update changelog",
          "timestamp": "2023-04-03T17:36:53+09:00",
          "tree_id": "b4440e1d84be80722d407fd307bf349bb9acb539",
          "url": "https://github.com/limebell/libplanet/commit/c7ba08ba25181f8add0bfcc7152a6b05e8b30757"
        },
        "date": 1680512179649,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3667339.3298969073,
            "unit": "ns",
            "range": "± 335611.02564929123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5361793.747368421,
            "unit": "ns",
            "range": "± 331959.6930172803"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 29726464.21875,
            "unit": "ns",
            "range": "± 1712251.0840569115"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6871329.852631579,
            "unit": "ns",
            "range": "± 506243.47775532666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 36207154.63265306,
            "unit": "ns",
            "range": "± 2985155.340774031"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8342588.84375,
            "unit": "ns",
            "range": "± 538382.2529160619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22280694.908045977,
            "unit": "ns",
            "range": "± 1219108.4755979506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58148469.82692308,
            "unit": "ns",
            "range": "± 2363816.4734976473"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118874820.64705883,
            "unit": "ns",
            "range": "± 3773961.5776244584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244383817.05,
            "unit": "ns",
            "range": "± 8567117.587230196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1744259.1958762887,
            "unit": "ns",
            "range": "± 234003.25501874427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3265404.46,
            "unit": "ns",
            "range": "± 277912.9456765094"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2689398.3163265307,
            "unit": "ns",
            "range": "± 196514.33852413748"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6811421.787878788,
            "unit": "ns",
            "range": "± 456226.8330862216"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 68376.98888888888,
            "unit": "ns",
            "range": "± 9123.108566778292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6529899.290736607,
            "unit": "ns",
            "range": "± 83088.08179273672"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2164280.258112981,
            "unit": "ns",
            "range": "± 22574.42356096804"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1575268.8628472222,
            "unit": "ns",
            "range": "± 42952.44669677517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2974968.2610294116,
            "unit": "ns",
            "range": "± 42823.453594858314"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1003271.2757352941,
            "unit": "ns",
            "range": "± 19779.500446747956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 906022.678651752,
            "unit": "ns",
            "range": "± 27494.607052757667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 250752.0744680851,
            "unit": "ns",
            "range": "± 26037.621539313113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 241886.54639175258,
            "unit": "ns",
            "range": "± 25391.898712163355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196208.45652173914,
            "unit": "ns",
            "range": "± 19384.06570572343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 13525793.74,
            "unit": "ns",
            "range": "± 1098868.9941661234"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11572704.081632653,
            "unit": "ns",
            "range": "± 952634.0848031071"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 36021.602150537634,
            "unit": "ns",
            "range": "± 7438.603487944824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78164.84946236559,
            "unit": "ns",
            "range": "± 8618.930330517207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53726.91111111111,
            "unit": "ns",
            "range": "± 7010.587052698986"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 134206.32258064515,
            "unit": "ns",
            "range": "± 21335.923134551882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5454.466666666666,
            "unit": "ns",
            "range": "± 532.3617761204849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 37346.06122448979,
            "unit": "ns",
            "range": "± 9518.916648503724"
          }
        ]
      }
    ]
  }
}