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
  dlc = getDLC();

  const line_values = [
    shortname,
    name,
    JSON.stringify(selectedCompanies),
    c1,
    c2,
    c3,
    dlc,
  ];
  const output = create_prefab_file(shortname, line_values);
  document.getElementById("output").textContent = output;
  document.getElementById("download-button").disabled = false;
}

function create_prefab_file(filename, line_values) {
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
        "$id": 6,
        "$type": "6|UnityEngine.Color[], UnityEngine.CoreModule",
        "$rlength": 3,
        "$rcontent": [
            {
                "$type": "7|UnityEngine.Color, UnityEngine.CoreModule",
                {color_1}
            },
            {
                "$type": 7,
                {color_2}
            },
            {
                "$type": 7,
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
  var obsoleteText = "";
  if (name.split(" ").length > 1) {
    obsoleteReturn = obsoleteComponent(name, next_id, next_type_id);
    obsoleteText = obsoleteReturn[0];
    used_id = obsoleteReturn[1];
    used_type_id = obsoleteReturn[2];
    next_id = next_id + used_id;
    next_type_id = next_type_id + used_type_id;
    component_count++;
  }

  var dlcText = "";
  if (dlc != "") {
    dlcReturn = dlcComponent(dlc, next_id, next_type_id);
    dlcText = dlcReturn[0];
    used_id = dlcReturn[1];
    used_type_id = dlcReturn[2];
    next_id = next_id + used_id;
    next_type_id = next_type_id + used_type_id;
    component_count++;
  }

  const components = joinWithComma(obsoleteText, dlcText);

  return template
    .replace("{shortname}", shortname)
    .replace("{component_count}", component_count)
    .replace("{components}", components)
    .replace("{m_company_id}", next_id)
    .replace("{m_company_type_id}", next_type_id)
    .replace("{companies_text}", companies_text)
    .replace("{companies_count}", companies_count)
    .replace("{color_1}", hexToRgb01(c1))
    .replace("{color_2}", hexToRgb01(c2))
    .replace("{color_3}", hexToRgb01(c3));
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
