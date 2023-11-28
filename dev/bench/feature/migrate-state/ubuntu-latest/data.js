window.BENCHMARK_DATA = {
  "lastUpdate": 1701149732708,
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
          "id": "255f180b2d949d05246640865338e4ad7661376e",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-11-27T17:30:10+09:00",
          "tree_id": "c21e21a8b01befe44fd3c52fe70a4a0806f05b78",
          "url": "https://github.com/limebell/libplanet/commit/255f180b2d949d05246640865338e4ad7661376e"
        },
        "date": 1701074495855,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 199643.72727272726,
            "unit": "ns",
            "range": "± 7275.679905748265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200625.83333333334,
            "unit": "ns",
            "range": "± 10440.910268022591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173456,
            "unit": "ns",
            "range": "± 3827.4486761315366"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3275499.5,
            "unit": "ns",
            "range": "± 18287.069709959633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2910251.346153846,
            "unit": "ns",
            "range": "± 26624.562994367167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20484.224489795917,
            "unit": "ns",
            "range": "± 4379.95854563213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76831.61855670103,
            "unit": "ns",
            "range": "± 8888.386580771303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88242.42,
            "unit": "ns",
            "range": "± 18195.874431498713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61471.92941176471,
            "unit": "ns",
            "range": "± 4542.510321261528"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3057.103092783505,
            "unit": "ns",
            "range": "± 421.0735655375457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13098.897959183674,
            "unit": "ns",
            "range": "± 2488.835921079903"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3729110.30078125,
            "unit": "ns",
            "range": "± 46004.23965501733"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211796.501171875,
            "unit": "ns",
            "range": "± 3057.4981049939656"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770540.0290715144,
            "unit": "ns",
            "range": "± 2166.0818302780467"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952623.6961495536,
            "unit": "ns",
            "range": "± 2660.9514348682173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 624454.9057241586,
            "unit": "ns",
            "range": "± 4430.863641309552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579876.6245814732,
            "unit": "ns",
            "range": "± 2111.976431148891"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 40761.278947368424,
            "unit": "ns",
            "range": "± 6614.029931893082"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2363079.9615384615,
            "unit": "ns",
            "range": "± 61818.17690581357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2658845.25,
            "unit": "ns",
            "range": "± 67427.3765515939"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3212724.0454545454,
            "unit": "ns",
            "range": "± 101081.3532380883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3188440.6145833335,
            "unit": "ns",
            "range": "± 221970.78197183236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10216192.967741935,
            "unit": "ns",
            "range": "± 1468544.4688137304"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5506157.066666666,
            "unit": "ns",
            "range": "± 17115.900750332657"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14070206.6,
            "unit": "ns",
            "range": "± 78828.37897139038"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37565318.538461536,
            "unit": "ns",
            "range": "± 304894.5008106945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 75517333.34615384,
            "unit": "ns",
            "range": "± 463108.2187449722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 147670776.5,
            "unit": "ns",
            "range": "± 645631.5816693243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1161268.2173913044,
            "unit": "ns",
            "range": "± 103199.06486029869"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2146586.888888889,
            "unit": "ns",
            "range": "± 71275.34580856243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1911628.3296703296,
            "unit": "ns",
            "range": "± 142096.06460248056"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8691997.397435898,
            "unit": "ns",
            "range": "± 384135.24714751216"
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
          "id": "4090f2c08e1dc9bfc36343d2e39fdbe4cc719a77",
          "message": "chore: apply suggestions from the code review",
          "timestamp": "2023-11-28T14:02:56+09:00",
          "tree_id": "24ccdb8812b8876e89081ca0b38e36135ebe06cf",
          "url": "https://github.com/limebell/libplanet/commit/4090f2c08e1dc9bfc36343d2e39fdbe4cc719a77"
        },
        "date": 1701148531243,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 205076.09322033898,
            "unit": "ns",
            "range": "± 8794.221112162715"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 206150.83684210526,
            "unit": "ns",
            "range": "± 15364.472878780356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171544.72857142857,
            "unit": "ns",
            "range": "± 5605.200831190903"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3275164.3076923075,
            "unit": "ns",
            "range": "± 53528.77023835658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2860086.846153846,
            "unit": "ns",
            "range": "± 16837.172371700628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16777.727272727272,
            "unit": "ns",
            "range": "± 4709.497451022495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 68929.8956043956,
            "unit": "ns",
            "range": "± 12836.739035439663"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 92550.82291666667,
            "unit": "ns",
            "range": "± 5891.334210417682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 83642.07368421053,
            "unit": "ns",
            "range": "± 11681.698709940778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7085.040816326531,
            "unit": "ns",
            "range": "± 1184.8215331125452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16255.602040816326,
            "unit": "ns",
            "range": "± 6117.157425120522"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3753639.222098214,
            "unit": "ns",
            "range": "± 12927.781497839384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1207976.3614676339,
            "unit": "ns",
            "range": "± 4758.820671049407"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770370.3276742789,
            "unit": "ns",
            "range": "± 3165.2263216366678"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1952084.3714192708,
            "unit": "ns",
            "range": "± 3018.6270999154563"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629770.3072916666,
            "unit": "ns",
            "range": "± 2793.525786799855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 565313.8055013021,
            "unit": "ns",
            "range": "± 1531.2458069723798"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41170.979166666664,
            "unit": "ns",
            "range": "± 5746.316086675224"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2481735.675,
            "unit": "ns",
            "range": "± 79519.44216833681"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2599836.154761905,
            "unit": "ns",
            "range": "± 139674.2285910967"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3178793.5,
            "unit": "ns",
            "range": "± 33680.98912658972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3304431.8363636364,
            "unit": "ns",
            "range": "± 138515.07662061005"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10134683.181318682,
            "unit": "ns",
            "range": "± 1382168.3569437545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5689926.642857143,
            "unit": "ns",
            "range": "± 39355.48285838307"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14454546,
            "unit": "ns",
            "range": "± 86263.00062376329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37469651.9,
            "unit": "ns",
            "range": "± 248776.245005082"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 74534595.16666667,
            "unit": "ns",
            "range": "± 369267.1511211788"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 151328270.46666667,
            "unit": "ns",
            "range": "± 645214.8164591461"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1113508.90625,
            "unit": "ns",
            "range": "± 122101.18866890502"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2009463.6842105263,
            "unit": "ns",
            "range": "± 68928.28629897741"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1850417.1578947369,
            "unit": "ns",
            "range": "± 233067.14322259775"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8628060.161971832,
            "unit": "ns",
            "range": "± 312488.434585709"
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
          "id": "2f7fa26afb44238d16c7744fcea9774d94d8688a",
          "message": "chore: apply suggestions from the code review",
          "timestamp": "2023-11-28T14:20:58+09:00",
          "tree_id": "598a86a1dcde3045a367b5738f86d3b018ab0fc0",
          "url": "https://github.com/limebell/libplanet/commit/2f7fa26afb44238d16c7744fcea9774d94d8688a"
        },
        "date": 1701149729132,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208030.9512195122,
            "unit": "ns",
            "range": "± 10066.449514339778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 202652.94545454546,
            "unit": "ns",
            "range": "± 8200.923336493504"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 174948,
            "unit": "ns",
            "range": "± 4928.087406031013"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3248080.3,
            "unit": "ns",
            "range": "± 42022.255897831776"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2883679.533333333,
            "unit": "ns",
            "range": "± 28062.30688986478"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16616.458333333332,
            "unit": "ns",
            "range": "± 4022.552174707696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 73094.27956989247,
            "unit": "ns",
            "range": "± 4805.891735933391"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 59538.38461538462,
            "unit": "ns",
            "range": "± 6032.788475893365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74787.27083333333,
            "unit": "ns",
            "range": "± 11611.968805802479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6765.231578947369,
            "unit": "ns",
            "range": "± 1080.0730417837058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18324.78,
            "unit": "ns",
            "range": "± 4256.028315438959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3675531.6002604165,
            "unit": "ns",
            "range": "± 28671.920278294157"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1214663.1829427083,
            "unit": "ns",
            "range": "± 5727.459157185265"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 776373.9047475961,
            "unit": "ns",
            "range": "± 4410.627679371798"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2006355.35703125,
            "unit": "ns",
            "range": "± 28959.23738749028"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623325.9808872768,
            "unit": "ns",
            "range": "± 1322.30058304971"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563910.128530649,
            "unit": "ns",
            "range": "± 1037.7655975927896"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43136.78571428572,
            "unit": "ns",
            "range": "± 6331.470000079346"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2497256.8333333335,
            "unit": "ns",
            "range": "± 43264.71199267972"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2691165.652173913,
            "unit": "ns",
            "range": "± 65290.214710662636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3345668.25,
            "unit": "ns",
            "range": "± 61755.203005090996"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3411647.6875,
            "unit": "ns",
            "range": "± 102494.5042345505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 10861499.234042553,
            "unit": "ns",
            "range": "± 1514546.4813679475"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5863753.25,
            "unit": "ns",
            "range": "± 49418.5118684836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 14989308.142857144,
            "unit": "ns",
            "range": "± 98575.90814393292"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 37665940,
            "unit": "ns",
            "range": "± 262380.39403398376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 76594477.42857143,
            "unit": "ns",
            "range": "± 284585.70009799115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 150598243.2142857,
            "unit": "ns",
            "range": "± 718094.341330653"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1111059.6382978724,
            "unit": "ns",
            "range": "± 128264.99730439634"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2054714.5789473683,
            "unit": "ns",
            "range": "± 104339.9931021994"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1776536.5384615385,
            "unit": "ns",
            "range": "± 137027.37797935028"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 11623740.961538462,
            "unit": "ns",
            "range": "± 183715.47111117933"
          }
        ]
      }
    ]
  }
}