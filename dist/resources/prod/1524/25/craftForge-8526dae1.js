import{e,j as t,a as n,g as r,b as o,p as s,d as a,c,o as f,i,f as d,h as m,k as u,l as p,m as l}from"./calfSystem-71b9378d.js"
import{c as h}from"./createInput-1eba672c.js"
import{c as j}from"./createLabel-0de5e3fd.js"
import"./insertElementBefore-286ff14c.js"
import{i as g}from"./insertElementAfterBegin-1ff1031d.js"
import{h as b}from"./hideElement-c8e0696f.js"
import"./indexAjaxJson-fd3c427d.js"
import"./cmdExport-0ed34c6b.js"
import"./getInventory-07ae40fa.js"
import{g as N}from"./getInventoryById-3b46d9e8.js"
import{t as E}from"./toggleForce-8f3fdd9b.js"
import{m as k}from"./makeFolderSpan-1e60fc0e.js"
function x(e){return k(e[0],e[1])}function y(t,n){return k("0","All")+function(e){return e?k("-2","Worn"):""}(n)+k("-1","Main")+e(t).map(x).join("")}let I,v,L,M,A,B=0
function F(e){const t=l(),n=e[0].parentNode
m(t,n),m(A,t)}function S(e){const t=e[0].parentNode.parentNode
E(t,function(e){return 0!==B&&e[2]!==B}(e)||function(e){return M.checked&&"Perfect"!==e[3]}(e))}function C(){A||(A=l({className:"fshItemGrid"}),v.forEach(F),g(I.parentNode,A),b(I)),v.forEach(S)}function P(e){if(!p("fshFolder",e.target))return
const t=Number(e.target.dataset.folder)
t!==B&&(B=t,C())}function V(e){const t=L[e[1]]
t&&e.push(function(e){return e.equipped?-2:e.folder_id}(t),t.craft)}function q(){v.forEach(V)}function G(e){if(e.items&&I){L=e.items,n(4,q)
!function(e){if("crafting"===c.cmd)return void(M={checked:!1})
const t=j({className:"fshVMid",innerHTML:'<span class="fshLink">Perfect</span> '})
M=h({className:"fshVMid",type:"checkbox"}),d(M,"change",C),m(t,M),i(e," &ensp;"),m(e,t)}(function(e){const t=I.parentNode.parentNode.previousElementSibling.children[0]
return t.classList.add("fshCenter"),f(t,P),i(t,y(e,!0)),t}(e.folders))}}function H(e){const{tipped:t}=e.dataset
return[e,t.match(u)[2]]}function J(){I=function(){const e=o(a,s.lastElementChild)
return"crafting"===c.cmd?e[1]:e[0]}(),v=r("img",I).map(H)}function T(){t()&&(N().then(G),n(3,J))}export default T
//# sourceMappingURL=craftForge-8526dae1.js.map
