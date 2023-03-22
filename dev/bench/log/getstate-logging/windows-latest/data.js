window.BENCHMARK_DATA = {
  "lastUpdate": 1679476362051,
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
        "date": 1679473988253,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 96398.27586206897,
            "unit": "ns",
            "range": "± 3636.293243695285"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4700559.375,
            "unit": "ns",
            "range": "± 36447.92849787779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1500389.7916666667,
            "unit": "ns",
            "range": "± 9813.54202096124"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1127737.1651785714,
            "unit": "ns",
            "range": "± 5815.838272966071"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2576493.125,
            "unit": "ns",
            "range": "± 8080.8491430349595"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826041.5114182692,
            "unit": "ns",
            "range": "± 2027.232708628143"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 769278.7955729166,
            "unit": "ns",
            "range": "± 2426.757289514561"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4582956.354166667,
            "unit": "ns",
            "range": "± 44586.24091181184"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5951738.461538462,
            "unit": "ns",
            "range": "± 206529.2570269335"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25486781.48148148,
            "unit": "ns",
            "range": "± 709186.2324778889"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6517475,
            "unit": "ns",
            "range": "± 142220.6805414888"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28659806.818181816,
            "unit": "ns",
            "range": "± 1062170.4664129356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 92136.73469387754,
            "unit": "ns",
            "range": "± 10548.155530904194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 188265,
            "unit": "ns",
            "range": "± 7430.875236448329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157770.49180327868,
            "unit": "ns",
            "range": "± 7089.084197137058"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3516150,
            "unit": "ns",
            "range": "± 42269.374256073395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8806855,
            "unit": "ns",
            "range": "± 194072.990813142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16712.90322580645,
            "unit": "ns",
            "range": "± 1437.632852571834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46890.217391304344,
            "unit": "ns",
            "range": "± 3921.147504802579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 36392.75362318841,
            "unit": "ns",
            "range": "± 1757.1131772932447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 81827.84810126582,
            "unit": "ns",
            "range": "± 6461.025891170421"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5024.226804123711,
            "unit": "ns",
            "range": "± 676.7382480378866"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15942.391304347826,
            "unit": "ns",
            "range": "± 1417.6465325856534"
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
        "date": 1679474368226,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 101623.1884057971,
            "unit": "ns",
            "range": "± 4917.021603498947"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4804348.463541667,
            "unit": "ns",
            "range": "± 15042.91474568647"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1513380.8984375,
            "unit": "ns",
            "range": "± 7983.299564973152"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1153313.2421875,
            "unit": "ns",
            "range": "± 8969.991131076598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2618176.1160714286,
            "unit": "ns",
            "range": "± 8080.32056780809"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843633.18359375,
            "unit": "ns",
            "range": "± 4055.2089246395963"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766655.99609375,
            "unit": "ns",
            "range": "± 1145.5980269811237"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4674681.484375,
            "unit": "ns",
            "range": "± 44354.74844089045"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5630578.571428572,
            "unit": "ns",
            "range": "± 55640.62127855634"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24826244.827586208,
            "unit": "ns",
            "range": "± 727309.143146457"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 5832260.784313725,
            "unit": "ns",
            "range": "± 237225.45907084373"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28076875,
            "unit": "ns",
            "range": "± 642919.3924059056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 90314.89361702128,
            "unit": "ns",
            "range": "± 10119.659961208996"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 190603.75,
            "unit": "ns",
            "range": "± 8566.012376711506"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163953.53535353535,
            "unit": "ns",
            "range": "± 10168.843101690507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3563313.6363636362,
            "unit": "ns",
            "range": "± 85568.65968028552"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9087346.153846154,
            "unit": "ns",
            "range": "± 127786.5708605865"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20395.918367346938,
            "unit": "ns",
            "range": "± 3042.073301656101"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53246.31578947369,
            "unit": "ns",
            "range": "± 6044.441978825369"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 43360.91954022989,
            "unit": "ns",
            "range": "± 2372.8775741329437"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103475,
            "unit": "ns",
            "range": "± 19754.503816918095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5929.591836734694,
            "unit": "ns",
            "range": "± 1218.7503472839871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17702.15053763441,
            "unit": "ns",
            "range": "± 1861.1578031957547"
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
        "date": 1679476233836,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 99043.03797468354,
            "unit": "ns",
            "range": "± 4978.07200719273"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4935371.614583333,
            "unit": "ns",
            "range": "± 12881.778362026287"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1494004.1015625,
            "unit": "ns",
            "range": "± 7118.44718209618"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1154419.3229166667,
            "unit": "ns",
            "range": "± 3868.418678495378"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2625093.6848958335,
            "unit": "ns",
            "range": "± 6609.79298267743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 823436.8303571428,
            "unit": "ns",
            "range": "± 2396.423975907517"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750085.0846354166,
            "unit": "ns",
            "range": "± 1254.5659229947787"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4531420.3125,
            "unit": "ns",
            "range": "± 28388.467731479497"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5499657.692307692,
            "unit": "ns",
            "range": "± 25154.140200586644"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24273383.333333332,
            "unit": "ns",
            "range": "± 209887.19842002288"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6129950,
            "unit": "ns",
            "range": "± 60539.54524491853"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 27334811.111111112,
            "unit": "ns",
            "range": "± 576608.0184389604"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 89564.94845360825,
            "unit": "ns",
            "range": "± 7374.22370543042"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 179015.15151515152,
            "unit": "ns",
            "range": "± 8051.492788951383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 160384.61538461538,
            "unit": "ns",
            "range": "± 6559.213983738033"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3467231.5789473685,
            "unit": "ns",
            "range": "± 72804.95291936286"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 8679494.444444444,
            "unit": "ns",
            "range": "± 178298.44518546862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18202.04081632653,
            "unit": "ns",
            "range": "± 1879.8979787977823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 46175.82417582418,
            "unit": "ns",
            "range": "± 4352.275028568154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 37705.882352941175,
            "unit": "ns",
            "range": "± 1049.0807452156266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 87043.5294117647,
            "unit": "ns",
            "range": "± 9678.0242850297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5102.040816326531,
            "unit": "ns",
            "range": "± 666.1134530524595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16295.698924731183,
            "unit": "ns",
            "range": "± 1637.5959300473137"
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
        "date": 1679476346447,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 102078.68852459016,
            "unit": "ns",
            "range": "± 4410.333122493824"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4839163.854166667,
            "unit": "ns",
            "range": "± 24065.177446751142"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1508834.53125,
            "unit": "ns",
            "range": "± 4562.56394683756"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1146892.1950120192,
            "unit": "ns",
            "range": "± 4917.574017276116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2614931.4713541665,
            "unit": "ns",
            "range": "± 11204.012238215575"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818756.7313058035,
            "unit": "ns",
            "range": "± 1799.151970099932"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 756749.6158854166,
            "unit": "ns",
            "range": "± 1309.9819663556138"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4767720.494791667,
            "unit": "ns",
            "range": "± 32989.94690750743"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5585735.714285715,
            "unit": "ns",
            "range": "± 69814.79463158615"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 24766246.153846152,
            "unit": "ns",
            "range": "± 395518.97050033015"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6165328.571428572,
            "unit": "ns",
            "range": "± 71529.5896661109"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28917992.85714286,
            "unit": "ns",
            "range": "± 497237.51709479187"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 100630.43478260869,
            "unit": "ns",
            "range": "± 11878.716206307216"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 196204.34782608695,
            "unit": "ns",
            "range": "± 11437.963711068045"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185240.81632653062,
            "unit": "ns",
            "range": "± 12579.551700129285"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3606694.117647059,
            "unit": "ns",
            "range": "± 70825.54686153361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9151593.333333334,
            "unit": "ns",
            "range": "± 81789.28908802063"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23020.833333333332,
            "unit": "ns",
            "range": "± 3280.1770384399633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56003.15789473684,
            "unit": "ns",
            "range": "± 5869.239187920082"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40839.17525773196,
            "unit": "ns",
            "range": "± 2893.1512771914945"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108802.04081632652,
            "unit": "ns",
            "range": "± 23390.97975580461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6284.375,
            "unit": "ns",
            "range": "± 910.4455965133371"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19363.043478260868,
            "unit": "ns",
            "range": "± 2564.1534554592895"
          }
        ]
      }
    ]
  }
}