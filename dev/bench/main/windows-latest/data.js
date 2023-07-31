window.BENCHMARK_DATA = {
  "lastUpdate": 1690797722625,
  "repoUrl": "https://github.com/limebell/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d7d58f7ce685aa62bdf83862001ebd213454d03",
          "message": "Merge pull request #3291 from greymistcube/refactor/tx-success\n\n🧹 Removed ActionsLogsList from TxExecution",
          "timestamp": "2023-07-12T11:06:26+09:00",
          "tree_id": "cb1787efb83c661ea8d11c9c0f014cbbcfd2c083",
          "url": "https://github.com/limebell/libplanet/commit/9d7d58f7ce685aa62bdf83862001ebd213454d03"
        },
        "date": 1689130520431,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1345370.1149425288,
            "unit": "ns",
            "range": "± 73424.8359777448"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2463897.1428571427,
            "unit": "ns",
            "range": "± 79222.7852166218"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1664031.914893617,
            "unit": "ns",
            "range": "± 92935.83427864597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4585796.721311475,
            "unit": "ns",
            "range": "± 206110.43800772852"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45187.36842105263,
            "unit": "ns",
            "range": "± 2673.95802355948"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6749250,
            "unit": "ns",
            "range": "± 36506.453591743935"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17283438.46153846,
            "unit": "ns",
            "range": "± 59472.77442188062"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45307060,
            "unit": "ns",
            "range": "± 517939.5549399839"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 87693750,
            "unit": "ns",
            "range": "± 406303.38560470566"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 176806153.33333334,
            "unit": "ns",
            "range": "± 1255202.0565098939"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4899025.279017857,
            "unit": "ns",
            "range": "± 9328.042050868666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1533748.2421875,
            "unit": "ns",
            "range": "± 2021.5130101064346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1153632.2330729167,
            "unit": "ns",
            "range": "± 2000.530319566882"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2571404.6614583335,
            "unit": "ns",
            "range": "± 3767.0818063755764"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829283.02734375,
            "unit": "ns",
            "range": "± 901.5588114380378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 729629.4661458334,
            "unit": "ns",
            "range": "± 823.7026702517189"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2933687.5,
            "unit": "ns",
            "range": "± 91240.52845231698"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3074663.1578947366,
            "unit": "ns",
            "range": "± 60775.435557891826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3893073.3333333335,
            "unit": "ns",
            "range": "± 60228.676922289465"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3422368.4210526315,
            "unit": "ns",
            "range": "± 109574.71622266418"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5837813.333333333,
            "unit": "ns",
            "range": "± 72214.00602837837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254040,
            "unit": "ns",
            "range": "± 8233.868363976566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 247494.5945945946,
            "unit": "ns",
            "range": "± 7503.108464938824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213200,
            "unit": "ns",
            "range": "± 6741.279439753887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3796633.3333333335,
            "unit": "ns",
            "range": "± 32540.20955825635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3548066.6666666665,
            "unit": "ns",
            "range": "± 58156.93874173162"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16651.020408163266,
            "unit": "ns",
            "range": "± 1735.5735198712218"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77862.5,
            "unit": "ns",
            "range": "± 3850.8383108360354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 68466.66666666667,
            "unit": "ns",
            "range": "± 2039.4950919002126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81019.78021978022,
            "unit": "ns",
            "range": "± 10795.999462560398"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3991.0112359550562,
            "unit": "ns",
            "range": "± 454.4328256784899"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15992.553191489362,
            "unit": "ns",
            "range": "± 1258.2834665076382"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d7d58f7ce685aa62bdf83862001ebd213454d03",
          "message": "Merge pull request #3291 from greymistcube/refactor/tx-success\n\n🧹 Removed ActionsLogsList from TxExecution",
          "timestamp": "2023-07-12T11:06:26+09:00",
          "tree_id": "cb1787efb83c661ea8d11c9c0f014cbbcfd2c083",
          "url": "https://github.com/limebell/libplanet/commit/9d7d58f7ce685aa62bdf83862001ebd213454d03"
        },
        "date": 1689130597987,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1476182.2916666667,
            "unit": "ns",
            "range": "± 119956.74483113676"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2759844.736842105,
            "unit": "ns",
            "range": "± 140133.04858334866"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1895137.6288659794,
            "unit": "ns",
            "range": "± 113194.66571071635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5136573.2558139535,
            "unit": "ns",
            "range": "± 277548.3094883901"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51402.15053763441,
            "unit": "ns",
            "range": "± 3387.347894695908"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7904187.5,
            "unit": "ns",
            "range": "± 201023.84524900437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20992200,
            "unit": "ns",
            "range": "± 299668.91492350114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52557014.28571428,
            "unit": "ns",
            "range": "± 540430.3696088927"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 104989720,
            "unit": "ns",
            "range": "± 986413.8223165482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209594164.2857143,
            "unit": "ns",
            "range": "± 2238461.386277892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4945731.640625,
            "unit": "ns",
            "range": "± 14278.392263601081"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1563312.4088541667,
            "unit": "ns",
            "range": "± 3342.393628738346"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1220690.3776041667,
            "unit": "ns",
            "range": "± 7882.768235333423"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2688535.518973214,
            "unit": "ns",
            "range": "± 17194.84640068124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 866063.0598958334,
            "unit": "ns",
            "range": "± 5751.729576838599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789111.4708533654,
            "unit": "ns",
            "range": "± 1700.4507961283523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3392915,
            "unit": "ns",
            "range": "± 75220.63179320167"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3537125,
            "unit": "ns",
            "range": "± 69204.7734384462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4221224.137931035,
            "unit": "ns",
            "range": "± 123415.05654605523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3974748.5714285714,
            "unit": "ns",
            "range": "± 129022.9810159884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6580402.94117647,
            "unit": "ns",
            "range": "± 209313.1400489419"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 277191.93548387097,
            "unit": "ns",
            "range": "± 12624.193509537996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 265123.21428571426,
            "unit": "ns",
            "range": "± 10698.563898043489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 252396.9387755102,
            "unit": "ns",
            "range": "± 19301.425907913825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4234150,
            "unit": "ns",
            "range": "± 52573.12367867572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3914304,
            "unit": "ns",
            "range": "± 104359.8002106175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23124.468085106382,
            "unit": "ns",
            "range": "± 2495.229261783967"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95196.7741935484,
            "unit": "ns",
            "range": "± 7691.4330039973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 82655.78947368421,
            "unit": "ns",
            "range": "± 6884.823207135028"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 113406.12244897959,
            "unit": "ns",
            "range": "± 15859.432890671651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6524.742268041237,
            "unit": "ns",
            "range": "± 1240.969960675507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20704.301075268817,
            "unit": "ns",
            "range": "± 2116.9047327404296"
          }
        ]
      },
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
          "distinct": false,
          "id": "e74fb5a87684d8831b8ca42f80318bfced1494ed",
          "message": "Merge pull request #3342 from planetarium/fix/scrypt\n\nUse @noble/hashes/scrypt instead of scrypt-js",
          "timestamp": "2023-07-31T14:02:49+09:00",
          "tree_id": "d8e2fe6ccbed1438294efe071b5c6627b80c49db",
          "url": "https://github.com/limebell/libplanet/commit/e74fb5a87684d8831b8ca42f80318bfced1494ed"
        },
        "date": 1690797706635,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1829302.0202020202,
            "unit": "ns",
            "range": "± 183649.02638956823"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3355597.9591836734,
            "unit": "ns",
            "range": "± 262052.3422884919"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2236615.053763441,
            "unit": "ns",
            "range": "± 159583.19211528383"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6420919.191919192,
            "unit": "ns",
            "range": "± 435866.2956562898"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63613.978494623654,
            "unit": "ns",
            "range": "± 10973.28367680825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10732141.379310345,
            "unit": "ns",
            "range": "± 310027.44638550194"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26010804.545454547,
            "unit": "ns",
            "range": "± 623532.7191760804"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66282784.615384616,
            "unit": "ns",
            "range": "± 727516.3352646613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132241527.77777778,
            "unit": "ns",
            "range": "± 2497321.6431174832"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 277311482.35294116,
            "unit": "ns",
            "range": "± 4964558.484300907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6146945.989583333,
            "unit": "ns",
            "range": "± 103439.97614546865"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1988012.388392857,
            "unit": "ns",
            "range": "± 16817.913191903546"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1501449.2122395833,
            "unit": "ns",
            "range": "± 22824.13766406567"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3317714.7135416665,
            "unit": "ns",
            "range": "± 46280.22947025995"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1040471.6099330357,
            "unit": "ns",
            "range": "± 17775.341595260943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1002091.6015625,
            "unit": "ns",
            "range": "± 25324.75230330265"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4069340.8163265307,
            "unit": "ns",
            "range": "± 161123.17223991422"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4467911.111111111,
            "unit": "ns",
            "range": "± 187611.5252390314"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5602055.263157895,
            "unit": "ns",
            "range": "± 186505.56501713645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4917842.028985507,
            "unit": "ns",
            "range": "± 235472.531435258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8321910.416666667,
            "unit": "ns",
            "range": "± 328343.3200883356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 343618.82352941175,
            "unit": "ns",
            "range": "± 18518.938145261225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 334496.8253968254,
            "unit": "ns",
            "range": "± 15352.881081454387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317459.375,
            "unit": "ns",
            "range": "± 27657.40627229036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5388131.818181818,
            "unit": "ns",
            "range": "± 125952.0104618975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4806840.476190476,
            "unit": "ns",
            "range": "± 172364.79757673884"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24457.954545454544,
            "unit": "ns",
            "range": "± 4202.044428277797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113954.34782608696,
            "unit": "ns",
            "range": "± 17068.816197474916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 133547.311827957,
            "unit": "ns",
            "range": "± 12916.139140775787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 146042.70833333334,
            "unit": "ns",
            "range": "± 26120.098108914102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9222.527472527472,
            "unit": "ns",
            "range": "± 1490.4187281928475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27148.979591836734,
            "unit": "ns",
            "range": "± 7782.762408079162"
          }
        ]
      }
    ]
  }
}