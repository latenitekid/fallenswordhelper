import{t as n}from"./calfSystem-71b9378d.js"
import{e as t}from"./errorDialog-c0c5c278.js"
import{i as r}from"./indexAjaxJson-fd3c427d.js"
import{d as e}from"./dialog-294b8a9c.js"
import{a as o,e as u,u as i}from"./useItem-deb0413c.js"
import{g as c}from"./guildInventory-f3c5b696.js"
function s(n){return n}function a(t,r,e){return t(r).then(n(s,e))}function f(n,t,r){return function(n,t,r){return c({subcmd2:"recall",id:n,player_id:t,mode:r})}(n,t,r)}function m(n,t,r){const e=r.items[r.items.length-1].a
return"wear"===n?a(u,e,t):"use"===n?a(i,e,t):void 0}function d(t,e){return 0===e.r&&"recall"!==t?r({cmd:"profile",subcmd:"fetchinv"}).then(n(m,t,e)):e}function l(r,e,u,i){return function(n,t,r){return f(n,t,r).then(o)}(r,e,u).then(t).then(n(d,i))}function h(n,t){return 0===t.r&&"take"!==n?function(n,t){return"wear"===n?a(u,t.b,t):"use"===n?a(i,t.b,t):void 0}(n,t):t}function b(t,o){return function(n){return r({cmd:"guild",subcmd:"inventory",subcmd2:"takeitem",guildstore_id:n,ajax:1}).then(e)}(t).then(n(h,o))}let p
function j(){return p||(p=Promise.resolve()),p}function g(t,r){return p=j().then(n(b,t,r)),p}function v(t,r,e,o){return p=j().then(n(l,t,r,e,o)),p}export{v as a,g as q}
//# sourceMappingURL=queue-34449eec.js.map