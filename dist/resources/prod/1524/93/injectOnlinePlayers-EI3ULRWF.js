import{a as q,b as _}from"./chunk-MU475SHB.js";import{a as G}from"./chunk-PC4SHNM4.js";import"./chunk-PCAYV66D.js";import"./chunk-EQSJ445I.js";import"./chunk-GP4TXAI5.js";import"./chunk-BBCLD2TK.js";import{a as S,b as B}from"./chunk-LKZDMDZX.js";import{a as V}from"./chunk-552VPXCH.js";import{a as j}from"./chunk-73NUJ3MC.js";import{a as E}from"./chunk-X4VDSDVS.js";import{a as T}from"./chunk-VPC3HWQY.js";import"./chunk-QCQENXXV.js";import"./chunk-NNMJOK5U.js";import{a as H}from"./chunk-4463IFOY.js";import"./chunk-7Z2VPPBD.js";import"./chunk-5XYXKH5Z.js";import{a as d}from"./chunk-ZG3FJC5I.js";import{a as p}from"./chunk-QOOVEHWY.js";import{a as I}from"./chunk-EGS4CZL3.js";import"./chunk-SDYIYOUC.js";import"./chunk-D2RKZAOL.js";import{a as O}from"./chunk-MI5ERUAI.js";import"./chunk-OX3SBSJB.js";import{a as N}from"./chunk-L4JCGVZD.js";import"./chunk-R5QRYD7G.js";import"./chunk-RDAHQVBW.js";import"./chunk-Z6KB7KN6.js";import"./chunk-DP37WUXB.js";import"./chunk-MT2H2XVD.js";import"./chunk-LGDJTMPN.js";import{a}from"./chunk-66FBRD7Z.js";import"./chunk-GKVMJ4PA.js";import{a as k,b as D}from"./chunk-KCGDJ5EJ.js";import"./chunk-6ME2NWD5.js";import"./chunk-IFV2NFCC.js";import{a as C}from"./chunk-A45QJTDQ.js";import"./chunk-6YW6FXRF.js";import"./chunk-GDLA3KMJ.js";import{a as R}from"./chunk-CRWX7KCS.js";import{a as m}from"./chunk-WFI3HTBS.js";import"./chunk-5RFQSTDG.js";import"./chunk-4MID3VOD.js";import"./chunk-5L4CLVOL.js";import{a as s}from"./chunk-HYLQEGZ4.js";import"./chunk-7I6ASYKS.js";import"./chunk-R2OFDU54.js";import{a as x}from"./chunk-CEGJSIVU.js";import{a as u,b as i}from"./chunk-G6TPLPCG.js";import"./chunk-IMGI5UI2.js";import{a as w}from"./chunk-E53ZSUER.js";import{h as M}from"./chunk-UYN3LUIY.js";import"./chunk-U6BMTRHL.js";import"./chunk-3WE6KSRQ.js";function Y(e,t){let r=$("<div/>").append(e[t][0]);return $("img",r).addClass("fshImgCntr"),[r.html(),e[t][1],e[t][2],e[t][3]*100+e[t][4]+1]}function v(e){return E(e).map(s(Y,e))}var A=0,F=0;function Z(e){let t=x(M,e);if(t)return Number(t)}var ee=[()=>A,e=>Z(e[0])!==H(),e=>p(e[2])>=q(),e=>p(e[2])<=_()];function te(e){return ee.every(t=>t(e))}function re(e,t){te(t)&&$("td",e).eq(2).addClass("lvlHighlight")}function ne(e){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:re,data:e,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}function Q(e,t){A=i("highlightPlayersNearMyLvl"),F=$("#fshInv",e).DataTable(ne(t))}function h(){F.draw()}function g(e){(e.target.id==="fshMinLvl"||e.target.id==="fshMaxLvl")&&h()}function y(){let e=i("lastOnlineCheck");return m()-e>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(m()-e)/1e3)}s ]</span>`}function U(e,t){return parseInt($(e,t).val(),10)}function W(e,t){j(t)||a(e,t)}function ie(e,t,r){let o=U("#fshMinLvl",e),f=U("#fshMaxLvl",e);W("onlinePlayerMinLvl",o),W("onlinePlayerMaxLvl",f);let X=O(p(r[2]),0);return B(S,X,o,f)}function L(e){$.fn.dataTable.ext.search.push(s(ie,e)),$("#fshOutput",e).html(`<div align=right>Min lvl:<input value="${i("onlinePlayerMinLvl")}" class="fshNumberInput" type="number" id="fshMinLvl" min="0"> Max lvl:<input value="${i("onlinePlayerMaxLvl")}" class="fshNumberInput" type="number" id="fshMaxLvl" min="0"> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table><div>Last updated: ${G(new Date(i("lastOnlineCheck")))}</div>`)}function P(e){a("onlinePlayerMinLvl",u.onlinePlayerMinLvl),a("onlinePlayerMaxLvl",u.onlinePlayerMaxLvl),$("#fshMinLvl",e).val(u.onlinePlayerMinLvl),$("#fshMaxLvl",e).val(u.onlinePlayerMaxLvl),h()}var n=0,l=0,c=0,b=0;function z(e){l=e||{},L(n),Q(n,v(l))}function le(){c===b&&(D("fsh_onlinePlayers",l),z(l))}function ae(e,t){return l[e]&&l[e][3]>t}function oe(e,t,r){return[r.eq(0).html(),r.eq(1).html(),r.eq(2).text(),e,t]}function se(e,t,r){let o=$("td",$(r)),f=o.eq(1).text();ae(f,e)||(l[f]=oe(e,t,o))}function fe(e,t){let r=t.attr("value");$('#pCC img[src$="/world/icon_action_view.png',e).parent().parent().parent().each(s(se,r))}function ue(e){let{page:t}=I(/(?<page>\d+)/,e.parent().text());return parseInt(t,10)}function me(e,t){b=ue(t);for(let r=2;r<=b;r+=1)d(r).then(e)}function J(e){$("#fshOutput",n).append(e)}function K(e){J(` ${c+1}`);let t=N(e),r=$("#pCC input.custominput",t).first();fe(t,r),c+=1,c===1&&me(K,r),le()}function pe(){$("#fshRefresh",n).hide(),c=0,l={},d(1).then(K),a("lastOnlineCheck",m()),J("Parsing online players...")}var ce=[["fshRefresh",pe],["fshReset",()=>P(n)]];function he(){n.html(`<span><b>Online Players</b></span>${y()}<div id="fshOutput"></div>`),k("fsh_onlinePlayers").then(z),R(n[0],T(ce)),w(n[0],"keyup",g)}function de(e){C()||(n=e?$(e):$("#pCC"),V().then(he))}export{de as default};
//# sourceMappingURL=injectOnlinePlayers-EI3ULRWF.js.map