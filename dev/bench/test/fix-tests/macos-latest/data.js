window.BENCHMARK_DATA = {
  "lastUpdate": 1700044640142,
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
      }
    ]
  }
}