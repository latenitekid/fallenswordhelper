import{C as t,m as n,g as e,G as o,M as r,y as s}from"./calfSystem-71b9378d.js"
import{n as i}from"./numberIsNaN-929de7af.js"
import{s as a}from"./setTipped-64e874d6.js"
function f(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}const c=98,p=85,d=60
function m(t){return Number(r(s("stat-"+t.toLowerCase()).childNodes).filter(f).map(o).join(""))}function u(t){const r=n({innerHTML:t.dataset.tipped}),s=e("b",r).map(t=>o(t)),f=m(s[2])
i(f)||function(t,n,e){const o=m(n[3]),r=Math.floor(e*(Number(n[1].replace(/[+%]/g,""))/100))
a(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(r)}<br>${n[2]}: ${String(e-r)}&nbsp;&nbsp;${n[3]}: ${String(o+r)}$&`),t)}(t,s,f)}function b(n){const e=t(`#profileRightColumn img[src$="/${String(n)}.png"]`)
e&&u(e)}function g(){[c,p,d].forEach(b)}export default g
//# sourceMappingURL=updateBuffs-485b29f6.js.map