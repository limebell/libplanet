window.BENCHMARK_DATA = {
  "lastUpdate": 1680767495221,
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
          "id": "b382c82bfb6ccb3dddd5cbb05fe75a6667e430d5",
          "message": "chore: deprecate pow block fields",
          "timestamp": "2023-04-06T16:35:17+09:00",
          "tree_id": "45db6b6d92a72eb3fc89b9a6f39be841c113bad6",
          "url": "https://github.com/limebell/libplanet/commit/b382c82bfb6ccb3dddd5cbb05fe75a6667e430d5"
        },
        "date": 1680767491360,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3959641.947368421,
            "unit": "ns",
            "range": "± 126014.02410927671"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4200244.541666667,
            "unit": "ns",
            "range": "± 107644.37670362178"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4839517.978260869,
            "unit": "ns",
            "range": "± 184527.35938276822"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5194657.4,
            "unit": "ns",
            "range": "± 184052.6007386378"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8835099.824175823,
            "unit": "ns",
            "range": "± 491661.6922517079"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8881244.181818182,
            "unit": "ns",
            "range": "± 278680.934440878"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24879767.06451613,
            "unit": "ns",
            "range": "± 742436.5452883245"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61274803.166666664,
            "unit": "ns",
            "range": "± 1557214.4220524216"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122418942.1,
            "unit": "ns",
            "range": "± 3656159.3517186134"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 244895210.4,
            "unit": "ns",
            "range": "± 5406417.308301764"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1624161.197802198,
            "unit": "ns",
            "range": "± 127501.50230986126"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3119315.921875,
            "unit": "ns",
            "range": "± 142336.1903739467"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2615127.623529412,
            "unit": "ns",
            "range": "± 141014.11695633753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6906511.51,
            "unit": "ns",
            "range": "± 442142.6133817119"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54966.90697674418,
            "unit": "ns",
            "range": "± 3005.4720119765348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6904044.6265625,
            "unit": "ns",
            "range": "± 58516.07943307386"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2125705.494010417,
            "unit": "ns",
            "range": "± 14893.111538047453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1573371.1059895833,
            "unit": "ns",
            "range": "± 10083.17748117526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3059871.080208333,
            "unit": "ns",
            "range": "± 30153.281873453907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 978387.9595052083,
            "unit": "ns",
            "range": "± 17209.363515190496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 887123.8386067708,
            "unit": "ns",
            "range": "± 4878.764048381081"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 394656.5714285714,
            "unit": "ns",
            "range": "± 17772.391825992072"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 325465.46,
            "unit": "ns",
            "range": "± 12559.908813217022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274941.358974359,
            "unit": "ns",
            "range": "± 9501.700151156274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 6784218.066666666,
            "unit": "ns",
            "range": "± 126815.23359341489"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4845912.384615385,
            "unit": "ns",
            "range": "± 37821.458000140745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22365.032967032967,
            "unit": "ns",
            "range": "± 1619.8907813014873"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105157.21348314607,
            "unit": "ns",
            "range": "± 5954.136803845462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96182.58510638298,
            "unit": "ns",
            "range": "± 6145.570990925658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 218192.306122449,
            "unit": "ns",
            "range": "± 17814.380858431214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7240.094736842106,
            "unit": "ns",
            "range": "± 764.2315577808695"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21801.291666666668,
            "unit": "ns",
            "range": "± 2013.228524778659"
          }
        ]
      }
    ]
  }
}