import {
  initRadio,
  uiGroupProcessor,
  uiObject,
} from "../cs2_components/component-ui-object";
import { joinWithSeparator } from "../utils/utils";

function load_menuGroup(uiGroupSelector) {
  const uiGroupSelectorOptions = [
    { value: 0, text: "None" },
    { value: "zonesCat", text: "Zones Toolbar Group" },
    { value: "servicesCat", text: "Services Toolbar Group" },
    { value: "toolsCat", text: "Tools Toolbar Group" },
  ];
  uiGroupProcessor(uiGroupSelectorOptions, uiGroupSelector);
}

function load_categoryGroup(uiGroupSelector) {
  const uiGroupSelectorOptions = [
    { value: "0", text: "None" },
    { value: "zones", text: "Zoning", image: "Zones" },
    { value: "area", text: "Districts", image: "LotTool" },
    { value: "signature", text: "Signature Buildings", image: "ZoneSignature" },
    { value: "roads", text: "Roads", image: "Roads" },
    { value: "electricity", text: "Electricity", image: "Electricity" },
    { value: "water", text: "Water & Sewage", image: "Water" },
    { value: "health", text: "Healthcare & Deathcare", image: "Healthcare" },
    { value: "garbage", text: "Garbage Management", image: "Garbage" },
    { value: "education", text: "Education & Research", image: "Education" },
    { value: "fire", text: "Fire & Rescue", image: "FireSafety" },
    { value: "police", text: "Police & Administration", image: "Police" },
    { value: "transport", text: "Transportation", image: "Transportation" },
    { value: "parks", text: "Parks & Recreation", image: "ParksAndRecreation" },
    { value: "communication", text: "Communications", image: "Communications" },
    {
      value: "landscaping",
      text: "Landscaping",
      image: "Landscaping",
    },
  ];

  uiGroupProcessor(uiGroupSelectorOptions, uiGroupSelector);
}

initRadio();

document.addEventListener("DOMContentLoaded", function () {
  const uiAssetMenuRadio = document.getElementById("uiAssetMenu");
  const uiAssetCategoryRadio = document.getElementById("uiAssetCategory");
  const uiAssetTitle = document.getElementById("uiAssetTitle");
  const nameInput = document.getElementById("name");
  const components = document.getElementById("components");
  const uiGroupSelector = document.getElementById("uiGroupSelector");
  const generateButton = document.getElementById("generate-button");
  const uiGroupCID = document.getElementById("uiGroupCID");
  const uiGroupVanilla = document.getElementById("uiGroupVanilla");
  const uiGroupCustom = document.getElementById("uiGroupCustom");

  function handleRadioChange() {
    if (uiAssetMenuRadio.checked) {
      uiAssetTitle.innerHTML = "Menu";
      nameInput.disabled = false;
      components.classList.remove("d-none");
      load_menuGroup(uiGroupSelector);
    } else {
      uiAssetTitle.innerHTML = "Category";
      nameInput.disabled = false;
      components.classList.remove("d-none");
      load_categoryGroup(uiGroupSelector);
    }
  }

  uiAssetMenuRadio.addEventListener("change", handleRadioChange);
  uiAssetCategoryRadio.addEventListener("change", handleRadioChange);

  var nameValid = !nameInput.value == "";

  nameInput.addEventListener("input", function () {
    nameValid = !nameInput.value == "";
    updateButtonState();
  });
  var uiGroupCIDValid = true;
  uiGroupVanilla.addEventListener("change", function () {
    if (uiGroupVanilla.checked) {
      uiGroupCIDValid = true;
      updateButtonState();
    }
  });
  uiGroupCustom.addEventListener("change", function () {
    uiGroupCIDValid = false;
    updateButtonState();
    uiGroupCID.addEventListener("input", function () {
      uiGroupCIDValid = uiGroupCID.value.length == 32;
      updateButtonState();
    });
  });

  function updateButtonState() {
    if (nameValid && uiGroupCIDValid) {
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
  const name = document.getElementById("name").value;
  const uiAssetMenu = document.getElementById("uiAssetMenu");
  const uiAssetCategory = document.getElementById("uiAssetCategory");
  var uiType;
  if (uiAssetMenu.checked) {
    uiType = "UIAssetMenuPrefab";
  } else if (uiAssetCategory.checked) {
    uiType = "UIAssetCategoryPrefab";
  } else {
    alert("ERROR!");
  }

  const line_values = [name, uiType];
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
    "$type": "0|Game.Prefabs.{uiType}, Game",
    "name": "{name}",
    "active": true,
    "components": {
        "$id": 1,
        "$type": "1|System.Collections.Generic.List\`1[[Game.Prefabs.ComponentBase, Game]], mscorlib",
        "$rlength": {componentCount},
        "$rcontent": [{components}
        ]
    }
}`;

  const [name, uiType] = line_values;

  var componentCount = 0;
  var nextId = 2;
  var nextTypeId = 2;
  var usedId = 0;
  var usedTypeId = 0;

  if (1 == 1) {
    var uiObjectReturn = uiObject(nextId, nextTypeId);
    var uiObjectText = uiObjectReturn[0];
    usedId = uiObjectReturn[1];
    usedTypeId = uiObjectReturn[2];
    nextId = nextId + usedId;
    nextTypeId = nextTypeId + usedTypeId;
    componentCount += 1;
  }
  const components = joinWithSeparator(",", uiObjectText);

  return template
    .replaceAll("{name}", name)
    .replaceAll("{componentCount}", componentCount)
    .replaceAll("{components}", components)
    .replaceAll("{uiType}", uiType);
}

function downloadFile() {
  const name = document.getElementById("name").value;
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
