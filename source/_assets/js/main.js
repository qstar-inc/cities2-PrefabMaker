import "./utils/loadPrefab";
import "./utils/download-file";

// const baseurl = "https://qstar-inc.github.io/cities2-PrefabMaker/";

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
export function hideToolBrowser() {
  const hideText = document.getElementById("hide-text");
  if (hideText.textContent == "[Hide Tool Browser]") {
    hideText.textContent = "[Show Tool Browser]";
    // hideText.parentElement.parentElement.classList.add("m-auto");
  } else {
    hideText.textContent = "[Hide Tool Browser]";
    // hideText.parentElement.parentElement.classList.remove("m-auto");
  }
}

window.hideToolBrowser = hideToolBrowser;
