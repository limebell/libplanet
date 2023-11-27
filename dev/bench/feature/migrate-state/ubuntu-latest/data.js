window.BENCHMARK_DATA = {
  "lastUpdate": 1701074470473,
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
          "id": "98914965b2a82b0c5c77178b74d525436924d2c7",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-11-27T17:29:40+09:00",
          "tree_id": "b6944d1bd4caae010e0e33f5d500a9c14a66bba5",
          "url": "https://github.com/limebell/libplanet/commit/98914965b2a82b0c5c77178b74d525436924d2c7"
        },
        "date": 1701074467687,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 196591.00684931508,
            "unit": "ns",
            "range": "± 9321.866888193717"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191161.3661971831,
            "unit": "ns",
            "range": "± 8341.205317560418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 172524.31914893616,
            "unit": "ns",
            "range": "± 5878.106550014299"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3228419.714285714,
            "unit": "ns",
            "range": "± 32733.411468614544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2868597.8571428573,
            "unit": "ns",
            "range": "± 28042.57743519292"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13917.032967032967,
            "unit": "ns",
            "range": "± 2635.82538812397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65656.44897959183,
            "unit": "ns",
            "range": "± 8112.43318288999"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 62496.32558139535,
            "unit": "ns",
            "range": "± 10077.812097336418"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92031.86458333333,
            "unit": "ns",
            "range": "± 8250.89452709576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5822.1122448979595,
            "unit": "ns",
            "range": "± 1793.8450891217008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15842.064705882352,
            "unit": "ns",
            "range": "± 2242.9106166884544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3766149.943229167,
            "unit": "ns",
            "range": "± 34926.65087024582"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1192115.6812220982,
            "unit": "ns",
            "range": "± 3221.0353179919393"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 771814.4375,
            "unit": "ns",
            "range": "± 12846.693878966627"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1966815.9598214286,
            "unit": "ns",
            "range": "± 19119.876916188427"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618283.400390625,
            "unit": "ns",
            "range": "± 839.9946468741848"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582058.693359375,
            "unit": "ns",
            "range": "± 2801.1736775634877"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 39724.5625,
            "unit": "ns",
            "range": "± 5468.457332379273"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2503394.26,
            "unit": "ns",
            "range": "± 66010.5058104895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2668706.966666667,
            "unit": "ns",
            "range": "± 78827.47721786695"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3216708.9444444445,
            "unit": "ns",
            "range": "± 104927.27475540772"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3428099.25,
            "unit": "ns",
            "range": "± 134012.44825642448"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10322668.921348315,
            "unit": "ns",
            "range": "± 898544.3220346505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5482166.8,
            "unit": "ns",
            "range": "± 78570.53025076078"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14653133.466666667,
            "unit": "ns",
            "range": "± 116621.0200244895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 36328844.85714286,
            "unit": "ns",
            "range": "± 190407.96835726063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74635745.07142857,
            "unit": "ns",
            "range": "± 917122.3762589378"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147362837.73333332,
            "unit": "ns",
            "range": "± 1182227.0216788475"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1079826.3469387756,
            "unit": "ns",
            "range": "± 111081.10482165277"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2038193.9430379746,
            "unit": "ns",
            "range": "± 93758.64901584045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1737778.788888889,
            "unit": "ns",
            "range": "± 130405.49974981834"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8716344.13095238,
            "unit": "ns",
            "range": "± 805558.6327700973"
          }
        ]
      }
    ]
  }
}