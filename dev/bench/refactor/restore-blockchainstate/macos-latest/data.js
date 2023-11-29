window.BENCHMARK_DATA = {
  "lastUpdate": 1701259256846,
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
          "id": "7a08e50f1264dc22ac69006080975a245447ab87",
          "message": "refactor: restore BlockChainState",
          "timestamp": "2023-11-27T19:05:57+09:00",
          "tree_id": "1124214eb0cb7943617e7acf9138b6b9d0942e53",
          "url": "https://github.com/limebell/libplanet/commit/7a08e50f1264dc22ac69006080975a245447ab87"
        },
        "date": 1701149181012,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8602871.5,
            "unit": "ns",
            "range": "± 109804.84220880244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21688045.884615384,
            "unit": "ns",
            "range": "± 276757.04647052754"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53278663.3,
            "unit": "ns",
            "range": "± 707979.98922066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 110910610.83333333,
            "unit": "ns",
            "range": "± 4670138.236982547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236846091,
            "unit": "ns",
            "range": "± 8400233.540684285"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 77108.1,
            "unit": "ns",
            "range": "± 5618.179855230187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 304473.3229166667,
            "unit": "ns",
            "range": "± 21923.12487594335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 348959.6808510638,
            "unit": "ns",
            "range": "± 51859.940051595826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 322457.1630434783,
            "unit": "ns",
            "range": "± 36191.24192952897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4129914.1276595746,
            "unit": "ns",
            "range": "± 160973.06233094016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3729418.638297872,
            "unit": "ns",
            "range": "± 144137.17346294835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19806.229166666668,
            "unit": "ns",
            "range": "± 2118.2066569781773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94571.36956521739,
            "unit": "ns",
            "range": "± 8982.92650338504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103847.30769230769,
            "unit": "ns",
            "range": "± 13839.103885321403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110488.9693877551,
            "unit": "ns",
            "range": "± 21410.70077350238"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6831.659574468085,
            "unit": "ns",
            "range": "± 1212.2911442175118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23563.25581395349,
            "unit": "ns",
            "range": "± 5961.4555904844865"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1551326.5656565656,
            "unit": "ns",
            "range": "± 164819.6839601933"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3045795.847826087,
            "unit": "ns",
            "range": "± 184584.609806287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2627698.7551020407,
            "unit": "ns",
            "range": "± 320892.7822399759"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10859558.236842105,
            "unit": "ns",
            "range": "± 369747.75738811045"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3638295.074468085,
            "unit": "ns",
            "range": "± 428681.4492041543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3846637.904494382,
            "unit": "ns",
            "range": "± 542216.7671174827"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4480505.488888889,
            "unit": "ns",
            "range": "± 248467.14228588328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4567749.217391305,
            "unit": "ns",
            "range": "± 392424.32062307216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15176873.123655913,
            "unit": "ns",
            "range": "± 1338141.2002252613"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5619364.572716346,
            "unit": "ns",
            "range": "± 62033.815872804415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1779100.0767299107,
            "unit": "ns",
            "range": "± 27681.218680616083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1067094.5454427083,
            "unit": "ns",
            "range": "± 8272.541261938708"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2684226.498046875,
            "unit": "ns",
            "range": "± 90094.14847184138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 868040.8805338541,
            "unit": "ns",
            "range": "± 8918.571922685518"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732701.5005580357,
            "unit": "ns",
            "range": "± 6376.008928607431"
          }
        ]
      },
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
          "id": "48994c132636882a44bd8268918f72a66169d4f5",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-11-28T14:10:07+09:00",
          "tree_id": "05f6667642bdebb00c36ad80c287dde1c16e30ed",
          "url": "https://github.com/limebell/libplanet/commit/48994c132636882a44bd8268918f72a66169d4f5"
        },
        "date": 1701150301092,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 15915360.775510205,
            "unit": "ns",
            "range": "± 2351901.6230372502"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 38656745.30808081,
            "unit": "ns",
            "range": "± 5486766.129910065"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 97139125.16,
            "unit": "ns",
            "range": "± 13589688.24819674"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 179130166.0326087,
            "unit": "ns",
            "range": "± 19045468.31428077"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 336231306.2395833,
            "unit": "ns",
            "range": "± 44185812.06727699"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 85691.03846153847,
            "unit": "ns",
            "range": "± 20787.014074661394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 373994.15625,
            "unit": "ns",
            "range": "± 105617.06104456382"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 261556.96666666667,
            "unit": "ns",
            "range": "± 27635.4807335657"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 287760.03125,
            "unit": "ns",
            "range": "± 8876.359063534912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5631192.873626374,
            "unit": "ns",
            "range": "± 816416.3894531276"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 6641400.346938776,
            "unit": "ns",
            "range": "± 1321130.4363846376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24069.021978021978,
            "unit": "ns",
            "range": "± 3562.127825325201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106706.08139534884,
            "unit": "ns",
            "range": "± 13079.99989518359"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89504.69101123596,
            "unit": "ns",
            "range": "± 13274.765449799517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86591.42105263157,
            "unit": "ns",
            "range": "± 14303.605907943802"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5547.260869565217,
            "unit": "ns",
            "range": "± 1267.4914774802037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15845.90206185567,
            "unit": "ns",
            "range": "± 4314.596281953354"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2215566.8333333335,
            "unit": "ns",
            "range": "± 588397.8038279295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 4721808.912371134,
            "unit": "ns",
            "range": "± 1058492.1274603491"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3538174.1770833335,
            "unit": "ns",
            "range": "± 1009065.0352006371"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 16657710.85483871,
            "unit": "ns",
            "range": "± 4838962.360760974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4617262.712765957,
            "unit": "ns",
            "range": "± 786974.7546065095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5018943.453608247,
            "unit": "ns",
            "range": "± 992663.3974994476"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6501968.416666667,
            "unit": "ns",
            "range": "± 1396635.4322676123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6893028.25257732,
            "unit": "ns",
            "range": "± 1389127.911687971"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 20441846.520833332,
            "unit": "ns",
            "range": "± 4363093.945062406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4713077.816285438,
            "unit": "ns",
            "range": "± 279482.75498326175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1470949.4610595703,
            "unit": "ns",
            "range": "± 111726.2765201828"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1227043.810483871,
            "unit": "ns",
            "range": "± 73604.8383938604"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2805236.7304262905,
            "unit": "ns",
            "range": "± 233881.4856731443"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 979151.2337036133,
            "unit": "ns",
            "range": "± 127601.29648968256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 811530.757765997,
            "unit": "ns",
            "range": "± 29287.833235926206"
          }
        ]
      },
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
          "id": "f4cefbfc69cf53309357222f6dcc40d88493adb3",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-11-28T17:10:10+09:00",
          "tree_id": "020e37662df65fce31cc665639eff48150fbc5bc",
          "url": "https://github.com/limebell/libplanet/commit/f4cefbfc69cf53309357222f6dcc40d88493adb3"
        },
        "date": 1701160130095,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8539965.25,
            "unit": "ns",
            "range": "± 119376.98516435995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20007247.57142857,
            "unit": "ns",
            "range": "± 720765.4532406008"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49996667.255813956,
            "unit": "ns",
            "range": "± 1847802.679443899"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101561330.07777777,
            "unit": "ns",
            "range": "± 3855185.1629769146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231513488.5,
            "unit": "ns",
            "range": "± 3325784.926505213"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 70586.40909090909,
            "unit": "ns",
            "range": "± 8138.865748358397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 339930.2842105263,
            "unit": "ns",
            "range": "± 43286.94890745059"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323345.0543478261,
            "unit": "ns",
            "range": "± 30984.900408887268"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 312241.43956043955,
            "unit": "ns",
            "range": "± 24104.817677159146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4347605.632653061,
            "unit": "ns",
            "range": "± 171625.46871891493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3877224.1616161615,
            "unit": "ns",
            "range": "± 239363.3501504759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24679.82967032967,
            "unit": "ns",
            "range": "± 3840.7467620385873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 110433.72043010753,
            "unit": "ns",
            "range": "± 16716.51890598143"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 109644.10714285714,
            "unit": "ns",
            "range": "± 12871.548779239185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 118467.6875,
            "unit": "ns",
            "range": "± 24211.830651590884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8436.358695652174,
            "unit": "ns",
            "range": "± 2094.7124829930885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23315.816091954024,
            "unit": "ns",
            "range": "± 4869.029444686734"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1659344.1458333333,
            "unit": "ns",
            "range": "± 232679.06593372134"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2987034.0675675673,
            "unit": "ns",
            "range": "± 144597.32242299468"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2668234.423076923,
            "unit": "ns",
            "range": "± 203168.36367742074"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19966046.348314606,
            "unit": "ns",
            "range": "± 1646535.4019458287"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3412953.056701031,
            "unit": "ns",
            "range": "± 290232.7666896208"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3499587.7701149425,
            "unit": "ns",
            "range": "± 213272.01589152505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4457765.388888889,
            "unit": "ns",
            "range": "± 136991.26713757607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4726403.119565218,
            "unit": "ns",
            "range": "± 436425.8441008499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 21089378.554945055,
            "unit": "ns",
            "range": "± 2863098.6641286328"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6411037.730096726,
            "unit": "ns",
            "range": "± 151920.0002924638"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1864993.367466518,
            "unit": "ns",
            "range": "± 30004.635367756127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1112962.4045572917,
            "unit": "ns",
            "range": "± 17390.996102827256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3110802.3306039665,
            "unit": "ns",
            "range": "± 126755.82759561983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838638.8897181919,
            "unit": "ns",
            "range": "± 8198.109568698555"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 787714.3354817708,
            "unit": "ns",
            "range": "± 13663.264112489136"
          }
        ]
      },
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
          "id": "b93143be308113fe36507f34da821560f0751438",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-11-29T20:38:46+09:00",
          "tree_id": "2a0d1846e57d4dd33b27bfc4d5afed9ab3b27bd1",
          "url": "https://github.com/limebell/libplanet/commit/b93143be308113fe36507f34da821560f0751438"
        },
        "date": 1701259240179,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7719505.052631579,
            "unit": "ns",
            "range": "± 170616.09386555981"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19020986.39285714,
            "unit": "ns",
            "range": "± 816033.3925356616"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45880161.733333334,
            "unit": "ns",
            "range": "± 636806.5054993961"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92078311.0625,
            "unit": "ns",
            "range": "± 1426896.2643711918"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188874542.53333333,
            "unit": "ns",
            "range": "± 3351993.844864359"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32417.370786516854,
            "unit": "ns",
            "range": "± 2079.006096573894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 222979.71578947367,
            "unit": "ns",
            "range": "± 17054.42884306144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 214543.085106383,
            "unit": "ns",
            "range": "± 20480.004646368117"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 192879.18085106384,
            "unit": "ns",
            "range": "± 15418.201939163779"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3871849.9285714286,
            "unit": "ns",
            "range": "± 61574.74828139846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3400173.8,
            "unit": "ns",
            "range": "± 101082.57119736611"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12697.043956043955,
            "unit": "ns",
            "range": "± 1091.6229702408743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 58990.681318681316,
            "unit": "ns",
            "range": "± 5471.72149404782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52401.369047619046,
            "unit": "ns",
            "range": "± 4124.65730092995"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59756.66483516483,
            "unit": "ns",
            "range": "± 9545.934818623913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3849.568181818182,
            "unit": "ns",
            "range": "± 934.1962283155264"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13478.326086956522,
            "unit": "ns",
            "range": "± 2120.9896565679046"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1194897.4081632653,
            "unit": "ns",
            "range": "± 108411.64431588972"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2360222.162337662,
            "unit": "ns",
            "range": "± 120961.26492705382"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1932449.792929293,
            "unit": "ns",
            "range": "± 157559.97993334787"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13445553.435897436,
            "unit": "ns",
            "range": "± 1225455.0704761068"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2951637.895522388,
            "unit": "ns",
            "range": "± 140056.96277523032"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3021682.6842105263,
            "unit": "ns",
            "range": "± 103794.81849513549"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3678104.8666666667,
            "unit": "ns",
            "range": "± 58248.54870278703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3754411.285714286,
            "unit": "ns",
            "range": "± 66464.87694602729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14136841.873493975,
            "unit": "ns",
            "range": "± 1828660.4352129358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6634464.313829787,
            "unit": "ns",
            "range": "± 1454918.9833694026"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1502600.4077907987,
            "unit": "ns",
            "range": "± 102628.54055878658"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1023486.7192437676,
            "unit": "ns",
            "range": "± 82851.06504575437"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2286159.6388380984,
            "unit": "ns",
            "range": "± 144903.04784226857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 753598.7345525568,
            "unit": "ns",
            "range": "± 17589.193647131433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 680642.6526227678,
            "unit": "ns",
            "range": "± 7712.331752440284"
          }
        ]
      }
    ]
  }
}