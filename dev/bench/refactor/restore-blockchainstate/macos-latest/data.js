window.BENCHMARK_DATA = {
  "lastUpdate": 1701150323904,
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
      }
    ]
  }
}