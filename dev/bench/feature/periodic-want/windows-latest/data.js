window.BENCHMARK_DATA = {
  "lastUpdate": 1683795805628,
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
          "id": "6555351be63be4f12921346a3ea8a5489de2f1b7",
          "message": "feat: optimize message request",
          "timestamp": "2023-05-11T17:48:50+09:00",
          "tree_id": "f8d431c128bcc9d62f63ca253d6198e560e5f01f",
          "url": "https://github.com/limebell/libplanet/commit/6555351be63be4f12921346a3ea8a5489de2f1b7"
        },
        "date": 1683795790905,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1312774,
            "unit": "ns",
            "range": "± 103248.46624438632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2395921.276595745,
            "unit": "ns",
            "range": "± 92420.47094939946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2082087.3737373736,
            "unit": "ns",
            "range": "± 125000.28211058662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4881950,
            "unit": "ns",
            "range": "± 167636.82108589326"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41258.10810810811,
            "unit": "ns",
            "range": "± 1965.5775237449086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6657578.571428572,
            "unit": "ns",
            "range": "± 45507.06079739256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17353373.333333332,
            "unit": "ns",
            "range": "± 122567.38360513993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44168786.666666664,
            "unit": "ns",
            "range": "± 312624.1715969299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 87714853.33333333,
            "unit": "ns",
            "range": "± 610504.4048825138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 176029286.66666666,
            "unit": "ns",
            "range": "± 1015174.0068063396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4749107.03125,
            "unit": "ns",
            "range": "± 4196.499692694587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1482860.3515625,
            "unit": "ns",
            "range": "± 1203.3766482772821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1150467.2688802083,
            "unit": "ns",
            "range": "± 2277.217022464797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2556772.9910714286,
            "unit": "ns",
            "range": "± 17289.458272538843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852898.7760416666,
            "unit": "ns",
            "range": "± 8185.866752958653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 815556.1979166666,
            "unit": "ns",
            "range": "± 8207.332617274058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2935972.5,
            "unit": "ns",
            "range": "± 102075.95459465592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3047547.3684210526,
            "unit": "ns",
            "range": "± 98234.59713343719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3959804.1666666665,
            "unit": "ns",
            "range": "± 101257.89493284898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3786458.5714285714,
            "unit": "ns",
            "range": "± 172521.31688732933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6273123.076923077,
            "unit": "ns",
            "range": "± 201826.61065684765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248901.85185185185,
            "unit": "ns",
            "range": "± 8181.444508263132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236013.20754716982,
            "unit": "ns",
            "range": "± 9268.475057872438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210907.57575757575,
            "unit": "ns",
            "range": "± 9889.513647620906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3822992.8571428573,
            "unit": "ns",
            "range": "± 44969.587403141595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3452833.3333333335,
            "unit": "ns",
            "range": "± 51416.30740014949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15462.5,
            "unit": "ns",
            "range": "± 1425.0577088961031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76191.02564102564,
            "unit": "ns",
            "range": "± 3909.0699029088114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64190.47619047619,
            "unit": "ns",
            "range": "± 1491.2762191843476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78406.31578947368,
            "unit": "ns",
            "range": "± 10703.089736109667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3644.2105263157896,
            "unit": "ns",
            "range": "± 505.4418310437603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15188.659793814433,
            "unit": "ns",
            "range": "± 1576.3801022609123"
          }
        ]
      }
    ]
  }
}