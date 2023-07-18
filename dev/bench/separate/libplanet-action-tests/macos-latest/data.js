window.BENCHMARK_DATA = {
  "lastUpdate": 1689676140503,
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
      }
    ]
  }
}