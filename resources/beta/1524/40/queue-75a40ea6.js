import{t,u as n,$ as e}from"./calfSystem-ab393688.js"
import{i as r}from"./indexAjaxJson-e927e360.js"
import{a as u,e as o,u as i}from"./useItem-3d7fa70b.js"
import{e as s}from"./errorDialog-58b05366.js"
import{h as a}from"./htmlResult-01bf16ce.js"
import{g as c,t as f}from"./takeItem-d969451f.js"
function m(t){return t}function d(n,e,r){return n(e).then(t(m,r))}function l(t,e,r){return n({cmd:"guild",subcmd:"inventory",subcmd2:"recall",id:t,player_id:e,mode:r}).then(a)}function h(t,n,e){return c({subcmd2:"recall",id:t,player_id:n,mode:e})}function b(t,n,r){return function(t,n,r){return e(h,l,t,n,r)}(t,n,r).then(u)}function p(t,n,e){const r=e.items[e.items.length-1].a
return"wear"===t?d(o,r,n):"use"===t?d(i,r,n):void 0}function j(n,e){return 0===e.r&&"recall"!==n?r({cmd:"profile",subcmd:"fetchinv"}).then(t(p,n,e)):e}function v(n,e,r,u){return b(n,e,r).then(s).then(t(j,u))}function g(t,n){return 0===n.r&&"take"!==t?function(t,n){return"wear"===t?d(o,n.b,n):"use"===t?d(i,n.b,n):void 0}(t,n):n}function y(n,e){return f(n).then(t(g,e))}let x
function k(){return x||(x=Promise.resolve()),x}function w(n,e){return x=k().then(t(y,n,e)),x}function I(n,e,r,u){return x=k().then(t(v,n,e,r,u)),x}export{I as a,w as q}
//# sourceMappingURL=queue-75a40ea6.js.map