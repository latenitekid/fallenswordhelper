import{a as qt}from"./chunk-J534GS2Q.js";import{a as Mt}from"./chunk-5YGGYRSE.js";import{A as W,D as xt,E as kt,b as yt,c as bt,d as o,e as N,f as $,h as d,i as w,j as I,l as P,m as vt,n as l,o as G,p as R,q as V,r as i,v as It,w as wt,x as _t,y as E,z}from"./chunk-ZHHJEY5V.js";import{a as mt}from"./chunk-UWKUUDVQ.js";import{a as S}from"./chunk-VYP6BYDA.js";import{b as ut}from"./chunk-MHANGBVH.js";import{a as lt}from"./chunk-LVNLH6ER.js";import{a as gt}from"./chunk-YYZHVDZH.js";import"./chunk-VI3RZM5G.js";import{a as ht}from"./chunk-WV4YXE4F.js";import"./chunk-22YAZV3W.js";import"./chunk-ND3XCMOS.js";import"./chunk-WPRJK6Q2.js";import{a as pt}from"./chunk-PJ32ASZ7.js";import"./chunk-F5QOVYT2.js";import{a as ft}from"./chunk-R5ZZQ5HH.js";import"./chunk-PO34EML4.js";import"./chunk-QFSH2B2J.js";import"./chunk-2PFHY365.js";import{a as dt}from"./chunk-ZDFDMUO4.js";import"./chunk-2V5OQ7JE.js";import"./chunk-GGKSIQST.js";import"./chunk-JSWEJZHY.js";import"./chunk-JZLUF437.js";import"./chunk-GHQYBWLT.js";import{a as L}from"./chunk-N2KVYLIG.js";import"./chunk-PKDG64MH.js";import"./chunk-2B42SRXB.js";import"./chunk-3IGXKFMQ.js";import{a as F}from"./chunk-GLHEJYH7.js";import"./chunk-EPYDL6MF.js";import"./chunk-TDNJGM62.js";import{a as at}from"./chunk-TP7JP7VV.js";import"./chunk-HAINOYE5.js";import"./chunk-AN5TC666.js";import"./chunk-B7PLPUHK.js";import{V as st,n as ct}from"./chunk-YNXRNCRL.js";import{b as it}from"./chunk-7DPOBF7C.js";import"./chunk-DEDCEYVR.js";function H(e){return dt({cmd:"inventing",subcmd:"doinvent",recipe_id:e})}function Rt(e){let t=gt(e);return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}function U(e){return pt({cmd:"inventing",subcmd:"doinvent",recipe_id:e}).then(Rt)}function Z(e){return ht(H,U,e)}function Ot(e){let t=e-1;return t*t*t+1}function J(e,{delay:t=0,duration:n=400,easing:p=Ot}={}){let r=getComputedStyle(e),m=+r.opacity,s=parseFloat(r.height),h=parseFloat(r.paddingTop),c=parseFloat(r.paddingBottom),y=parseFloat(r.marginTop),b=parseFloat(r.marginBottom),k=parseFloat(r.borderTopWidth),g=parseFloat(r.borderBottomWidth);return{delay:t,duration:n,easing:p,css:u=>`overflow: hidden;opacity: ${Math.min(u*20,1)*m};height: ${u*s}px;padding-top: ${u*h}px;padding-bottom: ${u*c}px;margin-top: ${u*y}px;margin-bottom: ${u*b}px;border-top-width: ${u*k}px;border-bottom-width: ${u*g}px;`}}function Ct(e){let t,n,p,r,m,s,h;return{c(){t=d("div"),n=d("div"),n.textContent="INFORMATION",p=I(),r=d("div"),m=w(e[4]),i(n,"background","#8E8668"),i(n,"color","#FFF"),i(n,"font-size","smaller"),i(t,"border","2px solid #FFF"),i(t,"margin","10px auto"),i(t,"width","80%"),i(t,"background","#D3CFC1")},m(c,y){N(c,t,y),o(t,n),o(t,p),o(t,r),o(r,m),h=!0},p(c,y){(!h||y&16)&&R(m,c[4])},i(c){h||(c&&It(()=>{s||(s=W(t,J,{},!0)),s.run(1)}),h=!0)},o(c){c&&(s||(s=W(t,J,{},!1)),s.run(0)),h=!1},d(c){c&&$(t),c&&s&&s.end()}}}function Pt(e){let t,n,p,r,m,s,h,c,y,b,k,g,u,_,x,A=e[1]+e[2]+"",M,q,D,tt,j,O,et,T,nt,C,ot,B,Q,rt,a=e[4]&&Ct(e);return{c(){t=d("form"),n=d("label"),n.textContent="Select how many to quick invent",p=I(),r=d("input"),m=I(),s=d("button"),s.textContent="(max)",h=I(),c=d("input"),y=I(),b=d("div"),a&&a.c(),k=I(),g=d("div"),u=d("div"),_=I(),x=d("p"),M=w(A),q=w(" / "),D=w(e[0]),tt=I(),j=d("div"),O=d("div"),et=w("Successes: "),T=w(e[1]),nt=I(),C=d("div"),ot=w("Failures: "),B=w(e[2]),l(n,"for","quick-invent-amount"),l(r,"type","number"),l(r,"id","quick-invent-amount"),l(r,"name","quick-invent-amount"),l(r,"min","0"),l(r,"step","1"),l(r,"class","custominput fshNumberInput"),r.required=!0,l(s,"type","button"),l(s,"class","fshBl"),l(c,"class","custombutton"),l(c,"type","submit"),c.value="Quick Invent",i(c,"margin-left","8px"),l(u,"class","composing-progress-bar"),i(u,"background-position","right top"),i(u,"width",e[3]+"%"),i(u,"transition","width 0.4s ease-out"),i(u,"position","absolute"),i(u,"top","0px"),i(x,"position","relative"),l(g,"class","composing-progress"),i(g,"margin","0px auto"),i(g,"font-weight","bold"),i(g,"color","#fff"),i(g,"left","0px"),i(O,"display","inline-block"),i(O,"width","250px"),l(O,"class","fshQs fshGreen"),i(C,"display","inline-block"),i(C,"width","250px"),l(C,"class","fshQs fshRed"),i(j,"margin-top","36px"),l(t,"class","fshCenter"),i(t,"margin-top","12px")},m(f,v){N(f,t,v),o(t,n),o(t,p),o(t,r),V(r,e[0]),o(t,m),o(t,s),o(t,h),o(t,c),o(t,y),o(t,b),a&&a.m(b,null),o(b,k),o(b,g),o(g,u),o(g,_),o(g,x),o(x,M),o(x,q),o(x,D),o(b,tt),o(b,j),o(j,O),o(O,et),o(O,T),o(j,nt),o(j,C),o(C,ot),o(C,B),Q||(rt=[P(r,"input",e[9]),P(s,"click",e[5]),P(t,"submit",vt(e[6]))],Q=!0)},p(f,[v]){v&1&&G(r.value)!==f[0]&&V(r,f[0]),f[4]?a?(a.p(f,v),v&16&&E(a,1)):(a=Ct(f),a.c(),E(a,1),a.m(b,k)):a&&(wt(),z(a,1,1,()=>{a=null}),_t()),v&8&&i(u,"width",f[3]+"%"),v&6&&A!==(A=f[1]+f[2]+"")&&R(M,A),v&1&&R(D,f[0]),v&2&&R(T,f[1]),v&4&&R(B,f[2])},i(f){E(a)},o(f){z(a)},d(f){f&&$(t),a&&a.d(),Q=!1,yt(rt)}}}function Et(e,t,n){let{max:p}=t,{recipeID:r}=t,m=1,s=0,h=0,c=0,y="";function b(){n(1,s=0),n(2,h=0),n(3,c=0),n(4,y="")}function k(){n(0,m=p),L("inventing","maxInventButton")}async function g(){if(L("inventing","quickInvent"),!m)return;b(),Array(m).fill(r).reduce(async(x,A)=>{let M=await x;if(!M||M.s===!0){let q=await Z(A);return q.s===!1?n(4,y=q.e.message):q.r.success_count>0?n(1,s+=1):n(2,h+=1),n(3,c=100*((s+h)/m)),q}return M},Promise.resolve())}function u(){m=G(this.value),n(0,m)}return e.$$set=_=>{"max"in _&&n(7,p=_.max),"recipeID"in _&&n(8,r=_.recipeID)},[m,s,h,c,y,k,g,p,r,u]}var St=class extends kt{constructor(t){super();xt(this,t,Et,Pt,bt,{max:7,recipeID:8})}},At=St;function Dt(e){let[t,n]=at(S("tr:nth-child(2) td",e)).split("/").map(p=>parseInt(p,10));return{have:t,need:n,id:S("img",e).src.match(/(\d+)\.[A-Za-z]+$/)[1]}}function Tt(){return F(`#pCC td[background^="${it}ui/inventory/"]`).map(t=>t.parentElement.parentElement).map(Dt)}function K(){return Tt().reduce((t,n)=>Math.min(t,Math.floor(n.have/n.need)),1/0)}function Bt(e,t){return new At({props:e,target:t})}function Qt(e){let n=e.insertRow(-1).insertCell(-1);n.className="header",n.setAttribute("height","1")}function Lt(e){let n=e.insertRow(-1).insertCell(-1);return n.className="fshCenter",n}function X(){let e=S('input[name="recipe_id"]');if(!e)return;let t=K(),n=ut.lastElementChild;Qt(n),Bt({max:t,recipeID:e.value},Lt(n))}function Nt(e){if(!e)return;let t=e.src.match(/\/items\/(\d+)\.gif/);if(t)return t[1]}function $t(e){return`${st}items${ct}view&item_id=${e}`}function Gt(e){return Mt({href:$t(e),target:"_blank"})}function jt(e,t){let n=Nt(t);if(!n)return;let p=Gt(n);lt(p,e),ft(p,e)}function Vt(e){jt(e,e)}function zt(){let e=qt('.//b[.="Target Invention"]/../../following-sibling::*[1]//img'),t=S("#pCC b");jt(t,e)}function Wt(){F('#pCC img[src*="/items/"]').forEach(Vt)}function Y(){zt(),Wt()}function Ht(){mt()&&(Y(),X())}export{Ht as default};
//# sourceMappingURL=inventing-AMQRVIAS.js.map
