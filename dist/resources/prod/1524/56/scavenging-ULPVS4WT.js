import{a as x}from"./chunk-VXPED75B.js";import{a as I}from"./chunk-U4LVETBA.js";import{a as E}from"./chunk-2ON4JKLP.js";import{a as y}from"./chunk-EQ6XPZXK.js";import"./chunk-7ET2CA5W.js";import{a as M}from"./chunk-ZQ6Q7AAO.js";import"./chunk-XBQPITPX.js";import{b}from"./chunk-GD4HMFZG.js";import{a as T}from"./chunk-ARPWTZYO.js";import"./chunk-XIQH4POZ.js";import"./chunk-GJHRXFGS.js";import{a as g}from"./chunk-IXP25ZKY.js";import{a as u}from"./chunk-6RYYSQKY.js";import{a as v}from"./chunk-OMKWEQGC.js";import"./chunk-NRM2IEBO.js";import{a as m}from"./chunk-6UGBR7LD.js";import{a as l}from"./chunk-HSGQLATB.js";import{a as r}from"./chunk-VYOJRJTP.js";import"./chunk-IZEIZGGY.js";import"./chunk-H4RRBTG7.js";import{a as S}from"./chunk-D4RSYPIY.js";import{a as h}from"./chunk-S2PPJ2GD.js";import{l as d}from"./chunk-XSTNX5IW.js";import"./chunk-UVCMQZY6.js";import{a as p}from"./chunk-NGIDL4MJ.js";function $(t){T(t).removeAttribute("width")}function k(t){let e=I();return u(t.parentNode,e),e}function F(t,e,o){let n=x(h(e)),s=Math.floor(n/o).toString();m(`&nbsp;&nbsp;Max: ${s} times`,t)}function H(t,e,o){m("",t);let n=Number(o.value);!y(n)&&n!==0&&F(t,e,n)}function R(t,e,o){t&&H(t,e,o)}function q(t,e,o){let n=p(R,t,e,o);n(),l(o,"keyup",n)}function C(t){$(t),q(k(t),r("statbar-gold"),r("gold"))}function c(){let t=r("multiplier_count");t&&C(t)}function a(t,e){M("lastScavPage",`${d}scavenging&cave_id=${t}&gold=${e}`)}var i;function N(){return i||(i=v(),u(b,i)),m("",i),i}function G(t){let e=t.match(/victorious/g);return e?`Victories: ${e.length}`:""}function B(t){let e=t.match(/defeated/g);return e?`, Defeated: ${e.length}`:""}function D(t,e){let o=e.match(/>([^<]+)</)[1];return t[o]=(t[o]||0)+1,t}function L(t){return t.reduce(D,{})}function V(t,e){return E(t[0],e[0])}function _(t){return`<br>${t[1]} ${t[0]}(s), `}function w(t){let e=L(t);return`<br>${t.length} item(s):${S(e).sort(V).map(_).join("")}`}function j(t){let e=t.match(/Item Gained: <b>[^<]+<\/b>/g);return e?w(e):""}function A(){let t="",e=r("scavenge_results");if(e){let o=e.innerHTML;t+=G(o),t+=B(o),t+=j(o)}return t}function P(t){return function(o,n,s){t(o,n,s),a(s,n),m(A(),N())}}function f(){let t=sendRequest;g(t)&&(sendRequest=P(t))}function W(){f(),c()}export{W as default};
//# sourceMappingURL=scavenging-ULPVS4WT.js.map