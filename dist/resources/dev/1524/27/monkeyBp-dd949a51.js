import{ak as a}from"./calfSystem-ec5e5725.js"
let t
function c(){return t||(t=$("#backpackContainer").data("hcsBackpack")),t}const n=[]
let o
function e(a){const t=a._showPage
a._showPage=function(c,o){a.tabData&&(t.call(a,c,o),function(a){n.length>0&&n.forEach(t=>t(a))}(a))},o=!0}function s(t,c){n.includes(c)||(o||e(t),a(c)&&n.push(c))}export{c as g,s as m}
//# sourceMappingURL=monkeyBp-dd949a51.js.map
