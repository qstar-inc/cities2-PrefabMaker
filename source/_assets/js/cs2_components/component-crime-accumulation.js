export function serviceCrime(id, typeId, serviceCrimeValue) {
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
