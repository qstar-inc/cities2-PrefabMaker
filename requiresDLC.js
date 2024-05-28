document.addEventListener("DOMContentLoaded", function () {
  const DLCbuttons = document.querySelectorAll(".dlc-button");
  const requiresDLCcheckbox = document.getElementById("requiresDLC");
  const DLCcontainer = document.querySelector(".dlc-container");

  requiresDLCcheckbox.addEventListener("change", function () {
    if (this.checked) {
      DLCcontainer.style.display = "flex";
    } else {
      DLCcontainer.style.display = "none";
    }
  });

  DLCbuttons.forEach((button) => {
    button.addEventListener("click", function () {
      DLCbuttons.forEach((btn) => {
        btn.classList.remove("selected");
      });
      this.classList.add("selected");
    });
  });
});

function getDLC() {
  var dlc = "";
  const selectedButton = document.querySelector(".dlc-button.selected");
  if (selectedButton) {
    dlc = selectedButton.id;
  }
  return dlc;
}
