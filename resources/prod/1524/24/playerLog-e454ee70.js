import{e,aT as t,D as a,b4 as s,G as n,C as o,b5 as r,z as i,b6 as c,w as f,S as l,t as u,aS as p,b7 as d,a7 as m,h,m as g,B as b,E as y,i as j,o as w,H as $,M as k,b8 as v,b9 as C,ba as P,bb as _,a3 as L,Y as T,x as B}from"./calfSystem-ec854151.js"
import"./playerName-f06eed80.js"
import{t as x}from"./toLowerCase-2f55d839.js"
import{a as E}from"./addCommas-6d131931.js"
import{c as S}from"./createStyle-20f757fd.js"
import{c as R}from"./currentGuildId-1299fc05.js"
import"./fshOpen-d34bc8a7.js"
import{o as G}from"./openQuickBuffByName-94ccc2ce.js"
import"./dataRows-40e5e924.js"
import{g as A,s as I}from"./idb-72ad0068.js"
import"./closest-d8e60c46.js"
import{c as M}from"./closestTr-25a90971.js"
import"./indexAjaxJson-7630ad10.js"
import"./cmdExport-8168eb49.js"
import{c as Y}from"./csvSplit-dcc6dfc9.js"
import{i as D}from"./insertHtmlAfterEnd-29e289c9.js"
import{p as N}from"./parseDateAsTimestamp-b98cf0ad.js"
import{b as H}from"./buffObj-370bcf38.js"
import"./getProfile-3eaaacde.js"
import{m as q}from"./myStats-0cefc464.js"
import{c as z}from"./closestTd-14cb4bea.js"
import{g as Q}from"./getMembrList-feaff568.js"
import"./doBuffLinkClick-5789f272.js"
import{a as O}from"./addLogColoring-9d5fa9bd.js"
let W
async function J(a){return R()&&!W&&(W=async function(){return e(await Q(!1)).filter(([,e])=>t(e)).map(([e])=>e)}()),(await W).includes(a)}const X=e=>n(e.cells[2].children[0]),F=async([e,t])=>[e,t,await J(t)]
function K([e,t]){const a=o('a[href*="=createsecure&"]',e)
D(a,` | <a href="${r}${t}">Attack</a>`)}function U(e){const t=n(z(e).nextElementSibling.children[0])
i("Report",e),D(e,` | <a href="${c}${t}" class="tip-static" data-tipped="Add to Ignore List">Ignore</a>`)}function V(e){return function(e){return f({cmd:"combat",subcmd:"view",combat_id:e})}(e)}let Z,ee
function te(e,[t,a]){return"lastCheck"===t||a.logTime&&a.logTime>e}async function ae(){const t=await A("fsh_pvpCombat")
if(!t)return{lastCheck:l}
const a=l-86400
return!t.lastCheck||t.lastCheck<a?function(t){const a=l-604800,s=e(t).filter(u(te,a)),n={...p(s),lastCheck:l}
return I("fsh_pvpCombat",n),n}(t):t}async function se(e,t){Z||(Z=ae())
const a=await Z
return a[t]&&a[t].logTime?a[t]:async function(e,t,a){const s=await V(t)
if(s&&s.s)return ee||(ee={...a}),ee[t]={...s,logTime:N(n(e.cells[1]))/1e3},I("fsh_pvpCombat",ee),s}(e,t,a)}const ne=e=>o(d,e),oe=([,e])=>!/\(Guild Conflict\)/.test(e),re=async([e,t])=>[e,t,await se(e,/combat_id=(\d+)/.exec(t)[1])]
function ie(e,t,a){return 0!==e?`${t}:<span class="${a}">${E(e)}</span> `:""}function ce(e,t){return 18===t.id?`${e}<br><span class="fshRed fshBold">${t.params[0]} leeched the buff '${t.params[1]}'.</span>`:21===t.id?`${e}<br><span class="fshRed fshBold">${t.params[0]} was mesmerized by Spell Breaker, losing the '${t.params[1]}' buff.</span>`:e}function fe([e,t,a]){const[s,n]=function(e,t){return/You were victorious over/.test(t)?["fshGreen",'You were <span class="fshGreen">victorious</span> over ']:/You were defeated by/.test(t)?["fshRed",'You were <span class="fshRed">defeated</span> by ']:["",b(e.cells[2].firstChild)]}(e,t),o=function(e,t){return ie(e.r.xp_gain,"XP stolen",t)+ie(e.r.gold_gain,"Gold lost",t)+ie(e.r.gold_stolen,"Gold stolen",t)+ie(e.r.pvp_prestige_gain,"Prestige gain",t)+ie(e.r.pvp_rating_change,"PvP change",t)+e.r.specials.reduce(ce,"")}(a,s)
e.cells[2].firstChild.remove(),m(e.cells[2],n),h(e.cells[2],g({innerHTML:o}))}const le=e=>e.username
let ue
async function pe(){const e=await q(!1)
return{_allies:e._allies.map(le),_enemies:e._enemies.map(le)}}async function de(e){return ue||(ue=pe()),(await ue)._allies.includes(e)}async function me(e){return ue||(ue=pe()),(await ue)._enemies.includes(e)}async function he(e){let t=""
const a=n(e),[s,o,r]=await Promise.all([J(a),de(a),me(a)])
return s?t="guild":o?t="ally":r&&(t="enemy"),[`.fshPlayerColoring tr:nth-of-type(${M(e).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,t]}function ge(e,[t,a]){return e[a]?e[a].push(t):e[a]=[t],e}const be={guild:"green",ally:"blue",enemy:"red"}
function ye([e,t]){return`${t.join(", ")} { color: ${be[e]}; }`}async function je(t){const s=a(y,t)
if(0===s.length)return
const n=(await Promise.all(s.map(he))).filter(([,e])=>""!==e),o=e(n.reduce(ge,{})).map(ye)
o.length&&(!function(e){const t=e.rows[0].cells[2]
t&&j(t,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(t),t.classList.add("fshPlayerColoring"),h(document.body,S(o.join("\n"))))}const we=e=>(e=>k(z(e).childNodes))(e).map(n)
function $e(e,t){return(e=>o(s,M(e)))(e)&&("Buff"===t||"Reply"===t&&$("enableChatParsing"))}function ke(e){const t=H.find(t=>((e,t)=>Y(t.nicks).includes(x(e)))(e,t))
if(t)return t.id}function ve(e){const{target:t}=e,a=n(t)
$e(t,a)&&("Reply"===a&&(!function(e){const t=we(e).slice(0,2),a=t.join(" ")
let s=a
a.length>140&&(s=a.substring(0,140)+"..."),window.openQuickMsgDialog(t[0],"",s)}(t),e.preventDefault()),"Buff"===a&&function(e,t){const[a,s]=we(t),n=/`~(.*)~`/.exec(s)
if(n){const t=Y(n[1]).map(ke).filter(e=>e).join(";")
G(a,t),e.preventDefault()}}(e,t))}const Ce=([,e])=>o(v,e)
function Pe([,e,t]){j(e.cells[1].children[0],`<font size="1"><br>[ <a href="${c}${t}" class="tip-static" data-tipped="Add to Ignore List" >Ignore</a> ]</font>`)}async function _e(e,[t,,a]){const s=C.exec(t.href)[1],n=e&&!await J(a)?` | <a href="${r}${a}">Attack</a>`:""
j(t.parentNode,`&nbsp;&nbsp; <small>[ <a href="javascript:openQuickMsgDialog(&quot;${a}&quot;);" class="tip-static" data-tipped="Send Message">Reply</a> | <a href="javascript:quickBuff(${s});">Buff</a> | <a href="${P}${a}">Send</a> | <a href="${_}${a}">Trade</a>`+n+" ]</small>")}let Le
const Te=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function Be(e){return Te.test(b(e.cells[2]))}function xe(e){const t=N(n(e.cells[1]))
t>Le&&(T(L,t),Le=t)}function Ee(e){!function(e){w(e,ve)}(e)
const t=$("addIgnoreLink"),o=$("addAttackLinkToLog")
t&&function(e){a('a[href*="reportMsg"]',e).forEach(U)}(e),$("colorPlayerNames")&&je(e),o&&async function(e){const t=a(s,e)
if(0===t.length)return
const n=t.map(M).map(e=>[e,X(e)]);(await Promise.all(n.map(F))).filter(([,,e])=>!e).forEach(K)}(e),$("notificationWidgets")&&function(e,t,s){const o=a(y,e)
if(0===o.length)return
const r=o.map(e=>[e,M(e)]).filter(Ce).map(([e,t])=>[e,t,n(e)])
t&&r.forEach(Pe),r.forEach(u(_e,s))}(e,t,o),$("changeButtonLabels")&&function(e){a('a[href*="=trade&"]',e).forEach(e=>i("Trade",e)),a('a[href*="=createsecure&"]',e).forEach(e=>i("ST",e))}(e),$("trackLadderReset")&&function(e){Le=$(L),a(v,e).map(M).filter(Be).forEach(xe)}(e),$("showPvPSummaryInLog")&&async function(e){const t=a('a[href*="&combat_id="]',e)
if(0===t.length)return
const s=t.map(M).filter(ne).map(e=>[e,e.cells[2].innerHTML]).filter(oe);(await Promise.all(s.map(re))).filter(([,,e])=>e&&e.s).forEach(fe)}(e)}function Se(){O("PlayerLog",1),function(){if(B())return
const e=o("#pCC > table:last-of-type")
e&&Ee(e)}()}export default Se
//# sourceMappingURL=playerLog-e454ee70.js.map
