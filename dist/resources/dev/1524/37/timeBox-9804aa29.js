import{K as e,a8 as t,ax as a}from"./calfSystem-5d0c721b.js"
import{i as r}from"./intValue-0e97c9b9.js"
import{v as s}from"./valueText-5c4b34ff.js"
import{p as o}from"./padZ-c46e4c30.js"
function n(t){return r(s(e(t)))}function m(e,r){const s=/([0-9]+)m ([0-9]+)s/.exec(e)
var n
if(s)return`<dd>${n=new Date(t+1e3*(60*(60*r+Number(s[1]))+Number(s[2]))),`${o(n.getHours())}:${o(n.getMinutes())} ${n.toLocaleString("en",{weekday:"short"})} ${o(n.getDate())}/${a[n.getMonth()]}/${n.getFullYear()}`}</dd>`}export{n as a,m as t}
//# sourceMappingURL=timeBox-9804aa29.js.map
