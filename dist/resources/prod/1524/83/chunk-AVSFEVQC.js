import{a as s}from"./chunk-FLHETUE6.js";import{a as n}from"./chunk-RUCJRVGU.js";import{a as c}from"./chunk-XYV3WFPP.js";import{a as i}from"./chunk-ICOA7KWD.js";import{a}from"./chunk-FIS7ZMBK.js";import{a as m}from"./chunk-KA75H6XT.js";async function o(){let t=await n({subcmd:"viewcombatset"});return{...t,r:t.r.sort((e,f)=>i(e.name,f.name))}}var p=(t,e)=>e>0,u=t=>({id:Number(t.value)});async function r(){let t=await s({cmd:"profile"}),e=a('select[name="combatSetId"]',t);return e?{r:m(e.children).filter(p).map(u),s:!0}:{s:!1}}function d(){return c(o,r)}export{d as a};
//# sourceMappingURL=chunk-AVSFEVQC.js.map
