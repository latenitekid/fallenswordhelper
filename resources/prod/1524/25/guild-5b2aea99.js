import{g as t,p as e,a$ as n,D as s,bl as a,d as o,m as i,A as c,h as r,H as l,Q as f,b as d,a9 as u,a1 as m,o as p,i as h,u as b,t as g,v as j,C,s as N,bm as L,f as v,Y as S,n as y,aq as w,a as $,ai as k,aK as x,O as M,U as T,c as A,bn as H,E as R,x as B,bo as E}from"./calfSystem-71b9378d.js"
import"./numberIsNaN-929de7af.js"
import{p as D}from"./playerName-17bbea9d.js"
import"./toLowerCase-c42114e1.js"
import{c as I}from"./createInput-1eba672c.js"
import{a as G}from"./addCommas-bdfe3cd5.js"
import{l as P}from"./onlineDot-4f9ab5c3.js"
import{s as V}from"./setTipped-64e874d6.js"
import{b as _}from"./batch-151895c0.js"
import{c as U}from"./colouredDots-10fbd2da.js"
import"./createLabel-0de5e3fd.js"
import"./insertElementBefore-286ff14c.js"
import F from"./compressBio-3beb6c3e.js"
import{c as O}from"./createStyle-ed98f25d.js"
import{c as Q}from"./currentGuildId-58e8f97e.js"
import"./intValue-65d3c36c.js"
import"./valueText-4f638fd7.js"
import{a as X,g as q,c as z,b as J}from"./levelHighlight-51d4b9d9.js"
import"./fshOpen-4f280086.js"
import{o as K}from"./openQuickBuffByName-3c146954.js"
import{d as Y}from"./dataRows-46e36367.js"
import{c as Z}from"./createUl-9605d03d.js"
import{s as W,g as tt}from"./idb-97e2a44e.js"
import{i as et}from"./insertElementAfterBegin-1ff1031d.js"
import"./isChecked-9f10b428.js"
import{b as nt}from"./simpleCheckbox-1a2b6475.js"
import{a as st}from"./alpha-4977b995.js"
import{c as at}from"./createTBody-a4a451e2.js"
import{c as ot}from"./createTable-0f37c9d5.js"
import"./isDate-b3759236.js"
import"./padZ-0c2f5370.js"
import{f as it}from"./formatLocalDateTime-be73fafb.js"
import{u as ct,l as rt,v as lt,c as ft,m as dt,a as ut,g as mt}from"./indexConstants-00eab081.js"
import{c as pt,t as ht}from"./toggleVisibilty-e22bfa5e.js"
import{c as bt}from"./createButton-5da07973.js"
import{c as gt}from"./createTextArea-52dbf6fa.js"
import{d as jt}from"./dialogMsg-1f890a82.js"
import{c as Ct}from"./createSpan-729a1388.js"
import{h as Nt}from"./hideElement-c8e0696f.js"
function Lt(t,e){const n=a.exec(e.dataset.tipped)
return P({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function vt(){const a=t("b",e).find(n("Members"))
if(a){const t=s('#pCC a[data-tipped*="Last Activity"]'),e=function(t){return t.reduce(Lt,[0,0])}(t)
a.classList.add("tip-static"),V(`Active: ${e[0]}/${t.length}<br>Stamina: ${G(e[1])}`,a)}}let St,yt
function wt(t){return St&&t>=X()&&t<=q()}function $t(t){return yt&&t>=z()&&t<=J()}const kt=t=>[t,a.exec(t.dataset.tipped)[1]],xt=([,t])=>t<7,Mt=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Tt=([t,e])=>[t.parentNode.parentNode.rowIndex,wt(e),$t(e)]
const At=t=>t.map(([t])=>`.fshHighlight tr:nth-child(${t+1})`).join(",")
function Ht(){const t=s('#pCC a[data-tipped*="<td>VL:</td>"]').map(kt).filter(xt).map(Mt).map(Tt),n=t.filter(([,t])=>t),a=t.filter(([,t,e])=>!t&&e)
!function(t){if(t.length){const e=At(t)+" {background-color: #4671C8;}"
r(document.body,O(e))}}(n),function(t){if(t.length){const e=At(t)+" {background-color: #FF9900;}"
r(document.body,O(e))}}(a),function(t,n){if(t.length+n.length){const t=d(o,e)
t[t.length-1].classList.add("fshHighlight")}}(n,a)}function Rt(){Number(f("guild_id"))!==Q()&&(St||yt)&&Ht()}function Bt(){St=l("highlightPlayersNearMyLvl"),yt=l("highlightGvGPlayersNearMyLvl"),Rt(),l("enableHistoryCompressor")&&function(){const n=t(o,e).slice(-2,-1)[0].rows[0].cells[0],s=i({id:"profile-bio",innerHTML:n.innerHTML})
c("",n),r(n,s),F()}()}function Et(t){h(t.parentNode,' <span class="smallLink">[b]</span>')}function Dt(t){"smallLink"===t.target.className&&K(t.target.previousElementSibling.text)}function It(){const t=u(`#pCC a[href^="${m}"]`)
_([5,3,t,0,Et]),p(e,Dt)}function Gt(t){return b({cmd:"guild",subcmd:"conflicts",page:t})}function Pt(t,e){c(e,t.insertCell(-1))}function Vt(t,e,n){const s=t.insertRow(t.rows.length-2)
Pt(s,e),Pt(s,n)}function _t(t,e){Vt(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function Ut(t,e,n){1===e&&function(t){Vt(t,`<a href="${N}conflicts">Active Conflicts</a>`,"Score")}(n),Y(t.rows,7,0).forEach(g(_t,n))}function Ft(t,e){const n=j(e),s=C('#pCC input[name="page"]',n)
if(!s)return
const a=Number(s.value),o=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(s)
!function(t,e,n){const s=C("#pCC > table > tbody > tr > td > table",t)
s&&s.rows.length>3&&Ut(s,e,n)}(n,a,t.node),o>a&&function(t,e,n){Gt(t+1).then(g(e,n))}(a,Ft,t)}function Ot(t){const e=t.rows[6].cells[0].children[0]
e&&Gt(1).then(g(Ft,{node:e}))}function Qt(t){t.target.id===L&&S(L,!l(L))}let Xt,qt,zt,Jt,Kt,Yt,Zt,Wt,te,ee,ne,se,ae
function oe(t,e){return`${t}<option value="${e}">${e}</option>`}function ie(t){return k(t)?"#DEF":t.toLocaleString()}function ce(t,e,n){return e+"<tr>"+`<td>${it(new Date(1e3*n[ct]))}</td>`+`<td>${t}</td>`+`<td class="fshRight">${ie(n[rt])}</td>`+`<td class="fshRight">${ie(n[lt])}</td>`+`<td class="fshRight">${ie(n[ft])}</td>`+`<td class="fshRight">${ie(n[dt])}</td>`+`<td class="fshRight">${Math.floor(n[ft]/n[dt]*100)}</td>`+`<td class="fshRight">${n[ut]}</td>`+`<td class="fshRight">${ie(n[mt])}</td></tr>`}function re(t,e){return function(t){return qt&&"- All -"!==qt&&qt!==t}(e)?t:t+Kt[e].reduce(g(ce,e),"")}function le(){Kt&&c(w(Kt).reduce(re,""),Xt),zt.classList.remove("fshSpinner")}function fe(){zt.classList.add("fshSpinner"),$(3,le)}function de(t){qt=t.target.value,fe()}function ue(t){t&&(Kt=t,c(`<select name="member"><option value="- All -" selected>- All -</option>${w(t).sort(st).reduce(oe,"")}</select>`,Jt),fe())}function me(){const t=y("th",{textContent:"Member"})
return Jt=i(),r(t,Jt),t}function pe(){const t=ot({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
h(e,"<th>Date</th>")
const n=me()
r(e,n),h(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){Xt=at(),r(t,Xt)}(t),v(t,"change",de),zt=i({className:"tgCont fshSpinner64"}),r(zt,t),zt}function he(t){Yt.value=t,te.classList.remove("fshSpinner")}function be(){Yt.value='{"lastUpdate": 0, "members": {}}'}function ge(t){jt("Update successful"),ue(t.members)}function je(){const t=x(Yt.value)
W("fsh_guildActivity",t).then(g(ge,t)).catch(jt)}function Ce(t,e){const n=bt({className:"custombutton",textContent:t})
return p(n,e),n}function Ne(){return te=i({id:"io",className:"fshSpinner64"}),Yt=gt(),Yt.setAttribute("autocapitalize","off"),Yt.setAttribute("autocomplete","off"),Yt.setAttribute("autocorrect","off"),Yt.setAttribute("spellcheck","false"),Zt=Ce("Save",je),Wt=Ce("Reset",be),r(te,Yt),r(te,pt()),r(te,Zt),r(te,Wt),te}function Le(){return!ne.checked}function ve(t){ne.checked&&"Escape"===t.code&&(ne.checked=!1)}function Se(t){Le()&&(t.style.transform=null)}function ye(){T("guildTracker","updateRawData"),ee&&function(t){t&&(te.classList.add("fshSpinner"),$(4,he,[t]))}(ee)}function we(){const t=function(){const t=i({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return ae=I({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),M(ae,"change",ye),r(t,ae),t}(),e=Z({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return r(t,e),H(e,t),t}function $e(){const t=we(),e=function(){const t=i({className:"fsh-dialog-content"})
return r(t,pe()),r(t,Ne()),t}()
r(t,e),v(ne,"change",g(Se,t)),r(se,t)}function ke(t){t&&(ee=JSON.stringify(t),ue(t.members))}function xe(){T("guildTracker","openDialog"),tt("fsh_guildActivity").then(ke),A.dialogIsClosed=Le,h(se,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),$e()}function Me(){!function(){const t=C("#pCC img.guild_openGuildStore"),e=t.parentNode,n=i({className:"fsh-tracker"}),s=i({innerHTML:nt(L)+'&nbsp;<label class="custombutton" for="tracker">Show</label>'})
v(s,"change",Qt),r(n,t),r(n,s),et(e,n)}(),ne=I({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),M(ne,"change",xe),se=i({className:"fsh-dialog"}),r(se,ne),v(document.body,"keydown",ve),r(document.body,se)}let Te,Ae
function He(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function Re(){Ae?Ae.disabled=!Te:function(){const t=d(o,e),n=t[t.length-1]
n.classList.add("fshProgressBar")
const a=s(R,n).map(He).join("\n")
Ae=r(document.body,O(a)).sheet}()}function Be(){Te=!Te,S("enableStamBars",Te),Re(),T("guildManage","StamBars")}function Ee(){!function(){const t=C("#pCC img.guild_openGuildStore").parentNode,e=r(t,i({className:"fshCenter",innerHTML:nt("enableStamBars")}))
v(e,"change",Be)}(),Te=l("enableStamBars"),Te&&Re()}function De(t,e,n){const s=function(t){return Ct({className:"fshLink tip-static",dataset:{linkto:t,tipped:"Toggle Section"},textContent:"X"})}(n)
r(t,function(t){const e=Ct({innerHTML:"[&nbsp;"})
return r(e,t),h(e,"&nbsp;]"),e}(s)),e.id=n,l(n)&&Nt(e),p(s,ht)}function Ie(t){De(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Ge(t){const e=t.rows[4].cells[1].children[0]
c(e.innerHTML.trim(),e),De(e,t.rows[6].cells[0].children[0],"statisticsControl")}function Pe(t){De(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function Ve(e){const s=t("b",e).filter(n("Relics"))
if(1!==s.length)return
const a=s[0].parentNode.nextElementSibling.children[0]
c(`[ <a href="${N}reliclist">Control</a> ]&nbsp;`,a)}function _e(t){const e=d("li",t),n=e[e.length-1].parentNode
h(n,`<li><a href="${E}${D()}" class="tip-static" data-tipped="Self Recall">Self Recall</a></li>`)}function Ue(t,e){$(3,e,[t])}function Fe(t){B()||(l("detailedConflictInfo")&&$(3,Ot,[t]),$(4,Me))}function Oe(){const t=e.lastElementChild.rows[2].cells[0].children[0]
!function(t){[Ie,Ge,Pe,Ve,_e].forEach(g(Ue,t))}(t),$(3,It),Fe(t),Ee()}function Qe(){const t=C('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}function Xe(){$(3,U),$(3,Qe),$(3,vt),"manage"===A.subcmd&&Oe(),"view"===A.subcmd&&Bt()}export default Xe
//# sourceMappingURL=guild-5b2aea99.js.map