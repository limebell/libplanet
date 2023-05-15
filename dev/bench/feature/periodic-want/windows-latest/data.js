window.BENCHMARK_DATA = {
  "lastUpdate": 1684135340790,
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
          "id": "6555351be63be4f12921346a3ea8a5489de2f1b7",
          "message": "feat: optimize message request",
          "timestamp": "2023-05-11T17:48:50+09:00",
          "tree_id": "f8d431c128bcc9d62f63ca253d6198e560e5f01f",
          "url": "https://github.com/limebell/libplanet/commit/6555351be63be4f12921346a3ea8a5489de2f1b7"
        },
        "date": 1683795790905,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1312774,
            "unit": "ns",
            "range": "± 103248.46624438632"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2395921.276595745,
            "unit": "ns",
            "range": "± 92420.47094939946"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2082087.3737373736,
            "unit": "ns",
            "range": "± 125000.28211058662"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4881950,
            "unit": "ns",
            "range": "± 167636.82108589326"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41258.10810810811,
            "unit": "ns",
            "range": "± 1965.5775237449086"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6657578.571428572,
            "unit": "ns",
            "range": "± 45507.06079739256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17353373.333333332,
            "unit": "ns",
            "range": "± 122567.38360513993"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 44168786.666666664,
            "unit": "ns",
            "range": "± 312624.1715969299"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 87714853.33333333,
            "unit": "ns",
            "range": "± 610504.4048825138"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 176029286.66666666,
            "unit": "ns",
            "range": "± 1015174.0068063396"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4749107.03125,
            "unit": "ns",
            "range": "± 4196.499692694587"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1482860.3515625,
            "unit": "ns",
            "range": "± 1203.3766482772821"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1150467.2688802083,
            "unit": "ns",
            "range": "± 2277.217022464797"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2556772.9910714286,
            "unit": "ns",
            "range": "± 17289.458272538843"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 852898.7760416666,
            "unit": "ns",
            "range": "± 8185.866752958653"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 815556.1979166666,
            "unit": "ns",
            "range": "± 8207.332617274058"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2935972.5,
            "unit": "ns",
            "range": "± 102075.95459465592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3047547.3684210526,
            "unit": "ns",
            "range": "± 98234.59713343719"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3959804.1666666665,
            "unit": "ns",
            "range": "± 101257.89493284898"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3786458.5714285714,
            "unit": "ns",
            "range": "± 172521.31688732933"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6273123.076923077,
            "unit": "ns",
            "range": "± 201826.61065684765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 248901.85185185185,
            "unit": "ns",
            "range": "± 8181.444508263132"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236013.20754716982,
            "unit": "ns",
            "range": "± 9268.475057872438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 210907.57575757575,
            "unit": "ns",
            "range": "± 9889.513647620906"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3822992.8571428573,
            "unit": "ns",
            "range": "± 44969.587403141595"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3452833.3333333335,
            "unit": "ns",
            "range": "± 51416.30740014949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15462.5,
            "unit": "ns",
            "range": "± 1425.0577088961031"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 76191.02564102564,
            "unit": "ns",
            "range": "± 3909.0699029088114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 64190.47619047619,
            "unit": "ns",
            "range": "± 1491.2762191843476"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 78406.31578947368,
            "unit": "ns",
            "range": "± 10703.089736109667"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3644.2105263157896,
            "unit": "ns",
            "range": "± 505.4418310437603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15188.659793814433,
            "unit": "ns",
            "range": "± 1576.3801022609123"
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
          "id": "3324b76ba67e2a284a6e6b0e719ee90117265897",
          "message": "test: add regression test",
          "timestamp": "2023-05-11T19:26:41+09:00",
          "tree_id": "1f4ef5c278f6eaaef435b2c28cb2cd49f9a7a38f",
          "url": "https://github.com/limebell/libplanet/commit/3324b76ba67e2a284a6e6b0e719ee90117265897"
        },
        "date": 1683801915108,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1443190.5263157894,
            "unit": "ns",
            "range": "± 115052.78998686907"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2744598.1818181816,
            "unit": "ns",
            "range": "± 113884.56711189021"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2361567.3469387754,
            "unit": "ns",
            "range": "± 156583.8971954969"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5682187.719298245,
            "unit": "ns",
            "range": "± 244867.27678346157"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 59022.916666666664,
            "unit": "ns",
            "range": "± 5482.67086597047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8060370,
            "unit": "ns",
            "range": "± 49451.248720330615"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20690966.666666668,
            "unit": "ns",
            "range": "± 285999.4222438387"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51611484.615384616,
            "unit": "ns",
            "range": "± 243719.36677988834"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 105290792.3076923,
            "unit": "ns",
            "range": "± 646930.5043324959"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 209551671.42857143,
            "unit": "ns",
            "range": "± 2215686.1758584203"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4972329.447115385,
            "unit": "ns",
            "range": "± 40685.01719208371"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1550496.015625,
            "unit": "ns",
            "range": "± 7284.166194754012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1187936.9921875,
            "unit": "ns",
            "range": "± 6582.888768274827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2717586.9921875,
            "unit": "ns",
            "range": "± 12643.033813941689"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 865935.5050223215,
            "unit": "ns",
            "range": "± 2997.848417941917"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 788907.59765625,
            "unit": "ns",
            "range": "± 3273.1498068368396"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3488376.470588235,
            "unit": "ns",
            "range": "± 67567.17517970323"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3623610.2564102565,
            "unit": "ns",
            "range": "± 126526.53517173424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4457595.833333333,
            "unit": "ns",
            "range": "± 109740.55165496588"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4628477.2727272725,
            "unit": "ns",
            "range": "± 113594.25258691225"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7030394.285714285,
            "unit": "ns",
            "range": "± 228072.8430372464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 300096.92307692306,
            "unit": "ns",
            "range": "± 13998.526364750522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 281670.7792207792,
            "unit": "ns",
            "range": "± 14414.058722598222"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 276257.57575757575,
            "unit": "ns",
            "range": "± 12887.863230497855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4202992.857142857,
            "unit": "ns",
            "range": "± 54158.19725277356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3839200,
            "unit": "ns",
            "range": "± 35326.821053050975"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29135.416666666668,
            "unit": "ns",
            "range": "± 3565.6247453372607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114948.9898989899,
            "unit": "ns",
            "range": "± 12841.87581623062"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 108562,
            "unit": "ns",
            "range": "± 15419.827063448754"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 123985.71428571429,
            "unit": "ns",
            "range": "± 24749.953660271105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8128.571428571428,
            "unit": "ns",
            "range": "± 1539.246033132931"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25372.448979591838,
            "unit": "ns",
            "range": "± 3554.0533158067406"
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
          "id": "a6487ebedb6173c9b0a3cb95e89395c6cc988f19",
          "message": "test: add regression test",
          "timestamp": "2023-05-11T19:31:26+09:00",
          "tree_id": "4fb131000ceaa2618fe8957830110f52347ccd28",
          "url": "https://github.com/limebell/libplanet/commit/a6487ebedb6173c9b0a3cb95e89395c6cc988f19"
        },
        "date": 1683802367033,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1510565.306122449,
            "unit": "ns",
            "range": "± 167688.85774174164"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2722978.2608695654,
            "unit": "ns",
            "range": "± 104139.64057519325"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2370914.432989691,
            "unit": "ns",
            "range": "± 208154.8086709799"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5533523.880597015,
            "unit": "ns",
            "range": "± 259352.95541343366"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54981.44329896907,
            "unit": "ns",
            "range": "± 4726.109435380121"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7085842.307692308,
            "unit": "ns",
            "range": "± 172887.45512171072"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20451607.14285714,
            "unit": "ns",
            "range": "± 224012.72101339285"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 51066838.461538464,
            "unit": "ns",
            "range": "± 455836.94734422583"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 102546246.66666667,
            "unit": "ns",
            "range": "± 1250877.929334129"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205073900,
            "unit": "ns",
            "range": "± 1297529.2372153206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4941816.462053572,
            "unit": "ns",
            "range": "± 22771.687186300536"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1536008.1770833333,
            "unit": "ns",
            "range": "± 4242.066575037409"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1199722.8255208333,
            "unit": "ns",
            "range": "± 4681.45385325493"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2638781.5885416665,
            "unit": "ns",
            "range": "± 9508.901269732212"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832632.265625,
            "unit": "ns",
            "range": "± 2076.7609029360133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766140.5794270834,
            "unit": "ns",
            "range": "± 2184.774405360365"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3361436.3636363638,
            "unit": "ns",
            "range": "± 74632.1920548304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3567833.3333333335,
            "unit": "ns",
            "range": "± 118956.72440304398"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4343930.303030303,
            "unit": "ns",
            "range": "± 137482.23631811605"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4558607.692307692,
            "unit": "ns",
            "range": "± 71772.67889592415"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6956582.978723404,
            "unit": "ns",
            "range": "± 254718.32296048882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 275798.3333333333,
            "unit": "ns",
            "range": "± 12323.403278379796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 260668.75,
            "unit": "ns",
            "range": "± 4132.911604829376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 234891.57894736843,
            "unit": "ns",
            "range": "± 15182.735598249767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4090228.5714285714,
            "unit": "ns",
            "range": "± 93811.01290817163"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3844726.6666666665,
            "unit": "ns",
            "range": "± 52125.87055342463"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25843.617021276597,
            "unit": "ns",
            "range": "± 2805.5075829494263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 112834.69387755102,
            "unit": "ns",
            "range": "± 8697.542039805781"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 90498.96907216495,
            "unit": "ns",
            "range": "± 12642.673231010791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125668.0412371134,
            "unit": "ns",
            "range": "± 16702.68532796294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7003.092783505154,
            "unit": "ns",
            "range": "± 1397.3526762124916"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25248.979591836734,
            "unit": "ns",
            "range": "± 2565.2513350450376"
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
          "id": "928b4564df8f8afdafc03d676f45da806e3a303c",
          "message": "test: add regression test",
          "timestamp": "2023-05-15T16:05:27+09:00",
          "tree_id": "173f6a5ecfba4a7c7d57362ef60fa4c8086fc69f",
          "url": "https://github.com/limebell/libplanet/commit/928b4564df8f8afdafc03d676f45da806e3a303c"
        },
        "date": 1684135320589,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1325000,
            "unit": "ns",
            "range": "± 59919.587508702985"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2660403.3898305083,
            "unit": "ns",
            "range": "± 116803.51607559284"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2227219.387755102,
            "unit": "ns",
            "range": "± 149131.6181000765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5376515.384615385,
            "unit": "ns",
            "range": "± 247557.61717651787"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 50121.50537634409,
            "unit": "ns",
            "range": "± 3665.463060561428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7254007.317073171,
            "unit": "ns",
            "range": "± 260779.03806694652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19576421.42857143,
            "unit": "ns",
            "range": "± 270536.75188572647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49260800,
            "unit": "ns",
            "range": "± 839318.0803485649"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99598693.33333333,
            "unit": "ns",
            "range": "± 1755262.8360230867"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 199134080,
            "unit": "ns",
            "range": "± 2604900.088624185"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4771426.875,
            "unit": "ns",
            "range": "± 20286.743678173072"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1513462.8487723214,
            "unit": "ns",
            "range": "± 5620.5073654274565"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1171469.53125,
            "unit": "ns",
            "range": "± 6948.899981255238"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2654516.40625,
            "unit": "ns",
            "range": "± 9462.427881717946"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 826496.484375,
            "unit": "ns",
            "range": "± 3531.0336061864646"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 760515.0325520834,
            "unit": "ns",
            "range": "± 2909.1857772449007"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3140058.1818181816,
            "unit": "ns",
            "range": "± 123297.93739963116"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3387364.9122807016,
            "unit": "ns",
            "range": "± 146878.29691281833"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4100334.090909091,
            "unit": "ns",
            "range": "± 152276.2360534177"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4099710.3174603176,
            "unit": "ns",
            "range": "± 177127.51242526417"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6699110.256410256,
            "unit": "ns",
            "range": "± 232532.3665019241"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 262795.45454545453,
            "unit": "ns",
            "range": "± 9871.451780447484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 258351.51515151514,
            "unit": "ns",
            "range": "± 11975.2211146985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 233723,
            "unit": "ns",
            "range": "± 17934.892660606438"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4069816.6666666665,
            "unit": "ns",
            "range": "± 82371.3060405353"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3757823.076923077,
            "unit": "ns",
            "range": "± 56162.133652579985"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22113.26530612245,
            "unit": "ns",
            "range": "± 2593.9118949142703"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 90098.9247311828,
            "unit": "ns",
            "range": "± 6431.706356583494"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 76525.53191489361,
            "unit": "ns",
            "range": "± 4656.333094406719"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95359.34065934065,
            "unit": "ns",
            "range": "± 11817.294087922139"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6781.958762886598,
            "unit": "ns",
            "range": "± 1280.3438984436116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21015.463917525773,
            "unit": "ns",
            "range": "± 2077.675995663262"
          }
        ]
      }
    ]
  }
}