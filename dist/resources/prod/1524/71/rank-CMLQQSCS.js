import{a as T,b as P}from"./chunk-FZJIYGRO.js";import{a as A}from"./chunk-F3AEPCO2.js";import{a as I}from"./chunk-OB2IKLUM.js";import{a as S}from"./chunk-BWLJUEWY.js";import{b as v}from"./chunk-B47YSCOI.js";import"./chunk-PWHAP6DH.js";import"./chunk-GWROP3QY.js";import"./chunk-NGYEAITL.js";import"./chunk-MDMWLKGO.js";import{a as E}from"./chunk-MHVLEWCN.js";import"./chunk-TEFQRDVZ.js";import"./chunk-T43Y7FHE.js";import{a as p}from"./chunk-7HDLZ5CV.js";import{a as j}from"./chunk-475CXNSP.js";import{a as s}from"./chunk-MN34DQ5N.js";import{a as D}from"./chunk-I7FBV2LF.js";import{a as y}from"./chunk-ATJNJQBM.js";import"./chunk-4LDTGQHK.js";import"./chunk-FT2ROHKC.js";import"./chunk-AAKGI7XG.js";import{a as w}from"./chunk-PG36KHEO.js";import"./chunk-43UR6VCT.js";import"./chunk-FMY2V6OJ.js";import"./chunk-G7IDAW3T.js";import{a as N}from"./chunk-6AUWFHZX.js";import{a as C}from"./chunk-BXQIUVYR.js";import"./chunk-OQUOAWQT.js";import"./chunk-RW5VOW7B.js";import"./chunk-VEYMWARW.js";import"./chunk-Y7DXFUGC.js";import"./chunk-JB6CDHW5.js";import"./chunk-X7MAXGKX.js";import"./chunk-4NEU57T5.js";import"./chunk-GL73P6T3.js";import"./chunk-QFHM7M2T.js";import{a as b}from"./chunk-5M2GNHT7.js";import"./chunk-TBKVCP3G.js";import"./chunk-266NJ6OG.js";import"./chunk-MG2N7BBA.js";import{a as f}from"./chunk-4SKJEDIT.js";import"./chunk-OY4YNTS2.js";import"./chunk-EZC2U63P.js";import{a as R}from"./chunk-EJUHK5AM.js";import{a as B}from"./chunk-MBQCOMSJ.js";import{b as m}from"./chunk-M4Q7DLXY.js";import"./chunk-PZSZ5776.js";import"./chunk-EXS6ZFSM.js";import"./chunk-FWZ3N5X6.js";import"./chunk-ZF2KHET3.js";import{a}from"./chunk-RTNCMQDY.js";import"./chunk-EFKWKRQ4.js";import"./chunk-4NPHSO6J.js";import"./chunk-6EFRAPOS.js";import"./chunk-W2IKWP7C.js";import"./chunk-BGXI65HS.js";import{a as c}from"./chunk-2HQGE3TS.js";import{b as k}from"./chunk-4Z3DF3VU.js";import"./chunk-32RSWJFF.js";import"./chunk-QKRGEODM.js";import{a as x}from"./chunk-SUDOEZJL.js";import"./chunk-CRFRZPAJ.js";import"./chunk-F3362XCG.js";var H=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],V=(t,[,o])=>t+o-1,_=t=>H.filter(([o])=>A(t,o)).reduce(V,0),L=t=>t>>>0,M=t=>L(t).toString(2),q=t=>M(t).split("").map(Number).reduce(I,0),F=t=>v(_(t)+q(t),1);function G(t,o){let[r]=o.children,i=f(r.firstChild),n=t.find(e=>e&&e.name===i);n&&D(r,`<span class="fshBlue">(${F(n.permissions)}) Tax:(${n.tax||0}%)</span> `)}function O(t,o){p("ranks","fetchRankData"),t.forEach(a(G,o))}function Q(t,o,r){let i=E({className:"custombutton",type:"button",value:"Get Rank Weightings"});c(i,a(O,t,o));let n=r.parentNode.parentNode;s(n,"&nbsp;"),w(n,i)}function u(t,o){let r=C('#pCC a[href*="=ranks&subcmd2=add"]');r&&Q(t,o,r)}function d(t,o){return b({cmd:"guild",subcmd:"ranks",subcmd2:t,rank_id:o}).then(()=>({s:!0}))}function l(t,o){return T({subcmd2:t,rank_id:o})}function h(t,o){return y(l,d,t,o)}var g,Z=t=>["Up","Down"].includes(t.target.value);function z(t,o){return g>=Math.min(t.rowIndex,o)||o<1||o>t.parentNode.rows.length}function J(t){return t==="Up"?-1:2}function K(t){return t==="Up"?-22:22}function X(t,o,r){let i=t.target.getAttribute("onclick").match(/rank_id=(\d+)/);h(B(t.target.value),i[1]);let n=o.parentNode.rows[r];j(o,n);let e=K(t.target.value);window.scrollBy(0,e),t.stopPropagation()}function Y(t){p("ranks","overrideUpDown");let o=t.target.parentNode.parentNode.parentNode,r=o.rowIndex+J(t.target.value);z(o,r)||X(t,o,r)}function tt(t){Z(t)&&Y(t)}function U(){g&&k("ajaxifyRankControls")&&c(m,tt,!0)}function W(t,o){o.includes(N())&&(g=t.rowIndex)}function ot(){let t=m.lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows;if(t)return x(t)}function rt(t,o){let r=o.children[0],i=f(r),n=t.find(e=>e.name===i);if(n?.members.length){let e=n.members.map($=>$.name);W(o,e),s(r,` <span class="fshBlue">- ${e.join(", ")}</span>`)}}function nt(t){let o=ot();o&&(S([5,3,o,1,a(rt,t)]),u(o,t),U())}async function et(){if(R())return;let t=await P();t?.s&&nt(t.r)}export{et as default};
//# sourceMappingURL=rank-CMLQQSCS.js.map
