import{c as t}from"./closestTr-9db047d3.js"
import{d as n}from"./daAjaxSendItemsToRecipient-18e9f477.js"
import{c as e,bs as s,ao as i,l as o,S as a,C as r,E as c,Z as u,al as l,e as d,H as m,a as f,t as k,bq as h,aM as p,aD as g,bk as L,y as b,I as w,o as S,p as $}from"./calfSystem-a8d582b6.js"
import{e as x}from"./errorDialog-48630d52.js"
import{g as D}from"./getInventoryById-019da233.js"
import{d as E}from"./doStatTotal-11c05b30.js"
import{S as Q,i as _,s as v,t as y,e as N,p as T,g as A,a as I,b as C,l as H,c as j,n as R,d as B,r as O,k as U}from"./index-3af319ff.js"
import{b as G}from"./batch-b787972d.js"
let F,M,P
function q(){if(!M){const t="dropitems"===e.subcmd?"removeIndex[]":"storeIndex[]"
F=document.forms[0].elements[t],M=!0}return F}function V(t){return function(t){return s({subcmd:"dodropitems",removeIndex:t})}(t)}function Y(){const t=q()
return t?i(t instanceof RadioNodeList?t:[t]):[]}function Z(){return Y().filter((n=>!o("fshHide",t(n))))}function z(){return P||(P=D()),P}function J(n){return t(n.target).cells[0].children[0].value}async function K(n,e,s){!function(n){const e=t(n)
e.cells[0].children[0].disabled=!0,c(".actionButton",e).forEach((t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")})),n.blur(),n.classList.add("fshSpinner","fshSpinner12")}(n.target)
const i=await e([J(n)])
i&&i.s?function(t,n){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=n}(n,s):x(i)}const W=[["Check All",async function(t){const{items:n}=await z()
a("storeitems","Check All of Type"),Z().filter((e=>n[e.value]&&n[e.value].item_id===n[J(t)].item_id)).forEach((t=>{t.checked=!t.disabled&&!t.checked}))}],["Quick Send",t=>{a("storeitems","Quick Send"),K(t,n,"Sent")}],["Quick Drop",t=>{a("storeitems","Quick Drop"),K(t,V,"Dropped")}]]
function X(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&a("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||o("custombutton",t.target))return
const n=W.find((([n])=>n===r(t.target)))
n&&n[1](t)}function tt(t){let n,s,i,o,a,r,c,u,l,d,m,f,k=t[2](t[0])+"",h=t[2](t[1])+"",p="storeitems"===e.subcmd2&&function(t){let n,e,s,i,o
return{c(){n=y("["),e=N("button"),e.textContent="Select All Guild Locked",s=y("]"),A(e,"class","svelte-h3aclh")},m(a,r){I(a,n,r),I(a,e,r),I(a,s,r),i||(o=H(e,"click",t[5]),i=!0)},p:R,d(t){t&&B(n),t&&B(e),t&&B(s),i=!1,o()}}}(t)
return{c(){n=y("["),s=N("button"),i=y(k),o=y(" AH and UFSG Links"),a=y("] \n["),r=N("button"),c=y(h),u=y(" Quick Drop links"),l=y("] \n"),p&&p.c(),d=T(),A(s,"class","svelte-h3aclh"),A(r,"class","svelte-h3aclh")},m(e,k){I(e,n,k),I(e,s,k),C(s,i),C(s,o),I(e,a,k),I(e,r,k),C(r,c),C(r,u),I(e,l,k),p&&p.m(e,k),I(e,d,k),m||(f=[H(s,"click",t[3]),H(r,"click",t[4])],m=!0)},p(t,[n]){1&n&&k!==(k=t[2](t[0])+"")&&j(i,k),2&n&&h!==(h=t[2](t[1])+"")&&j(c,h),"storeitems"===e.subcmd2&&p.p(t,n)},i:R,o:R,d(t){t&&B(n),t&&B(s),t&&B(a),t&&B(r),t&&B(l),p&&p.d(t),t&&B(d),m=!1,O(f)}}}function nt(t,n,e){const s=U()
let{showExtraLinks:i=!1}=n,{showQuickDropLinks:o=!1}=n
return t.$$set=t=>{"showExtraLinks"in t&&e(0,i=t.showExtraLinks),"showQuickDropLinks"in t&&e(1,o=t.showQuickDropLinks)},[i,o,t=>t?"Hide":"Show",function(){a("storeitems","toggleShowExtraLinks"),e(0,i=!i),u("showExtraLinks",i),s("showExtraLinks",i)},function(){a("storeitems","toggleShowQuickDropLinks"),e(1,o=!o),u("showQuickDropLinks",o),s("showQuickDropLinks",o)},function(){a("storeitems","selectLocked"),s("selectLocked")}]}class et extends Q{constructor(t){super(),_(this,t,nt,tt,v,{showExtraLinks:0,showQuickDropLinks:1})}}let st
function it(t,n){if(13699!==n.item_id)return n.item_name
const e=t.find((t=>t.value===String(n.inv_id)))
return e?m(e.parentNode.parentNode.children[2]):n.item_name}async function ot(t){return st||(st=await async function(t){const n=await z()
return n&&n.items?l(d(n.items).map((([n,e])=>[n,{...e,item_name:it(t,e)}]))):{}}(t)),st}const at=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
function rt(t,n){return t[n]=(t[n]||0)+1,t}const ct=(t,n,e)=>`[<button class="fshStoreItemsButton ${t}"${n}>${e}</button>]`,ut=(t,n,e)=>` ${ct(`${t} actionButton tooltip-multiline`,(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(n),`Quick ${e}`)}`,lt=(t,n,e)=>`[<a href="${t}"${n}>${e}</a>]`
function dt(t,n){return n[0]()?t+n[1]():t}function mt(t,n,e){return[[()=>t[0],()=>`${function(t){return t.bound?'<span class="aHSpacer"></span>':lt(`${L}${encodeURIComponent(t.item_name)}`,"","AH")}(e)} ${(t=>lt(`${p}items${g}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"))(e)}`],[()=>!0,()=>`&nbsp;${e.item_name}`],[()=>((t,n,e)=>t[2]&&n[e.item_id]>1)(t,n,e),()=>` ${ct("fshBlack","","Check All")}`],[()=>((t,n)=>t[3]&&(!n.bound||-1!==n.guild_tag))(t,e),()=>ut("fshBlue","SENDS","Send")],[()=>((t,n)=>t[4]&&-1===n.guild_tag)(t,e),()=>ut("fshRed","DROP","Drop")]]}function ft(t,n,[e,s]){const i=e
t[1]&&(i.className=h[s.rarity].clas)
const o=mt(t,n,s).reduce(dt,"")
i.innerHTML!==o&&(i.innerHTML=o)}async function kt(n){const e=await async function(){const n=Y()
if(!n.length)return[]
const e=await ot(n)
return n.map((n=>[t(n).cells[2],e[n.value]])).filter((([,t])=>t))}(),s=n[2]?function(t){return{...t.map((([,t])=>t.item_id)).reduce(rt,{}),13699:1}}(e):[]
f(3,G,[[5,3,e,0,k(ft,n,s)]])}function ht(t){const n=function(t){const n=document.forms[0]
return new et({props:{showExtraLinks:t[0],showQuickDropLinks:t[4]},target:n.parentNode.children[5].children[0]})}(t)
n.$on("showExtraLinks",(n=>{t[0]=n.detail,kt(t)})),n.$on("showQuickDropLinks",(n=>{t[4]=n.detail,kt(t)})),n.$on("selectLocked",(()=>{!async function(){const t=Z()
if(!t.length)return
const n=await z()
n&&n.items&&t.map((t=>[t,n.items[t.value]])).filter((([,t])=>t)).forEach((([t,n])=>{t.checked=!t.disabled&&-1!==n.guild_tag}))}()}))}async function pt(){if(b())return
if(!q())return
const t=at.map((t=>w(t)))
E(),ht(t),t.some((t=>t))&&kt(t),S($,X)}export{q as a,z as b,Z as c,V as d,Y as g,pt as i}
//# sourceMappingURL=injectStoreItems-93a15118.js.map
