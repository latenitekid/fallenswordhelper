import{a as Q}from"./chunk-JVVO4BIM.js";import{a as c}from"./chunk-FJV7TXOA.js";import{a as q}from"./chunk-JNJ2L7JL.js";import{a as H}from"./chunk-J4H47CCX.js";import{a as M,b as $,c as b,d as P,e as E,f as w,g as O}from"./chunk-2BG7M52H.js";import{a as G,b as I}from"./chunk-ZXOZGTP7.js";import{a as U}from"./chunk-4DEMXEWX.js";import{a as F}from"./chunk-E43WMMW2.js";import{a as S}from"./chunk-AMIV6VU6.js";import"./chunk-XKBBMJSB.js";import"./chunk-S4JGXK5I.js";import"./chunk-VOWLBX22.js";import{a as j}from"./chunk-GMERTW32.js";import"./chunk-IPCPLARM.js";import{a as s}from"./chunk-ODQJYK6Y.js";import"./chunk-SMGTENZD.js";import{a as u}from"./chunk-4X4NY56W.js";import"./chunk-LZ2L2TIX.js";import"./chunk-EUWXZKWZ.js";import"./chunk-4ATHPVF4.js";import"./chunk-RTMHI3L7.js";import"./chunk-M5RMVAY3.js";import{a as h}from"./chunk-VWFYI5BK.js";import"./chunk-PYHGZC4L.js";import"./chunk-D76XH5RX.js";import{a as v}from"./chunk-MA3AC62H.js";import{a as A}from"./chunk-DTSXLBNB.js";import"./chunk-NCV3HP3S.js";import{a as x}from"./chunk-YG74QOJP.js";import{b as a}from"./chunk-STY5NEH4.js";import"./chunk-M7Q5FD7X.js";import"./chunk-K2U7JEMX.js";import"./chunk-PUAVFQTB.js";import{C as m,o as k,p as f,r as B,w as y}from"./chunk-OHKPSLFK.js";import"./chunk-EJREXK3Y.js";function i(e,t,n){let o=h(e);if(o instanceof Node){let l=o.parentNode;t(l,n)}else A(`#${e} is not a Node`,!1)}function N(e,t){S("accordion",e),F(t)}function R(e,t){Q(t,e)}function r(e,t,n,o){let l=H({className:`nav-level-${e}`}),L=U({className:"nav-link fshPoint",textContent:t});x(L,v(N,t,n)),j(l,L),i(o,R,l)}function d(e){e.auctionSearchLink&&r("2","AH Quick Search",M,"nav-actions-trade-auctionhouse"),e.onlinePlayersLink&&r("2","Online Players",E,"nav-actions-interaction-findplayer"),e.findOtherLink&&r("2","Find Other",P,"nav-actions-interaction-findplayer"),e.findBuffsLink&&r("2","Find Buffs",b,"nav-actions-interaction-findplayer")}function p(e,t){t.heights=s("#nav > li").map(o=>s("li",o).length*22||null);let n=Number(t.state);n&&n>-1&&n<e.children.length&&(e.children[t.state].children[1].style.height=`${t.heights[t.state]}px`)}function D(e){e.recipeManagerLink&&r("1","Recipe Manager",O,"nav-character-log")}function V(e){e.inventoryManagerLink&&i("nav-character-log",c,`<li class="nav-level-1"><a class="nav-link" id="nav-character-invmanager" href="${m}invmanagernew">Inventory Manager</a></li>`)}function T(e){e.medalGuideLink&&i("nav-character-log",c,`<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide" href="${y}${f}medalguide">Medal Guide</a></li>`)}function z(e){e.buffLogLink&&a("keepBuffLog")&&r("1","Buff Log",$,"nav-character-log")}function J(e){e.combatLogLink&&a("keepLogs")&&r("1","Combat Logs",G,"nav-character-notepad")}function K(e){e.creatureLogLink&&a("showMonsterLog")&&r("1","Creature Logs",I,"nav-character-notepad")}function W(e){e.quickLinksLink&&r("1","Quick Links",w,"nav-character-notepad")}function g(e){D(e),V(e),T(e),z(e),J(e),K(e),W(e)}function X(e){e.guildInventoryLink&&u()&&i("nav-guild-storehouse-inventory",c,`<li class="nav-level-2"><a class="nav-link" id="nav-guild-guildinvmanager" href="${m}guildinvmgr">Guild Inventory</a></li>`)}function Y(e){e.newGuildLogLink&&u()&&!a("useNewGuildLog")&&i("nav-guild-ledger-guildlog",q,`<li class="nav-level-2"><a class="nav-link" href="${B}">New Guild Log</a></li>`)}function Z(e){e.topRatedLink&&i("nav-toprated-players-level",c,`<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" href="${k}toprated${f}xp">Top 250 Players</a></li>`)}function _(e,t,n){g(n),d(n),X(n),Y(n),Z(n),p(e,t)}export{_ as default};
//# sourceMappingURL=injectItems-GNQYPL6M.js.map