import{t,c as n,aS as r,a4 as e,aT as s}from"./calfSystem-cf4d22a7.js"
import{c as u}from"./currentGuildId-5763962b.js"
import{g as o,s as i}from"./idb-4798970d.js"
import{c as m}from"./cmdExport-b7dc8f76.js"
function c(t,n){const r=n||{}
i("fsh_membrList",$.extend(r,t))}function a(n){return o("fsh_membrList").then(t(c,n)),n}function f(t,n){const s=r(n.map(t=>[t.username,t]))
return{[t]:{lastUpdate:e,...s}}}function d(n){return function(t){return m({guild_id:t,subcmd:"guild_members"})}(n).then(t(f,n))}function b(t){return d(t).then(a)}const p=[(t,n)=>n,(t,n)=>s(n),(t,n)=>s(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e-3e5]
function h(t,n,r){return r(t,n)}function l(n,r){return function(n,r){return p.every(t(h,n,r))}(n,r)?r:b(n)}function g(t,r){return n.membrList=r[t],n.membrList}function j(n){const r=u()
return r?function(n,r){return n?b(r):o("fsh_membrList").then(t(l,r))}(n,r).then(t(g,r)):Promise.reject(new Error("no guild id"))}export{j as g}
//# sourceMappingURL=getMembrList-5556413d.js.map