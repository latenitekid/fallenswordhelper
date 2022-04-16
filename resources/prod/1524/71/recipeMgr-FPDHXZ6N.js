import{a as U}from"./chunk-Z4EHE745.js";import{a as Q}from"./chunk-RXGMCJHK.js";import{a as x}from"./chunk-MEYFNMXB.js";import{a}from"./chunk-MN34DQ5N.js";import"./chunk-AAKGI7XG.js";import{a as E}from"./chunk-2LTPNSL3.js";import{a as S}from"./chunk-PG36KHEO.js";import"./chunk-43UR6VCT.js";import"./chunk-2WIDRV4Q.js";import{a as v}from"./chunk-OQUOAWQT.js";import"./chunk-RW5VOW7B.js";import"./chunk-Y7DXFUGC.js";import{a as u}from"./chunk-R3B76YET.js";import{a as y}from"./chunk-4NEU57T5.js";import"./chunk-GL73P6T3.js";import{a as p}from"./chunk-QFHM7M2T.js";import{a as q}from"./chunk-5M2GNHT7.js";import"./chunk-266NJ6OG.js";import{a as d}from"./chunk-MG2N7BBA.js";import{a as f}from"./chunk-4SKJEDIT.js";import"./chunk-OY4YNTS2.js";import{a as j}from"./chunk-EJUHK5AM.js";import{a as O}from"./chunk-VFXL75HB.js";import{c as M}from"./chunk-O6MRDYZT.js";import"./chunk-XFTUWSEW.js";import"./chunk-MBQCOMSJ.js";import{b as k}from"./chunk-M4Q7DLXY.js";import{a as g}from"./chunk-IREX4RC5.js";import{a as b}from"./chunk-PZSZ5776.js";import"./chunk-EXS6ZFSM.js";import"./chunk-FWZ3N5X6.js";import"./chunk-ZF2KHET3.js";import{a as i}from"./chunk-RTNCMQDY.js";import{a as D,b as $}from"./chunk-VJAFAHL3.js";import"./chunk-EFKWKRQ4.js";import"./chunk-4NPHSO6J.js";import"./chunk-6EFRAPOS.js";import"./chunk-W2IKWP7C.js";import"./chunk-BGXI65HS.js";import{a as w}from"./chunk-LQM4MUXP.js";import{a as H}from"./chunk-2HQGE3TS.js";import{b as C}from"./chunk-4Z3DF3VU.js";import"./chunk-32RSWJFF.js";import"./chunk-QKRGEODM.js";import{a as _}from"./chunk-UB3BGUW4.js";import"./chunk-SUDOEZJL.js";import"./chunk-CRFRZPAJ.js";import"./chunk-F3362XCG.js";var I,L=[];function V(t){return`<div class="rmItem"><img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.id}&inv_id=-1&t=2&p=${I}&vcode=${t.verify}" src="${t.img}" height="20px" width="20px"><p>${t.amountPresent}/${t.amountNeeded}</p></div>`}function G(t){return t.items?t.items.map(V).join(""):""}function J(t){return`<div class="rmItem"><img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.id}&inv_id=-1&t=2&p=${I}&vcode=${t.verify}" src="${t.img}" height="20px" width="20px"><p>${t.amountPresent}/${t.amountNeeded}</p></div>`}function K(t){return t.components?t.components.map(J).join(""):""}function W(t){return t.target?` <img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.target.id}&inv_id=-1&t=2&p=${I}&vcode=${t.target.verify}" src="${t.target.img}" height="30px" width="30px"><br/>`:""}function X(t){return!L.includes(t.name)}function Y(t){return`<tr class="rmTr"><td class="rmTd"><a href="${t.link}"><img src="${t.img}" height="30px" width="30px"></a></td><td class="rmTd"><a href="${t.link}">${t.name}</a></td><td class="rmTd">${G(t)}</td><td class="rmTd">${K(t)}</td><td class="rmTd">${W(t)}</td></tr>`}function Z(t,e){I=Q();let r='<table width="100%"><tr class="rmTh"><th>Recipe</th><th><span id="sortName" class="fshLink" sortkey="name">Name</span></th><th>Items</th><th>Components</th><th>Target</th></tr>';r+=e.recipe.filter(X).map(Y).join(""),r+="</table>",g(r,t),$("fsh_recipeBook",e)}function l(t,e){e&&(C("hideRecipes")&&(L=U("hideRecipeNames")),Z(t,e))}function h(t){return v('#pCC img[src*="/folder"]',t)}var tt=/fetchitem.php\?item_id=(\d+)&inv_id=-1&t=2&p=(\d+)&vcode=([a-z0-9]+)/i;function et(t){return y("td",b("pCC",t))}function rt(t,e){let r=e.getAttribute("background");return r&&r.includes(t)}function ot(t){return t.dataset.tipped.match(tt)}function it(t,e){return{img:t.getAttribute("src"),id:e[1],verify:e[3]}}function nt(t,e){if(e){let r=f(e).split("/");t.amountPresent=parseInt(r[0],10),t.amountNeeded=parseInt(r[1],10)}}function mt(t){let e=t.children[0].children[0],r=ot(e),o=it(e,r);return nt(o,t.parentNode.nextElementSibling),o}function P(t,e){return t.filter(i(rt,e)).map(mt)}function R(t,e,r,o){let m=p(o);a(t,`Parsing blueprint ${r.name}...<br>`);let c=et(m);r.items=P(c,"/inventory/2x3."),r.components=P(c,"/inventory/1x1mini."),[r.target]=P(c,"/hellforge/2x3."),e.recipe.push(r)}function st(t){return v('#pCC a[href*="=viewrecipe&"]',t)}function at(t){return{img:t.parentNode.previousElementSibling.children[0].getAttribute("src"),link:t.href,name:f(t),id:x(t.search,"recipe_id")}}function pt(t,e,r){a(t,`Found blueprint "${f(r)}".<br>`);let o=at(r);return d(r.href).then(i(R,t,e,o))}function A(t,e,r){let o=p(r),m=st(o).map(i(pt,t,e));return u(m)}function ft(t){return/\/folder_on\./.test(t.getAttribute("src"))}function ct(t){return h(t).find(ft).parentNode.href}function dt(t,e){return e!==0}function ut(t){return t.value}function lt(t){return y("option",_("customselect",b("pCC",t))[0]).filter(dt).map(ut)}function gt(t,e,r){return d(`${t}&page=${r}`).then(e)}function ht(t,e,r){return lt(t).map(i(gt,e,r))}function N(t,e,r){let o=p(r),m=ct(o),c=i(A,t,e),B=ht(o,m,c);return B.push(c(r)),u(B)}function bt(t){return x(t.parentNode.search,"folder_id")!=="-1"}function xt(t,e){let r=f(e.parentNode.parentNode.nextElementSibling),o=/quest/i.test(r);return o&&a(t,`Skipping folder "${r}"  as it has the word "quest" in folder name.<br>`),!o}function yt(t,e){return d(e.parentNode.href).then(t)}function vt(t,e,r){let o=p(e);return h(o).filter(bt).filter(i(xt,t)).map(i(yt,r))}function F(t,e,r){let o=i(N,t,e),m=vt(t,r,o);return m.push(o(r)),u(m)}var n,s;function $t(){a(s,"Finished parsing ... formatting ..."),$("fsh_recipeBook",n),l(s,n)}function T(){n={},n.recipe=[],g("<br>Parsing inventing screen ...<br>",s),q({cmd:"inventing"}).then(i(F,s,n)).then($t)}function z(t,e){n=e,g('<table class="fshInvFilter"><thead><tr><th width="90%"><b>&nbsp;Recipe Manager</b></th><th width="10%" class="fshBtnBox">[<span id="rfsh" class="fshLink">Refresh</span>]</th></tr></thead></table>',t),s=E(),S(t,s),n?l(s,n):T()}function It(t){O(t.target),n.recipe.sort(M),l(s,n)}function Pt(t){t.target.id==="rfsh"&&T(),t.target.id==="sortName"&&It(t)}function Rt(t){if(j())return;let e=t||k;D("fsh_recipeBook").then(i(z,e)),H(e,Pt),w("ui-dialog-titlebar-close").forEach(r=>r.blur())}export{Rt as default};
//# sourceMappingURL=recipeMgr-FPDHXZ6N.js.map
