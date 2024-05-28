function setupColorPicker(hexInputId, colorPickerId) {
  const hexInput = document.getElementById(hexInputId);
  const colorPicker = document.getElementById(colorPickerId);

  // Update color picker when hex value is pasted or typed
  hexInput.addEventListener("input", (event) => {
    const hexValue = event.target.value;
    if (isValidHex(hexValue)) {
      colorPicker.value = hexValue;
      colorPicker.style.backgroundColor = getInverseColor(hexValue);
    }
  });

  // Update hex input when color is picked
  colorPicker.addEventListener("input", (event) => {
    const colorValue = event.target.value;
    hexInput.value = colorValue;
    colorPicker.style.backgroundColor = getInverseColor(colorValue);
  });

  const initialHexValue = hexInput.value || "#000000"; // Default to black if no value is set
  if (isValidHex(initialHexValue)) {
    colorPicker.style.backgroundColor = getInverseColor(initialHexValue);
  }

  function isValidHex(hex) {
    // Check if the hex value is a valid 6-digit hex code
    const hexPattern = /^#([0-9A-F]{6})$/i;
    return hexPattern.test(hex);
  }

  function getInverseColor(hex) {
    // Convert hex to RGB
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    // Invert the colors
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;
    // Convert RGB back to hex
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#FFFFFF" : "#000000";
  }
}

setupColorPicker("hexInput1", "colorPicker1");
setupColorPicker("hexInput2", "colorPicker2");
setupColorPicker("hexInput3", "colorPicker3");

function isColorEmpty(color) {
  color = color == [] ? "#000000" : color;
  return color;
}

function hexToRgb01(hex) {
  hex = hex.replace("#", "");

  let r = parseInt(hex.substring(0, 2), 16) / 255;
  let g = parseInt(hex.substring(2, 4), 16) / 255;
  let b = parseInt(hex.substring(4, 6), 16) / 255;

  let rgb01 = `${r.toFixed(6)},${g.toFixed(6)},${b.toFixed(6)}`;

  const values = rgb01.split(",");
  return values.join(",\n                ");
}
