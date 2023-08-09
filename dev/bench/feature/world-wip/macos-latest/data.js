window.BENCHMARK_DATA = {
  "lastUpdate": 1691550794913,
  "repoUrl": "https://github.com/limebell/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu.yi@gmail.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "distinct": true,
          "id": "f6f3d48aed11a3c3883db57b87cd134dee39353d",
          "message": "fix test",
          "timestamp": "2023-08-09T11:46:58+09:00",
          "tree_id": "85a1d0e44b14a0b54b7bca7e6116d3602dc9bc35",
          "url": "https://github.com/limebell/libplanet/commit/f6f3d48aed11a3c3883db57b87cd134dee39353d"
        },
        "date": 1691550785668,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9693465.826530613,
            "unit": "ns",
            "range": "± 637108.2271132407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26296896.6,
            "unit": "ns",
            "range": "± 1883793.6121430565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60021729.73863637,
            "unit": "ns",
            "range": "± 3303414.786525489"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 118880922.71428572,
            "unit": "ns",
            "range": "± 2033990.3970480207"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245212413.475,
            "unit": "ns",
            "range": "± 8381318.683972932"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 91455.65934065935,
            "unit": "ns",
            "range": "± 15577.425596904843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 400711.7052631579,
            "unit": "ns",
            "range": "± 58608.65704187933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 443706.1875,
            "unit": "ns",
            "range": "± 98182.23815273444"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 370448.06043956045,
            "unit": "ns",
            "range": "± 53837.993446018474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4851084.621212121,
            "unit": "ns",
            "range": "± 459055.6827192338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4400247.283505155,
            "unit": "ns",
            "range": "± 451491.7347804578"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25508.41237113402,
            "unit": "ns",
            "range": "± 6044.491893025034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 150859.8350515464,
            "unit": "ns",
            "range": "± 37745.747783326646"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 132638.75268817204,
            "unit": "ns",
            "range": "± 20855.139708837447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 165713.7857142857,
            "unit": "ns",
            "range": "± 45701.20479096104"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9430.95652173913,
            "unit": "ns",
            "range": "± 1968.6444095558952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29079.573033707864,
            "unit": "ns",
            "range": "± 6758.76068838814"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1843506.3737373736,
            "unit": "ns",
            "range": "± 244503.12829118408"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3362655.25,
            "unit": "ns",
            "range": "± 296481.2662064307"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2410533.118556701,
            "unit": "ns",
            "range": "± 309722.59832592006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6641423.8802816905,
            "unit": "ns",
            "range": "± 312220.1440316645"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3834082.2802197803,
            "unit": "ns",
            "range": "± 416165.3184088373"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4107590.89,
            "unit": "ns",
            "range": "± 410473.5095947954"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5708959.117021277,
            "unit": "ns",
            "range": "± 1226172.2435636309"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4443620.617021277,
            "unit": "ns",
            "range": "± 435514.4976257591"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8849385.5625,
            "unit": "ns",
            "range": "± 909772.7101597094"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8130519.865583882,
            "unit": "ns",
            "range": "± 843272.8712371623"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2339323.129464286,
            "unit": "ns",
            "range": "± 136247.90113025633"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1553261.8398632812,
            "unit": "ns",
            "range": "± 107347.97042860436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2742575.070772059,
            "unit": "ns",
            "range": "± 54738.904293436615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 989428.4807942709,
            "unit": "ns",
            "range": "± 52781.224369960655"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 809960.9199707031,
            "unit": "ns",
            "range": "± 17571.695083171737"
          }
        ]
      }
    ]
  }
}