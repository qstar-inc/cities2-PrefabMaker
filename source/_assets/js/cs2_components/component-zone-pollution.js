export function zonePollution(id, typeId) {
  const pollutionGround =
    parseFloat(document.getElementById("pollutionGround").value) || 0;
  const pollutionAir =
    parseFloat(document.getElementById("pollutionAir").value) || 0;
  const pollutionNoise =
    parseFloat(document.getElementById("pollutionNoise").value) || 0;

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
      .replaceAll("{ground}", pollutionGround)
      .replaceAll("{air}", pollutionAir)
      .replaceAll("{noise}", pollutionNoise),
    1,
    1,
  ];
}
