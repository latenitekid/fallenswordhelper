import{b as te,c as oe,d as re,e as ne,g as le}from"./chunk-RWY7FQJD.js";import"./chunk-FLYLIOFN.js";import"./chunk-GZ26ANWK.js";import"./chunk-F7VBVM3L.js";import{a as ee}from"./chunk-MHEAWGS5.js";import{a as Z}from"./chunk-IY4YO5RK.js";import"./chunk-V6GVUJKR.js";import"./chunk-L6MDEW5K.js";import{a as Y}from"./chunk-VIRWVNY3.js";import"./chunk-LHT35R35.js";import"./chunk-SYQA2O7R.js";import{a as B}from"./chunk-MD2EH2NG.js";import"./chunk-UQ7V6CON.js";import"./chunk-Y24FSK65.js";import"./chunk-SGZWGWEO.js";import"./chunk-IR3ZQHO6.js";import{a as v}from"./chunk-C5YPBNBG.js";import"./chunk-XIPN7LYN.js";import{a as x}from"./chunk-ABGPYC4Y.js";import"./chunk-X7E2SA4E.js";import"./chunk-OXGD46RT.js";import{$ as j,B as U,J as M,O as W,P as X,Q as $,R as F,Y as S,Z as y,_ as N,a as A,aa as q,d as E,o as I,p as u,q as p,r as K,s as w,t as b,u as T,w as O,z as h}from"./chunk-HFFCEKOB.js";import"./chunk-XHRK2COI.js";import"./chunk-QDNGOWRP.js";import"./chunk-4MFIQJXK.js";import"./chunk-H7QQAWWL.js";import"./chunk-PF6DJFMF.js";import"./chunk-5J6NAHWT.js";import"./chunk-CCLZNKSK.js";import"./chunk-ZM6HBKU4.js";import"./chunk-WLV3S4QF.js";import{a as g}from"./chunk-2R5YWF5Y.js";import"./chunk-AQVHZUV2.js";import"./chunk-4EQLU7T2.js";import"./chunk-NJOQ3NDV.js";import"./chunk-OOBHF62J.js";import"./chunk-6ESEJ6CM.js";import{a as G}from"./chunk-QIL4FZV2.js";import"./chunk-IZXJJTGC.js";import"./chunk-V6NNO7H4.js";import"./chunk-27EEPRQG.js";import"./chunk-2XEVBCYQ.js";import"./chunk-UVOACIBU.js";import"./chunk-7L7VBHFN.js";import"./chunk-7P2FG6TX.js";import"./chunk-B4BQ57SA.js";import"./chunk-LXEIN7K6.js";import"./chunk-7FSBX4F6.js";import"./chunk-FOD25WME.js";import"./chunk-RSDTLHOA.js";import"./chunk-CRTXBDKV.js";import"./chunk-NB536QSB.js";import"./chunk-32VOUESG.js";import"./chunk-WIXXQZGK.js";import"./chunk-VAF5SHD2.js";import"./chunk-7OIIEMPN.js";import{a as C}from"./chunk-G6KH6V7U.js";import{a as d}from"./chunk-JTZMGYZZ.js";import"./chunk-IYLDI6QO.js";import{a as J}from"./chunk-ZSG7IXEN.js";import"./chunk-MC5PPM6O.js";import"./chunk-3HBYM6UL.js";import"./chunk-NYKMXDP7.js";import"./chunk-2PPLUYZS.js";import{b as R}from"./chunk-CJBVZNBW.js";import"./chunk-LBZNNC2Y.js";import"./chunk-6VTPYDCU.js";import{a as z}from"./chunk-L67WY5JB.js";import"./chunk-M7EFODKE.js";import"./chunk-N5EIINNY.js";function ae(o){let e,t,r,n;return{c(){e=w("button"),e.textContent="Check All",t=b("\xA0"),h(e,"class","custombutton svelte-1recp8w"),h(e,"type","button")},m(i,m){u(i,e,m),u(i,t,m),r||(n=O(e,"click",o[0]),r=!0)},p:A,i:A,o:A,d(i){i&&p(e),i&&p(t),r=!1,n()}}}function ue(o){let e=M();function t(){g("storeitems","Check All"),e("checkall")}return[t]}var D=class extends q{constructor(e){super(),j(this,e,ue,ae,E,{})}},ie=D;function ce(o,e,t){let r=o.slice();return r[6]=e[t][0],r[7]=e[t][1],r}function pe(o){let e;return{c(){e=b("All")},m(t,r){u(t,e,r)},d(t){t&&p(e)}}}function de(o){let e;return{c(){e=b("Main")},m(t,r){u(t,e,r)},d(t){t&&p(e)}}}function he(o){let e=o[7]+"",t;return{c(){t=b(e)},m(r,n){u(r,t,n)},p(r,n){n&1&&e!==(e=r[7]+"")&&U(t,e)},d(r){r&&p(t)}}}function se(o){let e,t;function r(){return o[4](o[6])}return e=new x({props:{$$slots:{default:[he]},$$scope:{ctx:o}}}),e.$on("click",r),{c(){S(e.$$.fragment)},m(n,i){y(e,n,i),t=!0},p(n,i){o=n;let m={};i&1025&&(m.$$scope={dirty:i,ctx:o}),e.$set(m)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){F(e.$$.fragment,n),t=!1},d(n){N(e,n)}}}function $e(o){let e,t,r,n,i,m,_;r=new x({props:{$$slots:{default:[pe]},$$scope:{ctx:o}}}),r.$on("click",o[2]),i=new x({props:{$$slots:{default:[de]},$$scope:{ctx:o}}}),i.$on("click",o[3]);let a=C(o[0].folders),l=[];for(let c=0;c<a.length;c+=1)l[c]=se(ce(o,a,c));let me=c=>F(l[c],1,1,()=>{l[c]=null});return{c(){e=w("tr"),t=w("td"),S(r.$$.fragment),n=T(),S(i.$$.fragment),m=T();for(let c=0;c<l.length;c+=1)l[c].c();h(t,"colspan","3"),h(t,"class","svelte-1kpx3t5"),h(e,"class","fshCenter")},m(c,s){u(c,e,s),I(e,t),y(r,t,null),I(t,n),y(i,t,null),I(t,m);for(let k=0;k<l.length;k+=1)l[k].m(t,null);_=!0},p(c,[s]){let k={};s&1024&&(k.$$scope={dirty:s,ctx:c}),r.$set(k);let P={};if(s&1024&&(P.$$scope={dirty:s,ctx:c}),i.$set(P),s&3){a=C(c[0].folders);let f;for(f=0;f<a.length;f+=1){let Q=ce(c,a,f);l[f]?(l[f].p(Q,s),$(l[f],1)):(l[f]=se(Q),l[f].c(),$(l[f],1),l[f].m(t,null))}for(W(),f=a.length;f<l.length;f+=1)me(f);X()}},i(c){if(!_){$(r.$$.fragment,c),$(i.$$.fragment,c);for(let s=0;s<a.length;s+=1)$(l[s]);_=!0}},o(c){F(r.$$.fragment,c),F(i.$$.fragment,c),l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)F(l[s]);_=!1},d(c){c&&p(e),N(r),N(i),K(l,c)}}}function _e(o,e,t){let r=M(),{inv:n={folders:{}}}=e;function i(l){g("storeitems","Filter Folder"),r("filter",l)}let m=()=>i("-2"),_=()=>i("-1"),a=l=>i(l);return o.$$set=l=>{"inv"in l&&t(0,n=l.inv)},[n,i,m,_,a]}var L=class extends q{constructor(e){super(),j(this,e,_e,$e,E,{inv:0})}},fe=L;function ke(o,e){return new fe({anchor:e,props:{inv:o},target:e.parentNode})}function ge(o,e,t){t.checked=!1;let r=B(t),n=o.items[t.value].folder_id,i=e!==-2&&e!==n;v(r,i),v(r.nextElementSibling,i)}function ve(o,e){ee([5,3,te(),0,d(ge,o,Number(e.detail))])}function V(o,e){ke(o,e).$on("filter",d(ve,o))}function be(o,e){let t=[{id:"-1",name:"Main"},...C(o.folders).map(([r,n])=>({id:r,name:n}))];return new oe({anchor:e,props:{folders:t},target:e.parentNode})}function Fe(o,e,t){o.items[t].folder_id=Number(e)}function Ce(o,e,t){t.checked=!1,Fe(o,e,t.value);let r=B(t);v(r,!0),v(r.nextElementSibling,!0)}async function we(o,e,t){(await re(e,t.map(n=>n.value))).s&&t.forEach(d(Ce,o,e))}function Ae(o,e){g("storeitems","Move to Folder");let t=G('[name="storeIndex[]"]:checked');Z(30,t).forEach(d(we,o,e.detail))}function H(o,e){be(o,e).$on("move",d(Ae,o))}async function Ee(){let o=await Y();if(!o.folders)return;let[e]=document.forms;V(o,e),H(o,e)}function Ie(){ne().forEach(o=>{o.checked=!o.disabled&&!o.checked})}function Me(){let[o]=z(document.forms[0].elements).filter(t=>t.type==="submit");new ie({anchor:o,target:o.parentNode}).$on("checkall",Ie)}function Se(){J()&&R("enableFolderFilter")&&Ee(),Me(),le()}export{Se as default};
//# sourceMappingURL=storeitems-DTJJWN2P.js.map
