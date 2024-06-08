export function zoneServiceConsumption(id, typeId, zoneServiceValues) {
  return [
    `
            {
                "$id": {id},
                "$type": "{typeId}|Game.Prefabs.ZoneServiceConsumption, Game",
                "name": "ZoneServiceConsumption",
                "active": true,
                "m_Upkeep": {upkeep},
                "m_ElectricityConsumption": {electricity},
                "m_WaterConsumption": {water},
                "m_GarbageAccumulation": {garbage},
                "m_TelecomNeed": {telecom}
            }`
      .replaceAll("{id}", id)
      .replaceAll("{typeId}", typeId)
      .replaceAll("{upkeep}", zoneServiceValues[0])
      .replaceAll("{electricity}", zoneServiceValues[1])
      .replaceAll("{water}", zoneServiceValues[2])
      .replaceAll("{garbage}", zoneServiceValues[3])
      .replaceAll("{telecom}", zoneServiceValues[4]),
    1,
    1,
  ];
}
