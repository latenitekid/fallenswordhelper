import{ai as a}from"./calfSystem-70c7a660.js"
let t
function c(){return t||(t=$("#backpackContainer").data("hcsBackpack")),t}const n=[]
let o
function s(a){const t=a._showPage
a._showPage=function(c,o){a.tabData&&(t.call(a,c,o),function(a){n.length>0&&n.forEach(t=>t(a))}(a))},o=!0}function e(t,c){n.includes(c)||(o||s(t),a(c)&&n.push(c))}export{c as g,e as m}
//# sourceMappingURL=monkeyBp-651e8ace.js.map
