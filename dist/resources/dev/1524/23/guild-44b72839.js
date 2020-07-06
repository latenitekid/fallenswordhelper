import{g as t,p as e,a4 as n,D as s,bs as a,d as i,m as o,A as c,h as r,G as l,Q as f,ab as d,a2 as u,o as m,i as p,u as h,t as b,v as g,C as j,s as N,bt as v,f as C,Z as L,n as S,au as y,a as w,ak as k,aN as $,O as M,V as x,c as T,bu as A,b as H,E,x as R,bv as B}from"./calfSystem-9901ad27.js"
import"./numberIsNaN-cb2409eb.js"
import{p as D}from"./playerName-a0f4217f.js"
import"./toLowerCase-dda30e6b.js"
import{c as G}from"./createInput-49d3d974.js"
import{a as I}from"./addCommas-8cd7d96d.js"
import{l as V}from"./onlineDot-b29de868.js"
import{s as _}from"./setTipped-d4d554a0.js"
import{b as O}from"./batch-e74a5e93.js"
import{c as P}from"./colouredDots-e6de8d7d.js"
import"./createLabel-f12268f8.js"
import"./insertElementBefore-f1fdb06b.js"
import U from"./compressBio-a29f2a2d.js"
import{c as Q}from"./currentGuildId-86da8be9.js"
import"./intValue-0e84cdad.js"
import"./valueText-3f53d458.js"
import{c as X,b as Z,p as z,a as F,g as J}from"./levelHighlight-ee9800e0.js"
import"./fshOpen-ee221b8b.js"
import{o as q}from"./openQuickBuffByName-181ee98a.js"
import{d as K}from"./dataRows-8a79afc4.js"
import{c as W}from"./createUl-850a409c.js"
import{s as Y,g as tt}from"./idb-efff97cf.js"
import{i as et}from"./insertElementAfterBegin-52f072be.js"
import"./isChecked-8ee9db43.js"
import{b as nt}from"./simpleCheckbox-3328fcb7.js"
import{a as st}from"./alpha-ec0cb412.js"
import{c as at}from"./createTBody-5d67034f.js"
import{c as it}from"./createTable-cf4fb3e8.js"
import"./isDate-32fe1182.js"
import"./padZ-ce2146a0.js"
import{f as ot}from"./formatLocalDateTime-3e97021e.js"
import{u as ct,l as rt,v as lt,c as ft,m as dt,a as ut,g as mt}from"./indexConstants-a42acd82.js"
import{c as pt}from"./createBr-342ea6a2.js"
import{c as ht}from"./createButton-109df573.js"
import{c as bt}from"./createTextArea-4e64f1ce.js"
import{d as gt}from"./dialogMsg-16e7e1c1.js"
import{c as jt}from"./createStyle-7b1b43cf.js"
import{c as Nt}from"./createSpan-b27bc4d5.js"
import{h as vt}from"./hideElement-48576eeb.js"
import{t as Ct}from"./toggleVisibilty-b93da8c7.js"
function Lt(t,e){const n=a.exec(e.dataset.tipped)
return V({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function St(){const a=t("b",e).find(n("Members"))
if(a){const t=s('#pCC a[data-tipped*="Last Activity"]'),e=function(t){return t.reduce(Lt,[0,0])}(t)
a.classList.add("tip-static"),_(`Active: ${e[0]}/${t.length}<br>Stamina: ${I(e[1])}`,a)}}function yt(){}let wt,kt,$t,Mt,xt,Tt,At,Ht,Et,Rt,Bt,Dt,Gt,It,Vt
function _t(t,e){const n=Number(/VL:.+?(\d+)/.exec(e)[1]),s=t.parentNode.parentNode
!function(t){return wt&&t>=Z&&t<=z}(n)?function(t){return kt&&t>=F&&t<=J}(n)&&s.classList.add("lvlGvGHighlight"):s.classList.add("lvlHighlight")}function Ot(t){const{tipped:e}=t.dataset
a.exec(e)[1]<7&&_t(t,e)}function Pt(){Number(f("guild_id"))!==Q()&&(wt||kt)&&(X(),s('#pCC a[data-tipped*="<td>VL:</td>"]').forEach(Ot))}function Ut(){wt=l("highlightPlayersNearMyLvl"),kt=l("highlightGvGPlayersNearMyLvl"),Pt(),l("enableHistoryCompressor")&&function(){const n=t(i,e).slice(-2,-1)[0].rows[0].cells[0],s=o({id:"profile-bio",innerHTML:n.innerHTML})
c("",n),r(n,s),U()}()}function Qt(t){p(t.parentNode,' <span class="smallLink">[b]</span>')}function Xt(t){"smallLink"===t.target.className&&q(t.target.previousElementSibling.text)}function Zt(){const t=d(`#pCC a[href^="${u}"]`)
O([5,3,t,0,Qt]),m(e,Xt)}function zt(t){return h({cmd:"guild",subcmd:"conflicts",page:t})}function Ft(t,e){c(e,t.insertCell(-1))}function Jt(t,e,n){const s=t.insertRow(t.rows.length-2)
Ft(s,e),Ft(s,n)}function qt(t,e){Jt(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function Kt(t,e,n){1===e&&function(t){Jt(t,`<a href="${N}conflicts">Active Conflicts</a>`,"Score")}(n),K(t.rows,7,0).forEach(b(qt,n))}function Wt(t,e){const n=g(e),s=j('#pCC input[name="page"]',n)
if(!s)return
const a=Number(s.value),i=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(s)
!function(t,e,n){const s=j("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Kt(s,e,n)}(n,a,t.node),i>a&&function(t,e,n){zt(t+1).then(b(e,n))}(a,Wt,t)}function Yt(t){const e=t.rows[6].cells[0].children[0]
e&&zt(1).then(b(Wt,{node:e}))}function te(t){t.target.id===v&&L(v,!l(v))}function ee(t,e){return`${t}<option value="${e}">${e}</option>`}function ne(t){return k(t)?"#DEF":t.toLocaleString()}function se(t,e,n){return e+"<tr>"+`<td>${ot(new Date(1e3*n[ct]))}</td>`+`<td>${t}</td>`+`<td class="fshRight">${ne(n[rt])}</td>`+`<td class="fshRight">${ne(n[lt])}</td>`+`<td class="fshRight">${ne(n[ft])}</td>`+`<td class="fshRight">${ne(n[dt])}</td>`+`<td class="fshRight">${Math.floor(n[ft]/n[dt]*100)}</td>`+`<td class="fshRight">${n[ut]}</td>`+`<td class="fshRight">${ne(n[mt])}</td></tr>`}function ae(t,e){return function(t){return Mt&&"- All -"!==Mt&&Mt!==t}(e)?t:t+At[e].reduce(b(se,e),"")}function ie(){At&&c(y(At).reduce(ae,""),$t),xt.classList.remove("fshSpinner")}function oe(){xt.classList.add("fshSpinner"),w(3,ie)}function ce(t){Mt=t.target.value,oe()}function re(t){t&&(At=t,c(`<select name="member"><option value="- All -" selected>- All -</option>${y(t).sort(st).reduce(ee,"")}</select>`,Tt),oe())}function le(){const t=S("th",{textContent:"Member"})
return Tt=o(),r(t,Tt),t}function fe(){const t=it({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
p(e,"<th>Date</th>")
const n=le()
r(e,n),p(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){$t=at(),r(t,$t)}(t),C(t,"change",ce),xt=o({className:"tgCont fshSpinner64"}),r(xt,t),xt}function de(t){Ht.value=t,Bt.classList.remove("fshSpinner")}function ue(){Ht.value='{"lastUpdate": 0, "members": {}}'}function me(t){gt("Update successful"),re(t.members)}function pe(){const t=$(Ht.value)
Y("fsh_guildActivity",t).then(b(me,t)).catch(gt)}function he(t,e){const n=ht({className:"custombutton",textContent:t})
return m(n,e),n}function be(){return Bt=o({id:"io",className:"fshSpinner64"}),Ht=bt(),Ht.setAttribute("autocapitalize","off"),Ht.setAttribute("autocomplete","off"),Ht.setAttribute("autocorrect","off"),Ht.setAttribute("spellcheck","false"),Et=he("Save",pe),Rt=he("Reset",ue),r(Bt,Ht),r(Bt,pt()),r(Bt,Et),r(Bt,Rt),Bt}function ge(){return!Gt.checked}function je(t){Gt.checked&&"Escape"===t.code&&(Gt.checked=!1)}function Ne(t){ge()&&(t.style.transform=null)}function ve(){x("guildTracker","updateRawData"),Dt&&function(t){t&&(Bt.classList.add("fshSpinner"),w(4,de,[t]))}(Dt)}function Ce(){const t=function(){const t=o({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return Vt=G({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),M(Vt,"change",ve),r(t,Vt),t}(),e=W({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return r(t,e),A(e,t),t}function Le(){const t=Ce(),e=function(){const t=o({className:"fsh-dialog-content"})
return r(t,fe()),r(t,be()),t}()
r(t,e),C(Gt,"change",b(Ne,t)),r(It,t)}function Se(t){t&&(Dt=JSON.stringify(t),re(t.members))}function ye(){x("guildTracker","openDialog"),tt("fsh_guildActivity").then(Se),T.dialogIsClosed=ge,p(It,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),Le()}function we(){!function(){const t=j("#pCC img.guild_openGuildStore"),e=t.parentNode,n=o({className:"fsh-tracker"}),s=o({innerHTML:nt(v)+'&nbsp;<label class="custombutton" for="tracker">Show</label>'})
C(s,"change",te),r(n,t),r(n,s),et(e,n)}(),Gt=G({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),M(Gt,"change",ye),It=o({className:"fsh-dialog"}),r(It,Gt),C(document.body,"keydown",je),r(document.body,It)}let ke,$e
function Me(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`#fshMemberList tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function xe(){$e?$e.disabled=!ke:function(){const t=H(i,e),n=t[t.length-1]
n.id="fshMemberList"
const a=s(E,n).map(Me).join("\n")
$e=r(document.body,jt(a)).sheet}()}function Te(){ke=!ke,L("enableStamBars",ke),xe(),x("guildManage","StamBars")}function Ae(){!function(){const t=j("#pCC img.guild_openGuildStore").parentNode,e=r(t,o({className:"fshCenter",innerHTML:nt("enableStamBars")}))
C(e,"change",Te)}(),ke=l("enableStamBars"),ke&&xe()}function He(t,e,n){const s=function(t){return Nt({className:"fshLink tip-static",dataset:{linkto:t,tipped:"Toggle Section"},textContent:"X"})}(n)
r(t,function(t){const e=Nt({innerHTML:"[&nbsp;"})
return r(e,t),p(e,"&nbsp;]"),e}(s)),e.id=n,l(n)&&vt(e),m(s,Ct)}function Ee(t){He(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Re(t){const e=t.rows[4].cells[1].children[0]
c(e.innerHTML.trim(),e),He(e,t.rows[6].cells[0].children[0],"statisticsControl")}function Be(t){He(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function De(e){const s=t("b",e).filter(n("Relics"))
if(1!==s.length)return
const a=s[0].parentNode.nextElementSibling.children[0]
c(`[ <a href="${N}reliclist">Control</a> ]&nbsp;`,a)}function Ge(t){const e=H("li",t),n=e[e.length-1].parentNode
p(n,`<li><a href="${B}${D()}" class="tip-static" data-tipped="Self Recall">Self Recall</a></li>`)}function Ie(t,e){w(3,e,[t])}function Ve(t){R()||(l("detailedConflictInfo")&&w(3,Yt,[t]),w(4,we))}function _e(){const t=e.lastElementChild.rows[2].cells[0].children[0]
!function(t){[Ee,Re,Be,De,Ge].forEach(b(Ie,t))}(t),w(3,Zt),Ve(t),Ae()}function Oe(){const t=j('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}export default function(){w(3,P),w(3,Oe),w(3,yt),w(3,St),"manage"===T.subcmd&&_e(),"view"===T.subcmd&&Ut()}
//# sourceMappingURL=guild-44b72839.js.map