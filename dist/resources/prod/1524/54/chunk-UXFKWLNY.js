import{a as w}from"./chunk-DKVOK45R.js";import{A as B,F as E,I as F,J as I,K as J,L as y,M as x,N as q,T as K,U as L,a as m,b as C,c as D,d as b,f as S,h as G,n as H,o as h,p as v,q as A,s as k,t as M,v as N,w as R,y as _}from"./chunk-3UYX2GUA.js";var p=[];function X(r,n){return{subscribe:T(r,n).subscribe}}function T(r,n=m){let i,e=new Set;function t(u){if(b(r,u)&&(r=u,i)){let l=!p.length;for(let o of e)o[1](),p.push(o,r);if(l){for(let o=0;o<p.length;o+=2)p[o][0](p[o+1]);p.length=0}}}function s(u){t(u(r))}function c(u,l=m){let o=[u,l];return e.add(o),e.size===1&&(i=n(t)||m),u(r),()=>{e.delete(o),e.size===0&&(i(),i=null)}}return{set:t,update:s,subscribe:c}}function re(r,n,i){let e=!Array.isArray(r),t=e?[r]:r,s=n.length<2;return X(i,c=>{let u=!1,l=[],o=0,f=m,z=()=>{if(o)return;f();let a=n(e?l[0]:l,c);s?c(a):f=D(a)?a:m},V=t.map((a,g)=>S(a,W=>{l[g]=W,o&=~(1<<g),u&&z()},()=>{o|=1<<g}));return u=!0,z(),function(){C(V),f()}})}var d=T("");function O(r){let n,i,e,t,s,c,u;return{c(){n=k("div"),i=k("p"),e=M(r[0]),_(i,"class","svelte-1v0rgfy"),_(n,"role","alert"),_(n,"class","svelte-1v0rgfy")},m(l,o){v(l,n,o),h(n,i),h(i,e),s=!0,c||(u=R(n,"click",r[3]),c=!0)},p(l,o){(!s||o&1)&&B(e,l[0])},i(l){s||(F(()=>{t||(t=q(n,w,{delay:250,duration:300,x:0,y:-100,opacity:.5},!0)),t.run(1)}),s=!0)},o(l){t||(t=q(n,w,{delay:250,duration:300,x:0,y:-100,opacity:.5},!1)),t.run(0),s=!1},d(l){l&&A(n),l&&t&&t.end(),c=!1,u()}}}function Y(r){let n,i,e=r[1]&&O(r);return{c(){e&&e.c(),n=N()},m(t,s){e&&e.m(t,s),v(t,n,s),i=!0},p(t,[s]){t[1]?e?(e.p(t,s),s&2&&y(e,1)):(e=O(t),e.c(),y(e,1),e.m(n.parentNode,n)):e&&(I(),x(e,1,1,()=>{e=null}),J())},i(t){i||(y(e),i=!0)},o(t){x(e),i=!1},d(t){e&&e.d(t),t&&A(n)}}}function Z(r,n,i){let e;G(r,d,o=>i(0,e=o));let{ms:t=3e3}=n,s,c,u=(o,f)=>{clearTimeout(c),o?(i(1,s=!0),f>0&&(c=setTimeout(()=>{i(1,s=!1),H(d,e="",e)},f))):i(1,s=!1)};E(()=>clearTimeout(c));let l=()=>{i(1,s=!1)};return r.$$set=o=>{"ms"in o&&i(2,t=o.ms)},r.$$.update=()=>{if(r.$$.dirty&5){e:u(e,t)}},[e,s,t,l]}var P=class extends L{constructor(n){super();K(this,n,Z,Y,b,{ms:2})}},Q=P;var U;function j(){if(!U)return U=!0,new Q({target:document.body})}function $(r){r&&(j(),d.set(r))}export{T as a,re as b,$ as c};
//# sourceMappingURL=chunk-UXFKWLNY.js.map
