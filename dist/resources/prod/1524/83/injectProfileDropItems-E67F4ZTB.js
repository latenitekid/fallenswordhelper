import{a as p}from"./chunk-N6SFVJHX.js";import{a as S,b as T,c as M,d as F,f as H,g as $}from"./chunk-44T5TKVD.js";import"./chunk-YEFCFXJZ.js";import"./chunk-H7DPI2LV.js";import"./chunk-UVW6POCW.js";import{a as N}from"./chunk-UEHXQRVU.js";import"./chunk-FXV6ADAI.js";import"./chunk-JKFSV75B.js";import"./chunk-7HKJGWPC.js";import"./chunk-ND2XB7FH.js";import{a as A}from"./chunk-3QKVGIG7.js";import"./chunk-M2AR7ZCK.js";import"./chunk-E2UOILVH.js";import"./chunk-3W2JOXSH.js";import"./chunk-RFUN3MLD.js";import{a as f}from"./chunk-FXWMGGGE.js";import{a as E}from"./chunk-RX5J4B35.js";import"./chunk-RUX24FMF.js";import"./chunk-ZGPBRHUX.js";import"./chunk-22NDSWUA.js";import{a as w}from"./chunk-RLO47VLQ.js";import"./chunk-JXD4KX63.js";import"./chunk-TDCAXB54.js";import"./chunk-NO7SFINI.js";import"./chunk-MWVD7HRM.js";import"./chunk-RUCJRVGU.js";import"./chunk-I36YHSHC.js";import"./chunk-P5GG6BBU.js";import"./chunk-XYV3WFPP.js";import"./chunk-ZD42GYOR.js";import"./chunk-5RSEZT5D.js";import"./chunk-C356XHRD.js";import"./chunk-IEWOVM7F.js";import{a as j}from"./chunk-MPETHKNA.js";import{a as x}from"./chunk-PV2RDUUR.js";import"./chunk-H3WTYK7C.js";import{a as P,b as l}from"./chunk-JJNIPEZS.js";import"./chunk-743N7EMW.js";import"./chunk-WNBTLKBT.js";import{d as h}from"./chunk-7MAGASYL.js";import"./chunk-AP6R76CB.js";import"./chunk-T6VFD3IX.js";import"./chunk-XQLG4WHW.js";import"./chunk-DA5WSKUB.js";import"./chunk-SDVU75NC.js";import"./chunk-HGZRKBQO.js";import"./chunk-LXEUXBA2.js";import{a as I}from"./chunk-FIS7ZMBK.js";import"./chunk-GOGSW6S4.js";import"./chunk-6Z43IAS3.js";import"./chunk-FQRLW5RO.js";import{a as v}from"./chunk-5BP4JVZE.js";import"./chunk-LDDO6FQI.js";import"./chunk-FQ2MS6MU.js";import"./chunk-VGN4AH67.js";import{a as y}from"./chunk-UEV7L5JP.js";import"./chunk-PVNYCWKC.js";import"./chunk-YSZQHKVC.js";import{a as C}from"./chunk-F4XKSAVO.js";import"./chunk-NNKWIEAR.js";import"./chunk-2URCAZZ2.js";import"./chunk-36R4KBE3.js";import"./chunk-S46POC2Y.js";import"./chunk-N4CD3AMK.js";import"./chunk-R46NFNRI.js";import"./chunk-5IIEF6F7.js";import{a as r}from"./chunk-IBDVBQUM.js";import{a as s}from"./chunk-V4PGHHTG.js";import"./chunk-BG6TMPV6.js";import"./chunk-KA75H6XT.js";import"./chunk-2H46HLMH.js";import"./chunk-4V4QHDJN.js";import{a as k}from"./chunk-E2T4BRJB.js";import"./chunk-42ECWD5I.js";import"./chunk-I3GZAXF5.js";import"./chunk-6IDEFJE7.js";import{b as u}from"./chunk-HBYLRJZK.js";import"./chunk-HVA3CNPK.js";import{a as d}from"./chunk-NIRCQTAI.js";import"./chunk-XMFVZQFS.js";import"./chunk-7R4PXCUB.js";import"./chunk-63CI2ODV.js";function t(){return s('[name="removeIndex[]"]:checked')}var V=o=>({id:j(o.parentNode.href,"folder_id"),name:v(o.parentNode.parentNode)});function R(o,e){return new F({anchor:e.nextElementSibling,props:{folders:o},target:e.parentNode})}async function J(o,e){(await M(o,e.map(g=>g.value))).s&&e.forEach(p)}function L(o){r("dropitems","Move to Folder"),f(30,t()).forEach(k(J,o.detail))}function D(){let o=s('#pCC img[src$="/folder.png"]');if(o.length===0)return;let e=E(A(o[0])),i=o.map(V);R(i,e).$on("move",L)}function Q(o){T().forEach(e=>{e.checked=Boolean(o)})}var c="ajaxifyDestroy",a="disableDestroyPrompts",n=0,m=1,q=0;async function U(o){let e=await H(o.map(i=>i.value));N(e),e.s&&o.forEach(p)}function X(o){!o.returnValue||!n||(o.preventDefault(),f(30,t()).forEach(U),r("dropitems","Destroy by AJAX"))}function _(){return r("dropitems","Destroy without prompts"),!0}function B(){window.confirmDestroy=m?_:q}function z(){m=u(a),q=window.confirmDestroy,B()}function G(){n=!n,y(c,n)}function K(){m=!m,y(a,m),B()}var O=()=>P([[l(c),G],[l(a),K]]);function W(){let o=I('input[type="submit"]');x(o.parentNode,`&nbsp;&nbsp;${h(c)}&nbsp;&nbsp;${h(a)}`),d(o.parentNode,"change",O())}function b(){W(),z(),n=u(c),d(document.forms[0],"submit",X),window.check=Q}var Y=[D,$,b];function Z(){C()||!S()||w(Y)}export{Z as default};
//# sourceMappingURL=injectProfileDropItems-E67F4ZTB.js.map
