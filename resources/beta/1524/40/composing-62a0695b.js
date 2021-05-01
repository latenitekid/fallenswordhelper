import{r as e,B as t,t as n,av as s,ac as o,_ as a,aB as i,D as c,m as r,Q as l,W as m,i as p,aC as u,E as f,h as d,o as g,p as h,A as b,c as v,aD as C,C as S,a7 as E,j,I as k,z as N,K as x}from"./calfSystem-ab393688.js"
import{r as A,g as y}from"./rnd-576fc928.js"
import{p as B,s as $}from"./pubsub-7375cff4.js"
import{c as I}from"./createInput-c427de8f.js"
import{c as L}from"./createTable-fc2f2ae0.js"
import{g as q}from"./getArrayByClassName-f0b57594.js"
import{i as F}from"./insertElementAfter-dd204241.js"
import{i as T}from"./insertHtmlAfterEnd-091048b9.js"
import{i as P}from"./insertElementBefore-6e80e0ff.js"
function Q(e,n){t("",e.children[0]),e.children[0].classList.add("fshPot"),e.children[0].style.backgroundImage=`url(${s}composing/${y(1,11)}_${y(1,51)}.png)`,t(`Creating '<span class="fshBold">${n}</span>' Potion`,e.children[2]),t("",e.children[3])}function _(e){const n=e.parentNode
n&&(t('<div class="fshScs">Success</div>',n),Q(n.previousElementSibling.previousElementSibling,e[e.selectedIndex].text),0===o('[id|="composing-template"]:not(#composing-template-multi)').length&&a(i,!1))}function w(e,n){const s=e.parentNode
s&&n&&(n.error?t(`<div class="fshScs">${n.error}</div>`,s):_(e))}function D(t){var s;(s=t.value,e({cache:!1,dataType:"json",data:{cmd:"composing",subcmd:"createajax",template_id:s,fshrnd:A()}})).then(n(w,t))}function z(e,n){n.id=`proc-${n.id}`,t("",e),e.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),D(n),B("quickcreate")}function H(e,t){e.classList.add(`left-${t.toString()}`)}function K(e){H(e,o(".quickCreate .sendLink").length)}function M(e){const t=e.target,{templateId:n}=t.dataset
n&&function(e,t){m("composing","FastComposeButton")
const n=o('[id|="composing-template"]:not(#composing-template-multi)')
if(!(n.length<e.value))for(let s=0;s<e.value;s+=1)n[s].value=t,z(n[s].nextElementSibling.nextElementSibling,n[s])}(t,n)}function R(e,t,n,s){var o,a
return 0===s&&b(e[1],t.insertCell(-1)),d(t.insertCell(-1),(o=(s+1).toString(),a=e[0],I({className:"awesome orange",dataset:{templateId:a},type:"button",value:o}))),t}function W(e,t,s,o){return e.reduce(n(R,o),s.insertRow(-1)),s}function G(e){return[e.value,e.text]}function J(e,t,s){const o=function(e,t,s){const o=L({id:"fshFastCompose"})
return H(o,s),e.reduce(n(W,t,s),o)}(f("#composing-template-multi option").map(G),t,s)
d(e,o),g(h,M),$("quickcreate",n(K,o))}function O(e){m("composing","FastCompose"),p(e,"<br>")
const t=q("composing-potion-time",document),n=t.filter(u("ETA: n/a")).length
n>0?J(e,t,n):p(e,"No open slots!")}const U=/ETA:\s*(\d+)h\s*(\d+)m\s*(\d+)s/
function V(e){const t=U.exec(S(e))
if(t){return 1e3*(3600*t[1]+60*t[2]+Number(t[3]))+E}return 0}function X(e){a(i,e)}function Y(e){T(e,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}function Z(e){const t=e.target.parentNode;(function(e){return"SPAN"===e.tagName&&"quickCreate"===e.className})(t)&&function(e){const t=e.previousElementSibling.previousElementSibling
t&&"none"!==t.value&&(z(e,t),m("composing","QuickCreate"))}(t)}function ee(){!function(){if(!v.enableComposingAlert)return
const e=q("composing-potion-time",document),t=Math.min(...e.map(V))
0===t?X(!0):(X(!1),a(C,t))}(),f("input[id^=create-]:not(#create-multi)",h).forEach(Y),g(h,Z),function(){if(k("moveComposingButtons")){const e=N("composing-error-dialog").previousElementSibling
e.setAttribute("style","text-align: right; padding: 0 38px 0 0")
const t=x("composing-level",h)[0].parentNode
P(e,t)}}(),function(){const e=c("#pCC div.centered")
T(e.children[1],' | <label for="fast-compose"><span class="sendLink">Fast Compose</span></label>')
const t=r({className:"centered"})
F(t,e)
const s=I({id:"fast-compose",type:"checkbox"})
F(s,e),l(s,"change",n(O,t))}()}function te(){j()&&h&&ee()}export default te
//# sourceMappingURL=composing-62a0695b.js.map