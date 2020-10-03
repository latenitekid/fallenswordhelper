import{C as t,A as n,b as e,B as s,D as a,t as i,y as f,P as c,Q as r,x as u,o}from"./calfSystem-71b9378d.js"
import{s as l}from"./setTipped-64e874d6.js"
import"./insertElementBefore-286ff14c.js"
import{c as d}from"./createSpan-729a1388.js"
import"./indexAjaxJson-fd3c427d.js"
import"./cmdExport-0ed34c6b.js"
import{c as m}from"./csvSplit-8c1a6c7f.js"
import{i as b}from"./insertHtmlAfterEnd-8f485add.js"
import{i as h}from"./insertElementAfter-45345c01.js"
import{o as p}from"./outputFormat-c14ae873.js"
import{f as k}from"./formatLastActivity-433f9af1.js"
import{g as q}from"./getProfile-63a4e7bf.js"
import{d as y,q as E}from"./quickbuffSuccess-a4cdb08d.js"
function v(s){const a=function(n){let s=t("span.fshLastActivity",n)
if(!s){s=d({className:"fshLastActivity"})
const t=e("h1",n)[0]
h(s,t)}return s}(t(`div.player[data-username="${s.username}"]`))
n(`Last Activity: ${k(s.last_login)}<br>Stamina: ${s.current_stamina} / ${s.stamina} ( ${Math.floor(s.current_stamina/s.stamina*100)}% )`,a)}function T(t){return Number(s(t).replace(/\[|\]/g,""))}function g(t,e,s){if(!e)return void n("",s)
const a=T(t.nextElementSibling.children[0].children[0]),i=function(t,n){if(!n){const n=d({className:"fshPlayer"})
return h(n,t.nextElementSibling),n}return n}(t,s),f=function(t,n){return t>n?"fshRed":"fshGreen"}(a,e)
n(` <span class="${f}">[${e}]</span>`,i)}function S(t,n){return n[0]===t}function j(t,n){const e=function(t,n){const e=n.getAttribute("data-name"),s=t.find(i(S,e))
if(s)return s[1]}(t,n),s=n.nextElementSibling.nextElementSibling;(e||s)&&g(n,e,s)}function $(t){return t.split(/ \[|]/)}function x(t){const n=t.target
if("H1"!==n.tagName)return
q(s(n)).then(v)
const e=function(t){return m(s(t.parentNode.lastElementChild)).map($)}(n)
a("#buff-outer input[name]").forEach(i(j,e))}const B=[50,54,55,56,60,61,98,101]
function A(t,n){(function(t,n){return!B.includes(Number(t.htmlFor.slice(6)))&&T(n.children[0])<125})(t,n)&&t.classList.add("fshDim")}function D(t){const n=t.children[0]
!function(t,n){const e=n.dataset.tipped,{cost:s}=t.previousElementSibling.dataset
l(e.replace("</center>",`<br>Stamina Cost: ${s}$&`),n)}(t,n),A(t,n)}function H(t){const n=e("h1",f("players"))[0]
!function(t,n){return!t&&n}(n,t)?n&&c(n):setTimeout(H,100,t-1)}function L(){f("targetPlayers").value&&H(9)}function N(t){return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${function(t){const n=Math.floor(t/60),e=t%60
let s=p(n,"m")
return n>0&&e>0&&(s+=" "),s+=p(e,"s"),s}(t)})</span>`}function R(n,e){const s=n[e]||0
return s?N(s):function(n){const e=t(`#buff-outer input[data-name="${n}"]`)
return e?`<span class="quickbuffActivate" data-buffid="${e.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(e)}function w(t,e,s){n(R(t,e),s)}function F(t,n){return t[n.name]=n.duration,t}function M(t,n){return n.name===t}function C(t,e,s){const a=function(t,n){const e=t.find(i(M,n))
return e&&e.value||0}(t,e)
let f="fshLime"
a<100&&(f="fshRed"),n(`<span class="${f}">${a}%</span>`,s)}function G(t){!function(t){const n=t._enhancements
C(n,"Sustain",f("fshSus")),C(n,"Fury Caster",f("fshFur"))}(t),function(t){const n=t._skills.reduce(F,{})
w(n,"Guild Buffer",f("fshGB")),w(n,"Buff Master",f("fshBM")),w(n,"Extend",f("fshExt")),w(n,"Reinforce",f("fshRI"))}(t)}function P(t){const n=f("skill-"+t)
n&&(n.checked=!0)}function _(){const t=r("blist")
t&&function(t){t.split(";").forEach(P)}(t)}let O
function Q(){O.length?(window.addPlayer(O.shift()),setTimeout(Q,200)):L()}function I(t,e){E(e)&&(t.className="fshLime",n("On",t))}function J(t){const n=t.target
"quickbuffActivate"===n.className&&y([window.self],[n.dataset.buffid]).then(i(I,n))}function z(){if(u())return
const t=f("quickbuff")
t&&(q(window.self).then(G),b(t.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),a('#buff-outer label[for^="skill-"]').forEach(D),_(),function(){const t=r("players")
t&&(O=m(t),Q())}(),o(f("helperQBheader"),J),o(f("players"),x),L())}export default z
//# sourceMappingURL=quickBuff-999a43e4.js.map