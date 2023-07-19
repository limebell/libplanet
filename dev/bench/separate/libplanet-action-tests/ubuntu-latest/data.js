window.BENCHMARK_DATA = {
  "lastUpdate": 1689733718914,
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
          "id": "400c1dd23afefa9e465482c01e7cd7ce8bc3ccbb",
          "message": "test: separate Libplanet.Action.Tests project\n\nsome tests in Libplanet.Tests.Action is not separated since it has dependency on blockchain",
          "timestamp": "2023-07-18T19:10:26+09:00",
          "tree_id": "580e9ab971c4e68d46cef5975f853c3f4fbdd62c",
          "url": "https://github.com/limebell/libplanet/commit/400c1dd23afefa9e465482c01e7cd7ce8bc3ccbb"
        },
        "date": 1689675787170,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275128.67647058825,
            "unit": "ns",
            "range": "± 7153.767838425863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265070.6857142857,
            "unit": "ns",
            "range": "± 8624.537299682428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233846.90476190476,
            "unit": "ns",
            "range": "± 5332.921628008065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4259171.076923077,
            "unit": "ns",
            "range": "± 22249.355340704213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3929922.3076923075,
            "unit": "ns",
            "range": "± 41218.03249465905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18247.081632653062,
            "unit": "ns",
            "range": "± 1703.5698701684528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90623.8493150685,
            "unit": "ns",
            "range": "± 4511.790601891008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71730.84615384616,
            "unit": "ns",
            "range": "± 816.9165447128862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86925.14285714286,
            "unit": "ns",
            "range": "± 12176.81238738307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4091.553191489362,
            "unit": "ns",
            "range": "± 476.9154839808335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16777.043956043955,
            "unit": "ns",
            "range": "± 1537.477211481255"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1336117.8936170214,
            "unit": "ns",
            "range": "± 78690.21559342115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2536514.263157895,
            "unit": "ns",
            "range": "± 86771.34010492492"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1897820.2222222222,
            "unit": "ns",
            "range": "± 47493.05784681615"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4845764.225806451,
            "unit": "ns",
            "range": "± 147507.53847983718"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6291238.319754465,
            "unit": "ns",
            "range": "± 31490.11651195826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2016002.6544270834,
            "unit": "ns",
            "range": "± 2193.576951144213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1366858.1727864584,
            "unit": "ns",
            "range": "± 1470.1695953249239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2565913.2421875,
            "unit": "ns",
            "range": "± 1804.0776454300417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 827534.9110630581,
            "unit": "ns",
            "range": "± 510.4677543504449"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728584.1268780048,
            "unit": "ns",
            "range": "± 367.7117524865293"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3310045.7333333334,
            "unit": "ns",
            "range": "± 46488.87145246494"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3462893.6,
            "unit": "ns",
            "range": "± 56266.53412337695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4336580.4,
            "unit": "ns",
            "range": "± 67796.04651010263"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3817324.135135135,
            "unit": "ns",
            "range": "± 129446.85136082389"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6270968.6,
            "unit": "ns",
            "range": "± 183275.17068823043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7536581.538461538,
            "unit": "ns",
            "range": "± 23861.651247749614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19025687.666666668,
            "unit": "ns",
            "range": "± 76561.4943350084"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49389783.333333336,
            "unit": "ns",
            "range": "± 345158.2674963693"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99341778.53333333,
            "unit": "ns",
            "range": "± 915246.305176049"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198432469,
            "unit": "ns",
            "range": "± 1509738.5029638174"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46324.48101265823,
            "unit": "ns",
            "range": "± 2415.5486920385642"
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
          "id": "d5fddba73cefa3a3d2e218afbe51e48311585704",
          "message": "test: separate Libplanet.Action.Tests project  [skip changelog]\n\nsome tests in Libplanet.Tests.Action is not separated since it has dependency on blockchain",
          "timestamp": "2023-07-18T19:15:00+09:00",
          "tree_id": "580e9ab971c4e68d46cef5975f853c3f4fbdd62c",
          "url": "https://github.com/limebell/libplanet/commit/d5fddba73cefa3a3d2e218afbe51e48311585704"
        },
        "date": 1689676164048,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 310151.1282051282,
            "unit": "ns",
            "range": "± 10673.143401176538"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290310.5294117647,
            "unit": "ns",
            "range": "± 9379.06658867855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 263880.5882352941,
            "unit": "ns",
            "range": "± 8440.182696276432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4642776.933333334,
            "unit": "ns",
            "range": "± 47066.41630484472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4236881.142857143,
            "unit": "ns",
            "range": "± 27176.147354894605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22512.864583333332,
            "unit": "ns",
            "range": "± 1929.011601939363"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102456.70408163265,
            "unit": "ns",
            "range": "± 8723.064680890166"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89329.32989690722,
            "unit": "ns",
            "range": "± 5181.8392783548425"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101128.16,
            "unit": "ns",
            "range": "± 4288.27677870853"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6332.123711340206,
            "unit": "ns",
            "range": "± 792.7005432083096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23668.887640449437,
            "unit": "ns",
            "range": "± 1344.481485370697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1559007.5411764707,
            "unit": "ns",
            "range": "± 81327.9586895454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2966729.25,
            "unit": "ns",
            "range": "± 76756.86835674566"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2001873.5294117648,
            "unit": "ns",
            "range": "± 104752.3588166723"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5284101.8965517245,
            "unit": "ns",
            "range": "± 153592.05311016605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6329182.191706731,
            "unit": "ns",
            "range": "± 16502.310446833042"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1914155.4909319195,
            "unit": "ns",
            "range": "± 2727.5725609612914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1414162.6235677083,
            "unit": "ns",
            "range": "± 4185.189234297488"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2661043.2872596155,
            "unit": "ns",
            "range": "± 2100.0790695694395"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 839786.7384905134,
            "unit": "ns",
            "range": "± 175.90445573190186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773615.3030598959,
            "unit": "ns",
            "range": "± 191.43114747933518"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3726350.5625,
            "unit": "ns",
            "range": "± 65518.845714261224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4024925.2,
            "unit": "ns",
            "range": "± 74366.11299337122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4729305.357142857,
            "unit": "ns",
            "range": "± 83672.12603012487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4334703.666666667,
            "unit": "ns",
            "range": "± 72042.06589671527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6877116.2727272725,
            "unit": "ns",
            "range": "± 163965.72200664436"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8794621.142857144,
            "unit": "ns",
            "range": "± 71755.52874100434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23203391.666666668,
            "unit": "ns",
            "range": "± 169585.54101509054"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57378980.4,
            "unit": "ns",
            "range": "± 141453.13576224257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115640835.93333334,
            "unit": "ns",
            "range": "± 333388.4313292972"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230128550.7857143,
            "unit": "ns",
            "range": "± 719552.2262113569"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50901.89887640449,
            "unit": "ns",
            "range": "± 2818.31016038199"
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
          "id": "0296e4972f98be752a44d3bcf2f0a24b32e8b858",
          "message": "docs: update CONTRIBUTING.md",
          "timestamp": "2023-07-19T11:12:39+09:00",
          "tree_id": "44de303713386638125b37c8086e0fb64eda1a11",
          "url": "https://github.com/limebell/libplanet/commit/0296e4972f98be752a44d3bcf2f0a24b32e8b858"
        },
        "date": 1689733715323,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 344628.2111111111,
            "unit": "ns",
            "range": "± 19172.322402443733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 328005.5747126437,
            "unit": "ns",
            "range": "± 17822.035753156677"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 324567.35294117645,
            "unit": "ns",
            "range": "± 6234.120907766151"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4863283.15,
            "unit": "ns",
            "range": "± 109328.28104589407"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4426172.576923077,
            "unit": "ns",
            "range": "± 110125.99899648513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 34381.032608695656,
            "unit": "ns",
            "range": "± 4976.103728581862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 146129.7789473684,
            "unit": "ns",
            "range": "± 9813.423248534184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 130595.55670103093,
            "unit": "ns",
            "range": "± 17854.04418587067"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 152772.29166666666,
            "unit": "ns",
            "range": "± 20643.154676763235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 11031.775510204081,
            "unit": "ns",
            "range": "± 2601.479089717891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32923,
            "unit": "ns",
            "range": "± 5494.589852708256"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1718176.7419354839,
            "unit": "ns",
            "range": "± 117691.04389274109"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3247241.0303030303,
            "unit": "ns",
            "range": "± 222690.04719928897"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2258059.3125,
            "unit": "ns",
            "range": "± 154621.81955967087"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5712564.28125,
            "unit": "ns",
            "range": "± 263045.0891739942"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6655143.306510417,
            "unit": "ns",
            "range": "± 91642.58177832792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1922827.1488560268,
            "unit": "ns",
            "range": "± 3595.5944549048772"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1408676.1014322916,
            "unit": "ns",
            "range": "± 4723.21893785325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2790095.9116908484,
            "unit": "ns",
            "range": "± 79923.40887089397"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 867078.238248698,
            "unit": "ns",
            "range": "± 1396.122084965269"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 780845.8688802083,
            "unit": "ns",
            "range": "± 1236.8755679246885"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3977964,
            "unit": "ns",
            "range": "± 85118.88834839578"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4278287.0625,
            "unit": "ns",
            "range": "± 83230.07121024528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5017487.423076923,
            "unit": "ns",
            "range": "± 132120.85139482655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4595653.947368421,
            "unit": "ns",
            "range": "± 98094.02897247433"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7221785,
            "unit": "ns",
            "range": "± 171121.06469369796"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9473965.4,
            "unit": "ns",
            "range": "± 124746.88689834537"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24072849.785714287,
            "unit": "ns",
            "range": "± 301425.756198815"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 59927838.4,
            "unit": "ns",
            "range": "± 577212.918681511"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118397534.375,
            "unit": "ns",
            "range": "± 2309658.3042231123"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236987495.85714287,
            "unit": "ns",
            "range": "± 2904351.400838506"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66130.22916666667,
            "unit": "ns",
            "range": "± 11545.627747041108"
          }
        ]
      }
    ]
  }
}