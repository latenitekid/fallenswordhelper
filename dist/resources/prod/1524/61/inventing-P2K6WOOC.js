import{a as Ee}from"./chunk-BINCK4Q3.js";import{b as K}from"./chunk-WUZMEUSW.js";import{a as De}from"./chunk-C5ZRYS4R.js";import{A as E,B as U,C as i,I as we,J as qe,K as Ae,L as T,M as N,N as J,Q as Ce,R as xe,S as Re,T as Se,U as je,b as be,d as ke,o as r,p as L,q as Q,s as a,t as b,u as k,w as z,x as ye,y as f,z as H}from"./chunk-M73AAOSC.js";import{a as Ie}from"./chunk-RQF33MH3.js";import{a as _e}from"./chunk-SCAM4Q4W.js";import{a as ge}from"./chunk-F5WXPBTY.js";import"./chunk-DTPR5VRM.js";import{a as O}from"./chunk-K32J6RS5.js";import{a as ve}from"./chunk-633OWGHO.js";import{a as he}from"./chunk-W42R6TEG.js";import"./chunk-NRF5E4NM.js";import{a as fe}from"./chunk-EERRLM6T.js";import{a as D}from"./chunk-AMBECJSA.js";import{a as B}from"./chunk-SVOLGRZA.js";import"./chunk-AMLNDKL6.js";import"./chunk-TJ6L7XVK.js";import{a as de}from"./chunk-W5YL3QSG.js";import"./chunk-LGGDA375.js";import"./chunk-YLV5UIKA.js";import{a as ae}from"./chunk-SRR4B7GE.js";import"./chunk-RZ3TV2NA.js";import"./chunk-MXS7SZ5M.js";import{b as le}from"./chunk-ZTLAKSAF.js";import"./chunk-A5UFVDS4.js";import"./chunk-W4SU7VMV.js";import"./chunk-LWP4UM2N.js";import"./chunk-TBHB36S6.js";import"./chunk-L35RWJ6D.js";import"./chunk-3XARJZUK.js";import{a as pe}from"./chunk-B5WSSBSP.js";import"./chunk-MWD4X6Z5.js";import"./chunk-RC6Y3VA2.js";import"./chunk-ILE2VADS.js";import"./chunk-KZTI7NFS.js";import"./chunk-L2KXS2FW.js";import"./chunk-GWVOQB64.js";import"./chunk-A2JPUMZD.js";import{X as ce,b as ue,p as me}from"./chunk-I67LU25W.js";import"./chunk-PH4INCXG.js";function W(t){return he({cmd:"inventing",subcmd:"doinvent",recipe_id:t})}function Qe(t){let e=ge(t);return e.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:e},s:!1}}function X(t){return de({cmd:"inventing",subcmd:"doinvent",recipe_id:t}).then(Qe)}function Y(t){return ve(W,X,t)}function Ne(t){let e;return{c(){e=b("(max)")},m(n,l){L(n,e,l)},d(n){n&&Q(e)}}}function Fe(t){let e,n,l,s,p,o,d;return{c(){e=a("div"),n=a("div"),n.textContent="INFORMATION",l=k(),s=a("div"),p=b(t[4]),i(n,"background","#8E8668"),i(n,"color","#FFF"),i(n,"font-size","smaller"),i(e,"border","2px solid #FFF"),i(e,"margin","10px auto"),i(e,"width","80%"),i(e,"background","#D3CFC1")},m(u,_){L(u,e,_),r(e,n),r(e,l),r(e,s),r(s,p),d=!0},p(u,_){(!d||_&16)&&E(p,u[4])},i(u){d||(u&&we(()=>{o||(o=J(e,K,{},!0)),o.run(1)}),d=!0)},o(u){u&&(o||(o=J(e,K,{},!1)),o.run(0)),d=!1},d(u){u&&Q(e),u&&o&&o.end()}}}function Pe(t){let e,n,l,s,p,o,d,u,_,I,F,v,h,w,q,S=t[1]+t[2]+"",A,C,P,te,j,x,ne,G,re,R,ie,M,y,V,oe;o=new De({props:{$$slots:{default:[Ne]},$$scope:{ctx:t}}}),o.$on("click",t[5]);let c=t[4]&&Fe(t);return{c(){e=a("form"),n=a("label"),n.textContent="Select how many to quick invent",l=k(),s=a("input"),p=k(),Ce(o.$$.fragment),d=k(),u=a("input"),_=k(),I=a("div"),c&&c.c(),F=k(),v=a("div"),h=a("div"),w=k(),q=a("p"),A=b(S),C=b(" / "),P=b(t[0]),te=k(),j=a("div"),x=a("div"),ne=b("Successes: "),G=b(t[1]),re=k(),R=a("div"),ie=b("Failures: "),M=b(t[2]),f(n,"for","quick-invent-amount"),f(s,"type","number"),f(s,"id","quick-invent-amount"),f(s,"name","quick-invent-amount"),f(s,"min","0"),f(s,"step","1"),f(s,"class","custominput fshNumberInput"),s.required=!0,f(u,"class","custombutton"),f(u,"type","submit"),u.value="Quick Invent",i(u,"margin-left","8px"),f(h,"class","composing-progress-bar"),i(h,"background-position","right top"),i(h,"width",t[3]+"%"),i(h,"transition","width 0.4s ease-out"),i(h,"position","absolute"),i(h,"top","0px"),i(q,"position","relative"),f(v,"class","composing-progress"),i(v,"margin","0px auto"),i(v,"font-weight","bold"),i(v,"color","#fff"),i(v,"left","0px"),i(x,"display","inline-block"),i(x,"width","250px"),f(x,"class","fshQs fshGreen"),i(R,"display","inline-block"),i(R,"width","250px"),f(R,"class","fshQs fshRed"),i(j,"margin-top","36px"),f(e,"class","fshCenter"),i(e,"margin-top","12px")},m(m,g){L(m,e,g),r(e,n),r(e,l),r(e,s),U(s,t[0]),r(e,p),xe(o,e,null),r(e,d),r(e,u),r(e,_),r(e,I),c&&c.m(I,null),r(I,F),r(I,v),r(v,h),r(v,w),r(v,q),r(q,A),r(q,C),r(q,P),r(I,te),r(I,j),r(j,x),r(x,ne),r(x,G),r(j,re),r(j,R),r(R,ie),r(R,M),y=!0,V||(oe=[z(s,"input",t[9]),z(e,"submit",ye(t[6]))],V=!0)},p(m,[g]){g&1&&H(s.value)!==m[0]&&U(s,m[0]);let se={};g&2048&&(se.$$scope={dirty:g,ctx:m}),o.$set(se),m[4]?c?(c.p(m,g),g&16&&T(c,1)):(c=Fe(m),c.c(),T(c,1),c.m(I,F)):c&&(qe(),N(c,1,1,()=>{c=null}),Ae()),(!y||g&8)&&i(h,"width",m[3]+"%"),(!y||g&6)&&S!==(S=m[1]+m[2]+"")&&E(A,S),(!y||g&1)&&E(P,m[0]),(!y||g&2)&&E(G,m[1]),(!y||g&4)&&E(M,m[2])},i(m){y||(T(o.$$.fragment,m),T(c),y=!0)},o(m){N(o.$$.fragment,m),N(c),y=!1},d(m){m&&Q(e),Re(o),c&&c.d(),V=!1,be(oe)}}}function Ge(t,e,n){let{max:l}=e,{recipeID:s}=e,p=1,o=0,d=0,u=0,_="";function I(){n(1,o=0),n(2,d=0),n(3,u=0),n(4,_="")}function F(){n(0,p=l),O("inventing","maxInventButton")}async function v(){if(O("inventing","quickInvent"),!p)return;I(),Array(p).fill(s).reduce(async(q,S)=>{let A=await q;if(!A||A.s===!0){let C=await Y(S);return C.s===!1?n(4,_=C.e.message):C.r.success_count>0?n(1,o+=1):n(2,d+=1),n(3,u=100*((o+d)/p)),C}return A},Promise.resolve())}function h(){p=H(this.value),n(0,p)}return t.$$set=w=>{"max"in w&&n(7,l=w.max),"recipeID"in w&&n(8,s=w.recipeID)},[p,o,d,u,_,F,v,l,s,h]}var Te=class extends je{constructor(e){super();Se(this,e,Ge,Pe,ke,{max:7,recipeID:8})}},Be=Te;function Me(t){let[e,n]=ae(D("tr:nth-child(2) td",t)).split("/").map(l=>parseInt(l,10));return{have:e,need:n}}function Ve(){return B(`#pCC td[background^="${ue}ui/inventory/"]`).map(e=>e.parentElement.parentElement).map(Me)}function Z(){return Ve().reduce((e,n)=>Math.min(e,Math.floor(n.have/n.need)),1/0)}function Oe(t,e){return new Be({props:t,target:e})}function ze(t){let n=t.insertRow(-1).insertCell(-1);n.className="header",n.setAttribute("height","1")}function He(t){let n=t.insertRow(-1).insertCell(-1);return n.className="fshCenter",n}function $(){let t=D('input[name="recipe_id"]');if(!t)return;let e=Z(),n=le.lastElementChild;ze(n),Oe({max:e,recipeID:t.value},He(n))}function Ue(t){if(!t)return;let e=t.src.match(/\/items\/(\d+)\.gif/);if(e)return e[1]}function Je(t){return`${ce}items${me}view&item_id=${t}`}function Ke(t){return _e({href:Je(t),target:"_blank"})}function Le(t,e){let n=Ue(e);if(!n)return;let l=Ke(n);Ie(l,t),fe(l,t)}function We(t){Le(t,t)}function Xe(){let t=Ee('.//b[.="Target Invention"]/../../following-sibling::*[1]//img'),e=D("#pCC b");Le(e,t)}function Ye(){B('#pCC img[src*="/items/"]').forEach(We)}function ee(){Xe(),Ye()}function Ze(){pe()&&(ee(),$())}export{Ze as default};
//# sourceMappingURL=inventing-P2K6WOOC.js.map
