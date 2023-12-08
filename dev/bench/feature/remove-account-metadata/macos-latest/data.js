window.BENCHMARK_DATA = {
  "lastUpdate": 1702020721611,
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
          "id": "4f668f2b53a2ca6dd65b0c923d6dba638706dc7e",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-12-07T18:43:10+09:00",
          "tree_id": "1f69a8f9dbc8e348e4b14df3661186f02c94a65a",
          "url": "https://github.com/limebell/libplanet/commit/4f668f2b53a2ca6dd65b0c923d6dba638706dc7e"
        },
        "date": 1701943359668,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8167974.337078651,
            "unit": "ns",
            "range": "± 450928.0254664198"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22310371.5,
            "unit": "ns",
            "range": "± 791301.973614774"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53928392.101123594,
            "unit": "ns",
            "range": "± 3178677.488027919"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108613541.86923076,
            "unit": "ns",
            "range": "± 5056660.00272269"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 220119995.25,
            "unit": "ns",
            "range": "± 5522610.493456508"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 45893.13157894737,
            "unit": "ns",
            "range": "± 10929.54528560342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 250917.375,
            "unit": "ns",
            "range": "± 26818.86342120529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 240204.65625,
            "unit": "ns",
            "range": "± 31259.230295884103"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 259458.57368421054,
            "unit": "ns",
            "range": "± 26338.184642866836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4534367.729166667,
            "unit": "ns",
            "range": "± 462979.5710364149"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3559519.9411764704,
            "unit": "ns",
            "range": "± 72563.26310405854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 17872.840206185567,
            "unit": "ns",
            "range": "± 5311.391668477368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77028.32474226804,
            "unit": "ns",
            "range": "± 16459.676335929213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 97333.4540229885,
            "unit": "ns",
            "range": "± 6894.320233803593"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 75123.60204081633,
            "unit": "ns",
            "range": "± 15587.749452192438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5877.326086956522,
            "unit": "ns",
            "range": "± 1613.8572802668255"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20406.061855670105,
            "unit": "ns",
            "range": "± 4631.624035310655"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1198675.398989899,
            "unit": "ns",
            "range": "± 110201.55887740472"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2533653.1195652173,
            "unit": "ns",
            "range": "± 187707.65923262146"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2152779.18556701,
            "unit": "ns",
            "range": "± 159020.55366788348"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 14017797.493975904,
            "unit": "ns",
            "range": "± 1345290.649530123"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3288684.1764705884,
            "unit": "ns",
            "range": "± 63268.08774891503"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3435129.098360656,
            "unit": "ns",
            "range": "± 154716.16616261157"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4068371.0714285714,
            "unit": "ns",
            "range": "± 53205.73597289659"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4492414.346153846,
            "unit": "ns",
            "range": "± 183957.14584859207"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 17323231.670588236,
            "unit": "ns",
            "range": "± 3515476.2855224465"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5126810.005681818,
            "unit": "ns",
            "range": "± 494578.76063457073"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1474026.3885074013,
            "unit": "ns",
            "range": "± 101988.07356949283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1012520.6583362926,
            "unit": "ns",
            "range": "± 56261.99236133251"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2453779.575294066,
            "unit": "ns",
            "range": "± 167506.22086858505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 633574.3414481027,
            "unit": "ns",
            "range": "± 11024.93279546982"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563664.3168569711,
            "unit": "ns",
            "range": "± 6518.082399602529"
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
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "9e2150d34868228b0e517cb51c6732355e48dd96",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-12-08T16:14:43+09:00",
          "tree_id": "8f4623e411de17a75374ad7cc6e532efdd3f7924",
          "url": "https://github.com/limebell/libplanet/commit/9e2150d34868228b0e517cb51c6732355e48dd96"
        },
        "date": 1702020715041,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8011275.714285715,
            "unit": "ns",
            "range": "± 122760.2243519885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21844079.592783507,
            "unit": "ns",
            "range": "± 1261126.2614638773"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51726669.125,
            "unit": "ns",
            "range": "± 1325765.8501686722"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107927627.05263157,
            "unit": "ns",
            "range": "± 3623512.165602721"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 228499139.4375,
            "unit": "ns",
            "range": "± 4240410.410107894"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67699.27272727272,
            "unit": "ns",
            "range": "± 6432.609510934671"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 336376.7268041237,
            "unit": "ns",
            "range": "± 43455.54575643586"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 348596.81313131313,
            "unit": "ns",
            "range": "± 48608.83483538778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 321809.64285714284,
            "unit": "ns",
            "range": "± 19269.08293698374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4267328.452830189,
            "unit": "ns",
            "range": "± 177306.35178040186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3715541.714285714,
            "unit": "ns",
            "range": "± 80294.3409962015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20140.104166666668,
            "unit": "ns",
            "range": "± 3703.107461746906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 89394.66666666667,
            "unit": "ns",
            "range": "± 10966.117114156836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 105780.57575757576,
            "unit": "ns",
            "range": "± 14271.22064848602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115710.0425531915,
            "unit": "ns",
            "range": "± 16658.485922960754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7962.89247311828,
            "unit": "ns",
            "range": "± 2216.8180264120324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23454.3595505618,
            "unit": "ns",
            "range": "± 7571.817942882901"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1497831.0869565217,
            "unit": "ns",
            "range": "± 95804.63591597411"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2840475.5405405406,
            "unit": "ns",
            "range": "± 95309.65798286558"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3011047.5353535353,
            "unit": "ns",
            "range": "± 356516.6509831928"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 19852979.27922078,
            "unit": "ns",
            "range": "± 1420167.0892441496"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3400869.831578947,
            "unit": "ns",
            "range": "± 232178.30082368932"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3450631.966666667,
            "unit": "ns",
            "range": "± 172550.66215802007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4373790.630136986,
            "unit": "ns",
            "range": "± 217789.55173563428"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4700987.8125,
            "unit": "ns",
            "range": "± 283092.75085583236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22535034.554347824,
            "unit": "ns",
            "range": "± 2608723.5996859972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6158747.105646307,
            "unit": "ns",
            "range": "± 230523.96059680654"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1852927.1484375,
            "unit": "ns",
            "range": "± 13616.11784128173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1063979.2188802084,
            "unit": "ns",
            "range": "± 5137.142631000327"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2577427.305836397,
            "unit": "ns",
            "range": "± 50545.7438923364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 788628.4309430803,
            "unit": "ns",
            "range": "± 2117.1971189280093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 789770.2701822916,
            "unit": "ns",
            "range": "± 9288.412421379964"
          }
        ]
      }
    ]
  }
}