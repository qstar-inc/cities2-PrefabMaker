import "./utils/loadPrefab";

// const baseurl = "https://qstar-inc.github.io/cities2-PrefabMaker/";

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
