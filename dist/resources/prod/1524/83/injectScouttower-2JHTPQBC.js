import{a as Pt}from"./chunk-JASJUY4Q.js";import{a as qt}from"./chunk-HLZ5R7IK.js";import{a as Rt}from"./chunk-3QKVGIG7.js";import"./chunk-T2ZWTBQQ.js";import{a as X,b as jt,c as At}from"./chunk-VAIJUE4T.js";import{a as It}from"./chunk-H6TFVFEZ.js";import{b as mt}from"./chunk-XE2XNMNF.js";import{a as G}from"./chunk-3HUFEQUZ.js";import{a as ct}from"./chunk-RUX24FMF.js";import"./chunk-22NDSWUA.js";import{a as Ht}from"./chunk-FM6AFUSK.js";import{a as at}from"./chunk-IPQRIINR.js";import{a as ft}from"./chunk-J2YTBFMQ.js";import"./chunk-WWB7JUK5.js";import"./chunk-NO7SFINI.js";import{a as U}from"./chunk-MWVD7HRM.js";import{a as Ft}from"./chunk-RTDZTKKP.js";import{a as wt}from"./chunk-ZD42GYOR.js";import"./chunk-MPETHKNA.js";import{a as L}from"./chunk-PV2RDUUR.js";import"./chunk-H3WTYK7C.js";import{a as lt}from"./chunk-DL6GUQIM.js";import"./chunk-LTRYMJWK.js";import{a as it}from"./chunk-MTAMC4CS.js";import{a as Bt}from"./chunk-ICOA7KWD.js";import"./chunk-JCXQ443E.js";import"./chunk-AP6R76CB.js";import"./chunk-T6VFD3IX.js";import{b as yt}from"./chunk-DA5WSKUB.js";import{a as St}from"./chunk-2U7PEDGC.js";import"./chunk-SDVU75NC.js";import"./chunk-7A3U2LLS.js";import{a as vt}from"./chunk-A4HIMH5N.js";import{a as Tt}from"./chunk-FIS7ZMBK.js";import{a as $}from"./chunk-5BP4JVZE.js";import"./chunk-LDDO6FQI.js";import"./chunk-FQ2MS6MU.js";import{a as H}from"./chunk-VGN4AH67.js";import"./chunk-PVNYCWKC.js";import{a as K,b as x}from"./chunk-BIVP4DQA.js";import"./chunk-YSZQHKVC.js";import{a as Et}from"./chunk-F4XKSAVO.js";import"./chunk-NNKWIEAR.js";import"./chunk-2URCAZZ2.js";import{a as Nt}from"./chunk-36R4KBE3.js";import{C as g,E as Ct,U as I,V as j,X as $t,Y as Lt,a as k,b as st,ba as P,ca as M,d as q,da as V,ea as O,fa as Q,r as f,s as y,t as w,u as et,v as p,w as E,x as T,z as F}from"./chunk-N4CD3AMK.js";import{a as R}from"./chunk-IBDVBQUM.js";import{a as tt}from"./chunk-IRWIJXBN.js";import{a as Z}from"./chunk-KA75H6XT.js";import"./chunk-E2T4BRJB.js";import"./chunk-42ECWD5I.js";import"./chunk-I3GZAXF5.js";import"./chunk-6IDEFJE7.js";import"./chunk-HBYLRJZK.js";import"./chunk-HVA3CNPK.js";import"./chunk-NIRCQTAI.js";import{Y as rt,va as kt}from"./chunk-XMFVZQFS.js";import"./chunk-7R4PXCUB.js";import"./chunk-63CI2ODV.js";function Jt(t){t.previousElementSibling&&ft(at(t.previousElementSibling.href))}var Wt=t=>at(t.cells[0].children[0].href);function Yt(t){let e=t.parentNode.parentNode.parentNode.parentNode,n=G(e,3,0).map(Wt).join();ft(n)}function Zt(t){let{target:e}=t;it("[b]",e)&&Jt(e),it("all",e)&&Yt(e)}function Kt(t){wt("fshBl",t.target)&&Zt(t)}function xt(t){L(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function te(t){G(t,3,0).forEach(xt),L(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function ee(t,e){return t.rows.length>1&&e>1}function ne(t){Z(t).filter(ee).forEach(te),Nt(t[1],Kt)}function ut(t){t.length>2&&ne(t)}function oe(t,e,n){return`<br><span class="fshBlue"> (${mt(jt(n-e,t),2)}% Current <br>${mt(t*100/n,2)}% Total<br>${At(t,n,e)})`}function re(t){let e=t.hp.split("/");L(t.tr.cells[3],oe(Number($(t.tr.cells[3])),Number(e[0]),Number(e[1])))}function pt(t){!t.active||re(t)}function Mt(t,e,n){let r=t.slice();return r[4]=e[n][0],r[5]=e[n][1],r}function Vt(t){let e,n,r=t[4]+"",u,c,l,o=t[5].cooldownText+"",m,s,i,h=t[5].seen+"",b,S;return{c(){e=p("tr"),n=p("td"),u=E(r),c=T(),l=p("td"),m=E(o),s=T(),i=p("td"),b=E(h),S=T(),g(n,"class","svelte-1g6lyd8"),g(l,"class","cd svelte-1g6lyd8"),g(i,"class","svelte-1g6lyd8")},m(_,N){y(_,e,N),f(e,n),f(n,u),f(e,c),f(e,l),f(l,m),f(e,s),f(e,i),f(i,b),f(e,S)},p:k,d(_){_&&w(e)}}}function le(t){let e,n,r,u,c=t[0](),l=[];for(let o=0;o<c.length;o+=1)l[o]=Vt(Mt(t,c,o));return{c(){e=p("table"),n=p("tbody"),r=p("tr"),r.innerHTML=`<td class="header svelte-1g6lyd8">Titan</td> 
      <td class="header svelte-1g6lyd8">Cooldown</td> 
      <td class="header svelte-1g6lyd8">Visible</td>`,u=T();for(let o=0;o<l.length;o+=1)l[o].c();g(e,"class","svelte-1g6lyd8")},m(o,m){y(o,e,m),f(e,n),f(n,r),f(n,u);for(let s=0;s<l.length;s+=1)l[s].m(n,null)},p(o,[m]){if(m&1){c=o[0]();let s;for(s=0;s<c.length;s+=1){let i=Mt(o,c,s);l[s]?l[s].p(i,m):(l[s]=Vt(i),l[s].c(),l[s].m(n,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=c.length}},i:k,o:k,d(o){o&&w(e),et(l,o)}}}function ie(t,e,n){let{theTitans:r}=e,u=([,o])=>o.coolTime>tt(),c=([,o],[,m])=>o.coolTime-m.coolTime,l=()=>H(r).filter(u).sort(c);return t.$$set=o=>{"theTitans"in o&&n(1,r=o.theTitans)},[l,r]}var ht=class extends Q{constructor(e){super(),O(this,e,ie,le,q,{theTitans:1})}},Ot=ht;function Qt(t,e,n){let r=t.slice();return r[23]=e[n][0],r[24]=e[n][1],r[25]=e,r[26]=n,r}function se(t){return{c:k,m:k,p:k,i:k,o:k,d:k}}function ce(t){let e,n,r,u,c,l,o,m=t[2],s=[];for(let i=0;i<m.length;i+=1)s[i]=Ut(Qt(t,m,i));return u=new ct({props:{$$slots:{default:[ae]},$$scope:{ctx:t}}}),u.$on("click",t[7]),l=new ct({props:{$$slots:{default:[fe]},$$scope:{ctx:t}}}),l.$on("click",t[8]),{c(){e=p("div");for(let i=0;i<s.length;i+=1)s[i].c();n=T(),r=p("div"),P(u.$$.fragment),c=T(),P(l.$$.fragment),g(e,"id","titan-list"),g(e,"class","svelte-1s0h251"),g(r,"class","svelte-1s0h251")},m(i,h){y(i,e,h);for(let b=0;b<s.length;b+=1)s[b].m(e,null);y(i,n,h),y(i,r,h),M(u,r,null),f(r,c),M(l,r,null),o=!0},p(i,h){if(h&68){m=i[2];let _;for(_=0;_<m.length;_+=1){let N=Qt(i,m,_);s[_]?s[_].p(N,h):(s[_]=Ut(N),s[_].c(),s[_].m(e,null))}for(;_<s.length;_+=1)s[_].d(1);s.length=m.length}let b={};h&134217728&&(b.$$scope={dirty:h,ctx:i}),u.$set(b);let S={};h&134217728&&(S.$$scope={dirty:h,ctx:i}),l.$set(S)},i(i){o||(I(u.$$.fragment,i),I(l.$$.fragment,i),o=!0)},o(i){j(u.$$.fragment,i),j(l.$$.fragment,i),o=!1},d(i){i&&w(e),et(s,i),i&&w(n),i&&w(r),V(u),V(l)}}}function Ut(t){let e,n,r,u=t[23]+"",c,l,o,m;function s(){t[13].call(n,t[25],t[26])}return{c(){e=p("label"),n=p("input"),r=T(),c=E(u),l=T(),g(n,"type","checkbox"),g(e,"class","svelte-1s0h251")},m(i,h){y(i,e,h),f(e,n),n.checked=t[24],f(e,r),f(e,c),y(i,l,h),o||(m=[F(n,"change",s),F(n,"change",t[6])],o=!0)},p(i,h){t=i,h&4&&(n.checked=t[24]),h&4&&u!==(u=t[23]+"")&&Ct(c,u)},d(i){i&&w(e),i&&w(l),o=!1,st(m)}}}function ae(t){let e;return{c(){e=E("Select All")},m(n,r){y(n,e,r)},d(n){n&&w(e)}}}function fe(t){let e;return{c(){e=E("Select None")},m(n,r){y(n,e,r)},d(n){n&&w(e)}}}function me(t){return{c:k,m:k,p:k,i:k,o:k,d:k}}function ue(t){let e,n,r,u,c,l,o,m,s,i,h,b,S,_,N,J,B,C,nt,W,D,A,z,Y,v={ctx:t,current:null,token:null,hasCatch:!1,pending:me,then:ce,catch:se,blocks:[,,,]};return $t(nt=t[3](),v),{c(){e=p("table"),n=p("tbody"),r=p("tr"),r.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',u=T(),c=p("tr"),l=p("td"),o=p("label"),m=p("input"),s=E(`
          Current`),i=T(),h=p("label"),b=p("input"),S=E(`
          History`),_=T(),N=p("tr"),N.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',J=T(),B=p("tr"),C=p("td"),v.block.c(),W=T(),D=p("tr"),D.innerHTML='<td class="header svelte-1s0h251" colspan="3"></td>',g(m,"type","checkbox"),g(o,"class","svelte-1s0h251"),g(b,"type","checkbox"),g(h,"class","svelte-1s0h251"),g(l,"colspan","3"),g(l,"class","svelte-1s0h251"),g(C,"colspan","3"),g(C,"class","svelte-1s0h251"),g(e,"class","svelte-1s0h251")},m(a,d){y(a,e,d),f(e,n),f(n,r),f(n,u),f(n,c),f(c,l),f(l,o),f(o,m),m.checked=t[0],f(o,s),f(l,i),f(l,h),f(h,b),b.checked=t[1],f(h,S),f(n,_),f(n,N),f(n,J),f(n,B),f(B,C),v.block.m(C,v.anchor=null),v.mount=()=>C,v.anchor=null,f(n,W),f(n,D),A=!0,z||(Y=[F(m,"change",t[11]),F(m,"change",t[4]),F(b,"change",t[12]),F(b,"change",t[5])],z=!0)},p(a,[d]){t=a,d&1&&(m.checked=t[0]),d&2&&(b.checked=t[1]),Lt(v,t,d)},i(a){A||(I(v.block),A=!0)},o(a){for(let d=0;d<3;d+=1){let ot=v.blocks[d];j(ot)}A=!1},d(a){a&&w(e),v.block.d(),v.token=null,v=null,z=!1,st(Y)}}}var Xt="fsh_titanFilter";function pe(t,e,n){let{theTitans:r}=e,{titanRows:u}=e,c=!0,l=!0,o=[],m=([a],[d])=>Bt(a,d),s=()=>K(Xt),i=()=>x(Xt,{current:c,history:l,titans:o}),h=({titanName:a})=>o.find(([d])=>d===a)[1],b=()=>H({...U(H(r).map(([a])=>[a,!0])),...U(o.map(([a,d])=>[X(a),d]))}).sort(m);function S(a){return!((a.active&&c||!a.active&&l)&&h(a))}function _([a,d]){let ot=Z(Rt(a.tr).rows),bt=a.tr.rowIndex;ot.slice(bt,bt+6).forEach(Gt=>It(Gt,d)),a.visible=!d}function N(){u.map(a=>[a,S(a)]).filter(([a,d])=>a.visible===d).forEach(_)}async function J(){let a=await s();a&&n(0,{current:c,history:l,titans:o}=a,c,n(1,l),n(2,o)),n(2,o=b()),N()}function B(){i(),N()}function C(){R("TitanFilter","toggleCurrent"),B()}function nt(){R("TitanFilter","toggleHistory"),B()}function W(){R("TitanFilter","toggleTitan"),B()}function D(){R("TitanFilter","selectAll"),n(2,o=o.map(([a])=>[a,!0])),B()}function A(){R("TitanFilter","selectNone"),n(2,o=o.map(([a])=>[a,!1])),B()}function z(){c=this.checked,n(0,c)}function Y(){l=this.checked,n(1,l)}function v(a,d){a[d][1]=this.checked,n(2,o)}return t.$$set=a=>{"theTitans"in a&&n(9,r=a.theTitans),"titanRows"in a&&n(10,u=a.titanRows)},[c,l,o,J,C,nt,W,D,A,r,u,z,Y,v]}var dt=class extends Q{constructor(e){super(),O(this,e,pe,ue,q,{theTitans:9,titanRows:10})}},Dt=dt;function he(t){let e,n,r,u,c,l;return r=new Ot({props:{theTitans:t[0]}}),c=new Dt({props:{theTitans:t[0],titanRows:t[1]}}),{c(){e=p("tr"),n=p("td"),P(r.$$.fragment),u=T(),P(c.$$.fragment),g(n,"colspan","3")},m(o,m){y(o,e,m),f(e,n),M(r,n,null),f(n,u),M(c,n,null),l=!0},p(o,[m]){let s={};m&1&&(s.theTitans=o[0]),r.$set(s);let i={};m&1&&(i.theTitans=o[0]),m&2&&(i.titanRows=o[1]),c.$set(i)},i(o){l||(I(r.$$.fragment,o),I(c.$$.fragment,o),l=!0)},o(o){j(r.$$.fragment,o),j(c.$$.fragment,o),l=!1},d(o){o&&w(e),V(r),V(c)}}}function de(t,e,n){let{theTitans:r}=e,{titanRows:u}=e;return t.$$set=c=>{"theTitans"in c&&n(0,r=c.theTitans),"titanRows"in c&&n(1,u=c.titanRows)},[r,u]}var gt=class extends Q{constructor(e){super(),O(this,e,de,he,q,{theTitans:0,titanRows:1})}},zt=gt;function ge(t,e,n){return new zt({anchor:t.rows[5],props:{theTitans:e,titanRows:n},target:t.children[0]})}var _e=t=>t.includes("until")?qt(t.replace("Cooldown until: ","")):0;function be(t){let e=$(t.nextElementSibling.cells[0]);return{cooldownText:e,coolTime:_e(e),seen:"yes"}}var ke=({titanName:t,tr:e})=>[t,be(e)];function Te(t,e){return U(H(t).map(([n,r])=>[X(n),r]).filter(([n])=>!e[n]).filter(([,n])=>n.coolTime>tt()).map(([n,r])=>[n,{...r,seen:"no"}]))}function ve(t,e){let n=U(Ht(e,"titanName").map(ke));return{...n,...t&&Te(t,n)}}async function _t(t,e){let n=ve(await K("fsh_titans"),e);t[0].rows.length>5&&ge(t[0],n,e),x("fsh_titans",n)}function ye(t){let e=encodeURIComponent(t.titanName),[n]=t.tr.cells[0].children,r=Ft({href:`${rt}creatures&search_name=${e}`,target:"_blank"});lt(r,n),lt(t.tr.cells[0],r)}function we(t){let[,e]=t.tr.cells,n=$(e);St(`<a href="${rt}realms&search_name=${n}" target="_blank">${n}</a>`,e)}function Ne(t){L(t.tr.cells[0],t.titanName)}function Se(t){ye(t),Ne(t)}function Ee(t){pt(t),Se(t),we(t)}function Be(t){return Pt(Tt("img",t))}var Ce=t=>({hp:$(t.cells[2]),titanName:X(Be(t)),tr:t,visible:!0}),$e=t=>({...t,active:!t.hp.includes("-")}),Le=t=>G(t[1],4,0).map(Ce).map($e);function He(){if(Et())return;let t=vt(kt,yt());ut(t);let e=Le(t);e.forEach(Ee),_t(t,e)}export{He as default};
//# sourceMappingURL=injectScouttower-2JHTPQBC.js.map
