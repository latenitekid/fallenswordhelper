import{a as j,b as C}from"./chunk-YNSBXPHO.js";import{a as S}from"./chunk-S7SMEPY4.js";import{a as m}from"./chunk-U5B3SRJN.js";import{a as $}from"./chunk-KSDULY6B.js";import{a as k}from"./chunk-Q35EMOVU.js";import"./chunk-H62XIARK.js";import"./chunk-J65VR5DR.js";import{a as _}from"./chunk-NMCSNKGX.js";import"./chunk-MLOBOIWO.js";import{a as I}from"./chunk-5VQHDDXC.js";import{a as v}from"./chunk-ZG7AZG2H.js";import"./chunk-WRWRVDAJ.js";import"./chunk-G5RZKOR2.js";import{b as y}from"./chunk-GEYLGSBT.js";import"./chunk-BLRY34YR.js";import"./chunk-CIFA6X4K.js";import{a as E}from"./chunk-OWCXLNAL.js";import"./chunk-24KPH7IM.js";import"./chunk-3J2YA6B7.js";import"./chunk-SDA4FQMK.js";import"./chunk-T6BAO7XX.js";import"./chunk-KCQPJD5H.js";import"./chunk-VXC5XTE7.js";import"./chunk-XY4KZRCS.js";import"./chunk-5IIHJLHJ.js";import"./chunk-5M4Z4TNO.js";import{a as b}from"./chunk-UAOZMKLO.js";import"./chunk-OLMGIENV.js";import"./chunk-TICG7NTW.js";import"./chunk-7VZZ35FX.js";import"./chunk-EWDLMFWA.js";import"./chunk-M2ZMFQNM.js";import"./chunk-H7LEI34Q.js";import"./chunk-MZ7GLTZN.js";import"./chunk-NR4PY7IS.js";import"./chunk-WKK2D5SI.js";import{a as x}from"./chunk-CVQ7E5PW.js";import{a as i}from"./chunk-KN5ZC5BT.js";import{a as g}from"./chunk-DUQP22PP.js";import"./chunk-NDCVQHVH.js";import"./chunk-3Q2VMWIC.js";import"./chunk-ZOSMVBRJ.js";import{a as p}from"./chunk-ZJNDZYVS.js";import"./chunk-OUMBZBCQ.js";import"./chunk-DM72I4Z3.js";import"./chunk-I7LLJIV6.js";import"./chunk-6SHDCONG.js";import"./chunk-BWOLSDKS.js";import{Fa as h}from"./chunk-RLOFFV7B.js";import{b as d}from"./chunk-XYKKLBWK.js";import{a as o}from"./chunk-BOMGPUDJ.js";var l,F,r,s,c,a,u;function R(t,e){return e.inv_id===t}function w(t){let e=r.findIndex(o(R,t));e>=0&&r.splice(e,1)}function T(t){return`${t.amount} x ${h[t.type]}`}function A(t){return t.items.length?`You successfully extracted 1 '${t.items[0].n}' component(s) from 1 resource(s).</span>`:t.frags?`You gained ${t.frags.map(T).join(", ")} Fragments by opening the Fragment Stash.`:'<span class="fshRed">You failed to extract any components from resource(s).</span>'}function D(t,e){C(e,u)||(w(t),j(A(e.r),u))}function M(t){E(t).then(o(D,t))}function q(t){let e=a[t.id.replace("fshExtr","")].invIDs;i(`extracting all ${e.length} resources`,t.parentNode),e.forEach(M)}function H(t){$("Extract Resources","Are you sure you want to extract all similar items?",o(q,t))}function N(t){return c&&t.folder_id!==-1}function B(t){return!s&&t.is_in_st}function Q(t){return N(t)||B(t)}function Y(t,e){return Q(e)||(t[e.item_id]?t[e.item_id].invIDs.push(e.inv_id):t[e.item_id]={invIDs:[e.inv_id],inv_id:e.inv_id,item_name:e.item_name}),t}function L(t,e){let n=a[e];return`${t}<tr><td class="fshCenter"><span class="smallLink" id="fshExtr${e}">Extract all ${n.invIDs.length}</span></td><td><img src="${d}items/${e}.gif" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${e}&inv_id=${n.inv_id}&t=1&p=${F}" border=0></td><td>${n.item_name}</td></tr>`}function f(){if(!r)return;a=r.reduce(Y,{});let t='<tr><th width="20%">Actions</th><th colspan="2">Items</th></tr><tr><td colspan="3"><ol id="qeresult"></ol></td></tr>';t+=x(a).reduce(L,""),i(t,l),u=p("qeresult")}function O(t){return t.item_name==="Zombie Coffin"||t.type===12||t.type===16}function P(t){F=t.player_id,r=t.items.filter(O),f()}function U(){s=!s,f()}function W(){c=!c,f()}function Z(t){return t.id.startsWith("fshExtr")}function z(){return[[m("fshInSt"),U],[m("fshInMain"),W],[Z,H]]}function G(t){i('<div class="qeHead"><b>Quick Extract</b></div>Select which type of plants you wish to extract all of. Only select extractable resources.<br><label><input type="checkbox" id="fshInSt" checked> Select items in ST</label>&nbsp;&nbsp;<label><input type="checkbox" id="fshInMain" checked> Only extract items in Main Folder</label>',t),l=I({width:"100%"}),b(t,l)}function J(t){if(v())return;let e=t||y;G(e),s=!0,c=!0,g(e,S(z())),k().then(P),_("ui-dialog-titlebar-close").forEach(n=>n.blur())}export{J as default};
//# sourceMappingURL=quickExtract-GX4IWRAI.js.map