import{a as c}from"./chunk-DEEYYK6E.js";import{a as i}from"./chunk-ATELUZSH.js";import{a as l}from"./chunk-5HI4ILOP.js";import{a as f}from"./chunk-L4JCGVZD.js";import{a as r}from"./chunk-66FBRD7Z.js";import{a}from"./chunk-LEOH7BX4.js";import{F as d}from"./chunk-UYN3LUIY.js";import{a as s}from"./chunk-3WE6KSRQ.js";function o(){return window.location.search.indexOf("cmd=points&type=1")===-1}var g=`<li class="notification"><a href="${d}&type=1"><span class="notification-icon"></span><p class="notification-content">Upgrade stamina with gold</p></a></li>`;function p(){o()&&c(l("notifications"),g)}function u(t){if(o())return f(t);let e=a('#pCC input[name="quantity"]');return e[0].value="100",e[1].value="10",document}function U(t){let e=i(t).split(" / ");e[0]!==e[1]?(p(),r("needToDoUpgrade",!0)):(r("needToDoUpgrade",!1),r("lastUpgradeCheck",Date.parse(`${i(t.nextElementSibling)} GMT`)))}function h(t){if(!s.enableUpgradeAlert)return;let e=u(t),n=a("#pCC > table",e);if(n.length>0){let m=n[n.length-1].rows[3].cells[2];U(m)}}export{o as a,p as b,h as c};
//# sourceMappingURL=chunk-5DXOFQZD.js.map