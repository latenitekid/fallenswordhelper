import{a as T}from"./chunk-W6JGDO7D.js";import"./chunk-D3TMB6YU.js";import"./chunk-FB3RMWJC.js";import{a as y}from"./chunk-CFKGXEY7.js";import{a as h}from"./chunk-H5J4K67Q.js";import{a as p}from"./chunk-JENXJXWC.js";import"./chunk-S6F63XUX.js";import"./chunk-GU4CBJV2.js";import{a as A}from"./chunk-YFVSAF3N.js";import"./chunk-UUEGAS4I.js";import"./chunk-TWEQZVC2.js";import"./chunk-NUXR4MVG.js";import{a as x}from"./chunk-IJ76LC2I.js";import"./chunk-3TMTTFLY.js";import"./chunk-TKJCL3KA.js";import{a as P}from"./chunk-MX5TZ7HK.js";import{a as u}from"./chunk-DEEYYK6E.js";import"./chunk-E6TZ5ETX.js";import{a as v}from"./chunk-MUG4VEKH.js";import{a as O}from"./chunk-G77K7S5L.js";import"./chunk-NEGYQUFU.js";import"./chunk-N3EXWS22.js";import"./chunk-POVOVHEU.js";import{a as C}from"./chunk-PWSQLISA.js";import{a as Q}from"./chunk-HPU5ZEP3.js";import{a as c}from"./chunk-5HI4ILOP.js";import"./chunk-7Z2VPPBD.js";import"./chunk-5XYXKH5Z.js";import{a as m}from"./chunk-MI5ERUAI.js";import"./chunk-RDAHQVBW.js";import{a as k}from"./chunk-Z6KB7KN6.js";import"./chunk-DP37WUXB.js";import"./chunk-MT2H2XVD.js";import"./chunk-LGDJTMPN.js";import"./chunk-KCGDJ5EJ.js";import"./chunk-6ME2NWD5.js";import"./chunk-IFV2NFCC.js";import{a as M}from"./chunk-A45QJTDQ.js";import"./chunk-6YW6FXRF.js";import"./chunk-GDLA3KMJ.js";import{a as I}from"./chunk-CRWX7KCS.js";import{a as L}from"./chunk-VRYLUPGH.js";import{d}from"./chunk-WFI3HTBS.js";import"./chunk-5RFQSTDG.js";import"./chunk-4MID3VOD.js";import{a as o}from"./chunk-HYLQEGZ4.js";import"./chunk-7I6ASYKS.js";import"./chunk-R2OFDU54.js";import"./chunk-CEGJSIVU.js";import"./chunk-G6TPLPCG.js";import"./chunk-IMGI5UI2.js";import"./chunk-E53ZSUER.js";import{A as S,B as $,y as E}from"./chunk-UYN3LUIY.js";import"./chunk-U6BMTRHL.js";import{a as i}from"./chunk-3WE6KSRQ.js";var r="enemy-buff-check-on",g="enemy-buff-check-off",s="enemy-send-message",l="enemy-quickbuff",b="enemy-quick-buff";var _=[[e=>e<120,"fshDodgerBlue","fshRed"],[e=>e<300,"fshDodgerBlue","fshRed"],[()=>!0,"fshPowderBlue","fshPink"]];function D(e,t){return e?t[1]:t[2]}function G(e,t){return t[0](d()-e)}function R(e,t){let n=_.find(o(G,e));return n?D(t,n):"fshWhite"}function j(e,t){return`<a class="player-name tip-static ${R(e.last_login,t)}" data-tipped="<b>${e.username}</b><br><table><tbody><tr><td>Level:</td><td>${e.level}</td></tr><tr><td>Last Activity:</td><td>${T(e.last_login)}</td></tr></tbody></table>" href="${E}${e.id}">${e.username}</a>`}function H(){return i.hideBuffSelected?"":`<span class="${r}"></span>`}function U(){return i.hideGuildInfoMessage?"":`<span class="${s} enemy-icon guild-minibox-action tip-static" data-tipped="Send Message"></span>`}function q(){return i.hideGuildInfoBuff?"":`<span class="${l} enemy-icon guild-minibox-action tip-static" data-tipped="Quick Buff"></span>`}function z(e){return i.hideGuildInfoSecureTrade?"":`<a class="enemy-secure-trade enemy-icon guild-minibox-action tip-static" href="${$}${e.username}" data-tipped="Secure Trade"></a>`}function F(e){return i.hideGuildInfoTrade?"":`<a class="enemy-trade enemy-icon guild-minibox-action tip-static" href="${S}${e.username}" data-tipped="Send Gold/Items/FSP"></a>`}function W(e){return d()-e.last_login<1800}function J(e,t){return`<li class="player"><div class="player-row">${H()}${j(t,e)}</div><div class="guild-minibox-actions">${U()}${q()}${z(t)}${F(t)}</div></li>`}function a(e,t){return e.filter(W).map(o(J,t)).join("")}var K=[(e,t)=>e.length+t.length,(e,t)=>{if(!i.enableAllyOnlineList)return t.length},e=>{if(!i.enableEnemyOnlineList)return e.length}];function f(e){L("allyEnemy",e)}function V(e,t,n){return n(e,t)===0}function X(e,t){return K.every(o(V,e,t))}function Y(e,t){let n="";i.enableAllyOnlineList&&(n+=a(e,!0)),i.enableEnemyOnlineList&&(n+=a(t,!1));let B=c("fshContactList");Q("",B),u(B,n)}function N(e){let t=m(e._allies,[]),n=m(e._enemies,[]);X(t,n)||Y(t,n)}function Z(){f("resetList"),p(!0).then(N)}function w(e){f("toggleBuffSelected"),e.classList.toggle(r),e.classList.toggle(g)}function ee(e){f("msgPlayer"),window.openQuickMsgDialog(k(e.parentNode.previousElementSibling.lastElementChild))}function te(e){f("buffPlayer"),h(y(e.parentNode.previousElementSibling.lastElementChild.href))}function ne(){f("selectedBuff");let t=P(r,c("fshContactList")).map(n=>y(n.nextElementSibling.href)).join(",");h(t)}var ie=[[r,w],[g,w],[s,ee],[l,te],[b,ne]];function re(e){let{target:t}=e;if(t.id==="fshResetEnemy"){Z();return}A(ie)(e)}function oe(e){let t=v({id:"fshAllyEnemy",className:"minibox"}),n='<h3>Allies/Enemies</h3><div class="minibox-content"><h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4><div class="minibox-enemy"><ul id="fshContactList"></ul>';i.hideBuffSelected||(n+=`<ul class="${b}">Quick Buff Selected</ul>`),n+="</div></div>",u(t,n),O(C(),t),I(t,re),N(e)}function fe(e){e&&x(3,oe,[e])}function se(){M()||p(!1).then(fe)}export{se as default};
//# sourceMappingURL=allyEnemy-G6GCUCJY.js.map