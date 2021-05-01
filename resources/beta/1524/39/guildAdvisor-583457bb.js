import{n as t,u as s,v as e,D as a,N as n,H as r,$ as i,m as l,h as c,a as o,t as d,a4 as u,ar as f,B as m,as as p,i as v,y as h,b,p as g,c as j,K as y,a9 as C,C as A}from"./calfSystem-26fbeaeb.js"
import{g as B}from"./getMembrList-54983401.js"
import{a as D}from"./addCommas-37fb94e0.js"
import{a as w}from"./allthen-b65a93f3.js"
import{g as S}from"./guild-eb2d8b6c.js"
import{i as k}from"./intValue-f6303c59.js"
import{c as T}from"./createTable-13ccbcea.js"
import{r as R}from"./replaceChild-0ba7ddeb.js"
import{i as x}from"./insertHtmlAfterEnd-078c7745.js"
import{l as G}from"./loadDataTables-f8882460.js"
import"./currentGuildId-5214ee19.js"
import"./cmdExport-c9d580f0.js"
import"./indexAjaxJson-0408c27b.js"
import"./idb-7ea76af7.js"
import"./all-2b32eb82.js"
function E(s){return t("tfoot",s)}function L(t){return S({subcmd:"advisor",subcmd2:"view",period:t})}function M(t){return{player:{level:0,name:r(t.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map((s=>{return e=t.cells[s],k(r(e))
var e}))}}function F(t){const s=e(t),r=a("#pCC table table",s)
return{r:n(r.rows).slice(1,-1).map(M),s:!0}}function N(t){return s({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:t}).then(F)}const H=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function W(t,s){return s[t]?`<a href="${u}${s[t].id}">${t}</a>`:t}function J(t,s){return s[t]?s[t].level:""}function P(t,s){return s[t]?`<div class="fshAdvRank">${s[t].rank_name.trim()}</div>`:""}function X(t,s,e){$(t).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:H,data:s,deferRender:!0,initComplete:e,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}function q(t,s){o(3,d(R,t,s))}function I(t,s,e){const a=l(),n=T({className:"fshDataTable fshXSmall hover"})
return c(a,n),c(n,s),o(3,X,[n,e,d(q,a,t)]),a}function K(t,s,e){return v(t.lastElementChild.lastElementChild,` day ${s},`),e.r}function O(t,s){return(e=s,i(L,N,e)).then(d(K,t,s))
var e}function V(t,s,e){return s+t[e]}function _(t,s,e){return{...s,stats:s.stats.map(d(V,t[e].stats))}}function z(t,s){return t.map(d(_,s))}function Q(t){return{player:t.player,stats:[t.stats[6],t.stats[7],t.stats[6]+t.stats[7],t.stats[1],t.stats[2],t.stats[3],t.stats[4],t.stats[8],t.stats[5]]}}function U(t,s){return s.stats.map(d(V,t))}function Y(t,s){return`${t}<td><u>${s}</u></td>`}function Z(t,s){const e=s.stats.map(D)
return[W(s.player.name,t),J(s.player.name,t),P(s.player.name,t)].concat(e)}function tt(t,[s,...e]){const a=function(t){return t.slice(1).reduce(z,t[0]).map(Q)}(e)
I(t,function(t){return E({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${t.slice(1).reduce(U,t[0].stats).map(D).reduce(Y,"")}</tr>`})}(a),a.map(d(Z,s)))}function st(t,s){return 0===s?r(t):A(t)}function et(t,s){const e=n(s.cells,st)
return e.splice(0,1,W(e[0],t),J(e[0],t),P(e[0],t)),e}function at(t,s){f("guildAdvisor.injectAdvisorDaily")
const e=function(t,s){return n(t.rows).slice(1,-1).map(d(et,s))}(t,s),a=function(t){const s=t.rows[t.rows.length-1].cloneNode(!0),e=E()
c(e,s)
const a=s.cells[0]
return a.className="fshRight",a.setAttribute("colspan","3"),e}(t)
I(t,a,e),function(){const t=y("custombutton",g)
0!==t.length&&x(t[0],`<span> <a href="${C}guild&subcmd=advisor&subcmd2=weekly">7-Day Summary</a></span>`)}(),p("guildAdvisor.injectAdvisorDaily")}function nt(t){"weekly"===j.subcmd2?function(t){f("guildAdvisor.injectAdvisorWeekly"),m('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const s=[B(!1)].concat([1,2,3,4,5,6,7,8].map(d(O,t)))
w(s,d(tt,t)),p("guildAdvisor.injectAdvisorWeekly")}(t):B(!1).then(d(at,t))}function rt(){if(h())return
const t=b("table",g)[1]
t&&G().then((()=>nt(t)))}export default rt
//# sourceMappingURL=guildAdvisor-583457bb.js.map