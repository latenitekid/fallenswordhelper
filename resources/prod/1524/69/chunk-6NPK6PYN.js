import{a as m}from"./chunk-CBKI7QWO.js";import{a as k}from"./chunk-DCNREWNM.js";import{a as f}from"./chunk-RYN4LMXV.js";import{a as p}from"./chunk-4RYOLX4Q.js";import{a as o}from"./chunk-R6RBH5KQ.js";import{a as y}from"./chunk-ZS4UMFEX.js";import{a as d}from"./chunk-NMJUS4XE.js";import{b as l}from"./chunk-2XKHMDYT.js";import{a as c}from"./chunk-L4MPHVE4.js";import{Ma as u,g as i,h as s}from"./chunk-RRAQGRWM.js";var v=r=>Number(o(m(r).cells[4]).replaceAll(",","")),x=r=>Number(s.exec(r.href)[1]),N=r=>Number(/Level:.+?(\d+)/.exec(r)[1]),g=r=>o(m(r).cells[3]),_=r=>Number(/VL:.+?(\d+)/.exec(r)[1]);function A(r){let t=i.exec(r),n=Number(t[1]),e=Number(t[2])+n*24,a=Number(t[3])+e*60,b=Number(t[4])+a*60;return l-b}function T(r){return{guild_xp:v(r),id:x(r),name:o(r),rank:g(r)}}function h(r){let t=r.match(/Stamina:<\/td><td>(\d{1,12}) \/ (\d{1,12})<\/td>/);return{current_stamina:Number(t[1]),last_activity:A(r),level:N(r),max_stamina:Number(t[2]),vl:_(r)}}function E(r){return{guild_id:y(),image_version:0,xp:-1,...T(r),...h(r.dataset.tipped)}}function I(r,t,n){return{id:n,members:r.filter(e=>e.rank===t.rank),name:t.rank,permissions:0,tax:-1}}async function L(){let r=await f(),n=d(r).getElementById("pCC"),e=p(u,n).map(E);return{r:k(e,"rank").map(c(I,e)),s:!0}}export{L as a};
//# sourceMappingURL=chunk-6NPK6PYN.js.map
