import{a as st}from"./chunk-POHHS2B5.js";import{a as y}from"./chunk-E2UOILVH.js";import"./chunk-3W2JOXSH.js";import"./chunk-RFUN3MLD.js";import{a as ot}from"./chunk-3KWUQ4SG.js";import"./chunk-ZGPBRHUX.js";import{a as it}from"./chunk-22NDSWUA.js";import"./chunk-TDCAXB54.js";import{a as N}from"./chunk-CUKDEVSW.js";import"./chunk-MWVD7HRM.js";import"./chunk-5RSEZT5D.js";import"./chunk-IEWOVM7F.js";import{a as G}from"./chunk-MPETHKNA.js";import"./chunk-LLPK5PYY.js";import{b as K}from"./chunk-DA5WSKUB.js";import{a as R}from"./chunk-SDVU75NC.js";import{a as W}from"./chunk-7A3U2LLS.js";import"./chunk-FQRLW5RO.js";import"./chunk-LDDO6FQI.js";import"./chunk-FQ2MS6MU.js";import"./chunk-VGN4AH67.js";import"./chunk-UEV7L5JP.js";import"./chunk-PVNYCWKC.js";import"./chunk-S46POC2Y.js";import{C as w,G as P,N as x,O as tt,P as F,R as Q,U as I,V as k,aa as B,ba as T,ca as C,d as X,da as q,ea as et,fa as nt,r as Y,s as u,t as p,v as $,w as Z,x as M}from"./chunk-N4CD3AMK.js";import{a as v}from"./chunk-IBDVBQUM.js";import{a as E}from"./chunk-V4PGHHTG.js";import"./chunk-BG6TMPV6.js";import{a as J}from"./chunk-KA75H6XT.js";import"./chunk-2H46HLMH.js";import"./chunk-4V4QHDJN.js";import{a as g}from"./chunk-E2T4BRJB.js";import"./chunk-42ECWD5I.js";import"./chunk-I3GZAXF5.js";import"./chunk-6IDEFJE7.js";import{b as U}from"./chunk-HBYLRJZK.js";import"./chunk-HVA3CNPK.js";import"./chunk-NIRCQTAI.js";import"./chunk-XMFVZQFS.js";import"./chunk-7R4PXCUB.js";import"./chunk-63CI2ODV.js";async function S(t,e){let n=await Promise.all(t.map(e));return t.filter((s,r)=>n[r])}async function D(t,e){for(let n of t)if(await e(n))return!0;return!1}function d(t){return t.id.split("-")[2]}function rt(t,e){let[n]=e.children[0].children;t.items[d(n)].is_in_st&&(n.style.backgroundColor="rgba(255,0,0,0.3)")}function pt(t,e){e.filter(n=>n.addedNodes?.[0]?.tagName==="DIV").forEach(n=>{rt(t,n.addedNodes[0])})}function L(t){let e=R("auction-items");J(e.children).forEach(g(rt,t)),new MutationObserver(g(pt,t)).observe(e,{childList:!0})}function dt(t){let e;return{c(){e=Z("Perfect")},m(n,s){u(n,e,s)},d(n){n&&p(e)}}}function gt(t){let e,n,s,r,c,a,h,_,m,l,o,b;function mt(i){t[4](i)}let j={};t[0]!==void 0&&(j.howMany=t[0]),n=new st({props:j}),F.push(()=>B(n,"howMany",mt)),n.$on("select",t[2]);function ut(i){t[5](i)}let z={};return t[1]!==void 0&&(z.inSt=t[1]),a=new ot({props:z}),F.push(()=>B(a,"inSt",ut)),a.$on("toggle",t[6]),l=new it({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),l.$on("click",t[3]),{c(){e=$("div"),T(n.$$.fragment),r=M(),c=$("div"),T(a.$$.fragment),_=M(),m=$("div"),o=$("div"),T(l.$$.fragment),w(e,"class","svelte-16r61e8"),w(c,"class","svelte-16r61e8"),P(o,"display","contents"),P(o,"--button-color","blue"),w(m,"class","svelte-16r61e8")},m(i,f){u(i,e,f),C(n,e,null),u(i,r,f),u(i,c,f),C(a,c,null),u(i,_,f),u(i,m,f),Y(m,o),C(l,o,null),b=!0},p(i,[f]){let A={};!s&&f&1&&(s=!0,A.howMany=i[0],Q(()=>s=!1)),n.$set(A);let H={};!h&&f&2&&(h=!0,H.inSt=i[1],Q(()=>h=!1)),a.$set(H);let O={};f&256&&(O.$$scope={dirty:f,ctx:i}),l.$set(O)},i(i){b||(I(n.$$.fragment,i),I(a.$$.fragment,i),I(l.$$.fragment,i),b=!0)},o(i){k(n.$$.fragment,i),k(a.$$.fragment,i),k(l.$$.fragment,i),b=!1},d(i){i&&p(e),q(n),i&&p(r),i&&p(c),q(a),i&&p(_),i&&p(m),q(l)}}}function ht(t,e,n){let s=x(),r="all",c=U("selectST");function a(o){s("select",[o.detail,r,c])}function h(){s("perf",[r,c])}function _(o){r=o,n(0,r)}function m(o){c=o,n(1,c)}function l(o){tt.call(this,t,o)}return[r,c,a,h,_,m,l]}var V=class extends nt{constructor(e){super(),et(this,e,ht,gt,X,{})}},ct=V;function _t(){return new ct({target:K()})}var $t=t=>t.parentNode.parentNode.dataset.tipped,yt=t=>$t(t).split("?")[1],St=t=>G(yt(t),"item_id"),at=t=>W(Number(t))?1/0:Number(t),bt=async t=>(await y()).items[d(t)].type,vt=async t=>await bt(t)===12,wt=async t=>(await y()).items[d(t)].craft,It=async t=>await wt(t)==="Perfect",kt=[t=>t==="-1",(t,e)=>St(e)===t,(t,e)=>t==="-2"&&vt(e)],Tt=async(t,e,n)=>Boolean(await n(t,e)),Ct=(t,e)=>D(kt,g(Tt,t,e)),qt=async(t,e)=>Boolean(await Ct(t,e)),Nt=(t,e)=>S(e,g(qt,t)),Et=async t=>!(await y()).items[d(t)].is_in_st,lt=(t,e)=>t?e:S(e,Et);async function Mt([t,e,n],s){(await Nt(t,await lt(n,s))).slice(0,at(e)).forEach(N)}function ft(t,e){let n=E("#auction-items .selectable-item");n.length&&(E("#auction-items .auction-create-selected div").forEach(N),e(t.detail,n))}function Pt(t){v("ahQuickCreate","Select Filter"),ft(t,Mt)}async function Ft([t,e],n){(await S(await lt(e,n),It)).slice(0,at(t)).forEach(N)}function Qt(t){v("ahQuickCreate","Perfect Filter"),ft(t,Ft)}function Bt(){v("ahQuickCreate","toggleSelectST")}async function Dt(){let t=await y(),e=_t();e.$on("select",Pt),e.$on("perf",Qt),e.$on("toggle",Bt),t.items.fshHasST&&L(t)}export{Dt as default};
//# sourceMappingURL=quickCreate-FRW3EPAZ.js.map
