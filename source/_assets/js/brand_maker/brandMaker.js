import { hexToRgb01, isColorEmpty } from "../utils/colorPicker";
import { getDLC } from "./requiresDLC";
import { addGUID } from "../utils/utils-cs2";
import { obsoleteComponent } from "../cs2_components/component-obsolete-identifier";
import { dlcComponent } from "../cs2_components/component-dlc";
import { joinWithComma, copyPreContent } from "../utils/utils";

document.addEventListener("DOMContentLoaded", function () {
  const shortNameInput = document.getElementById("shortname");
  const shortnameWarning = document.getElementById("shortnameWarning");
  const generateButton = document.getElementById("generate-button");
  const selectedOptions = $("#companies_type");

  var shortNameValid = !shortNameInput.value.includes(" ");
  var companyValid = selectedOptions.val().length > 0;

  shortNameInput.addEventListener("input", function () {
    if (this.value.includes(" ")) {
      shortnameWarning.style.display = "block";
      shortNameValid = false;
    } else {
      shortnameWarning.style.display = "none";
      shortNameValid = true;
    }
    updateButtonState();
  });
  selectedOptions.on("change", function () {
    if (selectedOptions.val().length > 0) {
      companyValid = true;
    } else {
      companyValid = false;
    }

    updateButtonState();
  });

  function updateButtonState() {
    if (shortNameValid && companyValid) {
      generateButton.disabled = false;
      generateButton.classList.remove("btn-danger");
      generateButton.classList.add("btn-primary");
    } else {
      generateButton.disabled = true;
      generateButton.classList.remove("btn-primary");
      generateButton.classList.add("btn-danger");
    }
  }
  updateButtonState();
});

function generateFiles() {
  const shortname = document.getElementById("shortname").value;
  const name = document.getElementById("name").value;
  let selectedCompanies = [];
  const selectedOptions = Array.from(
    document.getElementById("companies_type").selectedOptions
  );
  selectedCompanies = selectedOptions.map((option) =>
    option.getAttribute("value")
  );
  var c1 = isColorEmpty(document.getElementById("hexInput1").value);
  var c2 = isColorEmpty(document.getElementById("hexInput2").value);
  var c3 = isColorEmpty(document.getElementById("hexInput3").value);
  var dlc = getDLC();

  const line_values = [
    shortname,
    name,
    JSON.stringify(selectedCompanies),
    c1,
    c2,
    c3,
    dlc,
  ];
  const output = create_prefab_file(line_values);
  const outputElement = document.getElementById("output");
  outputElement.textContent = output;
  outputElement.classList.remove("d-none");
  document.getElementById("pre-copy");
  document.getElementById("generate-button").scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });

  var button = document.createElement("button");
  button.id = "copy-output";
  button.classList.add("btn", "btn-outline-warning", "pre-copy");
  button.innerHTML = '<i class="bi bi-copy"></i> Copy';

  button.onclick = function () {
    copyPreContent(outputElement);
  };
  outputElement.parentNode.style.position = "relative";
  outputElement.parentNode.appendChild(button);

  document.getElementById("download-button").disabled = false;
}

window.generateFiles = generateFiles;

export function create_prefab_file(line_values) {
  const template = `{
    "$id": 0,
    "$type": "0|Game.Prefabs.BrandPrefab, Game",
    "name": "{shortname}",
    "active": true,
    "components": {
        "$id": 1,
        "$type": "1|System.Collections.Generic.List\`1[[Game.Prefabs.ComponentBase, Game]], mscorlib",
        "$rlength": {component_count},
        "$rcontent": [{components}
        ]
    },
    "m_Companies": {
        "$id": {m_company_id},
        "$type": "{m_company_type_id}|Game.Prefabs.CompanyPrefab[], Game",
        "$rlength": {companies_count},
        "$rcontent": [
            {companies_text}
        ]
    },
    "m_BrandColors": {
        "$id": {m_brandcolor_id},
        "$type": "{m_brandcolor_type_id}|UnityEngine.Color[], UnityEngine.CoreModule",
        "$rlength": 3,
        "$rcontent": [
            {
                "$type": "{m_unitycolor_type_id}|UnityEngine.Color, UnityEngine.CoreModule",
                {color_1}
            },
            {
                "$type": {m_unitycolor_type_id},
                {color_2}
            },
            {
                "$type": {m_unitycolor_type_id},
                {color_3}
            }
        ]
    }
}`;

  const [shortname, name, companies_type, c1, c2, c3, dlc] = line_values;

  var component_count = 0;
  const companies = JSON.parse(companies_type);
  const companies_count = companies.length;
  const companies_text = addGUID(companies);
  var next_id = 2;
  var next_type_id = 2;
  var used_id = 0;
  var used_type_id = 0;
  var obsoleteText = "";
  if (name.split(" ").length > 1) {
    var obsoleteReturn = obsoleteComponent(name, next_id, next_type_id);
    obsoleteText = obsoleteReturn[0];
    used_id = obsoleteReturn[1];
    used_type_id = obsoleteReturn[2];
    next_id = next_id + used_id;
    next_type_id = next_type_id + used_type_id;
    component_count++;
  }

  var dlcText = "";
  if (dlc != "") {
    var dlcReturn = dlcComponent(dlc, next_id, next_type_id);
    dlcText = dlcReturn[0];
    used_id = dlcReturn[1];
    used_type_id = dlcReturn[2];
    next_id = next_id + used_id;
    next_type_id = next_type_id + used_type_id;
    component_count++;
  }

  const components = joinWithComma(obsoleteText, dlcText);

  return template
    .replaceAll("{shortname}", shortname)
    .replaceAll("{component_count}", component_count)
    .replaceAll("{components}", components)
    .replaceAll("{m_company_id}", next_id)
    .replaceAll("{m_company_type_id}", next_type_id)
    .replaceAll("{companies_text}", companies_text)
    .replaceAll("{companies_count}", companies_count)
    .replaceAll("{m_brandcolor_id}", next_id + 1)
    .replaceAll("{m_brandcolor_type_id}", next_type_id + 1)
    .replaceAll("{m_unitycolor_type_id}", next_type_id + 2)
    .replaceAll("{color_1}", hexToRgb01(c1))
    .replaceAll("{color_2}", hexToRgb01(c2))
    .replaceAll("{color_3}", hexToRgb01(c3));
}

function downloadFile() {
  const shortname = document.getElementById("shortname").value;
  const content = document.getElementById("output").textContent;
  const filename = `${shortname}.Prefab`;
  const blob = new Blob([content], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
window.downloadFile = downloadFile;
