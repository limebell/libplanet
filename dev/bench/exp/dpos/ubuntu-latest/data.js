window.BENCHMARK_DATA = {
  "lastUpdate": 1710912930240,
  "repoUrl": "https://github.com/limebell/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1016fbce882309452a45eda1a19c9a8b213801a5",
          "message": "Merge pull request #3681 from OnedgeLee/release/4.0.6\n\n🚀 Release 4.0.6",
          "timestamp": "2024-02-22T19:53:18+09:00",
          "tree_id": "fee32a6b01e16aac4ea8da9bae064a264cf31dbb",
          "url": "https://github.com/limebell/libplanet/commit/1016fbce882309452a45eda1a19c9a8b213801a5"
        },
        "date": 1710912927386,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5804795,
            "unit": "ns",
            "range": "± 47329.09137698957"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14966447.8,
            "unit": "ns",
            "range": "± 130009.6339508291"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37417725.928571425,
            "unit": "ns",
            "range": "± 287461.31247297756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76104677.35714285,
            "unit": "ns",
            "range": "± 880714.1816024266"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 156867227.03333333,
            "unit": "ns",
            "range": "± 931698.5122770491"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 38961.04736842105,
            "unit": "ns",
            "range": "± 5298.911605965771"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015176.5606060605,
            "unit": "ns",
            "range": "± 94056.0109784588"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2004223.7777777778,
            "unit": "ns",
            "range": "± 105264.33855845957"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1738984.9157894736,
            "unit": "ns",
            "range": "± 137207.06076379467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7706268.541666667,
            "unit": "ns",
            "range": "± 198482.50447199732"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2471767.4857142856,
            "unit": "ns",
            "range": "± 80916.08841603294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2596534.326923077,
            "unit": "ns",
            "range": "± 106052.62280450473"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3272843.714285714,
            "unit": "ns",
            "range": "± 55140.02017023231"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3346118.2156862747,
            "unit": "ns",
            "range": "± 135433.89360988096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8893396.88235294,
            "unit": "ns",
            "range": "± 194166.62209474295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 218446.7972972973,
            "unit": "ns",
            "range": "± 10939.818052104125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 203432.67415730338,
            "unit": "ns",
            "range": "± 11247.624368137074"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 166254.7837837838,
            "unit": "ns",
            "range": "± 5497.140904017161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3324023.3076923075,
            "unit": "ns",
            "range": "± 48327.90157763355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3003374.5714285714,
            "unit": "ns",
            "range": "± 43398.40991187489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17117.322916666668,
            "unit": "ns",
            "range": "± 3356.199241293456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 74837.72727272728,
            "unit": "ns",
            "range": "± 10735.271627427821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92166.24210526315,
            "unit": "ns",
            "range": "± 7052.035028026035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95466.81182795699,
            "unit": "ns",
            "range": "± 10701.527358460582"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6368.608695652174,
            "unit": "ns",
            "range": "± 1188.246963050308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19301.98979591837,
            "unit": "ns",
            "range": "± 4529.498129944768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3730954.006417411,
            "unit": "ns",
            "range": "± 8302.847564032869"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1232655.0149739583,
            "unit": "ns",
            "range": "± 4143.396283362024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 781663.6810396635,
            "unit": "ns",
            "range": "± 6750.22288305977"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939933.2803385416,
            "unit": "ns",
            "range": "± 25007.305572716265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630844.7961237981,
            "unit": "ns",
            "range": "± 1337.8574808948847"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571144.1030273438,
            "unit": "ns",
            "range": "± 1435.6985732140545"
          }
        ]
      }
    ]
  }
}