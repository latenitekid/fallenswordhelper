import{a as s}from"./chunk-QXQL5NC2.js";import{a}from"./chunk-DIOS3EFN.js";import{a as f,b as i}from"./chunk-2NTPEDIZ.js";import{a as r}from"./chunk-LFT5BCCP.js";import{a as n}from"./chunk-DDP3QCAT.js";async function l(t){let e=await s(a(),t),o=e&&{...e,lastUpdate:r()};return i("fsh_selfProfile",o),o}var m=t=>r()-n.allyEnemyOnlineRefreshTime<t?.lastUpdate;function c(t){return m(t)?t:l()}async function p(t){if(t)return l(t);let e=await f("fsh_selfProfile");return c(e)}export{p as a};
//# sourceMappingURL=chunk-BZRDUDS7.js.map