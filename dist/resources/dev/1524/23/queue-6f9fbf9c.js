import{t as n}from"./calfSystem-9901ad27.js"
import{e as t}from"./errorDialog-7f431a39.js"
import{i as r}from"./indexAjaxJson-93ae4cbc.js"
import{d as e}from"./dialog-2e17f157.js"
import{a as o,e as u,u as i}from"./useItem-7736a870.js"
import{g as s}from"./guildInventory-14f039c1.js"
function a(n){return n}function c(t,r,e){return t(r).then(n(a,e))}function f(n,t,r){return function(n,t,r){return s({subcmd2:"recall",id:n,player_id:t,mode:r})}(n,t,r)}function m(n,t,r){const e=r.items[r.items.length-1].a
return"wear"===n?c(u,e,t):"use"===n?c(i,e,t):void 0}function d(t,e){return 0===e.r&&"recall"!==t?r({cmd:"profile",subcmd:"fetchinv"}).then(n(m,t,e)):e}function l(r,e,u,i){return function(n,t,r){return f(n,t,r).then(o)}(r,e,u).then(t).then(n(d,i))}function h(n,t){return 0===t.r&&"take"!==n?function(n,t){return"wear"===n?c(u,t.b,t):"use"===n?c(i,t.b,t):void 0}(n,t):t}function p(t,o){return function(n){return r({cmd:"guild",subcmd:"inventory",subcmd2:"takeitem",guildstore_id:n,ajax:1}).then(e)}(t).then(n(h,o))}let j
function b(){return j||(j=Promise.resolve()),j}function g(t,r){return j=b().then(n(p,t,r)),j}function v(t,r,e,o){return j=b().then(n(l,t,r,e,o)),j}export{v as a,g as q}
//# sourceMappingURL=queue-6f9fbf9c.js.map