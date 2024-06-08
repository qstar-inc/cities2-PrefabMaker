export function groupAmbience(id, typeId, groupAmbienceValue) {
  return [
    `
            {
                "$id": {id},
                "$type": "{typeId}|Game.Prefabs.GroupAmbience, Game",
                "name": "GroupAmbience",
                "active": true,
                "m_AmbienceType": {groupAmbienceValue}
            }`
      .replaceAll("{id}", id)
      .replaceAll("{typeId}", typeId)
      .replaceAll("{groupAmbienceValue}", groupAmbienceValue),
    1,
    1,
  ];
}
