import {
  hexToRgb01,
  isColorEmpty,
  setupColorPicker,
} from "../utils/colorPicker";
import { serviceCrime } from "../cs2_components/component-crime-accumulation";
import { groupAmbience } from "../cs2_components/component-group-ambience";
import { serviceMail } from "../cs2_components/component-mail-accumulation";
import { themeObject } from "../cs2_components/component-theme-object";
import { uiObject } from "../cs2_components/component-ui-object";
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
    { value: 1, text: "Zones Residential" },
    { value: 2, text: "Zones Commercial" },
    { value: 3, text: "Zones Industrial" },
    { value: 4, text: "Zones Office" },
    { value: 5, text: "Zones Extractors" },
  ];
  uiGroupSelectorOptions.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.textContent = option.text;
    uiGroupSelector.appendChild(optionElement);
    uiGroupSelector.disabled = false;
  });

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

  const pollutionGround =
    parseFloat(document.getElementById("pollutionGround").value) || 0;
  const pollutionAir =
    parseFloat(document.getElementById("pollutionAir").value) || 0;
  const pollutionNoise =
    parseFloat(document.getElementById("pollutionNoise").value) || 0;
  const zonePollutionValues = [pollutionGround, pollutionAir, pollutionNoise];

  const serviceUpkeep =
    parseFloat(document.getElementById("serviceUpkeep").value) || 0;
  const serviceElectricity =
    parseFloat(document.getElementById("serviceElectricity").value) || 0;
  const serviceWater =
    parseFloat(document.getElementById("serviceWater").value) || 0;
  const serviceGarbage =
    parseFloat(document.getElementById("serviceGarbage").value) || 0;
  const serviceTelecom =
    parseFloat(document.getElementById("serviceTelecom").value) || 0;
  const zoneServiceValues = [
    serviceUpkeep,
    serviceElectricity,
    serviceWater,
    serviceGarbage,
    serviceTelecom,
  ];
  const serviceCrimeValue =
    parseFloat(document.getElementById("serviceCrime").value) || 0;

  const serviceMailCollect =
    document.getElementById("serviceMailCollect").checked;
  const serviceMailSending =
    parseFloat(document.getElementById("serviceMailSending").value) || 0;
  const serviceMailReceiving =
    parseFloat(document.getElementById("serviceMailReceiving").value) || 0;
  const serviceMailValues = [
    serviceMailCollect,
    serviceMailSending,
    serviceMailReceiving,
  ];

  const requiresTheme = document.getElementById("requiresTheme").checked;
  const selectedTheme = document.querySelector(".theme-button.selected");
  var themeValue;
  if (requiresTheme && selectedTheme != null) {
    themeValue = selectedTheme.id.replace("theme-", "");
  } else {
    themeValue = 0;
  }

  const scaleResidentials =
    document.getElementById("scaleResidentials").checked;
  const resiProp = parseFloat(document.getElementById("resiProp").value) || 0;
  const spaceMultiplier =
    parseFloat(document.getElementById("spaceMultiplier").value) || 0;
  const fireHazard =
    parseFloat(document.getElementById("fireHazard").value) || 0;
  let allowedSold = [];
  const allowedSoldOptions = Array.from(
    document.getElementById("allowedSold_select").selectedOptions
  );
  allowedSold = allowedSoldOptions.map((option) =>
    option.getAttribute("value")
  );
  let allowedManufactured = [];
  const allowedManufacturedOptions = Array.from(
    document.getElementById("allowedManufactured_select").selectedOptions
  );
  allowedManufactured = allowedManufacturedOptions.map((option) =>
    option.getAttribute("value")
  );
  let allowedStored = [];
  const allowedStoredOptions = Array.from(
    document.getElementById("allowedStored_select").selectedOptions
  );
  allowedStored = allowedStoredOptions.map((option) =>
    option.getAttribute("value")
  );
  const zonePropertiesValues = [
    scaleResidentials,
    resiProp,
    spaceMultiplier,
    fireHazard,
    JSON.stringify(allowedSold),
    JSON.stringify(allowedManufactured),
    JSON.stringify(allowedStored),
  ];

  const uiGroupSelector = document.getElementById("uiGroupSelector").value || 0;
  const uiPriority = document.getElementById("uiPriority").value || -1;
  const uiIcon = document.getElementById("uiIcon").value || "";
  const uiLargeIcon = document.getElementById("uiLargeIcon").value || "";
  const isDebugObject = document.getElementById("isDebugObject").checked;
  const uiObjectValues = [
    uiGroupSelector,
    uiPriority,
    uiIcon,
    uiLargeIcon,
    isDebugObject,
  ];

  const groupAmbienceValue =
    document.getElementById("groupAmbienceSelector").value || 0;

  const milestone = document.getElementById("milestone").value || 0;
  const milestoneValues = [milestone, uiGroupSelector];

  const line_values = [
    name,
    areaTypeId,
    c1,
    c2,
    isOffice,
    zonePollutionValues,
    zoneServiceValues,
    serviceCrimeValue,
    serviceMailValues,
    themeValue,
    zonePropertiesValues,
    uiObjectValues,
    groupAmbienceValue,
    milestoneValues,
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

  const [
    name,
    areaTypeId,
    c1,
    c2,
    isOffice,
    zonePollutionValues,
    zoneServiceValues,
    serviceCrimeValue,
    serviceMailValues,
    themeValue,
    zonePropertiesValues,
    uiObjectValues,
    groupAmbienceValue,
    milestoneValues,
  ] = line_values;

  var componentCount = 0;
  var nextId = 2;
  var nextTypeId = 2;
  var usedId = 0;
  var usedTypeId = 0;

  if (1 == 1) {
    var zonePollutionReturn = zonePollution(
      nextId,
      nextTypeId,
      zonePollutionValues
    );
    var zonePolltionText = zonePollutionReturn[0];
    usedId = zonePollutionReturn[1];
    usedTypeId = zonePollutionReturn[2];
    nextId = nextId + usedId;
    nextTypeId = nextTypeId + usedTypeId;
    componentCount += 1;
  }

  if (1 == 1) {
    var zoneServiceReturn = zoneServiceConsumption(
      nextId,
      nextTypeId,
      zoneServiceValues
    );
    var zoneServiceText = zoneServiceReturn[0];
    usedId = zoneServiceReturn[1];
    usedTypeId = zoneServiceReturn[2];
    nextId = nextId + usedId;
    nextTypeId = nextTypeId + usedTypeId;
    componentCount += 1;
  }

  if (1 == 1) {
    var serviceCrimeReturn = serviceCrime(
      nextId,
      nextTypeId,
      serviceCrimeValue
    );
    var serviceCrimeText = serviceCrimeReturn[0];
    usedId = serviceCrimeReturn[1];
    usedTypeId = serviceCrimeReturn[2];
    nextId = nextId + usedId;
    nextTypeId = nextTypeId + usedTypeId;
    componentCount += 1;
  }

  if (1 == 1) {
    var serviceMailReturn = serviceMail(nextId, nextTypeId, serviceMailValues);
    var serviceMailText = serviceMailReturn[0];
    usedId = serviceMailReturn[1];
    usedTypeId = serviceMailReturn[2];
    nextId = nextId + usedId;
    nextTypeId = nextTypeId + usedTypeId;
    componentCount += 1;
  }

  var themeText;
  if (themeValue != 0) {
    var themeReturn = themeObject(nextId, nextTypeId, themeValue);
    themeText = themeReturn[0];
    usedId = themeReturn[1];
    usedTypeId = themeReturn[2];
    nextId = nextId + usedId;
    nextTypeId = nextTypeId + usedTypeId;
    componentCount += 1;
  }
  var zonePropertiesText;
  if (1 == 1) {
    var zonePropertiesReturn = zoneProperties(
      nextId,
      nextTypeId,
      zonePropertiesValues
    );
    zonePropertiesText = zonePropertiesReturn[0];
    usedId = zonePropertiesReturn[1];
    usedTypeId = zonePropertiesReturn[2];
    nextId = nextId + usedId;
    nextTypeId = nextTypeId + usedTypeId;
    componentCount += 1;
  }

  if (1 == 1) {
    var uiObjectReturn = uiObject(nextId, nextTypeId, uiObjectValues);
    var uiObjectText = uiObjectReturn[0];
    usedId = uiObjectReturn[1];
    usedTypeId = uiObjectReturn[2];
    nextId = nextId + usedId;
    nextTypeId = nextTypeId + usedTypeId;
    componentCount += 1;
  }

  if (groupAmbienceValue != 0) {
    var groupAmbienceReturn = groupAmbience(
      nextId,
      nextTypeId,
      groupAmbienceValue
    );
    var groupAmbienceText = groupAmbienceReturn[0];
    usedId = groupAmbienceReturn[1];
    usedTypeId = groupAmbienceReturn[2];
    nextId = nextId + usedId;
    nextTypeId = nextTypeId + usedTypeId;
    componentCount += 1;
  }

  if (1 == 1) {
    var unlockableReturn = unlockable(nextId, nextTypeId, milestoneValues);
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
