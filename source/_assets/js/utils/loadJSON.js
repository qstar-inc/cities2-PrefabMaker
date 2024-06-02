import { processCompanyData } from "../brand_maker/loadJSON-company";

export function loadJSON(selector, url, type) {
  $.ajax({
    url: url,
    dataType: "json",
    success: function (data) {
      if (type == "company") {
        var dataFromJson = processCompanyData(data);
      }

      $(selector).select2({
        data: dataFromJson,
        dropdownAutoWidth: true,
        closeOnSelect: false,
        placeholder: "Select companies",
        theme: "bootstrap-5",
        // selectionCssClass: "select2--small",
        dropdownCssClass: "select2--small",
        matcher(params, data) {
          const originalMatcher = $.fn.select2.defaults.defaults.matcher;
          const result = originalMatcher(params, data);

          if (
            result &&
            data.children &&
            result.children &&
            data.children.length
          ) {
            if (
              data.children.length !== result.children.length &&
              data.text.toLowerCase().includes(params.term.toLowerCase())
            ) {
              result.children = data.children;
            }
            return result;
          }

          return null;
        },
      });
      $(selector).prop("disabled", false);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error("Error loading data: ", textStatus, errorThrown);
      $(selector).prop("disabled", true);
      $("generate-button").prop("disabled", true);
    },
  });
}
