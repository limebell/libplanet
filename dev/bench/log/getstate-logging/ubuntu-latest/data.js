window.BENCHMARK_DATA = {
  "lastUpdate": 1679476365028,
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
          "id": "9853dae4111aaa2e067ade46f8dbb1b567be6dad",
          "message": "logging: added additional logging in AccountStateDeltaImpl.GetState()",
          "timestamp": "2023-03-22T17:17:10+09:00",
          "tree_id": "53e764c4d3ef8a1302b3c8813a37ec74bffa9eb3",
          "url": "https://github.com/limebell/libplanet/commit/9853dae4111aaa2e067ade46f8dbb1b567be6dad"
        },
        "date": 1679473692263,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103761.79411764706,
            "unit": "ns",
            "range": "± 3305.000671887446"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4440125.837760417,
            "unit": "ns",
            "range": "± 38218.347386738096"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5462902.068965517,
            "unit": "ns",
            "range": "± 234038.83937664513"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24715997,
            "unit": "ns",
            "range": "± 140027.46924525476"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6375285.833333333,
            "unit": "ns",
            "range": "± 188032.42094953646"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27925322.133333333,
            "unit": "ns",
            "range": "± 334790.71661943133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6221980.841666667,
            "unit": "ns",
            "range": "± 32286.587443233948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1963953.3731971155,
            "unit": "ns",
            "range": "± 897.8221358756947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376111.3936941964,
            "unit": "ns",
            "range": "± 513.0437724178421"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2528987.800223214,
            "unit": "ns",
            "range": "± 7513.478671942793"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 807438.7315104167,
            "unit": "ns",
            "range": "± 2695.793873828495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742018.4115513393,
            "unit": "ns",
            "range": "± 486.4615019939379"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 84766.08510638298,
            "unit": "ns",
            "range": "± 5592.12223484548"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194804.51388888888,
            "unit": "ns",
            "range": "± 9116.364451726673"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170293,
            "unit": "ns",
            "range": "± 2963.3597876007616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3746452.2666666666,
            "unit": "ns",
            "range": "± 40952.085850359785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9412968.066666666,
            "unit": "ns",
            "range": "± 62173.53614965439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16110,
            "unit": "ns",
            "range": "± 844.5806389541514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46050.58947368421,
            "unit": "ns",
            "range": "± 3157.553714085451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38796.76666666667,
            "unit": "ns",
            "range": "± 1693.2847365018256"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85080.75510204081,
            "unit": "ns",
            "range": "± 14217.386596351957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5011.723404255319,
            "unit": "ns",
            "range": "± 503.70117024751545"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14656.32183908046,
            "unit": "ns",
            "range": "± 1016.4577284962882"
          }
        ]
      },
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
          "id": "ea5185dea75a70ede946f9c276ef35eaef0c5d1f",
          "message": "logging: added additional logging in AccountStateDeltaImpl.GetState()",
          "timestamp": "2023-03-22T17:21:05+09:00",
          "tree_id": "d1769eaa62f6eea77996dc7979c5403369dac380",
          "url": "https://github.com/limebell/libplanet/commit/ea5185dea75a70ede946f9c276ef35eaef0c5d1f"
        },
        "date": 1679473932944,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103277.43396226416,
            "unit": "ns",
            "range": "± 4309.7491427506275"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4480586.338341346,
            "unit": "ns",
            "range": "± 16728.50260993307"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5399188.073170732,
            "unit": "ns",
            "range": "± 119812.09717582575"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25779650.133333333,
            "unit": "ns",
            "range": "± 418422.67613364133"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6835127.94117647,
            "unit": "ns",
            "range": "± 133360.21501626272"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28377119.933333334,
            "unit": "ns",
            "range": "± 455174.03671334754"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6043246.7640625,
            "unit": "ns",
            "range": "± 28362.91361955458"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1932823.3098958333,
            "unit": "ns",
            "range": "± 9027.556307310608"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1390710.7651041667,
            "unit": "ns",
            "range": "± 1823.7502346171216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2607831.651141827,
            "unit": "ns",
            "range": "± 1205.227113684244"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 824438.2030498798,
            "unit": "ns",
            "range": "± 1143.8752019230164"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 741767.9933143029,
            "unit": "ns",
            "range": "± 490.9892643182236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90830.25,
            "unit": "ns",
            "range": "± 4976.247619799805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196056.91549295775,
            "unit": "ns",
            "range": "± 6886.631836384126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173058.8,
            "unit": "ns",
            "range": "± 2791.9648165480353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3773849.066666667,
            "unit": "ns",
            "range": "± 24186.877813235442"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9547072.714285715,
            "unit": "ns",
            "range": "± 53473.860227258665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16989.354166666668,
            "unit": "ns",
            "range": "± 2179.6468616880734"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52150.62765957447,
            "unit": "ns",
            "range": "± 4191.119905726029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45751.81690140845,
            "unit": "ns",
            "range": "± 2143.2978148495445"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96665.95555555556,
            "unit": "ns",
            "range": "± 9818.814175766196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6324.425531914893,
            "unit": "ns",
            "range": "± 669.8782025285136"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16554.78021978022,
            "unit": "ns",
            "range": "± 1779.5434358421376"
          }
        ]
      },
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
          "id": "a958b8147690c4781a0a0183001971b9e2654177",
          "message": "logging: added additional logging in AccountStateDeltaImpl.GetState()",
          "timestamp": "2023-03-22T17:56:39+09:00",
          "tree_id": "be9c17d1659cad62b03b9a8033a4e63d2a6ede99",
          "url": "https://github.com/limebell/libplanet/commit/a958b8147690c4781a0a0183001971b9e2654177"
        },
        "date": 1679475990043,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 103737,
            "unit": "ns",
            "range": "± 1804.704535800379"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4348534.316927084,
            "unit": "ns",
            "range": "± 31110.84176803067"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5949154.84,
            "unit": "ns",
            "range": "± 154918.45138563492"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25379152.222222224,
            "unit": "ns",
            "range": "± 534468.4656267004"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6039688.254237288,
            "unit": "ns",
            "range": "± 262039.07159505767"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27790947.066666666,
            "unit": "ns",
            "range": "± 506456.5488257559"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5783940.018415178,
            "unit": "ns",
            "range": "± 23201.929325318266"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1870491.7232572115,
            "unit": "ns",
            "range": "± 11543.033710440106"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1347256.1415264423,
            "unit": "ns",
            "range": "± 425.2230543544451"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2594943.89375,
            "unit": "ns",
            "range": "± 1493.9723432495316"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 815159.4498697916,
            "unit": "ns",
            "range": "± 619.8851409720481"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750083.5581752232,
            "unit": "ns",
            "range": "± 597.6921159832636"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90766.5,
            "unit": "ns",
            "range": "± 8693.159637288472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 193403.88461538462,
            "unit": "ns",
            "range": "± 9457.352372392836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 169345.86956521738,
            "unit": "ns",
            "range": "± 4167.7427104363405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3741085.4285714286,
            "unit": "ns",
            "range": "± 17217.43979768227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9337580.857142856,
            "unit": "ns",
            "range": "± 70283.51790247308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 14086.666666666666,
            "unit": "ns",
            "range": "± 759.9277926224305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46656.048192771086,
            "unit": "ns",
            "range": "± 2489.7911456322286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 38429.114285714284,
            "unit": "ns",
            "range": "± 1248.996674309814"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79897.68131868132,
            "unit": "ns",
            "range": "± 10405.888186640743"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4499.577319587629,
            "unit": "ns",
            "range": "± 522.0232241611228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14594.677777777777,
            "unit": "ns",
            "range": "± 1179.060145874888"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "distinct": true,
          "id": "3c9bd7b83a2693e0db4f9917de660513930bb2ad",
          "message": "Cleanup",
          "timestamp": "2023-03-22T18:00:11+09:00",
          "tree_id": "5419d5b724fb3ad6d51fee9bcfc63f452a315433",
          "url": "https://github.com/limebell/libplanet/commit/3c9bd7b83a2693e0db4f9917de660513930bb2ad"
        },
        "date": 1679476253545,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 104149.97368421052,
            "unit": "ns",
            "range": "± 3567.947024867625"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4499582.98671875,
            "unit": "ns",
            "range": "± 33615.270312332446"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6060798,
            "unit": "ns",
            "range": "± 55126.065313271516"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25583161.92857143,
            "unit": "ns",
            "range": "± 228734.96600868547"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6321587.291666667,
            "unit": "ns",
            "range": "± 369276.3556673316"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 29267823.782608695,
            "unit": "ns",
            "range": "± 720839.4876676119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5942671.229166667,
            "unit": "ns",
            "range": "± 47644.57347980284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1976176.6256009615,
            "unit": "ns",
            "range": "± 2195.4712879448693"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1378992.0858072916,
            "unit": "ns",
            "range": "± 726.2340172163694"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2572367.295052083,
            "unit": "ns",
            "range": "± 2156.203401356935"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 819701.2394831731,
            "unit": "ns",
            "range": "± 2262.2870275252203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740659.3470703125,
            "unit": "ns",
            "range": "± 561.2528730218547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 91775.48979591837,
            "unit": "ns",
            "range": "± 8390.053222549568"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197143.70731707316,
            "unit": "ns",
            "range": "± 6421.2488748058295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 171933.29166666666,
            "unit": "ns",
            "range": "± 4427.591851885634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3790338.1333333333,
            "unit": "ns",
            "range": "± 19668.068104950024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9517909.333333334,
            "unit": "ns",
            "range": "± 49188.1063827813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17159.139784946237,
            "unit": "ns",
            "range": "± 1486.2585472851667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50996.67032967033,
            "unit": "ns",
            "range": "± 2972.4759490848146"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46415.43298969072,
            "unit": "ns",
            "range": "± 3338.1474088282876"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99380.15625,
            "unit": "ns",
            "range": "± 13814.855772969928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6389.785714285715,
            "unit": "ns",
            "range": "± 601.6230324679037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15364.367816091954,
            "unit": "ns",
            "range": "± 1207.0507023410075"
          }
        ]
      },
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
          "id": "a9c34db11dadc8734faf0899c05f33ddc7dc2741",
          "message": "logging: added additional logging in AccountStateDeltaImpl.GetState()",
          "timestamp": "2023-03-22T17:55:25+09:00",
          "tree_id": "d55d2b7ea3f40a4d7b68b8b3b8bcd95836251cf9",
          "url": "https://github.com/limebell/libplanet/commit/a9c34db11dadc8734faf0899c05f33ddc7dc2741"
        },
        "date": 1679476360584,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 136224.1894736842,
            "unit": "ns",
            "range": "± 19029.646726573403"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6336727.14828125,
            "unit": "ns",
            "range": "± 385436.7494097214"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6910479.968421052,
            "unit": "ns",
            "range": "± 440819.1320868181"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 33919016.1,
            "unit": "ns",
            "range": "± 1348965.3390396573"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7643585.62244898,
            "unit": "ns",
            "range": "± 642863.2996095488"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 39429274.8,
            "unit": "ns",
            "range": "± 2507038.421983685"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7217549.617487981,
            "unit": "ns",
            "range": "± 193536.58102510564"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2483943.9983258927,
            "unit": "ns",
            "range": "± 24478.46942398666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1672809.0551757812,
            "unit": "ns",
            "range": "± 31122.375279701155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3236283.8817708334,
            "unit": "ns",
            "range": "± 34436.121468975914"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1062818.3359375,
            "unit": "ns",
            "range": "± 19130.359722664634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 964119.336328125,
            "unit": "ns",
            "range": "± 9657.541720618901"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 112234.89361702128,
            "unit": "ns",
            "range": "± 19313.587960359397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249656.49484536084,
            "unit": "ns",
            "range": "± 37881.621720973235"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225469.0105263158,
            "unit": "ns",
            "range": "± 33937.030337957716"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4957102.510204081,
            "unit": "ns",
            "range": "± 329330.34372024034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 12438077.18556701,
            "unit": "ns",
            "range": "± 814949.4794330598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21593.96907216495,
            "unit": "ns",
            "range": "± 7573.3303212842575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59265.955555555556,
            "unit": "ns",
            "range": "± 11450.616255346957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53892.26530612245,
            "unit": "ns",
            "range": "± 13677.154169501406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124833.56842105264,
            "unit": "ns",
            "range": "± 29626.310627854782"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6581.340659340659,
            "unit": "ns",
            "range": "± 997.9953152838191"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17512.329268292684,
            "unit": "ns",
            "range": "± 1946.5504344731492"
          }
        ]
      }
    ]
  }
}