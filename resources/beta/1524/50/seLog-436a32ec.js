import{x as t,$ as n,U as e,t as o}from"./calfSystem-617f9a5d.js"
import{g as s,s as r}from"./idb-443c992c.js"
function c(){return t({cmd:"superelite"})}let i,u,a
function f(){u&&(window.clearTimeout(u),u=!1),a&&(window.clearInterval(a),a=!1)}function l(t,n){const e=t-n.time,o=n.creature.name.replace(" (Super Elite)","");(!i.se[o]||i.se[o]<e)&&(i.se[o]=e)}function m(t){(function(t){return t&&t.t})(t)&&function(t){const n=Number(t.t.split(" ")[1])
i||(i={lastUpdate:0,se:{}}),i.lastUpdate=n
const e=t.r
e&&(e.forEach(o(l,n)),r("fsh_seLog",i))}(t)}function d(){return n(c).then(m)}function p(){return f(),a=window.setInterval(d,3e5),d()}function w(){const t=e-(i&&i.lastUpdate||0)
t>=600?p():u=window.setTimeout(p,1e3*(600-t))}function h(t){t&&(i=t)}function U(){return s("fsh_seLog").then(h)}function g(){U().then(w)}export{f as disableBackgroundChecks,p as doBackgroundCheck,U as getFshSeLog,i as oldLog,g as seLog}
//# sourceMappingURL=seLog-436a32ec.js.map
