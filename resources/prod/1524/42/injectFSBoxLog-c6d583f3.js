import{c as s}from"./createSpan-2658e7cc.js"
import{z as n,j as a,i as t,o as e,h as o,b as c,C as i,aj as f,W as r,X as l,bT as b,K as m}from"./calfSystem-15b00143.js"
import{g as h,s as x}from"./idb-1c9eb1ac.js"
function p(s){let a=function(s){return s||""}(s)
const t=m("message",n("minibox-fsbox"))[0].innerHTML
a.indexOf(t)<0&&(a=`<br>${t}${a}`),a.length>1e4&&(a=a.substring(0,1e4)),x("fsh_fsboxcontent",a)}function u(){r("injectFSBoxLog","injectFsBoxContent"),l(b)}function g(n){const a=n.lastElementChild
t(a,"<br>"),function(s){let n=c("a",s)
0!==n.length&&(h("fsh_fsboxcontent").then(p),n=i(n[0]),t(s,`<span class="fshPaleVioletRed">[ <a href="${f}${n}">Ignore</a> ]</span> `))}(a)
const r=s({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
e(r,u),o(a,r)}function j(){const s=n("minibox-fsbox")
a()&&s&&g(s)}export default j
//# sourceMappingURL=injectFSBoxLog-c6d583f3.js.map
