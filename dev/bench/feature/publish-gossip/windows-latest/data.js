window.BENCHMARK_DATA = {
  "lastUpdate": 1680689123713,
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
          "id": "321c7adbb4abc343d04241d5237a93cb52fde07e",
          "message": "docs: update changelog",
          "timestamp": "2023-04-05T13:57:54+09:00",
          "tree_id": "2fdd54d6c8cf1f6252b0256d0feef6f54f9a6b48",
          "url": "https://github.com/limebell/libplanet/commit/321c7adbb4abc343d04241d5237a93cb52fde07e"
        },
        "date": 1680671871714,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1538105.3763440861,
            "unit": "ns",
            "range": "± 103488.10514046215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3054753.6842105263,
            "unit": "ns",
            "range": "± 196260.24993453798"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2597592.783505155,
            "unit": "ns",
            "range": "± 169709.39269295929"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6437279.591836735,
            "unit": "ns",
            "range": "± 456995.3993675764"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55577.27272727273,
            "unit": "ns",
            "range": "± 3865.1620320447487"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8575964.864864865,
            "unit": "ns",
            "range": "± 288342.70622166124"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23077703.773584906,
            "unit": "ns",
            "range": "± 954989.1501522744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57636005,
            "unit": "ns",
            "range": "± 1042787.4060345237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 117775891.66666667,
            "unit": "ns",
            "range": "± 973499.8738930053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 237867384.6153846,
            "unit": "ns",
            "range": "± 2478317.7576890583"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5698305.794270833,
            "unit": "ns",
            "range": "± 146706.2523775431"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1927514.6484375,
            "unit": "ns",
            "range": "± 39710.978513320944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1385161.71875,
            "unit": "ns",
            "range": "± 29373.50707330748"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3142185.4352678573,
            "unit": "ns",
            "range": "± 24768.50613986511"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 987695.76171875,
            "unit": "ns",
            "range": "± 13104.465608615394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 893311.8098958334,
            "unit": "ns",
            "range": "± 14156.208224851365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3647827.4725274723,
            "unit": "ns",
            "range": "± 216550.82598982213"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3936337.8378378376,
            "unit": "ns",
            "range": "± 132527.78189109245"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4566478.787878788,
            "unit": "ns",
            "range": "± 214214.1513066927"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5179761.764705882,
            "unit": "ns",
            "range": "± 166606.34608071568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8936562.962962963,
            "unit": "ns",
            "range": "± 244292.99896789785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 372207.6923076923,
            "unit": "ns",
            "range": "± 15186.330878475153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294128.26086956525,
            "unit": "ns",
            "range": "± 16549.176308887032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 266608.86075949366,
            "unit": "ns",
            "range": "± 13704.90451115405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6280123.529411765,
            "unit": "ns",
            "range": "± 119877.40367460709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4384502.702702703,
            "unit": "ns",
            "range": "± 147872.63003921555"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24063.978494623654,
            "unit": "ns",
            "range": "± 2999.622853027037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106962.88659793814,
            "unit": "ns",
            "range": "± 8207.571702240724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103913.40206185567,
            "unit": "ns",
            "range": "± 10164.886751971826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 213787.5,
            "unit": "ns",
            "range": "± 22223.26542873008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7833.333333333333,
            "unit": "ns",
            "range": "± 1270.2810850704338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23955.31914893617,
            "unit": "ns",
            "range": "± 2437.150505245988"
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
          "id": "3ae73a518d31cfab74e9a76e0b4eec91c405c8b8",
          "message": "docs: update changelog",
          "timestamp": "2023-04-05T18:49:25+09:00",
          "tree_id": "c54ac2f904324029f65a532b7a9f2fee91b2d2b9",
          "url": "https://github.com/limebell/libplanet/commit/3ae73a518d31cfab74e9a76e0b4eec91c405c8b8"
        },
        "date": 1680689109457,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1379077,
            "unit": "ns",
            "range": "± 149706.21928269777"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2468594.845360825,
            "unit": "ns",
            "range": "± 170206.10812772336"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2150593.8775510206,
            "unit": "ns",
            "range": "± 171868.7864504303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5078400,
            "unit": "ns",
            "range": "± 199646.28095709672"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51393.47826086957,
            "unit": "ns",
            "range": "± 3921.6167429573093"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6368678.571428572,
            "unit": "ns",
            "range": "± 111172.15463879867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18134300,
            "unit": "ns",
            "range": "± 219669.6155593668"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46145621.428571425,
            "unit": "ns",
            "range": "± 555016.5239100426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92793700,
            "unit": "ns",
            "range": "± 1097084.3574254864"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185506342.85714287,
            "unit": "ns",
            "range": "± 1732759.2920471744"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4392652.708333333,
            "unit": "ns",
            "range": "± 20680.555154320336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1393966.0546875,
            "unit": "ns",
            "range": "± 4806.86919720687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1060367.4088541667,
            "unit": "ns",
            "range": "± 5259.338909228578"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2413303.0989583335,
            "unit": "ns",
            "range": "± 16374.98983465924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 763519.6354166666,
            "unit": "ns",
            "range": "± 4475.418829664318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 680931.4583333334,
            "unit": "ns",
            "range": "± 4053.8043245390595"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2999834.285714286,
            "unit": "ns",
            "range": "± 79235.96161747126"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3186823.529411765,
            "unit": "ns",
            "range": "± 129119.45258284718"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3712977.777777778,
            "unit": "ns",
            "range": "± 101560.24484675749"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4154887.5,
            "unit": "ns",
            "range": "± 76564.59473324905"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6481957.894736842,
            "unit": "ns",
            "range": "± 207972.5847727765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301464.406779661,
            "unit": "ns",
            "range": "± 13261.101565414132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249676.8115942029,
            "unit": "ns",
            "range": "± 11735.982188119731"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 219783.33333333334,
            "unit": "ns",
            "range": "± 10918.775282954295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4889300,
            "unit": "ns",
            "range": "± 70201.40257200651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3439893.3333333335,
            "unit": "ns",
            "range": "± 62551.88094313239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26169.473684210527,
            "unit": "ns",
            "range": "± 2633.542783473475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101945.45454545454,
            "unit": "ns",
            "range": "± 11269.756101948373"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 93873.73737373737,
            "unit": "ns",
            "range": "± 11018.496377460926"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 212111.22448979592,
            "unit": "ns",
            "range": "± 22146.36356388389"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9954.639175257733,
            "unit": "ns",
            "range": "± 1710.3252991363888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22831.91489361702,
            "unit": "ns",
            "range": "± 2358.658848280415"
          }
        ]
      }
    ]
  }
}