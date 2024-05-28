function addGUID(array) {
  const template = `$fstrref:"UnityGUID:{guid}"`;
  return array
    .map((guid) => template.replace("{guid}", guid))
    .join(",\n            ");
}
