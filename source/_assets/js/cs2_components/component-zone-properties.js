export function zoneProperties(id, typeId, zonePropertiesValues) {
  var [allowedSold, allowedSoldLength] =
    zonePropertiesValues[4] != "[]"
      ? processResource(zonePropertiesValues[4])
      : ["", 0];
  var [allowedManufactured, allowedManufacturedLength] =
    zonePropertiesValues[5] != "[]"
      ? processResource(zonePropertiesValues[5])
      : ["", 0];
  var [allowedStored, allowedStoredLength] =
    zonePropertiesValues[6] != "[]"
      ? processResource(zonePropertiesValues[6])
      : ["", 0];

  return [
    `
            {
                "$id": {id},
                "$type": "{typeId}|Game.Prefabs.ZoneProperties, Game",
                "name": "ZoneProperties",
                "active": true,
                "m_ScaleResidentials": {scaleResidentials},
                "m_ResidentialProperties": {resiProp},
                "m_SpaceMultiplier": {spaceMultiplier},
                "m_AllowedSold": {
                    "$id": {id1},
                    "$type": "{typeId1}|Game.Economy.ResourceInEditor[], Game",
                    "$rlength": {allowedSoldLength},
                    "$rcontent": [{allowedSold}
                    ]
                },
                "m_AllowedManufactured": {
                    "$id": {id2},
                    "$type": {typeId1},
                    "$rlength": {allowedManufacturedLength},
                    "$rcontent": [{allowedManufactured}
                    ]
                },
                "m_AllowedStored": {
                    "$id": {id3},
                    "$type": {typeId1},
                    "$rlength": {allowedStoredLength},
                    "$rcontent": [{allowedStored}
                    ]
                },
                "m_FireHazardModifier": {fireHazard}
            }`
      .replaceAll("{id}", id)
      .replaceAll("{id1}", id + 1)
      .replaceAll("{id2}", id + 2)
      .replaceAll("{id3}", id + 3)
      .replaceAll("{typeId}", typeId)
      .replaceAll("{typeId1}", typeId + 1)
      .replaceAll("{scaleResidentials}", zonePropertiesValues[0])
      .replaceAll("{resiProp}", zonePropertiesValues[1])
      .replaceAll("{spaceMultiplier}", zonePropertiesValues[2])
      .replaceAll("{fireHazard}", zonePropertiesValues[3])
      .replaceAll("{allowedSold}", allowedSold)
      .replaceAll("{allowedManufactured}", allowedManufactured)
      .replaceAll("{allowedStored}", allowedStored)
      .replaceAll("{allowedSoldLength}", allowedSoldLength)
      .replaceAll("{allowedManufacturedLength}", allowedManufacturedLength)
      .replaceAll("{allowedStoredLength}", allowedStoredLength),
    4,
    2,
  ];
}

const resources = [
  { id: 0, text: "No Resource" },
  { id: 1, text: "Money" },
  { id: 2, text: "Grain" },
  { id: 3, text: "Convenience Food" },
  { id: 4, text: "Food" },
  { id: 5, text: "Vegetables" },
  { id: 6, text: "Meals" },
  { id: 7, text: "Wood" },
  { id: 8, text: "Timber" },
  { id: 9, text: "Paper" },
  { id: 10, text: "Furniture" },
  { id: 11, text: "Vehicles" },
  { id: 12, text: "Lodging" },
  { id: 13, text: "Unsorted Mail" },
  { id: 14, text: "Local Mail" },
  { id: 15, text: "Outgoing Mail" },
  { id: 16, text: "Oil" },
  { id: 17, text: "Petrochemicals" },
  { id: 18, text: "Ore" },
  { id: 19, text: "Plastics" },
  { id: 20, text: "Metals" },
  { id: 21, text: "Electronics" },
  { id: 22, text: "Software" },
  { id: 23, text: "Coal" },
  { id: 24, text: "Stone" },
  { id: 25, text: "Livestock" },
  { id: 26, text: "Cotton" },
  { id: 27, text: "Steel" },
  { id: 28, text: "Minerals" },
  { id: 29, text: "Concrete" },
  { id: 30, text: "Machinery" },
  { id: 31, text: "Chemicals" },
  { id: 32, text: "Pharmaceuticals" },
  { id: 33, text: "Beverages" },
  { id: 34, text: "Textiles" },
  { id: 35, text: "Telecom" },
  { id: 36, text: "Financial" },
  { id: 37, text: "Media" },
  { id: 38, text: "Entertainment" },
  { id: 39, text: "Recreation" },
  { id: 40, text: "Garbage" },
  { id: 41, text: "Count" },
];

function processResource(values) {
  var valueText = values
    .replaceAll("[", "")
    .replaceAll("]", "")
    .replaceAll('"', "")
    .replaceAll(",", ",\n                        ")
    .split(",");
  const length = valueText.length;
  return ["\n                        " + valueText, length];
}

export function loadSelects(id) {
  var selector = "#" + id + "_select";
  $(selector).select2({
    data: resources,
    dropdownAutoWidth: true,
    closeOnSelect: false,
    placeholder: "Select resources",
    theme: "bootstrap-5",
    dropdownCssClass: "select2--small",
  });
  $(selector).prop("disabled", false);
}
