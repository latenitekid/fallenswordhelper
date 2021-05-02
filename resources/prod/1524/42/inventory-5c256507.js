import{$ as t,c as e,t as n,a5 as i,bg as s,bm as a,e as r,a4 as d,q as c,I as o,bn as l,h as f,p as u,E as p,aS as h,au as m,u as b,B as y,y as v,aw as g,a as k}from"./calfSystem-15b00143.js"
import{a as _}from"./allthen-3a0631ad.js"
import{g as x}from"./guild-d096f588.js"
import{g as I}from"./takeItem-f1be436e.js"
import{d as R}from"./daLoadInventory-a1ec7e09.js"
import{g as L}from"./getInventory-1a69bd37.js"
import{i as E}from"./isArray-68a41fd5.js"
import{c as M}from"./createTable-c2551f6f.js"
import{i as S}from"./isSelected-07fc60b5.js"
import{a as j,e as T,u as D}from"./useItem-a4028e58.js"
import{d as w}from"./daAjaxSendItemsToRecipient-6c797960.js"
import{s as N,g as A}from"./idb-1c9eb1ac.js"
import{c as G}from"./changeMinMax-b261f8ce.js"
import{d as q}from"./dialog-aad1c6e1.js"
import{i as P}from"./indexAjaxJson-430cd162.js"
import{m as U}from"./moveItem-55c00982.js"
import{h as C}from"./htmlResult-fa6afb78.js"
import{e as O}from"./errorDialog-14a51b34.js"
import{q as B,a as F}from"./queue-45c57c49.js"
import{e as W}from"./executeAll-bd0a035e.js"
import{g as V}from"./getMembrList-5ac332a8.js"
import{l as H}from"./loadDataTables-ad66bfa0.js"
import{n as Q}from"./notLastUpdate-1632a799.js"
import{i as Y}from"./intValue-9eb8a210.js"
import{l as z,p as J}from"./lvlTests-a299d5a1.js"
import"./all-9f53e8b3.js"
import"./cmdExport-22e87ca6.js"
import"./daUseItem-654b871a.js"
import"./numberIsNaN-484c0124.js"
import"./dialogMsg-5b0fd825.js"
import"./currentGuildId-ad15ffa8.js"
function X(){return x({subcmd:"fetchinv"})}function K(){return I({subcmd2:"report"})}let Z,tt=[]
function et(t){Z=t}const nt=t=>15===t.t
function it(t){E(t.r)&&(tt=Array.prototype.concat.apply([],t.r.map((t=>t.items))).filter(nt))}function st(t){E(t.r)&&(tt=tt.concat(t.r.filter(nt)))}function at(){return t(X).then(st)}function rt(){return t(K).then(st)}function dt(t,e){return e.a===t}function ct(t){if(15===t.type){const e=tt.find(n(dt,t.inv_id))
e&&(t.item_name=e.n)}}function ot(){Z.items.forEach(ct)}function lt(){const t=[L().then(et)]
return"invmanagernew"===e.subcmd&&t.push(R().then(it)),"guildinvmgr"===e.subcmd&&(t.push(at()),t.push(rt())),_(t,ot)}function ft(t,e){e.val(""),$(t).DataTable().search("").draw()}function ut(){Z.folders&&(Z.folders[-1]="Main")}const pt={checkedElements:{0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},fshMinLvl:1,fshMaxLvl:9999},ht='<table class="fshInvFilter"><tr><th colspan="14">@@reportTitle@@</th><th><span id="fshRefresh" class="fshLink">[Refresh]</span></th></tr><tr><td colspan="2" rowspan="3"><b>&nbsp;Show Items:</b></td><td class="fshRight">&nbsp;Helmet:</td><td><input id="fshHelmet" type="checkbox" item="0"/></td><td class="fshRight">&nbsp;Armor:</td><td><input id="fshArmor" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Gloves:</td><td><input id="fshGloves" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Boots:</td><td><input id="fshBoots" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Weapon:</td><td><input id="fshWeapon" type="checkbox" item="4"/></td><td></td><td class="fshRight">&nbsp;Min lvl:</td><td><input id="fshMinLvl" size="5" value="1"/></td></tr><tr><td class="fshRight">&nbsp;Shield:</td><td><input id="fshShield" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Ring:</td><td><input id="fshRing" type="checkbox" item="6"/></td><td class="fshRight">&nbsp;Amulet:</td><td><input id="fshAmulet" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rune:</td><td><input id="fshRune" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;Sets Only:</td><td><input id="fshSets" item="-1" type="checkbox"/></td><td></td><td class="fshRight">&nbsp;Max lvl:</td><td><input id="fshMaxLvl" size="5" value="9999"/></td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="2">&nbsp;[<span id="fshDefault" class="fshLink">Defaults</span>]</td><td colspan="6"></td><td><input id="fshReset" type="button" value="Reset"/></td></tr><tr><td class="fshRight">&nbsp;Quest Item:</td><td><input id="fshQuest" item="9" type="checkbox"/></td><td class="fshRight">&nbsp;Potion:</td><td><input id="fshPotion" item="10" type="checkbox"/></td><td class="fshRight">&nbsp;Resource:</td><td><input id="fshResource" item="12" type="checkbox"/></td><td class="fshRight">&nbsp;Recipe:</td><td><input id="fshRecipe" item="13" type="checkbox"/></td><td class="fshRight">&nbsp;Container:</td><td><input id="fshContainer" item="14" type="checkbox"/></td><td class="fshRight">&nbsp;Frag Stash:</td><td><input id="fshStash" item="16" type="checkbox"/></td><td class="fshRight">&nbsp;Composed:</td><td><input id="fshComposed" item="15" type="checkbox"/></td><td></td></tr><tr><td class="fshRight">&nbsp;Common:</td><td><input id="fshCommon" item="100" type="checkbox" checked/></td><td class="fshRight">&nbsp;Rare:</td><td><input id="fshRare" item="101" type="checkbox" checked/></td><td class="fshRight">&nbsp;Unique:</td><td><input id="fshUnique" item="102" type="checkbox" checked/></td><td class="fshRight">&nbsp;Legendary:</td><td><input id="fshLegendary" item="103" type="checkbox" checked/></td><td class="fshRight">&nbsp;Super Elite:</td><td><input id="fshSuperElite" item="104" type="checkbox" checked/></td><td class="fshRight">&nbsp;Crystalline:</td><td><input id="fshCrystalline" item="105" type="checkbox" checked/></td><td class="fshRight">&nbsp;Epic:</td><td colspan="2"><input id="fshEpic" item="106" type="checkbox" checked/></td></tr></table>',mt={0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},bt={Perfect:{abbr:"Perf",colour:"#00b600",index:8},Excellent:{abbr:"Exc",colour:"#f6ed00",index:7},"Very Good":{abbr:"VG",colour:"#f67a00",index:6},Good:{abbr:"Good",colour:"#f65d00",index:5},Average:{abbr:"Ave",colour:"#f64500",index:4},Poor:{abbr:"Poor",colour:"#f61d00",index:3},"Very Poor":{abbr:"VPr",colour:"#b21500",index:2},Uncrafted:{abbr:"Unc",colour:"#666666",index:1}}
function yt(t){return bt[t]?bt[t].abbr:""}function vt(t,e){const n=function(t){return t.folder_id?function(t){return t.equipped?"fshGreen":"fshNavy"}(t):function(t){return-1===t.player_id?"fshNavy":"fshMaroon"}(t)}(e)
t.classList.add(n)}function gt(t){return function(t){return t.player_id&&-1!==t.player_id}(t)||function(t){return t.folder_id&&-1!==t.guild_tag}(t)}function kt(t){return`<span class="fshLink recallItem" invid="${t.inv_id}" playerid="${i(t.player_id,Z.player_id)}" mode="1" action="recall">GS</span>`}function _t(t){return`<span class="fshLink storeItem" invid="${t.inv_id}">GS</span>`}function $t(t,e,n){return"display"===t?n(e):"GS"}function xt(t,e){const n=function(t){return-1===t.player_id?4:gt(t)?7:1}(e),i=function(t,e,n){return t||(-1!==e?e:n)}(Z.player_id,e.player_id,Z.guild_id)
let r=t
e.equipped&&(r=`<b>${t}</b>`)
let d=""
return function(t){return t.stats&&""!==t.stats.set_name}(e)&&(d=` (<span class="fshLink setName" set="${e.stats.set_name}">set</span>)`),`<a href="${s}${t}" class="fshInvItem tip-dynamic ${a[e.rarity].clas}" data-tipped="fetchitem.php?item_id=${e.item_id}&inv_id=${e.inv_id}&t=${n}&p=${i}">${r}</a>${d}`}const It=[[t=>t.player_id&&-1===t.player_id,(t,e)=>`takeItem" action="${e.a}`],[t=>t.player_id&&t.player_id!==Z.current_player_id,(t,e)=>`recallItem" playerid="${t.player_id}" mode="0" action="${e.a}`],[t=>function(t){return t.folder_id&&!t.equipped}(t)||function(t){return t.player_id&&!t.equipped&&t.player_id===Z.current_player_id}(t),(t,e)=>e.c]]
function Rt(t,e){const n=It.find((e=>e[0](t)))
return n?`<span class="fshLink ${n[1](t,e)}" invid="${t.inv_id}">${e.b}</span>`:""}function Lt(t){return i(t.folder_id,t.player_id)}function Et(t){return e.membrList[t]?e.membrList[t].username:"???"}function Mt(t,e){return t[0]-e[0]}function St(t,e){return`<option value="${e[0]}"${S(Number(e[0]),t)}>${e[1]}</option>`}let jt,Tt,Dt
function wt(t){jt=c({},pt),c(jt,i(t,{})),Tt=o("showQuickDropLinks"),Dt=o("showQuickSendLinks")}const Nt=[{title:"Name",data:"item_name",render:function(t,e,n){return"display"!==e?t:xt(t,n)}},{title:"Level",data:"stats.min_level"},{title:"Where",data:Lt,render:{_:function(t,e,n){return n.folder_id?function(t){return t.equipped?-2:t.folder_id}(n):-1===n.player_id?"~":Et(n.player_id)},display:function(t,e,i){return i.player_id?function(t){return-1===t.player_id?"Guild Store":`<a class="fshMaroon" href="${d}${t.player_id}">${Et(t.player_id)}</a>`}(i):i.equipped?"Worn":`<select class="fshMoveItem" data-inv="${i.inv_id}">${s=i.folder_id,a=Z.folders,r(a).sort(Mt).map(n(St,s)).join("")}</select>`
var s,a},filter:function(t,e,n){return n.player_id?function(t){return-1===t.player_id?"Guild Store":Et(t.player_id)}(n):n.equipped?"Worn":Z.folders[n.folder_id]}}},{title:"Type",data:"type",render:t=>l[t]},{title:"Att",data:"stats.attack"},{title:"Def",data:"stats.defense"},{title:"Arm",data:"stats.armor"},{title:"Dam",data:"stats.damage"},{title:"HP",data:"stats.hp"},{title:"Frg",data:"forge",render:function(t,e,n){if(n.type<9)return n.forge}},{title:"Craft",data:"craft",render:{_:t=>bt[t]?bt[t].index:0,display:yt,filter:yt}},{title:"Du%",data:"durability",render:function(t,e,n){if(n.type<9&&n.max_durability>0)return Math.ceil(n.durability/n.max_durability*100)}},{title:"BP",data:Lt,render:function(t,e,n){if(!n.folder_id&&n.player_id!==Z.current_player_id)return function(t,e){return"display"!==t?"BP":-1===e.player_id?`<span class="fshLink takeItem" invid="${e.inv_id}" action="take">BP</span>`:`<span class="fshLink recallItem" invid="${e.inv_id}" playerid="${e.player_id}" mode="0" action="recall">BP</span>`}(e,n)}},{title:"GS",data:Lt,render:function(t,e,n){return gt(n)?$t(e,n,kt):function(t){return t.folder_id&&!t.bound}(n)?$t(e,n,_t):void 0}},{title:"W/U",data:"type",render:function(t,e,n){const i=[1,1,1,1,1,1,1,1,1,,2,2,,,,2][t]
return 1===i?Rt(n,{a:"wear",b:"Wear",c:"wearItem"}):2===i?Rt(n,{a:"use",b:"Use",c:"useItem"}):void 0}},{title:"setName",data:"stats.set_name",orderable:!1,visible:!1},{title:"Tag",data:"guild_tag",render:t=>-1===t?"No":"Yes"},{title:"Drop",data:"type",render:function(t,e,n){if(!function(t){return-1!==t.guild_tag||t.equipped}(n))return"display"!==e?"Drop":`<span class="dropItem tip-static dropLink" data-tipped="INSTANTLY DESTROY THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Drop</span>`}},{title:"Send",data:"type",render:function(t,e,n){if(!function(t){return t.equipped||-1===t.guild_tag&&t.bound}(n))return"display"!==e?"Send":`<span class="sendItem tip-static sendLink" data-tipped="INSTANTLY SEND THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${n.inv_id}">Send</span>`}}]
function At(){return"player_id"in Z}function Gt(){const t=function(){const t=M({className:"hover fshXSmall",id:At()?"fshUserInv":"fshGuildInv"})
return f(u,t),t}()
return function(t){t.column(12).visible("current_player_id"in Z),t.column(17).visible(At()&&Tt),t.column(18).visible(At()&&Dt)}(function(t){return $(t).DataTable({autoWidth:!1,columnDefs:[{targets:"_all",defaultContent:""},{targets:[1,4,5,6,7,8,9,10,12,13],orderSequence:["desc","asc"]}],columns:Nt,createdRow:vt,data:Z.items,deferRender:!0,lengthMenu:[[50,100,150,200,-1],[50,100,150,200,"All"]],pageLength:50,stateDuration:0,stateSave:!0})}(t)),t}function qt(t){return w(t).then(j)}function Pt(t){N(`fsh_${e.subcmd}`,t)}function Ut(){p('table.fshInvFilter input[type="checkbox"]').forEach((t=>{t.checked=1===jt.checkedElements[t.getAttribute("item")]})),Pt(jt)}function Ct(t){jt.checkedElements=mt,Ut(),$(t).DataTable().draw(!1)}function Ot(t,e){jt.fshMinLvl=t,jt.fshMaxLvl=e,Pt(jt)}function Bt(t){$(t).DataTable().draw(!1)}function Ft(t){G(Ot,n(Bt,t))}function Wt(t){return Number(t[0])>=100}function Vt(t,e){return t[e[0]]=e[1],t}function Ht(t){var e
jt.checkedElements=(e=jt.checkedElements,r(e).filter(Wt).reduce(Vt,{})),Ut(),$(t).DataTable().draw()}function Qt(t,e){t.eq(e).empty()}function Yt(t,e){if(1===e.r)return
const i=t.closest("tr")
!function(t){[2,12,13,14,15,16].forEach(n(Qt,t))}($("td",i)),i.css("text-decoration","line-through")}function zt(t,e){h(e),function(t){t.closest("tr").find(".takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem").removeClass()}(e),t().then(n(Yt,e)),function(t){t.empty().append(`<img src="${m}ui/misc/spinner.gif" width="11" height="11">`)}(e)}function Jt(t){return P({cmd:"profile",subcmd:"dodropitems",removeIndex:t,ajax:1}).then(q)}function Xt(t){jt.checkedElements={},p('table.fshInvFilter input[type="checkbox"][item]:checked').forEach((t=>{jt.checkedElements[t.getAttribute("item")]=1})),Pt(jt),$(t).DataTable().draw(!1)}function Kt(t){jt.checkedElements=pt.checkedElements,Ut(),$(t).DataTable().draw(!1)}function Zt(t){jt.fshMinLvl=pt.fshMinLvl,jt.fshMaxLvl=pt.fshMaxLvl,Pt(jt),$("#fshMinLvl").val(jt.fshMinLvl),$("#fshMaxLvl").val(jt.fshMaxLvl),$(t).DataTable().draw(!1)}function te(t){return I({subcmd2:"dostoreitems",storeIndex:t})}function ee(t){return b({cmd:"guild",subcmd:"inventory",subcmd2:"dostoreitems",storeIndex:t}).then(C)}function ne(e){return function(e){return t(te,ee,e)}(e).then(O).then(j)}function ie(t,e){$(t).DataTable().search($(e.target).attr("set")).draw(),$(`#${t.id}_filter input`).trigger("focus")}function se(t){const e=$(t.target)
zt(n(B,e.attr("invid"),e.attr("action")),e)}function ae(t){const e=$(t.target)
zt(n(F,e.attr("invid"),e.attr("playerid"),e.attr("mode"),e.attr("action")),e)}function re(t){const e=$(t.target)
zt(n(T,e.attr("invid")),e)}function de(t){const e=$(t.target)
zt(n(D,e.attr("invid")),e)}function ce(t){const e=$(t.target)
U([e.data("inv")],e.val())}function oe(t){const e=$(t.target)
zt(n(ne,[e.attr("invid")]),e)}function le(t){const e=$(t.target)
zt(n(Jt,[e.data("inv")]),e)}function fe(t){const e=$(t.target)
zt(n(qt,[e.data("inv")]),e)}function ue(t,e){$(e[0]).on("click",n(e[1],t))}function pe(t,e){$(t).on("click",`span.${e[0]}`,e[1])}function he(t){!function(t){[["#fshReset",Zt],["#fshAll",Ct],["#fshNone",Ht],["#fshDefault",Kt]].forEach(n(ue,t))}(t),$("table.fshInvFilter").on("click",'input[type="checkbox"]',n(Xt,t)),function(t){[["setName",n(ie,t)],["takeItem",se],["recallItem",ae],["wearItem",re],["useItem",de],["dropItem",le],["sendItem",fe],["storeItem",oe]].forEach(n(pe,t))}(t)}function me(){let t
t=Z.player_id?`<b>&nbsp;Inventory Manager</b> ${Z.items.length} items (green = worn, blue = backpack)`:`<b>&nbsp;Guild Inventory Manager</b> ${Z.items.length} items (maroon = in BP, blue=guild store)`,y(ht.replace("@@reportTitle@@",t),u)}function be(){$("#fshMinLvl").val(jt.fshMinLvl),$("#fshMaxLvl").val(jt.fshMaxLvl)}let ye
function ve(t,e){return z(ye,Y(e[1]),jt.fshMinLvl,jt.fshMaxLvl)}function ge(){ye=[t=>0===t].concat(J),$.fn.dataTable.ext.search.push(ve)}function ke(){$.fn.dataTable.ext.search.push(((t,e,n,i)=>!jt.checkedElements||jt.checkedElements[i.type]))}function _e(){$.fn.dataTable.ext.search.push(((t,e,n,i)=>!jt.checkedElements||!jt.checkedElements[-1]||function(t){return jt.checkedElements[-1]&&t.stats&&-1!==t.stats.set_id}(i)))}function $e(){$.fn.dataTable.ext.search.push(((t,e,n,i)=>{const s=(parseInt(i.rarity,10)+100).toString()
return!jt.checkedElements||jt.checkedElements[s]}))}function xe(t,e){return t[e[1].id]=e[1],t}function Ie(){e.membrList=r(e.membrList).filter(Q).reduce(xe,{})}function Re(){W([ut,ge,ke,_e,$e,me,Ut,be])
const t=Gt()
!function(t){$("#fshMinLvl, #fshMaxLvl").on("keyup",n(Ft,t)),$(t).on("change","select.fshMoveItem",ce),he(t)}(t),$("#fshRefresh").on("click",Me),function(t){const e=$(`#${t.id}_filter input`)
e.prop("type","text")
const i=$("<span>&times;</span>")
e.wrap($('<span class="text-input-wrapper"/>')),e.after(i),i.on("click",n(ft,t,e))}(t)}function Le(){Re()}function Ee(){k(3,Le)}function Me(){v()||(y(`<span id="fshInvMan"><img src = "${g}">&nbsp;Getting inventory data...</span>`,u),function(){const t=[H(),lt()]
"guildinvmgr"===e.subcmd&&t.push(V(!1).then(Ie)),t.push(A(`fsh_${e.subcmd}`).then(wt)),_(t,Ee)}())}export default Me
//# sourceMappingURL=inventory-5c256507.js.map
