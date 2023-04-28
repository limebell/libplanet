window.BENCHMARK_DATA = {
  "lastUpdate": 1682674276811,
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
        "date": 1682669533217,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1487015.1515151516,
            "unit": "ns",
            "range": "± 142526.36158858784"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2541907.272727273,
            "unit": "ns",
            "range": "± 106477.03256874913"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2282927.8350515463,
            "unit": "ns",
            "range": "± 145613.77835323772"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5619282.142857143,
            "unit": "ns",
            "range": "± 299448.9546221"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 53295.833333333336,
            "unit": "ns",
            "range": "± 4554.417558617744"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7087896.666666667,
            "unit": "ns",
            "range": "± 210794.2966632331"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19813778.57142857,
            "unit": "ns",
            "range": "± 241374.8606455286"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50006773.333333336,
            "unit": "ns",
            "range": "± 443773.3856480397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100036264.28571428,
            "unit": "ns",
            "range": "± 1336664.5304966809"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191258830,
            "unit": "ns",
            "range": "± 4051384.215185303"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4878834.791666667,
            "unit": "ns",
            "range": "± 45746.08008273712"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1529613.8932291667,
            "unit": "ns",
            "range": "± 6062.226669090107"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1192391.1197916667,
            "unit": "ns",
            "range": "± 6724.351112338455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617057.03125,
            "unit": "ns",
            "range": "± 14727.587522647249"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 846121.15234375,
            "unit": "ns",
            "range": "± 2230.745246033345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 770284.7916666666,
            "unit": "ns",
            "range": "± 2031.889955243458"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3197747.8260869565,
            "unit": "ns",
            "range": "± 80665.05872808091"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3342007.2916666665,
            "unit": "ns",
            "range": "± 192168.26193115333"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3968731.8181818184,
            "unit": "ns",
            "range": "± 95745.59736919717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4138105.769230769,
            "unit": "ns",
            "range": "± 161407.84587857366"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6621744.444444444,
            "unit": "ns",
            "range": "± 182496.24513172728"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 280039.1304347826,
            "unit": "ns",
            "range": "± 10661.341968081993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 253603.0303030303,
            "unit": "ns",
            "range": "± 11958.762087941655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 225405.10204081633,
            "unit": "ns",
            "range": "± 16603.485986283024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4039985.714285714,
            "unit": "ns",
            "range": "± 67362.89616858661"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3555321.4285714286,
            "unit": "ns",
            "range": "± 57302.88190593275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23353.684210526317,
            "unit": "ns",
            "range": "± 2144.4540309145086"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92568.0412371134,
            "unit": "ns",
            "range": "± 8439.114615780602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 87990.8163265306,
            "unit": "ns",
            "range": "± 9234.137546839851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 104571.13402061856,
            "unit": "ns",
            "range": "± 16720.346629449243"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6992.929292929293,
            "unit": "ns",
            "range": "± 1243.0420654918112"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22453,
            "unit": "ns",
            "range": "± 3312.0366647558217"
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
          "id": "efe0d5298de9699d5f33524fc892461584a16824",
          "message": "test: add regression test\n\n(cherry picked from commit 39e90e6de7b0babecc117fafbdf00cfdcfc8cb2a)",
          "timestamp": "2023-04-28T18:09:55+09:00",
          "tree_id": "ec1d8a9df9ea2267b743a28e29178caa9fd5d819",
          "url": "https://github.com/limebell/libplanet/commit/efe0d5298de9699d5f33524fc892461584a16824"
        },
        "date": 1682673924024,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1478369.387755102,
            "unit": "ns",
            "range": "± 146462.48202477794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2542050,
            "unit": "ns",
            "range": "± 87186.08787483769"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2321394,
            "unit": "ns",
            "range": "± 186289.2585266908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5413876.0869565215,
            "unit": "ns",
            "range": "± 198833.81467925265"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51952.020202020205,
            "unit": "ns",
            "range": "± 8966.308591315033"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7143307.142857143,
            "unit": "ns",
            "range": "± 43865.16866464806"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17792857.14285714,
            "unit": "ns",
            "range": "± 74224.45910662017"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45971433.333333336,
            "unit": "ns",
            "range": "± 228749.35649141856"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90789053.33333333,
            "unit": "ns",
            "range": "± 515074.0028199369"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 182548573.33333334,
            "unit": "ns",
            "range": "± 1094233.6871506188"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4842597.981770833,
            "unit": "ns",
            "range": "± 10567.189592236784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1510722.0182291667,
            "unit": "ns",
            "range": "± 1848.0765081966874"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1143562.876674107,
            "unit": "ns",
            "range": "± 903.9732501325342"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2583792.3177083335,
            "unit": "ns",
            "range": "± 2754.587162000681"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 818701.5485491072,
            "unit": "ns",
            "range": "± 2401.0117424396585"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 735078.4528459822,
            "unit": "ns",
            "range": "± 968.8081842993136"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2974770.3703703703,
            "unit": "ns",
            "range": "± 81765.77154293474"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3149721.4285714286,
            "unit": "ns",
            "range": "± 43397.57488033756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4078391.4285714286,
            "unit": "ns",
            "range": "± 109810.89995031986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4132588.3720930233,
            "unit": "ns",
            "range": "± 124574.81249912274"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6706955,
            "unit": "ns",
            "range": "± 151040.87447826134"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 262144,
            "unit": "ns",
            "range": "± 9946.513285097057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 264558.06451612903,
            "unit": "ns",
            "range": "± 11977.719047028111"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255465.9090909091,
            "unit": "ns",
            "range": "± 9502.115876533933"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4136264.285714286,
            "unit": "ns",
            "range": "± 49663.70919483372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3649500,
            "unit": "ns",
            "range": "± 43758.96642811783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20964.21052631579,
            "unit": "ns",
            "range": "± 3217.733965091083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 79235.10638297872,
            "unit": "ns",
            "range": "± 5738.807853549274"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 74114,
            "unit": "ns",
            "range": "± 6570.396110624157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 85969.14893617021,
            "unit": "ns",
            "range": "± 10145.09814995415"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4971.134020618557,
            "unit": "ns",
            "range": "± 842.1152389081761"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16047.872340425532,
            "unit": "ns",
            "range": "± 1480.4626364540238"
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
          "id": "bb981fcf2313cfb636278c1c77b5554fc7c238bf",
          "message": "test: add regression test",
          "timestamp": "2023-04-28T18:10:15+09:00",
          "tree_id": "ec1d8a9df9ea2267b743a28e29178caa9fd5d819",
          "url": "https://github.com/limebell/libplanet/commit/bb981fcf2313cfb636278c1c77b5554fc7c238bf"
        },
        "date": 1682674262449,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1676891.573033708,
            "unit": "ns",
            "range": "± 171261.88399972077"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3322897.8260869565,
            "unit": "ns",
            "range": "± 324836.6882929885"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2746809.89010989,
            "unit": "ns",
            "range": "± 278718.68934462895"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7021645.882352941,
            "unit": "ns",
            "range": "± 375823.51213636145"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 62462.886597938144,
            "unit": "ns",
            "range": "± 10564.201732616748"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8964294.845360825,
            "unit": "ns",
            "range": "± 525912.0154493393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24400325,
            "unit": "ns",
            "range": "± 451607.4276035179"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60611304.615384616,
            "unit": "ns",
            "range": "± 2831798.713573604"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 121616638.8888889,
            "unit": "ns",
            "range": "± 2489805.79992494"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 246543645.45454547,
            "unit": "ns",
            "range": "± 7693181.062761478"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6209908.743990385,
            "unit": "ns",
            "range": "± 164526.79455580353"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1894383.5186298077,
            "unit": "ns",
            "range": "± 18169.898624640966"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1551066.5900735294,
            "unit": "ns",
            "range": "± 31772.47280253485"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3259621.421875,
            "unit": "ns",
            "range": "± 79611.18106442726"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1036476.3532366072,
            "unit": "ns",
            "range": "± 11832.183383770729"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 961451.0275135869,
            "unit": "ns",
            "range": "± 24126.891882856013"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4012644.210526316,
            "unit": "ns",
            "range": "± 258072.93737112277"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4513186.956521739,
            "unit": "ns",
            "range": "± 173654.09629323546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5312838.75,
            "unit": "ns",
            "range": "± 277720.6526070643"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5131990.322580645,
            "unit": "ns",
            "range": "± 345720.4082292498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8833683.157894736,
            "unit": "ns",
            "range": "± 513720.27069392195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 353370.78651685396,
            "unit": "ns",
            "range": "± 34177.03642348973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330717.04545454547,
            "unit": "ns",
            "range": "± 26012.28145650863"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 286922.47191011236,
            "unit": "ns",
            "range": "± 37125.76522874949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5032834.736842105,
            "unit": "ns",
            "range": "± 313993.8265988955"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4407367.692307692,
            "unit": "ns",
            "range": "± 204527.48371833513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20780.645161290322,
            "unit": "ns",
            "range": "± 3030.6498823977367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 114035.10638297872,
            "unit": "ns",
            "range": "± 17738.341362417068"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 113981.31313131313,
            "unit": "ns",
            "range": "± 19822.27486720816"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 130629.59183673469,
            "unit": "ns",
            "range": "± 21639.692240049448"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8334.831460674157,
            "unit": "ns",
            "range": "± 2439.5929766512804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24634.375,
            "unit": "ns",
            "range": "± 5010.238530407404"
          }
        ]
      }
    ]
  }
}