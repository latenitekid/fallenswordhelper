import{K as e,a7 as t,af as a}from"./calfSystem-26fbeaeb.js"
import{i as r}from"./intValue-f6303c59.js"
import{v as s}from"./valueText-2413577e.js"
import{p as o}from"./padZ-5c8671fc.js"
function n(t){return r(s(e(t)))}function f(e,r){const s=/([0-9]+)m ([0-9]+)s/.exec(e)
var n
if(s)return`<dd>${n=new Date(t+1e3*(60*(60*r+Number(s[1]))+Number(s[2]))),`${o(n.getHours())}:${o(n.getMinutes())} ${n.toLocaleString("en",{weekday:"short"})} ${o(n.getDate())}/${a[n.getMonth()]}/${n.getFullYear()}`}</dd>`}export{n as a,f as t}
//# sourceMappingURL=timeBox-464f7174.js.map
