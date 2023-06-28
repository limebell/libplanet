window.BENCHMARK_DATA = {
  "lastUpdate": 1687955163730,
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
          "id": "e102b155f5f07a4d6923f5284d44f8948261df96",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-06-27T16:33:48+09:00",
          "tree_id": "339cafe715ac8791e7a8a18c68547ddcc65a1735",
          "url": "https://github.com/limebell/libplanet/commit/e102b155f5f07a4d6923f5284d44f8948261df96"
        },
        "date": 1687852060535,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3269979.238095238,
            "unit": "ns",
            "range": "± 74609.14928807643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3469961.153846154,
            "unit": "ns",
            "range": "± 94893.60424883956"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4270498.357142857,
            "unit": "ns",
            "range": "± 46102.46249156019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4201994.1875,
            "unit": "ns",
            "range": "± 163743.6475348828"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6823557.7272727275,
            "unit": "ns",
            "range": "± 186800.42144095138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7810277.333333333,
            "unit": "ns",
            "range": "± 90503.16237779181"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19730471.866666667,
            "unit": "ns",
            "range": "± 203392.4214667887"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50950234.4,
            "unit": "ns",
            "range": "± 277289.75602421997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103221753.2,
            "unit": "ns",
            "range": "± 673774.9922911102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 203218990.42857143,
            "unit": "ns",
            "range": "± 1012741.7220598375"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279760.9583333333,
            "unit": "ns",
            "range": "± 10999.437279529897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267263.7826086957,
            "unit": "ns",
            "range": "± 9561.550278561976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 236245.33333333334,
            "unit": "ns",
            "range": "± 4330.36457829504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4276096.133333334,
            "unit": "ns",
            "range": "± 31041.68294606157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3839178.5384615385,
            "unit": "ns",
            "range": "± 12992.155977200144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18401.94845360825,
            "unit": "ns",
            "range": "± 2075.1677711850894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87120.46153846153,
            "unit": "ns",
            "range": "± 5092.416735385824"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73010.43243243243,
            "unit": "ns",
            "range": "± 2264.112452308122"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81032.4328358209,
            "unit": "ns",
            "range": "± 3445.4466008794175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4506.061224489796,
            "unit": "ns",
            "range": "± 566.565031004604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17264.5625,
            "unit": "ns",
            "range": "± 2043.2070859442103"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46976.28395061728,
            "unit": "ns",
            "range": "± 2477.7647751278164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6482879.782291667,
            "unit": "ns",
            "range": "± 8664.754287982438"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1950997.5703125,
            "unit": "ns",
            "range": "± 3390.1744033647433"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1344654.4296875,
            "unit": "ns",
            "range": "± 550.9926862606285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2578174.6124441964,
            "unit": "ns",
            "range": "± 1916.7017313963038"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 811562.177594866,
            "unit": "ns",
            "range": "± 458.76982424485806"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742390.0697265625,
            "unit": "ns",
            "range": "± 755.5161218967793"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1369268.3469387756,
            "unit": "ns",
            "range": "± 115445.22672438824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2545029.119047619,
            "unit": "ns",
            "range": "± 92469.3696579397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2113464.9589041094,
            "unit": "ns",
            "range": "± 104905.23169090894"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5229884.457142857,
            "unit": "ns",
            "range": "± 157720.5743293654"
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
          "id": "0c62f6b3f70f49aa968d5199b11775e95bd1093e",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-06-27T16:59:05+09:00",
          "tree_id": "fe01a0e48cb493795875a583b8623dcd2261ecf0",
          "url": "https://github.com/limebell/libplanet/commit/0c62f6b3f70f49aa968d5199b11775e95bd1093e"
        },
        "date": 1687853747843,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4092902.326530612,
            "unit": "ns",
            "range": "± 238020.3677895133"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4413909.055555556,
            "unit": "ns",
            "range": "± 146799.9974285606"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5378764.083333333,
            "unit": "ns",
            "range": "± 134555.18798261267"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5482674.5,
            "unit": "ns",
            "range": "± 105096.56779616227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8609826.533333333,
            "unit": "ns",
            "range": "± 327417.3028110651"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10191292.323529411,
            "unit": "ns",
            "range": "± 326013.79576151614"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 28822876.64814815,
            "unit": "ns",
            "range": "± 1096484.7386424397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68641467.2,
            "unit": "ns",
            "range": "± 1414881.438197993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 137640537.06451613,
            "unit": "ns",
            "range": "± 4096411.674090646"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 278447461.4230769,
            "unit": "ns",
            "range": "± 7539006.618097545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342223.6923076923,
            "unit": "ns",
            "range": "± 4001.191518048413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330519.1666666667,
            "unit": "ns",
            "range": "± 9793.191132489515"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295898.11340206186,
            "unit": "ns",
            "range": "± 17381.337278263603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5351626.066666666,
            "unit": "ns",
            "range": "± 158432.45275814206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4979735.215686275,
            "unit": "ns",
            "range": "± 192535.72583209732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22747.831578947367,
            "unit": "ns",
            "range": "± 1633.7910987367113"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105848.93548387097,
            "unit": "ns",
            "range": "± 7724.408164758801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90912.29896907216,
            "unit": "ns",
            "range": "± 7843.634890476678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 111772.80612244898,
            "unit": "ns",
            "range": "± 16418.058757166647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6346.288659793814,
            "unit": "ns",
            "range": "± 804.5515308589997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21638.41304347826,
            "unit": "ns",
            "range": "± 2056.27868911306"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55867.011235955055,
            "unit": "ns",
            "range": "± 3013.831111024873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7136335.529761905,
            "unit": "ns",
            "range": "± 128604.4148412398"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2151942.7958333334,
            "unit": "ns",
            "range": "± 28359.619950554694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1614820.871940104,
            "unit": "ns",
            "range": "± 20125.788093958687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3115402.842998798,
            "unit": "ns",
            "range": "± 9387.320514608984"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1003396.5532552083,
            "unit": "ns",
            "range": "± 7215.509760130558"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 889677.5517578125,
            "unit": "ns",
            "range": "± 2432.0829129782146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1749759.0430107526,
            "unit": "ns",
            "range": "± 113584.31217496103"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3448202.8791208793,
            "unit": "ns",
            "range": "± 193284.45863343115"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2779997.4431818184,
            "unit": "ns",
            "range": "± 152505.5853910538"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6719079.132075472,
            "unit": "ns",
            "range": "± 276796.0033129117"
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
          "id": "4a653deb88318d440f450b17538374e1189cb874",
          "message": "chore: fix doc build",
          "timestamp": "2023-06-27T17:15:19+09:00",
          "tree_id": "c34acc6d1e8fb440eac240eaf6cb99bfab5288f4",
          "url": "https://github.com/limebell/libplanet/commit/4a653deb88318d440f450b17538374e1189cb874"
        },
        "date": 1687854574028,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3829468.714285714,
            "unit": "ns",
            "range": "± 88209.1236325035"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3952413.4285714286,
            "unit": "ns",
            "range": "± 65993.79249329706"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4612179.714285715,
            "unit": "ns",
            "range": "± 68397.00593585227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4998856.166666667,
            "unit": "ns",
            "range": "± 53294.34276617724"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7540864.733333333,
            "unit": "ns",
            "range": "± 133820.6737335276"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8959133.933333334,
            "unit": "ns",
            "range": "± 105058.32837827802"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23092451.846153848,
            "unit": "ns",
            "range": "± 182327.95317771318"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58052489.428571425,
            "unit": "ns",
            "range": "± 175812.13464058482"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118202910.13333334,
            "unit": "ns",
            "range": "± 221538.65266193767"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 230619663.26666668,
            "unit": "ns",
            "range": "± 1163301.7301119054"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 340812.0967741936,
            "unit": "ns",
            "range": "± 8630.458579375872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 291459.93548387097,
            "unit": "ns",
            "range": "± 12953.3339703178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 285116.7571428571,
            "unit": "ns",
            "range": "± 13884.125622540458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4714864.266666667,
            "unit": "ns",
            "range": "± 30856.17055322199"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4151722.6428571427,
            "unit": "ns",
            "range": "± 29083.870942783447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28256.677083333332,
            "unit": "ns",
            "range": "± 3786.5412088350695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107863.80808080808,
            "unit": "ns",
            "range": "± 15442.372473349044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97819.92,
            "unit": "ns",
            "range": "± 9516.858570139646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99793.26086956522,
            "unit": "ns",
            "range": "± 13617.559208181989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8485.050505050505,
            "unit": "ns",
            "range": "± 2064.2968233696993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22404.712765957447,
            "unit": "ns",
            "range": "± 2882.9259241873356"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 58091.9494949495,
            "unit": "ns",
            "range": "± 10272.516286907028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6101626.639423077,
            "unit": "ns",
            "range": "± 24367.394119022294"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1915489.2720424107,
            "unit": "ns",
            "range": "± 1329.2508716210198"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1396227.83515625,
            "unit": "ns",
            "range": "± 3111.6234756487625"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2663039.630989583,
            "unit": "ns",
            "range": "± 1743.117939258165"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842803.2029157366,
            "unit": "ns",
            "range": "± 434.86078725637384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769251.9990985577,
            "unit": "ns",
            "range": "± 329.69696136264093"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1533373.357142857,
            "unit": "ns",
            "range": "± 98132.8413616792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2860973.675,
            "unit": "ns",
            "range": "± 92778.10406290404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2400419.656716418,
            "unit": "ns",
            "range": "± 107167.0589673604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5962397.978723404,
            "unit": "ns",
            "range": "± 232509.6738806974"
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
          "id": "c9089ae1494539bc8b038f9854830d90c70bbb65",
          "message": "chore: apply suggestions from the code review",
          "timestamp": "2023-06-27T19:07:48+09:00",
          "tree_id": "0e13e0658adafb87bb2cfbc8de4e0f51b99f5548",
          "url": "https://github.com/limebell/libplanet/commit/c9089ae1494539bc8b038f9854830d90c70bbb65"
        },
        "date": 1687861199966,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3279002.6666666665,
            "unit": "ns",
            "range": "± 24765.299201176826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3512381.25,
            "unit": "ns",
            "range": "± 67718.13424334725"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4323400.944444444,
            "unit": "ns",
            "range": "± 75156.27449010513"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4331311,
            "unit": "ns",
            "range": "± 109699.50173522449"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6983280.451612903,
            "unit": "ns",
            "range": "± 209101.04992895006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7795788.857142857,
            "unit": "ns",
            "range": "± 62793.98595389547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19694533.769230768,
            "unit": "ns",
            "range": "± 166022.92025960042"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50861830,
            "unit": "ns",
            "range": "± 225030.7643631358"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 101568963.4,
            "unit": "ns",
            "range": "± 620732.7511592131"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202966908.33333334,
            "unit": "ns",
            "range": "± 978347.2681417273"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 282347.962962963,
            "unit": "ns",
            "range": "± 7036.355790199058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 269964.8813559322,
            "unit": "ns",
            "range": "± 11968.35417067219"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242023.31578947368,
            "unit": "ns",
            "range": "± 4432.364456192047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4223597,
            "unit": "ns",
            "range": "± 21771.41996358458"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3954991.5714285714,
            "unit": "ns",
            "range": "± 19946.678727641258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18701.515789473684,
            "unit": "ns",
            "range": "± 1490.9549264927987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86296.43023255814,
            "unit": "ns",
            "range": "± 4675.5244073056165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72320.5,
            "unit": "ns",
            "range": "± 1816.603017100635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89660.35051546391,
            "unit": "ns",
            "range": "± 11376.801638496316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4595.132653061224,
            "unit": "ns",
            "range": "± 578.9619334343879"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16800.936170212764,
            "unit": "ns",
            "range": "± 1357.0619973675311"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46449.27160493827,
            "unit": "ns",
            "range": "± 2460.260214958703"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6093961.6671875,
            "unit": "ns",
            "range": "± 30178.22596934415"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1984521.8138950893,
            "unit": "ns",
            "range": "± 1164.6643945074559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1362997.0498798077,
            "unit": "ns",
            "range": "± 960.746829108686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2585287.7810997595,
            "unit": "ns",
            "range": "± 3521.1112552963477"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 810984.5848214285,
            "unit": "ns",
            "range": "± 1163.7974957422134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 744311.4645182291,
            "unit": "ns",
            "range": "± 512.7859858600967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1423008.793814433,
            "unit": "ns",
            "range": "± 122648.21628271665"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2633462.4615384615,
            "unit": "ns",
            "range": "± 70830.31179614038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2255590.435897436,
            "unit": "ns",
            "range": "± 111247.76851257872"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5363279.1034482755,
            "unit": "ns",
            "range": "± 153689.41732885115"
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
          "id": "798142789a68876aa5f1d580beb7a05695098f08",
          "message": "test: fill up lacking unit test",
          "timestamp": "2023-06-28T21:05:39+09:00",
          "tree_id": "3e67241fbda948a4df7952d28f35216321beb33f",
          "url": "https://github.com/limebell/libplanet/commit/798142789a68876aa5f1d580beb7a05695098f08"
        },
        "date": 1687955159065,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4405159.478723404,
            "unit": "ns",
            "range": "± 314126.3182496326"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4630991.602150538,
            "unit": "ns",
            "range": "± 271486.4890684626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6205829.29787234,
            "unit": "ns",
            "range": "± 417240.354564274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5969962.130434782,
            "unit": "ns",
            "range": "± 411359.716979047"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10179416.385714285,
            "unit": "ns",
            "range": "± 489252.4518852395"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10924192.882978724,
            "unit": "ns",
            "range": "± 912037.4694099211"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29222210.014492754,
            "unit": "ns",
            "range": "± 1378869.6101262192"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 75258363.44827586,
            "unit": "ns",
            "range": "± 2190271.8149256133"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 153383725.1388889,
            "unit": "ns",
            "range": "± 5104856.10620159"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 313836566.4722222,
            "unit": "ns",
            "range": "± 9468799.027461573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 380041.7471264368,
            "unit": "ns",
            "range": "± 27098.84307631686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 374082.5698924731,
            "unit": "ns",
            "range": "± 40142.53010548188"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 325441.23913043475,
            "unit": "ns",
            "range": "± 33838.558165049544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5890262.793103448,
            "unit": "ns",
            "range": "± 368011.8675690107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5303355.655913979,
            "unit": "ns",
            "range": "± 346067.5706802224"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23208.204545454544,
            "unit": "ns",
            "range": "± 4907.177827788832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116321.35106382979,
            "unit": "ns",
            "range": "± 18189.816033347943"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 128823.94845360825,
            "unit": "ns",
            "range": "± 22837.996606245888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 141142.42105263157,
            "unit": "ns",
            "range": "± 27205.998447846625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7451.7032967032965,
            "unit": "ns",
            "range": "± 1782.5579030302713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21538.206896551725,
            "unit": "ns",
            "range": "± 3966.1512951765917"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66262.21978021978,
            "unit": "ns",
            "range": "± 12178.673424202743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8084176.483333333,
            "unit": "ns",
            "range": "± 138185.11114081801"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2612925.109114583,
            "unit": "ns",
            "range": "± 48805.507541591236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1792635.3851841518,
            "unit": "ns",
            "range": "± 19662.83349608903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3496905.8427083334,
            "unit": "ns",
            "range": "± 57718.07084995768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1163877.1243489583,
            "unit": "ns",
            "range": "± 26610.45886691289"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1079733.580859375,
            "unit": "ns",
            "range": "± 19833.75551507636"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1904933.8041237113,
            "unit": "ns",
            "range": "± 162766.05206384655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3749352.2688172045,
            "unit": "ns",
            "range": "± 319067.7666587303"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3000754.7419354836,
            "unit": "ns",
            "range": "± 245593.2466881006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7813360.886597938,
            "unit": "ns",
            "range": "± 488088.3655589186"
          }
        ]
      }
    ]
  }
}