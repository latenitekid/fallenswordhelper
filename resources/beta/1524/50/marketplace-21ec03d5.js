import{a as s}from"./addCommas-b66fde4c.js"
import{c as t}from"./closestTable-b12094ca.js"
import{f as n,p as o,z as a,B as e}from"./calfSystem-617f9a5d.js"
import"./closest-06418423.js"
let c,r,f
function i(){return c||(c=a("amount")),c}function u(n){const o=i().value
e(`<span class="fshBlue">You are offering to buy <b>${o}</b> FSP for >> <b>${s(n)}</b> (Total: ${s(function(s,t){const n=s*t
return n+Math.ceil(n/200)}(o,n))})</span>`,function(){if(!f){const s=t(i()).insertRow(2)
f=s.insertCell(0),f.colSpan="2",f.className="fshCenter"}return f}())}function l(){const s=(r||(r=a("price")),r)
if(s){const t=s.value;-1!==t.search(/^[0-9]+$/)?u(t):f&&""!==f.innerHTML&&e("",f)}}function m(){n(o,"keyup",l)}export default m
//# sourceMappingURL=marketplace-21ec03d5.js.map
