import{a as n}from"./chunk-LEUBG6ER.js";import{a as w}from"./chunk-HZT465UH.js";import{a as L}from"./chunk-RD3JCIMR.js";import"./chunk-Q35EMOVU.js";import"./chunk-H62XIARK.js";import"./chunk-J65VR5DR.js";import{a as T}from"./chunk-5Q6R4V6R.js";import{a as C}from"./chunk-NGWVGVXB.js";import{a as S}from"./chunk-WRWRVDAJ.js";import{b as I}from"./chunk-GEYLGSBT.js";import{a as v}from"./chunk-AYNHL3OP.js";import"./chunk-VJAGIPNW.js";import{a as B}from"./chunk-2UNPHM4E.js";import{a as F}from"./chunk-77BSQLWR.js";import{a as l}from"./chunk-BLRY34YR.js";import"./chunk-CIFA6X4K.js";import{a as y}from"./chunk-PSQKPSME.js";import"./chunk-24KPH7IM.js";import{a as p}from"./chunk-ZZZQT54L.js";import"./chunk-EZHOHKGC.js";import"./chunk-R23QVEJA.js";import"./chunk-VXC5XTE7.js";import"./chunk-ML7SUXNI.js";import"./chunk-5M4Z4TNO.js";import{a as k}from"./chunk-C3UZY667.js";import{a as o}from"./chunk-UAOZMKLO.js";import{a as d}from"./chunk-OLMGIENV.js";import"./chunk-TICG7NTW.js";import"./chunk-7VZZ35FX.js";import{a as N}from"./chunk-EWDLMFWA.js";import"./chunk-MZ7GLTZN.js";import"./chunk-NR4PY7IS.js";import"./chunk-WKK2D5SI.js";import"./chunk-CVQ7E5PW.js";import{a as b}from"./chunk-DUQP22PP.js";import{a as g}from"./chunk-NDCVQHVH.js";import"./chunk-ZOSMVBRJ.js";import"./chunk-ZJNDZYVS.js";import"./chunk-OUMBZBCQ.js";import"./chunk-DM72I4Z3.js";import"./chunk-I7LLJIV6.js";import{a as s}from"./chunk-6SHDCONG.js";import"./chunk-BWOLSDKS.js";import{g as h,sa as E}from"./chunk-RLOFFV7B.js";import"./chunk-XYKKLBWK.js";import"./chunk-BOMGPUDJ.js";function j(e){return e?n("-2","Worn"):""}function x(e){return n(e[0],e[1])}function u(e,t){return n("0","All")+j(t)+n("-1","Main")+N(e).map(x).join("")}var r,i,A,c=0,m,a;function D(){let e=y(E,I.lastElementChild);return s.cmd==="crafting"?e[1]:e[0]}function H(e){let t=d(),f=e[0].parentNode;o(t,f),o(a,t)}function M(){a||(a=d({className:"fshItemGrid"}),i.forEach(H),T(r.parentNode,a),C(r))}function G(e){return c!==0&&e[2]!==c}function Q(e){return m.checked&&e[3]!=="Perfect"}function V(e){let t=e[0].parentNode.parentNode;w(t,G(e)||Q(e))}function P(){M(),i.forEach(V)}function W(e){if(!k("fshFolder",e.target))return;let t=Number(e.target.dataset.folder);t!==c&&(c=t,P())}function q(e){return e.equipped?-2:e.folder_id}function R(e){let t=A[e[1]];t&&e.push(q(t),t.craft)}function _(){i.forEach(R)}function z(e){let t=r.parentNode.parentNode.previousElementSibling.children[0];return t.classList.add("fshCenter"),b(t,W),l(t,u(e,!0)),t}function J(e){if(s.cmd==="crafting"){m={checked:!1};return}let t=v({className:"fshVMid",innerHTML:'<span class="fshLink">Perfect</span> '});m=B({className:"fshVMid",type:"checkbox"}),g(m,"change",P),o(t,m),l(e," &ensp;"),o(e,t)}function K(e){if(e.items&&r){A=e.items,p(4,_);let t=z(e.folders);J(t)}}function O(e){let{tipped:t}=e.dataset,f=t.match(h);return[e,f[2]]}function U(){r=D(),i=F("img",r).map(O)}function X(){S()&&(L().then(K),p(3,U))}export{X as default};
//# sourceMappingURL=craftForge-742FDM2P.js.map