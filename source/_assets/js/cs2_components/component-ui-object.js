export function uiObject(id, typeId, uiObjectValues) {
  return [
    `
            {
                "$id": {id},
                "$type": "{typeId}|Game.Prefabs.UIObject, Game",
                "name": "UIObject",
                "active": true,
                "m_Group": {group},
                "m_Priority": {priority},
                "m_Icon": "{icon}",
                "m_LargeIcon": "{large_icon}",
                "m_IsDebugObject": false
            }`
      .replaceAll("{id}", id)
      .replaceAll("{typeId}", typeId)
      .replaceAll("{group}", resolveUIGroup(uiObjectValues[0]))
      .replaceAll("{priority}", uiObjectValues[1])
      .replaceAll("{icon}", uiObjectValues[2])
      .replaceAll("{large_icon}", uiObjectValues[3]),
    1,
    1,
  ];
}

function resolveUIGroup(group) {
  var guid = "";
  switch (parseInt(group)) {
    case 1:
      guid = "9580a6e183ba7174a85992b8c1827d3c";
    case 2:
      guid = "b6926c65be19b13459de7836112db8a5";
      break;
    case 3:
      guid = "4f800ee88525f4f4c97eb5000f5da28a";
      break;
    case 4:
      guid = "71e84760ccda8fc41800d213cdbf44b4";
      break;
    case 5:
      guid = "bf9d9a4d7e119a8469b068587e222a82";
      break;
    default:
      guid = 0;
      break;
  }

  if (guid == 0) {
    return null;
  } else {
    return '$fstrref:"UnityGUID:' + guid + '"';
  }
}
