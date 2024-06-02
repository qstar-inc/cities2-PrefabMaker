import { rgbToHex } from "../utils/colorPicker";
import { resolveDlcNameFromGuid } from "../cs2_components/component-dlc";

document.addEventListener("DOMContentLoaded", function () {
  const fileUpload = document.getElementById("fileUpload");
  const spinnerOverlay = document.getElementById("spinner-overlay");
  const blurOverlay = document.getElementById("blur-overlay");

  fileUpload.addEventListener("change", handleFileUpload);

  function handleFileUpload(event) {
    spinnerOverlay.classList.remove("d-none");
    blurOverlay.classList.remove("d-none");
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const fileContents = e.target.result;
        try {
          const data = parsePrefabFile(fileContents);
          populateForm(data);
        } catch (error) {
          console.error("Error parsing Prefab:", error);
          alert(
            "Invalid Prefab file. Please select a valid Brand Prefab file."
          );
        }
      };
      reader.readAsText(file);
    } else {
      alert("Please upload a valid Brand Prefab file.");
    }

    spinnerOverlay.classList.add("d-none");
    blurOverlay.classList.add("d-none");
  }

  function parsePrefabFile(contents) {
    const brandData = {
      shortname: "",
      name: "",
      companies_type: [],
      colors: ["#000000", "#000000", "#000000"],
      requiresDLC: false,
      requiredDLC: "",
    };

    const nameRegex =
      /"\$type": "0\|Game.Prefabs.BrandPrefab, Game",\s*"name"\s*:\s*"([^"]*)"/;
    const companiesRegex =
      /"\$type": "[\d]+\|Game.Prefabs.CompanyPrefab\[\], Game",\s*"\$rlength": [\d]+,\s*"\$rcontent": \[([\w\s,":$]+)\s*\]/m;
    const companyRegex = /\$fstrref:"UnityGUID:([^"]*)"/g;
    const obsoleteIndentifierRegex =
      /"\$type": "[\d]+\|Game.Prefabs.PrefabIdentifierInfo\[\], Game",\s*"\$rlength": [\d]+,\s*"\$rcontent": \[([\w"$:,.\|\s_{}]+)\s*\]/m;
    const obsoleteTextRegex = /"m_Name": "([\w ]+)",/;
    const brandColorsRegex =
      /"m_BrandColors": [{\w\s"$:,.\[\]\|]*rcontent": \[\s*{\s*"\$[\w": \|.,]*([\w\s".,:\|$]+)},\s*{\s*"\$[\w": \|.,]*([\w\s".,:\|$]+)},\s*{\s*"\$[\w": \|.,]*([\w\s".,:\|$]+)}/g;
    const requiresDLCRegex =
      /Game.Prefabs.ContentPrerequisite,[ \w",\s:]+m_ContentPrerequisite": \$[\w:"]+([\w]{32})"/;

    var nameRegexMatch = contents.match(nameRegex);
    if (!nameRegexMatch) {
      throw new Error("Invalid prefab file format.");
    } else {
      const shortname = contents.match(nameRegex)[1];
      brandData.shortname = shortname;
      const obsoleteComponentMatches = contents.match(obsoleteIndentifierRegex);
      if (obsoleteComponentMatches == null) {
        brandData.name = shortname;
      } else {
        brandData.name =
          obsoleteComponentMatches[1].match(obsoleteTextRegex)[1];
      }

      const companyComponentMatches = contents.match(companiesRegex);
      const companiesMatches = [
        ...companyComponentMatches[1].matchAll(companyRegex),
      ];
      brandData.companies_type = companiesMatches.map(
        (subArray) => subArray[1]
      );

      var colorMatches = [...contents.matchAll(brandColorsRegex)][0];
      colorMatches.shift();
      colorMatches = colorMatches.map((rgbString) => {
        const rgbValues = rgbString
          .trim()
          .split(",")
          .map((value) => parseFloat(value.trim()));
        const hexColor = rgbToHex(rgbValues);
        return hexColor;
      });
      brandData.colors = [colorMatches[0], colorMatches[1], colorMatches[2]];

      const dlcMatches = contents.match(requiresDLCRegex);
      if (dlcMatches != null) {
        brandData.requiresDLC = true;
        brandData.requiredDLC = dlcMatches[1];
      }

      return brandData;
    }
  }

  function populateForm(data) {
    document.getElementById("shortname").value = data.shortname;
    document.getElementById("name").value = data.name;
    if (data.shortname == data.name) {
      document.getElementById("sameAsShortName").checked = true;
      document.getElementById("name").disabled = true;
    } else {
      document.getElementById("sameAsShortName").checked = false;
      document.getElementById("name").disabled = false;
    }

    var $select = $("#companies_type");
    $select.val(data.companies_type).trigger("change");

    document.getElementById("hexInput1").value = data.colors[0];
    document.getElementById("colorPicker1").value = data.colors[0];
    document.getElementById("hexInput2").value = data.colors[1];
    document.getElementById("colorPicker2").value = data.colors[1];
    document.getElementById("hexInput3").value = data.colors[2];
    document.getElementById("colorPicker3").value = data.colors[2];
    document.getElementById("requiresDLC").checked = data.requiresDLC;

    const dlcButtons = document.querySelectorAll(".dlc-button");
    dlcButtons.forEach((button) => button.classList.remove("selected"));
    if (data.requiresDLC) {
      document.querySelector(".dlc-container").style.display = "flex";
      var buttonID = "dlc-" + resolveDlcNameFromGuid(data.requiredDLC);
      document.getElementById(buttonID).classList.add("selected");
    }
  }
});
