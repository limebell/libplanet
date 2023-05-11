window.BENCHMARK_DATA = {
  "lastUpdate": 1683795855764,
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
          "id": "6555351be63be4f12921346a3ea8a5489de2f1b7",
          "message": "feat: optimize message request",
          "timestamp": "2023-05-11T17:48:50+09:00",
          "tree_id": "f8d431c128bcc9d62f63ca253d6198e560e5f01f",
          "url": "https://github.com/limebell/libplanet/commit/6555351be63be4f12921346a3ea8a5489de2f1b7"
        },
        "date": 1683795847333,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8324093.842105263,
            "unit": "ns",
            "range": "± 176312.6359791553"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21123151.4,
            "unit": "ns",
            "range": "± 343143.95638561295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54079990,
            "unit": "ns",
            "range": "± 841373.665652028"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105344012.06666666,
            "unit": "ns",
            "range": "± 1081094.3487903136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219875121.7142857,
            "unit": "ns",
            "range": "± 2031211.2554575817"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 76300.86666666667,
            "unit": "ns",
            "range": "± 5161.724183237635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 325259.4210526316,
            "unit": "ns",
            "range": "± 22895.838253987204"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 320106.7582417582,
            "unit": "ns",
            "range": "± 17761.00501056593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 317227.6111111111,
            "unit": "ns",
            "range": "± 10406.539726201781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4509882.357142857,
            "unit": "ns",
            "range": "± 125524.38151188716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3863541.772727273,
            "unit": "ns",
            "range": "± 94271.54244088712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23828.44680851064,
            "unit": "ns",
            "range": "± 3967.7023750434187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 113558.05434782608,
            "unit": "ns",
            "range": "± 11900.169626978433"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118029.68817204301,
            "unit": "ns",
            "range": "± 9492.371947789694"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123326.17741935483,
            "unit": "ns",
            "range": "± 10849.484395844818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8361.020833333334,
            "unit": "ns",
            "range": "± 892.2118462051329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23611.875,
            "unit": "ns",
            "range": "± 2993.3895037319535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1653468.7857142857,
            "unit": "ns",
            "range": "± 217249.89561213728"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3132748.9565217393,
            "unit": "ns",
            "range": "± 184804.30831459386"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2668446.3571428573,
            "unit": "ns",
            "range": "± 339725.1983260746"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6872566.587912088,
            "unit": "ns",
            "range": "± 378914.9439968655"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3461620.59375,
            "unit": "ns",
            "range": "± 256507.90305282903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3528739.1136363638,
            "unit": "ns",
            "range": "± 131244.27979937472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4609725.897058823,
            "unit": "ns",
            "range": "± 220739.57667399186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4466772.540816327,
            "unit": "ns",
            "range": "± 314564.108186943"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7638304.0625,
            "unit": "ns",
            "range": "± 284805.0347121325"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6358381.751674107,
            "unit": "ns",
            "range": "± 75856.88144918138"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1905502.574594351,
            "unit": "ns",
            "range": "± 6082.944890539095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1290977.2078536183,
            "unit": "ns",
            "range": "± 28509.15709534924"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2517194.52734375,
            "unit": "ns",
            "range": "± 44352.39436557061"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 798280.4291616586,
            "unit": "ns",
            "range": "± 5187.313738395594"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732601.4224330357,
            "unit": "ns",
            "range": "± 4804.242738373037"
          }
        ]
      }
    ]
  }
}