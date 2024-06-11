export function serviceCrime(id, typeId) {
  const serviceCrimeValue =
    parseFloat(document.getElementById("serviceCrime").value) || 0;
  return [
    `
            {
                "$id": {id},
                "$type": "{typeId}|Game.Prefabs.CrimeAccumulation, Game",
                "name": "CrimeAccumulation",
                "active": true,
                "m_CrimeRate": {serviceCrimeValue}
            }`
      .replaceAll("{id}", id)
      .replaceAll("{typeId}", typeId)
      .replaceAll("{serviceCrimeValue}", serviceCrimeValue),
    1,
    1,
  ];
}
