import{a as u}from"./chunk-DZWEUG5H.js";import{a as f}from"./chunk-ZTA4WHWZ.js";import{a as l}from"./chunk-H26KFXOF.js";import{a as o}from"./chunk-LGWPD6VS.js";import{a as s}from"./chunk-FFFKYVLG.js";import{a as m}from"./chunk-PDSYNNV7.js";var n;async function x(){return m(await u(!1)).filter(([,e])=>s(e)).map(([e])=>e)}async function a(e){return o()&&!n&&(n=x()),(await n).includes(e)}var y=e=>e.username,t;async function c(){let e=await f(!1);return{_allies:e._allies.map(y),_enemies:e._enemies.map(y)}}async function p(e){return t||(t=c()),(await t)._allies.includes(e)}async function d(e){return t||(t=c()),(await t)._enemies.includes(e)}async function M(e){let i="",r=l(e),[g,w,_]=await Promise.all([a(r),p(r),d(r)]);return g?i="guild":w?i="ally":_&&(i="enemy"),[e,i]}export{a,M as b};
//# sourceMappingURL=chunk-BSF5MW2B.js.map
