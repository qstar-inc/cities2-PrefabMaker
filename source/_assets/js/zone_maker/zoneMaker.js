import {
  hexToRgb01,
  isColorEmpty,
  setupColorPicker,
} from "../utils/colorPicker";
import { serviceCrime } from "../cs2_components/component-crime-accumulation";
import { groupAmbience } from "../cs2_components/component-group-ambience";
import { serviceMail } from "../cs2_components/component-mail-accumulation";
import { themeObject } from "../cs2_components/component-theme-object";
import {
  uiObject,
  uiGroupProcessor,
} from "../cs2_components/component-ui-object";
import { unlockable } from "../cs2_components/component-unlockable";
import { zonePollution } from "../cs2_components/component-zone-pollution";
import {
  zoneProperties,
  loadSelects,
} from "../cs2_components/component-zone-properties";
import { zoneServiceConsumption } from "../cs2_components/component-zone-service-consumption";
import { copyPreContent, joinWithSeparator } from "../utils/utils";

document.addEventListener("DOMContentLoaded", function () {
  const uiGroupSelector = document.getElementById("uiGroupSelector");
  const uiGroupSelectorOptions = [
    { value: 0, text: "None" },
    { value: "res", text: "Zones Residential" },
    { value: "com", text: "Zones Commercial" },
    { value: "ind", text: "Zones Industrial" },
    { value: "off", text: "Zones Office" },
    { value: "ext", text: "Zones Extractors" },
  ];
  uiGroupProcessor(uiGroupSelectorOptions, uiGroupSelector);

  const resourcesState = [
    "allowedSold",
    "allowedManufactured",
    "allowedStored",
    "none",
  ];
  resourcesState.forEach((id) => {
    if (id != "none") {
      loadSelects(id);
    }
    document.getElementById(id).addEventListener("change", function () {
      resourcesState.forEach((stateId) => {
        if (document.getElementById(stateId).checked) {
          document
            .getElementById(stateId + "-container")
            .classList.remove("d-none");
        } else {
          document
            .getElementById(stateId + "-container")
            .classList.add("d-none");
        }
      });
    });
  });

  const nameInput = document.getElementById("name");
  const generateButton = document.getElementById("generate-button");

  var nameValid = !nameInput.value == "";

  nameInput.addEventListener("input", function () {
    nameValid = !nameInput.value == "";
    updateButtonState();
  });

  function updateButtonState() {
    if (nameValid) {
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
  const areaTypeId = document.getElementById("areaTypeSelector").value;
  const c1 = isColorEmpty(document.getElementById("hexInput1").value);
  const c2 = isColorEmpty(document.getElementById("hexInput2").value);
  const isOffice = document.getElementById("isOffice").checked;

  const line_values = [name, areaTypeId, c1, c2, isOffice];
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
    "$type": "0|Game.Prefabs.ZonePrefab, Game",
    "name": "{name}",
    "active": true,
    "components": {
        "$id": 1,
        "$type": "1|System.Collections.Generic.List\`1[[Game.Prefabs.ComponentBase, Game]], mscorlib",
        "$rlength": {componentCount},
        "$rcontent": [{components}
        ]
    },
    "m_AreaType": {areaTypeId},
    "m_Color": {
        "$type": "{colorTypeId}|UnityEngine.Color[], UnityEngine.CoreModule",
        {color1}
    },
    "m_Edge": {
        "$type": {colorTypeId},
        {color2}
    },
    "m_Office": {isOffice}
}`;

  const [name, areaTypeId, c1, c2, isOffice] = line_values;

  var componentCount = 0;
  var nextId = 2;
  var nextTypeId = 2;
  var usedId = 0;
  var usedTypeId = 0;

  if (1 == 1) {
    var zonePollutionReturn = zonePollution(nextId, nextTypeId);
    var zonePolltionText = zonePollutionReturn[0];
    usedId = zonePollutionReturn[1];
    usedTypeId = zonePollutionReturn[2];
    nextId = nextId + usedId;
    nextTypeId = nextTypeId + usedTypeId;
    componentCount += 1;
  }

  if (1 == 1) {
    var zoneServiceReturn = zoneServiceConsumption(nextId, nextTypeId);
    var zoneServiceText = zoneServiceReturn[0];
    usedId = zoneServiceReturn[1];
    usedTypeId = zoneServiceReturn[2];
    nextId = nextId + usedId;
    nextTypeId = nextTypeId + usedTypeId;
    componentCount += 1;
  }

  if (1 == 1) {
    var serviceCrimeReturn = serviceCrime(nextId, nextTypeId);
    var serviceCrimeText = serviceCrimeReturn[0];
    usedId = serviceCrimeReturn[1];
    usedTypeId = serviceCrimeReturn[2];
    nextId = nextId + usedId;
    nextTypeId = nextTypeId + usedTypeId;
    componentCount += 1;
  }

  if (1 == 1) {
    var serviceMailReturn = serviceMail(nextId, nextTypeId);
    var serviceMailText = serviceMailReturn[0];
    usedId = serviceMailReturn[1];
    usedTypeId = serviceMailReturn[2];
    nextId = nextId + usedId;
    nextTypeId = nextTypeId + usedTypeId;
    componentCount += 1;
  }

  var themeText;
  if (1 == 1) {
    var themeReturn = themeObject(nextId, nextTypeId);
    themeText = themeReturn[0];
    usedId = themeReturn[1];
    usedTypeId = themeReturn[2];
    nextId = nextId + usedId;
    nextTypeId = nextTypeId + usedTypeId;
    if (themeText != "") {
      componentCount += 1;
    }
  }
  var zonePropertiesText;
  if (1 == 1) {
    var zonePropertiesReturn = zoneProperties(nextId, nextTypeId);
    zonePropertiesText = zonePropertiesReturn[0];
    usedId = zonePropertiesReturn[1];
    usedTypeId = zonePropertiesReturn[2];
    nextId = nextId + usedId;
    nextTypeId = nextTypeId + usedTypeId;
    componentCount += 1;
  }

  if (1 == 1) {
    var uiObjectReturn = uiObject(nextId, nextTypeId);
    var uiObjectText = uiObjectReturn[0];
    usedId = uiObjectReturn[1];
    usedTypeId = uiObjectReturn[2];
    nextId = nextId + usedId;
    nextTypeId = nextTypeId + usedTypeId;
    componentCount += 1;
  }

  if (1 == 1) {
    var groupAmbienceReturn = groupAmbience(nextId, nextTypeId);
    var groupAmbienceText = groupAmbienceReturn[0];
    usedId = groupAmbienceReturn[1];
    usedTypeId = groupAmbienceReturn[2];
    nextId = nextId + usedId;
    nextTypeId = nextTypeId + usedTypeId;
    componentCount += 1;
  }

  if (1 == 1) {
    var unlockableReturn = unlockable(
      nextId,
      nextTypeId,
      uiGroupSelector.value
    );
    var unlockableText = unlockableReturn[0];
    usedId = unlockableReturn[1];
    usedTypeId = unlockableReturn[2];
    nextId = nextId + usedId;
    nextTypeId = nextTypeId + usedTypeId;
    componentCount += 1;
  }

  const components = joinWithSeparator(
    ",",
    zonePolltionText,
    zoneServiceText,
    serviceCrimeText,
    serviceMailText,
    themeText,
    zonePropertiesText,
    uiObjectText,
    groupAmbienceText,
    unlockableText
  );

  return template
    .replaceAll("{name}", name)
    .replaceAll("{componentCount}", componentCount)
    .replaceAll("{components}", components)
    .replaceAll("{areaTypeId}", areaTypeId)
    .replaceAll("{colorTypeId}", nextTypeId)
    .replaceAll("{color1}", hexToRgb01(c1, 8))
    .replaceAll("{color2}", hexToRgb01(c2, 8))
    .replaceAll("{isOffice}", isOffice);
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

setupColorPicker("hexInput1", "colorPicker1");
setupColorPicker("hexInput2", "colorPicker2");
