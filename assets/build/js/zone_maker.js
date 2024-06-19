(()=>{"use strict";function e(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:",",t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return n.filter((function(e){return null!=e&&""!=e&&void 0!==e})).join(e)}function t(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n="string"==typeof e?e:e.toString(),a="",l=0,r=-1/0;l<n.length&&("."!=n[l]?a+=n[l]:(a+=0==t?"":n[l],r=l),l!=r+t);l++);if(l==n.length)if(r==-1/0){if(0!=t){a+=".";for(var c=0;c<t;c++)a+="0"}}else for(;l<=r+t;)a+="0",l++;return t>0&&a.includes(".")&&(a=a.replace(/\.?0+$/,"")),a}function n(e,t){var n=document.getElementById(e),a=document.getElementById(t);n.addEventListener("input",(function(e){var t=e.target.value;r(t)&&(a.value=t,a.style.backgroundColor=c(t))})),a.addEventListener("input",(function(e){var t=e.target.value;n.value=t,a.style.backgroundColor=c(t)}));var l=n.value||"#000000";function r(e){return/^#([0-9A-F]{6})$/i.test(e)}function c(e){var t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),a=parseInt(e.slice(5,7),16);return.299*(t=255-t)+.587*(n=255-n)+.114*(a=255-a)>186?"#FFFFFF":"#000000"}r(l)&&(a.style.backgroundColor=c(l))}function a(e){return e=e==[]?"#000000":e}function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;e=e.replace("#","");var a=t(parseInt(e.substring(0,2),16)/255,10),l=t(parseInt(e.substring(2,4),16)/255,10),r=t(parseInt(e.substring(4,6),16)/255,10);return"".concat(a,",").concat(l,",").concat(r,",1").split(",").join(",\n"+" ".repeat(n))}function r(e){var t="";switch(e){case"eu":t="846c60044f7ead04d9b11f0d749ea5f2";break;case"na":t="6f24f89d231e81043b538ce3fb2b54ae"}return t}document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("requiresTheme"),t=document.getElementById("theme-container"),n=document.querySelectorAll(".theme-button");e.addEventListener("change",(function(){this.checked?t.style.display="flex":t.style.display="none"})),n.forEach((function(e){e.addEventListener("click",(function(){n.forEach((function(e){e.classList.remove("selected"),e.style.backgroundImage=e.style.backgroundImage.replace(', url("/assets/images/theme/_mask.svg")',"")})),this.classList.add("selected"),this.style.backgroundImage=this.style.backgroundImage+', url("/assets/images/theme/_mask.svg")'}))}))}));function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r,c,o=[],d=!0,i=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;d=!1}else for(;!(d=(a=r.call(n)).done)&&(o.push(a.value),o.length!==t);d=!0);}catch(e){i=!0,l=e}finally{try{if(!d&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(i)throw l}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}var d=[{id:0,text:"No Resource"},{id:1,text:"Money"},{id:2,text:"Grain"},{id:3,text:"Convenience Food"},{id:4,text:"Food"},{id:5,text:"Vegetables"},{id:6,text:"Meals"},{id:7,text:"Wood"},{id:8,text:"Timber"},{id:9,text:"Paper"},{id:10,text:"Furniture"},{id:11,text:"Vehicles"},{id:12,text:"Lodging"},{id:13,text:"Unsorted Mail"},{id:14,text:"Local Mail"},{id:15,text:"Outgoing Mail"},{id:16,text:"Oil"},{id:17,text:"Petrochemicals"},{id:18,text:"Ore"},{id:19,text:"Plastics"},{id:20,text:"Metals"},{id:21,text:"Electronics"},{id:22,text:"Software"},{id:23,text:"Coal"},{id:24,text:"Stone"},{id:25,text:"Livestock"},{id:26,text:"Cotton"},{id:27,text:"Steel"},{id:28,text:"Minerals"},{id:29,text:"Concrete"},{id:30,text:"Machinery"},{id:31,text:"Chemicals"},{id:32,text:"Pharmaceuticals"},{id:33,text:"Beverages"},{id:34,text:"Textiles"},{id:35,text:"Telecom"},{id:36,text:"Financial"},{id:37,text:"Media"},{id:38,text:"Entertainment"},{id:39,text:"Recreation"},{id:40,text:"Garbage"},{id:41,text:"Count"}];function i(e){var t=e.replaceAll("[","").replaceAll("]","").replaceAll('"',"").replaceAll(",",",\n                        ").split(",");return["\n                        "+t,t.length]}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r,c,o=[],d=!0,i=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;d=!1}else for(;!(d=(a=r.call(n)).done)&&(o.push(a.value),o.length!==t);d=!0);}catch(e){i=!0,l=e}finally{try{if(!d&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(i)throw l}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("uiGroupVanilla"),t=document.getElementById("uiGroupCustom"),n=document.getElementById("uiGroupSelectorDiv"),a=document.getElementById("uiGroupCIDDiv");function l(){e.checked?(n.classList.remove("d-none"),a.classList.add("d-none")):t.checked&&(n.classList.add("d-none"),a.classList.remove("d-none"))}e.addEventListener("change",l),t.addEventListener("change",l)})),document.addEventListener("DOMContentLoaded",(function(){!function(e,t){var n=$.map(e,(function(e){return e.id=e.id||e.value,e}));function a(e){if(!e.image)return e.text;var t="assets/images/ui/"+e.image+".svg";return $('<span><img src="/cities2-PrefabMaker/'+t+'" class="select-icon" /> '+e.text+"</span>")}$(t).empty(),$(t).select2({data:n,templateResult:a,templateSelection:a,dropdownAutoWidth:!0,closeOnSelect:!1,placeholder:"Select UI Group",theme:"bootstrap-5"}),$(t).prop("disabled",!1)}([{value:0,text:"None"},{value:"res",text:"Zones Residential"},{value:"com",text:"Zones Commercial"},{value:"ind",text:"Zones Industrial"},{value:"off",text:"Zones Office"},{value:"ext",text:"Zones Extractors"}],document.getElementById("uiGroupSelector"));var e=["allowedSold","allowedManufactured","allowedStored","none"];e.forEach((function(t){"none"!=t&&function(e){var t="#"+e+"_select";$(t).select2({data:d,dropdownAutoWidth:!0,closeOnSelect:!1,placeholder:"Select resources",theme:"bootstrap-5",dropdownCssClass:"select2--small"}),$(t).prop("disabled",!1)}(t),document.getElementById(t).addEventListener("change",(function(){e.forEach((function(e){document.getElementById(e).checked?document.getElementById(e+"-container").classList.remove("d-none"):document.getElementById(e+"-container").classList.add("d-none")}))}))}));var t=document.getElementById("name"),n=document.getElementById("generate-button"),a=""==!t.value;function l(){a?(n.disabled=!1,n.classList.remove("btn-danger"),n.classList.add("btn-primary")):(n.disabled=!0,n.classList.remove("btn-primary"),n.classList.add("btn-danger"))}t.addEventListener("input",(function(){a=""==!t.value,l()})),l()})),window.generateFiles=function(){var t=function(t){var n,a,o='{\n    "$id": 0,\n    "$type": "0|Game.Prefabs.ZonePrefab, Game",\n    "name": "{name}",\n    "active": true,\n    "components": {\n        "$id": 1,\n        "$type": "1|System.Collections.Generic.List`1[[Game.Prefabs.ComponentBase, Game]], mscorlib",\n        "$rlength": {componentCount},\n        "$rcontent": [{components}\n        ]\n    },\n    "m_AreaType": {areaTypeId},\n    "m_Color": {\n        "$type": "{colorTypeId}|UnityEngine.Color[], UnityEngine.CoreModule",\n        {color1}\n    },\n    "m_Edge": {\n        "$type": {colorTypeId},\n        {color2}\n    },\n    "m_Office": {isOffice}\n}',d=u(t,5),s=d[0],m=d[1],p=d[2],f=d[3],b=d[4],y=0,g=2,v=2;var I=(h=g,E=v,x=parseFloat(document.getElementById("pollutionGround").value)||0,$=parseFloat(document.getElementById("pollutionAir").value)||0,B=parseFloat(document.getElementById("pollutionNoise").value)||0,['\n            {\n                "$id": {id},\n                "$type": "{typeId}|Game.Prefabs.ZonePollution, Game",\n                "name": "ZonePollution",\n                "active": true,\n                "m_GroundPollution": {ground},\n                "m_AirPollution": {air},\n                "m_NoisePollution": {noise}\n            }'.replaceAll("{id}",h).replaceAll("{typeId}",E).replaceAll("{ground}",x).replaceAll("{air}",$).replaceAll("{noise}",B),1,1]),A=I[0];g+=I[1],v+=I[2],y+=1;var h,E,x,$,B;var C=function(e,t){var n=parseFloat(document.getElementById("serviceUpkeep").value)||0,a=parseFloat(document.getElementById("serviceElectricity").value)||0,l=parseFloat(document.getElementById("serviceWater").value)||0,r=parseFloat(document.getElementById("serviceGarbage").value)||0,c=parseFloat(document.getElementById("serviceTelecom").value)||0;return['\n            {\n                "$id": {id},\n                "$type": "{typeId}|Game.Prefabs.ZoneServiceConsumption, Game",\n                "name": "ZoneServiceConsumption",\n                "active": true,\n                "m_Upkeep": {upkeep},\n                "m_ElectricityConsumption": {electricity},\n                "m_WaterConsumption": {water},\n                "m_GarbageAccumulation": {garbage},\n                "m_TelecomNeed": {telecom}\n            }'.replaceAll("{id}",e).replaceAll("{typeId}",t).replaceAll("{upkeep}",n).replaceAll("{electricity}",a).replaceAll("{water}",l).replaceAll("{garbage}",r).replaceAll("{telecom}",c),1,1]}(g,v),G=C[0];g+=C[1],v+=C[2],y+=1;var S=function(e,t){var n=parseFloat(document.getElementById("serviceCrime").value)||0;return['\n            {\n                "$id": {id},\n                "$type": "{typeId}|Game.Prefabs.CrimeAccumulation, Game",\n                "name": "CrimeAccumulation",\n                "active": true,\n                "m_CrimeRate": {serviceCrimeValue}\n            }'.replaceAll("{id}",e).replaceAll("{typeId}",t).replaceAll("{serviceCrimeValue}",n),1,1]}(g,v),w=S[0];g+=S[1],v+=S[2],y+=1;var L=function(e,t){var n=document.getElementById("serviceMailCollect").checked,a=parseFloat(document.getElementById("serviceMailSending").value)||0,l=parseFloat(document.getElementById("serviceMailReceiving").value)||0;return['\n            {\n                "$id": {id},\n                "$type": "{typeId}|Game.Prefabs.MailAccumulation, Game",\n                "name": "MailAccumulation",\n                "active": true,\n                "m_RequireCollect": {requireCollect},\n                "m_SendingRate": {sendingRate},\n                "m_ReceivingRate": {receivingRate}\n            }'.replaceAll("{id}",e).replaceAll("{typeId}",t).replaceAll("{requireCollect}",n).replaceAll("{sendingRate}",a).replaceAll("{receivingRate}",l),1,1]}(g,v),_=L[0];g+=L[1],v+=L[2],y+=1;var k=function(e,t){var n,a,l=document.getElementById("requiresTheme").checked,c=document.querySelector(".theme-button.selected");return l&&null!=c?(n=c.id.replace("theme-",""),a=['\n            {\n                "$id": {id},\n                "$type": "{typeId}|Game.Prefabs.ThemeObject, Game",\n                "name": "ThemeObject",\n                "active": true,\n                "m_Theme": $fstrref:"UnityGUID:{themeID}"\n            }'.replaceAll("{id}",e).replaceAll("{typeId}",t).replaceAll("{themeID}",r(n)),1,1]):a=["",0,0],a}(g,v);n=k[0],g+=k[1],v+=k[2],""!=n&&(y+=1);var P=function(e,t){var n,a,l,r=document.getElementById("scaleResidentials").checked,o=parseFloat(document.getElementById("resiProp").value)||0,d=parseFloat(document.getElementById("spaceMultiplier").value)||0,u=parseFloat(document.getElementById("fireHazard").value)||0,s=Array.from(document.getElementById("allowedSold_select").selectedOptions),m=c("[]"!=(n=JSON.stringify(s.map((function(e){return e.getAttribute("value")}))))?i(n):["",0],2),p=m[0],f=m[1],b=Array.from(document.getElementById("allowedManufactured_select").selectedOptions),y=c("[]"!=(a=JSON.stringify(b.map((function(e){return e.getAttribute("value")}))))?i(a):["",0],2),g=y[0],v=y[1],I=Array.from(document.getElementById("allowedStored_select").selectedOptions),A=c("[]"!=(l=JSON.stringify(I.map((function(e){return e.getAttribute("value")}))))?i(l):["",0],2),h=A[0],E=A[1];return['\n            {\n                "$id": {id},\n                "$type": "{typeId}|Game.Prefabs.ZoneProperties, Game",\n                "name": "ZoneProperties",\n                "active": true,\n                "m_ScaleResidentials": {scaleResidentials},\n                "m_ResidentialProperties": {resiProp},\n                "m_SpaceMultiplier": {spaceMultiplier},\n                "m_AllowedSold": {\n                    "$id": {id1},\n                    "$type": "{typeId1}|Game.Economy.ResourceInEditor[], Game",\n                    "$rlength": {allowedSoldLength},\n                    "$rcontent": [{allowedSold}\n                    ]\n                },\n                "m_AllowedManufactured": {\n                    "$id": {id2},\n                    "$type": {typeId1},\n                    "$rlength": {allowedManufacturedLength},\n                    "$rcontent": [{allowedManufactured}\n                    ]\n                },\n                "m_AllowedStored": {\n                    "$id": {id3},\n                    "$type": {typeId1},\n                    "$rlength": {allowedStoredLength},\n                    "$rcontent": [{allowedStored}\n                    ]\n                },\n                "m_FireHazardModifier": {fireHazard}\n            }'.replaceAll("{id}",e).replaceAll("{id1}",e+1).replaceAll("{id2}",e+2).replaceAll("{id3}",e+3).replaceAll("{typeId}",t).replaceAll("{typeId1}",t+1).replaceAll("{scaleResidentials}",r).replaceAll("{resiProp}",o).replaceAll("{spaceMultiplier}",d).replaceAll("{fireHazard}",u).replaceAll("{allowedSold}",p).replaceAll("{allowedManufactured}",g).replaceAll("{allowedStored}",h).replaceAll("{allowedSoldLength}",f).replaceAll("{allowedManufacturedLength}",v).replaceAll("{allowedStoredLength}",E),4,2]}(g,v);a=P[0],g+=P[1],v+=P[2],y+=1;var M=function(e,t){var n,a,l=document.getElementById("uiGroupSelector").value||0,r=document.getElementById("uiGroupVanilla"),c=document.getElementById("uiGroupCustom"),o=document.getElementById("uiPriority").value||-1,d=document.getElementById("uiIcon").value||"",i=document.getElementById("uiLargeIcon").value||"",u=document.getElementById("isDebugObject").checked;r.checked?n=(a={zonesCat:"0d743b09aa1b82040bfb8a3acb2f18a3",servicesCat:"78b77cd071c12434a934336e627b4683",toolsCat:"9cc65c58f1801784694374eb31e109d6",zones:"0e35df380310be349b98b04a0471b211",area:"c995c15d6c305e54e9f97ec36d925aa3",signature:"fe713ed04161f9c4aaa8bd6afe3ee740",roads:"52dc601ec18335943bd570353370a60f",electricity:"3e272309249a8204b8f2964c1fa13ebf",water:"90d681e0503149646afc60c51cbff0e0",health:"3394634eede28f8418cc08b38d612699",garbage:"04b7987c2b77c4f44a1fa128af7c185d",education:"18695a3a8120bc0458cc26e4d7289800",fire:"4dc93c5e3d309be4abef29aca22f50ae",police:"de4ec4af58748ed419e749e49ccc9638",transport:"8c4b89937a57f94458d801620a1eaf1b",parks:"ddf68f3a9b931fb4f910cb2f77dbbdf1",communication:"c40df31a9935f00409d0ca2423e52387",landscaping:"0483cabb871c9d848aecc74912d22f8b",res:"9580a6e183ba7174a85992b8c1827d3c",com:"b6926c65be19b13459de7836112db8a5",ind:"4f800ee88525f4f4c97eb5000f5da28a",off:"71e84760ccda8fc41800d213cdbf44b4",ext:"bf9d9a4d7e119a8469b068587e222a82"}[l])?'$fstrref:"UnityGUID:'+a+'"':null:c.checked&&(n='$fstrref:"CID:'+document.getElementById("uiGroupCID").value+'"');return['\n            {\n                "$id": {id},\n                "$type": "{typeId}|Game.Prefabs.UIObject, Game",\n                "name": "UIObject",\n                "active": true,\n                "m_Group": {group},\n                "m_Priority": {priority},\n                "m_Icon": "{icon}",\n                "m_LargeIcon": "{large_icon}",\n                "m_IsDebugObject": {isDebugObject}\n            }'.replaceAll("{id}",e).replaceAll("{typeId}",t).replaceAll("{group}",n).replaceAll("{priority}",o).replaceAll("{icon}",d).replaceAll("{large_icon}",i).replaceAll("{isDebugObject}",u),1,1]}(g,v),O=M[0];g+=M[1],v+=M[2],y+=1;var F=function(e,t){var n=document.getElementById("groupAmbienceSelector").value||0;return['\n            {\n                "$id": {id},\n                "$type": "{typeId}|Game.Prefabs.GroupAmbience, Game",\n                "name": "GroupAmbience",\n                "active": true,\n                "m_AmbienceType": {groupAmbienceValue}\n            }'.replaceAll("{id}",e).replaceAll("{typeId}",t).replaceAll("{groupAmbienceValue}",n),1,1]}(g,v),R=F[0];g+=F[1],v+=F[2],y+=1;var T=function(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l=document.getElementById("milestone").value||0;l=function(e){var t={1:"f4b50c02270b92c4baff187c22d3ea14",2:"2961ed6ee8060794aab41a8cc22efaf6",3:"303506d3e2bc587489b2b4d267c99388",4:"e52107c8dbdae9046ae8ecaf9a15b5bf",5:"5c6cbf5168762c84993f0ee6b8953323",6:"ce89bfee39352484880cc773efc1e6e1",7:"87b8a967a95909d4abb68a5bf768aa35",8:"7e01164e99f78234097bcbe8c94f6da6",9:"92abe4abd38674248bc02acf09f4a911",10:"ab06d3e8b3116b04bb698fb96d79a6ee",11:"fb04e5657051d5e48ab0f4840b16576c",12:"6a36d7b1f1cc1c1459e4412d6e74855c",13:"06fef20b88c14134a80dac6f8064c8c9",14:"cf0723beedf531c4190f44398380e5a5",15:"3cf250e16212ad44fb0d6004bd7ece90",16:"ddb498c917f12e449808d5fa87302ab1",17:"c3b2d07ac7449704cabb978593fcaba7",18:"a5e3d620bfda9f046ac4d3d733800055",19:"eea85152ca5f90549bbfd3ecc6325445",20:"e11038cd31a6e124dba8c82aa15bba37"}[e];return t?'$fstrref:"UnityGUID:'+t+'"':""}(l);var r,c="";null!=a&&(c=(r={res:"29455edf655e35c4fb6ba49adc0bf3ae",comm:"7dba39510f4e7d143b3dc2289b201617",ind:"317077db9435b144eb601e60165bee5c",off:"29455edf655e35c4fb6ba49adc0bf3ae",ext:"ddf164649f434a14e9e4bde7599bf38d"}[a])?'$fstrref:"UnityGUID:'+r+'"':"");var o=0;""!=l&&(o+=1),""!=c&&(o+=1);var d=e(",\n                        ",c,l);return['\n            {\n                "$id": {id},\n                "$type": "{typeId}|Game.Prefabs.Unlockable, Game",\n                "name": "Unlockable",\n                "active": true,\n                "m_RequireAll": {\n                    "$id": {id1},\n                    "$type": "{typeId1}|Game.Prefabs.PrefabBase[], Game",\n                    "$rlength": {rlength},\n                    "$rcontent": [{rcontent}\n                    ]\n                },\n                "m_RequireAny": {\n                    "$id": {id2},\n                    "$type": {typeId1},\n                    "$rlength": 0,\n                    "$rcontent": [\n                    ]\n                },\n                "m_IgnoreDependencies": false\n            }'.replaceAll("{id}",t).replaceAll("{id1}",t+1).replaceAll("{id2}",t+2).replaceAll("{typeId}",n).replaceAll("{typeId1}",n+1).replaceAll("{rlength}",o).replaceAll("{rcontent}","\n                        "+d),3,2]}(g,v,uiGroupSelector.value),U=T[0];g+=T[1],v+=T[2],y+=1;var j=e(",",A,G,w,_,n,a,O,R,U);return o.replaceAll("{name}",s).replaceAll("{componentCount}",y).replaceAll("{components}",j).replaceAll("{areaTypeId}",m).replaceAll("{colorTypeId}",v).replaceAll("{color1}",l(p,8)).replaceAll("{color2}",l(f,8)).replaceAll("{isOffice}",b)}([document.getElementById("name").value,document.getElementById("areaTypeSelector").value,a(document.getElementById("hexInput1").value),a(document.getElementById("hexInput2").value),document.getElementById("isOffice").checked]),n=document.getElementById("output");n.textContent=t,n.classList.remove("d-none"),document.getElementById("pre-copy"),document.getElementById("generate-button").scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"});var o=document.createElement("button");o.id="copy-output",o.classList.add("btn","btn-outline-warning","pre-copy"),o.innerHTML='<i class="bi bi-copy"></i> Copy',o.onclick=function(){var e;e=n.textContent,navigator.clipboard.writeText(e).then((function(){var e=document.getElementById("text-copied-toast");new bootstrap.Toast(e).show()}),(function(e){console.error("There was an error copying the text: ",e)}))},n.parentNode.style.position="relative",n.parentNode.appendChild(o),document.getElementById("download-button").disabled=!1},window.downloadFile=function(){document.getElementById("name").value;var e=document.getElementById("output").textContent,t="".concat(shortname,".Prefab"),n=new Blob([e],{type:"text/plain"}),a=document.createElement("a");a.href=URL.createObjectURL(n),a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a)},n("hexInput1","colorPicker1"),n("hexInput2","colorPicker2")})();