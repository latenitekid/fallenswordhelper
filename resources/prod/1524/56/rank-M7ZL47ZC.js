import{a as O}from"./chunk-THGDJ7U7.js";import{a as Q}from"./chunk-PRQAWY2G.js";import{a as G}from"./chunk-ZKXUHWYN.js";import{a as W}from"./chunk-KDNNF3DU.js";import{a as M}from"./chunk-IU6UWEI6.js";import{a as H}from"./chunk-LHCGWOGH.js";import{a as $}from"./chunk-CVACGNW6.js";import"./chunk-5FYKNJHI.js";import{a as U}from"./chunk-4MCB2GON.js";import{a as F}from"./chunk-GYLYSP4O.js";import"./chunk-G7OP24LL.js";import{b as v}from"./chunk-K6OJVQ6T.js";import"./chunk-6AYIUHMJ.js";import{a as _}from"./chunk-MSO7GJCL.js";import{a as I}from"./chunk-U4LVETBA.js";import"./chunk-DZUNDM2W.js";import"./chunk-PRVNUO5J.js";import{a as q}from"./chunk-YY6M7RTY.js";import"./chunk-GCBZB6Q7.js";import{a}from"./chunk-KARVP4IF.js";import"./chunk-EQ6XPZXK.js";import{a as j}from"./chunk-2AYZ6V4F.js";import{a as D}from"./chunk-7ET2CA5W.js";import{b as f}from"./chunk-GD4HMFZG.js";import{a as V}from"./chunk-R5KKAUNY.js";import{a as P}from"./chunk-U4IOE7YJ.js";import"./chunk-BUIH7NDX.js";import{a as u}from"./chunk-JZUIGPQK.js";import"./chunk-E7LHQKU5.js";import"./chunk-ACUTGVKN.js";import"./chunk-HMF5HIMF.js";import"./chunk-YZHOKVTG.js";import"./chunk-GQNKRIQK.js";import"./chunk-KETFGQQM.js";import"./chunk-7PZO5YGA.js";import"./chunk-IXP25ZKY.js";import{a as T}from"./chunk-6RYYSQKY.js";import"./chunk-NRM2IEBO.js";import{a as d}from"./chunk-FE2N6NBD.js";import"./chunk-DNX7LBBK.js";import{a as L}from"./chunk-QAXNXWWI.js";import{a as h}from"./chunk-KHAKP3NJ.js";import{a as i}from"./chunk-LJXKCPK7.js";import"./chunk-CDQY3GPS.js";import"./chunk-E66CENYR.js";import"./chunk-7XYKFTOV.js";import"./chunk-EDPHPGYE.js";import{a as l}from"./chunk-BRACYM44.js";import"./chunk-HSGQLATB.js";import"./chunk-JYV3Y4PK.js";import"./chunk-VYOJRJTP.js";import"./chunk-IZEIZGGY.js";import"./chunk-H4RRBTG7.js";import{a as E}from"./chunk-D4RSYPIY.js";import{a as k}from"./chunk-4LICJMIC.js";import"./chunk-VLEL2DAI.js";import{a as S}from"./chunk-SQ3ABL2K.js";import{a as p}from"./chunk-S2PPJ2GD.js";import{b as C}from"./chunk-MIGTOE2L.js";import"./chunk-UYUWQQUH.js";import"./chunk-FMIILUE6.js";import"./chunk-XSTNX5IW.js";import"./chunk-UVCMQZY6.js";import{a as m}from"./chunk-NGIDL4MJ.js";function x(t){return Object.values(t)}function s(t){return M(L({subcmd:"ranks"},t))}var K=t=>i({cmd:"guild",subcmd:"ranks",subcmd2:"add",rank_id:t}),X=t=>K(t.getAttribute("onclick").match(/[=](\d+)/)[1]),Y=t=>k('input[name^="permission"]:checked',t).reduce((r,n)=>r+2**Number(n.name.match(/\[(\d+)\]/)[1]),0);function Z(t){return{id:Number(a('input[name="rank_id"]',t).value),name:a('input[name="rank_name"]',t).value,permissions:Y(t),tax:Number(a('input[name="rank_tax"]',t).value)}}function tt(t){let n=t.map(h).map(Z);return{r:{0:n[0],ranks:n.slice(1)},s:!0}}function rt(t){let r=h(t),n=k('input[value="Edit"]',r);return H(n.map(X),tt)}function g(){return i({cmd:"guild",subcmd:"ranks"}).then(rt)}function w(){return d(s,g)}function b(t,r){return t+r}var nt=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]];function ot(t){return v(nt.filter(([r])=>Q(t,r)).reduce((r,[,n])=>r+n-1,0)+t.toString(2).split("").map(Number).reduce(b,0),1)}function et(t,r){let n=r.children[0],o=p(n.firstChild),e=t.find(c=>c&&c.name===o);e&&U(n,`<span class="fshBlue">(${ot(e.permissions)}) Tax:(${e.tax}%)</span> `)}function mt(t,r,n){n.s&&(t.forEach(m(et,[n.r["0"]].concat(n.r.ranks))),r.classList.remove("fshSpinner"))}function at(t,r){let n=I({className:"fshBlock fshRelative fshSpinner fshSpinner12",style:{height:"15px",width:"136px"}});G(n,r),w().then(m(mt,t,n))}function it(t,r){let n=P({className:"custombutton",type:"button",value:"Get Rank Weightings"});l(n,m(at,t,n));let o=r.parentNode.parentNode;u(o,"&nbsp;"),T(o,n)}function R(t){let r=a('#pCC a[href*="=ranks&subcmd2=add"]');r&&it(t,r)}function y(t,r){return i({cmd:"guild",subcmd:"ranks",subcmd2:t,rank_id:r}).then(()=>({s:!0}))}function N(t,r){return s({subcmd2:t,rank_id:r})}function A(t,r){return d(N,y,t,r)}var B;function st(t,r){return B>=Math.min(t.rowIndex,r)||r<1||r>t.parentNode.rows.length}function ct(t){return t==="Up"?-1:2}function ut(t){return t==="Up"?-22:22}function ft(t,r,n){let o=t.target.getAttribute("onclick").match(/rank_id=(\d+)/);A(D(t.target.value),o[1]);let e=r.parentNode.rows[n];V(r,e);let c=ut(t.target.value);window.scrollBy(0,c),t.stopPropagation()}function pt(t){let r=t.target.parentNode.parentNode.parentNode,n=r.rowIndex+ct(t.target.value);st(r,n)||ft(t,r,n)}function lt(t){return["Up","Down"].includes(t.target.value)}function dt(t){lt(t)&&pt(t)}function z(){B&&C("ajaxifyRankControls")&&l(f,dt,!0)}function J(t,r){r&&r[1].includes(j())&&(B=t.rowIndex)}function kt(){let t=f.lastElementChild.previousElementSibling;if(t.rows&&t.rows.length>7)return S(t.rows[7].children[0].children[0].rows)}function ht(t,r){return r[0]===t}function xt(t){return t&&t[1].length>0}function gt(t,r){return t.rowIndex===1?"Guild Founder":p(r)}function wt(t,r){let n=r.children[0],o=gt(r,n),e=t.find(m(ht,o));xt(e)&&(J(r,e),u(n,` <span class="fshBlue">- ${e[1].join(", ")}</span>`))}function bt(t){let r=kt();r&&(_([5,3,r,1,m(wt,t)]),R(r),z())}function Rt(t){let r=x(F(E(t).filter(O)));return $(r.map(n=>n.rank_name)).map(n=>[n,r.filter(o=>o.rank_name===n).map(o=>o.username)])}function yt(){q()||W(!1).then(Rt).then(bt)}export{yt as default};
//# sourceMappingURL=rank-M7ZL47ZC.js.map
