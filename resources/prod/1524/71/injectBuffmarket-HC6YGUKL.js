import{a as k}from"./chunk-635HH3IV.js";import{a as B}from"./chunk-X75FEMBZ.js";import"./chunk-2QZLLP35.js";import{a as y}from"./chunk-ATJNJQBM.js";import{a as g}from"./chunk-4LDTGQHK.js";import"./chunk-FT2ROHKC.js";import{a as n}from"./chunk-BXQIUVYR.js";import{a as b}from"./chunk-QFHM7M2T.js";import{a as f}from"./chunk-5M2GNHT7.js";import"./chunk-266NJ6OG.js";import"./chunk-MG2N7BBA.js";import"./chunk-OY4YNTS2.js";import{b as l}from"./chunk-M4Q7DLXY.js";import{a}from"./chunk-IREX4RC5.js";import"./chunk-PZSZ5776.js";import"./chunk-FWZ3N5X6.js";import"./chunk-ZF2KHET3.js";import{a as p}from"./chunk-RTNCMQDY.js";import"./chunk-W2IKWP7C.js";import"./chunk-BGXI65HS.js";import{a as d}from"./chunk-2HQGE3TS.js";import"./chunk-4Z3DF3VU.js";import"./chunk-32RSWJFF.js";import{a as c}from"./chunk-QKRGEODM.js";import"./chunk-CRFRZPAJ.js";import"./chunk-F3362XCG.js";async function s(t){let e=await f({cmd:"buffmarket",subcmd:"buy",id:t}),r=B(e);return r==="Request accepted - buffs have automatically been cast."?{s:!0}:{s:!1,e:{message:r}}}function i(t){return g({cmd:"buffmarket",...t})}function u(t){return i({subcmd:"buy",id:t})}function m(t){return y(u,s,t)}async function x(t,e){e.preventDefault(),a('<div class="fshWaiting">Loading...</div>',t);let r=k(new FormData(e.target)),o=b(await f(r)),h=n("#buff-results",o).parentElement.innerHTML;a(h,t)}function v(t){let e=document.forms[0];c(e,"submit",p(x,t.parentNode))}async function w(t){t.stopPropagation();let e=t.target.getAttribute("onclick").match(/id=([0-9]+)/)?.[1];if(e){let r=t.target.parentNode;r.className="fshActionRow",a('<div class="fshSpin"><span class="fshSpinner"></span></div>',r);let o=await m(e);o.s?a('<span class="fshBuffSuccess">Buffs have been applied</span>',r):a(`<span class="fshBuffFail">${o.e.message}</span>`,r)}}function A(t){t.target.tagName==="INPUT"&&t.target.value==="Buy"&&w(t)}function D(){let t=n("#buff-results");!t||(v(t),d(l,A,!0))}export{D as default};
//# sourceMappingURL=injectBuffmarket-HC6YGUKL.js.map
