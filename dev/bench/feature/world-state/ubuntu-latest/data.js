window.BENCHMARK_DATA = {
  "lastUpdate": 1690870057555,
  "repoUrl": "https://github.com/limebell/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "tkiapril@users.noreply.github.com",
            "name": "Seo Myunggyun (Jonathan)",
            "username": "tkiapril"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e74fb5a87684d8831b8ca42f80318bfced1494ed",
          "message": "Merge pull request #3342 from planetarium/fix/scrypt\n\nUse @noble/hashes/scrypt instead of scrypt-js",
          "timestamp": "2023-07-31T14:02:49+09:00",
          "tree_id": "d8e2fe6ccbed1438294efe071b5c6627b80c49db",
          "url": "https://github.com/limebell/libplanet/commit/e74fb5a87684d8831b8ca42f80318bfced1494ed"
        },
        "date": 1690797310846,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 285818.13513513515,
            "unit": "ns",
            "range": "± 9237.576898378355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 273830.6052631579,
            "unit": "ns",
            "range": "± 8246.128197243659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 240926.375,
            "unit": "ns",
            "range": "± 4605.313624861323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4333535,
            "unit": "ns",
            "range": "± 47305.02682509626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3880738.5714285714,
            "unit": "ns",
            "range": "± 22866.934191986893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20320.864583333332,
            "unit": "ns",
            "range": "± 1285.3695403087427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 91209.53684210527,
            "unit": "ns",
            "range": "± 8051.944205304105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72800.5925925926,
            "unit": "ns",
            "range": "± 1979.1335178510524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86509.02083333333,
            "unit": "ns",
            "range": "± 11910.877493839216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4952.114583333333,
            "unit": "ns",
            "range": "± 681.6348284558493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16950.673684210527,
            "unit": "ns",
            "range": "± 1078.374815845144"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1354818.775510204,
            "unit": "ns",
            "range": "± 99142.61153255685"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2535669.96,
            "unit": "ns",
            "range": "± 61880.19968756835"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1734628.9285714286,
            "unit": "ns",
            "range": "± 119244.56236756443"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4718440.380952381,
            "unit": "ns",
            "range": "± 110535.47812059087"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6220741.049665178,
            "unit": "ns",
            "range": "± 36519.579059336254"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2037635.8065104166,
            "unit": "ns",
            "range": "± 3321.1031081091774"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348866.259486607,
            "unit": "ns",
            "range": "± 649.8530340203934"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2586180.679129464,
            "unit": "ns",
            "range": "± 4733.894266508829"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 822536.2943638393,
            "unit": "ns",
            "range": "± 1866.9146056001723"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 764370.765485491,
            "unit": "ns",
            "range": "± 1676.43195520876"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3297114.2666666666,
            "unit": "ns",
            "range": "± 54267.628025326834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3424657.1428571427,
            "unit": "ns",
            "range": "± 41134.99307413083"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4333204.454545454,
            "unit": "ns",
            "range": "± 102534.91777727757"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3849759.8,
            "unit": "ns",
            "range": "± 182591.5068500874"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6555846.513513514,
            "unit": "ns",
            "range": "± 222330.6345878965"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7677863.533333333,
            "unit": "ns",
            "range": "± 44713.17004428923"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19193991.583333332,
            "unit": "ns",
            "range": "± 52965.65431134395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51134367.4,
            "unit": "ns",
            "range": "± 379465.10799409664"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100743458.73333333,
            "unit": "ns",
            "range": "± 769740.7251056744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202706143,
            "unit": "ns",
            "range": "± 734120.0817775502"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48169.48351648352,
            "unit": "ns",
            "range": "± 2858.963834688821"
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
          "id": "761e6d1e663d7e69b2a9812f3ccac608fefb77fa",
          "message": "chore: update docstring and minor refactoring",
          "timestamp": "2023-08-01T14:16:18+09:00",
          "tree_id": "8a0ea1506be1c58d3455476c750c017a89a132a0",
          "url": "https://github.com/limebell/libplanet/commit/761e6d1e663d7e69b2a9812f3ccac608fefb77fa"
        },
        "date": 1690868025908,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342229.41071428574,
            "unit": "ns",
            "range": "± 14621.053848072876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 331552.967032967,
            "unit": "ns",
            "range": "± 18814.6241752116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 294269.3275862069,
            "unit": "ns",
            "range": "± 12623.222468422864"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5278965.6,
            "unit": "ns",
            "range": "± 89021.30566876353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4975765.404761905,
            "unit": "ns",
            "range": "± 180819.94576617077"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23803.37634408602,
            "unit": "ns",
            "range": "± 2203.556793370261"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 108055.3870967742,
            "unit": "ns",
            "range": "± 8629.640876240168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88079,
            "unit": "ns",
            "range": "± 8538.696769148317"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104866.17204301075,
            "unit": "ns",
            "range": "± 17341.789321214343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5632.663157894737,
            "unit": "ns",
            "range": "± 785.6048572363372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21244.381443298967,
            "unit": "ns",
            "range": "± 2028.5055636441805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1695011.7765957448,
            "unit": "ns",
            "range": "± 110442.4185893911"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3301527.6,
            "unit": "ns",
            "range": "± 206063.073660234"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2171166.586956522,
            "unit": "ns",
            "range": "± 133673.38972591565"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5853307.875,
            "unit": "ns",
            "range": "± 229308.92147945127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6917175.782291667,
            "unit": "ns",
            "range": "± 108736.7027541104"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2262098.949776786,
            "unit": "ns",
            "range": "± 27638.304933613595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1674655.2135416667,
            "unit": "ns",
            "range": "± 22634.13282180989"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3059424.549088542,
            "unit": "ns",
            "range": "± 90786.96259537114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 988742.2037760416,
            "unit": "ns",
            "range": "± 15027.457775627361"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 913377.507421875,
            "unit": "ns",
            "range": "± 7312.338680800811"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4265566.7536231885,
            "unit": "ns",
            "range": "± 205979.6084844898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4640815.928571428,
            "unit": "ns",
            "range": "± 58908.60782793355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5208977.793103448,
            "unit": "ns",
            "range": "± 227522.82852178358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4781056.448275862,
            "unit": "ns",
            "range": "± 131839.7763265229"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8015664.989010989,
            "unit": "ns",
            "range": "± 442551.83437756123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10110216.4,
            "unit": "ns",
            "range": "± 154783.9317051815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27067084.6875,
            "unit": "ns",
            "range": "± 351116.49498112325"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70281990.27272727,
            "unit": "ns",
            "range": "± 1646197.1398248863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 141037236.35714287,
            "unit": "ns",
            "range": "± 2423081.423410619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 280261990.9285714,
            "unit": "ns",
            "range": "± 4323073.351019432"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56013.55913978495,
            "unit": "ns",
            "range": "± 4129.134774781794"
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
          "id": "53026e7b52df867c0924a25aa3b73103ccb4befc",
          "message": "chore: update docstring and minor refactoring",
          "timestamp": "2023-08-01T14:39:39+09:00",
          "tree_id": "8a0ea1506be1c58d3455476c750c017a89a132a0",
          "url": "https://github.com/limebell/libplanet/commit/53026e7b52df867c0924a25aa3b73103ccb4befc"
        },
        "date": 1690869197160,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 296008.7368421053,
            "unit": "ns",
            "range": "± 8805.312228557812"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 280017.1388888889,
            "unit": "ns",
            "range": "± 8427.744338629502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249093.53125,
            "unit": "ns",
            "range": "± 7639.907819002982"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4473611.733333333,
            "unit": "ns",
            "range": "± 61707.03091506171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4153514.066666667,
            "unit": "ns",
            "range": "± 71528.0036773477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21002.43010752688,
            "unit": "ns",
            "range": "± 1552.1474492782813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92279.21875,
            "unit": "ns",
            "range": "± 5385.50556333362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74294.4375,
            "unit": "ns",
            "range": "± 1451.1998699352202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117001.26666666666,
            "unit": "ns",
            "range": "± 2092.725545675736"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5172.373493975903,
            "unit": "ns",
            "range": "± 449.4666137210176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20974.453608247422,
            "unit": "ns",
            "range": "± 1777.8695057838809"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1487483.2307692308,
            "unit": "ns",
            "range": "± 90129.92413141733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2763470.7666666666,
            "unit": "ns",
            "range": "± 81006.54302891466"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1891019.388888889,
            "unit": "ns",
            "range": "± 104868.39103914582"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4989424.851851852,
            "unit": "ns",
            "range": "± 134642.56410605874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6176003.634375,
            "unit": "ns",
            "range": "± 28499.408507669792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1891120.2452566964,
            "unit": "ns",
            "range": "± 4687.190931832708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1402351.2600260417,
            "unit": "ns",
            "range": "± 2403.58261830656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2642314.7723214286,
            "unit": "ns",
            "range": "± 3117.3132043774567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843624.9834681919,
            "unit": "ns",
            "range": "± 602.4178392098573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766332.7594401041,
            "unit": "ns",
            "range": "± 1468.3445397335568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3514868.977272727,
            "unit": "ns",
            "range": "± 116797.67828281214"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3670562.7333333334,
            "unit": "ns",
            "range": "± 38603.22655549971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4468867.92,
            "unit": "ns",
            "range": "± 114375.6784154452"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4119751.846153846,
            "unit": "ns",
            "range": "± 112301.28616670151"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6510895.125,
            "unit": "ns",
            "range": "± 123484.30653103252"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7938061.75,
            "unit": "ns",
            "range": "± 36766.21168243028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22534990.4,
            "unit": "ns",
            "range": "± 362459.91315529344"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56689863.8,
            "unit": "ns",
            "range": "± 526732.5481308869"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113185259.86666666,
            "unit": "ns",
            "range": "± 2032364.109436765"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 223723886.26666668,
            "unit": "ns",
            "range": "± 2556309.5607806095"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48645.625,
            "unit": "ns",
            "range": "± 2547.3528547210917"
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
          "id": "f72ba61b03c1db948eff4d0b23ece8fc641ef950",
          "message": "chore: update docstring and minor refactoring",
          "timestamp": "2023-08-01T14:50:57+09:00",
          "tree_id": "adbffacf7e50247cc7ef38db738dc495d40ca7a1",
          "url": "https://github.com/limebell/libplanet/commit/f72ba61b03c1db948eff4d0b23ece8fc641ef950"
        },
        "date": 1690870053295,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342944.7083333333,
            "unit": "ns",
            "range": "± 13349.452550665976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 333048.6304347826,
            "unit": "ns",
            "range": "± 12629.40870324972"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313325.34920634923,
            "unit": "ns",
            "range": "± 14288.081682521648"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5356691.12,
            "unit": "ns",
            "range": "± 142135.90057445024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4763140.066666666,
            "unit": "ns",
            "range": "± 86308.92254360551"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26207.84375,
            "unit": "ns",
            "range": "± 1665.2073070128379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112051.03125,
            "unit": "ns",
            "range": "± 5194.399520633768"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 99001.47916666667,
            "unit": "ns",
            "range": "± 6317.064514770442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 119224.60416666667,
            "unit": "ns",
            "range": "± 15996.495312529301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6632.709677419355,
            "unit": "ns",
            "range": "± 770.3453429503743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24101.27659574468,
            "unit": "ns",
            "range": "± 1624.5119326882"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1837294.2285714287,
            "unit": "ns",
            "range": "± 88483.34836798823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3451045.285714286,
            "unit": "ns",
            "range": "± 110576.5767398512"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2320916.6233766233,
            "unit": "ns",
            "range": "± 117983.41714477896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6116922.780487805,
            "unit": "ns",
            "range": "± 220502.83416551727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7391273.943638393,
            "unit": "ns",
            "range": "± 62596.54604905168"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2302697.849479167,
            "unit": "ns",
            "range": "± 9001.181347382439"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1630667.7716346155,
            "unit": "ns",
            "range": "± 9301.275247508245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3099498.4972098214,
            "unit": "ns",
            "range": "± 25941.56820225489"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 974718.0256510417,
            "unit": "ns",
            "range": "± 8292.139596661207"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 912858.9561244419,
            "unit": "ns",
            "range": "± 3659.679229119579"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4437949.85,
            "unit": "ns",
            "range": "± 87759.0191455976"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4626859.266666667,
            "unit": "ns",
            "range": "± 67180.11779055155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5566797,
            "unit": "ns",
            "range": "± 93138.64532666188"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4990289.733333333,
            "unit": "ns",
            "range": "± 86237.03948127649"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7942460.684210527,
            "unit": "ns",
            "range": "± 171144.73870806047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10001922.695652174,
            "unit": "ns",
            "range": "± 247872.3824464434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26769065.8,
            "unit": "ns",
            "range": "± 240971.14453252338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68074659.91666667,
            "unit": "ns",
            "range": "± 1021136.6615658756"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134549982,
            "unit": "ns",
            "range": "± 739159.3105614745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 269196846.21428573,
            "unit": "ns",
            "range": "± 1048637.9429870097"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59689.864197530864,
            "unit": "ns",
            "range": "± 3154.4246652642005"
          }
        ]
      }
    ]
  }
}