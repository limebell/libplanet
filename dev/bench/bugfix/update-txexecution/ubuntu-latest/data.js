window.BENCHMARK_DATA = {
  "lastUpdate": 1683010362934,
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
          "id": "dffcacbe7a34c502649b60f669408398e9445c32",
          "message": "docs: update changelog",
          "timestamp": "2023-05-02T15:34:21+09:00",
          "tree_id": "e548c26674dde90705ae42008deae845cec14d24",
          "url": "https://github.com/limebell/libplanet/commit/dffcacbe7a34c502649b60f669408398e9445c32"
        },
        "date": 1683010076614,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 333171.5714285714,
            "unit": "ns",
            "range": "± 7802.57339325577"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 277259.2602739726,
            "unit": "ns",
            "range": "± 13687.638211405083"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 251753.77647058823,
            "unit": "ns",
            "range": "± 13603.774515059507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5657642,
            "unit": "ns",
            "range": "± 36120.39379432543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4022674.3076923075,
            "unit": "ns",
            "range": "± 49286.843710035195"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21135.577319587628,
            "unit": "ns",
            "range": "± 2510.230782198503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96922.5612244898,
            "unit": "ns",
            "range": "± 10213.44521582337"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 86049.10416666667,
            "unit": "ns",
            "range": "± 9277.671745681351"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 191130.0618556701,
            "unit": "ns",
            "range": "± 16699.262070656518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6536.458333333333,
            "unit": "ns",
            "range": "± 961.0432699242355"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18734.074468085106,
            "unit": "ns",
            "range": "± 2603.1590867547866"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3389899.2083333335,
            "unit": "ns",
            "range": "± 80427.09341140512"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3473179.3483146066,
            "unit": "ns",
            "range": "± 187563.12663111233"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4250154.515151516,
            "unit": "ns",
            "range": "± 130108.64411260338"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4397217.222222222,
            "unit": "ns",
            "range": "± 120109.83809776697"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7249262.523809524,
            "unit": "ns",
            "range": "± 170529.6436211661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5836898.7359375,
            "unit": "ns",
            "range": "± 16236.203930046422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1831502.1893136161,
            "unit": "ns",
            "range": "± 3644.810574342245"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365005.6407752405,
            "unit": "ns",
            "range": "± 1475.8105561009504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2588195.38671875,
            "unit": "ns",
            "range": "± 2416.980050904446"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 800163.05078125,
            "unit": "ns",
            "range": "± 665.5713093479661"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 740561.8716195914,
            "unit": "ns",
            "range": "± 264.2750726768881"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46479.42391304348,
            "unit": "ns",
            "range": "± 3280.9829277472836"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7625766.466666667,
            "unit": "ns",
            "range": "± 118865.02378921029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19555980.066666666,
            "unit": "ns",
            "range": "± 115556.70901489184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50163118.6,
            "unit": "ns",
            "range": "± 609102.973929438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99573222.46666667,
            "unit": "ns",
            "range": "± 914754.8505695676"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 202075559.14285713,
            "unit": "ns",
            "range": "± 2825978.6044255635"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1401276.6804123712,
            "unit": "ns",
            "range": "± 100768.75142245511"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2666706.28,
            "unit": "ns",
            "range": "± 71189.49517222795"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2300696.8865979384,
            "unit": "ns",
            "range": "± 173137.63649044486"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5590511.464285715,
            "unit": "ns",
            "range": "± 135997.32070467612"
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
          "id": "3ee4cf68a341368048cd2302e3adb578cec0b87d",
          "message": "docs: update changelog",
          "timestamp": "2023-05-02T15:38:29+09:00",
          "tree_id": "7d14b14f5e84effd95ca064156bf1c765cc0f259",
          "url": "https://github.com/limebell/libplanet/commit/3ee4cf68a341368048cd2302e3adb578cec0b87d"
        },
        "date": 1683010359983,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 363307.14814814815,
            "unit": "ns",
            "range": "± 9060.142101550335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298445.71428571426,
            "unit": "ns",
            "range": "± 9640.159365866475"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 246902.33333333334,
            "unit": "ns",
            "range": "± 6756.176108967603"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5930982.8,
            "unit": "ns",
            "range": "± 47778.97121896679"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4242582.714285715,
            "unit": "ns",
            "range": "± 49312.49869716846"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23632.127659574468,
            "unit": "ns",
            "range": "± 2006.6989810960936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99354.5731707317,
            "unit": "ns",
            "range": "± 5242.706703697976"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 89935.78378378379,
            "unit": "ns",
            "range": "± 3043.6776287096354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 226195.72164948453,
            "unit": "ns",
            "range": "± 20290.207407013626"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7037.5625,
            "unit": "ns",
            "range": "± 876.0374639008852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20641.178947368422,
            "unit": "ns",
            "range": "± 2061.5329969283566"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3682009.9166666665,
            "unit": "ns",
            "range": "± 90847.27851773938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3845702.4615384615,
            "unit": "ns",
            "range": "± 55100.17581583472"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4446300.666666667,
            "unit": "ns",
            "range": "± 73665.18193407895"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4876858.258064516,
            "unit": "ns",
            "range": "± 148050.5465102978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7682981.533333333,
            "unit": "ns",
            "range": "± 139046.8520288173"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5896416.118489583,
            "unit": "ns",
            "range": "± 17534.997119166284"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1849487.9299479167,
            "unit": "ns",
            "range": "± 5392.315357030586"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1365960.5248697917,
            "unit": "ns",
            "range": "± 3974.0436712445603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2589103.33046875,
            "unit": "ns",
            "range": "± 3537.880888718952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 830178.5922526042,
            "unit": "ns",
            "range": "± 1034.4652097278863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 762797.0047433035,
            "unit": "ns",
            "range": "± 467.41160669093426"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49745.044444444444,
            "unit": "ns",
            "range": "± 2907.524998341377"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7781771.066666666,
            "unit": "ns",
            "range": "± 95920.31054881417"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21728855.333333332,
            "unit": "ns",
            "range": "± 364119.36501071946"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54631161.53333333,
            "unit": "ns",
            "range": "± 806707.8291291505"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112630370.64285715,
            "unit": "ns",
            "range": "± 673169.935203541"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 222435607.92857143,
            "unit": "ns",
            "range": "± 777200.8278542311"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1475795.35,
            "unit": "ns",
            "range": "± 114033.66371936006"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2758603.25,
            "unit": "ns",
            "range": "± 70388.84011240394"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2355509.524390244,
            "unit": "ns",
            "range": "± 118225.21913726763"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5763490.848484849,
            "unit": "ns",
            "range": "± 164062.52596764007"
          }
        ]
      }
    ]
  }
}