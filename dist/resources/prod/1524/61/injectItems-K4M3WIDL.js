import{a as U}from"./chunk-WUJ4CDSE.js";import{a as c}from"./chunk-TSKQDIPU.js";import{a as q}from"./chunk-4WT4SJAQ.js";import{a as I}from"./chunk-TTD5PL7C.js";import"./chunk-RQF33MH3.js";import{a as w,b as P,c as M,d as x,e as G,f as b,g as O}from"./chunk-VOPII4UP.js";import{a as S,b as H}from"./chunk-FMB4AE47.js";import{a as Q}from"./chunk-SCAM4Q4W.js";import{a as F}from"./chunk-HU6HZYEB.js";import{a as $}from"./chunk-K32J6RS5.js";import"./chunk-W5RHDDBD.js";import"./chunk-4JAOIN2Q.js";import"./chunk-NRF5E4NM.js";import{a as j}from"./chunk-EERRLM6T.js";import{a as s}from"./chunk-SVOLGRZA.js";import"./chunk-AMLNDKL6.js";import{a as u}from"./chunk-BYVXHJ5E.js";import"./chunk-P32LYIQC.js";import"./chunk-3A25HTZJ.js";import"./chunk-SRR4B7GE.js";import"./chunk-RZ3TV2NA.js";import"./chunk-BRIPXERW.js";import{a as v}from"./chunk-A5UFVDS4.js";import"./chunk-TBHB36S6.js";import"./chunk-L35RWJ6D.js";import{a as L}from"./chunk-3XARJZUK.js";import{a as A}from"./chunk-RC6Y3VA2.js";import"./chunk-ILE2VADS.js";import{a as E}from"./chunk-DOJ57NAO.js";import{b as a}from"./chunk-KZTI7NFS.js";import"./chunk-L2KXS2FW.js";import"./chunk-GWVOQB64.js";import"./chunk-A2JPUMZD.js";import{C as f,o as k,p as m,r as B,w as y}from"./chunk-I67LU25W.js";import"./chunk-PH4INCXG.js";function o(e,t,n){let i=v(e);if(i instanceof Node){let l=i.parentNode;t(l,n)}else A(`#${e} is not a Node`,!1)}function D(e,t){$("accordion",e),F(t)}function V(e,t){U(t,e)}function r(e,t,n,i){let l=I({className:`nav-level-${e}`}),h=Q({className:"nav-link fshPoint",textContent:t});E(h,L(D,t,n)),j(l,h),o(i,V,l)}function d(e){e.auctionSearchLink&&r("2","AH Quick Search",w,"nav-actions-trade-auctionhouse"),e.onlinePlayersLink&&r("2","Online Players",G,"nav-actions-interaction-findplayer"),e.findOtherLink&&r("2","Find Other",x,"nav-actions-interaction-findplayer"),e.findBuffsLink&&r("2","Find Buffs",M,"nav-actions-interaction-findplayer")}function p(e,t){t.heights=s("#nav > li").map(i=>s("li",i).length*22||null);let n=Number(t.state);n&&n>-1&&n<e.children.length&&(e.children[t.state].children[1].style.height=`${t.heights[t.state]}px`)}function N(e){e.recipeManagerLink&&r("1","Recipe Manager",O,"nav-character-log")}function R(e){e.inventoryManagerLink&&o("nav-character-log",c,`<li class="nav-level-1"><a class="nav-link" id="nav-character-invmanager" href="${f}invmanagernew">Inventory Manager</a></li>`)}function T(e){e.medalGuideLink&&o("nav-character-log",c,`<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide" href="${y}${m}medalguide">Medal Guide</a></li>`)}function z(e){e.buffLogLink&&a("keepBuffLog")&&r("1","Buff Log",P,"nav-character-log")}function J(e){e.combatLogLink&&a("keepLogs")&&r("1","Combat Logs",S,"nav-character-notepad")}function K(e){e.creatureLogLink&&a("showMonsterLog")&&r("1","Creature Logs",H,"nav-character-notepad")}function W(e){e.quickLinksLink&&r("1","Quick Links",b,"nav-character-notepad")}function g(e){N(e),R(e),T(e),z(e),J(e),K(e),W(e)}function X(e){e.guildInventoryLink&&u()&&o("nav-guild-storehouse-inventory",c,`<li class="nav-level-2"><a class="nav-link" id="nav-guild-guildinvmanager" href="${f}guildinvmgr">Guild Inventory</a></li>`)}function Y(e){e.newGuildLogLink&&u()&&!a("useNewGuildLog")&&o("nav-guild-ledger-guildlog",q,`<li class="nav-level-2"><a class="nav-link" href="${B}">New Guild Log</a></li>`)}function Z(e){e.topRatedLink&&o("nav-toprated-players-level",c,`<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" href="${k}toprated${m}xp">Top 250 Players</a></li>`)}function _(e,t,n){g(n),d(n),X(n),Y(n),Z(n),p(e,t)}export{_ as default};
//# sourceMappingURL=injectItems-K4M3WIDL.js.map