import{u as e,B as t,C as n,bB as s,H as a,U as r,_ as i,y as o,q as c,G as l,c as u,m as d,bN as f,bD as b,A as p,bS as h,h as m,i as y,v as L,x as g,o as v}from"./calfSystem-ec5e5725.js"
import"./insertElementBefore-543d9ef0.js"
import{i as $}from"./insertElementAfterBegin-21a4a979.js"
import{c as w}from"./createSpan-a26e8f7c.js"
import"./csvSplit-c9226810.js"
import{s as N}from"./shouldBeArray-b27cd0e8.js"
import{f as x}from"./functionPasses-2e458a5d.js"
function R(t){return e({cmd:"bounty",page:t})}function k(e){return n("img",e[2]).title}function B(e){const n="A"===(s=e[0]).children[0].tagName?s.children[0]:s.children[0].children[0]
var s
return{target:t(n),link:n.href,lvl:t(n.nextSibling).replace(/[[|\]]/g,""),reward:t(e[2]),rewardType:k(e),posted:t(e[3]),xpLoss:t(e[4])}}let A,T,j,S,W,C
function H(e){return c(B(e),{progress:t(e[5])})}function M(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=H(e.rows[t].cells)
A.bounty.push(n)}}(e)}function P(){return A&&r-A.lastUpdate>S||T&&r-T.lastUpdate>S}function U(e){const t=e[6]
return"[n/a]"!==l(t)?t.children[0].children[0].getAttribute("onclick"):""}const E=[()=>C.includes("*"),e=>C.includes(e),(e,t)=>u.wantedGuildMembers&&"[n/a]"===l(t.cells[6])]
function G(e,t){var n;(function(e,t){return"[active]"!==l(t.cells[6])&&E.some(n=>n(e,t))})(e,t)&&T.bounty.push((n=t.cells,c(B(n),{offerer:l(n[1].children[0].children[0]),tickets:l(n[5]),accept:U(n)})))}let O,q,X,D,K,_
function z(){return d({className:"minibox"})}function F(){b("bountyList",A),p("",O)
const e=d({innerHTML:`<a href="${h}">Active Bounties</a> `})
X=w({className:"xxsLink",textContent:"Reset"}),m(e,X),m(O,e)
let t=""
if(0===A.bounty.length)t+='<div class="xsOrange">[No active bounties]</div>'
else for(let e=0;e<A.bounty.length;e+=1)t+=`<a href="${A.bounty[e].link}" class="tip-static" data-tipped="${n=A.bounty[e],`Level:  ${n.lvl}<br>Reward: ${n.reward} ${n.rewardType}<br>XP Loss Remaining: ${n.xpLoss}<br>Progress:  ${n.progress}`}">${A.bounty[e].target}</a><br>`
var n
y(O,t)}function I(){b("wantedList",T),p("",q)
const e=d({innerHTML:`<a href="${h}">Wanted Bounties</a> `})
D=w({className:"xxsLink",textContent:"Reset"}),m(e,D),m(q,e)
let t=""
if(0===T.bounty.length)t+='<div class="xsOrange">[No wanted bounties]</div>'
else for(let e=0;e<T.bounty.length;e+=1)t+=`${s=T.bounty[e],s.accept?`<span class="xsGreen" onclick="${s.accept}">[a]</span>&nbsp;`:""}<a class="xsKhaki tip-static" data-tipped="${n=T.bounty[e],`Target Level:  ${n.lvl}<br>Offerer: ${n.offerer}<br>Reward: ${n.reward} ${n.rewardType}<br>XP Loss Remaining: ${n.xpLoss}<br>Posted: ${n.posted}<br>Tickets Req.:  ${n.tickets}`}" href="${T.bounty[e].link}">${T.bounty[e].target}</a><br>`
var n,s
y(q,t)}function J(e){const t=n('#pCC input[name="page"]',e)
if(!t)return
K=Number(t.value),_=Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])
const s=o("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
s&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=e.rows[t],s=l(n.cells[0].children[0].children[0])
if("[ No bounties available. ]"===s)break
G(s,n)}}(s)}function Q(e){u.enableActiveBountyList&&!j&&(!function(e){const t=o("bounty-info",e)
if(!t)return
const n=t.parentNode.parentNode.previousElementSibling.children[0].children[0]
A={},A.bounty=[],A.isRefreshed=!0,A.lastUpdate=r,n&&M(n),j=!0}(e),F())}function V(e){const t=L(e)
Q(t),u.enableWantedList&&(J(t),K<_?R(K+1).then(V):I())}const Y=[()=>!A,()=>!T,()=>W]
function Z(e,t){A=s("bountyList"),T=s("wantedList"),S=a("bountyListRefreshTime"),W=a("bwNeedsRefresh"),W||P()&&(W=!0),Y.some(x)?(T={},T.bounty=[],T.isRefreshed=!0,T.lastUpdate=r,j=!1,C=N("wantedNames"),i("bwNeedsRefresh",!1),R(1).then(V)):function(e,t){t&&(T.isRefreshed=!1,I()),e&&(A.isRefreshed=!1,F())}(e,t)}function ee(e){e.target===X&&(b("bountyList",null),Z(u.enableActiveBountyList,u.enableWantedList)),e.target===D&&(b("wantedList",null),Z(u.enableActiveBountyList,u.enableWantedList))}function te(){g()||(u.enableWantedList&&(q=z(),$(f,q)),u.enableActiveBountyList&&(O=z(),$(f,O)),O&&v(O,ee),q&&v(q,ee),Z(u.enableActiveBountyList,u.enableWantedList))}export default te
//# sourceMappingURL=activeWantedBounties-7f19ef9e.js.map
