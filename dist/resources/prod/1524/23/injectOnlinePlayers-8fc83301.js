import{aq as e,t as n,G as t,bj as a,a4 as s,a2 as l,Y as i,aU as r,x as o,o as f,f as c,v as u}from"./calfSystem-019de1cf.js"
import{n as h}from"./numberIsNaN-cb2409eb.js"
import{c as d}from"./currentGuildId-a399e8da.js"
import{i as p}from"./intValue-0e84cdad.js"
import"./valueText-4e1cfc2e.js"
import{b as v,p as m,c as g}from"./levelHighlight-8398ff9a.js"
import{g as y,s as M}from"./idb-1bb3cee2.js"
import{l as L,p as b}from"./lvlTests-8fcd92f9.js"
import"./all-9da52a21.js"
import{l as x}from"./loadDataTables-be4d5e60.js"
import{o as P}from"./onlinePlayersPage-e0f65c72.js"
function j(e,n){const t=$("<div/>").append(e[n][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),e[n][1],e[n][2],100*e[n][3]+e[n][4]+1]}let C,R
const I=[()=>C,e=>function(e){const n=e.match(a)
if(n)return Number(n[1])}(e[0])!==d(),e=>p(e[2])>=v,e=>p(e[2])<=m]
function q(e,n){(function(e){return I.every(n=>n(e))})(n)&&$("td",e).eq(2).addClass("lvlHighlight")}function w(e,n){C=t("highlightPlayersNearMyLvl"),R=$("#fshInv",e).DataTable(function(e){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:q,data:e,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(n))}function O(){R.draw()}function k(e){"fshMinLvl"!==e.target.id&&"fshMaxLvl"!==e.target.id||O()}function N(e,n){return parseInt($(e,n).val(),10)}function T(e,n){h(n)||i(e,n)}function _(e,n,t){const a=N("#fshMinLvl",e),s=N("#fshMaxLvl",e)
T("onlinePlayerMinLvl",a),T("onlinePlayerMaxLvl",s)
const i=l(p(t[2]),0)
return L(b,i,a,s)}let D,G,z,H
function S(a){G=a||{},function(e){$.fn.dataTable.ext.search.push(n(_,e)),$("#fshOutput",e).html(`<div align=right>Min lvl:<input value="${t("onlinePlayerMinLvl")}" size=5 id="fshMinLvl" /> Max lvl:<input value="${t("onlinePlayerMaxLvl")}" size=5 id="fshMaxLvl" /> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table>`)}(D),g(),w(D,function(t){return e(t).map(n(j,t))}(G))}function A(e,n,t){const a=$("td",$(t)),s=a.eq(1).text();(function(e,n){return G[e]&&G[e][3]>n})(s,e)||(G[s]=function(e,n,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),e,n]}(e,n,a))}function U(e,n){H=function(e){return parseInt(e.parent().text().match(/(\d+)/g)[0],10)}(n)
for(let n=2;n<=H;n+=1)P(n).then(e)}function V(e){$("#fshOutput",D).append(e)}function W(e){V(" "+(z+1))
const t=u(e),a=$("#pCC input.custominput",t).first()
!function(e,t){const a=t.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',e).parent().parent().parent().each(n(A,a))}(t,a),z+=1,1===z&&U(W,a),z===H&&(M("fsh_onlinePlayers",G),S(G))}function Y(e){"fshRefresh"===e.target.id&&($("#fshRefresh",D).hide(),z=0,G={},P(1).then(W),i("lastOnlineCheck",s),V("Parsing online players...")),"fshReset"===e.target.id&&function(e){i("onlinePlayerMinLvl",r.onlinePlayerMinLvl),i("onlinePlayerMaxLvl",r.onlinePlayerMaxLvl),$("#fshMinLvl",e).val(r.onlinePlayerMinLvl),$("#fshMaxLvl",e).val(r.onlinePlayerMaxLvl),O()}(D)}function B(){D.html(`<span><b>Online Players</b></span>${function(){const e=t("lastOnlineCheck")
return s-e>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(s-e)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`),y("fsh_onlinePlayers").then(S),f(D[0],Y),c(D[0],"keyup",k)}export default function(e){o()||(D=e?$(e):$("#pCC"),x().then(B))}
//# sourceMappingURL=injectOnlinePlayers-8fc83301.js.map