window.BENCHMARK_DATA = {
  "lastUpdate": 1679474395492,
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
      }
    ]
  }
}