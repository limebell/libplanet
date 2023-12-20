window.BENCHMARK_DATA = {
  "lastUpdate": 1703067726613,
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
        "date": 1703067710634,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1014142.5531914893,
            "unit": "ns",
            "range": "± 106027.73170348081"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1786996.9696969697,
            "unit": "ns",
            "range": "± 83331.03580982015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1581217.391304348,
            "unit": "ns",
            "range": "± 158799.11534664847"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 10863797.849462366,
            "unit": "ns",
            "range": "± 820077.6735453167"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35298.85057471264,
            "unit": "ns",
            "range": "± 2082.624364798971"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5033342.857142857,
            "unit": "ns",
            "range": "± 47685.74152778737"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13390107.692307692,
            "unit": "ns",
            "range": "± 123928.20812563525"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32880893.333333332,
            "unit": "ns",
            "range": "± 550835.067960672"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66766793.333333336,
            "unit": "ns",
            "range": "± 762543.9410914221"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133182740,
            "unit": "ns",
            "range": "± 1789158.76393668"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3278382.8125,
            "unit": "ns",
            "range": "± 8945.186570116282"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1049188.0258413462,
            "unit": "ns",
            "range": "± 1175.4111751069283"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 737368.9453125,
            "unit": "ns",
            "range": "± 1797.7326723977988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1900909.1517857143,
            "unit": "ns",
            "range": "± 3135.3334399711384"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 630154.4075520834,
            "unit": "ns",
            "range": "± 1292.4929617045134"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 574201.7057291666,
            "unit": "ns",
            "range": "± 1767.9092669305114"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2134618.1818181816,
            "unit": "ns",
            "range": "± 78660.02581828723"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2253005.263157895,
            "unit": "ns",
            "range": "± 77305.72143214945"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2818779.245283019,
            "unit": "ns",
            "range": "± 117537.35307828836"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2887808.536585366,
            "unit": "ns",
            "range": "± 147712.1919633654"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12303590.322580645,
            "unit": "ns",
            "range": "± 1553050.8933025787"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 177734.2857142857,
            "unit": "ns",
            "range": "± 8599.930665616796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 173857.74647887325,
            "unit": "ns",
            "range": "± 8507.150974694021"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144606.97674418605,
            "unit": "ns",
            "range": "± 4893.309102809342"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2897746.6666666665,
            "unit": "ns",
            "range": "± 30012.732218811656"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2567486.6666666665,
            "unit": "ns",
            "range": "± 39645.39005207229"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12610.63829787234,
            "unit": "ns",
            "range": "± 1720.8067678507493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59676.28865979381,
            "unit": "ns",
            "range": "± 6568.9416511191175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 48530.52631578947,
            "unit": "ns",
            "range": "± 3926.4805768072756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 64488.541666666664,
            "unit": "ns",
            "range": "± 12078.723092077562"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3506.060606060606,
            "unit": "ns",
            "range": "± 728.4058890114547"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 11683.908045977012,
            "unit": "ns",
            "range": "± 1334.8524492293443"
          }
        ]
      }
    ]
  }
}