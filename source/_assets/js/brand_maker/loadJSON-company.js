import { loadJSON } from "../utils/loadJSON";

$(document).ready(function () {
  loadJSON("#companies_type", "/assets/data/companyGUID.json", "company");
});

export function processCompanyData(data) {
  let companies = [];
  data.companies.forEach(function (company) {
    let groupName = company.name.split(":")[0].trim();
    let companyId = company.id;
    let companyName = company.name.split(":")[1].trim();

    let groupIndex = companies.findIndex((group) => group.text === groupName);
    if (groupIndex === -1) {
      companies.push({
        text: groupName,
        children: [{ id: companyId, text: companyName }],
      });
    } else {
      companies[groupIndex].children.push({
        id: companyId,
        text: companyName,
      });
    }
  });
  return companies;
}
