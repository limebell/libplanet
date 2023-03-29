window.BENCHMARK_DATA = {
  "lastUpdate": 1680071277934,
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
          "id": "d0b037ac11087c14d2f6d1f2c35fdaf253955f70",
          "message": "docs: update changelog",
          "timestamp": "2023-03-29T15:09:25+09:00",
          "tree_id": "66c09e34a079fe78451c2a4a5697733cec8a69b0",
          "url": "https://github.com/limebell/libplanet/commit/d0b037ac11087c14d2f6d1f2c35fdaf253955f70"
        },
        "date": 1680071263599,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1326479,
            "unit": "ns",
            "range": "± 107425.27898333085"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2457400,
            "unit": "ns",
            "range": "± 75013.99869357719"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2061917.5257731958,
            "unit": "ns",
            "range": "± 135367.7783625573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4965236,
            "unit": "ns",
            "range": "± 128838.12802634682"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48439.75903614458,
            "unit": "ns",
            "range": "± 2587.6319223603987"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 4)",
            "value": 7362364.516129033,
            "unit": "ns",
            "range": "± 224571.18180862998"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 10)",
            "value": 19307553.333333332,
            "unit": "ns",
            "range": "± 268856.179999288"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 25)",
            "value": 48247250,
            "unit": "ns",
            "range": "± 806731.3657832213"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 50)",
            "value": 99440067.85714285,
            "unit": "ns",
            "range": "± 2791098.3933787006"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.UnmarshalBlockCommit(ValidatorSize: 100)",
            "value": 199595813.33333334,
            "unit": "ns",
            "range": "± 3598043.266806213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4810504.53125,
            "unit": "ns",
            "range": "± 39407.14540061408"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1550748.5026041667,
            "unit": "ns",
            "range": "± 11873.419352871302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1163494.1471354167,
            "unit": "ns",
            "range": "± 4979.187031365472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2678735.4036458335,
            "unit": "ns",
            "range": "± 15377.102077121095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 946187.4849759615,
            "unit": "ns",
            "range": "± 1818.3742540760336"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 783384.5628004808,
            "unit": "ns",
            "range": "± 1722.0992455014793"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3217678.5714285714,
            "unit": "ns",
            "range": "± 46063.50430190292"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 5240100,
            "unit": "ns",
            "range": "± 67399.7831541821"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 23502300,
            "unit": "ns",
            "range": "± 745498.4439956933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 6197084.615384615,
            "unit": "ns",
            "range": "± 167705.27169366548"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 26703450,
            "unit": "ns",
            "range": "± 703927.4489131201"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 180284.2857142857,
            "unit": "ns",
            "range": "± 7845.549568585128"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 181175.60975609755,
            "unit": "ns",
            "range": "± 5813.251262753266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 178306.0606060606,
            "unit": "ns",
            "range": "± 12014.190743482442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 10557506.25,
            "unit": "ns",
            "range": "± 205490.04994159692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9023461.111111112,
            "unit": "ns",
            "range": "± 162147.58396882794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22634.0206185567,
            "unit": "ns",
            "range": "± 2416.0438823078343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 54424.21052631579,
            "unit": "ns",
            "range": "± 5289.968744417049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 42369.66292134832,
            "unit": "ns",
            "range": "± 2347.939352553349"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 101013.26530612246,
            "unit": "ns",
            "range": "± 18810.063317579803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6859.79381443299,
            "unit": "ns",
            "range": "± 776.8338241722016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21259.375,
            "unit": "ns",
            "range": "± 1838.625237278629"
          }
        ]
      }
    ]
  }
}