window.BENCHMARK_DATA = {
  "lastUpdate": 1683011496180,
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
          "id": "3ee4cf68a341368048cd2302e3adb578cec0b87d",
          "message": "docs: update changelog",
          "timestamp": "2023-05-02T15:38:29+09:00",
          "tree_id": "7d14b14f5e84effd95ca064156bf1c765cc0f259",
          "url": "https://github.com/limebell/libplanet/commit/3ee4cf68a341368048cd2302e3adb578cec0b87d"
        },
        "date": 1683010823536,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8796359.695121951,
            "unit": "ns",
            "range": "± 455281.89674423623"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24022519.050561797,
            "unit": "ns",
            "range": "± 3896831.0601801146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53790435.8,
            "unit": "ns",
            "range": "± 950826.9206793631"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 108512882.16666667,
            "unit": "ns",
            "range": "± 1927690.0839991914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 219757983.24509802,
            "unit": "ns",
            "range": "± 8922379.054083357"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 83168.73333333334,
            "unit": "ns",
            "range": "± 9749.611273207343"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 399177.3977272727,
            "unit": "ns",
            "range": "± 25599.301048531153"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 330167.2365591398,
            "unit": "ns",
            "range": "± 27182.004890703225"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 329491.8539325843,
            "unit": "ns",
            "range": "± 30531.617738289893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5699280.346153846,
            "unit": "ns",
            "range": "± 266408.1669226184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3909592.7741935486,
            "unit": "ns",
            "range": "± 118057.43355353491"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20151.967741935485,
            "unit": "ns",
            "range": "± 2892.1512019662914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97675.05208333333,
            "unit": "ns",
            "range": "± 14941.563061945724"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 103752.54545454546,
            "unit": "ns",
            "range": "± 15393.042919841952"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 256162.89361702127,
            "unit": "ns",
            "range": "± 26609.951182697616"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8165.649484536082,
            "unit": "ns",
            "range": "± 1335.308641298248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23813.805263157894,
            "unit": "ns",
            "range": "± 3856.321025619052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1952207.2252747254,
            "unit": "ns",
            "range": "± 334902.55971819843"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3309054.0529411766,
            "unit": "ns",
            "range": "± 236014.38218588184"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2990652.836956522,
            "unit": "ns",
            "range": "± 430595.5132447267"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7378532.953488372,
            "unit": "ns",
            "range": "± 658429.4475867226"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3603570.222222222,
            "unit": "ns",
            "range": "± 201160.13130915194"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4053030.772727273,
            "unit": "ns",
            "range": "± 221741.6237574521"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4527252.760869565,
            "unit": "ns",
            "range": "± 216087.32498151355"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4617846.389473684,
            "unit": "ns",
            "range": "± 465999.2885280227"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8447107.357142856,
            "unit": "ns",
            "range": "± 314575.95217772876"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6846158.4296875,
            "unit": "ns",
            "range": "± 131179.6399693358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2089567.4664417615,
            "unit": "ns",
            "range": "± 77999.903446731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1336700.9963541667,
            "unit": "ns",
            "range": "± 20734.495650396886"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2670802.885110294,
            "unit": "ns",
            "range": "± 84710.68322467853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809855.2924804688,
            "unit": "ns",
            "range": "± 9518.56124231492"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747783.6615084135,
            "unit": "ns",
            "range": "± 7231.554606272817"
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
          "id": "dffcacbe7a34c502649b60f669408398e9445c32",
          "message": "docs: update changelog",
          "timestamp": "2023-05-02T15:34:21+09:00",
          "tree_id": "e548c26674dde90705ae42008deae845cec14d24",
          "url": "https://github.com/limebell/libplanet/commit/dffcacbe7a34c502649b60f669408398e9445c32"
        },
        "date": 1683010970366,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8903320.965517242,
            "unit": "ns",
            "range": "± 920253.107985647"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23098768.597826086,
            "unit": "ns",
            "range": "± 2707072.65643439"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 55934484.855421685,
            "unit": "ns",
            "range": "± 5445109.374788127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124570654.34408602,
            "unit": "ns",
            "range": "± 23907461.328734115"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 232557821.2826087,
            "unit": "ns",
            "range": "± 29749380.63914756"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 74679.82352941176,
            "unit": "ns",
            "range": "± 10583.4350702007"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 488985.5106382979,
            "unit": "ns",
            "range": "± 82928.90464972457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 417294.9680851064,
            "unit": "ns",
            "range": "± 77484.71951231544"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 358888.8369565217,
            "unit": "ns",
            "range": "± 55338.150722739956"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5919809.988888889,
            "unit": "ns",
            "range": "± 459864.2957493919"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4581597.777777778,
            "unit": "ns",
            "range": "± 392475.24739299796"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24089.033333333333,
            "unit": "ns",
            "range": "± 4178.059343197617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 125666.81578947368,
            "unit": "ns",
            "range": "± 20994.14899151522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 124040.44680851063,
            "unit": "ns",
            "range": "± 19593.941464666983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 258757.914893617,
            "unit": "ns",
            "range": "± 23459.417986647688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8148.077319587629,
            "unit": "ns",
            "range": "± 1168.02768084932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19743.257894736842,
            "unit": "ns",
            "range": "± 2627.875886491604"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1985715.4666666666,
            "unit": "ns",
            "range": "± 326097.086086792"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3760687.322222222,
            "unit": "ns",
            "range": "± 538925.6449883912"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 3066979.659090909,
            "unit": "ns",
            "range": "± 490942.08296191716"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8721662.75,
            "unit": "ns",
            "range": "± 2002106.7361735774"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3459036.659090909,
            "unit": "ns",
            "range": "± 352293.2456550343"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3716109.709677419,
            "unit": "ns",
            "range": "± 434727.4185438949"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4818189.191011236,
            "unit": "ns",
            "range": "± 397465.1587700337"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5109388.11827957,
            "unit": "ns",
            "range": "± 759388.7478892489"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9979002.061797753,
            "unit": "ns",
            "range": "± 1756730.638377127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 9081762.699596774,
            "unit": "ns",
            "range": "± 2075901.1796973988"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2662513.1575447684,
            "unit": "ns",
            "range": "± 485686.7575744867"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1647448.4091589095,
            "unit": "ns",
            "range": "± 139014.65194307332"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3879651.0918975514,
            "unit": "ns",
            "range": "± 225459.33245349472"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1147015.7859654017,
            "unit": "ns",
            "range": "± 54722.52657848213"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 961879.3333767361,
            "unit": "ns",
            "range": "± 53573.3100189851"
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
          "id": "4c328151d19f2cbf10a9b5682dbf622d4a591ebc",
          "message": "docs: update changelog",
          "timestamp": "2023-05-02T15:50:11+09:00",
          "tree_id": "8c8ab7108b72b7412ea85d30fed2371a53078f35",
          "url": "https://github.com/limebell/libplanet/commit/4c328151d19f2cbf10a9b5682dbf622d4a591ebc"
        },
        "date": 1683011489340,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10198389.736842105,
            "unit": "ns",
            "range": "± 2686724.85482145"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 22090827.523255814,
            "unit": "ns",
            "range": "± 2777670.438445466"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56189215.85106383,
            "unit": "ns",
            "range": "± 7561909.756515474"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 113964409.94680852,
            "unit": "ns",
            "range": "± 18084450.055783875"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 238181258.3043478,
            "unit": "ns",
            "range": "± 31211357.938909926"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 75089.63978494624,
            "unit": "ns",
            "range": "± 11272.392995231465"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 412474.28651685396,
            "unit": "ns",
            "range": "± 47713.478172856296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341685.1237113402,
            "unit": "ns",
            "range": "± 39776.7548144374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 303611.40625,
            "unit": "ns",
            "range": "± 31663.61814700808"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5684695.616666666,
            "unit": "ns",
            "range": "± 251723.03266689778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4040011.7666666666,
            "unit": "ns",
            "range": "± 119091.71099783541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19068.655555555557,
            "unit": "ns",
            "range": "± 3991.016561558184"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94637.55555555556,
            "unit": "ns",
            "range": "± 14837.567926719828"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 102153.67368421053,
            "unit": "ns",
            "range": "± 17884.53991785185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 252112.41836734695,
            "unit": "ns",
            "range": "± 27336.099797570823"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7039.510416666667,
            "unit": "ns",
            "range": "± 1347.8159174229886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19520.2688172043,
            "unit": "ns",
            "range": "± 3345.430371806298"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1794045.9885057472,
            "unit": "ns",
            "range": "± 211977.80981330108"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3222952.7613636362,
            "unit": "ns",
            "range": "± 364431.2467732597"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2774393.085106383,
            "unit": "ns",
            "range": "± 353389.8020771041"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 7318275.976190476,
            "unit": "ns",
            "range": "± 473870.69178782235"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3673465.430232558,
            "unit": "ns",
            "range": "± 566284.2553255915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4138579.064516129,
            "unit": "ns",
            "range": "± 709694.1193225096"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5262933.0813953485,
            "unit": "ns",
            "range": "± 423913.0443101916"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5243654.215909091,
            "unit": "ns",
            "range": "± 823051.2851178034"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9399794.539325843,
            "unit": "ns",
            "range": "± 768650.0240108103"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6838484.858816965,
            "unit": "ns",
            "range": "± 100411.04888330826"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2104986.73374496,
            "unit": "ns",
            "range": "± 60133.6472998542"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1370710.532836914,
            "unit": "ns",
            "range": "± 42130.59423549572"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2617564.023111979,
            "unit": "ns",
            "range": "± 32657.186640183707"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 838388.6220703125,
            "unit": "ns",
            "range": "± 12033.605386924333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 884572.3205422794,
            "unit": "ns",
            "range": "± 16004.038546411062"
          }
        ]
      }
    ]
  }
}