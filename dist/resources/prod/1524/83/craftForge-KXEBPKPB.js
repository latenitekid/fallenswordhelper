import{a as ee}from"./chunk-JKFSV75B.js";import{a as Z}from"./chunk-3QKVGIG7.js";import{a as x}from"./chunk-3W2JOXSH.js";import"./chunk-RFUN3MLD.js";import{a as X}from"./chunk-RX5J4B35.js";import"./chunk-ZGPBRHUX.js";import{a as O}from"./chunk-X4VLUIK5.js";import"./chunk-22NDSWUA.js";import{a as U}from"./chunk-GZS6UFPW.js";import"./chunk-TDCAXB54.js";import{a as Y}from"./chunk-VREDNCJP.js";import"./chunk-NO7SFINI.js";import"./chunk-MWVD7HRM.js";import"./chunk-KW4JDCFK.js";import"./chunk-5RSEZT5D.js";import{a as T}from"./chunk-C356XHRD.js";import"./chunk-IEWOVM7F.js";import{a as F}from"./chunk-3EH7LBGV.js";import{a as y}from"./chunk-DL6GUQIM.js";import"./chunk-LTRYMJWK.js";import"./chunk-743N7EMW.js";import{b}from"./chunk-DA5WSKUB.js";import"./chunk-SDVU75NC.js";import"./chunk-LXEUXBA2.js";import{a as P}from"./chunk-FIS7ZMBK.js";import"./chunk-FQRLW5RO.js";import"./chunk-LDDO6FQI.js";import"./chunk-FQ2MS6MU.js";import"./chunk-VGN4AH67.js";import"./chunk-YSZQHKVC.js";import{a as B}from"./chunk-NNKWIEAR.js";import"./chunk-2URCAZZ2.js";import"./chunk-S46POC2Y.js";import{C as p,N as R,U as $,V as E,X as S,Y as V,a as s,b as L,ba as z,ca as H,d as W,da as J,ea as K,fa as M,r as g,s as m,t as a,v as d,w as j,x as Q,y as C,z as I}from"./chunk-N4CD3AMK.js";import{a as w}from"./chunk-IBDVBQUM.js";import{a as G}from"./chunk-V4PGHHTG.js";import"./chunk-BG6TMPV6.js";import"./chunk-KA75H6XT.js";import"./chunk-2H46HLMH.js";import{a as A}from"./chunk-E2T4BRJB.js";import"./chunk-42ECWD5I.js";import"./chunk-I3GZAXF5.js";import"./chunk-6IDEFJE7.js";import"./chunk-HBYLRJZK.js";import"./chunk-HVA3CNPK.js";import"./chunk-NIRCQTAI.js";import"./chunk-XMFVZQFS.js";import{a as u}from"./chunk-7R4PXCUB.js";import"./chunk-63CI2ODV.js";function ne(e){return{c:s,m:s,p:s,i:s,o:s,d:s}}function ie(e){let t,r,c,o,l;r=new O({props:{folders:e[7].folders,needsWorn:"1"}}),r.$on("filter",e[2]);let n=u.cmd==="hellforge"&&le(e);return{c(){t=d("div"),z(r.$$.fragment),c=Q(),n&&n.c(),o=C(),p(t,"class","buttonContainer svelte-d80pei")},m(i,f){m(i,t,f),H(r,t,null),m(i,c,f),n&&n.m(i,f),m(i,o,f),l=!0},p(i,f){let h={};f&1&&(h.folders=i[7].folders),r.$set(h),u.cmd==="hellforge"&&n.p(i,f)},i(i){l||($(r.$$.fragment,i),l=!0)},o(i){E(r.$$.fragment,i),l=!1},d(i){i&&a(t),J(r),i&&a(c),n&&n.d(i),i&&a(o)}}}function le(e){let t,r,c,o,l,n;return{c(){t=d("div"),r=d("label"),c=j(`Perfect
        `),o=d("input"),p(o,"type","checkbox"),p(o,"class","svelte-d80pei"),p(r,"class","svelte-d80pei"),p(t,"class","svelte-d80pei")},m(i,f){m(i,t,f),g(t,r),g(r,c),g(r,o),o.checked=e[1],l||(n=[I(o,"change",e[4]),I(o,"change",e[3])],l=!0)},p(i,f){f&2&&(o.checked=i[1])},d(i){i&&a(t),l=!1,L(n)}}}function ce(e){return{c:s,m:s,p:s,i:s,o:s,d:s}}function fe(e){let t,r,c,o={ctx:e,current:null,token:null,hasCatch:!1,pending:ce,then:ie,catch:ne,value:7,blocks:[,,,]};return S(r=e[0],o),{c(){t=C(),o.block.c()},m(l,n){m(l,t,n),o.block.m(l,o.anchor=n),o.mount=()=>t.parentNode,o.anchor=t,c=!0},p(l,[n]){e=l,o.ctx=e,n&1&&r!==(r=e[0])&&S(r,o)||V(o,e,n)},i(l){c||($(o.block),c=!0)},o(l){for(let n=0;n<3;n+=1){let i=o.blocks[n];E(i)}c=!1},d(l){l&&a(t),o.block.d(l),o.token=null,o=null}}}function se(e,t,r){let c=-2,o=R(),{prm:l=0}=t,n=!1;function i(_){w("craftForge","doFilter"),c=Number(_.detail),o("doFilter",[c,n])}function f(){w("craftForge","perfChange"),o("doFilter",[c,n])}function h(){n=this.checked,r(1,n)}return e.$$set=_=>{"prm"in _&&r(0,l=_.prm)},[l,n,i,f,h]}var D=class extends M{constructor(t){super(),K(this,t,se,fe,W,{prm:0})}},te=D;var oe=0,k=0,q=0,v=0,N=0,me=()=>G(`a[href*="=${u.cmd}&"]`,b()),ae=e=>e.href.split("=")[2],pe=e=>[e,oe.items[ae(e)]],ue=()=>Z(P('img[src*="/items/"]',b())),de=()=>X(v).previousElementSibling.children[0],he=(e,t)=>t===-2||t===-3&&e.equipped||e.folder_id===t,_e=(e,t)=>!t||e.craft==="Perfect",re=(e,t,r)=>he(e,t)&&_e(e,r);function be(){return N||(N=me().map(pe)),N}function ge(){return new te({props:{prm:q},target:de()})}function ke(e,t,[r,c]){let o=F();re(c,e,t)&&o.classList.add("fshCraftForgeShow"),y(o,r),y(k,o)}function ve(e,t,r){e.forEach(([c,o])=>{c.parentNode.classList.toggle("fshCraftForgeShow",re(o,t,r))})}function we({detail:[e,t]}){let r=be();k?ve(r,e,t):(k=F({className:"fshCraftForgeGrid"}),Y(v.parentNode,k),U(v),T(3,ee,[[3,r,0,A(ke,e,t)]]))}async function Fe(){B()&&b()&&(q=x(),v=ue(),ge().$on("doFilter",we),oe=await q)}export{Fe as default};
//# sourceMappingURL=craftForge-KXEBPKPB.js.map
