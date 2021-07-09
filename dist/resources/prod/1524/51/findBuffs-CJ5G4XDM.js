import{a as d}from"./chunk-FIJTOABK.js";import{a as I}from"./chunk-O3H6YZJF.js";import{c as Z}from"./chunk-XEMBPQZS.js";import{a as E}from"./chunk-NHXMBUTR.js";import{a as X}from"./chunk-D7QZUQTE.js";import{b as _}from"./chunk-2MSFZ3SC.js";import{a as Y}from"./chunk-KWIXRSMY.js";import{c as K}from"./chunk-ORMKR3OV.js";import"./chunk-FS3TKOQM.js";import"./chunk-L4E4NT4L.js";import"./chunk-6MUFX5NS.js";import{a as W}from"./chunk-WHAZT5VY.js";import"./chunk-UWKUUDVQ.js";import"./chunk-WDK5KJW5.js";import{a as z}from"./chunk-VYP6BYDA.js";import{a as U}from"./chunk-6VZYKCGK.js";import{a as T}from"./chunk-D6BL5IS3.js";import"./chunk-NIO7Y7L5.js";import"./chunk-VXT65ZUM.js";import{b as v}from"./chunk-MHANGBVH.js";import{a as G}from"./chunk-57PZ6XJI.js";import{a as Q}from"./chunk-IRFQ4Q6M.js";import"./chunk-FXN5JGBL.js";import"./chunk-AN443625.js";import"./chunk-UICWONBW.js";import{a as L}from"./chunk-UWAT3VA7.js";import"./chunk-22YAZV3W.js";import"./chunk-ND3XCMOS.js";import{a as c}from"./chunk-WPRJK6Q2.js";import{a as J}from"./chunk-PJ32ASZ7.js";import"./chunk-F5QOVYT2.js";import"./chunk-QFSH2B2J.js";import"./chunk-2PFHY365.js";import{a as C}from"./chunk-GGKSIQST.js";import"./chunk-JSWEJZHY.js";import{a}from"./chunk-4OJTKSB2.js";import{a as A}from"./chunk-G3O526VI.js";import"./chunk-GHQYBWLT.js";import"./chunk-PKDG64MH.js";import{a as n}from"./chunk-2B42SRXB.js";import"./chunk-3IGXKFMQ.js";import{a as B}from"./chunk-GLHEJYH7.js";import"./chunk-EPYDL6MF.js";import{a as q}from"./chunk-TDNJGM62.js";import{a as i}from"./chunk-TP7JP7VV.js";import{b as h}from"./chunk-HAINOYE5.js";import{a as x}from"./chunk-AN5TC666.js";import"./chunk-B7PLPUHK.js";import{Da as O,N as H,e as F,u as R}from"./chunk-YNXRNCRL.js";import"./chunk-7DPOBF7C.js";import{a as f}from"./chunk-DEDCEYVR.js";function S(){return J({cmd:"guild",subcmd:"manage"})}function ge(e){return`<tr><td rowspan="2" colspan="2" class="headCell"><h1>Find ${e.header}</h1></td><td class="findLabel">Select ${e.what} to search for:</td><td>${e.control()}</td></tr>`}function ye(e){return`<tr><td class="findLabel">Level ${e.cutoff}ers only:</td><td><input id="level175" type="checkbox"></td></tr>`}function Pe(e){return`<tr><td class="leftLabel">${e.searched}:&nbsp;</td><td id="buffNicks">&nbsp;</td><td class="findLabel">Search guild members:</td><td><input id="guildMembers" type="checkbox" checked></td></tr>`}function xe(){return K("Search Allies/Enemies","The checkbox enables searching your own personal allies/enemies list for buffs.<br><br>Additional profiles to search can be added in the text field to the right, separated by commas.")}function ve(e,t){return`<tr><td class="findLabel"># potential ${e.potential}ers to search:&nbsp;</td><td id="potentialBuffers"></td><td class="findLabel">Search allies/enemies:${xe()}</td><td><input id="alliesEnemies" type="checkbox" checked><input class="extraProfile" class="custominput" id="extraProfile" type="text" title="Extra profiles to search" value="${t||""}"></td></tr>`}function Le(e){return`<tr><td class="findLabel"># ${e.processed}ers processed:&nbsp;</td><td id="buffersProcessed">0</td><td class="findLabel">Search online list:</td><td><select class="selectOnline" id="onlinePlayers"><option value="0">Disabled</option><option value="49">Short (fastest)</option><option value="47">Medium (medium)</option><option value="45">Long (slowest)</option></select></td></tr>`}function $e(e){return`<tr><td class="findLabel">Find ${e.progress} progress:&nbsp;</td><td class="buffProg" id="bufferProgress">Idle</td><td align="center"><input id="clearresultsbutton" class="custombutton" type="button" value="Clear Results"></td><td align="center"><input id="findbuffsbutton" class="custombutton" type="button" value="Find Buffers"></td></tr>`}function Be(e){return`<br><h1>Potential ${e.processed}ers and Bio Info</h1><br><table class="fshResult" id="buffTable"><tbody><tr><th class="nameCol">&nbsp;Name</th><th class="infoCol">&nbsp;Player Info</th><th>&nbsp;Notable Bio Text</th></tr></tbody></table><br>`}function Ae(){return'<div class="disclaim">Disclaimer: This functionality does a simple text search for the terms above. It is not as smart as you are, so please do not judge the results too harshly. It does not search all online players, just a subset of those that have been on recently. The aim is to be fast and still return a good set of results. This feature is a work in progress, so it may be tweaked and enhanced over time.</div>'}function g(e,t){return`<table class="fshFind"><tbody>${ge(e)}${ye(e)}${Pe(e)}${ve(e,t)}${Le(e)}${$e(e)}</tbody></table>${Be(e)}${Ae()}`}var w;function k(){w=n("bufferProgress")}function l(e,t){a(e,w),t&&(w.style.color=t)}var Te=/Level<br>(\d+)%/;function Ce(e,t){let r=new RegExp(`^.*\\b(?:(?:${t.replace(/,/g,")|(?:")}))\\b.*$`,"gim");return[...e.matchAll(r)].map(o=>o[0])}function Ee(e){let t=G("a",n("profileLeftColumn",e)).find(Q("Sustain"));if(t){let r=t.parentNode.parentNode.parentNode.nextElementSibling.children[0].dataset.tipped;return parseInt(Te.exec(r)[1],10)||-1}return 0}function Ie(e){return i(L("h1",n("pCC",e))[0])}function Se(e){return Y(i(n("profileLeftColumn",e).children[4].children[0].rows[0].cells[1]))}function we(e){return parseInt(i(n(O,e)),10)}function ke(e,t,r,o){let s=Ie(e),j=Se(e),p=we(e),de=parseInt(r[1],10),me=_({min:de}),be=t.href,he=o.replace(/'|"|\n/g,"");return`<nobr>${me}&nbsp;<a href="${be}" target="new" class="tip-static" data-tipped="${he}">${s}</a>&nbsp;<span class="fshBlue">[<span class="a-reply fshLink" target_player="${s}">m</span>]</span></nobr><br><span class="fshGrey">Level:&nbsp;</span>${j}&nbsp;(${p})`}function Ne(e){window.openQuickMsgDialog(e.target.getAttribute("target_player"))}function Me(e){let t=e.newRow.insertCell(0);t.style.verticalAlign="top",a(ke(e.doc,e.callback,e.lastActivity,e.bioCellHtml),t),$(".a-reply").on("click",Ne)}function De(e,t,r){let o="fshRed";t>=100&&(o="fshGreen");let s='<span class="fshRed">No</span>';return r&&(s='<span class="fshGreen">Yes</span>'),`<table><tbody><tr><td colspan="2" class="resAct">Last Activity:</td><td colspan="2"><nobr>${e[0]}</nobr></td></tr><tr><td class="resLbl">Sustain:</td><td class="resVal ${o}">${t}%</td><td class="resLbl">Extend:</td><td class="resVal">${s}</td></tr>`}function Ve(e,t,r,o){let s=e.insertCell(1);a(De(t,r,o),s),s.style.verticalAlign="top"}function je(e,t){e.innerHTML+=`${t}<br>`}function Fe(e,t){let r=e.insertCell(2);t.forEach(f(je,r))}function Re(){let e=n("buffersProcessed"),t=parseInt(i(n("potentialBuffers")),10),r=parseInt(i(e),10);a(r+1,e),t===r+1&&l("Done.","blue")}function He(e){let t=n("pCC",e),r=L("p",t)[0];return/(\d+) mins, (\d+) secs/.exec(i(r))}function Oe(e){return z('img.tip-static[data-tipped*="Extend"]',e)}function qe(e,t,r,o){let s=He(r),p=n("buffTable").insertRow(-1);Me({newRow:p,doc:r,callback:t,lastActivity:s,bioCellHtml:e}),Ve(p,s,Ee(r),Oe(r)),Fe(p,o)}function N(e,t){let r=c(e),o=n("profile-bio",r).innerHTML,s=Ce(o,t.findBuffNicks);s.length>0&&qe(o,t,r,s),Re()}function Ge(e){return`<option value="${e.id}">${e.name}</option>`}var ee={header:"Buff",what:"buff",control(){return`<select style="width:140px;" id="selectedBuff">${d.map(Ge).join("")}</select>`},cutoff:"175 buff",searched:"Nicknames of buff searched",potential:"buff",processed:"Buff",progress:"buffers"},te={header:"Other",what:"text",control(){return`<input style="width:140px;" class="custominput" id="textToSearchFor" type="text" title="Text to search for" value="${h("textToSearchFor")||""}">`},cutoff:"500+ play",searched:"Text searched for",potential:"play",processed:"Play",progress:"Other"};var re;function M(){return re?500:1}function ne(){re=n("level175").checked}var y,P,m,D,u,b,V;function Qe(e,t){N(t,{href:e,findBuffNicks:y})}function Ue(e){C(e).then(f(Qe,e))}function oe(){if(a(m.length,n("potentialBuffers")),m.length<=0){l("Done.","blue");return}l("Parsing player data ...","green"),m.forEach(Ue)}function _e(e,t){return e===1?Math.round(D*t/50):e+1}function se(e,t){U()!==t.trim()&&m.push(e)}function Ye(e){return parseInt($(e).find("td:eq(2)").text().replace(/,/g,""),10)}function ze(e){return e>=P&&e>=M()}function Je(e,t){if(ze(Ye(t))){let r=$(t).find("td:eq(1) a").attr("href"),o=$(t).find("td:eq(1) a").text();se(r,o)}}function Ke(e){return parseInt($(e).find('td:has(input[name="page"]):last').text().replace(/\D/g,""),10)}function We(e){return parseInt($(e).find('input[name="page"]:last').val().replace(/\D/g,""),10)}function Xe(e){$(e).find('table:contains("Username")>tbody>tr:has(td>a[href*="cmd=profile&player_id="])').each(Je)}function Ze(e,t,r){let o=_e(e,t);l(`Parsing online page ${e} ...`),I(o).then(r)}function ae(e){let t=c(e),r=We(t);r!==1&&Xe(t);let o=Ke(t);r<o?Ze(r,o,ae):oe()}function ie(){D=parseInt(n("onlinePlayers").value,10),D!==0?I(1).then(ae):oe()}function et(e){let t=F.exec(e),r=parseInt(t[1],10),o=parseInt(t[2],10)+r*24;return parseInt(t[3],10)+o*60}function tt(e,t,r){return e<5&&t>=P&&t>=r}function le(e){let{tipped:t}=e.dataset,r=et(t),o=Number(/VL:.+?(\d+)/.exec(t)[1]),s=M();tt(r,o,s)&&se(e.href,i(e))}function rt(e){let t=c(e);B('#profileLeftColumn a[data-tipped*="Last Activity"]',t).forEach(le),V+=1,V===b.length&&ie()}function nt(e){b.push(H+e)}function ot(e){C(e).then(rt)}function st(){b=[],b.push(R),X(u).forEach(nt),V=0,n("alliesEnemies").checked?b.forEach(ot):ie()}function at(e){let t=c(e);n("guildMembers").checked&&B('#pCC a[data-tipped*="<td>VL:</td>"]',t).forEach(le),st()}function it(e,t){return t!==0}function lt(e){e.deleteRow(-1)}function ft(){let e=n("buffTable");q(e.rows).filter(it).forEach(f(lt,e)),a("",n("buffNicks")),l("Idle.","black"),a("",n("potentialBuffers")),a("0",n("buffersProcessed"))}function fe(e){W()||(a(y,n("buffNicks")),l(`Gathering list of ${e} ...`,"green"),ne(),a("0",n("buffersProcessed")),m=[],u=n("extraProfile").value,T("extraProfile",u),S().then(at))}function ct(e,t){return e===t.id}function ut(){let e=parseInt($("#selectedBuff").val(),10),t=d.find(f(ct,e));y=t.nicks,P=t.lvl,fe("potential buffers")}function pt(){let e=$("#textToSearchFor").val().replace(/\s*,\s*/,",");T("textToSearchFor",e),y=e,P=1,fe("profiles to search")}function ce(){u=h("extraProfile")}function ue(e){A(n("findbuffsbutton"),e,!0)}function pe(){A(n("clearresultsbutton"),ft,!0)}function pr(e){let t=e||v;x.sortBy="name",x.sortAsc=!0,d.sort(Z),ce(),a(g(ee,u),t),k(),ue(ut),pe(),E("ui-dialog-titlebar-close").forEach(r=>r.blur())}function dr(e){let t=e||v;ce(),a(g(te,u),t),k(),ue(pt),pe(),E("ui-dialog-titlebar-close").forEach(r=>r.blur())}export{u as extraProfile,pr as injectFindBuffs,dr as injectFindOther};
//# sourceMappingURL=findBuffs-CJ5G4XDM.js.map
