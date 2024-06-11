import { repoUrl } from "@env";

export function initRadio() {
  document.addEventListener("DOMContentLoaded", function () {
    const uiGroupVanilla = document.getElementById("uiGroupVanilla");
    const uiGroupCustom = document.getElementById("uiGroupCustom");
    const uiGroupSelectorDiv = document.getElementById("uiGroupSelectorDiv");
    const uiGroupCIDDiv = document.getElementById("uiGroupCIDDiv");

    function handleRadioChange() {
      if (uiGroupVanilla.checked) {
        uiGroupSelectorDiv.classList.remove("d-none");
        uiGroupCIDDiv.classList.add("d-none");
      } else if (uiGroupCustom.checked) {
        uiGroupSelectorDiv.classList.add("d-none");
        uiGroupCIDDiv.classList.remove("d-none");
      }
    }

    uiGroupVanilla.addEventListener("change", handleRadioChange);
    uiGroupCustom.addEventListener("change", handleRadioChange);
  });
}

export function uiObject(id, typeId) {
  const uiGroupSelector = document.getElementById("uiGroupSelector").value || 0;
  const uiGroupVanilla = document.getElementById("uiGroupVanilla");
  const uiGroupCustom = document.getElementById("uiGroupCustom");
  const uiPriority = document.getElementById("uiPriority").value || -1;
  const uiIcon = document.getElementById("uiIcon").value || "";
  const uiLargeIcon = document.getElementById("uiLargeIcon").value || "";
  const isDebugObject = document.getElementById("isDebugObject").checked;
  var m_Group;
  if (uiGroupVanilla.checked) {
    m_Group = resolveUIGroup(uiGroupSelector);
  } else if (uiGroupCustom.checked) {
    var cid = document.getElementById("uiGroupCID").value;
    m_Group = '$fstrref:"CID:' + cid + '"';
  }

  return [
    `
            {
                "$id": {id},
                "$type": "{typeId}|Game.Prefabs.UIObject, Game",
                "name": "UIObject",
                "active": true,
                "m_Group": {group},
                "m_Priority": {priority},
                "m_Icon": "{icon}",
                "m_LargeIcon": "{large_icon}",
                "m_IsDebugObject": {isDebugObject}
            }`
      .replaceAll("{id}", id)
      .replaceAll("{typeId}", typeId)
      .replaceAll("{group}", m_Group)
      .replaceAll("{priority}", uiPriority)
      .replaceAll("{icon}", uiIcon)
      .replaceAll("{large_icon}", uiLargeIcon)
      .replaceAll("{isDebugObject}", isDebugObject),
    1,
    1,
  ];
}

function resolveUIGroup(group) {
  var guidArray = {
    zonesCat: "0d743b09aa1b82040bfb8a3acb2f18a3",
    servicesCat: "78b77cd071c12434a934336e627b4683",
    toolsCat: "9cc65c58f1801784694374eb31e109d6",
    zones: "0e35df380310be349b98b04a0471b211",
    area: "c995c15d6c305e54e9f97ec36d925aa3",
    signature: "fe713ed04161f9c4aaa8bd6afe3ee740",
    roads: "52dc601ec18335943bd570353370a60f",
    electricity: "3e272309249a8204b8f2964c1fa13ebf",
    water: "90d681e0503149646afc60c51cbff0e0",
    health: "3394634eede28f8418cc08b38d612699",
    garbage: "04b7987c2b77c4f44a1fa128af7c185d",
    education: "18695a3a8120bc0458cc26e4d7289800",
    fire: "4dc93c5e3d309be4abef29aca22f50ae",
    police: "de4ec4af58748ed419e749e49ccc9638",
    transport: "8c4b89937a57f94458d801620a1eaf1b",
    parks: "ddf68f3a9b931fb4f910cb2f77dbbdf1",
    communication: "c40df31a9935f00409d0ca2423e52387",
    landscaping: "0483cabb871c9d848aecc74912d22f8b",
    res: "9580a6e183ba7174a85992b8c1827d3c",
    com: "b6926c65be19b13459de7836112db8a5",
    ind: "4f800ee88525f4f4c97eb5000f5da28a",
    off: "71e84760ccda8fc41800d213cdbf44b4",
    ext: "bf9d9a4d7e119a8469b068587e222a82",
  };
  var guid = guidArray[group];

  if (guid) {
    return '$fstrref:"UnityGUID:' + guid + '"';
  } else {
    return null;
  }
}

export function uiGroupProcessor(uiGroupSelectorOptions, uiGroupSelector) {
  var data = $.map(uiGroupSelectorOptions, function (obj) {
    obj.id = obj.id || obj.value; // replace pk with your identifier
    return obj;
  });

  $(uiGroupSelector).empty();

  $(uiGroupSelector).select2({
    data: data,
    templateResult: formatIcon,
    templateSelection: formatIcon,
    dropdownAutoWidth: true,
    closeOnSelect: false,
    placeholder: "Select UI Group",
    theme: "bootstrap-5",
  });
  $(uiGroupSelector).prop("disabled", false);

  function formatIcon(option) {
    if (!option.image) {
      return option.text;
    }
    var imageUrl = "assets/images/ui/" + option.image + ".svg";
    var optionWithImage = $(
      '<span><img src="' +
        repoUrl +
        imageUrl +
        '" class="select-icon" /> ' +
        option.text +
        "</span>"
    );
    return optionWithImage;
  }
}
