import{a as x}from"./chunk-E7VQ3WT4.js";import{a as k}from"./chunk-F5WXPBTY.js";import"./chunk-DTPR5VRM.js";import{a as y}from"./chunk-633OWGHO.js";import{a as B}from"./chunk-W42R6TEG.js";import{a as n}from"./chunk-AMBECJSA.js";import{a as b}from"./chunk-TJ6L7XVK.js";import{a as f}from"./chunk-W5YL3QSG.js";import"./chunk-LGGDA375.js";import"./chunk-YLV5UIKA.js";import"./chunk-RZ3TV2NA.js";import"./chunk-MXS7SZ5M.js";import{b as l}from"./chunk-ZTLAKSAF.js";import{a as r}from"./chunk-BRIPXERW.js";import"./chunk-A5UFVDS4.js";import"./chunk-W4SU7VMV.js";import"./chunk-TBHB36S6.js";import"./chunk-L35RWJ6D.js";import{a as p}from"./chunk-3XARJZUK.js";import"./chunk-RC6Y3VA2.js";import"./chunk-ILE2VADS.js";import{a as d}from"./chunk-DOJ57NAO.js";import"./chunk-KZTI7NFS.js";import"./chunk-L2KXS2FW.js";import{a as i}from"./chunk-GWVOQB64.js";import"./chunk-I67LU25W.js";import"./chunk-PH4INCXG.js";async function s(t){let a=await f({cmd:"buffmarket",subcmd:"buy",id:t}),e=k(a);return e==="Request accepted - buffs have automatically been cast."?{s:!0}:{s:!1,e:{message:e}}}function m(t){return B({cmd:"buffmarket",...t})}function c(t){return m({subcmd:"buy",id:t})}function u(t){return y(c,s,t)}async function h(t,a){a.preventDefault(),r('<div class="fshWaiting">Loading...</div>',t);let e=x(new FormData(a.target)),o=b(await f(e)),g=n("#buff-results",o).parentElement.innerHTML;r(g,t)}function A(t){let a=document.forms[0];i(a,"submit",p(h,t.parentNode))}async function v(t){t.stopPropagation();let a=t.target.getAttribute("onclick").match(/id=([0-9]+)/)?.[1];if(a){let e=t.target.parentNode;e.className="fshActionRow",r('<div class="fshSpin"><span class="fshSpinner"></span></div>',e);let o=await u(a);o.s?r('<span class="fshBuffSuccess">Buffs have been applied</span>',e):r(`<span class="fshBuffFail">${o.e.message}</span>`,e)}}function D(t){t.target.tagName==="INPUT"&&t.target.value==="Buy"&&v(t)}function j(){let t=n("#buff-results");!t||(A(t),d(l,D,!0))}export{j as default};
//# sourceMappingURL=injectBuffmarket-YQS3FW3N.js.map