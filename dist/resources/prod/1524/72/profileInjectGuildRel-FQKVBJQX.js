import{a as u}from"./chunk-MHMBPBCL.js";import{a as c}from"./chunk-7KYFN3CH.js";import{a as g,b as y}from"./chunk-LBW6F4JC.js";import"./chunk-ZNEZFTK6.js";import{a as p}from"./chunk-HLVMUI2I.js";import{a as d}from"./chunk-QFH6V55R.js";import{a}from"./chunk-VTXK2OMK.js";import"./chunk-B3CGSESQ.js";import"./chunk-B57QCG7F.js";import"./chunk-QUZRJFIC.js";import"./chunk-W5R4CDPA.js";import"./chunk-XUS25RRF.js";import"./chunk-2U4UTP4T.js";import"./chunk-RJ63T2CH.js";import"./chunk-HGV77SOI.js";import{a as l}from"./chunk-RYU7Q6YO.js";import{a as s}from"./chunk-M3UVKNJS.js";import"./chunk-XSDEDFDV.js";import"./chunk-3T3NCQXQ.js";import{a as f}from"./chunk-RDROC6MQ.js";import"./chunk-JRL4EUGF.js";import"./chunk-EGI62KCW.js";import{b as m}from"./chunk-WAWYOTCQ.js";import"./chunk-LYEPPGHA.js";import"./chunk-S7INW7PN.js";import"./chunk-J2ILMRN6.js";import"./chunk-ZDQ6OSIO.js";var h=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],G=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]];function M(e){let t=p(e);return t?t.map(u).map(f):[]}function R(e){let t=G.map(([i,n])=>[M(i),n]),o=u(f(e)),r=t.find(([i])=>i.includes(o));if(r)return r[1]}function S(e){return y()?(s("guildSelf",l(e)),"self"):R(l(e))}function b(e,t){let[,o,r]=h.find(([n])=>n===t);e.parentNode.classList.add(o);let i=m(r);i&&i.length>0&&a(e.parentNode,`<br>${d(i)}`)}function x(e){let t=S(e);t&&b(e,t)}function A(){let e=g();e?x(e):c()&&s("guildSelf","")}export{A as default};
//# sourceMappingURL=profileInjectGuildRel-FQKVBJQX.js.map
