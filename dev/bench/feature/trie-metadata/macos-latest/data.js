window.BENCHMARK_DATA = {
  "lastUpdate": 1701858959281,
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
          "id": "46b3ec7f3f72770d81fe9efbb02bc0841c1612a9",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-12-06T19:12:30+09:00",
          "tree_id": "5f4f39ed176058ea2d93ea8ac11c6c8f1ce56dbf",
          "url": "https://github.com/limebell/libplanet/commit/46b3ec7f3f72770d81fe9efbb02bc0841c1612a9"
        },
        "date": 1701858947057,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10091779.436842104,
            "unit": "ns",
            "range": "± 1643868.9254650548"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25620220.729166668,
            "unit": "ns",
            "range": "± 4301357.347175073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58370215.520833336,
            "unit": "ns",
            "range": "± 7464960.340722317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 115355443,
            "unit": "ns",
            "range": "± 15182611.658639446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 260492178.83695653,
            "unit": "ns",
            "range": "± 32958358.713131443"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49836.5,
            "unit": "ns",
            "range": "± 8885.052443263361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259736.26136363635,
            "unit": "ns",
            "range": "± 38349.01770475235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 329044.9898989899,
            "unit": "ns",
            "range": "± 81827.55697726313"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233329.25,
            "unit": "ns",
            "range": "± 21924.848706254936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5341411.788659794,
            "unit": "ns",
            "range": "± 1128551.9838426618"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4173653.0531914895,
            "unit": "ns",
            "range": "± 701246.4197855992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21672.047368421052,
            "unit": "ns",
            "range": "± 4866.11684009496"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103924.71212121213,
            "unit": "ns",
            "range": "± 21967.730183469776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92791.07216494845,
            "unit": "ns",
            "range": "± 19519.257992240753"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 105288,
            "unit": "ns",
            "range": "± 20212.077372926484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8955.731958762886,
            "unit": "ns",
            "range": "± 1849.1203512045481"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23097.24193548387,
            "unit": "ns",
            "range": "± 5212.906805944397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1302413.6195652173,
            "unit": "ns",
            "range": "± 171636.99190864153"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2614015.4545454546,
            "unit": "ns",
            "range": "± 160523.37791091038"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2324606.3913043477,
            "unit": "ns",
            "range": "± 295476.53689760045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 15850050.668539327,
            "unit": "ns",
            "range": "± 3913892.63705649"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3471060.2795698927,
            "unit": "ns",
            "range": "± 506303.16459380696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3399929.174698795,
            "unit": "ns",
            "range": "± 213013.02774421743"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5078406.145833333,
            "unit": "ns",
            "range": "± 1109528.5903306766"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5595239.9,
            "unit": "ns",
            "range": "± 1208607.3406869632"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 21528080.214285713,
            "unit": "ns",
            "range": "± 5720427.89016011"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6062668.652822066,
            "unit": "ns",
            "range": "± 915401.8615820298"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1843023.9690472146,
            "unit": "ns",
            "range": "± 279424.2341935277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 965603.9646070076,
            "unit": "ns",
            "range": "± 45237.9012576184"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2318885.96875,
            "unit": "ns",
            "range": "± 228616.98479910515"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 664416.2438964844,
            "unit": "ns",
            "range": "± 17153.056162762274"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 602287.3238216861,
            "unit": "ns",
            "range": "± 37360.398252799925"
          }
        ]
      }
    ]
  }
}