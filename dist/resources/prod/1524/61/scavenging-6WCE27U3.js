import{a as T}from"./chunk-GA3UTCE6.js";import"./chunk-ZADLNAUM.js";import{a as I}from"./chunk-2W33ZJXK.js";import{a as v}from"./chunk-4JAOIN2Q.js";import"./chunk-NRF5E4NM.js";import{a as u}from"./chunk-EERRLM6T.js";import{a as E}from"./chunk-M74LU33Y.js";import{a as M}from"./chunk-5SB6JHBH.js";import{a as h}from"./chunk-SRR4B7GE.js";import"./chunk-RZ3TV2NA.js";import{a as y}from"./chunk-GN5NA7YF.js";import"./chunk-Y4CNOL4E.js";import"./chunk-QCFSLNAO.js";import{a as x}from"./chunk-7JARIBP6.js";import"./chunk-V75REFMA.js";import{b}from"./chunk-ZTLAKSAF.js";import{a as m}from"./chunk-BRIPXERW.js";import{a as r}from"./chunk-A5UFVDS4.js";import"./chunk-TBHB36S6.js";import{a as S}from"./chunk-L35RWJ6D.js";import{a as p}from"./chunk-3XARJZUK.js";import{a as g}from"./chunk-MWD4X6Z5.js";import{a as l}from"./chunk-GWVOQB64.js";import{n as d}from"./chunk-I67LU25W.js";function $(t){T(t).removeAttribute("width")}function k(t){let e=I();return u(t.parentNode,e),e}function F(t,e,o){let n=M(h(e)),s=Math.floor(n/o).toString();m(`&nbsp;&nbsp;Max: ${s} times`,t)}function H(t,e,o){m("",t);let n=Number(o.value);!E(n)&&n!==0&&F(t,e,n)}function R(t,e,o){t&&H(t,e,o)}function q(t,e,o){let n=p(R,t,e,o);n(),l(o,"keyup",n)}function C(t){$(t),q(k(t),r("statbar-gold"),r("gold"))}function c(){let t=r("multiplier_count");t&&C(t)}function a(t,e){y("lastScavPage",`${d}scavenging&cave_id=${t}&gold=${e}`)}var i;function N(){return i||(i=v(),u(b,i)),m("",i),i}function G(t){let e=t.match(/victorious/g);return e?`Victories: ${e.length}`:""}function B(t){let e=t.match(/defeated/g);return e?`, Defeated: ${e.length}`:""}function D(t,e){let o=e.match(/>([^<]+)</)[1];return t[o]=(t[o]||0)+1,t}function L(t){return t.reduce(D,{})}function V(t,e){return x(t[0],e[0])}function _(t){return`<br>${t[1]} ${t[0]}(s), `}function w(t){let e=L(t);return`<br>${t.length} item(s):${S(e).sort(V).map(_).join("")}`}function j(t){let e=t.match(/Item Gained: <b>[^<]+<\/b>/g);return e?w(e):""}function A(){let t="",e=r("scavenge_results");if(e){let o=e.innerHTML;t+=G(o),t+=B(o),t+=j(o)}return t}function P(t){return function(o,n,s){t(o,n,s),a(s,n),m(A(),N())}}function f(){let t=sendRequest;g(t)&&(sendRequest=P(t))}function W(){f(),c()}export{W as default};
//# sourceMappingURL=scavenging-6WCE27U3.js.map
