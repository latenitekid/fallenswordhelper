import{a as _}from"./chunk-CK36W236.js";import"./chunk-R5MCQ6ES.js";import{a as Y}from"./chunk-6MWRNEBW.js";import{a as F}from"./chunk-6XTPBN3V.js";import{a as W}from"./chunk-LLB3MQBT.js";import{b as X}from"./chunk-PTLFYCUT.js";import{a as R}from"./chunk-OLG3YVAY.js";import{a as O}from"./chunk-V45SJJZM.js";import"./chunk-SVJ5ICHO.js";import"./chunk-MGGAL4XF.js";import{a as q}from"./chunk-ZZCXMDTU.js";import{a as z}from"./chunk-VDSFVSVH.js";import{a as w}from"./chunk-YLB4ZPHF.js";import{a as H}from"./chunk-ROBH5ILG.js";import{a as j}from"./chunk-HW4Q55YG.js";import{a as I}from"./chunk-R5WOJ7GX.js";import{a as P}from"./chunk-X5TLXNZB.js";import{b as x,c as G}from"./chunk-7KMXJUMJ.js";import"./chunk-N5FTCMRG.js";import"./chunk-V2EESBF7.js";import"./chunk-ASQDDUAJ.js";import"./chunk-B3YXDQZ3.js";import"./chunk-LKWABTD4.js";import"./chunk-TQHISIWN.js";import{a as T}from"./chunk-527SOVYW.js";import{a as i}from"./chunk-NCMEUMLE.js";import"./chunk-G2RN5QP2.js";import{a as D}from"./chunk-RCXM6IKN.js";import{a as s}from"./chunk-M23P7YNW.js";import"./chunk-3RB7HJ6G.js";import{a as U}from"./chunk-45ST4BSH.js";import{a as v}from"./chunk-OTDUXAAH.js";import"./chunk-5TD4FW2O.js";import{a as l}from"./chunk-FH2ZQIVR.js";import"./chunk-ZC2VG7OL.js";import"./chunk-B3Y6PSMQ.js";import"./chunk-YZABUIWG.js";import"./chunk-ELWUFZG5.js";import"./chunk-JGAHWCWU.js";import"./chunk-XXK2POF2.js";import{a as g}from"./chunk-M5ZUFNEH.js";import"./chunk-R7EK2RTK.js";import{a as J}from"./chunk-RUAHQRDU.js";import"./chunk-IZJ2YJYN.js";import{a as u}from"./chunk-HUBAYN2T.js";import"./chunk-O2AVUBO7.js";import"./chunk-QRS6GHYV.js";import"./chunk-QVWND6LG.js";import"./chunk-2NTPEDIZ.js";import"./chunk-QKLZ7AT3.js";import{a as N}from"./chunk-2CZQIOBC.js";import"./chunk-SX3746CW.js";import"./chunk-XA4CEPNM.js";import{a}from"./chunk-WGYE6OHG.js";import"./chunk-K2L7MYHU.js";import"./chunk-76PHM2VZ.js";import"./chunk-NVGKRTGQ.js";import{a as m}from"./chunk-5EWVRUCY.js";import{a as p}from"./chunk-S7D27425.js";import"./chunk-PKOOIOYV.js";import"./chunk-LFT5BCCP.js";import"./chunk-LQ2ARGUI.js";import"./chunk-BR5IQZCO.js";import{a as f}from"./chunk-32IJAGRN.js";import"./chunk-BYHOBLWC.js";import"./chunk-A562UK6S.js";import{a as B}from"./chunk-JDVJBZWD.js";import{b as h}from"./chunk-7JP44NWZ.js";import"./chunk-I57GWZIZ.js";import"./chunk-O2SP7GRB.js";import{S as E,d as M,e as k,n as $,y as C}from"./chunk-LROIQ2AY.js";import{a as c}from"./chunk-DDP3QCAT.js";import{a as S}from"./chunk-RBWWPJJC.js";function K(t,r){let o=j(),e=O({className:"fshBl fshBls",textContent:t});return a(e,n=>{n.target.blur(),P(`${E}&players=${r}`,"fsQuickBuff",618,1e3,",scrollbars"),m("doBuffLinks",t)}),s(o,e),o}function tt(t,r,o){return s(t,K(`Buff ${M[o]} 16`,r.join(","))),t}function b(t){let r=R(16,t),o=z();return r.reduce(tt,o)}var rt=/(?<day>[a-zA-Z]{3}), (?<date>\d{1,2}) (?<month>[a-zA-Z]{3}) (?<hr>\d{1,2}):(?<min>\d{2}):(?<sec>\d{2}) UTC/;function ot(t){let r=new Date().getFullYear();return k[new Date().getMonth()]==="Dec"&&t==="Jan"&&(r+=1),r}function et([,,t,r,o,e]){return new Date(F([ot(r),r,t,o,e]))}function nt(t){let r=t.cells[3],o=S(rt,u(r));i(r,`<br><span class="fshBlue fshXSmall">Local: ${et(o).toString().slice(0,21)}</span>`)}function it(t,r){let o=u(r.children[0]);return t[o]?`${U({last_login:t[o].last_login})}&nbsp;<a href="${C}${t[o].id}"><b>${o}</b></a> [${t[o].level}]`:`<b>${o}</b>`}function Q(t,r){return t[r]?t[r].level:0}function st(t,r,o){return Q(t,o)-Q(t,r)}function ft(t,r){let o=v(r.innerHTML);return o.length>1&&o.sort(f(st,t)),o}function mt(t){return t!=="[none]"&&t.indexOf("<font")===-1}function at(t,r){let o=r.filter(mt);o.length>0&&s(t,b(o)),i(t,`<span class="fshXSmall">Members: ${o.length}</span>`)}function pt(t,r,o){let e=o.map(f(_,t));l(`<span>${e.join(", ")}</span>`,r)}function ut(t,r){let o=r.cells[0];l(it(t,o),o);let e=r.cells[1],n=ft(t,e);at(o,n),pt(t,e,n),nt(r)}function L(t){let r=h("betaOptIn");r&&x("groups.doGroupPaint"),T("group-action-container").map(o=>q(o)).forEach(f(ut,t)),r&&G("groups.doGroupPaint")}function d(t,r){let o=w({className:"custombutton",type:"button",value:r});return i(t,"&nbsp;"),s(t,o),o}function ct(t){return`<div class="fshgrpstat"><div>Attack</div><div>${t[0]}</div><div>Defense</div><div>${t[1]}</div><div>Armor</div><div>${t[2]}</div><div>Damage</div><div>${t[4]}</div><div>HP</div><div>${t[3]}</div></div>`}async function lt(t){let r=t.href.split("=").at(-1),o=await W(r);if(o?.r?.attributes){let e=X(o.r.attributes),n=t.parentNode.parentNode.previousElementSibling;i(n,ct(e))}}function dt(t){m("groups","fetchGroupData");let{target:r}=t;r.disabled=!0,p('#pCC a[href*="=viewstats&"]').forEach(lt)}function A(t){t.classList.add("fshRelative");let r=d(t,"Fetch Group Stats");r.style.position="absolute",a(r,dt)}function ht(t){return!t.includes("#000099")}function gt(t){l('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function vt(t,r){J({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(f(gt,r))}function bt(t){let r=t.parentNode.parentNode.parentNode.cells[1];if(v(u(r)).filter(ht).length<c.maxGroupSizeToJoin){let n=D({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}});t.parentNode.replaceChild(n,t);let Z=B(/confirmJoin\((?<id>\d+)\)/,t.href);vt(Z,n)}}function V(){m("groups","joinAllGroupsUnderSize"),p('#pCC a[href*="confirmJoin"]').forEach(bt)}function Lt(t){let r=d(t,`Join All Groups < ${c.maxGroupSizeToJoin} Members`);a(r,V)}function y(t){let r=t.parentNode;c.enableMaxGroupSizeToJoin&&(I(t),Lt(r)),A(r),c.subcmd2===$&&V()}function At(){let t=h("minGroupLevel");if(t){let r=g('#pCC table[width="650"]');H(g("br",r),`<span class="fshBlue"> Current Min Level Setting: ${t}</span>`)}}function yt(){let t=p("#pCC td.header-dark");t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}function St(){if(N())return;let t=g('#pCC input[value="Join All Available Groups"]');!t||(Y(!1).then(L),At(),y(t),yt())}export{St as default};
//# sourceMappingURL=groups-ZCBZPL7K.js.map