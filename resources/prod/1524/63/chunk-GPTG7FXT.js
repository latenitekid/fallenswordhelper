import{a as k,b as y}from"./chunk-43L5JEZD.js";import{a as w}from"./chunk-LRTJ7GLJ.js";import{a as b}from"./chunk-IS2QR6PF.js";import{a as L}from"./chunk-M3X5UDL3.js";import{a as C}from"./chunk-AHVVGVUS.js";import{a as i}from"./chunk-TSPZQ2SO.js";import{a as c}from"./chunk-FJUNK3QD.js";import{a as h}from"./chunk-REETYBHA.js";import{a as d}from"./chunk-ID3GPDDL.js";import{a as m}from"./chunk-UD6FQZRC.js";import{a as g}from"./chunk-VYZGJOFZ.js";import{b as l}from"./chunk-55VGZ4O3.js";import{Ma as p}from"./chunk-TD2HJ4A4.js";function s(){return i("#pCC > table:last-of-type")}var f,a;function x(t){return["Chat","Leader"].includes(t)?i("#pCC table table table table"):s()}function S(t,r){return t>20&&r<=a}function $(t){return l(t)||f}function T(t,r){let o="old",e=w(c(r.cells[t])),n=(f-e)/(1e3*60);return S(n,e)||(e>a?o="new":o="seen"),[r,o]}function B(t,r){t==="Chat"&&r.filter(([,o])=>o!=="old").map(([o])=>i(p,o)).forEach(k)}function D(t,[r,o]){let e=r.rowIndex+1;return t[o]?t[o]={min:Math.min(t[o].min,e),max:Math.max(t[o].min,e)}:t[o]={min:e,max:e},t}function M(t,[r,{min:o,max:e}]){return`.fshLogColoring tr:nth-of-type(${t}n+${o}):nth-of-type(-${t}n+${e}) {background-color: ${r==="old"?"#CD9E4B":"#F5F298"};}`}function U(t,r){let o=t==="Chat"?4:2;return d(r.filter(([,e])=>e!=="seen").reduce(D,{})).map(m(M,o))}function E(t,r,o,e){let n=L(o.rows,e,0).map(m(T,r));B(t,n);let u=U(t,n);u.length&&C(document.body,b(u.join(`
`)))}function R(t,r,o,e){o.classList.add("fshLogColoring"),f=new Date().setUTCSeconds(0,0)-1;let n=`last${t}Check`;a=$(n),E(t,r,o,e),g(o,y),h(n,f)}function q(t,r,o){if(!l("enableLogColoring"))return;let e=x(t);e&&R(t,r,e,o)}export{s as a,q as b};
//# sourceMappingURL=chunk-GPTG7FXT.js.map
