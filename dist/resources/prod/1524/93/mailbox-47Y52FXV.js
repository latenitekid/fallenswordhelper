import{a as H}from"./chunk-RJM3FDYF.js";import{a as S}from"./chunk-H56IVI6N.js";import{a as N}from"./chunk-MXXO2R4B.js";import{a as R}from"./chunk-YUEMMNBE.js";import{a as A}from"./chunk-U3H7ULU4.js";import{a as q}from"./chunk-SDADCBWU.js";import{a as u}from"./chunk-LJ3W7KBO.js";import{a as E}from"./chunk-TWEQZVC2.js";import{a as L}from"./chunk-3TMTTFLY.js";import{a as b}from"./chunk-DEEYYK6E.js";import"./chunk-E6TZ5ETX.js";import{a as m}from"./chunk-MUG4VEKH.js";import{a as n}from"./chunk-G77K7S5L.js";import"./chunk-NEGYQUFU.js";import{a as T}from"./chunk-N3EXWS22.js";import{b as f}from"./chunk-PWSQLISA.js";import{a as l}from"./chunk-HPU5ZEP3.js";import{a as g}from"./chunk-5HI4ILOP.js";import"./chunk-QCQENXXV.js";import{a as M}from"./chunk-EGS4CZL3.js";import{a as v}from"./chunk-SDYIYOUC.js";import"./chunk-D2RKZAOL.js";import"./chunk-RDAHQVBW.js";import"./chunk-DP37WUXB.js";import"./chunk-MT2H2XVD.js";import{a as I}from"./chunk-LGDJTMPN.js";import{a as C}from"./chunk-A45QJTDQ.js";import"./chunk-6YW6FXRF.js";import"./chunk-GDLA3KMJ.js";import{a as B}from"./chunk-CRWX7KCS.js";import{a as y}from"./chunk-XM37SDUA.js";import"./chunk-MBZ7GUCJ.js";import{a as Q}from"./chunk-5TOA36XP.js";import"./chunk-5RFQSTDG.js";import"./chunk-4MID3VOD.js";import"./chunk-5L4CLVOL.js";import{a}from"./chunk-HYLQEGZ4.js";import"./chunk-7I6ASYKS.js";import"./chunk-R2OFDU54.js";import"./chunk-CEGJSIVU.js";import"./chunk-G6TPLPCG.js";import"./chunk-IMGI5UI2.js";import"./chunk-E53ZSUER.js";import{g as x}from"./chunk-UYN3LUIY.js";import"./chunk-U6BMTRHL.js";import"./chunk-3WE6KSRQ.js";function p(t){return y({cmd:"tempinv",subcmd:"takeitems",item:t})}function G(t){return L({cmd:"tempinv",subcmd:"takeitem",temp_id:t,ajax:1})}function O(t){let e=t.filter(r=>r.r===0),i=t.filter(r=>r.r!==0);return e.length>0?{r:e.map(r=>({id:r.temp_id})),s:!0}:i.length>0?{e:{message:i[0].m},s:!1}:{e:{message:t[0].m},s:!1}}function d(t){return S(t.map(G),O)}function k(t){return q(p,d,t)}function c(t,e){b(e,`<li class="fshNbrList">${t}</li>`)}var D;function _(t){return!t.s&&D!==t.e.message}function h(t,e){if(!t||(_(t)&&(D=t.e.message,c(t.e.message,e)),!t.s))return!0}function F(t,e,i){let r=N({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:`Toggle ${e}`});return u(r,i),r}function w(t,e){let i=e.children[0],{tipped:r}=i.dataset,{itemId:o,invId:s}=M(x,r);return!o||!s||(t[o]?t[o].invIds.push(s):t[o]={invIds:[s],tipped:r.replace(/&extra=\d/,""),src:i.src}),t}function z(){return m({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'})}function J(){let t=m(),e=A();return n(t,e),{takeContainer:t,takeResult:e}}function P(t,e){let i=e[1],r=m(),o=m({innerHTML:`<img src="${i.src}" class="tip-dynamic" data-tipped="${i.tipped}">`});n(r,o);let s=m({innerHTML:`<button class="fshBl fshBls" data-id="${e[0]}">Take All ${i.invIds.length}</button>`});n(r,s),n(t,r)}function U(t,e){I(e).forEach(a(P,t))}function K(t){let e=$(`#temp-inv-img-${t}`).qtip("api");e&&e.destroy(!0)}function V(t){K(t.id);let e=g(`temp-inv-${t.id}`);e&&l("",e)}function W(t,e){e.r.forEach(V),c(`${e.r.length.toString()} item(s) taken.`,t)}function X(t,e){h(e,t)||T(e.r)&&W(t,e)}function Y(t,e){k(e).then(a(X,t))}function Z(t,e,i){let r=i.dataset.id,{invIds:o}=t[r];l(`taking all ${o.length} items`,i.parentNode),H(40,o).forEach(a(Y,e))}function j(t,e,i){E("fshBls",i.target)&&Z(t,e,i.target)}function tt(t,e,i){let r=m({className:"fshTakeGrid"});U(r,t),n(e,r),B(r,a(j,t,i))}function et(t){let e=z(),{takeContainer:i,takeResult:r}=J();tt(t,e,r),n(e,m()),n(e,i),n(f(),e)}function it(t,e){F("qtOn","Mailbox",e);let i=t.reduce(w,{});et(i)}function rt(t,e){let i=R({id:"fshQuickTake",type:"checkbox"});u(i,e),Q(i,"change",a(it,t,e))}function ot(){if(C()||!f())return;let t=v("a",f());if(t.length===0)return;let e=f().lastElementChild;rt(t,e),F("qtOff","Quick Take",e)}export{ot as default};
//# sourceMappingURL=mailbox-47Y52FXV.js.map