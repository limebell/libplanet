window.BENCHMARK_DATA = {
  "lastUpdate": 1684303905758,
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
        "date": 1683795671057,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3318529.6666666665,
            "unit": "ns",
            "range": "± 50315.250127381376"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3400756.947368421,
            "unit": "ns",
            "range": "± 112556.56207266983"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4197994.769230769,
            "unit": "ns",
            "range": "± 38422.8250005858"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4309435.295454546,
            "unit": "ns",
            "range": "± 156714.2701009795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6776138.947368421,
            "unit": "ns",
            "range": "± 138709.35579175522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282554.2786885246,
            "unit": "ns",
            "range": "± 11203.0960216825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269442.8604651163,
            "unit": "ns",
            "range": "± 9815.493453819385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233007.70588235295,
            "unit": "ns",
            "range": "± 7478.3352284891125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4298286.214285715,
            "unit": "ns",
            "range": "± 33166.62719379358"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3808203.846153846,
            "unit": "ns",
            "range": "± 26715.851127642534"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17935.021276595744,
            "unit": "ns",
            "range": "± 1198.09309939222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82047.42045454546,
            "unit": "ns",
            "range": "± 4528.87662283531"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69996.61764705883,
            "unit": "ns",
            "range": "± 2239.0137576513175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83293.43298969071,
            "unit": "ns",
            "range": "± 11778.676289969953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4723.147368421052,
            "unit": "ns",
            "range": "± 492.1544033887293"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17237.416666666668,
            "unit": "ns",
            "range": "± 1504.2221537124422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5901029.992745535,
            "unit": "ns",
            "range": "± 11050.34279219184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1829983.5237379808,
            "unit": "ns",
            "range": "± 1341.7036963629407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1358030.9610770089,
            "unit": "ns",
            "range": "± 1033.574069383316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2593621.241629464,
            "unit": "ns",
            "range": "± 9433.097577452627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811999.4415364583,
            "unit": "ns",
            "range": "± 548.1615063708085"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735459.0385366586,
            "unit": "ns",
            "range": "± 559.9792528632848"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7736560.2,
            "unit": "ns",
            "range": "± 68510.2828592697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19381772.923076924,
            "unit": "ns",
            "range": "± 55015.35834725539"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50469562.733333334,
            "unit": "ns",
            "range": "± 571129.3592455299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99571958.93333334,
            "unit": "ns",
            "range": "± 988879.3703452167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199047979.73333332,
            "unit": "ns",
            "range": "± 1289426.8169728676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1384425.6276595744,
            "unit": "ns",
            "range": "± 104814.8163914933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2547015.846153846,
            "unit": "ns",
            "range": "± 36495.15176898194"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2193941.6304347827,
            "unit": "ns",
            "range": "± 123335.54707718677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5331600.606060606,
            "unit": "ns",
            "range": "± 168648.2461669368"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46338.425,
            "unit": "ns",
            "range": "± 2298.31943982301"
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
          "id": "3324b76ba67e2a284a6e6b0e719ee90117265897",
          "message": "test: add regression test",
          "timestamp": "2023-05-11T19:26:41+09:00",
          "tree_id": "1f4ef5c278f6eaaef435b2c28cb2cd49f9a7a38f",
          "url": "https://github.com/limebell/libplanet/commit/3324b76ba67e2a284a6e6b0e719ee90117265897"
        },
        "date": 1683801754901,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3959449.7719298247,
            "unit": "ns",
            "range": "± 169504.3696342598"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4177877.918918919,
            "unit": "ns",
            "range": "± 132334.56196267987"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4998707.228070175,
            "unit": "ns",
            "range": "± 214204.91635131076"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5122268.8,
            "unit": "ns",
            "range": "± 225950.6042868362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8135866.125,
            "unit": "ns",
            "range": "± 282368.73934301484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 323482.95774647885,
            "unit": "ns",
            "range": "± 15857.62202893217"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 315788.8301886792,
            "unit": "ns",
            "range": "± 13037.78694460518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277666.51612903224,
            "unit": "ns",
            "range": "± 8272.13806248005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5025105.490566038,
            "unit": "ns",
            "range": "± 209637.01465661862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4888142,
            "unit": "ns",
            "range": "± 34002.30976769757"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20635.373626373625,
            "unit": "ns",
            "range": "± 1501.2280428469342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100393.97894736842,
            "unit": "ns",
            "range": "± 6102.750631981272"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85835.01086956522,
            "unit": "ns",
            "range": "± 5659.4322774618695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101930.70652173914,
            "unit": "ns",
            "range": "± 10621.09008243964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5758.166666666667,
            "unit": "ns",
            "range": "± 743.0564286380617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22001.45054945055,
            "unit": "ns",
            "range": "± 1312.768163197619"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6891551.321428572,
            "unit": "ns",
            "range": "± 57487.61636067291"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2163130.6012834823,
            "unit": "ns",
            "range": "± 9019.670771360086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1609658.4018229167,
            "unit": "ns",
            "range": "± 9412.630852797383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3087768.30390625,
            "unit": "ns",
            "range": "± 18250.08831065918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 980443.8651041667,
            "unit": "ns",
            "range": "± 5172.36926207396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 892709.5979817709,
            "unit": "ns",
            "range": "± 4669.862319867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9282413.785714285,
            "unit": "ns",
            "range": "± 259125.8302777582"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25651352.42105263,
            "unit": "ns",
            "range": "± 548097.647176356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64239297.13333333,
            "unit": "ns",
            "range": "± 1099185.307769406"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 127712775.8888889,
            "unit": "ns",
            "range": "± 2723787.396435423"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246571682.86363637,
            "unit": "ns",
            "range": "± 5831353.342299917"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1628614.75,
            "unit": "ns",
            "range": "± 77362.03329813098"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3189446.7333333334,
            "unit": "ns",
            "range": "± 136164.39464938242"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2636371.3466666667,
            "unit": "ns",
            "range": "± 129089.17445238045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6822938.81,
            "unit": "ns",
            "range": "± 402603.89231860987"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54162.956043956045,
            "unit": "ns",
            "range": "± 3102.5687203852654"
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
          "id": "a6487ebedb6173c9b0a3cb95e89395c6cc988f19",
          "message": "test: add regression test",
          "timestamp": "2023-05-11T19:31:26+09:00",
          "tree_id": "4fb131000ceaa2618fe8957830110f52347ccd28",
          "url": "https://github.com/limebell/libplanet/commit/a6487ebedb6173c9b0a3cb95e89395c6cc988f19"
        },
        "date": 1683801831171,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3254284.08,
            "unit": "ns",
            "range": "± 130216.75106793038"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3343094.8421052634,
            "unit": "ns",
            "range": "± 68592.90416756205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4394810.5,
            "unit": "ns",
            "range": "± 52694.773351604075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4143593,
            "unit": "ns",
            "range": "± 151863.35733941878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6781700.476190476,
            "unit": "ns",
            "range": "± 138434.2543746377"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276196.63636363635,
            "unit": "ns",
            "range": "± 7024.652446109798"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264175.51612903224,
            "unit": "ns",
            "range": "± 7426.072833249832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233598.4,
            "unit": "ns",
            "range": "± 4232.451194554488"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4211296.533333333,
            "unit": "ns",
            "range": "± 48569.48193180374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3881510.2,
            "unit": "ns",
            "range": "± 37994.60483354371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17504.02105263158,
            "unit": "ns",
            "range": "± 1317.460007701371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82050.1506849315,
            "unit": "ns",
            "range": "± 3717.338947685386"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70655.71875,
            "unit": "ns",
            "range": "± 2160.611252137437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86978.95918367348,
            "unit": "ns",
            "range": "± 12008.065191686852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4432.948453608247,
            "unit": "ns",
            "range": "± 473.1818354487263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16826.680412371134,
            "unit": "ns",
            "range": "± 1611.7451821601624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6296763.969270834,
            "unit": "ns",
            "range": "± 13667.624467931362"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1880549.3811197917,
            "unit": "ns",
            "range": "± 2404.5484547339283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1357257.822265625,
            "unit": "ns",
            "range": "± 2360.301877728035"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572586.739783654,
            "unit": "ns",
            "range": "± 1826.7881027921649"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 795443.6884765625,
            "unit": "ns",
            "range": "± 885.2659330461263"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743837.8219401041,
            "unit": "ns",
            "range": "± 496.2127248859681"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7525056,
            "unit": "ns",
            "range": "± 7469.217033324784"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19488011.066666666,
            "unit": "ns",
            "range": "± 99618.17027922643"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49738593.333333336,
            "unit": "ns",
            "range": "± 259402.81152724248"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99642852.66666667,
            "unit": "ns",
            "range": "± 504841.0025614382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200361557.42857143,
            "unit": "ns",
            "range": "± 715394.0309998845"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1369480.2708333333,
            "unit": "ns",
            "range": "± 115765.50491852772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2557048.346153846,
            "unit": "ns",
            "range": "± 69449.80103236715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2138007.918604651,
            "unit": "ns",
            "range": "± 115434.17148051652"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5288548.806451613,
            "unit": "ns",
            "range": "± 126746.7952129808"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45568.7037037037,
            "unit": "ns",
            "range": "± 2238.306002563347"
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
          "id": "928b4564df8f8afdafc03d676f45da806e3a303c",
          "message": "test: add regression test",
          "timestamp": "2023-05-15T16:05:27+09:00",
          "tree_id": "173f6a5ecfba4a7c7d57362ef60fa4c8086fc69f",
          "url": "https://github.com/limebell/libplanet/commit/928b4564df8f8afdafc03d676f45da806e3a303c"
        },
        "date": 1684135237631,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3988548.24,
            "unit": "ns",
            "range": "± 105901.80311113686"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4206666.805555556,
            "unit": "ns",
            "range": "± 140462.9727869986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5085687.115384615,
            "unit": "ns",
            "range": "± 134291.9040524266"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5186040.25,
            "unit": "ns",
            "range": "± 143695.84855381818"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8342553.157894737,
            "unit": "ns",
            "range": "± 157714.37972742695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330694.375,
            "unit": "ns",
            "range": "± 11402.443347443857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319259.85365853657,
            "unit": "ns",
            "range": "± 11426.351402702821"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285854.1538461539,
            "unit": "ns",
            "range": "± 7805.676343237953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5117159.766666667,
            "unit": "ns",
            "range": "± 86066.10051455192"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4662916.357142857,
            "unit": "ns",
            "range": "± 55149.05973897838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21579.885416666668,
            "unit": "ns",
            "range": "± 2030.2991113304704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102635.3717948718,
            "unit": "ns",
            "range": "± 4893.401863227493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86717.75,
            "unit": "ns",
            "range": "± 2463.876554522553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103264.79166666667,
            "unit": "ns",
            "range": "± 10872.110285561103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6179.36170212766,
            "unit": "ns",
            "range": "± 504.43220184623146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21472.284210526315,
            "unit": "ns",
            "range": "± 1677.8130881569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6979657.532291667,
            "unit": "ns",
            "range": "± 31288.595112466297"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2208240.7767427885,
            "unit": "ns",
            "range": "± 4006.1294388505985"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1609247.64609375,
            "unit": "ns",
            "range": "± 8065.778705904193"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3115171.13515625,
            "unit": "ns",
            "range": "± 6379.3750191575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 984108.1263020834,
            "unit": "ns",
            "range": "± 2955.5000943257032"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 907867.3826822917,
            "unit": "ns",
            "range": "± 2090.845065093286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9339964.666666666,
            "unit": "ns",
            "range": "± 172034.09870291356"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26072352.310344826,
            "unit": "ns",
            "range": "± 730756.7129725432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64818073.4,
            "unit": "ns",
            "range": "± 446948.55481872056"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132059879.6,
            "unit": "ns",
            "range": "± 1482398.2954839382"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248068336.13333333,
            "unit": "ns",
            "range": "± 2534940.6044978327"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1683941.91,
            "unit": "ns",
            "range": "± 159055.7677738954"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3160236.714285714,
            "unit": "ns",
            "range": "± 160534.20107351587"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2643952.2470588237,
            "unit": "ns",
            "range": "± 139797.388346825"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6613830.14,
            "unit": "ns",
            "range": "± 395590.0377157135"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58005.808988764045,
            "unit": "ns",
            "range": "± 3361.0881249313666"
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
          "id": "017285b28888894910b7e8ebbf2fd8f90bf53421",
          "message": "test: add regression test",
          "timestamp": "2023-05-17T14:48:24+09:00",
          "tree_id": "2395986009709d5bd1af40397a33890e3d308deb",
          "url": "https://github.com/limebell/libplanet/commit/017285b28888894910b7e8ebbf2fd8f90bf53421"
        },
        "date": 1684303749791,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4098514.462686567,
            "unit": "ns",
            "range": "± 194624.53664772923"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4303684.645833333,
            "unit": "ns",
            "range": "± 358693.8125468127"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5001193.555555556,
            "unit": "ns",
            "range": "± 508273.19922626094"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5016569.18556701,
            "unit": "ns",
            "range": "± 595803.2986922174"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9173870.378378378,
            "unit": "ns",
            "range": "± 309805.9158391975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 341226.36363636365,
            "unit": "ns",
            "range": "± 23327.536641302402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 338966.3510638298,
            "unit": "ns",
            "range": "± 44057.39753238997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300901.55670103093,
            "unit": "ns",
            "range": "± 28733.706805977126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4947696.474226804,
            "unit": "ns",
            "range": "± 421079.5138166725"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4531404.81,
            "unit": "ns",
            "range": "± 377664.3815309638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26868.08,
            "unit": "ns",
            "range": "± 10056.375393457703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112463.95833333333,
            "unit": "ns",
            "range": "± 15192.687484733304"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 115977.45833333333,
            "unit": "ns",
            "range": "± 22844.397322073783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 128999.40425531915,
            "unit": "ns",
            "range": "± 19824.51729893809"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 12875.04,
            "unit": "ns",
            "range": "± 9324.298172110553"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26605.302083333332,
            "unit": "ns",
            "range": "± 8008.406182347979"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6614371.149594908,
            "unit": "ns",
            "range": "± 177899.29032517335"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2234281.079676798,
            "unit": "ns",
            "range": "± 111060.29540385274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1646224.0619710286,
            "unit": "ns",
            "range": "± 63912.401748352844"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3056062.7597336066,
            "unit": "ns",
            "range": "± 136306.82706152098"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1026885.9917490433,
            "unit": "ns",
            "range": "± 40486.414266941334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 920829.2382393973,
            "unit": "ns",
            "range": "± 44672.13659270416"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9460823.41025641,
            "unit": "ns",
            "range": "± 320042.7285022158"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25258565.814814813,
            "unit": "ns",
            "range": "± 697093.7741982803"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61294436.74,
            "unit": "ns",
            "range": "± 6001185.815556798"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135597216.69230768,
            "unit": "ns",
            "range": "± 1511275.9183059183"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 255036574.77,
            "unit": "ns",
            "range": "± 21007104.77014707"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1676910.452631579,
            "unit": "ns",
            "range": "± 150593.7725850552"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3392635.1224489794,
            "unit": "ns",
            "range": "± 270179.4717859622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2539435.425531915,
            "unit": "ns",
            "range": "± 323369.0691856427"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7030986.711340206,
            "unit": "ns",
            "range": "± 515188.6742616114"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62661.357894736844,
            "unit": "ns",
            "range": "± 9725.990172110782"
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
          "id": "9a0806c34a508f9e059428b2250858b6fae5a715",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-05-17T14:59:56+09:00",
          "tree_id": "33a003070ca521ce40a078bbc7e51df74bfce353",
          "url": "https://github.com/limebell/libplanet/commit/9a0806c34a508f9e059428b2250858b6fae5a715"
        },
        "date": 1684303902458,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3197745.923076923,
            "unit": "ns",
            "range": "± 34110.52148399752"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3287985.9285714286,
            "unit": "ns",
            "range": "± 36012.62213439207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4214996.266666667,
            "unit": "ns",
            "range": "± 29950.51368142043"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4189638.5789473685,
            "unit": "ns",
            "range": "± 77934.79606861951"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6781545.2,
            "unit": "ns",
            "range": "± 198274.5301897312"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276133.962962963,
            "unit": "ns",
            "range": "± 7714.574799995742"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261420.53333333333,
            "unit": "ns",
            "range": "± 4460.189647900423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 224836.14285714287,
            "unit": "ns",
            "range": "± 1354.1025331671417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4206096.4,
            "unit": "ns",
            "range": "± 27489.26079866723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3817908.466666667,
            "unit": "ns",
            "range": "± 45261.691469666024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15621.021505376344,
            "unit": "ns",
            "range": "± 1039.7465617043274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 82709.19642857143,
            "unit": "ns",
            "range": "± 3164.686624840058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 67894.23529411765,
            "unit": "ns",
            "range": "± 1345.1263197843057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 76645.20879120879,
            "unit": "ns",
            "range": "± 7722.258898817516"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4041.8367346938776,
            "unit": "ns",
            "range": "± 489.8818433993248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15668.113402061856,
            "unit": "ns",
            "range": "± 1488.5296917616436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5884369.307291667,
            "unit": "ns",
            "range": "± 19982.029773703158"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1946091.5416666667,
            "unit": "ns",
            "range": "± 12080.185331565704"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1334210.463704427,
            "unit": "ns",
            "range": "± 613.9963195728083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2555824.4513221155,
            "unit": "ns",
            "range": "± 3272.7401164511725"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 797665.5989118303,
            "unit": "ns",
            "range": "± 433.44946298083687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 724908.0720563616,
            "unit": "ns",
            "range": "± 617.5689925523073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7406904.6,
            "unit": "ns",
            "range": "± 27005.290100274797"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19109289.92857143,
            "unit": "ns",
            "range": "± 109319.29015887661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48883435.666666664,
            "unit": "ns",
            "range": "± 415942.13227471686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98248572.53333333,
            "unit": "ns",
            "range": "± 788357.5626170859"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 196832756.2142857,
            "unit": "ns",
            "range": "± 626114.2177181387"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1296386.793478261,
            "unit": "ns",
            "range": "± 72550.61434317607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2529950.8214285714,
            "unit": "ns",
            "range": "± 72251.03481614619"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2102833.621621622,
            "unit": "ns",
            "range": "± 95713.63540565784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5142093.875,
            "unit": "ns",
            "range": "± 130568.27540919548"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44312.724137931036,
            "unit": "ns",
            "range": "± 2388.5427136872095"
          }
        ]
      }
    ]
  }
}