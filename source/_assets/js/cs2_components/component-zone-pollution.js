export function zonePollution(id, typeId, zonePollutionValues) {
  return [
    `
            {
                "$id": {id},
                "$type": "{typeId}|Game.Prefabs.ZonePollution, Game",
                "name": "ZonePollution",
                "active": true,
                "m_GroundPollution": {ground},
                "m_AirPollution": {air},
                "m_NoisePollution": {noise}
            }`
      .replaceAll("{id}", id)
      .replaceAll("{typeId}", typeId)
      .replaceAll("{ground}", zonePollutionValues[0])
      .replaceAll("{air}", zonePollutionValues[1])
      .replaceAll("{noise}", zonePollutionValues[2]),
    1,
    1,
  ];
}
