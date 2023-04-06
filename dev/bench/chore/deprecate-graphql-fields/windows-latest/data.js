window.BENCHMARK_DATA = {
  "lastUpdate": 1680767521665,
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
          "id": "0a725161dc6c381e99e03dbf84b9886381f709aa",
          "message": "chore: deprecate pow block fields  [skip changelog]",
          "timestamp": "2023-04-06T16:36:43+09:00",
          "tree_id": "45db6b6d92a72eb3fc89b9a6f39be841c113bad6",
          "url": "https://github.com/limebell/libplanet/commit/0a725161dc6c381e99e03dbf84b9886381f709aa"
        },
        "date": 1680767507800,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1308953.0612244897,
            "unit": "ns",
            "range": "± 102656.25676201118"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2473571.590909091,
            "unit": "ns",
            "range": "± 136080.94189439315"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2098829,
            "unit": "ns",
            "range": "± 149876.0553884038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5412667,
            "unit": "ns",
            "range": "± 352962.38648578036"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46019.04761904762,
            "unit": "ns",
            "range": "± 2383.855143900882"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6739940,
            "unit": "ns",
            "range": "± 79629.38079449246"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18267070.588235293,
            "unit": "ns",
            "range": "± 373366.7596424223"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45330013.333333336,
            "unit": "ns",
            "range": "± 805961.2768672721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 91431095.45454545,
            "unit": "ns",
            "range": "± 1863255.2933808316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183211466.66666666,
            "unit": "ns",
            "range": "± 2749804.2022937527"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4709271.979166667,
            "unit": "ns",
            "range": "± 30567.997716252416"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1526180.1822916667,
            "unit": "ns",
            "range": "± 10344.011767665785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1156398.046875,
            "unit": "ns",
            "range": "± 8021.926849994191"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2679087.8125,
            "unit": "ns",
            "range": "± 15082.142285256998"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842767.3893229166,
            "unit": "ns",
            "range": "± 3796.670684872931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 749555.7877604166,
            "unit": "ns",
            "range": "± 2856.635785789877"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2949450,
            "unit": "ns",
            "range": "± 94465.73934020159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3119461.224489796,
            "unit": "ns",
            "range": "± 123177.27877657764"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3817848.717948718,
            "unit": "ns",
            "range": "± 131627.13060562775"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3963831.8181818184,
            "unit": "ns",
            "range": "± 217289.72213103555"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6524185.714285715,
            "unit": "ns",
            "range": "± 114629.569665764"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 299460,
            "unit": "ns",
            "range": "± 12729.109247006336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246493.5483870968,
            "unit": "ns",
            "range": "± 7494.128167388606"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212800,
            "unit": "ns",
            "range": "± 5687.454866382929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5150803.333333333,
            "unit": "ns",
            "range": "± 55963.91524477008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3618940,
            "unit": "ns",
            "range": "± 56007.08883703919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19085.106382978724,
            "unit": "ns",
            "range": "± 1543.4187333353293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81660.41666666667,
            "unit": "ns",
            "range": "± 5564.312586600748"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73686.66666666667,
            "unit": "ns",
            "range": "± 4085.138865517524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 166687.62886597938,
            "unit": "ns",
            "range": "± 21570.191902117098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5891.7525773195875,
            "unit": "ns",
            "range": "± 714.6779728038334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18472.448979591838,
            "unit": "ns",
            "range": "± 2181.3067403068803"
          }
        ]
      }
    ]
  }
}