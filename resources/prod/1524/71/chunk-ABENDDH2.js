import{a as E}from"./chunk-44N4C7NX.js";import{a as u}from"./chunk-7OHOGPP4.js";import{a as h}from"./chunk-5BPP2QDO.js";import{a}from"./chunk-PZSZ5776.js";import{a as l}from"./chunk-EXS6ZFSM.js";import{a as s}from"./chunk-RTNCMQDY.js";import{a as p}from"./chunk-6EFRAPOS.js";import{a as g}from"./chunk-2HQGE3TS.js";import{a as d}from"./chunk-QKRGEODM.js";import{a as m}from"./chunk-SUDOEZJL.js";var r=[],f,i;function k(o){u(o.row)}function w(o){o.rows.forEach(k),o.open=!1}function P(o){o.open&&w(o)}function x(){r.forEach(P)}function T(o){E(o.row,!1)}function I(o){o.rows.forEach(T),o.open=!0}function F(o){o.open||I(o)}function H(){r.forEach(F)}function N(o){if(o.rowIndex%i===0)return o}function b(o){if(o.tagName==="TR")return N(o);if(o.tagName!=="TABLE")return b(o.parentNode)}function R(o){let n=b(o.target);if(!n)return;let e=n.rowIndex/i,t=r[e];t.open===!1?(x(),I(t)):w(t)}function C(o){f&&R(o)}function L(o){f&&o.classList.add("fshPoint")}function v(o,n){f?(u(o),n.open=!1):n.open=!0}function y(o,n){p(o)&&o(n)}function A(o,n,e,t){n===0&&(e.header=o,L(o),y(t.extraFn,o)),t.articleTest(n)&&(e.rows[n]=l(e[n],{}),e.rows[n].row=o,v(o,e))}function B(o,n){let e=n.rowIndex%i,t=(n.rowIndex-e)/i;r[t]=l(r[t],{});let c=r[t];c.rows=c.rows||[],A(n,e,c,o)}function V(o){o.header.classList.toggle("fshPoint")}function D(){r.forEach(V)}function j(o){f=!f,h(o,f),f?x():H(),D()}function q(o){f=a(o).checked,d(a(o),"change",s(j,o))}function z(o){i=o.headInd,q(o.prefName),m(o.theTable.rows).forEach(s(B,o)),g(o.theTable,C)}export{z as a};
//# sourceMappingURL=chunk-ABENDDH2.js.map
