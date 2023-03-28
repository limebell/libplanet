window.BENCHMARK_DATA = {
  "lastUpdate": 1679991341442,
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
          "id": "f804adf2299b6ed3bb4cd40316c40f6de29e311c",
          "message": "feat: add getstate measurement for single action execution\n\n(cherry picked from commit 9d89ee4362b95e3fb85bb936484eae3c96145f02)",
          "timestamp": "2023-03-28T16:57:04+09:00",
          "tree_id": "e3bed9b2029d34ce60a47a82bbc36e6733cafcf7",
          "url": "https://github.com/limebell/libplanet/commit/f804adf2299b6ed3bb4cd40316c40f6de29e311c"
        },
        "date": 1679990857898,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 109547.8,
            "unit": "ns",
            "range": "± 2041.9659364725665"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5126149.245814732,
            "unit": "ns",
            "range": "± 54390.5510438674"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5811037.230769231,
            "unit": "ns",
            "range": "± 28969.423628352954"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 28395502.714285713,
            "unit": "ns",
            "range": "± 673278.2112346384"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6317714.25,
            "unit": "ns",
            "range": "± 38957.959044742296"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 30297159.666666668,
            "unit": "ns",
            "range": "± 827848.3047037803"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6017247.755580357,
            "unit": "ns",
            "range": "± 20462.04424979096"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1828012.1479166667,
            "unit": "ns",
            "range": "± 8804.340756945956"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1355061.2572544643,
            "unit": "ns",
            "range": "± 8473.420583906181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2632530.5924479165,
            "unit": "ns",
            "range": "± 6742.8629181732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829213.6725911458,
            "unit": "ns",
            "range": "± 2125.980219947562"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 761613.9416316106,
            "unit": "ns",
            "range": "± 1084.1261144807133"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 97159.04301075269,
            "unit": "ns",
            "range": "± 7724.281237019062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 200964.75806451612,
            "unit": "ns",
            "range": "± 8848.522352672991"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 185705.39024390245,
            "unit": "ns",
            "range": "± 9843.235741895087"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3859178.466666667,
            "unit": "ns",
            "range": "± 66657.32326809011"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 10107689.733333332,
            "unit": "ns",
            "range": "± 149239.1478334913"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18169.010416666668,
            "unit": "ns",
            "range": "± 1634.0522151986497"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 53092.545454545456,
            "unit": "ns",
            "range": "± 3038.9728184065066"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 40422.46,
            "unit": "ns",
            "range": "± 1643.5278160228431"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 96735.15463917526,
            "unit": "ns",
            "range": "± 14915.27701255509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6082.354166666667,
            "unit": "ns",
            "range": "± 567.5664946745825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17099.08988764045,
            "unit": "ns",
            "range": "± 1761.4893791157208"
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
          "id": "7ac3a83dada720d6e83d3bf9fd41e2dbb1a2d4ff",
          "message": "feat: add getstate measurement for single action execution\n\n(cherry picked from commit 9d89ee4362b95e3fb85bb936484eae3c96145f02)",
          "timestamp": "2023-03-28T16:56:18+09:00",
          "tree_id": "f97c7f1286e48802c7d99538392d8032adc3d5cd",
          "url": "https://github.com/limebell/libplanet/commit/7ac3a83dada720d6e83d3bf9fd41e2dbb1a2d4ff"
        },
        "date": 1679990875304,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 106711.95522388059,
            "unit": "ns",
            "range": "± 5053.115131111476"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4524099.80078125,
            "unit": "ns",
            "range": "± 20505.17154022537"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6199483.285714285,
            "unit": "ns",
            "range": "± 101289.39738152306"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25884081.166666668,
            "unit": "ns",
            "range": "± 336050.90296745586"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6313279.483333333,
            "unit": "ns",
            "range": "± 281517.97226485977"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28793116.866666667,
            "unit": "ns",
            "range": "± 455330.518405487"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5908257.058035715,
            "unit": "ns",
            "range": "± 35701.520968669705"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1979349.18046875,
            "unit": "ns",
            "range": "± 2371.151736765573"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1361155.5184151786,
            "unit": "ns",
            "range": "± 1606.2721888160268"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2598084.589285714,
            "unit": "ns",
            "range": "± 4721.100245110334"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 834225.4317103794,
            "unit": "ns",
            "range": "± 805.8414448496231"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 742932.3227539062,
            "unit": "ns",
            "range": "± 1334.1712328259223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 91145.81609195402,
            "unit": "ns",
            "range": "± 5727.36692724265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 204914.63043478262,
            "unit": "ns",
            "range": "± 7906.944504277225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 175086.44444444444,
            "unit": "ns",
            "range": "± 3729.773723182653"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3827286.066666667,
            "unit": "ns",
            "range": "± 22357.522228760587"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9479934.42857143,
            "unit": "ns",
            "range": "± 34074.805751947686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 16741.63953488372,
            "unit": "ns",
            "range": "± 1099.1783446020643"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 50459.06896551724,
            "unit": "ns",
            "range": "± 3969.397332245156"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45610.611940298506,
            "unit": "ns",
            "range": "± 2160.5887732578813"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99268.61111111111,
            "unit": "ns",
            "range": "± 10530.25919492178"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7009.122448979592,
            "unit": "ns",
            "range": "± 1056.4219446120278"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16784.052631578947,
            "unit": "ns",
            "range": "± 1443.8919580640893"
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
          "id": "f9be3f1ba45edd058276138a964378131c34b5db",
          "message": "feat: add getstate measurement for single action execution  [skip changelog]\n\n(cherry picked from commit 9d89ee4362b95e3fb85bb936484eae3c96145f02)",
          "timestamp": "2023-03-28T16:58:16+09:00",
          "tree_id": "e3bed9b2029d34ce60a47a82bbc36e6733cafcf7",
          "url": "https://github.com/limebell/libplanet/commit/f9be3f1ba45edd058276138a964378131c34b5db"
        },
        "date": 1679991337272,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 132558.2,
            "unit": "ns",
            "range": "± 20288.015299678766"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6225172.4396875,
            "unit": "ns",
            "range": "± 366190.52112270746"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6677379.222222222,
            "unit": "ns",
            "range": "± 643142.7184999624"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31364884.818181816,
            "unit": "ns",
            "range": "± 2374113.2801935454"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6792550.808080808,
            "unit": "ns",
            "range": "± 646840.4891281343"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 36720482.93939394,
            "unit": "ns",
            "range": "± 2832901.0671356167"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6569453.166360294,
            "unit": "ns",
            "range": "± 210735.87895120983"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2136934.1614346593,
            "unit": "ns",
            "range": "± 90244.41242138292"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1511133.034765625,
            "unit": "ns",
            "range": "± 25357.469312015815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2927243.6427283655,
            "unit": "ns",
            "range": "± 78141.15020985086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 949084.1401692708,
            "unit": "ns",
            "range": "± 15229.651583420247"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 944112.5311197917,
            "unit": "ns",
            "range": "± 15037.518172145155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 111290.13684210526,
            "unit": "ns",
            "range": "± 23644.640298443475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 221000.27659574468,
            "unit": "ns",
            "range": "± 42056.7544686796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213895.20618556702,
            "unit": "ns",
            "range": "± 37604.628570922556"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4543046.474226804,
            "unit": "ns",
            "range": "± 474298.13520838105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11116247.697916666,
            "unit": "ns",
            "range": "± 974415.7070099318"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25161.731958762888,
            "unit": "ns",
            "range": "± 10392.53175413666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 67066.75531914894,
            "unit": "ns",
            "range": "± 18286.470683479827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 54771.9793814433,
            "unit": "ns",
            "range": "± 14957.313448735948"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 142053.67346938775,
            "unit": "ns",
            "range": "± 29753.45332422811"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6959.285714285715,
            "unit": "ns",
            "range": "± 1459.8879659124098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26357.061224489797,
            "unit": "ns",
            "range": "± 10514.065258702465"
          }
        ]
      }
    ]
  }
}