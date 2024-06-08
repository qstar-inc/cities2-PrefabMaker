import { joinWithSeparator } from "../utils/utils";

export function unlockable(id, typeId, milestoneValues) {
  var milestone = resolveMilestone(milestoneValues[0]);
  var zones = resolveZone(milestoneValues[1]);
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
  var guid = "";
  switch (parseInt(milestone)) {
    case 1:
      guid = "f4b50c02270b92c4baff187c22d3ea14";
      break;
    case 2:
      guid = "2961ed6ee8060794aab41a8cc22efaf6";
      break;
    case 3:
      guid = "303506d3e2bc587489b2b4d267c99388";
      break;
    case 4:
      guid = "e52107c8dbdae9046ae8ecaf9a15b5bf";
      break;
    case 5:
      guid = "5c6cbf5168762c84993f0ee6b8953323";
      break;
    case 6:
      guid = "ce89bfee39352484880cc773efc1e6e1";
      break;
    case 7:
      guid = "87b8a967a95909d4abb68a5bf768aa35";
      break;
    case 8:
      guid = "7e01164e99f78234097bcbe8c94f6da6";
      break;
    case 9:
      guid = "92abe4abd38674248bc02acf09f4a911";
      break;
    case 10:
      guid = "ab06d3e8b3116b04bb698fb96d79a6ee";
      break;
    case 11:
      guid = "fb04e5657051d5e48ab0f4840b16576c";
      break;
    case 12:
      guid = "6a36d7b1f1cc1c1459e4412d6e74855c";
      break;
    case 13:
      guid = "06fef20b88c14134a80dac6f8064c8c9";
      break;
    case 14:
      guid = "cf0723beedf531c4190f44398380e5a5";
      break;
    case 15:
      guid = "3cf250e16212ad44fb0d6004bd7ece90";
      break;
    case 16:
      guid = "ddb498c917f12e449808d5fa87302ab1";
      break;
    case 17:
      guid = "c3b2d07ac7449704cabb978593fcaba7";
      break;
    case 18:
      guid = "a5e3d620bfda9f046ac4d3d733800055";
      break;
    case 19:
      guid = "eea85152ca5f90549bbfd3ecc6325445";
      break;
    case 20:
      guid = "e11038cd31a6e124dba8c82aa15bba37";
      break;
    default:
      guid = 0;
      break;
  }

  if (guid == 0) {
    return "";
  } else {
    return '$fstrref:"UnityGUID:' + guid + '"';
  }
}

function resolveZone(zone) {
  var guid = "";
  switch (parseInt(zone)) {
    case 1:
      guid = "29455edf655e35c4fb6ba49adc0bf3ae";
      break;
    case 2:
      guid = "7dba39510f4e7d143b3dc2289b201617";
      break;
    case 3:
      guid = "317077db9435b144eb601e60165bee5c";
      break;
    case 4:
      guid = "29455edf655e35c4fb6ba49adc0bf3ae";
      break;
    case 5:
      guid = "ddf164649f434a14e9e4bde7599bf38d";
      break;
    default:
      guid = 0;
      break;
  }

  if (guid == 0) {
    return "";
  } else {
    return '$fstrref:"UnityGUID:' + guid + '"';
  }
}
