import{x as e,a as s,aV as t,g as n,y as i,d as a,aW as c,e as o,o as r,t as d,m as l,b as f,h as m,l as h,a2 as p,H as u,aK as k,aU as L,D as S,c as g}from"./calfSystem-d3aab5a8.js"
import{n as j}from"./numberIsNaN-929de7af.js"
import{i as y}from"./insertElementBefore-286ff14c.js"
import{h as N}from"./hideElement-c8e0696f.js"
import"./indexAjaxJson-86b35353.js"
import"./cmdExport-806d42e0.js"
import"./getInventory-60dc924f.js"
import{g as b}from"./getInventoryById-4f447558.js"
import{i as v}from"./insertHtmlBeforeBegin-e6a52ae0.js"
import{c as H}from"./createTr-b9760e1a.js"
let A
function E(e,s){s.children[0].lastElementChild.children[0].children[0].checked=!1
const t=h("fshHide",s),n="folderid0"===e,i=h(e,s);(function(e,s,t){return e&&p(s,t)})(t,n,i)&&(s.classList.remove("fshHide"),s.classList.add("fshBlock")),function(e,s,t){return!e&&!s&&!t}(t,n,i)&&(s.classList.remove("fshBlock"),N(s))}function I(e){n(a,function(){let e=i("item-div")
if(!e){e=l({id:"item-div",className:"itemDiv"})
const s=i("item-list"),t=f(a,s)
for(;t.length;)t[0].classList.add("fshBlock"),m(e,t[0])
y(e,s)}return e}()).forEach(d(E,e.target.id))}function T(e){"SPAN"===e.target.nodeName&&-1!==e.target.id.indexOf("folderid")&&I(e)}function C(e){return` &ensp;<span id="folderid${e[0]}" class="fshLink fshNoWrap" fid=${e[0]}>${e[1]}</span> `}function x(e){const s=e.children[0].lastElementChild.children[0].children[0],t=A[s.getAttribute("value")]
t&&(e.classList.add("folderid"+t.folder_id),A.fshHasST&&function(e,s){s.is_in_st&&e.classList.add("isInST")}(e,t),s.classList.add("itemid"+t.item_id),s.classList.add("itemtype"+t.type))}function B(e){t("trade.processTrade"),A=e.items
n(a,i("item-list")).forEach(x),function(e){const s=H({id:"fshFolderSelect",innerHTML:'<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>'+o(e).map(C).join("")})
r(s,T)
const t=i("item-list").parentNode.parentNode
v(t,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),y(s,t)}(e.folders),c("trade.processTrade")}function M(e){s(3,B,[e])}function $(){e()||b().then(M)}function W(e,s){return"itemid-1"===e||function(e,s){return"itemid-2"===e&&h("itemtype12",s)}(e,s)||h(e,s)}function w(e,s){return e||!h("isInST",s)}function _(e){return e.children[0].lastElementChild.children[0].children[0]}function D(e,s){s.checked=e}function z(e){D(!1,e)}function F(e){D(!0,e)}function J(e,s){s.filter(d(w,function(){const e=i("itemsInSt")
if(e)return e.checked}())).map(_).filter(d(W,e)).slice(0,function(e){const s=parseInt(i("fshSendHowMany").value,10)
return j(s)?e.length:"-"!==g.subcmd?Math.min(100,s):s}(s)).forEach(F)}function K(e){h("fshCheckAll",e.target)&&function(e){const s=i("item-div")||i("item-list"),t=S("table:not(.fshHide)",s)
t.map(_).forEach(z),J(e.target.id,t)}(e)}function O(e){return k(`[${e}]`)}function P(){const e=O(u("sendClasses"))
return e||O(L.sendClasses)}function R(e){return` &ensp;<span id="itemid${e[1]}" class="fshCheckAll fshLink fshNoWrap">${e[0]}</span>`}function U(){const e=H({id:"fshSelectMultiple",innerHTML:'<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>'+P().map(R).join("")+' &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput" value="all" size=3></td>'})
r(e,K)
const s=i("item-list").parentNode.parentNode
y(e,s)}function V(){s(3,$),s(3,U)}export default V
//# sourceMappingURL=trade-9f47e32a.js.map