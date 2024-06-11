export function zoneServiceConsumption(id, typeId) {
  const serviceUpkeep =
    parseFloat(document.getElementById("serviceUpkeep").value) || 0;
  const serviceElectricity =
    parseFloat(document.getElementById("serviceElectricity").value) || 0;
  const serviceWater =
    parseFloat(document.getElementById("serviceWater").value) || 0;
  const serviceGarbage =
    parseFloat(document.getElementById("serviceGarbage").value) || 0;
  const serviceTelecom =
    parseFloat(document.getElementById("serviceTelecom").value) || 0;

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
      .replaceAll("{upkeep}", serviceUpkeep)
      .replaceAll("{electricity}", serviceElectricity)
      .replaceAll("{water}", serviceWater)
      .replaceAll("{garbage}", serviceGarbage)
      .replaceAll("{telecom}", serviceTelecom),
    1,
    1,
  ];
}
