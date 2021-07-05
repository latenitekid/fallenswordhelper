import{c as a}from"./createAnchor-6f1b78a5.js"
import{c as n}from"./createLi-4ca370ba.js"
import{z as e,af as i,o as t,t as s,h as o,S as r,X as c,c0 as l,c1 as f,c2 as d,c3 as u,E as v,c4 as g,a3 as h,bQ as m,aH as p,I as L,c5 as k,Y as y,Z as b,c6 as $,b$ as j,ab as N}from"./calfSystem-617f9a5d.js"
import{i as B}from"./insertElementAfter-c974156f.js"
import{i as G}from"./insertHtmlAfterEnd-b1e65dcb.js"
import{c as M}from"./currentGuildId-3b40ad81.js"
import{i as w}from"./insertHtmlBeforeBegin-4bda1ddf.js"
import"./insertElementBefore-784d4581.js"
function I(a,n,t){const s=e(a)
if(s instanceof Node){n(s.parentNode,t)}else i(`#${a} is not a Node`,!1)}function x(a,n){r("accordion",a),c(n)}function A(a,n){B(n,a)}function E(e,i,r,c){const l=n({className:`nav-level-${e}`}),f=a({className:"nav-link fshPoint",textContent:i})
t(f,s(x,i,r)),o(l,f),I(c,A,l)}function H(a){!function(a){a.recipeManagerLink&&E("1","Recipe Manager",g,"nav-character-log")}(a),function(a){a.inventoryManagerLink&&I("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-invmanager" href="${h}invmanagernew">Inventory Manager</a></li>`)}(a),function(a){a.medalGuideLink&&I("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide" href="${m}${p}medalguide">Medal Guide</a></li>`)}(a),function(a){a.buffLogLink&&L("keepBuffLog")&&E("1","Buff Log",k,"nav-character-log")}(a),function(a){a.combatLogLink&&L("keepLogs")&&E("1","Combat Logs",y,"nav-character-notepad")}(a),function(a){a.creatureLogLink&&L("showMonsterLog")&&E("1","Creature Logs",b,"nav-character-notepad")}(a),function(a){a.quickLinksLink&&E("1","Quick Links",$,"nav-character-notepad")}(a)}function P(a,n,e){H(e),function(a){a.auctionSearchLink&&E("2","AH Quick Search",l,"nav-actions-trade-auctionhouse"),a.onlinePlayersLink&&E("2","Online Players",f,"nav-actions-interaction-findplayer"),a.findOtherLink&&E("2","Find Other",d,"nav-actions-interaction-findplayer"),a.findBuffsLink&&E("2","Find Buffs",u,"nav-actions-interaction-findplayer")}(e),function(a){a.guildInventoryLink&&M()&&I("nav-guild-storehouse-inventory",G,`<li class="nav-level-2"><a class="nav-link" id="nav-guild-guildinvmanager" href="${h}guildinvmgr">Guild Inventory</a></li>`)}(e),function(a){a.newGuildLogLink&&M()&&!L("useNewGuildLog")&&I("nav-guild-ledger-guildlog",w,`<li class="nav-level-2"><a class="nav-link" href="${j}">New Guild Log</a></li>`)}(e),function(a){a.topRatedLink&&I("nav-toprated-players-level",G,`<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" href="${N}toprated${p}xp">Top 250 Players</a></li>`)}(e),function(a,n){n.heights=v("#nav > li").map((a=>22*v("li",a).length||null))
const e=Number(n.state)
e&&e>-1&&e<a.children.length&&(a.children[n.state].children[1].style.height=`${n.heights[n.state]}px`)}(a,n)}export default P
//# sourceMappingURL=injectItems-ebdb711a.js.map
