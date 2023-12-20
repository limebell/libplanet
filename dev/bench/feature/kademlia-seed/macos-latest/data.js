window.BENCHMARK_DATA = {
  "lastUpdate": 1703068012061,
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
          "id": "3edb6a9fc98022381bc83521d4c021a338012fcc",
          "message": "feat: use seed in kademlia peer discovery",
          "timestamp": "2023-12-20T19:08:42+09:00",
          "tree_id": "cc7fd15586c357f666653c5db1ff924ce99c6151",
          "url": "https://github.com/limebell/libplanet/commit/3edb6a9fc98022381bc83521d4c021a338012fcc"
        },
        "date": 1703068000623,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7843984.115384615,
            "unit": "ns",
            "range": "± 273893.82410368015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19015442.714285713,
            "unit": "ns",
            "range": "± 159956.3306037613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47875225.23214286,
            "unit": "ns",
            "range": "± 2060096.775996621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95785889.42553191,
            "unit": "ns",
            "range": "± 3724868.2356073596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194848512,
            "unit": "ns",
            "range": "± 5083018.745799554"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43902.893939393936,
            "unit": "ns",
            "range": "± 12759.9120893093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 219345.52631578947,
            "unit": "ns",
            "range": "± 18629.68215192484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 215450.76923076922,
            "unit": "ns",
            "range": "± 22702.21528743979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 196755.39130434784,
            "unit": "ns",
            "range": "± 18413.09333889167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3917919.210526316,
            "unit": "ns",
            "range": "± 98440.23643462989"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3465014.8181818184,
            "unit": "ns",
            "range": "± 82325.51220359589"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13390.065934065935,
            "unit": "ns",
            "range": "± 2323.608323287047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61363.177777777775,
            "unit": "ns",
            "range": "± 7419.702207261721"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52467.92682926829,
            "unit": "ns",
            "range": "± 4129.035512826801"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 62202.65957446808,
            "unit": "ns",
            "range": "± 11079.385537242773"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3794.2340425531916,
            "unit": "ns",
            "range": "± 1105.614706902439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12042.505747126437,
            "unit": "ns",
            "range": "± 886.8984089270226"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1363772.6333333333,
            "unit": "ns",
            "range": "± 251072.4941130896"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2549519.7527472526,
            "unit": "ns",
            "range": "± 208159.39529102287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2001601.5303030303,
            "unit": "ns",
            "range": "± 186804.63241882337"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 21045068.74468085,
            "unit": "ns",
            "range": "± 3234740.289189741"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2873840.922222222,
            "unit": "ns",
            "range": "± 158066.1351661534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2973530.1578947366,
            "unit": "ns",
            "range": "± 150934.02598822684"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3470530.153846154,
            "unit": "ns",
            "range": "± 56484.408916452565"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3645224.2837837837,
            "unit": "ns",
            "range": "± 174801.48247768902"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 22214961.195652176,
            "unit": "ns",
            "range": "± 3350427.1504008155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4758706.073730469,
            "unit": "ns",
            "range": "± 144030.6504353905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1459621.5129616477,
            "unit": "ns",
            "range": "± 35570.8605330367"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 928672.8015020462,
            "unit": "ns",
            "range": "± 33854.45076927447"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2255277.318598533,
            "unit": "ns",
            "range": "± 174820.6968726986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 690735.4792844083,
            "unit": "ns",
            "range": "± 49760.14026546965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 601933.248186384,
            "unit": "ns",
            "range": "± 23862.76976049737"
          }
        ]
      }
    ]
  }
}