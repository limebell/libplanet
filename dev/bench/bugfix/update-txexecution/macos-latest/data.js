window.BENCHMARK_DATA = {
  "lastUpdate": 1683010838727,
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
          "id": "3ee4cf68a341368048cd2302e3adb578cec0b87d",
          "message": "docs: update changelog",
          "timestamp": "2023-05-02T15:38:29+09:00",
          "tree_id": "7d14b14f5e84effd95ca064156bf1c765cc0f259",
          "url": "https://github.com/limebell/libplanet/commit/3ee4cf68a341368048cd2302e3adb578cec0b87d"
        },
        "date": 1683010823536,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8796359.695121951,
            "unit": "ns",
            "range": "± 455281.89674423623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24022519.050561797,
            "unit": "ns",
            "range": "± 3896831.0601801146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53790435.8,
            "unit": "ns",
            "range": "± 950826.9206793631"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108512882.16666667,
            "unit": "ns",
            "range": "± 1927690.0839991914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219757983.24509802,
            "unit": "ns",
            "range": "± 8922379.054083357"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83168.73333333334,
            "unit": "ns",
            "range": "± 9749.611273207343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 399177.3977272727,
            "unit": "ns",
            "range": "± 25599.301048531153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330167.2365591398,
            "unit": "ns",
            "range": "± 27182.004890703225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 329491.8539325843,
            "unit": "ns",
            "range": "± 30531.617738289893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5699280.346153846,
            "unit": "ns",
            "range": "± 266408.1669226184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3909592.7741935486,
            "unit": "ns",
            "range": "± 118057.43355353491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20151.967741935485,
            "unit": "ns",
            "range": "± 2892.1512019662914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97675.05208333333,
            "unit": "ns",
            "range": "± 14941.563061945724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103752.54545454546,
            "unit": "ns",
            "range": "± 15393.042919841952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 256162.89361702127,
            "unit": "ns",
            "range": "± 26609.951182697616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8165.649484536082,
            "unit": "ns",
            "range": "± 1335.308641298248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23813.805263157894,
            "unit": "ns",
            "range": "± 3856.321025619052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1952207.2252747254,
            "unit": "ns",
            "range": "± 334902.55971819843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3309054.0529411766,
            "unit": "ns",
            "range": "± 236014.38218588184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2990652.836956522,
            "unit": "ns",
            "range": "± 430595.5132447267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7378532.953488372,
            "unit": "ns",
            "range": "± 658429.4475867226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3603570.222222222,
            "unit": "ns",
            "range": "± 201160.13130915194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4053030.772727273,
            "unit": "ns",
            "range": "± 221741.6237574521"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4527252.760869565,
            "unit": "ns",
            "range": "± 216087.32498151355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4617846.389473684,
            "unit": "ns",
            "range": "± 465999.2885280227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8447107.357142856,
            "unit": "ns",
            "range": "± 314575.95217772876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6846158.4296875,
            "unit": "ns",
            "range": "± 131179.6399693358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2089567.4664417615,
            "unit": "ns",
            "range": "± 77999.903446731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1336700.9963541667,
            "unit": "ns",
            "range": "± 20734.495650396886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2670802.885110294,
            "unit": "ns",
            "range": "± 84710.68322467853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809855.2924804688,
            "unit": "ns",
            "range": "± 9518.56124231492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747783.6615084135,
            "unit": "ns",
            "range": "± 7231.554606272817"
          }
        ]
      }
    ]
  }
}