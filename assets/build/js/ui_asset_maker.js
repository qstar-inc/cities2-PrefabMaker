(()=>{"use strict";var e="/cities2-PrefabMaker/";function t(t,n){var a=$.map(t,(function(e){return e.id=e.id||e.value,e}));function o(t){if(!t.image)return t.text;var n="assets/images/ui/"+t.image+".svg";return $('<span><img src="'+e+n+'" class="select-icon" /> '+t.text+"</span>")}$(n).empty(),$(n).select2({data:a,templateResult:o,templateSelection:o,dropdownAutoWidth:!0,closeOnSelect:!1,placeholder:"Select UI Group",theme:"bootstrap-5"}),$(n).prop("disabled",!1)}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,o,c,r,i=[],d=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;d=!1}else for(;!(d=(a=c.call(n)).done)&&(i.push(a.value),i.length!==t);d=!0);}catch(e){l=!0,o=e}finally{try{if(!d&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("uiGroupVanilla"),t=document.getElementById("uiGroupCustom"),n=document.getElementById("uiGroupSelectorDiv"),a=document.getElementById("uiGroupCIDDiv");function o(){e.checked?(n.classList.remove("d-none"),a.classList.add("d-none")):t.checked&&(n.classList.add("d-none"),a.classList.remove("d-none"))}e.addEventListener("change",o),t.addEventListener("change",o)})),document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("uiAssetMenu"),n=document.getElementById("uiAssetCategory"),a=document.getElementById("uiAssetTitle"),o=document.getElementById("name"),c=document.getElementById("components"),r=document.getElementById("uiGroupSelector"),i=document.getElementById("generate-button"),d=document.getElementById("uiGroupCID"),l=document.getElementById("uiGroupVanilla"),u=document.getElementById("uiGroupCustom");function s(){e.checked?(a.innerHTML="Menu",o.disabled=!1,c.classList.remove("d-none"),function(e){t([{value:0,text:"None"},{value:"zonesCat",text:"Zones Toolbar Group"},{value:"servicesCat",text:"Services Toolbar Group"},{value:"toolsCat",text:"Tools Toolbar Group"}],e)}(r)):(a.innerHTML="Category",o.disabled=!1,c.classList.remove("d-none"),function(e){t([{value:"0",text:"None"},{value:"zones",text:"Zoning",image:"Zones"},{value:"area",text:"Districts",image:"LotTool"},{value:"signature",text:"Signature Buildings",image:"ZoneSignature"},{value:"roads",text:"Roads",image:"Roads"},{value:"electricity",text:"Electricity",image:"Electricity"},{value:"water",text:"Water & Sewage",image:"Water"},{value:"health",text:"Healthcare & Deathcare",image:"Healthcare"},{value:"garbage",text:"Garbage Management",image:"Garbage"},{value:"education",text:"Education & Research",image:"Education"},{value:"fire",text:"Fire & Rescue",image:"FireSafety"},{value:"police",text:"Police & Administration",image:"Police"},{value:"transport",text:"Transportation",image:"Transportation"},{value:"parks",text:"Parks & Recreation",image:"ParksAndRecreation"},{value:"communication",text:"Communications",image:"Communications"},{value:"landscaping",text:"Landscaping",image:"Landscaping"}],e)}(r))}e.addEventListener("change",s),n.addEventListener("change",s);var m=""==!o.value;o.addEventListener("input",(function(){m=""==!o.value,b()}));var g=!0;function b(){m&&g?(i.disabled=!1,i.classList.remove("btn-danger"),i.classList.add("btn-primary")):(i.disabled=!0,i.classList.remove("btn-primary"),i.classList.add("btn-danger"))}l.addEventListener("change",(function(){l.checked&&(g=!0,b())})),u.addEventListener("change",(function(){g=!1,b(),d.addEventListener("input",(function(){g=32==d.value.length,b()}))})),b()})),window.generateFiles=function(){var e,t=document.getElementById("name").value,a=document.getElementById("uiAssetMenu"),o=document.getElementById("uiAssetCategory");a.checked?e="UIAssetMenuPrefab":o.checked?e="UIAssetCategoryPrefab":alert("ERROR!");var c=function(e){var t='{\n    "$id": 0,\n    "$type": "0|Game.Prefabs.{uiType}, Game",\n    "name": "{name}",\n    "active": true,\n    "components": {\n        "$id": 1,\n        "$type": "1|System.Collections.Generic.List`1[[Game.Prefabs.ComponentBase, Game]], mscorlib",\n        "$rlength": {componentCount},\n        "$rcontent": [{components}\n        ]\n    }\n}',a=n(e,2),o=a[0],c=a[1],r=0,i=2,d=2;var l=function(e,t){var n,a,o=document.getElementById("uiGroupSelector").value||0,c=document.getElementById("uiGroupVanilla"),r=document.getElementById("uiGroupCustom"),i=document.getElementById("uiPriority").value||-1,d=document.getElementById("uiIcon").value||"",l=document.getElementById("uiLargeIcon").value||"",u=document.getElementById("isDebugObject").checked;c.checked?n=(a={zonesCat:"0d743b09aa1b82040bfb8a3acb2f18a3",servicesCat:"78b77cd071c12434a934336e627b4683",toolsCat:"9cc65c58f1801784694374eb31e109d6",zones:"0e35df380310be349b98b04a0471b211",area:"c995c15d6c305e54e9f97ec36d925aa3",signature:"fe713ed04161f9c4aaa8bd6afe3ee740",roads:"52dc601ec18335943bd570353370a60f",electricity:"3e272309249a8204b8f2964c1fa13ebf",water:"90d681e0503149646afc60c51cbff0e0",health:"3394634eede28f8418cc08b38d612699",garbage:"04b7987c2b77c4f44a1fa128af7c185d",education:"18695a3a8120bc0458cc26e4d7289800",fire:"4dc93c5e3d309be4abef29aca22f50ae",police:"de4ec4af58748ed419e749e49ccc9638",transport:"8c4b89937a57f94458d801620a1eaf1b",parks:"ddf68f3a9b931fb4f910cb2f77dbbdf1",communication:"c40df31a9935f00409d0ca2423e52387",landscaping:"0483cabb871c9d848aecc74912d22f8b",res:"9580a6e183ba7174a85992b8c1827d3c",com:"b6926c65be19b13459de7836112db8a5",ind:"4f800ee88525f4f4c97eb5000f5da28a",off:"71e84760ccda8fc41800d213cdbf44b4",ext:"bf9d9a4d7e119a8469b068587e222a82"}[o])?'$fstrref:"UnityGUID:'+a+'"':null:r.checked&&(n='$fstrref:"CID:'+document.getElementById("uiGroupCID").value+'"');return['\n            {\n                "$id": {id},\n                "$type": "{typeId}|Game.Prefabs.UIObject, Game",\n                "name": "UIObject",\n                "active": true,\n                "m_Group": {group},\n                "m_Priority": {priority},\n                "m_Icon": "{icon}",\n                "m_LargeIcon": "{large_icon}",\n                "m_IsDebugObject": {isDebugObject}\n            }'.replaceAll("{id}",e).replaceAll("{typeId}",t).replaceAll("{group}",n).replaceAll("{priority}",i).replaceAll("{icon}",d).replaceAll("{large_icon}",l).replaceAll("{isDebugObject}",u),1,1]}(i,d),u=l[0];i+=l[1],d+=l[2],r+=1;var s=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:",",t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return n.filter((function(e){return null!=e&&""!=e&&void 0!==e})).join(e)}(",",u);return t.replaceAll("{name}",o).replaceAll("{componentCount}",r).replaceAll("{components}",s).replaceAll("{uiType}",c)}([t,e]),r=document.getElementById("output");r.textContent=c,r.classList.remove("d-none"),document.getElementById("pre-copy"),document.getElementById("generate-button").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"});var i=document.createElement("button");i.id="copy-output",i.classList.add("btn","btn-outline-warning","pre-copy"),i.innerHTML='<i class="bi bi-copy"></i> Copy',i.onclick=function(){copyPreContent(r)},r.parentNode.style.position="relative",r.parentNode.appendChild(i),document.getElementById("download-button").disabled=!1},window.downloadFile=function(){document.getElementById("name").value;var e=document.getElementById("output").textContent,t="".concat(shortname,".Prefab"),n=new Blob([e],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(n),a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a)}})();