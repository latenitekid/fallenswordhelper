import{a as $}from"./chunk-N6SFVJHX.js";import{a as H}from"./chunk-OYAJYUVJ.js";import"./chunk-Z64OOUTD.js";import{a as m,b as G}from"./chunk-F4K42WOM.js";import"./chunk-FXV6ADAI.js";import"./chunk-7HKJGWPC.js";import{a as R}from"./chunk-ND2XB7FH.js";import"./chunk-BAUI2EUE.js";import{a as N}from"./chunk-FXWMGGGE.js";import"./chunk-RX5J4B35.js";import{a as C}from"./chunk-CS6HT7IY.js";import{a as q}from"./chunk-I2A3WGE5.js";import"./chunk-JXD4KX63.js";import{a as B}from"./chunk-CUKDEVSW.js";import"./chunk-NO7SFINI.js";import"./chunk-I36YHSHC.js";import"./chunk-P5GG6BBU.js";import{a as n}from"./chunk-XYV3WFPP.js";import"./chunk-IEWOVM7F.js";import{a as h}from"./chunk-PV2RDUUR.js";import"./chunk-H3WTYK7C.js";import{a}from"./chunk-FZSGE2W2.js";import{a as E}from"./chunk-DL6GUQIM.js";import"./chunk-LTRYMJWK.js";import{b as i}from"./chunk-DA5WSKUB.js";import{a as T}from"./chunk-SDVU75NC.js";import{a as I}from"./chunk-A4HIMH5N.js";import{a as v}from"./chunk-FIS7ZMBK.js";import"./chunk-GOGSW6S4.js";import{a as S}from"./chunk-6Z43IAS3.js";import"./chunk-FQRLW5RO.js";import"./chunk-LDDO6FQI.js";import"./chunk-FQ2MS6MU.js";import"./chunk-VGN4AH67.js";import{a as x}from"./chunk-36R4KBE3.js";import"./chunk-WFCAIBUQ.js";import"./chunk-S46POC2Y.js";import"./chunk-N4CD3AMK.js";import"./chunk-R46NFNRI.js";import"./chunk-5IIEF6F7.js";import{a as A}from"./chunk-IBDVBQUM.js";import{a as r}from"./chunk-V4PGHHTG.js";import"./chunk-BG6TMPV6.js";import"./chunk-KA75H6XT.js";import"./chunk-2H46HLMH.js";import{a as o}from"./chunk-E2T4BRJB.js";import"./chunk-42ECWD5I.js";import"./chunk-I3GZAXF5.js";import"./chunk-6IDEFJE7.js";import"./chunk-HBYLRJZK.js";import"./chunk-HVA3CNPK.js";import{a as y}from"./chunk-NIRCQTAI.js";import{b}from"./chunk-XMFVZQFS.js";import"./chunk-7R4PXCUB.js";import"./chunk-63CI2ODV.js";function f(e){return m({subcmd2:"takeitem",guildstore_id:e})}function w(e){return e.r===0?{s:!0}:{e:{message:e.m},s:!1}}function l(e){return G(e).then(w)}function u(e){return n(f,l,e)}function D(){r('#pCC input[name="tagIndex[]"]').forEach(B)}function L(e,t){t.s&&(e.removeAttribute("style"),e.className="fshGreen",a("Taken",e))}function _(e){let t=e.parentNode.previousElementSibling.previousElementSibling.children[0].value;u(t).then(o(L,e)),a("",e),e.className="guildTagSpinner",e.style.backgroundImage=`url('${b}ui/misc/spinner.gif')`}function s(e){let{target:t}=e;t.value==="Check All"&&D(),t.className==="sendLink"&&_(t)}function c(e,t){return m({subcmd2:e,tagIndex:t})}function p(e,t){return S({cmd:"guild",subcmd:"inventory",subcmd2:e,tagIndex:t}).then(R)}function d(e,t){return n(c,p,e,t)}var F=()=>r('[name="tagIndex[]"]:checked'),J=()=>v('[name="subcmd2"]').value;async function P(e,t){let k=await d(e,t.map(j=>j.value));k.s?t.forEach($):H(k.e.message)}function X(e){e.preventDefault(),N(25,F()).forEach(o(P,J())),A("addRemoveTags","Tag by AJAX")}function g(){y(document.forms[0],"submit",X)}function z(e){h(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function K(){r('#pCC input[name="tagIndex[]"]').forEach(z)}function M(){let e=C({type:"button",value:"Check All"}),t=I("form",i());t.length===1&&E(t[0].previousElementSibling.cells[0],e)}function O(){x(i(),s),K(),M(),g()}function Q(){T("tagging_cost")?O():q()}export{Q as default};
//# sourceMappingURL=addRemoveTags-FNCLOFMG.js.map
