import{a as k}from"./chunk-S77WAA2D.js";import{a as $}from"./chunk-SWGHI6EY.js";import"./chunk-V2EESBF7.js";import{a as v}from"./chunk-RCXM6IKN.js";import{a as u}from"./chunk-M23P7YNW.js";import"./chunk-3RB7HJ6G.js";import{a as M}from"./chunk-DIYPVMCF.js";import"./chunk-CFDFCOR3.js";import{b as S}from"./chunk-HZOZPFQX.js";import{a as i}from"./chunk-FH2ZQIVR.js";import{a as r}from"./chunk-ZC2VG7OL.js";import{a as T}from"./chunk-LSTBONAT.js";import{a as x}from"./chunk-ELWUFZG5.js";import{a as p}from"./chunk-HUBAYN2T.js";import"./chunk-O2AVUBO7.js";import"./chunk-QRS6GHYV.js";import{a as h}from"./chunk-QVWND6LG.js";import{a as y}from"./chunk-MCDZT6O2.js";import"./chunk-52NQXPZP.js";import{a as d}from"./chunk-XA4CEPNM.js";import"./chunk-FIOQMJU7.js";import{a as b}from"./chunk-32IJAGRN.js";import{a as g}from"./chunk-O2SP7GRB.js";import{p as l}from"./chunk-LROIQ2AY.js";function q(t){k(t).removeAttribute("width")}function G(t){let e=$();return u(t.parentNode,e),e}function H(t,e,n){let o=x(p(e)),s=Math.floor(o/n).toString();i(`&nbsp;&nbsp;Max: ${s} times`,t)}function I(t,e,n){i("",t);let o=Number(n.value);!T(o)&&o!==0&&H(t,e,o)}function E(t,e,n){t&&I(t,e,n)}function F(t,e,n){let o=b(E,t,e,n);o(),g(n,"keyup",o)}function N(t){q(t),F(G(t),r("statbar-gold"),r("gold"))}function f(){let t=r("multiplier_count");t&&N(t)}function a(t,e){y("lastScavPage",`${l}scavenging&cave_id=${t}&gold=${e}`)}var m=0;function C(){return m||(m=v(),u(S(),m)),i("",m),m}function R(t,e,n){let o=t.match(e);return o?`${n}: ${o.length}`:""}function B(t,e){let n=e.split(">")[1].split("<")[0];return t[n]=(t[n]||0)+1,t}function L(t){return t.reduce(B,{})}function _([t],[e]){return M(t,e)}function w([t,e]){return`<br>${e} ${t}(s), `}function D(t){let e=L(t);return`<br>${t.length} item(s):${h(e).sort(_).map(w).join("")}`}function j(t){let e=t.match(/Item Gained: <strong>[^<]+<\/strong>/g);return e?D(e):""}function A(){let t="",e=r("scavenge_results");if(e){let n=e.innerHTML;t+=R(n,/victorious/g,"Victories"),t+=R(n,/defeated/g,", Defeats"),t+=j(n)}return t}function P(t){return function(n,o,s){t(n,o,s),a(s,o),i(A(),C())}}function c(){let t=sendRequest;d(t)&&(sendRequest=P(t))}function V(){c(),f()}export{V as default};
//# sourceMappingURL=scavenging-URCVM4TY.js.map