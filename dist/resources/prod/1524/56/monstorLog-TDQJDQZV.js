import{a as B}from"./chunk-AYG6WLDR.js";import{a as u,b as H,c as v}from"./chunk-4SKU2ULK.js";import{a as L}from"./chunk-MWBJMPWS.js";import{a as S}from"./chunk-RJ4OYB6J.js";import{a as E,b as k}from"./chunk-6AYIUHMJ.js";import"./chunk-2ON4JKLP.js";import{a as w}from"./chunk-GCBZB6Q7.js";import"./chunk-EVK5QPY3.js";import"./chunk-7ET2CA5W.js";import{b as y}from"./chunk-GD4HMFZG.js";import"./chunk-KETFGQQM.js";import"./chunk-7PZO5YGA.js";import"./chunk-IXP25ZKY.js";import{a as b}from"./chunk-GRW7NX42.js";import{a as A}from"./chunk-QAXNXWWI.js";import"./chunk-7XYKFTOV.js";import{a as m}from"./chunk-EDPHPGYE.js";import{a as i}from"./chunk-6UGBR7LD.js";import{a as $}from"./chunk-BRACYM44.js";import"./chunk-HSGQLATB.js";import"./chunk-JYV3Y4PK.js";import{a as g}from"./chunk-VYOJRJTP.js";import"./chunk-H4RRBTG7.js";import{a as C}from"./chunk-D4RSYPIY.js";import"./chunk-SQ3ABL2K.js";import"./chunk-MIGTOE2L.js";import{a as n}from"./chunk-UYUWQQUH.js";import{a as p}from"./chunk-FMIILUE6.js";import"./chunk-XSTNX5IW.js";import{b as l}from"./chunk-UVCMQZY6.js";import{a as d}from"./chunk-NGIDL4MJ.js";function N(t){return`<img class="tip-static" src="${l}creatures/${t}.png" data-tipped="<img src='${l}creatures/${t}.png' width=200 height=200>" width=40 height=40>`}function T(t){return t&&m(t).length>0}function s(t){return`${t.min.toString()} - ${t.max.toString()}`}function j(t){return`<span class="fshNoWrap">${t[0]}: ${s(t[1])}</span>`}function _(t){if(T(t)){let r='<span class="fshXXSmall">';return r+=C(t).map(j).join("<br>"),`${r}</span>`}return'<span class="fshGrey">**Missing**</span>'}function h(t,r){return A(t[r],{name:r,image:N(t[r].image_id),level:S(t[r].level),attack:s(t[r].attack),defense:s(t[r].defense),armor:s(t[r].armor),damage:s(t[r].damage),hp:s(t[r].hp),enhancements:_(t[r].enhancements)})}function x(t){return typeof t=="string"?parseInt(t.replace(/,|#/g,""),10):t}function D(t){return!p(t.type)&&t.type>8}function q(t,r){return!p(t.type)&&r.type>8}function a(t,r){if(D(t))return 1;if(q(t,r))return-1;let c=u(t,n.sortBy,1),f=u(r,n.sortBy,1);c=x(c),f=x(f);let P=c-f;return H(P)}var o,e;function I(){i("<span>No monster information! Please enable entity log and travel a bit to see the world</span>",o)}function O(t){return`<tr><td class="fshCenter">${t.image}</td><td>${t.name}</td><td class="fshCenter">${t.creature_class}</td><td class="fshCenter">${t.level}</td><td class="fshCenter">${t.attack}</td><td class="fshCenter">${t.defense}</td><td class="fshCenter">${t.armor}</td><td class="fshCenter">${t.damage}</td><td class="fshCenter">${t.hp}</td><td class="fshCenter">${t.enhancements}</td></tr>`}function Q(){return e.map(O).join("")}function M(){let t=g("entityTableOutput");!e||!t||i(Q(),t)}function R(t){return t.getAttribute("sortType")||"string"}function U(t){t==="string"?e.sort(v):e.sort(a)}function W(t){B(t);let r=R(t);U(r),M()}function X(t){return b("fshLink",t)&&t.hasAttribute("sortkey")}function z(t){let{target:r}=t;if(r.id==="clearEntityLog"){k("fsh_monsterLog",""),I();return}X(r)&&W(r)}function F(){!e||(i('<table cellspacing="0" cellpadding="0" border="0" width="100%"><tr class="fshBlack fshWhite"><td width="90%" class="fshCenter"><b>Entity Information</b></td><td width="10%">[<span id="clearEntityLog" class="fshPoint">Clear</span>]</td></tr></table><table cellspacing="1" cellpadding="2" border="0"><thead><tr class="fshVerySoftOrange"><th width="25%" class="fshLink" sortkey="name" colspan="2">Entity</th><th class="fshCenter fshLink" sortkey="creature_class">Class</th><th class="fshCenter fshLink" sortkey="level" sorttype="number">Lvl</th><th class="fshCenter">Attack</th><th class="fshCenter">Defence</th><th class="fshCenter">Armor</th><th class="fshCenter">Damage</th><th class="fshCenter">HP</th><th class="fshCenter">Enhancements</th></tr></thead><tbody id="entityTableOutput"></tbody></table>',o),$(o,z))}function G(t){e=m(t).map(d(h,t))}function J(t){if(!t){I();return}G(t),n.sortBy="level",n.sortAsc=!0,e.sort(a),F(),M()}function V(t){o=t||y,!!o&&(E("fsh_monsterLog").then(J),L("ui-dialog-titlebar-close").forEach(r=>r.blur()))}function K(t){w()&&V(t)}export{K as default};
//# sourceMappingURL=monstorLog-TDQJDQZV.js.map