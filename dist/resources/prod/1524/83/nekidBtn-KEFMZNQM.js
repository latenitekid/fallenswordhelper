import{a as i}from"./chunk-QYG3GTFS.js";import{a as k}from"./chunk-33FH2J2T.js";import{a as g}from"./chunk-RUCJRVGU.js";import{a as v}from"./chunk-I36YHSHC.js";import"./chunk-P5GG6BBU.js";import{a as h}from"./chunk-XYV3WFPP.js";import"./chunk-PV2RDUUR.js";import"./chunk-H3WTYK7C.js";import{a as l}from"./chunk-3EH7LBGV.js";import{a as s}from"./chunk-DL6GUQIM.js";import"./chunk-LTRYMJWK.js";import{a as B}from"./chunk-2U7PEDGC.js";import{a as o}from"./chunk-SDVU75NC.js";import{a}from"./chunk-25OKXHAS.js";import"./chunk-A4HIMH5N.js";import"./chunk-GOGSW6S4.js";import{a as x}from"./chunk-6Z43IAS3.js";import"./chunk-FQRLW5RO.js";import"./chunk-LDDO6FQI.js";import"./chunk-FQ2MS6MU.js";import"./chunk-VGN4AH67.js";import{a as d}from"./chunk-36R4KBE3.js";import"./chunk-R46NFNRI.js";import"./chunk-5IIEF6F7.js";import{a as c}from"./chunk-IBDVBQUM.js";import"./chunk-KA75H6XT.js";import"./chunk-2H46HLMH.js";import{a as u}from"./chunk-E2T4BRJB.js";import"./chunk-42ECWD5I.js";import"./chunk-I3GZAXF5.js";import{a as p}from"./chunk-6IDEFJE7.js";import"./chunk-HBYLRJZK.js";import"./chunk-HVA3CNPK.js";import"./chunk-NIRCQTAI.js";import"./chunk-XMFVZQFS.js";import"./chunk-7R4PXCUB.js";import"./chunk-63CI2ODV.js";function n(t){return g({subcmd:"unequipitem",inventory_id:t})}function q(t){let e=v(t);return e?{e:{message:e},s:!1}:{s:!0}}function m(t){return x({cmd:"profile",subcmd:"unequipitem",inventory_id:t}).then(q)}function f(t){return h(n,m,t)}var r=0;function E(t,e){e&&e.s&&B("",t.parentNode)}function C(t){let e=p(/inventory_id=(?<id>\d+)/,t.href);e&&f(e).then(u(E,t))}function N(){c("profile","nekidBtn");let t=r.nextElementSibling;a("a",t).forEach(C)}function b(){let t=l({className:"fshCenter"}),e=k({className:"fshBl fshBls",textContent:"Nekid"});return i(t,"[ "),s(t,e),i(t," ]"),d(e,N),t}function y(){if(r=o("profileCombatSetDiv"),!r)return;let t=r.parentNode.nextElementSibling,e=b();o("profileRightColumn").replaceChild(e,t)}export{y as default};
//# sourceMappingURL=nekidBtn-KEFMZNQM.js.map
