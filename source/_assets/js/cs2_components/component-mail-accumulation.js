export function serviceMail(id, typeId, serviceMailValues) {
  return [
    `
            {
                "$id": {id},
                "$type": "{typeId}|Game.Prefabs.MailAccumulation, Game",
                "name": "MailAccumulation",
                "active": true,
                "m_RequireCollect": {requireCollect},
                "m_SendingRate": {sendingRate},
                "m_ReceivingRate": {receivingRate}
            }`
      .replaceAll("{id}", id)
      .replaceAll("{typeId}", typeId)
      .replaceAll("{requireCollect}", serviceMailValues[0])
      .replaceAll("{sendingRate}", serviceMailValues[1])
      .replaceAll("{receivingRate}", serviceMailValues[2]),
    1,
    1,
  ];
}
