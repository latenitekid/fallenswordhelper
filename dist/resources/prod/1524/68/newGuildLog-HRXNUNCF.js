import{a as Z}from"./chunk-56VRB5NY.js";import{b as X}from"./chunk-QFKQ73IG.js";import"./chunk-MAEQGXE2.js";import{a as K}from"./chunk-PZP2B4RN.js";import"./chunk-VS5BB32R.js";import"./chunk-NCN4BWJJ.js";import{a as Y}from"./chunk-2VMX7FME.js";import{a as w}from"./chunk-EWKZJ7KF.js";import"./chunk-HFI3EAIS.js";import"./chunk-J3XACKSF.js";import"./chunk-YLB2DGTF.js";import{a as J}from"./chunk-JT3BBR4C.js";import{a as L}from"./chunk-DMPKGOU5.js";import"./chunk-MY6I5EU4.js";import"./chunk-JYVZBKII.js";import"./chunk-PLMUKN34.js";import{a as j}from"./chunk-QNQ62I2N.js";import"./chunk-6WQKPU62.js";import{a as h}from"./chunk-LN3GCTG5.js";import"./chunk-B7B6FEDD.js";import"./chunk-D2JB7FXL.js";import{a as u}from"./chunk-6GL7CINS.js";import{a as V}from"./chunk-FKH4345H.js";import"./chunk-KWDLOCMB.js";import{a as Q}from"./chunk-MBVAIUY2.js";import"./chunk-IUL6QJE2.js";import"./chunk-TLDTYBAE.js";import"./chunk-AA3WEUMO.js";import"./chunk-GFTF5DSK.js";import{a as S}from"./chunk-UDXGWZTN.js";import"./chunk-EDHTZZNH.js";import{a as W}from"./chunk-DKRWTGPA.js";import{a as A}from"./chunk-OY6KZ2QA.js";import"./chunk-NTPHAESD.js";import{a as q}from"./chunk-MDOIRABL.js";import{a as z}from"./chunk-TNZZCVPK.js";import"./chunk-2BNSEFB2.js";import"./chunk-3SKGW6OG.js";import{a as F}from"./chunk-Z4KFCZCK.js";import"./chunk-KQSUJNSJ.js";import"./chunk-J7YYTDVE.js";import"./chunk-4WC2EWBK.js";import{a as M}from"./chunk-4MZMNEIX.js";import{a as B}from"./chunk-4E2HVB33.js";import"./chunk-5PMW5STL.js";import{b as y}from"./chunk-4JW3DRCH.js";import{a as f}from"./chunk-D3KONKYS.js";import{a as r}from"./chunk-RC2D6Q5A.js";import"./chunk-527CNM4N.js";import"./chunk-6IX4R32K.js";import{a as n}from"./chunk-UG5BYLND.js";import{a as $,b as U}from"./chunk-C4ZG3YI7.js";import"./chunk-5KMWOBOQ.js";import"./chunk-N3S7NELN.js";import"./chunk-BQVMUFJ3.js";import"./chunk-XANH2KUG.js";import"./chunk-JEWY3LVF.js";import{a as _}from"./chunk-E3DVO4DM.js";import{b as O}from"./chunk-QNTIOO4O.js";import"./chunk-KI4LHW6W.js";import"./chunk-47PUSJEZ.js";import{a as D}from"./chunk-NNH77V6F.js";import"./chunk-MWERZPAU.js";import{G as E}from"./chunk-3GR2FESE.js";import"./chunk-DKU5TE64.js";function a(t){return z({cmd:"guild",subcmd:"log",page:t})}var at=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to","has added tags to","has removed some tags from"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited [,0-9]+ gold into the guild bank/,/deposited [,0-9]+ Fallen Sword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled","has been stripped of their rank by",/has revoked .+'s invite to the guild/],[/resulted in .* with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with the guild","has initiated a conflict with your guild","is participating in the conflict against"],["Titan Reward item","from your guild's contribution to the defeat of the titan","7 day cooldown has been activated on your guild for this titan"]];function dt(t,e){return M(e)?t.includes(e):e.test(t)}function lt(t,e){return e.some(n(dt,t))}function R(t){let e=at.findIndex(n(lt,t));return e===-1?0:e}var tt=`<table id="fshNewGuildLog" class="fshInvFilter"><thead><tr><th colspan="11"><b>Guild Log Version 4</b></th><th colspan="3"><span id="rfsh" class="sendLink">Reset</span> <a href="${E}" class="sendLink">Old Guild Log</a></th></tr></thead><tbody><tr><td rowspan="3"><b>&nbsp;Filters:</b></td><td class="fshRight">&nbsp;Potions:</td><td><input id="fshPotion" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Store/Recalls:</td><td><input id="fshStore" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Relics:</td><td><input id="fshRelic" type="checkbox" item="4"/></td><td class="fshRight">&nbsp;Mercenaries:</td><td><input id="fshMerc" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Group Combats:</td><td><input id="fshGroup" type="checkbox" item="6"/></td><td colspan="3">&nbsp;</td></tr><tr><td class="fshRight">&nbsp;Donations:</td><td><input id="fshDonation" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rankings:</td><td><input id="fshRank" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;GvGs:</td><td><input id="fshGvG" type="checkbox" item="9"/></td><td class="fshRight">&nbsp;Tag/UnTags:</td><td><input id="fshTag" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Titans:</td><td><input id="fshTitan" type="checkbox" item="10"/></td><td class="fshRight">&nbsp;Other:</td><td><input id="fshOther" type="checkbox" item="0"/></td><td>&nbsp;</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="9"></td></tr><tr><td id="fshOutput" class="fshBlue" colspan="14">Loading Page 1 ...</td></tr></tbody></table><table id="fshInjectHere"></table>`,et='<tbody><tr><td class="header" width="16">&nbsp;</td><td class="header" width="20%">Date</td><td class="header" width="80%">Message</td></tr></tbody>',x=[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],ot=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1];var o={},v,m,N,p,P,d,st,i=[],g=!0,l;function ct(t){P=q(t);let e=Q('input[name="page"]',P);e&&(d=Number(e.value),st=Number(/\d+/.exec(F(e.parentNode))[0]),d===1&&(p=Math.min(st,N)),h(`Loading ${d} of ${p}...`,m))}function ft(t,e){return[()=>d===1,()=>o.log,()=>o.log[0],()=>o.log[0][0],()=>t===o.log[0][0],()=>e===o.log[0][2]].every(J)}function ht(t){let e=t[0],s=e.rows.length-1;for(let c=1;c<s;c+=2){let C=e.rows[c],H=S(C.cells[1]),I=K(H),k=C.cells[2].innerHTML;if(ft(I,k)){g=!1;break}i.push([d*100+c,I,H,k,R(k)])}}function ut(){let t=D("width_full",P);t.length===1&&ht(t)}function nt(t){ct(t),ut()}function pt(t){i.push([0].concat(t))}function mt(){let t=[];if(g)for(let e=2;e<=p;e+=1)t.push(a(e).then(nt));else o.log.forEach(pt);return W(t)}function b(){U("fsh_guildLog",o)}function gt(t,e){return e[1]!==t}function bt(t){return t.slice(1,5)}function kt(){o.log=i.filter(n(gt,new Date().setSeconds(0,0))).map(bt),b()}function T(t,e){let s=t.insertCell(-1);f(e,s),s.className="row"}function yt(t){let e=l.insertRow(-1);t.push(e),o.checks[t[4]]||(e.className="fshHide"),T(e,'<i class="fas fa-user-friends" style="color: rgb(122,95,46);"></i>'),T(e,`<nobr>${t[2]}</nobr>`),T(e,t[3])}function wt(t){let e=l.insertRow(-1);t.push(e),o.checks[t[4]]||(e.className="fshHide");let s=e.insertCell(-1);s.className="divider",s.colSpan=3}function Lt(t){yt(t),wt(t)}function Rt(){l=Y({id:"fshInjectHere",className:"width_full"}),j(l,et),i.forEach(Lt);let t=r("fshInjectHere");y.replaceChild(l,t),X("myGuildLog",1,3),Z()}function xt(t){t.checked=o.checks[t.getAttribute("item")]}function G(){A("input",v).forEach(xt),b()}function Tt(t,e){return t[0]-e[0]}function Nt(){g&&i.sort(Tt),h("Loading complete.",m),kt(),Rt()}function rt(t){nt(t),mt().then(Nt)}function Pt(t,e,s){s[4]===t&&(w(s[5],e),w(s[6],e))}function vt(t){let e=Number(t.getAttribute("item"));o.checks[e]=!o.checks[e],b(),i.forEach(n(Pt,e,!o.checks[e]))}function it(t){t&&t.classList&&t.classList.remove("fshHide")}function Gt(t){it(t[5]),it(t[6])}function Ct(){o.checks=x.slice(0),G(),i.forEach(Gt)}function Ht(t){L(t[5]),L(t[6])}function It(){o.checks=ot.slice(0),G(),i.forEach(Ht)}function Et(){o.log=!1,b(),h("Loading Page 1 ...",m),i=[],g=!0,f("",r("fshInjectHere")),a(1).then(rt)}function Ot(){return V([[t=>t.tagName==="INPUT",vt],[u("fshAll"),Ct],[u("fshNone"),It],[u("rfsh"),Et]])}function jt(t){o=t||o,o.checks=o.checks||x.slice(0)}function At(){v=r("fshNewGuildLog"),m=r("fshOutput")}function Ft(){N=Number(O("newGuildLogHistoryPages")),p=N}function Mt(t){jt(t),f(tt,y),At(),_(v,Ot()),G(),Ft(),a(1).then(rt)}function St(){B()||$("fsh_guildLog").then(Mt)}export{St as default};
//# sourceMappingURL=newGuildLog-HRXNUNCF.js.map