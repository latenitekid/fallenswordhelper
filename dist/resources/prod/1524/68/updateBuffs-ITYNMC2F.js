import{a as d}from"./chunk-ICJDOKSD.js";import{a as c}from"./chunk-NU3FAJPR.js";import"./chunk-D2JB7FXL.js";import{a as s}from"./chunk-MBVAIUY2.js";import{a as i}from"./chunk-UDXGWZTN.js";import"./chunk-EDHTZZNH.js";import{a as u}from"./chunk-UAYXUP6O.js";import{a as p}from"./chunk-OY6KZ2QA.js";import"./chunk-NTPHAESD.js";import"./chunk-Z4KFCZCK.js";import"./chunk-KQSUJNSJ.js";import"./chunk-4MZMNEIX.js";import{a as m}from"./chunk-RC2D6Q5A.js";import"./chunk-527CNM4N.js";import"./chunk-6IX4R32K.js";import"./chunk-UG5BYLND.js";import{a}from"./chunk-MWERZPAU.js";function f(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}var N=98,l=85,T=60;function g(t){return Number(a(m(`stat-${t.toLowerCase()}`).childNodes).filter(f).map(i).join(""))}function E(t,r,e){let n=g(r[3]),o=Math.floor(e*(Number(r[1].replace(/[+%]/g,""))/100));d(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(o)}<br>${r[2]}: ${String(e-o)}&nbsp;&nbsp;${r[3]}: ${String(n+o)}$&`),t)}function $(t){let r=c({innerHTML:t.dataset.tipped}),e=p("b",r).map(o=>i(o)),n=g(e[2]);u(n)||E(t,e,n)}function y(t){let r=s(`#profileRightColumn img[src$="/${String(t)}.png"]`);r&&$(r)}function S(){[N,l,T].forEach(y)}export{S as default};
//# sourceMappingURL=updateBuffs-ITYNMC2F.js.map