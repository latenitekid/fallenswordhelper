import{aI as a}from"./calfSystem-e76f1a7d.js"
let t
function n(){return t||(t=$("#backpackContainer").data("hcsBackpack")),t}const c=[]
let o
function s(a){const t=a._showPage
a._showPage=function(n,o){a.tabData&&(t.call(a,n,o),function(a){c.length>0&&c.forEach((t=>t(a)))}(a))},o=!0}function e(t,n){c.includes(n)||(o||s(t),a(n)&&c.push(n))}export{n as g,e as m}
//# sourceMappingURL=monkeyBp-b661d2d7.js.map
