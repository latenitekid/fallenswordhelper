import{c as t}from"./closestTable-820f3aaf.js"
import{c as n}from"./createSpan-f9f70e5d.js"
import{y as e,h as o,f as s,t as r,A as a,B as c,Z as i,bv as u,aE as f,m,p as l,e as p}from"./calfSystem-393ab895.js"
import{i as d}from"./intValue-e7ef611d.js"
import{n as b}from"./numberIsNaN-53300e34.js"
import{a as g}from"./alpha-80a926ba.js"
import"./closest-77701dcf.js"
import"./toLowerCase-51740687.js"
function h(t,n,e){a("",t)
const o=Number(e.value)
b(o)||0===o||function(t,n,e){const o=d(c(n)),s=Math.floor(o/e).toString()
a(`&nbsp;&nbsp;Max: ${s} times`,t)}(t,n,o)}function $(t,n,e){t&&h(t,n,e)}function j(a){!function(n){t(n).removeAttribute("width")}(a),function(t,n,e){const o=r($,t,n,e)
o(),s(e,"keyup",o)}(function(t){const e=n()
return o(t.parentNode,e),e}(a),e("statbar-gold"),e("gold"))}let v
function N(t,n){const e=n.match(/>([^<]+)</)[1]
return t[e]=(t[e]||0)+1,t}function S(t,n){return g(t[0],n[0])}function y(t){return`<br>${t[1]} ${t[0]}(s), `}function M(t){const n=function(t){return t.reduce(N,{})}(t)
return`<br>${t.length} item(s):${p(n).sort(S).map(y).join("")}`}function _(){let t=""
const n=e("scavenge_results")
if(n){const e=n.innerHTML
t+=function(t){const n=t.match(/victorious/g)
return n?`Victories: ${n.length}`:""}(e),t+=function(t){const n=t.match(/defeated/g)
return n?`, Defeated: ${n.length}`:""}(e),t+=function(t){const n=t.match(/Item Gained: <b>[^<]+<\/b>/g)
if(n)return M(n)}(e)}return t}function q(t){return function(n,e,s){t(n,e,s),i("lastScavPage",`${u}scavenging&cave_id=${s}&gold=${e}`),a(_(),(v||(v=m(),o(l,v)),a("",v),v))}}function w(){!function(){const t=sendRequest
f(t)&&(sendRequest=q(t))}(),function(){const t=e("multiplier_count")
t&&j(t)}()}export default w
//# sourceMappingURL=scavenging-9f14b653.js.map
