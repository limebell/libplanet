window.BENCHMARK_DATA = {
  "lastUpdate": 1687853751344,
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
      }
    ]
  }
}