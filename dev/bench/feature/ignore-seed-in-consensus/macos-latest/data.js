window.BENCHMARK_DATA = {
  "lastUpdate": 1682669905394,
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
          "id": "01e6999f7023d54bfe9ee8540addaf0695bdeb2f",
          "message": "test: add regression test\n\n(cherry picked from commit 39e90e6de7b0babecc117fafbdf00cfdcfc8cb2a)",
          "timestamp": "2023-04-28T16:54:03+09:00",
          "tree_id": "50a677c7bc8dc80727c0f79c7c99b926394c55ab",
          "url": "https://github.com/limebell/libplanet/commit/01e6999f7023d54bfe9ee8540addaf0695bdeb2f"
        },
        "date": 1682669897003,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9789982.717391305,
            "unit": "ns",
            "range": "± 1407872.2939376303"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26895562.3,
            "unit": "ns",
            "range": "± 4888338.41232503"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62151957.51123595,
            "unit": "ns",
            "range": "± 4069708.576025562"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 120987567.03571428,
            "unit": "ns",
            "range": "± 3032074.163848893"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235442309.92857143,
            "unit": "ns",
            "range": "± 1897339.0458543396"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 72190.07608695653,
            "unit": "ns",
            "range": "± 10075.925932129096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 389829.64556962025,
            "unit": "ns",
            "range": "± 19191.509223691213"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 370892.706185567,
            "unit": "ns",
            "range": "± 23220.39182348591"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 313881.87012987013,
            "unit": "ns",
            "range": "± 16098.287644596709"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5002256.458333333,
            "unit": "ns",
            "range": "± 128865.12187419202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4495706.394736842,
            "unit": "ns",
            "range": "± 99490.9667897849"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21630.226315789474,
            "unit": "ns",
            "range": "± 2128.8452140953573"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 106651.52127659574,
            "unit": "ns",
            "range": "± 10067.418010195839"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98333.15957446808,
            "unit": "ns",
            "range": "± 7821.841541689171"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116279.89130434782,
            "unit": "ns",
            "range": "± 11274.46838536837"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7065.2040816326535,
            "unit": "ns",
            "range": "± 671.7484642025065"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21871.378947368423,
            "unit": "ns",
            "range": "± 1728.1312017945577"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 2032947.9655172413,
            "unit": "ns",
            "range": "± 276832.8032330542"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3817289.769230769,
            "unit": "ns",
            "range": "± 317281.1069488197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3320530.593023256,
            "unit": "ns",
            "range": "± 451842.8330251605"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9060906.296703296,
            "unit": "ns",
            "range": "± 1100380.070645396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3889027.7375,
            "unit": "ns",
            "range": "± 201764.8361881512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4321159.342105263,
            "unit": "ns",
            "range": "± 148145.29677865768"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5373129.137931035,
            "unit": "ns",
            "range": "± 155448.4808924359"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5156116.841772152,
            "unit": "ns",
            "range": "± 259900.5269445377"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9583901.318181818,
            "unit": "ns",
            "range": "± 344488.73125703615"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7417026.020432692,
            "unit": "ns",
            "range": "± 50706.64767804732"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2374236.163802083,
            "unit": "ns",
            "range": "± 43591.280514864"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1499168.030078125,
            "unit": "ns",
            "range": "± 19460.757738055814"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3197058.4893229166,
            "unit": "ns",
            "range": "± 31505.057290246514"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 954877.7776925223,
            "unit": "ns",
            "range": "± 4849.470603018454"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 900727.7520282452,
            "unit": "ns",
            "range": "± 7569.715812891351"
          }
        ]
      }
    ]
  }
}