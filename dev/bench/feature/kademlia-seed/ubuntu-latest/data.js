window.BENCHMARK_DATA = {
  "lastUpdate": 1703067638511,
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
          "id": "3edb6a9fc98022381bc83521d4c021a338012fcc",
          "message": "feat: use seed in kademlia peer discovery",
          "timestamp": "2023-12-20T19:08:42+09:00",
          "tree_id": "cc7fd15586c357f666653c5db1ff924ce99c6151",
          "url": "https://github.com/limebell/libplanet/commit/3edb6a9fc98022381bc83521d4c021a338012fcc"
        },
        "date": 1703067634951,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3742379.1927083335,
            "unit": "ns",
            "range": "± 54808.14447988137"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1215033.2172475962,
            "unit": "ns",
            "range": "± 9730.763458234549"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 768146.7882254465,
            "unit": "ns",
            "range": "± 2455.8715616794852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1932527.515625,
            "unit": "ns",
            "range": "± 8319.87223909258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618905.8393179086,
            "unit": "ns",
            "range": "± 6664.842590351636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572761.5541015625,
            "unit": "ns",
            "range": "± 3884.837724520785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2496840.4444444445,
            "unit": "ns",
            "range": "± 83194.82964066748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2559177.115942029,
            "unit": "ns",
            "range": "± 122416.08414801308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3156603.5,
            "unit": "ns",
            "range": "± 88392.36543976542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3360807.0454545454,
            "unit": "ns",
            "range": "± 125958.51673522287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 13994985.510869564,
            "unit": "ns",
            "range": "± 972029.7203072569"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40284.635416666664,
            "unit": "ns",
            "range": "± 5451.303739029179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 206400.74390243902,
            "unit": "ns",
            "range": "± 10860.48492063693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196446.38888888888,
            "unit": "ns",
            "range": "± 7752.9421065925735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173467.96341463414,
            "unit": "ns",
            "range": "± 6218.7290063869195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3290199.214285714,
            "unit": "ns",
            "range": "± 54659.5810338563"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2919085.8636363638,
            "unit": "ns",
            "range": "± 71465.62005644354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15631.917525773197,
            "unit": "ns",
            "range": "± 2463.2071686374957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 69350.5625,
            "unit": "ns",
            "range": "± 8963.809424936417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 83809.72,
            "unit": "ns",
            "range": "± 18066.30718784712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81161.85714285714,
            "unit": "ns",
            "range": "± 20651.566847024307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4307.03125,
            "unit": "ns",
            "range": "± 1162.195091450702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16201.765306122448,
            "unit": "ns",
            "range": "± 3520.6370639563957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5595825.887096774,
            "unit": "ns",
            "range": "± 165592.55562286553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14791952.785714285,
            "unit": "ns",
            "range": "± 150683.5693580724"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37204420.7,
            "unit": "ns",
            "range": "± 266059.84389800084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75749311.9,
            "unit": "ns",
            "range": "± 1060442.0222256917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149965601.07142857,
            "unit": "ns",
            "range": "± 1301601.4179718243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1033459.4747474748,
            "unit": "ns",
            "range": "± 107330.44218486593"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1979346.450819672,
            "unit": "ns",
            "range": "± 88835.92865472584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1621147.7717391304,
            "unit": "ns",
            "range": "± 90513.8676552624"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13229918.936842104,
            "unit": "ns",
            "range": "± 1079352.7698460284"
          }
        ]
      }
    ]
  }
}