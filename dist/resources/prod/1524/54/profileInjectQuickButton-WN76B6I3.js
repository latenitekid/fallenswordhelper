import{C as X,T as Y,U as Z,a as h,b as K,d as W,o as n,p as T,q as $,s as c,t as _,u as k,w as g,y as o}from"./chunk-3UYX2GUA.js";import{b as tt}from"./chunk-ZPMOJM5U.js";import{a as F}from"./chunk-LTZMFODS.js";import{a as et}from"./chunk-S2BYBKXV.js";import{a as x}from"./chunk-4BRS4YID.js";import{a as L}from"./chunk-TQKI2CVR.js";import"./chunk-GYS6JAFZ.js";import{a as H}from"./chunk-YEGYUZNB.js";import{a as O}from"./chunk-DOGXLUG7.js";import"./chunk-BG5SGDVW.js";import{a as D}from"./chunk-SDLEVN3U.js";import"./chunk-PL52TDTI.js";import"./chunk-T5SOXK6H.js";import{a as y}from"./chunk-FKOF2WBO.js";import"./chunk-4BGELNLW.js";import{a as V}from"./chunk-MF5QCESC.js";import"./chunk-3WWWYMDW.js";import"./chunk-ZKT3V6EP.js";import"./chunk-JFH2ANYQ.js";import"./chunk-4RUOSMIM.js";import{b as M}from"./chunk-3PFYPJ7R.js";import{a as Q}from"./chunk-6U4GCDKS.js";import"./chunk-C6Z346VW.js";import{D as R,H as z,q as A,y as C}from"./chunk-4X7HEDV6.js";import{b as P}from"./chunk-XZ2D5B2Y.js";function it(e){let t,i,a,u,r;return{c(){t=c("button"),i=_("\xA0"),o(t,"class","fshTempleThree svelte-1xo8gqh"),o(t,"type","button"),o(t,"data-tooltip",a="Recall items from "+e[2])},m(l,m){T(l,t,m),n(t,i),u||(r=g(t,"click",e[7]),u=!0)},p:h,d(l){l&&$(t),u=!1,r()}}}function rt(e){let t,i,a,u,r;return{c(){t=c("button"),i=_("\xA0"),X(t,"background-image","url('"+P+"guilds/"+H()+"_mini.png')"),o(t,"type","button"),o(t,"data-tooltip",a="Rank "+e[2]),o(t,"class","svelte-1xo8gqh")},m(l,m){T(l,t,m),n(t,i),u||(r=g(t,"click",e[8]),u=!0)},p:h,d(l){l&&$(t),u=!1,r()}}}function ut(e){let t,i,a,u,r,l,m,w,q,s,G,v,S,f,j,nt,U,N,E=e[1]&&M("showAdmin"),I,J,p=e[1]&&it(e),d=E&&rt(e);return{c(){t=c("div"),i=c("button"),a=_("\xA0"),r=k(),l=c("button"),m=_("\xA0"),q=k(),s=c("button"),G=_("\xA0"),S=k(),f=c("button"),j=_("\xA0"),U=k(),p&&p.c(),N=k(),d&&d.c(),o(i,"class","fshQuickBuff svelte-1xo8gqh"),o(i,"type","button"),o(i,"data-tooltip",u="Buff "+e[2]),o(l,"class","fshJoin svelte-1xo8gqh"),o(l,"type","button"),o(l,"data-tooltip",w="Join All Groups"+e[0]),o(s,"class","fshGold svelte-1xo8gqh"),o(s,"type","button"),o(s,"data-tooltip",v="Go to "+e[2]+"'s auctions"),o(f,"class","fshTempleTwo svelte-1xo8gqh"),o(f,"type","button"),o(f,"data-tooltip",nt="Create Secure Trade to "+e[2])},m(b,B){T(b,t,B),n(t,i),n(i,a),n(t,r),n(t,l),n(l,m),n(t,q),n(t,s),n(s,G),n(t,S),n(t,f),n(f,j),n(t,U),p&&p.m(t,null),n(t,N),d&&d.m(t,null),I||(J=[g(i,"click",e[3]),g(l,"click",e[4]),g(s,"click",e[5]),g(f,"click",e[6])],I=!0)},p(b,[B]){b[1]&&p.p(b,B),E&&d.p(b,B)},i:h,o:h,d(b){b&&$(t),p&&p.d(),d&&d.d(),I=!1,K(J)}}}function at(e){let t=Q.enableMaxGroupSizeToJoin?` < ${Q.maxGroupSizeToJoin} Members`:"",i=tt(),a=O("player_id")||x(),u=F();function r(v){V("profile","quick button",v)}function l(v){v.target.blur(),r("quickbuff"),L(u)}function m(){r("join groups"),et()}function w(){r("auctions"),y(`${A}&type=-3&tid=${a}`)}function q(){r("secure trade"),y(`${C}${u}`)}function s(){r("recall items"),y(`${z}${u}`)}function G(){r("rank"),y(`${R}members&subcmd2=changerank&member_id=${a}`)}return[t,i,u,l,m,w,q,s,G]}var ot=class extends Z{constructor(t){super();Y(this,t,at,ut,W,{})}},lt=ot;function st(e,t){return new lt({anchor:e,target:t})}function mt(){let e=D('#profileLeftColumn img[src*="/avatars/"][width="200"]');!e||st(e.nextElementSibling,e.parentNode)}export{mt as default};
//# sourceMappingURL=profileInjectQuickButton-WN76B6I3.js.map
