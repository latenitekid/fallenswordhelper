import{a as y}from"./chunk-DZCMW4ZQ.js";import{a as R}from"./chunk-VZAMX3YQ.js";import{a as P,b as q}from"./chunk-5VG4VRJC.js";import"./chunk-LOOX6NWI.js";import{a as _}from"./chunk-WNCASZV6.js";import{a as D}from"./chunk-2PZ6NPNU.js";import"./chunk-ST4JXVVD.js";import{c as I}from"./chunk-TZI6S2SN.js";import"./chunk-HBO6UWTT.js";import"./chunk-ORCYAFNM.js";import"./chunk-MA6BRZWF.js";import{b as V,c as Q}from"./chunk-MWAFIUKN.js";import"./chunk-6G3FIPXD.js";import"./chunk-G7OP24LL.js";import{a as $}from"./chunk-U4LVETBA.js";import{a as w}from"./chunk-YYATCEH3.js";import{a as j}from"./chunk-VVGRHNQC.js";import{a as C}from"./chunk-MULMSX6F.js";import{a as x}from"./chunk-YY6M7RTY.js";import"./chunk-GCBZB6Q7.js";import{a as k}from"./chunk-KARVP4IF.js";import{a as F}from"./chunk-EQ6XPZXK.js";import{a as f}from"./chunk-R5KKAUNY.js";import{a as M}from"./chunk-EWAJ3PLB.js";import"./chunk-XIQH4POZ.js";import{a as g}from"./chunk-BUIH7NDX.js";import"./chunk-JZUIGPQK.js";import"./chunk-E7LHQKU5.js";import{a as b}from"./chunk-ACUTGVKN.js";import"./chunk-HMF5HIMF.js";import{a as m}from"./chunk-YZHOKVTG.js";import"./chunk-GQNKRIQK.js";import{a as N}from"./chunk-KETFGQQM.js";import"./chunk-7PZO5YGA.js";import"./chunk-IXP25ZKY.js";import{a as s}from"./chunk-GRW7NX42.js";import{a as O}from"./chunk-6RYYSQKY.js";import{a as h}from"./chunk-OMKWEQGC.js";import"./chunk-NRM2IEBO.js";import"./chunk-B3EO4UAT.js";import"./chunk-IGSHOHVE.js";import{a as W}from"./chunk-FE2N6NBD.js";import"./chunk-DNX7LBBK.js";import"./chunk-QAXNXWWI.js";import"./chunk-KHAKP3NJ.js";import"./chunk-LJXKCPK7.js";import"./chunk-CDQY3GPS.js";import"./chunk-E66CENYR.js";import"./chunk-7XYKFTOV.js";import"./chunk-EDPHPGYE.js";import{a}from"./chunk-BRACYM44.js";import"./chunk-HSGQLATB.js";import{a as c}from"./chunk-ABHYZHAG.js";import"./chunk-JYV3Y4PK.js";import{a as r}from"./chunk-VYOJRJTP.js";import"./chunk-IZEIZGGY.js";import"./chunk-H4RRBTG7.js";import{a as H}from"./chunk-D4RSYPIY.js";import{a as u}from"./chunk-4LICJMIC.js";import"./chunk-VLEL2DAI.js";import"./chunk-SQ3ABL2K.js";import{a as T,b as d}from"./chunk-MIGTOE2L.js";import{a as L}from"./chunk-UYUWQQUH.js";import"./chunk-FMIILUE6.js";import{sa as p}from"./chunk-XSTNX5IW.js";import"./chunk-UVCMQZY6.js";import{a as l}from"./chunk-NGIDL4MJ.js";var S;function G(){let e=r("item-div");if(!e){e=h({id:"item-div",className:"itemDiv"});let t=r("item-list"),n=b(p,t);for(;n.length;)n[0].classList.add("fshBlock"),O(e,n[0]);f(e,t)}return e}function K(e,t,n){return e&&N(t,n)}function X(e,t,n){return!e&&!t&&!n}function Y(e,t){t.children[0].lastElementChild.children[0].children[0].checked=!1;let n=s("fshHide",t),o=e==="folderid0",i=s(e,t);K(n,o,i)&&(t.classList.remove("fshHide"),t.classList.add("fshBlock")),X(n,o,i)&&(t.classList.remove("fshBlock"),j(t))}function Z(e){c("trade","doHideFolder"),g(p,G()).forEach(l(Y,e.target.id))}function ee(e){e.target.nodeName==="SPAN"&&e.target.id.indexOf("folderid")!==-1&&Z(e)}function te(e){return` &ensp;<span id="folderid${e[0]}" class="fshLink fshNoWrap" fid=${e[0]}>${e[1]}</span> `}function ne(e){let t=y({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${H(e).map(te).join("")}`});a(t,ee);let n=r("item-list").parentNode.parentNode;M(n,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),f(t,n)}function oe(e,t){t.is_in_st&&e.classList.add("isInST")}function re(e){let t=e.children[0].lastElementChild.children[0];if(!t)return;let n=t.children[0];if(!n)return;let o=S[n.getAttribute("value")];o&&(e.classList.add(`folderid${o.folder_id}`),S.fshHasST&&oe(e,o),n.classList.add(`itemid${o.item_id}`),n.classList.add(`itemtype${o.type}`))}function se(e){let t=d("betaOptIn");t&&V("trade.processTrade"),S=e.items,g(p,r("item-list")).forEach(re),ne(e.folders),t&&Q("trade.processTrade")}function ie(e){m(3,se,[e])}function E(){x()||_().then(ie)}function B(e,t){return W(P,q,e,t)}var me=e=>D(e).previousElementSibling.children[0].children[0].children[0],ce=e=>me(e).remove();function ae(e,t,n){n.s?(ce(e),e.classList.remove("fshSpinner")):e.replaceWith(t)}async function le(e,t){let n=await e;if(n.s){let o=h({className:"fshSpinner fshSpinner12 fshRelative",style:{height:"16px"}}),[i]=t;i.replaceWith(o);let A=await B(t[1],t[2]);return ae(o,i,A),A}return n}function de(e){e.s?I("Items sent successfully!"):I(e.e.message)}var fe=()=>u('[name="sendItemList[]"]:checked'),pe=()=>k('form[name="sendItemForm"] [name="target_username"]').value,ue=e=>fe().map(t=>[t,e,[t.value]]),he=e=>e.reduce(le,Promise.resolve({s:1}));async function ye(e,t){c("trade","oneByOne");let n=$({className:"fshSpinner fshRelative",style:{marginLeft:"40px"}}),o=e.target;o.replaceWith(n);let i=await he(t);de(i),n.replaceWith(o)}function ge(e){let t=ue(pe());t.length&&ye(e,t)}function v(){let e=k('form[name="sendItemForm"] input[value="Send"]'),t=w({className:"fshBl",id:"oneByOneBtn",textContent:"OneByOne",type:"button"});R(t,e),a(t,ge)}function ke(e){let t=parseInt(r("fshSendHowMany").value,10);return F(t)?e.length:L.subcmd!=="-"?Math.min(100,t):t}function Ie(e,t){return e==="itemid-2"&&s("itemtype12",t)}function Se(e,t){return e==="itemid-1"||Ie(e,t)||s(e,t)}function Ee(){let e=r("itemsInSt");if(e)return e.checked}function Be(e,t){return e||!s("isInST",t)}function J(e){return e.children[0].lastElementChild.children[0].children[0]}function U(e,t){t.checked=e}function ve(e){U(!1,e)}function Ae(e){U(!0,e)}function Le(e,t){t.filter(l(Be,Ee())).map(J).filter(l(Se,e)).slice(0,ke(t)).forEach(Ae)}function Te(e){c("trade","doCheckAll");let t=r("item-div")||r("item-list"),n=u("table:not(.fshHide)",t);n.map(J).forEach(ve),Le(e.target.id,n)}function Ce(e){s("fshCheckAll",e.target)&&Te(e)}function z(e){return C(`[${e}]`)}function Ne(){let e=d("sendClasses"),t=z(e);return t||z(T.sendClasses)}function be(e){return` &ensp;<span id="itemid${e[1]}" class="fshCheckAll fshLink fshNoWrap">${e[0]}</span>`}function He(e){let t=y({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>${Ne().map(be).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput fshHowMany" value="all"></td>`});a(t,Ce),f(t,e.parentNode.parentNode)}function Fe(){let e=r("item-list");!e||(m(3,E),m(3,He,[e]),d("betaOptIn")&&m(3,v))}export{Fe as default};
//# sourceMappingURL=trade-U6AMREOQ.js.map
