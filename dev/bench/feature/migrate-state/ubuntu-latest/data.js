window.BENCHMARK_DATA = {
  "lastUpdate": 1701062093524,
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
          "id": "73186ba1c6ea1e114550f77a6e70c3358b9d680f",
          "message": "feat: migrate stae if protocol version has increased to 5",
          "timestamp": "2023-11-27T14:02:54+09:00",
          "tree_id": "45c2fc8bcc9e842b02120ae99cc8efc6a22735c6",
          "url": "https://github.com/limebell/libplanet/commit/73186ba1c6ea1e114550f77a6e70c3358b9d680f"
        },
        "date": 1701062090872,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 203836.31746031746,
            "unit": "ns",
            "range": "± 9372.982139528274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195749.1463414634,
            "unit": "ns",
            "range": "± 10349.016775773116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165065.0909090909,
            "unit": "ns",
            "range": "± 4019.6909133615036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3229547.5263157897,
            "unit": "ns",
            "range": "± 68798.52087506308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2828071.3333333335,
            "unit": "ns",
            "range": "± 28789.05429730774"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12561.191011235955,
            "unit": "ns",
            "range": "± 910.3065402330203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65301.15306122449,
            "unit": "ns",
            "range": "± 9552.799143244669"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56016.88421052632,
            "unit": "ns",
            "range": "± 6848.981731837654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 59567.97311827957,
            "unit": "ns",
            "range": "± 11668.857416395182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3648.276595744681,
            "unit": "ns",
            "range": "± 513.9132474435387"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13545.795918367347,
            "unit": "ns",
            "range": "± 2187.368121310974"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3822504.676983173,
            "unit": "ns",
            "range": "± 7049.730624744503"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1218723.7307692308,
            "unit": "ns",
            "range": "± 3182.7893247702013"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771621.9088309152,
            "unit": "ns",
            "range": "± 1282.3406789070173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1928697.3625,
            "unit": "ns",
            "range": "± 21951.033725430105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 611520.1884014423,
            "unit": "ns",
            "range": "± 3284.9904285370208"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 568471.0040564904,
            "unit": "ns",
            "range": "± 1045.5624358097448"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40600.28571428572,
            "unit": "ns",
            "range": "± 7058.2946733525005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2433928.871794872,
            "unit": "ns",
            "range": "± 84780.10469542569"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2654636.611111111,
            "unit": "ns",
            "range": "± 88094.10646552203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3100135.6333333333,
            "unit": "ns",
            "range": "± 46265.61739234912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3281995.8163265307,
            "unit": "ns",
            "range": "± 130922.94672036958"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10330685.910526317,
            "unit": "ns",
            "range": "± 1707865.6186638805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5536130,
            "unit": "ns",
            "range": "± 83565.60853880942"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14124917.846153846,
            "unit": "ns",
            "range": "± 132433.92890094678"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 35854977.307692304,
            "unit": "ns",
            "range": "± 253566.82599214505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 73491531.07142857,
            "unit": "ns",
            "range": "± 321026.73280524457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 149744037.2142857,
            "unit": "ns",
            "range": "± 1306042.517341558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1084243.6082474226,
            "unit": "ns",
            "range": "± 117818.77732025895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1967015.1641791044,
            "unit": "ns",
            "range": "± 92928.0940114121"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1766469.6489361702,
            "unit": "ns",
            "range": "± 158261.31186034426"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8863696.58888889,
            "unit": "ns",
            "range": "± 1297970.9741392776"
          }
        ]
      }
    ]
  }
}