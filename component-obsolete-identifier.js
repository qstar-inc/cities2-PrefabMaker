function obsoleteComponent(name, next_id, next_type_id) {
  return [
    `
            {
                "$id": {next_id},
                "$type": "{next_type_id}|Game.Prefabs.ObsoleteIdentifiers, Game",
                "name": "ObsoleteIdentifiers",
                "active": true,
                "m_PrefabIdentifiers": {
                    "$id": {next_id2},
                    "$type": "{next_type_id2}|Game.Prefabs.PrefabIdentifierInfo[], Game",
                    "$rlength": 1,
                    "$rcontent": [
                        {
                            "$id": {next_id3},
                            "$type": "{next_type_id3}|Game.Prefabs.PrefabIdentifierInfo, Game",
                            "m_Name": "{name}",
                            "m_Type": "BrandPrefab"
                        }
                    ]
                }
            }`
      .replace("{name}", name)
      .replace("{next_id}", next_id)
      .replace("{next_type_id}", next_type_id)
      .replace("{next_id2}", next_id + 1)
      .replace("{next_type_id2}", next_type_id + 1)
      .replace("{next_id3}", next_id + 2)
      .replace("{next_type_id3}", next_type_id + 2),
    3,
    3,
  ];
}
