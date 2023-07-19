window.BENCHMARK_DATA = {
  "lastUpdate": 1689733706041,
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
        "date": 1689676133675,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 14208491.659090908,
            "unit": "ns",
            "range": "± 6445914.491623265"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 32473721.659574468,
            "unit": "ns",
            "range": "± 9328503.382466845"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54241439.43939394,
            "unit": "ns",
            "range": "± 1586367.308149758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105530446.23333333,
            "unit": "ns",
            "range": "± 1847053.807332619"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218991526.1111111,
            "unit": "ns",
            "range": "± 3505814.812212971"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 71678.24175824175,
            "unit": "ns",
            "range": "± 6830.2440388168"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 365503.12765957444,
            "unit": "ns",
            "range": "± 45747.80492624262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 358365.41237113404,
            "unit": "ns",
            "range": "± 53077.26561692723"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 322626.44444444444,
            "unit": "ns",
            "range": "± 22002.571427408828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4383940.854430379,
            "unit": "ns",
            "range": "± 225696.29818795115"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3933918.5,
            "unit": "ns",
            "range": "± 59358.41969017862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18148.263736263736,
            "unit": "ns",
            "range": "± 2121.012346525775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 83785.42708333333,
            "unit": "ns",
            "range": "± 7166.337601291181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85452.73404255319,
            "unit": "ns",
            "range": "± 13116.088789862617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 107132.98969072165,
            "unit": "ns",
            "range": "± 15910.162210763574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6486.093406593406,
            "unit": "ns",
            "range": "± 900.289286569378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19506.96153846154,
            "unit": "ns",
            "range": "± 3094.2543539336916"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1524138.3263157895,
            "unit": "ns",
            "range": "± 114340.43269361278"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2894737.0833333335,
            "unit": "ns",
            "range": "± 128574.96515372295"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2070662.25,
            "unit": "ns",
            "range": "± 188397.63484938472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5983507.891891892,
            "unit": "ns",
            "range": "± 297540.9144818122"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3628881.118556701,
            "unit": "ns",
            "range": "± 469954.55448772834"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3690546.293814433,
            "unit": "ns",
            "range": "± 280526.18037077284"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4528931.869565218,
            "unit": "ns",
            "range": "± 277443.111256103"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4044370.397959184,
            "unit": "ns",
            "range": "± 249657.9789844763"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7514262.382978723,
            "unit": "ns",
            "range": "± 517580.86542451347"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7548542.238588483,
            "unit": "ns",
            "range": "± 413735.8614091852"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2250085.0186197916,
            "unit": "ns",
            "range": "± 66581.953827816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1338426.3983226102,
            "unit": "ns",
            "range": "± 25638.79883691341"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2924352.5260699727,
            "unit": "ns",
            "range": "± 110762.92902568217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852513.9507324218,
            "unit": "ns",
            "range": "± 19535.271358765796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761556.6520647322,
            "unit": "ns",
            "range": "± 8768.521073775788"
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
        "date": 1689676465176,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9393480.964646464,
            "unit": "ns",
            "range": "± 697471.4612330878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21549818.257575758,
            "unit": "ns",
            "range": "± 1304898.006352628"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 57490247.487804875,
            "unit": "ns",
            "range": "± 2060450.4607383327"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 116872300.81481482,
            "unit": "ns",
            "range": "± 4928813.790308933"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 231046472.04347825,
            "unit": "ns",
            "range": "± 5736488.859032726"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75341.93684210526,
            "unit": "ns",
            "range": "± 15452.583885572325"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 377491.68947368424,
            "unit": "ns",
            "range": "± 52790.55276908782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 340382.60752688174,
            "unit": "ns",
            "range": "± 33289.21268593149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313696,
            "unit": "ns",
            "range": "± 12040.814028867724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4779008.130434782,
            "unit": "ns",
            "range": "± 119970.80154024763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3501367.5714285714,
            "unit": "ns",
            "range": "± 44684.581647303195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19531.5,
            "unit": "ns",
            "range": "± 4286.693862780019"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89580.81521739131,
            "unit": "ns",
            "range": "± 9330.286874650872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103452.02,
            "unit": "ns",
            "range": "± 15829.668082611728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130358.65053763441,
            "unit": "ns",
            "range": "± 23229.467157295596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7751.567415730337,
            "unit": "ns",
            "range": "± 1620.5741042055604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22127.394736842107,
            "unit": "ns",
            "range": "± 5223.982876616727"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1589671.3673469387,
            "unit": "ns",
            "range": "± 135555.28977402297"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3037368.777777778,
            "unit": "ns",
            "range": "± 126641.88798826677"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2215110.4895833335,
            "unit": "ns",
            "range": "± 214585.08438990102"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6032093.528301887,
            "unit": "ns",
            "range": "± 231676.8194124343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3664364.1767676766,
            "unit": "ns",
            "range": "± 355730.76179051155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4716576.457831325,
            "unit": "ns",
            "range": "± 1084494.1902709175"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4739130.911111111,
            "unit": "ns",
            "range": "± 336909.8449132657"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4204568.115789474,
            "unit": "ns",
            "range": "± 297140.08945262164"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7808039.104166667,
            "unit": "ns",
            "range": "± 679100.2536956563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7153354.038541666,
            "unit": "ns",
            "range": "± 104232.96526890731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2060990.8021282328,
            "unit": "ns",
            "range": "± 111834.91626831"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1433480.4851074219,
            "unit": "ns",
            "range": "± 42852.20330219573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2754896.7642525337,
            "unit": "ns",
            "range": "± 137038.2858621821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838212.532421875,
            "unit": "ns",
            "range": "± 13724.35977792484"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 835504.8844238281,
            "unit": "ns",
            "range": "± 18249.899122258685"
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
        "date": 1689733694747,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8306931.5,
            "unit": "ns",
            "range": "± 55141.00949209846"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20325653.433333334,
            "unit": "ns",
            "range": "± 333914.66309318924"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50727316.35714286,
            "unit": "ns",
            "range": "± 371746.7325680435"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102960967.9,
            "unit": "ns",
            "range": "± 788119.6916764973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210438495.1,
            "unit": "ns",
            "range": "± 1006219.6079271731"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63109.22448979592,
            "unit": "ns",
            "range": "± 8479.40073686232"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330460.39024390245,
            "unit": "ns",
            "range": "± 16862.17630957559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317873.2380952381,
            "unit": "ns",
            "range": "± 12597.897760768796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 320064.92307692306,
            "unit": "ns",
            "range": "± 4529.466698952878"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4204701.4,
            "unit": "ns",
            "range": "± 74059.57590615815"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3793251.5,
            "unit": "ns",
            "range": "± 39771.63269506005"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20405.120879120877,
            "unit": "ns",
            "range": "± 2096.427892260573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102151.17346938775,
            "unit": "ns",
            "range": "± 11351.296228289599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112930.17272727273,
            "unit": "ns",
            "range": "± 4746.063804001145"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 120391.30927835051,
            "unit": "ns",
            "range": "± 12232.973536682888"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7489.561224489796,
            "unit": "ns",
            "range": "± 774.1739737124612"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21209.583333333332,
            "unit": "ns",
            "range": "± 2689.5932491018107"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1610093.29,
            "unit": "ns",
            "range": "± 161933.0949234927"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3012828.6086956523,
            "unit": "ns",
            "range": "± 109807.9916090361"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2186567.5555555555,
            "unit": "ns",
            "range": "± 233258.26460775378"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5868289.977777778,
            "unit": "ns",
            "range": "± 168675.64115316505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3307441.4,
            "unit": "ns",
            "range": "± 111855.75421068432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3562098.6774193547,
            "unit": "ns",
            "range": "± 69105.6840244887"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4473218.166666667,
            "unit": "ns",
            "range": "± 141886.40533680457"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3974298.8260869565,
            "unit": "ns",
            "range": "± 148472.23903553362"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7312949.401408451,
            "unit": "ns",
            "range": "± 357220.43564516114"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6699913.970982143,
            "unit": "ns",
            "range": "± 24180.06897172278"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1990697.1708333334,
            "unit": "ns",
            "range": "± 7053.518821829951"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1284666.5824497768,
            "unit": "ns",
            "range": "± 1961.3102095231393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2648560.775260417,
            "unit": "ns",
            "range": "± 37227.858189330014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 782655.4049479166,
            "unit": "ns",
            "range": "± 2006.5331151359574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 801341.6861979166,
            "unit": "ns",
            "range": "± 2324.685688339519"
          }
        ]
      }
    ]
  }
}