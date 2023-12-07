window.BENCHMARK_DATA = {
  "lastUpdate": 1701922845872,
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
          "id": "1288a2c7e1f7316ea786f3a4e8e8be6e1bdc67c6",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-12-07T13:06:06+09:00",
          "tree_id": "3bf99737f60078b5c9ca653135fc191dfdfa742a",
          "url": "https://github.com/limebell/libplanet/commit/1288a2c7e1f7316ea786f3a4e8e8be6e1bdc67c6"
        },
        "date": 1701922835962,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7935971.909090909,
            "unit": "ns",
            "range": "± 249882.80118704692"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19092514.364864863,
            "unit": "ns",
            "range": "± 631841.3155907089"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47530743.9,
            "unit": "ns",
            "range": "± 1411356.0909196602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95047006.33333333,
            "unit": "ns",
            "range": "± 1117245.9615053865"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 195369559.57142857,
            "unit": "ns",
            "range": "± 3348773.616030719"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41660.875,
            "unit": "ns",
            "range": "± 9877.439377586416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 230218.95604395604,
            "unit": "ns",
            "range": "± 17082.7906488841"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 232176.49438202247,
            "unit": "ns",
            "range": "± 16096.548298204973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 227539.57142857142,
            "unit": "ns",
            "range": "± 17116.29628574001"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4035772.75,
            "unit": "ns",
            "range": "± 54536.89640488604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3515269.8095238097,
            "unit": "ns",
            "range": "± 82675.71134596852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18068.75,
            "unit": "ns",
            "range": "± 3900.6220597869647"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78047.90721649484,
            "unit": "ns",
            "range": "± 14036.830380350053"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76095.39583333333,
            "unit": "ns",
            "range": "± 9453.634851464518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83382.56593406593,
            "unit": "ns",
            "range": "± 13338.331161482765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5713.79797979798,
            "unit": "ns",
            "range": "± 1287.6985876550996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14388.77894736842,
            "unit": "ns",
            "range": "± 2613.665853795537"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1219900.65625,
            "unit": "ns",
            "range": "± 93192.78164274404"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2469411.2236842103,
            "unit": "ns",
            "range": "± 119510.46004135357"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2198316.365591398,
            "unit": "ns",
            "range": "± 252063.58318711125"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 14110286.214285715,
            "unit": "ns",
            "range": "± 2274826.9598169974"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2937511.423076923,
            "unit": "ns",
            "range": "± 135302.0759511735"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3014526.0196078434,
            "unit": "ns",
            "range": "± 121507.54699910458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3656600.930232558,
            "unit": "ns",
            "range": "± 133940.09556379254"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3930540.2988505745,
            "unit": "ns",
            "range": "± 210930.05595358872"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 14997259.225,
            "unit": "ns",
            "range": "± 1110602.9514038584"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4583164.427734375,
            "unit": "ns",
            "range": "± 196744.61570426554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1423175.2879638672,
            "unit": "ns",
            "range": "± 27514.73055274262"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 918990.4468544408,
            "unit": "ns",
            "range": "± 19349.790333655845"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2240098.752665441,
            "unit": "ns",
            "range": "± 138372.80508077086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 654933.7607421875,
            "unit": "ns",
            "range": "± 9156.3089359119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 590197.0414713542,
            "unit": "ns",
            "range": "± 8210.932281498206"
          }
        ]
      }
    ]
  }
}