import{a as n}from"./chunk-7OKLUWP5.js";import{a as g}from"./chunk-FEU64ZQ2.js";import{a as x}from"./chunk-F5CNMYJN.js";import{a as v}from"./chunk-X75FEMBZ.js";import"./chunk-2QZLLP35.js";import{a as h}from"./chunk-7HDLZ5CV.js";import"./chunk-MN34DQ5N.js";import{a as B}from"./chunk-ATJNJQBM.js";import"./chunk-4LDTGQHK.js";import"./chunk-FT2ROHKC.js";import"./chunk-AAKGI7XG.js";import{a as c}from"./chunk-2LTPNSL3.js";import{a as l}from"./chunk-PG36KHEO.js";import"./chunk-43UR6VCT.js";import{a as p}from"./chunk-4NEU57T5.js";import"./chunk-GL73P6T3.js";import"./chunk-QFHM7M2T.js";import{a as d}from"./chunk-5M2GNHT7.js";import"./chunk-266NJ6OG.js";import"./chunk-MG2N7BBA.js";import"./chunk-OY4YNTS2.js";import{a}from"./chunk-IREX4RC5.js";import{a as o}from"./chunk-PZSZ5776.js";import"./chunk-FWZ3N5X6.js";import"./chunk-ZF2KHET3.js";import{a as u}from"./chunk-RTNCMQDY.js";import"./chunk-W2IKWP7C.js";import"./chunk-BGXI65HS.js";import{a as s}from"./chunk-2HQGE3TS.js";import"./chunk-4Z3DF3VU.js";import"./chunk-32RSWJFF.js";import"./chunk-QKRGEODM.js";import"./chunk-SUDOEZJL.js";import"./chunk-CRFRZPAJ.js";import"./chunk-F3362XCG.js";function k(e){let t=v(e);return t?{e:{message:t},s:!1}:{s:!0}}function i(e){return d({cmd:"profile",subcmd:"unequipitem",inventory_id:e}).then(k)}function m(e){return x({subcmd:"unequipitem",inventory_id:e})}function f(e){return B(m,i,e)}var r;function q(e,t){t&&t.s&&a("",e.parentNode)}function E(e){let t=/inventory_id=(\d+)/.exec(e.href)[1];t&&f(t).then(u(q,e))}function N(){h("profile","nekidBtn");let e=r.nextElementSibling;p("a",e).forEach(E)}function b(){let e=c({className:"fshCenter"}),t=g({className:"fshBl fshBls",textContent:"Nekid"});return n(e,"[ "),l(e,t),n(e," ]"),s(t,N),e}function y(){if(r=o("profileCombatSetDiv"),!r)return;let e=r.parentNode.nextElementSibling,t=b();o("profileRightColumn").replaceChild(t,e)}export{y as default};
//# sourceMappingURL=nekidBtn-VGOVK3R5.js.map
