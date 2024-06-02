document.addEventListener("DOMContentLoaded", function () {
  const shortNameInput = document.getElementById("shortname");
  const nameInput = document.getElementById("name");
  const sameAsShortNameCheckbox = document.getElementById("sameAsShortName");

  nameInput.value = shortNameInput.value;

  sameAsShortNameCheckbox.addEventListener("change", function () {
    if (this.checked) {
      nameInput.value = shortNameInput.value;
      nameInput.disabled = true;
    } else {
      nameInput.disabled = false;
    }
  });

  shortNameInput.addEventListener("input", function () {
    if (sameAsShortNameCheckbox.checked) {
      nameInput.value = this.value;
    }
  });
});
