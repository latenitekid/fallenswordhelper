import{a as s}from"./chunk-OAZI2S4Y.js";import{a as i}from"./chunk-VAQJPTXA.js";import{a as e}from"./chunk-N47W3DMT.js";import{a as f,b as a}from"./chunk-QL5YK4M4.js";import{a as n}from"./chunk-TISVYXYU.js";async function l(t){let r=await s(i(),t),o=r&&{...r,lastUpdate:e()};return a("fsh_selfProfile",o),o}var m=t=>e()-n.allyEnemyOnlineRefreshTime>t?.lastUpdate;function p(t){return m(t)?l():t}async function c(t){if(t)return l(t);let r=await f("fsh_selfProfile");return p(r)}export{c as a};
//# sourceMappingURL=chunk-RK46SY6J.js.map