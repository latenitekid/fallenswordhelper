import{a as $e}from"./chunk-XAA77M6Z.js";import{a as _e}from"./chunk-MNGI557F.js";import{a as ye,b as ve,c as ge,d as xe}from"./chunk-CLU4QDY4.js";import{a as A}from"./chunk-CZMO24OL.js";import{a as ke,b as Ie,c as Re}from"./chunk-FLYLIOFN.js";import"./chunk-GZ26ANWK.js";import{a as ue}from"./chunk-V6GVUJKR.js";import{a as he}from"./chunk-JSOJ462U.js";import{a as be}from"./chunk-SYQA2O7R.js";import{a as le}from"./chunk-5AMGVG2S.js";import{a as fe}from"./chunk-E7X4C3NG.js";import{a as N}from"./chunk-WKW6ACFU.js";import{a as Zt,b as M,c as ee}from"./chunk-WHVO2RHE.js";import{a as te}from"./chunk-Y24FSK65.js";import"./chunk-SGZWGWEO.js";import"./chunk-IR3ZQHO6.js";import{a as Xt}from"./chunk-QEJBYH3I.js";import{a as Kt}from"./chunk-C5MJCIJS.js";import"./chunk-JHU4ZN26.js";import"./chunk-OXGD46RT.js";import{$ as ae,a as D,aa as se,b as re,d as ne,o as x,p as ie,q as oe,s as L,u as H,w as j,z as k}from"./chunk-HFFCEKOB.js";import"./chunk-YJWJEUAH.js";import"./chunk-QDNGOWRP.js";import{a as B}from"./chunk-VMCNYWQQ.js";import{a as pe}from"./chunk-4MFIQJXK.js";import{b as ce,c as me}from"./chunk-I66ZLTG4.js";import{a as de}from"./chunk-O7S66TCT.js";import"./chunk-H7QQAWWL.js";import"./chunk-PF6DJFMF.js";import"./chunk-5J6NAHWT.js";import{a as qt}from"./chunk-CCLZNKSK.js";import"./chunk-ZM6HBKU4.js";import{a as zt}from"./chunk-WLV3S4QF.js";import{a as P}from"./chunk-2R5YWF5Y.js";import"./chunk-W5GFA5ST.js";import{a as g}from"./chunk-AQVHZUV2.js";import"./chunk-4EQLU7T2.js";import"./chunk-NJOQ3NDV.js";import"./chunk-CGMJZDEW.js";import{a as Pt}from"./chunk-J5XNY3JU.js";import"./chunk-IQW2ORO4.js";import{a as U}from"./chunk-OOBHF62J.js";import"./chunk-6ESEJ6CM.js";import{a as p}from"./chunk-QIL4FZV2.js";import"./chunk-IZXJJTGC.js";import{a as Ut}from"./chunk-V6NNO7H4.js";import"./chunk-27EEPRQG.js";import{a as Yt,b as wt}from"./chunk-2OWDZVNG.js";import{a as Jt}from"./chunk-5W6U5QAI.js";import"./chunk-R2CSY5SF.js";import{a as Wt}from"./chunk-UGP7SKGY.js";import"./chunk-GYYOLXQ5.js";import"./chunk-3PRUC7MJ.js";import{a as Vt}from"./chunk-AM4ECP4R.js";import"./chunk-L4652TKI.js";import"./chunk-2EFDXXYQ.js";import{a as Qt}from"./chunk-2XEVBCYQ.js";import{a as E}from"./chunk-UVOACIBU.js";import"./chunk-WTFHXAG5.js";import"./chunk-7L7VBHFN.js";import"./chunk-7P2FG6TX.js";import"./chunk-B4BQ57SA.js";import"./chunk-LXEIN7K6.js";import"./chunk-RSDTLHOA.js";import{a as Bt}from"./chunk-CRTXBDKV.js";import{b as m}from"./chunk-32VOUESG.js";import{a as T}from"./chunk-7A7KFFCI.js";import"./chunk-WIXXQZGK.js";import{a as y}from"./chunk-VAF5SHD2.js";import"./chunk-7OIIEMPN.js";import{a as v}from"./chunk-G6KH6V7U.js";import{a as o}from"./chunk-JTZMGYZZ.js";import{a as Ht,b as jt}from"./chunk-PD7IT5U3.js";import"./chunk-IYLDI6QO.js";import"./chunk-ZSG7IXEN.js";import"./chunk-MC5PPM6O.js";import"./chunk-3HBYM6UL.js";import"./chunk-NYKMXDP7.js";import{b as _}from"./chunk-CJBVZNBW.js";import"./chunk-LBZNNC2Y.js";import"./chunk-6VTPYDCU.js";import"./chunk-L67WY5JB.js";import{Ia as Gt,Ja as Ot,b as Dt,c as Nt,t as At,x as Ft}from"./chunk-M7EFODKE.js";import{a as s}from"./chunk-N5EIINNY.js";function Q(){return le({subcmd:"fetchinv"})}function He(t){let e={a:Number(t.a),b:Number(t.b),l:Number(t.l),n:t.extra?t.extra.name:t.n,t:Number(t.t)};return{...t,...e}}function je(t){return{r:t.map(He),s:!0}}function V(){return zt({cmd:"guild",subcmd:"fetchinv"}).then(je)}function W(){return g(Q,V)}function Qe(t){if(!t.children[0].href)return{a:-1,n:"-1",t:-1};let e=Number(ye(t.children[0].href)),r=Ut(t.previousElementSibling),a={a:e};return r.endsWith(" (Potion)")?(a.n=r.slice(0,-9),a.t=15):(a.n=r,a.t=-1),a}function Ve(t){let e=Qt(t);return{r:p("#pCC table table td:nth-of-type(3n)",e).map(Qe),s:!0}}function Y(){return E({cmd:"guild",subcmd:"inventory",subcmd2:"report"}).then(Ve)}function w(){return A({subcmd2:"report"})}function J(){return g(w,Y)}var i,F=[];function We(t){i=t}function Ye(){return be().then(We)}var Le=t=>t.t===15;function we(t){!U(t?.r?.inventories)||(F=Array.prototype.concat.apply([],t.r.inventories.map(e=>e.items)).filter(Le))}function Je(){return Kt().then(we)}function Se(t){!U(t.r)||(F=F.concat(t.r.filter(Le)))}function Xe(){return W().then(Se)}function ze(){return J().then(Se)}function Ke(t,e){return e.a===t}function Ze(t){if(t.type===15){let e=F.find(o(Ke,t.inv_id));e&&(t.item_name=e.n)}}function tr(){i.items.forEach(Ze)}function Ce(){let t=[Ye()];return s.subcmd==="invmanagernew"&&t.push(Je()),s.subcmd==="guildinvmgr"&&(t.push(Xe()),t.push(ze())),N(t,tr)}function er(t,e){e.val(""),$(t).DataTable().search("").draw()}function X(t){let e=$(`#${t.id}_filter input`);e.prop("type","text");let r=$("<span>&times;</span>");e.wrap($('<span class="text-input-wrapper"/>')),e.after(r),r.on("click",o(er,t,e))}function z(){i.folders&&(i.folders["-1"]="Main")}function rr(t,e){return t!=="display"?"BP":e.player_id===-1?`<span class="fshLink takeItem" invid="${e.inv_id}" action="take">BP</span>`:`<span class="fshLink recallItem" invid="${e.inv_id}" playerid="${e.player_id}" mode="0" action="recall">BP</span>`}function K(t,e,r){if(!(r.folder_id||r.player_id===i.current_player_id))return rr(e,r)}var u={checkedElements:{0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},fshMinLvl:1,fshMaxLvl:9999},Te='<table class="fshInvFilter"><tr><th colspan="14">@@reportTitle@@</th><th><span id="fshRefresh" class="fshLink">[Refresh]</span></th></tr><tr><td colspan="2" rowspan="3"><b>&nbsp;Show Items:</b></td><td class="fshRight">&nbsp;Helmet:</td><td><input id="fshHelmet" type="checkbox" item="0"/></td><td class="fshRight">&nbsp;Armor:</td><td><input id="fshArmor" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Gloves:</td><td><input id="fshGloves" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Boots:</td><td><input id="fshBoots" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Weapon:</td><td><input id="fshWeapon" type="checkbox" item="4"/></td><td></td><td class="fshRight">&nbsp;Min lvl:</td><td rowspan="2"><input id="fshMinLvl" class="fshNumberInput" type="number" value="1"/><br><input id="fshMaxLvl" class="fshNumberInput" type="number" value="9999"/></td></tr><tr><td class="fshRight">&nbsp;Shield:</td><td><input id="fshShield" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Ring:</td><td><input id="fshRing" type="checkbox" item="6"/></td><td class="fshRight">&nbsp;Amulet:</td><td><input id="fshAmulet" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rune:</td><td><input id="fshRune" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;Sets Only:</td><td><input id="fshSets" item="-1" type="checkbox"/></td><td></td><td class="fshRight">&nbsp;Max lvl:</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="2">&nbsp;[<span id="fshDefault" class="fshLink">Defaults</span>]</td><td colspan="6"></td><td><input id="fshReset" type="button" value="Reset"/></td></tr><tr><td class="fshRight">&nbsp;Quest Item:</td><td><input id="fshQuest" item="9" type="checkbox"/></td><td class="fshRight">&nbsp;Potion:</td><td><input id="fshPotion" item="10" type="checkbox"/></td><td class="fshRight">&nbsp;Resource:</td><td><input id="fshResource" item="12" type="checkbox"/></td><td class="fshRight">&nbsp;Recipe:</td><td><input id="fshRecipe" item="13" type="checkbox"/></td><td class="fshRight">&nbsp;Container:</td><td><input id="fshContainer" item="14" type="checkbox"/></td><td class="fshRight">&nbsp;Frag Stash:</td><td><input id="fshStash" item="16" type="checkbox"/></td><td class="fshRight">&nbsp;Composed:</td><td><input id="fshComposed" item="15" type="checkbox"/></td><td></td></tr><tr><td class="fshRight">&nbsp;Common:</td><td><input id="fshCommon" item="100" type="checkbox" checked/></td><td class="fshRight">&nbsp;Rare:</td><td><input id="fshRare" item="101" type="checkbox" checked/></td><td class="fshRight">&nbsp;Unique:</td><td><input id="fshUnique" item="102" type="checkbox" checked/></td><td class="fshRight">&nbsp;Legendary:</td><td><input id="fshLegendary" item="103" type="checkbox" checked/></td><td class="fshRight">&nbsp;Super Elite:</td><td><input id="fshSuperElite" item="104" type="checkbox" checked/></td><td class="fshRight">&nbsp;Crystalline:</td><td><input id="fshCrystalline" item="105" type="checkbox" checked/></td><td class="fshRight">&nbsp;Epic:</td><td colspan="2"><input id="fshEpic" item="106" type="checkbox" checked/></td></tr></table>',Ee={0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,100:1,101:1,102:1,103:1,104:1,105:1,106:1},I={Perfect:{abbr:"Perf",colour:"#00b600",index:8},Excellent:{abbr:"Exc",colour:"#f6ed00",index:7},"Very Good":{abbr:"VG",colour:"#f67a00",index:6},Good:{abbr:"Good",colour:"#f65d00",index:5},Average:{abbr:"Ave",colour:"#f64500",index:4},Poor:{abbr:"Poor",colour:"#f61d00",index:3},"Very Poor":{abbr:"VPr",colour:"#b21500",index:2},Uncrafted:{abbr:"Unc",colour:"#666666",index:1}};function G(t){return I[t]?I[t].abbr:""}function nr(t){return t.equipped?"fshGreen":"fshNavy"}function ir(t){return t.player_id===-1?"fshNavy":"fshMaroon"}function or(t){return t.folder_id?nr(t):ir(t)}function Z(t,e){let r=or(e);t.classList.add(r)}function ar(t){return t.guild_tag!==-1||t.equipped}function tt(t,e,r){if(!ar(r))return e!=="display"?"Drop":`<span class="dropItem dropLink" data-tooltip="INSTANTLY DESTROY THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${r.inv_id}">Drop</span>`}function et(t,e,r){if(r.type<9&&r.max_durability>0)return Math.ceil(r.durability/r.max_durability*100)}function rt(t,e,r){if(r.type<9)return r.forge}function sr(t){return t.player_id&&t.player_id!==-1}function dr(t){return t.folder_id&&t.guild_tag!==-1}function S(t){return sr(t)||dr(t)}function pr(t){return`<span class="fshLink recallItem" invid="${t.inv_id}" playerid="${y(t.player_id,i.player_id)}" mode="1" action="recall">GS</span>`}function lr(t){return`<span class="fshLink storeItem" invid="${t.inv_id}">GS</span>`}function Me(t,e,r){return t==="display"?r(e):"GS"}function fr(t){return t.folder_id&&!t.bound}function nt(t,e,r){if(S(r))return Me(e,r,pr);if(fr(r))return Me(e,r,lr)}function cr(t){return t.player_id===-1?4:S(t)?7:1}function mr(t,e,r){return t||(e!==-1?e:r)}function ur(t){return t.stats&&t.stats.set_name!==""}function hr(t,e){let r=cr(e),a=mr(i.player_id,e.player_id,i.guild_id),d=t;e.equipped&&(d=`<b>${t}</b>`);let R="";return ur(e)&&(R=` (<span class="fshLink setName" set="${e.stats.set_name}">set</span>)`),`<a href="${At}${t}" class="fshInvItem tip-dynamic ${Nt[e.rarity].clas}" data-tipped="fetchitem.php?item_id=${e.item_id}&inv_id=${e.inv_id}&t=${r}&p=${a}">${d}</a>${R}`}function it(t,e,r){return e!=="display"?t:hr(t,r)}function br(t){return t.equipped||t.guild_tag===-1&&t.bound}function ot(t,e,r){if(!br(r))return e!=="display"?"Send":`<span class="sendItem sendLink" data-tooltip="INSTANTLY SEND THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk." data-inv="${r.inv_id}">Send</span>`}function yr(t){return t.folder_id&&!t.equipped}function vr(t){return t.player_id&&!t.equipped&&t.player_id===i.current_player_id}var gr=[[t=>t.player_id&&t.player_id===-1,(t,e)=>`takeItem" action="${e.a}`],[t=>t.player_id&&t.player_id!==i.current_player_id,(t,e)=>`recallItem" playerid="${t.player_id}" mode="0" action="${e.a}`],[t=>yr(t)||vr(t),(t,e)=>e.c]];function De(t,e){let r=gr.find(a=>a[0](t));return r?`<span class="fshLink ${r[1](t,e)}" invid="${t.inv_id}">${e.b}</span>`:""}function at(t,e,r){let a=[1,1,1,1,1,1,1,1,1,null,2,2,null,null,null,2][t];if(a===1)return De(r,{a:"wear",b:"Wear",c:"wearItem"});if(a===2)return De(r,{a:"use",b:"Use",c:"useItem"})}function C(t){return y(t.folder_id,t.player_id)}function h(t){return s.membrList[t]?s.membrList[t].username:"???"}function xr(t){return t.equipped?-2:t.folder_id}function st(t,e,r){return r.folder_id?xr(r):r.player_id===-1?"~":h(r.player_id)}function kr(t){return t.player_id===-1?"Guild Store":`<a class="fshMaroon" href="${Ft}${t.player_id}">${h(t.player_id)}</a>`}function Ir(t,e){return t[0]-e[0]}function Rr(t,e){return`<option value="${e[0]}"${$e(Number(e[0]),t)}>${e[1]}</option>`}function _r(t,e){return v(e).sort(Ir).map(o(Rr,t)).join("")}function dt(t,e,r){return r.player_id?kr(r):r.equipped?"Worn":`<select class="fshMoveItem" data-inv="${r.inv_id}">${_r(r.folder_id,i.folders)}</select>`}function $r(t){return t.player_id===-1?"Guild Store":h(t.player_id)}function pt(t,e,r){return r.player_id?$r(r):r.equipped?"Worn":i.folders[r.folder_id]}var n,lt,ft;function Ne(t){n={...xe(u),...y(t,{})},lt=_("showQuickDropLinks"),ft=_("showQuickSendLinks")}var Lr=[{title:"Name",data:"item_name",render:it},{title:"Level",data:"stats.min_level"},{title:"Where",data:C,render:{_:st,display:dt,filter:pt}},{title:"Type",data:"type",render(t){return Gt[t]}},{title:"Att",data:"stats.attack"},{title:"Def",data:"stats.defense"},{title:"Arm",data:"stats.armor"},{title:"Dam",data:"stats.damage"},{title:"HP",data:"stats.hp"},{title:"Frg",data:"forge",render:rt},{title:"Craft",data:"craft",render:{_(t){return I[t]?I[t].index:0},display:G,filter:G}},{title:"Du%",data:"durability",render:et},{title:"BP",data:C,render:K},{title:"GS",data:C,render:nt},{title:"W/U",data:"type",render:at},{title:"setName",data:"stats.set_name",orderable:!1,visible:!1},{title:"Tag",data:"guild_tag",render(t){return t===-1?"No":"Yes"}},{title:"Drop",data:"type",render:tt},{title:"Send",data:"type",render:ot}];function ct(){return"player_id"in i}function Sr(){return ct()?"fshUserInv":"fshGuildInv"}function Cr(){let t=Xt({className:"hover fshXSmall",id:Sr()});return Pt(m,t),t}function Tr(t){return $(t).DataTable({autoWidth:!1,columnDefs:[{targets:"_all",defaultContent:""},{targets:[1,4,5,6,7,8,9,10,12,13],orderSequence:["desc","asc"]}],columns:Lr,createdRow:Z,data:i.items,deferRender:!0,lengthMenu:[[50,100,150,200,-1],[50,100,150,200,"All"]],pageLength:50,stateDuration:0,stateSave:!0})}function Er(t){t.column(12).visible("current_player_id"in i),t.column(17).visible(ct()&&lt),t.column(18).visible(ct()&&ft)}function mt(){let t=Cr(),e=Tr(t);return Er(e),t}function ut(t){return Ie(t).then(M)}function l(t){jt(`fsh_${s.subcmd}`,t)}function f(){p('table.fshInvFilter input[type="checkbox"]').forEach(t=>{t.checked=n.checkedElements[t.getAttribute("item")]===1}),l(n)}function ht(t){n.checkedElements=Ee,f(),$(t).DataTable().draw(!1)}function Mr(t,e){n.fshMinLvl=t,n.fshMaxLvl=e,l(n)}function Dr(t){$(t).DataTable().draw(!1)}function bt(t){fe(Mr,o(Dr,t))}function Nr(t){return Number(t[0])>=100}function Ar(t,e){return t[e[0]]=e[1],t}function Fr(t){return v(t).filter(Nr).reduce(Ar,{})}function yt(t){n.checkedElements=Fr(n.checkedElements),f(),$(t).DataTable().draw()}function Gr(t){t.closest("tr").find(".takeItem, .recallItem, .wearItem, .dropItem, .sendItem, .storeItem").removeClass()}function Or(t,e){t.eq(e).empty()}function qr(t){[2,12,13,14,15,16].forEach(o(Or,t))}function Ur(t,e){if(e.r===1)return;let r=t.closest("tr"),a=$("td",r);qr(a),r.css("text-decoration","line-through")}function Pr(t){t.empty().append(`<img src="${Dt}ui/misc/spinner.gif" width="11" height="11">`)}function c(t,e){de(e),Gr(e),t().then(o(Ur,e)),Pr(e)}function vt(t){n.checkedElements={},p('table.fshInvFilter input[type="checkbox"][item]:checked').forEach(e=>{n.checkedElements[e.getAttribute("item")]=1}),l(n),$(t).DataTable().draw(!1)}function gt(t){n.checkedElements=u.checkedElements,f(),$(t).DataTable().draw(!1)}function xt(t){n.fshMinLvl=u.fshMinLvl,n.fshMaxLvl=u.fshMaxLvl,l(n),$("#fshMinLvl").val(n.fshMinLvl),$("#fshMaxLvl").val(n.fshMaxLvl),$(t).DataTable().draw(!1)}function kt(t){return A({subcmd2:"dostoreitems",items:t})}function It(t){return E({cmd:"guild",subcmd:"inventory",subcmd2:"dostoreitems",storeIndex:t}).then(ue)}function Rt(t){return g(kt,It,t)}function _t(t){return Rt(t).then(te).then(M)}function Br(t,e){$(t).DataTable().search($(e.target).attr("set")).draw(),$(`#${t.id}_filter input`).trigger("focus")}function Hr(t){let e=$(t.target);c(o(ve,e.attr("invid"),e.attr("action")),e)}function jr(t){let e=$(t.target);c(o(ge,e.attr("invid"),e.attr("playerid"),e.attr("mode"),e.attr("action")),e)}function Qr(t){let e=$(t.target);c(o(Zt,e.attr("invid")),e)}function Vr(t){let e=$(t.target);c(o(ee,e.attr("invid")),e)}function Wr(t){let e=$(t.target);ke([e.data("inv")],e.val())}function Yr(t){let e=$(t.target);c(o(_t,[e.attr("invid")]),e)}function wr(t){let e=$(t.target);c(o(Re,[e.data("inv")]),e)}function Jr(t){let e=$(t.target);c(o(ut,[e.data("inv")]),e)}function Xr(t,e){$(e[0]).on("click",o(e[1],t))}function zr(t){[["#fshReset",xt],["#fshAll",ht],["#fshNone",yt],["#fshDefault",gt]].forEach(o(Xr,t))}function Kr(t,e){$(t).on("click",`span.${e[0]}`,e[1])}function Zr(t){[["setName",o(Br,t)],["takeItem",Hr],["recallItem",jr],["wearItem",Qr],["useItem",Vr],["dropItem",wr],["sendItem",Jr],["storeItem",Yr]].forEach(o(Kr,t))}function tn(t){zr(t),$("table.fshInvFilter").on("click",'input[type="checkbox"]',o(vt,t)),Zr(t)}function $t(t){$("#fshMinLvl, #fshMaxLvl").on("keyup",o(bt,t)),$(t).on("change","select.fshMoveItem",Wr),tn(t)}function Lt(){let t;i.player_id?t=`<b>&nbsp;Inventory Manager</b> ${i.items.length} items (green = worn, blue = backpack)`:t=`<b>&nbsp;Guild Inventory Manager</b> ${i.items.length} items (maroon = in BP, blue=guild store)`,T(Te.replace("@@reportTitle@@",t),m)}function St([t]){return t!=="lastUpdate"}function en(t){let e,r,a,d,R,b,O,Mt;return{c(){e=L("div"),r=L("span"),r.textContent="Recall all visible to:",a=H(),d=L("button"),d.textContent="BP",R=H(),b=L("button"),b.textContent="GS",k(d,"class","custombutton svelte-cmgdqb"),k(d,"type","button"),k(b,"class","custombutton svelte-cmgdqb"),k(b,"type","button"),k(e,"class","svelte-cmgdqb")},m(q,Be){ie(q,e,Be),x(e,r),x(e,a),x(e,d),x(e,R),x(e,b),O||(Mt=[j(d,"click",t[0]),j(b,"click",t[1])],O=!0)},p:D,i:D,o:D,d(q){q&&oe(e),O=!1,re(Mt)}}}var rn='span[action="take"]',nn='span[mode="0"][action="recall"]',on='span[mode="1"][action="recall"]';function an(t){function e(){P("Inventory","Recall All","toBp"),[...p(rn),...p(nn)].forEach(B)}function r(){P("Inventory","Recall All","toGs"),p(on).forEach(B)}return[e,r]}var Ct=class extends se{constructor(e){super(),ae(this,e,an,en,ne,{})}},Ae=Ct;function sn(){return new Ae({target:m})}function Tt(){s.subcmd==="guildinvmgr"&&sn()}function Et(){$("#fshMinLvl").val(n.fshMinLvl),$("#fshMaxLvl").val(n.fshMaxLvl)}var Fe;function dn(t,e){return wt(Fe,Vt(e[1]),n.fshMinLvl,n.fshMaxLvl)}function Ge(){Fe=[t=>t===0].concat(Yt),$.fn.dataTable.ext.search.push(dn)}function Oe(){$.fn.dataTable.ext.search.push((t,e,r,a)=>!n.checkedElements||n.checkedElements[a.type])}function pn(t){return n.checkedElements["-1"]&&t.stats&&t.stats.set_id!==-1}function qe(){$.fn.dataTable.ext.search.push((t,e,r,a)=>!n.checkedElements||!n.checkedElements["-1"]||pn(a))}function Ue(){$.fn.dataTable.ext.search.push((t,e,r,a)=>{let d=(parseInt(a.rarity,10)+100).toString();return!n.checkedElements||n.checkedElements[d]})}var ln=([,t])=>[t.id,t];function fn(){T(`<span id="fshInvMan"><img src = "${Ot}">&nbsp;Getting inventory data...</span>`,m)}function cn(){s.membrList=pe(v(s.membrList).filter(St).map(ln))}function mn(){_e([z,Ge,Oe,qe,Ue,Lt,f,Et])}function un(){mn();let t=mt();$t(t),$("#fshRefresh").on("click",Pe),X(t),Tt()}function hn(){let t=_("betaOptIn");t&&ce("inventory.getInvMan"),un(),t&&me("inventory.getInvMan")}function bn(){qt(3,hn)}function yn(){let t=[Jt(),Ce()];s.subcmd==="guildinvmgr"&&t.push(he(!1).then(cn)),t.push(Ht(`fsh_${s.subcmd}`).then(Ne)),N(t,bn)}function Pe(){Bt()||s.subcmd==="guildinvmgr"&&!Wt()||(fn(),yn())}export{Pe as default};
//# sourceMappingURL=inventory-DCGX6AP5.js.map
