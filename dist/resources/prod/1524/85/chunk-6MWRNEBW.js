import{a as p}from"./chunk-SVJ5ICHO.js";import{a as d}from"./chunk-ASQDDUAJ.js";import{a}from"./chunk-B3Y6PSMQ.js";import{a as o}from"./chunk-QRS6GHYV.js";import{a as m,b as s}from"./chunk-2NTPEDIZ.js";import{a as f,b as c}from"./chunk-LFT5BCCP.js";import{a as e}from"./chunk-32IJAGRN.js";import{a as i}from"./chunk-DDP3QCAT.js";function l(t,r){let n=r||{};s("fsh_membrList",$.extend(n,t))}function g(t){return m("fsh_membrList").then(e(l,t)),t}function h(t,r){if(!r)return;let n=d(r.map(u=>[u.username,u]));return{[t]:{lastUpdate:f(),...n}}}function L(t){return p(t).then(e(h,t))}function b(t){return L(t).then(g)}var M=[(t,r)=>r,(t,r)=>o(r),(t,r)=>o(r[t]),(t,r)=>typeof r[t].lastUpdate=="number",(t,r)=>r[t].lastUpdate>c()];function _(t,r,n){return n(t,r)}function F(t,r){return M.every(e(_,t,r))}function G(t,r){return F(t,r)?r:b(t)}function j(t,r){return t?b(r):m("fsh_membrList").then(e(G,r))}function v(t,r){if(r)return i.membrList=r[t],i.membrList}function U(t){let r=a();return r?j(t,r).then(e(v,r)):Promise.reject(new Error("no guild id"))}export{U as a};
//# sourceMappingURL=chunk-6MWRNEBW.js.map