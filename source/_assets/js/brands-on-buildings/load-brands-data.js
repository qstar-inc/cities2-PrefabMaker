import brandObjectOnItem from "../../../_data/brandObjectOnItem.json";

const jsondata = brandObjectOnItem.data;

$(document).ready(function () {
  new DataTable("#tableX", {
    data: jsondata,
    columns: [{ data: "item" }, { data: "zone" }],
    layout: {
      top1: "searchPanes",
    },
    searchPanes: {
      layout: "columns-2",
    },
    lengthMenu: [
      [10, 25, 50, -1],
      [10, 25, 50, "All"],
    ],
    pageLength: 50,
  });
});
