import{a as y}from"./chunk-2P7OFGRF.js";import"./chunk-PTM2JRPK.js";import{a as k}from"./chunk-CJOIYBEX.js";import{a as S}from"./chunk-MKP6263K.js";import{a as s}from"./chunk-AHVVGVUS.js";import"./chunk-LNV77PKU.js";import{a as T}from"./chunk-MNJGBU7Q.js";import{a as x}from"./chunk-QAQSNSNC.js";import{a as h}from"./chunk-C2QANIAW.js";import"./chunk-TPAH6QRT.js";import{a as M}from"./chunk-REETYBHA.js";import"./chunk-LYLBCS6U.js";import"./chunk-KCWNCERP.js";import{a as $}from"./chunk-TMKJTODZ.js";import"./chunk-JOYJSAYT.js";import{b}from"./chunk-ONUVRTHQ.js";import{a as i}from"./chunk-VMDTPM4Q.js";import{a as r}from"./chunk-XSMZ46A3.js";import"./chunk-H5HEKC7D.js";import{a as v}from"./chunk-ID3GPDDL.js";import{a as p}from"./chunk-UD6FQZRC.js";import{a as g}from"./chunk-KXU3JWGA.js";import{a as l}from"./chunk-IGVUSJ47.js";import{n as d}from"./chunk-TD2HJ4A4.js";function R(t){y(t).removeAttribute("width")}function q(t){let e=k();return s(t.parentNode,e),e}function C(t,e,n){let o=x(h(e)),u=Math.floor(o/n).toString();i(`&nbsp;&nbsp;Max: ${u} times`,t)}function G(t,e,n){i("",t);let o=Number(n.value);!T(o)&&o!==0&&C(t,e,o)}function H(t,e,n){t&&G(t,e,n)}function I(t,e,n){let o=p(H,t,e,n);o(),l(n,"keyup",o)}function E(t){R(t),I(q(t),r("statbar-gold"),r("gold"))}function f(){let t=r("multiplier_count");t&&E(t)}function a(t,e){M("lastScavPage",`${d}scavenging&cave_id=${t}&gold=${e}`)}var m;function F(){return m||(m=S(),s(b,m)),i("",m),m}function N(t){let e=t.match(/victorious/g);return e?`Victories: ${e.length}`:""}function D(t){let e=t.match(/defeated/g);return e?`, Defeated: ${e.length}`:""}function L(t,e){let n=e.match(/>([^<]+)</)[1];return t[n]=(t[n]||0)+1,t}function _(t){return t.reduce(L,{})}function w(t,e){return $(t[0],e[0])}function B(t){return`<br>${t[1]} ${t[0]}(s), `}function V(t){let e=_(t);return`<br>${t.length} item(s):${v(e).sort(w).map(B).join("")}`}function j(t){let e=t.match(/Item Gained: <b>[^<]+<\/b>/g);return e?V(e):""}function A(){let t="",e=r("scavenge_results");if(e){let n=e.innerHTML;t+=N(n),t+=D(n),t+=j(n)}return t}function P(t){return function(n,o,u){t(n,o,u),a(u,o),i(A(),F())}}function c(){let t=sendRequest;g(t)&&(sendRequest=P(t))}function W(){c(),f()}export{W as default};
//# sourceMappingURL=scavenging-6UNRSEA7.js.map
