import{a as p}from"./chunk-XWKOBO5M.js";import{a as f}from"./chunk-LUUWXPPO.js";import{a as s}from"./chunk-A4YLCKLL.js";import{a as d}from"./chunk-5SXIECYR.js";import{a as m}from"./chunk-6ZR46QZG.js";import{b as l}from"./chunk-CBMSPOBL.js";import{a as i}from"./chunk-XDV7LM6Z.js";import{a as n}from"./chunk-2XKKIH7K.js";import{b as a}from"./chunk-EEF6C5L4.js";import{Na as t}from"./chunk-KWAUBU52.js";var g=e=>f(e.href);function u(e){let o=m(t,e).map(g).map(Number);return o.length&&!o.some(c=>c===s())}function y(e){e.className=""}function L(e){u(e)&&(n(e.cells).forEach(y),e.classList.add("fshGrey"),e.classList.add("fshXSmall"))}function N(e){L(e)}function h(){return i("td",l()).find(d("Message"))}function b(){let e=h();if(!e)return;let r=e.parentNode.parentNode.parentNode;e.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',p(r,3,0).forEach(N)}function G(){a("hideNonPlayerGuildLogMessages")&&b()}export{G as a};
//# sourceMappingURL=chunk-ZFCF7FQI.js.map