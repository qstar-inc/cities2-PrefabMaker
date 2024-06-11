import { joinWithSeparator } from "../utils/utils";

export function unlockable(id, typeId, uiGroupSelector = null) {
  var milestone = document.getElementById("milestone").value || 0;
  milestone = resolveMilestone(milestone);
  var zones = "";
  if (uiGroupSelector != null) {
    zones = resolveZone(uiGroupSelector);
  }
  var rlength = 0;
  if (milestone != "") {
    rlength += 1;
  }
  if (zones != "") {
    rlength += 1;
  }
  var rcontent = joinWithSeparator(
    ",\n                        ",
    zones,
    milestone
  );
  return [
    `
            {
                "$id": {id},
                "$type": "{typeId}|Game.Prefabs.Unlockable, Game",
                "name": "Unlockable",
                "active": true,
                "m_RequireAll": {
                    "$id": {id1},
                    "$type": "{typeId1}|Game.Prefabs.PrefabBase[], Game",
                    "$rlength": {rlength},
                    "$rcontent": [{rcontent}
                    ]
                },
                "m_RequireAny": {
                    "$id": {id2},
                    "$type": {typeId1},
                    "$rlength": 0,
                    "$rcontent": [
                    ]
                },
                "m_IgnoreDependencies": false
            }`
      .replaceAll("{id}", id)
      .replaceAll("{id1}", id + 1)
      .replaceAll("{id2}", id + 2)
      .replaceAll("{typeId}", typeId)
      .replaceAll("{typeId1}", typeId + 1)
      .replaceAll("{rlength}", rlength)
      .replaceAll("{rcontent}", "\n                        " + rcontent),
    3,
    2,
  ];
}

function resolveMilestone(milestone) {
  var guidArray = {
    1: "f4b50c02270b92c4baff187c22d3ea14",
    2: "2961ed6ee8060794aab41a8cc22efaf6",
    3: "303506d3e2bc587489b2b4d267c99388",
    4: "e52107c8dbdae9046ae8ecaf9a15b5bf",
    5: "5c6cbf5168762c84993f0ee6b8953323",
    6: "ce89bfee39352484880cc773efc1e6e1",
    7: "87b8a967a95909d4abb68a5bf768aa35",
    8: "7e01164e99f78234097bcbe8c94f6da6",
    9: "92abe4abd38674248bc02acf09f4a911",
    10: "ab06d3e8b3116b04bb698fb96d79a6ee",
    11: "fb04e5657051d5e48ab0f4840b16576c",
    12: "6a36d7b1f1cc1c1459e4412d6e74855c",
    13: "06fef20b88c14134a80dac6f8064c8c9",
    14: "cf0723beedf531c4190f44398380e5a5",
    15: "3cf250e16212ad44fb0d6004bd7ece90",
    16: "ddb498c917f12e449808d5fa87302ab1",
    17: "c3b2d07ac7449704cabb978593fcaba7",
    18: "a5e3d620bfda9f046ac4d3d733800055",
    19: "eea85152ca5f90549bbfd3ecc6325445",
    20: "e11038cd31a6e124dba8c82aa15bba37",
  };

  var guid = guidArray[milestone];

  if (guid) {
    return '$fstrref:"UnityGUID:' + guid + '"';
  } else {
    return "";
  }
}

function resolveZone(zone) {
  var guidArray = {
    res: "29455edf655e35c4fb6ba49adc0bf3ae",
    comm: "7dba39510f4e7d143b3dc2289b201617",
    ind: "317077db9435b144eb601e60165bee5c",
    off: "29455edf655e35c4fb6ba49adc0bf3ae",
    ext: "ddf164649f434a14e9e4bde7599bf38d",
  };

  var guid = guidArray[zone];

  if (guid) {
    return '$fstrref:"UnityGUID:' + guid + '"';
  } else {
    return "";
  }
}
