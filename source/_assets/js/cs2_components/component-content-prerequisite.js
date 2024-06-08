export function dlcComponent(dlc, next_id, next_type_id) {
  return [
    `
            {
                "$id": {next_id},
                "$type": "{next_type_id}|Game.Prefabs.ContentPrerequisite, Game",
                "name": "ContentPrerequisite",
                "active": true,
                "m_ContentPrerequisite": $fstrref:"UnityGUID:{dlc}"
            }`
      .replaceAll("{dlc}", resolveDlcGuid(dlc))
      .replaceAll("{next_id}", next_id)
      .replaceAll("{next_type_id}", next_type_id),
    1,
    1,
  ];
}

export function resolveDlcGuid(dlc) {
  dlc = dlc.replace("dlc-", "");
  var guid = "";
  switch (dlc) {
    case "cs1th":
      guid = "39980c750d4c50b4ea7a7477b0411513";
      break;
    case "paradox":
      guid = "8e8e5bce147330542a1b89e4e96c2322";
      break;
    case "landmark":
      guid = "c3724de73723f5b4ab589dd1fa756861";
      break;
    case "sanfrancisco":
      guid = "6a2dbb5b0d5ed814d975ec201667b644";
      break;
    default:
      guid = "";
      break;
  }
  return guid;
}

export function resolveDlcNameFromGuid(guid) {
  var dlc = "";
  switch (guid) {
    case "39980c750d4c50b4ea7a7477b0411513":
      dlc = "cs1th";
      break;
    case "8e8e5bce147330542a1b89e4e96c2322":
      dlc = "paradox";
      break;
    case "c3724de73723f5b4ab589dd1fa756861":
      dlc = "landmark";
      break;
    case "6a2dbb5b0d5ed814d975ec201667b644":
      dlc = "sanfrancisco";
      break;
    default:
      dlc = "";
      break;
  }
  return dlc;
}
