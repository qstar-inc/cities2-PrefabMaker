export function joinWithSeparator(separator = ",", ...values) {
  const filteredValues = values.filter(
    (value) => value != null && value != "" && typeof value !== "undefined"
  );
  return filteredValues.join(separator);
}

export function truncFixed(num, to = 0) {
  let strNum = typeof num == "string" ? num : num.toString();
  let result = "";
  let i = 0,
    j = -Infinity;

  for (; i < strNum.length; i++) {
    if (strNum[i] != ".") {
      result += strNum[i];
    } else {
      result += to == 0 ? "" : strNum[i];
      j = i;
    }

    if (i == j + to) break;
  }

  if (i == strNum.length) {
    if (j == -Infinity) {
      if (to != 0) {
        result += ".";
        for (let k = 0; k < to; k++) {
          result += "0";
        }
      }
    } else {
      while (i <= j + to) {
        result += "0";
        i++;
      }
    }
  }

  if (to > 0 && result.includes(".")) {
    result = result.replace(/\.?0+$/, "");
  }

  return result;
}

export function copyPreContent(preElement) {
  var text = preElement.textContent;

  navigator.clipboard.writeText(text).then(
    function () {
      var toastElement = document.getElementById("text-copied-toast");
      var toast = new bootstrap.Toast(toastElement);
      toast.show();
    },
    function (err) {
      console.error("There was an error copying the text: ", err);
    }
  );
}
