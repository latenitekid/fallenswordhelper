import{a as c}from"./chunk-6MWRNEBW.js";import{a as y}from"./chunk-BZRDUDS7.js";import{a as u}from"./chunk-JGFZLKTI.js";import{a}from"./chunk-ON76EM3G.js";import{a as f}from"./chunk-B3Y6PSMQ.js";import{a as s}from"./chunk-QRS6GHYV.js";import{a as o}from"./chunk-QVWND6LG.js";import{a as m}from"./chunk-BYHOBLWC.js";var p=e=>e.username,r=null;async function E(){let e=await y(!1);return(!e||!e._allies||!e._enemies)&&m(`myStats returned ${u(e)}`),{...e?._allies&&{_allies:e._allies.map(p)},...e?._enemies&&{_enemies:e._enemies.map(p)}}}function d(){return r||(r=E()),r}async function _(e){return(await d())._allies?.includes(e)}async function g(e){return(await d())._enemies?.includes(e)}var n=null;async function M(){return o(await c(!1)).filter(([,e])=>s(e)).map(([e])=>e)}async function l(e){return f()&&!n&&(n=M()),(await n)?.includes(e)}async function b(e){let t="",i=a(e),[w,x,P]=await Promise.all([l(i),_(i),g(i)]);return w?t="guild":x?t="ally":P&&(t="enemy"),[e,t]}export{l as a,b};
//# sourceMappingURL=chunk-YCYG7PHJ.js.map