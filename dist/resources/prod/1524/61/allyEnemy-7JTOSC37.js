import{a as N}from"./chunk-Y6WRLUT3.js";import"./chunk-KDDLXSS2.js";import"./chunk-QT7Z3JWU.js";import{a as y}from"./chunk-Z6S25FGQ.js";import"./chunk-GVGQ2EBN.js";import{a as p}from"./chunk-OCGB7BD5.js";import{a as g}from"./chunk-QZPX5STO.js";import"./chunk-QR6TWWSY.js";import{a as T}from"./chunk-525RTZTH.js";import"./chunk-RQF33MH3.js";import{a as L}from"./chunk-EBWHAZNZ.js";import"./chunk-PE3M43MS.js";import"./chunk-UHRCPRA2.js";import{a as S}from"./chunk-PPAXQEYD.js";import"./chunk-H6ROHLJQ.js";import{a as Q}from"./chunk-K32J6RS5.js";import"./chunk-N53U3X6N.js";import{a as m}from"./chunk-DJH7MW43.js";import"./chunk-W5RHDDBD.js";import{a as v}from"./chunk-4JAOIN2Q.js";import"./chunk-NRF5E4NM.js";import"./chunk-EERRLM6T.js";import"./chunk-YW32WFOO.js";import"./chunk-67T22IOS.js";import"./chunk-EFF7KNX2.js";import{b as d}from"./chunk-QICZDMHT.js";import"./chunk-LGGDA375.js";import"./chunk-YLV5UIKA.js";import{a as $}from"./chunk-SRR4B7GE.js";import"./chunk-RZ3TV2NA.js";import{a as O}from"./chunk-CDBYAPQM.js";import"./chunk-ISMAARKL.js";import"./chunk-MXS7SZ5M.js";import{c as x}from"./chunk-ZTLAKSAF.js";import{a as A}from"./chunk-BRIPXERW.js";import{a as c}from"./chunk-A5UFVDS4.js";import"./chunk-W4SU7VMV.js";import{a as u}from"./chunk-LWP4UM2N.js";import"./chunk-TBHB36S6.js";import"./chunk-L35RWJ6D.js";import{a as r}from"./chunk-3XARJZUK.js";import"./chunk-CR4XFS65.js";import"./chunk-C4AGMBCS.js";import"./chunk-B5WSSBSP.js";import"./chunk-MWD4X6Z5.js";import"./chunk-RC6Y3VA2.js";import"./chunk-ILE2VADS.js";import{a as I}from"./chunk-3IL5APLJ.js";import{a as P}from"./chunk-DOJ57NAO.js";import"./chunk-KZTI7NFS.js";import"./chunk-L2KXS2FW.js";import"./chunk-GWVOQB64.js";import"./chunk-VMJOI624.js";import"./chunk-A2JPUMZD.js";import{A as C,x as k,z as E}from"./chunk-I67LU25W.js";import{a as i}from"./chunk-PH4INCXG.js";var o="enemy-buff-check-on",h="enemy-buff-check-off",f="enemy-send-message",l="enemy-quickbuff",B="enemy-quick-buff";var M=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]];function j(e,t){return e?t[1]:t[2]}function D(e,t){return t[0](d-e)}function R(e,t){let n=M.find(r(D,e));return n?j(t,n):"fshWhite"}function G(e,t){return`<a class="player-name tip-static ${R(e.last_login,t)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${N(e.last_login)}</td></tr></tbody></table>" href="${k}${e.id}">${e.username}</a>`}function _(){return i.hideBuffSelected?"":`<span class="${o}"></span>`}function U(){return i.hideGuildInfoMessage?"":`<span class="${f} guild-icon left guild-minibox-action tip-static" data-tipped="Send Message"></span>`}function q(){return i.hideGuildInfoBuff?"":`<span class="${l} guild-icon left guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}function z(e){return i.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade guild-icon left guild-minibox-action tip-static" href="${C}${e.username}" data-tipped="Secure Trade"></a>`}function F(e){return i.hideGuildInfoTrade?"":`<a class="enemy-trade guild-icon left guild-minibox-action tip-static" href="${E}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}function W(e){return d-e.last_login<1800}function J(e,t){return`<li class="player"><div class="player-row">${_()}${G(t,e)}</div><div class="guild-minibox-actions">${U()}${q()}${z(t)}${F(t)}</div></li>`}function a(e,t){return e.filter(W).map(r(J,t)).join("")}var K=[(e,t)=>e.length+t.length,(e,t)=>{if(!i.enableAllyOnlineList)return t.length},e=>{if(!i.enableEnemyOnlineList)return e.length}];function s(e){Q("allyEnemy",e)}function V(e,t,n){return n(e,t)===0}function X(e,t){return K.every(r(V,e,t))}function Y(e,t){let n="";i.enableAllyOnlineList&&(n+=a(e,!0)),i.enableEnemyOnlineList&&(n+=a(t,!1));let b=c("fshContactList");A("",b),m(b,n)}function w(e){let t=u(e._allies,[]),n=u(e._enemies,[]);X(t,n)||Y(t,n)}function Z(){s("resetList"),y(!0).then(w)}function H(e){s("toggleBuffSelected"),e.classList.toggle(o),e.classList.toggle(h)}function ee(e){s("msgPlayer"),window.openQuickMsgDialog($(e.parentNode.previousElementSibling.lastElementChild))}function te(e){s("buffPlayer"),g(p(e.parentNode.previousElementSibling.lastElementChild.href))}function ne(){s("selectedBuff");let t=I(o,c("fshContactList")).map(n=>p(n.nextElementSibling.href)).join(",");g(t)}var ie=[[o,H],[h,H],[f,ee],[l,te],[B,ne]];function oe(e){let{target:t}=e;if(t.id==="fshResetEnemy"){Z();return}L(ie)(e)}function re(e){let t=v({id:"fshAllyEnemy",className:"minibox"}),n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div id="minibox-enemy"><ul id="fshContactList"></ul>';i.hideBuffSelected||(n+=`<ul class="${B}">Quick Buff Selected</ul>`),n+="</div></div>",m(t,n),T(x,t),P(t,oe),w(e)}function se(e){e&&S(3,re,[e])}function fe(){O()||y(!1).then(se)}export{fe as default};
//# sourceMappingURL=allyEnemy-7JTOSC37.js.map
