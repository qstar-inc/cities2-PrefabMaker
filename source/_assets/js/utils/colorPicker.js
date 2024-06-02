import { truncFixed } from "./utils";

function setupColorPicker(hexInputId, colorPickerId) {
  const hexInput = document.getElementById(hexInputId);
  const colorPicker = document.getElementById(colorPickerId);

  hexInput.addEventListener("input", (event) => {
    const hexValue = event.target.value;
    if (isValidHex(hexValue)) {
      colorPicker.value = hexValue;
      colorPicker.style.backgroundColor = getInverseColor(hexValue);
    }
  });

  colorPicker.addEventListener("input", (event) => {
    const colorValue = event.target.value;
    hexInput.value = colorValue;
    colorPicker.style.backgroundColor = getInverseColor(colorValue);
  });

  const initialHexValue = hexInput.value || "#000000";
  if (isValidHex(initialHexValue)) {
    colorPicker.style.backgroundColor = getInverseColor(initialHexValue);
  }

  function isValidHex(hex) {
    const hexPattern = /^#([0-9A-F]{6})$/i;
    return hexPattern.test(hex);
  }

  function getInverseColor(hex) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#FFFFFF" : "#000000";
  }
}

setupColorPicker("hexInput1", "colorPicker1");
setupColorPicker("hexInput2", "colorPicker2");
setupColorPicker("hexInput3", "colorPicker3");

export function isColorEmpty(color) {
  color = color == [] ? "#000000" : color;
  return color;
}

export function hexToRgb01(hex) {
  hex = hex.replace("#", "");

  let r = truncFixed(parseInt(hex.substring(0, 2), 16) / 255, 10);
  let g = truncFixed(parseInt(hex.substring(2, 4), 16) / 255, 10);
  let b = truncFixed(parseInt(hex.substring(4, 6), 16) / 255, 10);

  let rgb01 = `${r},${g},${b},1`;

  const values = rgb01.split(",");
  return values.join(",\n                ");
}

export function rgbToHex(rgb) {
  var r = Math.round(rgb[0] * 255)
    .toString(16)
    .padStart(2, "0");
  var g = Math.round(rgb[1] * 255)
    .toString(16)
    .padStart(2, "0");
  var b = Math.round(rgb[2] * 255)
    .toString(16)
    .padStart(2, "0");
  return "#" + r + g + b;
}
