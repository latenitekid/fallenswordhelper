import{a as b}from"./chunk-Y2SEPB2Y.js";import"./chunk-C7GK3Y3O.js";import{a as k}from"./chunk-SNJY6WFE.js";import{a as g}from"./chunk-M3LPAC6D.js";import{a as s}from"./chunk-72MVKJE4.js";import{a as d}from"./chunk-SGQ7A427.js";import"./chunk-66N7ZJ75.js";import{a as c}from"./chunk-COVFZC6T.js";import{a as p}from"./chunk-TGDLGIAS.js";import"./chunk-V7YJKIIO.js";import"./chunk-PD6SZCQT.js";import"./chunk-WO4JQIFY.js";import{a}from"./chunk-N6BPKERE.js";import"./chunk-CWXW6BIP.js";import"./chunk-B4ELP4GT.js";import"./chunk-YWEOEFMO.js";import{a as l}from"./chunk-KEMOKZCE.js";import{a as m}from"./chunk-EGI62KCW.js";import"./chunk-XFCSBA6U.js";import"./chunk-4L4BW6XC.js";import{a as r}from"./chunk-6OIRWEPN.js";import"./chunk-DA7DPQEG.js";import"./chunk-26GFOSBF.js";import{a as u}from"./chunk-EQLDKUD6.js";import"./chunk-WAWYOTCQ.js";import"./chunk-LYEPPGHA.js";import"./chunk-EHGMFAOI.js";import"./chunk-J2ILMRN6.js";import"./chunk-ZDQ6OSIO.js";async function f(t){let e=await a({cmd:"profile",subcmd:"removeskill",skill_id:t}),o=d(e);return o==="Skill de-activated successfully."?{s:!0}:{s:!1,e:{message:o}}}function i(t){return s({subcmd:"removeskill",skill_id:t})}function n(t){return p(i,f,t)}function v(t,e){e&&e.s&&l("",t.parentNode)}function h(t,e){if(t){c("profile","doDebuff");let o=e.href.match(/=(\d{1,3})$/)[1];n(o).then(b).then(r(v,e))}else k(e.href)}function x(t){let e=t;return e.tagName==="IMG"&&(g(t),e=e.parentNode),e}function D(t){t.eventPhase===1&&t.stopPropagation()}function A(t,e){if(!e.returnValue)return;let o=x(e.target);o.tagName==="A"&&(D(e),e.preventDefault(),h(t,o))}function I(t,e){let o=m("profileRightColumn");o&&u(o.lastElementChild,r(A,t),e)}export{I as default};
//# sourceMappingURL=debuff-3NFA4SRO.js.map
