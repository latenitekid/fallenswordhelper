import{y as a,aa as n,o as e,t as i,h as t,U as s,V as r,b_ as o,b$ as c,c0 as l,c1 as f,a9 as u,c2 as d,a0 as v,bA as g,ao as h,H as m,c3 as p,W as L,X as k,c4 as y,bW as b,a6 as $}from"./calfSystem-ec854151.js"
import"./insertElementBefore-2ad05963.js"
import{c as j}from"./currentGuildId-1299fc05.js"
import{c as N}from"./createLi-ed584bda.js"
import{c as B}from"./createAnchor-2f5f0f4c.js"
import{i as G}from"./insertHtmlAfterEnd-29e289c9.js"
import{i as M}from"./insertElementAfter-768b6ab2.js"
import{i as w}from"./insertHtmlBeforeBegin-340dfbc2.js"
function x(e,i,t){const s=a(e)
if(s instanceof Node){i(s.parentNode,t)}else n(`#${e} is not a Node`,!1)}function A(a,n){s("accordion",a),r(n)}function E(a,n){M(n,a)}function H(a,n,s,r){const o=N({className:"nav-level-"+a}),c=B({className:"nav-link fshPoint",textContent:n})
e(c,i(A,n,s)),t(o,c),x(r,E,o)}const I=a=>22*a.length,P=n=>I(a("nav-"+n).nextElementSibling.children),S=a=>I(u(`#nav-${a} > ul li`))
function C(a){!function(a){a.recipeManagerLink&&H("1","Recipe Manager",d,"nav-character-log")}(a),function(a){a.inventoryManagerLink&&x("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-invmanager" href="${v}invmanagernew">Inventory Manager</a></li>`)}(a),function(a){a.medalGuideLink&&x("nav-character-log",G,`<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide" href="${g}${h}medalguide">Medal Guide</a></li>`)}(a),function(a){a.buffLogLink&&m("keepBuffLog")&&H("1","Buff Log",p,"nav-character-log")}(a),function(a){a.combatLogLink&&m("keepLogs")&&H("1","Combat Logs",L,"nav-character-notepad")}(a),function(a){a.creatureLogLink&&m("showMonsterLog")&&H("1","Creature Logs",k,"nav-character-notepad")}(a),function(a){a.quickLinksLink&&H("1","Quick Links",y,"nav-character-notepad")}(a)}function O(a,n,e){C(e),function(a){a.auctionSearchLink&&H("2","AH Quick Search",o,"nav-actions-trade-auctionhouse"),a.onlinePlayersLink&&H("2","Online Players",c,"nav-actions-interaction-findplayer"),a.findOtherLink&&H("2","Find Other",l,"nav-actions-interaction-findplayer"),a.findBuffsLink&&H("2","Find Buffs",f,"nav-actions-interaction-findplayer")}(e),function(a){a.guildInventoryLink&&j()&&x("nav-guild-storehouse-inventory",G,`<li class="nav-level-2"><a class="nav-link" id="nav-guild-guildinvmanager" href="${v}guildinvmgr">Guild Inventory</a></li>`)}(e),function(a){a.newGuildLogLink&&j()&&!m("useNewGuildLog")&&x("nav-guild-ledger-guildlog",w,`<li class="nav-level-2"><a class="nav-link" href="${b}">New Guild Log</a></li>`)}(e),function(a){a.topRatedLink&&x("nav-toprated-players-level",G,`<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" href="${$}toprated${h}xp">Top 250 Players</a></li>`)}(e),function(a,n){n.heights=[null,null,P("character"),S("actions"),S("guild"),S("toprated"),S("upgrades"),P("resources"),null],-1!==Number(n.state)&&(a.children[n.state].children[1].style.height=n.heights[n.state]+"px")}(a,n)}export default O
//# sourceMappingURL=injectItems-1e229d84.js.map
