import{a as k}from"./chunk-GA3UTCE6.js";import"./chunk-ZADLNAUM.js";import{a as x}from"./chunk-ONHZNTGL.js";import{a as I}from"./chunk-GVGQ2EBN.js";import{a as S}from"./chunk-7WUKWOKP.js";import{a as B}from"./chunk-2W33ZJXK.js";import{a as C}from"./chunk-525RTZTH.js";import"./chunk-RQF33MH3.js";import{a as O}from"./chunk-QWESRETT.js";import"./chunk-UHRCPRA2.js";import"./chunk-H6ROHLJQ.js";import{a as N}from"./chunk-K32J6RS5.js";import{a as d}from"./chunk-DJH7MW43.js";import"./chunk-W5RHDDBD.js";import"./chunk-NRF5E4NM.js";import"./chunk-EERRLM6T.js";import{b as P}from"./chunk-4K5TAJW5.js";import{a as y}from"./chunk-SVOLGRZA.js";import"./chunk-AMLNDKL6.js";import{a as n}from"./chunk-VSJWDJAE.js";import"./chunk-N35L4X3I.js";import{a as w,b as L}from"./chunk-PD5PUUZS.js";import"./chunk-PV6TS7PA.js";import"./chunk-I4XIXMAY.js";import{a as T}from"./chunk-BYVXHJ5E.js";import{a as E}from"./chunk-G3X3JRPI.js";import"./chunk-5SB6JHBH.js";import"./chunk-P32LYIQC.js";import{a as h}from"./chunk-3A25HTZJ.js";import{b as u}from"./chunk-QICZDMHT.js";import"./chunk-LGGDA375.js";import"./chunk-YLV5UIKA.js";import"./chunk-SRR4B7GE.js";import"./chunk-RZ3TV2NA.js";import"./chunk-QCFSLNAO.js";import"./chunk-MXS7SZ5M.js";import{b as o}from"./chunk-ZTLAKSAF.js";import"./chunk-A5UFVDS4.js";import"./chunk-W4SU7VMV.js";import"./chunk-TBHB36S6.js";import"./chunk-L35RWJ6D.js";import"./chunk-3XARJZUK.js";import{a as g}from"./chunk-B5WSSBSP.js";import"./chunk-MWD4X6Z5.js";import"./chunk-RC6Y3VA2.js";import"./chunk-ILE2VADS.js";import{a as v}from"./chunk-DOJ57NAO.js";import{b as f}from"./chunk-KZTI7NFS.js";import{a as p}from"./chunk-L2KXS2FW.js";import"./chunk-GWVOQB64.js";import"./chunk-VMJOI624.js";import"./chunk-A2JPUMZD.js";import{Ma as c,j as a}from"./chunk-I67LU25W.js";import"./chunk-PH4INCXG.js";var i,l;function H(){return i=f("highlightPlayersNearMyLvl"),i}function j(){return l=T(),l}var A=[()=>i||H(),e=>p(e)||e!==(l||j()),(e,t)=>t.last_login>=u-604800,(e,t)=>t.virtual_level>=w(),(e,t)=>t.virtual_level<=L()];function G(e){if(e.rows[0].cells[0].children[0])return Number(a.exec(e.rows[0].cells[0].children[0].href)[1])}function _(e,t){return A.every(r=>r(e,t))}function m(e,t){let r=G(e);d(e.rows[0],`<td>${P({last_login:t.last_login})}</td>`),_(r,t)&&e.parentNode.parentNode.classList.add("lvlHighlight")}var F=e=>[k(e),n(e)];function M(e){O(e);let t=B({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'});return e.parentNode.replaceChild(t,e),t}async function Q([e,t]){let r=await I(t);m(e,r)}async function R(){let e=y(c,o).map(F);await E(e.map(Q))}async function s(e){N("toprated","FindOnlinePlayers");let t=M(e.target);await R(),t.remove()}function U(){let e=h("td",o)[0];e.children[0].className="fshTopListWrap";let t=x({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}});C(e,t),v(t,s)}var b=[()=>g(),()=>o,()=>o.children[0],()=>o.children[0].rows,()=>o.children[0].rows.length>2,()=>n(o.children[0].rows[1]).startsWith("Last Updated")];function q(){return b.every(S)}function D(){q()&&U()}export{D as default};
//# sourceMappingURL=toprated-X34KL2PK.js.map