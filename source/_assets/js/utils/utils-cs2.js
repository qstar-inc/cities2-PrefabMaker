export function addGUID(array) {
  const template = `$fstrref:"UnityGUID:{guid}"`;
  return array
    .map((guid) => template.replaceAll("{guid}", guid))
    .join(",\n            ");
}
