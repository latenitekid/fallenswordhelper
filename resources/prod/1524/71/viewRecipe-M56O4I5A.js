import{a as Ee}from"./chunk-T6OGII77.js";import{a as je}from"./chunk-2WUCCK54.js";import{b as K}from"./chunk-CLCNUIR2.js";import{a as Fe}from"./chunk-OI5UZBMP.js";import{A as H,B as j,C as U,D as r,L as we,M as Ce,N as ye,O as T,P as G,Q as J,V as Re,W as qe,X as xe,Y as Ae,Z as De,b as be,d as Ie,o as i,p as N,q as B,s as c,t as I,u as k,w as z,x as ke,z as a}from"./chunk-TMCYCG7Z.js";import{a as _e}from"./chunk-443BS7FN.js";import{a as he}from"./chunk-X75FEMBZ.js";import"./chunk-2QZLLP35.js";import{a as V}from"./chunk-7HDLZ5CV.js";import{a as Se}from"./chunk-475CXNSP.js";import{a as ge}from"./chunk-ATJNJQBM.js";import"./chunk-4LDTGQHK.js";import"./chunk-FT2ROHKC.js";import{a as pe}from"./chunk-PG36KHEO.js";import"./chunk-43UR6VCT.js";import{a as S}from"./chunk-BXQIUVYR.js";import{a as L}from"./chunk-OQUOAWQT.js";import"./chunk-RW5VOW7B.js";import"./chunk-QFHM7M2T.js";import{a as ve}from"./chunk-5M2GNHT7.js";import"./chunk-266NJ6OG.js";import"./chunk-MG2N7BBA.js";import{a as ae}from"./chunk-4SKJEDIT.js";import"./chunk-OY4YNTS2.js";import{b as ce}from"./chunk-M4Q7DLXY.js";import"./chunk-PZSZ5776.js";import"./chunk-EXS6ZFSM.js";import"./chunk-FWZ3N5X6.js";import"./chunk-ZF2KHET3.js";import"./chunk-RTNCMQDY.js";import{a as de}from"./chunk-4NPHSO6J.js";import"./chunk-6EFRAPOS.js";import"./chunk-W2IKWP7C.js";import"./chunk-BGXI65HS.js";import"./chunk-4Z3DF3VU.js";import"./chunk-32RSWJFF.js";import"./chunk-QKRGEODM.js";import"./chunk-SUDOEZJL.js";import{X as me,b as le,p as fe}from"./chunk-CRFRZPAJ.js";import"./chunk-F3362XCG.js";function W(t){return je({subcmd:"doinvent",recipe_id:t})}function Be(t){let e=he(t);return e.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:e},s:!1}}function X(t){return ve({cmd:"inventing",subcmd:"doinvent",recipe_id:t}).then(Be)}function Y(t){return ge(W,X,t)}function Ge(t){let e;return{c(){e=I("(max)")},m(n,m){N(n,e,m)},d(n){n&&B(e)}}}function Te(t){let e,n,m,s,p,o,d;return{c(){e=c("div"),n=c("div"),n.textContent="INFORMATION",m=k(),s=c("div"),p=I(t[4]),r(n,"background","#8E8668"),r(n,"color","#FFF"),r(n,"font-size","smaller"),r(e,"border","2px solid #FFF"),r(e,"margin","10px auto"),r(e,"width","80%"),r(e,"background","#D3CFC1")},m(u,_){N(u,e,_),i(e,n),i(e,m),i(e,s),i(s,p),d=!0},p(u,_){(!d||_&16)&&j(p,u[4])},i(u){d||(u&&we(()=>{o||(o=J(e,K,{},!0)),o.run(1)}),d=!0)},o(u){u&&(o||(o=J(e,K,{},!1)),o.run(0)),d=!1},d(u){u&&B(e),u&&o&&o.end()}}}function Me(t){let e,n,m,s,p,o,d,u,_,b,E,v,h,C,y,D=t[1]+t[2]+"",R,q,M,ne,F,x,ie,Q,re,A,oe,P,w,O,se;o=new Fe({props:{$$slots:{default:[Ge]},$$scope:{ctx:t}}}),o.$on("click",t[5]);let f=t[4]&&Te(t);return{c(){e=c("form"),n=c("label"),n.textContent="Select how many to quick invent",m=k(),s=c("input"),p=k(),Re(o.$$.fragment),d=k(),u=c("input"),_=k(),b=c("div"),f&&f.c(),E=k(),v=c("div"),h=c("div"),C=k(),y=c("p"),R=I(D),q=I(" / "),M=I(t[0]),ne=k(),F=c("div"),x=c("div"),ie=I("Successes: "),Q=I(t[1]),re=k(),A=c("div"),oe=I("Failures: "),P=I(t[2]),a(n,"for","quick-invent-amount"),a(s,"type","number"),a(s,"id","quick-invent-amount"),a(s,"name","quick-invent-amount"),a(s,"min","0"),a(s,"step","1"),a(s,"class","custominput fshNumberInput"),s.required=!0,a(u,"class","custombutton"),a(u,"type","submit"),u.value="Quick Invent",r(u,"margin-left","8px"),a(h,"class","composing-progress-bar"),r(h,"background-position","right top"),r(h,"width",t[3]+"%"),r(h,"transition","width 0.4s ease-out"),r(h,"position","absolute"),r(h,"top","0px"),r(y,"position","relative"),a(v,"class","composing-progress"),r(v,"margin","0px auto"),r(v,"font-weight","bold"),r(v,"color","#fff"),r(v,"left","0px"),r(x,"display","inline-block"),r(x,"width","250px"),a(x,"class","fshQs fshGreen"),r(A,"display","inline-block"),r(A,"width","250px"),a(A,"class","fshQs fshRed"),r(F,"margin-top","36px"),a(e,"class","fshCenter"),r(e,"margin-top","12px")},m(l,g){N(l,e,g),i(e,n),i(e,m),i(e,s),U(s,t[0]),i(e,p),qe(o,e,null),i(e,d),i(e,u),i(e,_),i(e,b),f&&f.m(b,null),i(b,E),i(b,v),i(v,h),i(v,C),i(v,y),i(y,R),i(y,q),i(y,M),i(b,ne),i(b,F),i(F,x),i(x,ie),i(x,Q),i(F,re),i(F,A),i(A,oe),i(A,P),w=!0,O||(se=[z(s,"input",t[9]),z(e,"submit",ke(t[6]))],O=!0)},p(l,[g]){g&1&&H(s.value)!==l[0]&&U(s,l[0]);let ue={};g&2048&&(ue.$$scope={dirty:g,ctx:l}),o.$set(ue),l[4]?f?(f.p(l,g),g&16&&T(f,1)):(f=Te(l),f.c(),T(f,1),f.m(b,E)):f&&(Ce(),G(f,1,1,()=>{f=null}),ye()),(!w||g&8)&&r(h,"width",l[3]+"%"),(!w||g&6)&&D!==(D=l[1]+l[2]+"")&&j(R,D),(!w||g&1)&&j(M,l[0]),(!w||g&2)&&j(Q,l[1]),(!w||g&4)&&j(P,l[2])},i(l){w||(T(o.$$.fragment,l),T(f),w=!0)},o(l){G(o.$$.fragment,l),G(f),w=!1},d(l){l&&B(e),xe(o),f&&f.d(),O=!1,be(se)}}}function Qe(t,e,n){let{max:m}=e,{recipeID:s}=e,p=1,o=0,d=0,u=0,_="";function b(){n(1,o=0),n(2,d=0),n(3,u=0),n(4,_="")}function E(){n(0,p=m),V("inventing","maxInventButton")}async function v(){if(V("inventing","quickInvent"),!p)return;b(),Array(p).fill(s).reduce(async(y,D)=>{let R=await y;if(!R||R.s===!0){let q=await Y(D);return q.s===!1?n(4,_=q.e.message):q.r.success_count>0?n(1,o+=1):n(2,d+=1),n(3,u=100*((o+d)/p)),q}return R},Promise.resolve())}function h(){p=H(this.value),n(0,p)}return t.$$set=C=>{"max"in C&&n(7,m=C.max),"recipeID"in C&&n(8,s=C.recipeID)},[p,o,d,u,_,E,v,m,s,h]}var Z=class extends De{constructor(e){super(),Ae(this,e,Qe,Me,Ie,{max:7,recipeID:8})}},Le=Z;function Pe(t){let[e,n]=ae(S("tr:nth-child(2) td",t)).split("/").map(m=>parseInt(m,10));return{have:e,need:n}}function Oe(){return L(`#pCC td[background^="${le}ui/inventory/"]`).map(e=>e.parentElement.parentElement).map(Pe)}function $(){return Oe().reduce((e,n)=>Math.min(e,Math.floor(n.have/n.need)),1/0)}function Ve(t,e){return new Le({props:t,target:e})}function ze(t){let n=t.insertRow(-1).insertCell(-1);n.className="header",n.setAttribute("height","1")}function He(t){let n=t.insertRow(-1).insertCell(-1);return n.className="fshCenter",n}function ee(){let t=S('input[name="recipe_id"]');if(!t)return;let e=$(),n=ce.lastElementChild;ze(n),Ve({max:e,recipeID:t.value},He(n))}function Ue(t){if(!t)return;let e=t.src.match(/\/items\/(\d+)\.gif/);if(e)return e[1]}function Je(t){return`${me}items${fe}view&item_id=${t}`}function Ke(t){return _e({href:Je(t),target:"_blank"})}function Ne(t,e){let n=Ue(e);if(!n)return;let m=Ke(n);Se(m,t),pe(m,t)}function We(t){Ne(t,t)}function Xe(){let t=Ee('.//b[.="Target Invention"]/../../following-sibling::*[1]//img'),e=S("#pCC b");Ne(e,t)}function Ye(){L('#pCC img[src*="/items/"]').forEach(We)}function te(){Xe(),Ye()}function Ze(){de()&&(te(),ee())}export{Ze as default};
//# sourceMappingURL=viewRecipe-M56O4I5A.js.map
