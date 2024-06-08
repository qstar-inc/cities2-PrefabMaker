document.addEventListener("DOMContentLoaded", function () {
  const requiresThemecheckbox = document.getElementById("requiresTheme");
  const themeContainer = document.getElementById("theme-container");
  const themeButtons = document.querySelectorAll(".theme-button");

  requiresThemecheckbox.addEventListener("change", function () {
    if (this.checked) {
      themeContainer.style.display = "flex";
    } else {
      themeContainer.style.display = "none";
    }
  });

  themeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      themeButtons.forEach((btn) => {
        btn.classList.remove("selected");
        btn.style.backgroundImage = btn.style.backgroundImage.replace(
          ', url("/assets/images/theme/_mask.svg")',
          ""
        );
      });
      this.classList.add("selected");
      this.style.backgroundImage =
        this.style.backgroundImage + ', url("/assets/images/theme/_mask.svg")';
    });
  });
});

export function themeObject(id, typeId, themeObject) {
  return [
    `
            {
                "$id": {id},
                "$type": "{typeId}|Game.Prefabs.ThemeObject, Game",
                "name": "ThemeObject",
                "active": true,
                "m_Theme": $fstrref:"UnityGUID:{themeID}"
            }`
      .replaceAll("{id}", id)
      .replaceAll("{typeId}", typeId)
      .replaceAll("{themeID}", resolveTheme(themeObject)),
    1,
    1,
  ];
}

function resolveTheme(themeObject) {
  var guid = "";
  switch (themeObject) {
    case "eu":
      guid = "846c60044f7ead04d9b11f0d749ea5f2";
      break;
    case "na":
      guid = "6f24f89d231e81043b538ce3fb2b54ae";
      break;
    default:
      break;
  }
  return guid;
}
