import{a as te,b as me}from"./chunk-RMFKV4JX.js";import{a as zt}from"./chunk-GFOMYG7S.js";import"./chunk-GSED6NFY.js";import{a as oe}from"./chunk-TOP5YOWC.js";import{a as x}from"./chunk-F3UWCNLS.js";import{a as Jt,b as F,c as Wt,d as O,e as Yt,f as Zt,g as Kt}from"./chunk-ZMXQCVJR.js";import"./chunk-GF4VDVSU.js";import{a as Pt,b as Mt,c as It,d as Rt}from"./chunk-SVGX64XQ.js";import{a as Qt}from"./chunk-RTYNGUCO.js";import{a as qt}from"./chunk-IO33TKJV.js";import{a as _t}from"./chunk-PT6KTS5G.js";import{a as Ft}from"./chunk-EEGGELNC.js";import{a as I}from"./chunk-RJ4OYB6J.js";import{a as Ut,b as Xt}from"./chunk-6AYIUHMJ.js";import{a as wt}from"./chunk-FZXCCOBK.js";import{a as xt,b as At}from"./chunk-4FBR2ZA6.js";import"./chunk-5PSVLKKL.js";import"./chunk-EYR5TKC4.js";import{a as Bt}from"./chunk-M5P7JG7C.js";import"./chunk-VXPED75B.js";import{f as R}from"./chunk-TQZYBVWE.js";import"./chunk-EITWCZQH.js";import{a as Nt}from"./chunk-MSO7GJCL.js";import{a as jt}from"./chunk-PPWSFVIU.js";import{a as _}from"./chunk-U4LVETBA.js";import{a as ee}from"./chunk-YYATCEH3.js";import{a as ne}from"./chunk-VVGRHNQC.js";import{a as $t}from"./chunk-5IONE3UD.js";import"./chunk-DBUR5TNY.js";import{a as Dt}from"./chunk-DZUNDM2W.js";import{a as gt}from"./chunk-3MLJXOC6.js";import{a as q}from"./chunk-IRQPUWCD.js";import{a as Tt}from"./chunk-MULMSX6F.js";import{a as Ot}from"./chunk-2ON4JKLP.js";import"./chunk-PRVNUO5J.js";import{a as re}from"./chunk-YY6M7RTY.js";import"./chunk-GCBZB6Q7.js";import"./chunk-EVK5QPY3.js";import{a as vt}from"./chunk-52BHRAB5.js";import"./chunk-5QL3EWJR.js";import{a as p}from"./chunk-KARVP4IF.js";import"./chunk-EQ6XPZXK.js";import{a as Lt}from"./chunk-2AYZ6V4F.js";import"./chunk-7ET2CA5W.js";import{a as M}from"./chunk-ZQ6Q7AAO.js";import"./chunk-XBQPITPX.js";import{b as a}from"./chunk-GD4HMFZG.js";import{a as Ht}from"./chunk-VKB6QGTB.js";import"./chunk-2YS6YDGB.js";import"./chunk-R5KKAUNY.js";import{a as X}from"./chunk-U4IOE7YJ.js";import{a as k}from"./chunk-BUIH7NDX.js";import{a as D}from"./chunk-HXMNMQML.js";import"./chunk-TLQQXMWC.js";import"./chunk-AVPY2BTL.js";import{a as Et}from"./chunk-2FGL6JOK.js";import"./chunk-GJHRXFGS.js";import{a as c}from"./chunk-JZUIGPQK.js";import"./chunk-E7LHQKU5.js";import{a as y}from"./chunk-ACUTGVKN.js";import{a as i}from"./chunk-YZHOKVTG.js";import"./chunk-GQNKRIQK.js";import"./chunk-KETFGQQM.js";import"./chunk-7PZO5YGA.js";import"./chunk-IXP25ZKY.js";import"./chunk-GRW7NX42.js";import{a as r}from"./chunk-6RYYSQKY.js";import{a as m}from"./chunk-OMKWEQGC.js";import{a as Ct}from"./chunk-NRM2IEBO.js";import{a as Q}from"./chunk-LYEL4NZU.js";import{a as Vt}from"./chunk-KHAKP3NJ.js";import{a as Gt}from"./chunk-LJXKCPK7.js";import"./chunk-CDQY3GPS.js";import"./chunk-E66CENYR.js";import"./chunk-7XYKFTOV.js";import{a as U}from"./chunk-EDPHPGYE.js";import{a as f}from"./chunk-6UGBR7LD.js";import{a as T}from"./chunk-BRACYM44.js";import{a as u}from"./chunk-HSGQLATB.js";import{a as L}from"./chunk-ABHYZHAG.js";import"./chunk-JYV3Y4PK.js";import"./chunk-VYOJRJTP.js";import"./chunk-IZEIZGGY.js";import"./chunk-H4RRBTG7.js";import"./chunk-D4RSYPIY.js";import{a as P}from"./chunk-4LICJMIC.js";import{a as St}from"./chunk-VLEL2DAI.js";import"./chunk-SQ3ABL2K.js";import"./chunk-S2PPJ2GD.js";import{b as l}from"./chunk-MIGTOE2L.js";import{a as S}from"./chunk-UYUWQQUH.js";import{a as kt}from"./chunk-FMIILUE6.js";import{D as H,H as bt,Ka as yt,e as A,qa as C,sa as b,v as ht}from"./chunk-XSTNX5IW.js";import"./chunk-UVCMQZY6.js";import{a as s}from"./chunk-NGIDL4MJ.js";var ie=0,ce=1;function xe(t,e){let o=A.exec(e.dataset.tipped);return Bt({min:o[3],hour:o[2],day:o[1]})<44640&&(t[ie]+=1,t[ce]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function Be(t){return t.reduce(xe,[0,0])}function z(){let t=k("b",a).find(D("Members"));if(t){let e=xt(),o=Be(e);t.classList.add("tip-static"),wt(`Active: ${o[ie]}/${e.length}<br>Stamina: ${I(o[ce])}`,t)}}function ae(t,e){let o,n=t.replace(/,/g,"").match(e);return n?o=parseInt(n[1],10):o=0,o}function we(t,e){let o="";return t>e&&(o="+"),o+I(t-e)}function Ne(t){let e=t.dataset.tipped,o=ae(e,/XP Lock: <b>(\d*)/),n=ae(e,/XP: <b>(\d*)/);c(t.parentNode.nextElementSibling,` (<b>${we(n,o)}</b>)`)}function J(){let t=p('#pCC a[data-tipped^="<b>Guild XP</b>"]');t&&Ne(t)}function W(){let t=k(b,a).slice(-2,-1)[0].rows[0].cells[0],e=m({id:"profile-bio",innerHTML:t.innerHTML});f("",t),r(t,e),Ht()}var Y,Z;function Ae(t){return Y&&t>=Pt()&&t<=Mt()}function He(t){return Z&&t>=It()&&t<=Rt()}var De=t=>[t,A.exec(t.dataset.tipped)[1]],Pe=([,t])=>t<7,Me=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Ie=([t,e])=>[t.parentNode.parentNode.rowIndex,Ae(e),He(e)];function Re(){return P('#pCC a[data-tipped*="<td>VL:</td>"]').map(De).filter(Pe).map(Me).map(Ie)}function $e(){return Number(vt("guild_id"))!==Dt()&&(Y||Z)}var se=t=>t.map(([e])=>`.fshHighlight tr:nth-child(${e+1})`).join(",");function Ge(t){if(t.length){let e=`${se(t)} {background-color: #4671C8;}`;r(document.body,x(e))}}function Ve(t){if(t.length){let e=`${se(t)} {background-color: #FF9900;}`;r(document.body,x(e))}}function je(t,e){if(t.length+e.length){let o=y(b,a);o[o.length-1].classList.add("fshHighlight")}}function qe(){let t=Re(),e=t.filter(([,n])=>n),o=t.filter(([,n,E])=>!n&&E);Ge(e),Ve(o),je(e,o)}function Ue(){$e()&&qe()}function K(){Y=l("highlightPlayersNearMyLvl"),Z=l("highlightGvGPlayersNearMyLvl"),Ue(),l("enableHistoryCompressor")&&W()}function Xe(t){c(t.parentNode,' <span class="smallLink">[b]</span>')}function Fe(t){t.target.className==="smallLink"&&$t(t.target.previousElementSibling.text)}function tt(){let t=St(`#pCC a[href^="${ht}"]`);Nt([5,3,t,0,Xe]),T(a,Fe)}function $(t){return Gt({cmd:"guild",subcmd:"conflicts",page:t})}function le(t,e){f(e,t.insertCell(-1))}function fe(t,e,o){let n=t.insertRow(t.rows.length-2);le(n,e),le(n,o)}function Oe(t){fe(t,`<a href="${H}conflicts">Active Conflicts</a>`,"Score")}function Qe(t,e){fe(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function _e(t,e,o){e===1&&Oe(o),jt(t.rows,7,0).forEach(s(Qe,o))}function ze(t,e,o){let n=p("#pCC > table > tbody > tr > td > table",t);n&&n.rows.length>3&&_e(n,e,o)}function Je(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}function We(t,e,o){$(t+1).then(s(e,o))}function pe(t,e){let o=Vt(e),n=p('#pCC input[name="page"]',o);if(!n)return;let E=Number(n.value),Le=Je(n);ze(o,E,t.node),Le>E&&We(E,pe,t)}function et(t){let e=t.rows[6].cells[0].children[0];e&&$(1).then(s(pe,{node:e}))}function Ye(t){t.target.id===C&&M(C,!l(C))}function ot(){let t=p("#pCC img.guild_openGuildStore");if(!t)return;let e=t.parentNode,o=m({className:"fsh-tracker"}),n=m({innerHTML:`${R(C)}&nbsp;<label class="custombutton" for="tracker">Show</label>`});u(n,"change",Ye),r(o,t),r(o,n),Ft(e,o)}function rt(t){return Ct("th",t)}var nt,G,B,mt,V;function Ze(t,e){return`${t}<option value="${e}">${e}</option>`}function Ke(t){return`<select name="member"><option value="- All -" selected>- All -</option>${U(t).sort(Ot).reduce(Ze,"")}</select>`}function w(t){return kt(t)?"#DEF":t.toLocaleString()}function to(t){return G&&G!=="- All -"&&G!==t}function eo(t,e,o){return`${e}<tr><td>${zt(new Date(o[Yt]*1e3))}</td><td>${t}</td><td class="fshRight">${w(o[Wt])}</td><td class="fshRight">${w(o[Zt])}</td><td class="fshRight">${w(o[F])}</td><td class="fshRight">${w(o[O])}</td><td class="fshRight">${Math.floor(o[F]/o[O]*100)}</td><td class="fshRight">${o[Jt]}</td><td class="fshRight">${w(o[Kt])}</td></tr>`}function oo(t,e){return to(e)?t:t+V[e].reduce(s(eo,e),"")}function ro(){return U(V).reduce(oo,"")}function no(){V&&f(ro(),nt),B.classList.remove("fshSpinner")}function ue(){B.classList.add("fshSpinner"),i(3,no)}function mo(t){G=t.target.value,ue()}function j(t){t&&(V=t,f(Ke(t),mt),ue())}function io(){let t=rt({textContent:"Member"});return mt=m(),r(t,mt),t}function co(t){let e=t.createTHead().insertRow(-1);c(e,"<th>Date</th>");let o=io();r(e,o),c(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}function ao(t){nt=Qt(),r(t,nt)}function de(){let t=_t({id:"tg"});return co(t),ao(t),u(t,"change",mo),B=m({className:"tgCont fshSpinner64"}),r(B,t),B}var d,ge,he,g;function so(t){d.value=t,g.classList.remove("fshSpinner")}function be(t){t&&(g.classList.add("fshSpinner"),i(4,so,[t]))}function lo(){d.value='{"lastUpdate": 0, "members": {}}'}function fo(t){Q("Update successful"),j(t.members)}function po(){let t=Tt(d.value);Xt("fsh_guildActivity",t).then(s(fo,t)).catch(Q)}function ye(t,e){let o=ee({className:"custombutton",textContent:t});return T(o,e),o}function uo(){d=oe(),d.setAttribute("autocapitalize","off"),d.setAttribute("autocomplete","off"),d.setAttribute("autocorrect","off"),d.setAttribute("spellcheck","false")}function ke(){return g=m({id:"io",className:"fshSpinner64"}),uo(),ge=ye("Save",po),he=ye("Reset",lo),r(g,d),r(g,te()),r(g,ge),r(g,he),g}var it,h,N,ct;function Te(){return!h.checked}function go(){return h.checked}function ho(){h.checked=!1}function bo(t){go()&&t.code==="Escape"&&ho()}function yo(t){Te()&&(t.style.transform=null)}function ko(){return qt({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})}function To(){L("guildTracker","updateRawData"),it&&be(it)}function vo(){let t=m({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'});return ct=X({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),q(ct,"change",To),r(t,ct),t}function Eo(){let t=vo(),e=ko();return r(t,e),gt(e,t),t}function So(){let t=m({className:"fsh-dialog-content"});return r(t,de()),r(t,ke()),t}function Co(){let t=Eo(),e=So();r(t,e),u(h,"change",s(yo,t)),r(N,t)}function Lo(){c(N,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>')}function xo(t){t&&(it=JSON.stringify(t),j(t.members))}function Bo(){L("guildTracker","openDialog"),Ut("fsh_guildActivity").then(xo),S.dialogIsClosed=Te,Lo(),Co()}function wo(){h=X({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),q(h,"change",Bo),N=m({className:"fsh-dialog"}),r(N,h),u(document.body,"keydown",bo),r(document.body,N)}function at(){ot(),wo()}var st="enableStamBars",v,lt;function No(t){let e=t.dataset.tipped.match(/Stamina:<\/td><td>(\d{1,12}) \/ (\d{1,12})<\/td>/);return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}function Ao(t){let e=No(t);return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function Ho(){let t=y(b,a),e=t[t.length-1];e.classList.add("fshProgressBar");let n=P(yt,e).map(Ao).join(`
`);lt=r(document.body,x(n)).sheet}function ve(){lt?lt.disabled=!v:Ho()}function Do(){v=!v,M(st,v),ve(),L("guildManage","StamBars")}function Po(){let t=p("#pCC img.guild_openGuildStore");if(!t)return;let e=t.parentNode,o=r(e,m({className:"fshCenter",innerHTML:R(st)}));u(o,"change",Do)}function ft(){Po(),v=l(st),v&&ve()}function Mo(t){return _({className:"fshLink",dataset:{linkto:t,tooltip:"Toggle Section"},textContent:"X"})}function Io(t){let e=_({className:"fshNoWrap",innerHTML:"[&nbsp;"});return r(e,t),c(e,"&nbsp;]"),e}function pt(t,e,o){let n=Mo(o);r(t,Io(n)),e.id=o,l(o)&&ne(e),T(n,me)}function Ee(t){pt(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Se(t){let e=t.rows[4].cells[1].children[0];f(Et(e.innerHTML),e),pt(e,t.rows[6].cells[0].children[0],"statisticsControl")}function Ce(t){pt(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function Ro(t){let e=k("b",t).filter(D("Relics"));if(e.length!==1)return;let o=e[0].parentNode.nextElementSibling.children[0];f(`[ <a href="${H}reliclist">Control</a> ]&nbsp;`,o)}function $o(t){let e=y("li",t);if(!e||!e.length)return;let o=e[e.length-1].parentNode;c(o,`<li><a href="${bt}${Lt()}" data-tooltip="Self Recall">Self Recall</a></li>`)}function Go(){return a.lastElementChild.rows[2].cells[0].children[0]}function Vo(t,e){i(3,e,[t])}function jo(t){[Ee,Se,Ce,Ro,$o].forEach(s(Vo,t))}function qo(t){re()||(l("detailedConflictInfo")&&i(3,et,[t]),i(4,at))}function ut(){if(!a)return;let t=Go();jo(t),i(3,tt),qo(t),ft()}function Uo(t){let e=t.nextElementSibling.nextElementSibling;e&&e.classList.add("fshBreakAll")}function dt(){let t=p('#pCC img[src*="/guilds/"][width="200"]');!t||(t.removeAttribute("style"),Uo(t))}function Xo(){i(3,At),i(3,dt),i(3,J),i(3,z),S.subcmd==="manage"&&ut(),S.subcmd==="view"&&K()}export{Xo as default};
//# sourceMappingURL=injectGuild-M6LK2HWR.js.map
