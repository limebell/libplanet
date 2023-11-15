window.BENCHMARK_DATA = {
  "lastUpdate": 1700044675283,
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
          "id": "33e84fa3d8b3aa6544f34227330b0a4868114be1",
          "message": "test: fix tests  [skip changelog]",
          "timestamp": "2023-11-15T19:19:08+09:00",
          "tree_id": "56764ebd85f0dd721d7386e4de37a4a5041d7a86",
          "url": "https://github.com/limebell/libplanet/commit/33e84fa3d8b3aa6544f34227330b0a4868114be1"
        },
        "date": 1700044634133,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8697493.011235954,
            "unit": "ns",
            "range": "± 478966.22964232456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19685263.6,
            "unit": "ns",
            "range": "± 299136.82486371155"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49919359.807692304,
            "unit": "ns",
            "range": "± 1357658.3689234057"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98022164.5,
            "unit": "ns",
            "range": "± 637993.5238041214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218224711.75,
            "unit": "ns",
            "range": "± 4927866.468981041"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74565.84615384616,
            "unit": "ns",
            "range": "± 9574.929496605042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330883.5967741936,
            "unit": "ns",
            "range": "± 36061.199597551466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 323263.5054945055,
            "unit": "ns",
            "range": "± 44794.7182294157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 309613.6777777778,
            "unit": "ns",
            "range": "± 27135.951856617623"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3962017.4736842103,
            "unit": "ns",
            "range": "± 85134.34932007203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3702855.7333333334,
            "unit": "ns",
            "range": "± 49131.65112149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18689.757894736842,
            "unit": "ns",
            "range": "± 2304.9695789555262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 111562.08510638298,
            "unit": "ns",
            "range": "± 18141.15038536716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129640.5052631579,
            "unit": "ns",
            "range": "± 25302.30318121076"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126309.1530612245,
            "unit": "ns",
            "range": "± 27389.576190663593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7668.755319148936,
            "unit": "ns",
            "range": "± 888.6135108952574"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21393.694117647057,
            "unit": "ns",
            "range": "± 2916.2723516728774"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1521434.53,
            "unit": "ns",
            "range": "± 159833.7634577241"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2886237.1818181816,
            "unit": "ns",
            "range": "± 158230.30388387982"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2498252.6288659796,
            "unit": "ns",
            "range": "± 173229.48829240454"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13026135.721649485,
            "unit": "ns",
            "range": "± 3063800.883035889"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3370020.098901099,
            "unit": "ns",
            "range": "± 233003.34887741445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3673033.102040816,
            "unit": "ns",
            "range": "± 322463.52139347355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4509179.304123712,
            "unit": "ns",
            "range": "± 303558.60863406037"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4543847.510309278,
            "unit": "ns",
            "range": "± 467555.1385293258"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 16129960.9375,
            "unit": "ns",
            "range": "± 1936290.5732404918"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6884944.818170363,
            "unit": "ns",
            "range": "± 210072.2191801993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1996620.7014160156,
            "unit": "ns",
            "range": "± 78233.39218955325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1115004.2378305288,
            "unit": "ns",
            "range": "± 12048.628238254387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2834648.771943934,
            "unit": "ns",
            "range": "± 55194.71826510943"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 816751.8082682291,
            "unit": "ns",
            "range": "± 18606.050599038434"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 743018.878125,
            "unit": "ns",
            "range": "± 7612.532232600321"
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
          "id": "671a44e9ebede8660410276cbb524d9fc311e86f",
          "message": "test: fix tests",
          "timestamp": "2023-11-15T19:08:50+09:00",
          "tree_id": "56764ebd85f0dd721d7386e4de37a4a5041d7a86",
          "url": "https://github.com/limebell/libplanet/commit/671a44e9ebede8660410276cbb524d9fc311e86f"
        },
        "date": 1700044667664,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9594192.127659574,
            "unit": "ns",
            "range": "± 1056759.543008489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20731926.258064516,
            "unit": "ns",
            "range": "± 629954.805572959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53156625.24137931,
            "unit": "ns",
            "range": "± 2328336.2089992636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 111941603.3,
            "unit": "ns",
            "range": "± 3977822.648357491"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 218708353.96,
            "unit": "ns",
            "range": "± 8751118.607690766"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72174.82978723405,
            "unit": "ns",
            "range": "± 9067.690078987347"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 349988.9555555555,
            "unit": "ns",
            "range": "± 46353.61599221987"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 319928.3333333333,
            "unit": "ns",
            "range": "± 33266.21958675502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 292784.7528735632,
            "unit": "ns",
            "range": "± 15962.008758603348"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4119840.6071428573,
            "unit": "ns",
            "range": "± 175714.68604992775"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3557059.8666666667,
            "unit": "ns",
            "range": "± 66011.45216861635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20464.23711340206,
            "unit": "ns",
            "range": "± 3037.2927733605543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115643.15957446808,
            "unit": "ns",
            "range": "± 18947.33095642"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118167.6875,
            "unit": "ns",
            "range": "± 15524.62265551252"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 117770.7258064516,
            "unit": "ns",
            "range": "± 18135.562742931495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7668.678947368421,
            "unit": "ns",
            "range": "± 1287.3097213572994"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23628.164835164836,
            "unit": "ns",
            "range": "± 3417.608001264225"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1538796.3636363635,
            "unit": "ns",
            "range": "± 156128.69996932437"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2828790.703125,
            "unit": "ns",
            "range": "± 119965.81370959689"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2463995.634408602,
            "unit": "ns",
            "range": "± 172167.76573906705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 13466322.863636363,
            "unit": "ns",
            "range": "± 3261766.852817611"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3207503.2634408604,
            "unit": "ns",
            "range": "± 201757.95313640364"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3335617.8205128205,
            "unit": "ns",
            "range": "± 172063.47474098444"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4301100.047619048,
            "unit": "ns",
            "range": "± 155602.87923349548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4458719.308510638,
            "unit": "ns",
            "range": "± 367106.0775888526"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 15859314.397727273,
            "unit": "ns",
            "range": "± 1796640.1421350164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5816504.8036917895,
            "unit": "ns",
            "range": "± 234848.14091468792"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1966498.3365017362,
            "unit": "ns",
            "range": "± 74054.44904166684"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1115389.162890625,
            "unit": "ns",
            "range": "± 13992.666723179258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2977596.9946484375,
            "unit": "ns",
            "range": "± 185606.13020024562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 789503.1516927084,
            "unit": "ns",
            "range": "± 13972.27330454299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 755099.85078125,
            "unit": "ns",
            "range": "± 13215.724657736868"
          }
        ]
      }
    ]
  }
}