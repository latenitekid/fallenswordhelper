import{a as J,b as N}from"./chunk-FQJPNVOR.js";import"./chunk-FEU64ZQ2.js";import"./chunk-4CAJ6TUH.js";import"./chunk-NRAKDJRG.js";import{a as k}from"./chunk-ACUGHZPW.js";import{a as w}from"./chunk-NGYEAITL.js";import"./chunk-MDMWLKGO.js";import"./chunk-VTC4RGJB.js";import{a as $}from"./chunk-MHVLEWCN.js";import"./chunk-UHSNDG4Z.js";import"./chunk-BFE24JGB.js";import{a as D}from"./chunk-7OHOGPP4.js";import"./chunk-635HH3IV.js";import{b as E,c as U}from"./chunk-4EKJKLL4.js";import"./chunk-NKNTHEMN.js";import"./chunk-NKN6GVHJ.js";import{a as T}from"./chunk-7HDLZ5CV.js";import{a as o}from"./chunk-MN34DQ5N.js";import"./chunk-AAKGI7XG.js";import{a as x}from"./chunk-2LTPNSL3.js";import{a as m}from"./chunk-PG36KHEO.js";import"./chunk-43UR6VCT.js";import{b as B}from"./chunk-OSNUR4UW.js";import{a as h}from"./chunk-2WIDRV4Q.js";import{a as A}from"./chunk-BXQIUVYR.js";import{a as s}from"./chunk-OQUOAWQT.js";import"./chunk-RW5VOW7B.js";import"./chunk-Y7DXFUGC.js";import"./chunk-X7MAXGKX.js";import"./chunk-XENISPSP.js";import"./chunk-4NEU57T5.js";import"./chunk-GL73P6T3.js";import"./chunk-QFHM7M2T.js";import{a as v}from"./chunk-5M2GNHT7.js";import"./chunk-TBKVCP3G.js";import"./chunk-266NJ6OG.js";import"./chunk-MG2N7BBA.js";import{a as p}from"./chunk-4SKJEDIT.js";import"./chunk-OY4YNTS2.js";import{a as M}from"./chunk-EJUHK5AM.js";import{a as u}from"./chunk-IREX4RC5.js";import"./chunk-PZSZ5776.js";import"./chunk-FWZ3N5X6.js";import"./chunk-ZF2KHET3.js";import{a as n}from"./chunk-RTNCMQDY.js";import"./chunk-VJAFAHL3.js";import"./chunk-EFKWKRQ4.js";import"./chunk-4NPHSO6J.js";import"./chunk-6EFRAPOS.js";import"./chunk-W2IKWP7C.js";import"./chunk-BGXI65HS.js";import{a as y}from"./chunk-LQM4MUXP.js";import{a as d}from"./chunk-2HQGE3TS.js";import{b as c}from"./chunk-4Z3DF3VU.js";import"./chunk-32RSWJFF.js";import"./chunk-QKRGEODM.js";import"./chunk-UB3BGUW4.js";import"./chunk-SUDOEZJL.js";import{e as g,l as G,x as b}from"./chunk-CRFRZPAJ.js";import{a as f}from"./chunk-F3362XCG.js";var I=/([a-zA-Z]{3}), (\d{1,2}) ([a-zA-Z]{3}) (\d{1,2}):(\d{2}):(\d{2}) UTC/;function P(t){let r=new Date().getFullYear();return g[new Date().getMonth()]==="Dec"&&t==="Jan"&&(r+=1),r}function q(t){let r=new Date;return r.setUTCDate(t[2]),r.setUTCMonth(g.indexOf(t[3])),r.setUTCFullYear(P(t[3])),r.setUTCHours(t[4]),r.setUTCMinutes(t[5]),r}function F(t){let r=t.cells[3],e=I.exec(p(r));o(r,`<br><span class="fshBlue fshXSmall">Local: ${q(e).toString().substr(0,21)}</span>`)}function O(t,r){let e=p(r.children[0]);return t[e]?`${B({last_login:t[e].last_login})}&nbsp;<a href="${b}${t[e].id}"><b>${e}</b></a> [${t[e].level}]`:`<b>${e}</b>`}function H(t,r){return t[r]?t[r].level:0}function W(t,r,e){return H(t,e)-H(t,r)}function Y(t,r){return t[r]?`<a href="${b}${t[r].id}">${r}</a>`:r}function j(t,r){let e=h(r.innerHTML);return e.length>1&&e.sort(n(W,t)),e}function X(t){return t!=="[none]"&&t.indexOf("<font")===-1}function _(t,r){let e=r.filter(X);e.length>0&&m(t,J(e)),o(t,`<span class="fshXSmall">Members: ${e.length}</span>`)}function V(t,r,e){let i=e.map(n(Y,t));u(`<span>${i.join(", ")}</span>`,r)}function Z(t,r){let e=r.cells[0];u(O(t,e),e);let i=r.cells[1],a=j(t,i);_(e,a),V(t,i,a),F(r)}function S(t){let r=c("betaOptIn");r&&E("groups.doGroupPaint"),y("group-action-container").map(e=>w(e)).forEach(n(Z,t)),r&&U("groups.doGroupPaint")}function l(t,r){let e=$({className:"custombutton",type:"button",value:r});return o(t,"&nbsp;"),m(t,e),e}function Q(t,r){let e=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${r.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${r.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${r.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${r.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${r.hp}</td><td colspan="2"></td></tr></table>`,i=t.parentNode.parentNode.previousElementSibling;o(i,e)}function K(t){N(t.href).then(n(Q,t))}function tt(t){t.target.disabled=!0,s('#pCC a[href*="=viewstats&"]').forEach(K)}function L(t){let r=l(t,"Fetch Group Stats");d(r,tt)}function rt(t){return!t.includes("#000099")}function et(t){u('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function ot(t,r){v({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(n(et,r))}function nt(t){let r=t.parentNode.parentNode.parentNode.cells[1];if(h(p(r)).filter(rt).length<f.maxGroupSizeToJoin){let a=x({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}});t.parentNode.replaceChild(a,t);let R=/confirmJoin\((\d+)\)/.exec(t.href)[1];ot(R,a)}}function z(){T("groups","joinAllGroupsUnderSize"),s('#pCC a[href*="confirmJoin"]').forEach(nt)}function it(t){let r=l(t,`Join All Groups < ${f.maxGroupSizeToJoin} Members`);d(r,z)}function C(t){let r=t.parentNode;f.enableMaxGroupSizeToJoin&&(D(t),it(r)),L(r),f.subcmd2===G&&z()}function st(){let t=c("minGroupLevel");t&&o(A("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}function at(){let t=s("#pCC td.header-dark");t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}function ft(){if(M())return;let t=A('#pCC input[value="Join All Available Groups"]');!t||(k(!1).then(S),st(),C(t),at())}export{ft as default};
//# sourceMappingURL=groups-RNLQD2EN.js.map
