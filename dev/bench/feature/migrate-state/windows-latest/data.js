window.BENCHMARK_DATA = {
  "lastUpdate": 1701149674182,
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
          "id": "73186ba1c6ea1e114550f77a6e70c3358b9d680f",
          "message": "feat: migrate stae if protocol version has increased to 5",
          "timestamp": "2023-11-27T14:02:54+09:00",
          "tree_id": "45c2fc8bcc9e842b02120ae99cc8efc6a22735c6",
          "url": "https://github.com/limebell/libplanet/commit/73186ba1c6ea1e114550f77a6e70c3358b9d680f"
        },
        "date": 1701062212243,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1096139.7959183673,
            "unit": "ns",
            "range": "± 150560.5537938832"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1818301.851851852,
            "unit": "ns",
            "range": "± 76230.80021990008"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1708149.4623655914,
            "unit": "ns",
            "range": "± 139098.35246082715"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7448117.808219178,
            "unit": "ns",
            "range": "± 312750.04855780146"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35237.5,
            "unit": "ns",
            "range": "± 1536.0741549560066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4963914.285714285,
            "unit": "ns",
            "range": "± 36343.69286394836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13198507.692307692,
            "unit": "ns",
            "range": "± 65729.66683746467"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33388606.25,
            "unit": "ns",
            "range": "± 609423.9153700813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68526146.66666667,
            "unit": "ns",
            "range": "± 1280852.4961729127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 131256866.66666667,
            "unit": "ns",
            "range": "± 1362236.7801663906"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3254401.6927083335,
            "unit": "ns",
            "range": "± 7682.24359583805"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1067898.203125,
            "unit": "ns",
            "range": "± 5005.363203861305"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 735354.16015625,
            "unit": "ns",
            "range": "± 1994.5433718846782"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1911713.5463169643,
            "unit": "ns",
            "range": "± 2296.93502843471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 623410.2213541666,
            "unit": "ns",
            "range": "± 920.9034576379353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 567986.5304129465,
            "unit": "ns",
            "range": "± 1192.395252772252"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2179865.625,
            "unit": "ns",
            "range": "± 54799.509118209935"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2318691.304347826,
            "unit": "ns",
            "range": "± 65554.57040117869"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2795774.193548387,
            "unit": "ns",
            "range": "± 85034.1969160719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2924098.214285714,
            "unit": "ns",
            "range": "± 124883.17084535294"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9706521.505376345,
            "unit": "ns",
            "range": "± 2794044.309265905"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 173562.68656716417,
            "unit": "ns",
            "range": "± 8005.828100958049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168901.16279069768,
            "unit": "ns",
            "range": "± 9286.150271630599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 145704.7619047619,
            "unit": "ns",
            "range": "± 5297.351035254175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2821093.3333333335,
            "unit": "ns",
            "range": "± 46811.01010090112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2494980,
            "unit": "ns",
            "range": "± 45886.38453522227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 11268.965517241379,
            "unit": "ns",
            "range": "± 1330.5279896925329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 57980.208333333336,
            "unit": "ns",
            "range": "± 6086.855895532803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45483.333333333336,
            "unit": "ns",
            "range": "± 2344.178568320502"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 58477.52808988764,
            "unit": "ns",
            "range": "± 7194.833259944703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2609.375,
            "unit": "ns",
            "range": "± 519.7323450838093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 10706.382978723404,
            "unit": "ns",
            "range": "± 1583.640050244821"
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
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "distinct": true,
          "id": "98914965b2a82b0c5c77178b74d525436924d2c7",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-11-27T17:29:40+09:00",
          "tree_id": "b6944d1bd4caae010e0e33f5d500a9c14a66bba5",
          "url": "https://github.com/limebell/libplanet/commit/98914965b2a82b0c5c77178b74d525436924d2c7"
        },
        "date": 1701074503339,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1031087.3684210526,
            "unit": "ns",
            "range": "± 101539.8865576974"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1767683.9285714286,
            "unit": "ns",
            "range": "± 75662.07835269495"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1699913.1313131314,
            "unit": "ns",
            "range": "± 224053.4086503705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7171805.9701492535,
            "unit": "ns",
            "range": "± 280943.191108957"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34086.27450980392,
            "unit": "ns",
            "range": "± 1389.966849654068"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4848426.666666667,
            "unit": "ns",
            "range": "± 36570.3132270399"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13060092.857142856,
            "unit": "ns",
            "range": "± 72501.97306902136"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32581757.692307692,
            "unit": "ns",
            "range": "± 183401.3516014284"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63497307.14285714,
            "unit": "ns",
            "range": "± 457024.5094661196"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130003669.23076923,
            "unit": "ns",
            "range": "± 807346.3882628233"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3220158.7332589286,
            "unit": "ns",
            "range": "± 6602.062599484569"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1055588.2161458333,
            "unit": "ns",
            "range": "± 1664.8646232897497"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 745739.2020089285,
            "unit": "ns",
            "range": "± 1825.0876578348634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1961310.3515625,
            "unit": "ns",
            "range": "± 4288.751977841533"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614700.8528645834,
            "unit": "ns",
            "range": "± 1730.268775569044"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 557088.4505208334,
            "unit": "ns",
            "range": "± 1048.6497101630462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2165970.8333333335,
            "unit": "ns",
            "range": "± 51869.078324488124"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2293788.3333333335,
            "unit": "ns",
            "range": "± 102426.52445743427"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2788042.8571428573,
            "unit": "ns",
            "range": "± 48230.24448949522"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2894001,
            "unit": "ns",
            "range": "± 299912.8383464944"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8494603.086419754,
            "unit": "ns",
            "range": "± 1340835.7739751744"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 167339.68253968254,
            "unit": "ns",
            "range": "± 6566.865498716919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 157880,
            "unit": "ns",
            "range": "± 6969.240908490659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139696.66666666666,
            "unit": "ns",
            "range": "± 4185.729725308758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2799721.4285714286,
            "unit": "ns",
            "range": "± 48797.953591572616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2450653.3333333335,
            "unit": "ns",
            "range": "± 43067.98391026956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10986.315789473685,
            "unit": "ns",
            "range": "± 1656.1690302209297"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 52315.38461538462,
            "unit": "ns",
            "range": "± 3816.016628106186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44056.25,
            "unit": "ns",
            "range": "± 1745.3776339538624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 50381.17647058824,
            "unit": "ns",
            "range": "± 5847.06874298174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2495.744680851064,
            "unit": "ns",
            "range": "± 397.7530691316666"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 9919.565217391304,
            "unit": "ns",
            "range": "± 1581.9197636280721"
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
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "distinct": true,
          "id": "255f180b2d949d05246640865338e4ad7661376e",
          "message": "docs: update CHANGES.md",
          "timestamp": "2023-11-27T17:30:10+09:00",
          "tree_id": "c21e21a8b01befe44fd3c52fe70a4a0806f05b78",
          "url": "https://github.com/limebell/libplanet/commit/255f180b2d949d05246640865338e4ad7661376e"
        },
        "date": 1701074621468,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015691.8367346938,
            "unit": "ns",
            "range": "± 112990.11331028027"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1829545.1612903227,
            "unit": "ns",
            "range": "± 110606.09849933884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1623618,
            "unit": "ns",
            "range": "± 175345.3005364045"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7167152.564102564,
            "unit": "ns",
            "range": "± 463517.7295882981"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 33932.91139240506,
            "unit": "ns",
            "range": "± 1665.0803876018244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5035515.384615385,
            "unit": "ns",
            "range": "± 11670.53598839446"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 12746733.333333334,
            "unit": "ns",
            "range": "± 154933.45422501635"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32422128.57142857,
            "unit": "ns",
            "range": "± 393230.34828607365"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 63742757.14285714,
            "unit": "ns",
            "range": "± 618256.4310708296"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 130907815.38461539,
            "unit": "ns",
            "range": "± 1487852.3027315547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3291955.603966346,
            "unit": "ns",
            "range": "± 7266.579264391342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1072966.3541666667,
            "unit": "ns",
            "range": "± 2995.01093090879"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 749125.8984375,
            "unit": "ns",
            "range": "± 2146.4990837478827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1933193.0989583333,
            "unit": "ns",
            "range": "± 4908.508532722941"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612152.8125,
            "unit": "ns",
            "range": "± 905.6427705155752"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 563507.1149553572,
            "unit": "ns",
            "range": "± 573.7067051609199"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2083989.189189189,
            "unit": "ns",
            "range": "± 37040.91419396023"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2258925,
            "unit": "ns",
            "range": "± 98461.26421515955"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2801732.7586206896,
            "unit": "ns",
            "range": "± 115286.45846124862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2782197.9591836734,
            "unit": "ns",
            "range": "± 178765.25526689325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8807961.176470589,
            "unit": "ns",
            "range": "± 1524282.888075423"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 175977.46478873238,
            "unit": "ns",
            "range": "± 8605.466654285992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 161782.41758241758,
            "unit": "ns",
            "range": "± 9135.226001055153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138229.16666666666,
            "unit": "ns",
            "range": "± 3556.192292774451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2762831.25,
            "unit": "ns",
            "range": "± 41622.37729475176"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2376200,
            "unit": "ns",
            "range": "± 19873.01352756211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 10941.111111111111,
            "unit": "ns",
            "range": "± 1421.9700248460056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 56003.22580645161,
            "unit": "ns",
            "range": "± 6067.311767971181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 44479.26829268293,
            "unit": "ns",
            "range": "± 2368.0870961667806"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52310.10101010101,
            "unit": "ns",
            "range": "± 11462.374072479397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2581.9148936170213,
            "unit": "ns",
            "range": "± 425.2672192078579"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14691.836734693878,
            "unit": "ns",
            "range": "± 2916.6664161982794"
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
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "distinct": true,
          "id": "4090f2c08e1dc9bfc36343d2e39fdbe4cc719a77",
          "message": "chore: apply suggestions from the code review",
          "timestamp": "2023-11-28T14:02:56+09:00",
          "tree_id": "24ccdb8812b8876e89081ca0b38e36135ebe06cf",
          "url": "https://github.com/limebell/libplanet/commit/4090f2c08e1dc9bfc36343d2e39fdbe4cc719a77"
        },
        "date": 1701148563994,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1111760.606060606,
            "unit": "ns",
            "range": "± 173836.40140284246"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1808425,
            "unit": "ns",
            "range": "± 83144.27315654494"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1726408.0808080807,
            "unit": "ns",
            "range": "± 162357.8534814237"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7507505.194805195,
            "unit": "ns",
            "range": "± 617177.8432800523"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35011.36363636364,
            "unit": "ns",
            "range": "± 2272.6475430111113"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5142006.666666667,
            "unit": "ns",
            "range": "± 83747.08068828144"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13078456.25,
            "unit": "ns",
            "range": "± 240268.0613224876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32919860,
            "unit": "ns",
            "range": "± 396119.6478698973"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 66770442.85714286,
            "unit": "ns",
            "range": "± 1037792.2733559749"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 128989873.33333333,
            "unit": "ns",
            "range": "± 1101651.186995922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3310318.4244791665,
            "unit": "ns",
            "range": "± 6635.787389906275"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1061225.5859375,
            "unit": "ns",
            "range": "± 3841.030718338182"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 746977.24609375,
            "unit": "ns",
            "range": "± 2040.0913078913566"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1955567.857142857,
            "unit": "ns",
            "range": "± 8863.981192153553"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 632319.2447916666,
            "unit": "ns",
            "range": "± 1444.1969394841565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559199.7981770834,
            "unit": "ns",
            "range": "± 1797.835965798911"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2189663.1578947366,
            "unit": "ns",
            "range": "± 95015.95473464095"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2320288.095238095,
            "unit": "ns",
            "range": "± 84239.71878320604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2798546.6666666665,
            "unit": "ns",
            "range": "± 105258.4365005744"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2851240.804597701,
            "unit": "ns",
            "range": "± 155939.88006129523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9750728.260869564,
            "unit": "ns",
            "range": "± 2636812.0378458546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 185322.22222222222,
            "unit": "ns",
            "range": "± 7667.123311530461"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168931.39534883722,
            "unit": "ns",
            "range": "± 10485.421382066985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 144249.01960784313,
            "unit": "ns",
            "range": "± 5830.415853059527"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2850260,
            "unit": "ns",
            "range": "± 46605.05490670667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2500323.529411765,
            "unit": "ns",
            "range": "± 48854.48456144745"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12334.408602150537,
            "unit": "ns",
            "range": "± 1980.1457249654916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64619.19191919192,
            "unit": "ns",
            "range": "± 10328.252087215767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45558.88888888889,
            "unit": "ns",
            "range": "± 2989.979310906756"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 70758.33333333333,
            "unit": "ns",
            "range": "± 8294.305804100173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4350.515463917526,
            "unit": "ns",
            "range": "± 999.5961383791672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13781.720430107527,
            "unit": "ns",
            "range": "± 2102.376824523964"
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
            "name": "Ko Chanhyuck",
            "username": "limebell"
          },
          "distinct": true,
          "id": "2f7fa26afb44238d16c7744fcea9774d94d8688a",
          "message": "chore: apply suggestions from the code review",
          "timestamp": "2023-11-28T14:20:58+09:00",
          "tree_id": "598a86a1dcde3045a367b5738f86d3b018ab0fc0",
          "url": "https://github.com/limebell/libplanet/commit/2f7fa26afb44238d16c7744fcea9774d94d8688a"
        },
        "date": 1701149650085,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1038615.306122449,
            "unit": "ns",
            "range": "± 105801.18034931079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1790012.676056338,
            "unit": "ns",
            "range": "± 79818.05726521763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1671055.1020408163,
            "unit": "ns",
            "range": "± 195614.7350312079"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7336232.894736842,
            "unit": "ns",
            "range": "± 373166.9826009647"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35272.72727272727,
            "unit": "ns",
            "range": "± 2122.6597538258493"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 4937913.333333333,
            "unit": "ns",
            "range": "± 34963.447579817795"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13543533.333333334,
            "unit": "ns",
            "range": "± 158474.71932982455"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 32918625,
            "unit": "ns",
            "range": "± 226500.532309228"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65805535.71428572,
            "unit": "ns",
            "range": "± 522327.818677921"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 129874206.66666667,
            "unit": "ns",
            "range": "± 837759.6582268574"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3338578.155048077,
            "unit": "ns",
            "range": "± 9039.318731430818"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1047980.4547991072,
            "unit": "ns",
            "range": "± 5823.60317801099"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 744981.7643229166,
            "unit": "ns",
            "range": "± 1543.5882472439223"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1898447.7764423077,
            "unit": "ns",
            "range": "± 4901.138545477687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615862.9115513393,
            "unit": "ns",
            "range": "± 1582.595575662743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 571288.0403645834,
            "unit": "ns",
            "range": "± 1473.8182635135852"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2252700,
            "unit": "ns",
            "range": "± 64948.82600940528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2311647.0588235296,
            "unit": "ns",
            "range": "± 91921.2496715339"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2954458.3333333335,
            "unit": "ns",
            "range": "± 45339.335888253576"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3064437.373737374,
            "unit": "ns",
            "range": "± 235563.2696264721"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9280354.65116279,
            "unit": "ns",
            "range": "± 1944128.6977888956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 176898.5294117647,
            "unit": "ns",
            "range": "± 8370.764558726372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 168453.33333333334,
            "unit": "ns",
            "range": "± 8046.9959701831685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 139840,
            "unit": "ns",
            "range": "± 3596.4102472697223"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2820900,
            "unit": "ns",
            "range": "± 35227.181063977936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2472928.5714285714,
            "unit": "ns",
            "range": "± 25811.78706808871"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12310.869565217392,
            "unit": "ns",
            "range": "± 1866.0327854639056"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59116.32653061225,
            "unit": "ns",
            "range": "± 7096.488079855859"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45701.78571428572,
            "unit": "ns",
            "range": "± 1957.130652156465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60464.583333333336,
            "unit": "ns",
            "range": "± 10350.712959595096"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2882.978723404255,
            "unit": "ns",
            "range": "± 572.7951270803155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12427.835051546392,
            "unit": "ns",
            "range": "± 2521.315061465992"
          }
        ]
      }
    ]
  }
}