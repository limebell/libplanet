window.BENCHMARK_DATA = {
  "lastUpdate": 1686306839868,
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
          "id": "0f10562e3debb2347a96f2625766b1ec6e569af4",
          "message": "temp: test case",
          "timestamp": "2023-06-09T14:38:41+09:00",
          "tree_id": "2a18c850e206cc6f3a7c5d341f39bb98d00e58aa",
          "url": "https://github.com/limebell/libplanet/commit/0f10562e3debb2347a96f2625766b1ec6e569af4"
        },
        "date": 1686289902490,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 961673.9583333334,
            "unit": "ns",
            "range": "± 69064.3045052815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1771608.9743589743,
            "unit": "ns",
            "range": "± 88662.86970242654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1551540.8163265307,
            "unit": "ns",
            "range": "± 144749.87302078342"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3839149.3827160494,
            "unit": "ns",
            "range": "± 196274.6335644629"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40367.36842105263,
            "unit": "ns",
            "range": "± 8135.48102522267"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6534933.333333333,
            "unit": "ns",
            "range": "± 95319.69266381321"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 16173930.76923077,
            "unit": "ns",
            "range": "± 65953.17006047277"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 40935413.333333336,
            "unit": "ns",
            "range": "± 281444.7620675114"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 80726946.66666667,
            "unit": "ns",
            "range": "± 358355.41787980474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 154401504,
            "unit": "ns",
            "range": "± 3993408.379596724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3940958.035714286,
            "unit": "ns",
            "range": "± 32871.645693979175"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1097554.0559895833,
            "unit": "ns",
            "range": "± 3876.5139614884097"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 856128.7109375,
            "unit": "ns",
            "range": "± 10231.587871802063"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964959.9739583333,
            "unit": "ns",
            "range": "± 7828.191199444896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 595572.2721354166,
            "unit": "ns",
            "range": "± 1631.4877472917842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 534550.7184709822,
            "unit": "ns",
            "range": "± 595.7312261941884"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2517173.417721519,
            "unit": "ns",
            "range": "± 127758.34330611551"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2511494.5945945946,
            "unit": "ns",
            "range": "± 69261.63739339703"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3110728.846153846,
            "unit": "ns",
            "range": "± 127169.93314727247"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3059782.926829268,
            "unit": "ns",
            "range": "± 90858.15291551723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4829097.959183673,
            "unit": "ns",
            "range": "± 190219.62250886468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246354.25531914894,
            "unit": "ns",
            "range": "± 17103.257973569107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 224867.64705882352,
            "unit": "ns",
            "range": "± 7070.455841814705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213844.23076923078,
            "unit": "ns",
            "range": "± 8665.763455081546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3305950,
            "unit": "ns",
            "range": "± 87717.8488108321"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2916200,
            "unit": "ns",
            "range": "± 41108.67398643596"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26968.13186813187,
            "unit": "ns",
            "range": "± 2140.0871799936417"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106729.72972972973,
            "unit": "ns",
            "range": "± 5229.231058214958"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 101114.44444444444,
            "unit": "ns",
            "range": "± 6412.3049040319465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110584.21052631579,
            "unit": "ns",
            "range": "± 13021.645774579012"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9090.20618556701,
            "unit": "ns",
            "range": "± 1090.647723623294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25035.5421686747,
            "unit": "ns",
            "range": "± 1371.587341956301"
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
          "id": "96f58e605e9378f62007d42d125c3d30038961be",
          "message": "test: add test case",
          "timestamp": "2023-06-09T19:12:47+09:00",
          "tree_id": "32fccaa2d4f28bbb6a422ec9287d59db1c3720d6",
          "url": "https://github.com/limebell/libplanet/commit/96f58e605e9378f62007d42d125c3d30038961be"
        },
        "date": 1686306816888,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1626105.2083333333,
            "unit": "ns",
            "range": "± 135030.11077049805"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3050684.285714286,
            "unit": "ns",
            "range": "± 147484.08180940597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2582410.8695652173,
            "unit": "ns",
            "range": "± 172792.26424771143"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6392783.333333333,
            "unit": "ns",
            "range": "± 339871.7993006177"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 57600,
            "unit": "ns",
            "range": "± 4577.897209106257"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8906367.391304348,
            "unit": "ns",
            "range": "± 327977.97151932685"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24187686.111111112,
            "unit": "ns",
            "range": "± 807779.6206366394"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61148776.92307692,
            "unit": "ns",
            "range": "± 1668902.35239997"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 125463558.33333333,
            "unit": "ns",
            "range": "± 2907633.836901193"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248505644.44444445,
            "unit": "ns",
            "range": "± 8189313.389549454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6055255.588942308,
            "unit": "ns",
            "range": "± 161748.86968362497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1864827.3567708333,
            "unit": "ns",
            "range": "± 31987.166925168192"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1407212.5057444852,
            "unit": "ns",
            "range": "± 27608.934428537123"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3239610.2251838236,
            "unit": "ns",
            "range": "± 64893.40111966296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1036689.4986979166,
            "unit": "ns",
            "range": "± 12284.53370689842"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 941521.3671875,
            "unit": "ns",
            "range": "± 14855.916527761283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3753361.7647058824,
            "unit": "ns",
            "range": "± 115137.54097706791"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3925961.904761905,
            "unit": "ns",
            "range": "± 210863.86626810432"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4990114.285714285,
            "unit": "ns",
            "range": "± 63220.71054455369"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4795753.333333333,
            "unit": "ns",
            "range": "± 165217.2077214499"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7930152.857142857,
            "unit": "ns",
            "range": "± 385074.8171126322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 305475.40983606555,
            "unit": "ns",
            "range": "± 13704.873290642578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 302247.88732394367,
            "unit": "ns",
            "range": "± 14641.202713623235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275468.6046511628,
            "unit": "ns",
            "range": "± 14905.707644490984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4833490.625,
            "unit": "ns",
            "range": "± 148777.56369043447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4231981.081081081,
            "unit": "ns",
            "range": "± 143061.01036861053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22964.772727272728,
            "unit": "ns",
            "range": "± 1879.474111622489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 102834.78260869565,
            "unit": "ns",
            "range": "± 6324.2501146508475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 91571.73913043478,
            "unit": "ns",
            "range": "± 6716.804022959698"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 110102.63157894737,
            "unit": "ns",
            "range": "± 18026.42765677519"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6547.872340425532,
            "unit": "ns",
            "range": "± 1106.3578455692027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22260.752688172044,
            "unit": "ns",
            "range": "± 2026.2657002900787"
          }
        ]
      }
    ]
  }
}