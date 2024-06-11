export function serviceMail(id, typeId) {
  const serviceMailCollect =
    document.getElementById("serviceMailCollect").checked;
  const serviceMailSending =
    parseFloat(document.getElementById("serviceMailSending").value) || 0;
  const serviceMailReceiving =
    parseFloat(document.getElementById("serviceMailReceiving").value) || 0;

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
      .replaceAll("{requireCollect}", serviceMailCollect)
      .replaceAll("{sendingRate}", serviceMailSending)
      .replaceAll("{receivingRate}", serviceMailReceiving),
    1,
    1,
  ];
}
