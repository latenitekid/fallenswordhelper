import{a as l,b as p}from"./chunk-TJBCPJPP.js";import{a as s}from"./chunk-Q4VJYAIW.js";import{a as i}from"./chunk-YSBBZLBI.js";import{a as m}from"./chunk-TEFHJKMD.js";import{a as u}from"./chunk-DRKQTEJS.js";import{a as n}from"./chunk-ILQHWW7D.js";function r(t){let e=p(t);return e?e.id:-1}var j=({successBuff:t,successLevel:e})=>({id:r(t),level:Number(e)}),q=(t,e)=>t.filter(({name:f,successBuff:c})=>f===e.name&&c).map(j),y=({failBuff:t,failReason:e})=>({id:r(t),reason:e}),v=({blockBuff:t,blockReason:e})=>({id:r(t),reason:e}),N=(t,e)=>t.filter(({name:f,blockBuff:c})=>f===e.name&&c).map(v),h=(t,e)=>t.filter(({name:f,failBuff:c})=>f===e.name&&c).map(y).concat(N(t,e)),A=t=>s(t,"name").map(e=>({player:{name:e.name},cast:q(t,e),failed:h(t,e)}));function O(t){let[,e,f,c,b,d,k,x,B,g]=t;return{name:c||k||x,successBuff:e,successLevel:f,failBuff:b,failReason:d,blockReason:B,blockBuff:g}}function P(t){return{r:A(t.map(O)),s:!0}}async function a(t,e){let f=await n({cmd:"quickbuff",subcmd:"activate",targetPlayers:t.join(),skills:e});return P(l(u(f)))}function o(t,e){return m({cmd:"quickbuff",subcmd:"activate",username:t,skill:e})}function Q(t,e){return i(o,a,t,e)}function R(t){return t.s&&t.r[0].casts.length===1}export{Q as a,R as b};
//# sourceMappingURL=chunk-EC4KDITL.js.map
