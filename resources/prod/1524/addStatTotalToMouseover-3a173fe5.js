import{l as t,i as e,g as r,bl as n,aH as s,v as a,bi as o,D as c}from"./calfSystem-d06402b1.js"
import{c as l}from"./closestTable-3bbadb79.js"
import{i}from"./insertHtmlBeforeBegin-01272058.js"
function u(t,e,r){const n=o(e.cells[0]).replace(":","")
return n?(t[n]={ind:r},function(t){return t.cells[1]&&c(t.cells[1])}(e)&&(t[n].value=Number(o(e.cells[1]).replace("+",""))),t):t}function f(t,e,r){return e+((s=t)[n=r]&&s[n].value?s[n].value:0)
var n,s}function m(t){const e=l(t),r=s(e.rows).reduce(u,{}),n=function(t){return["Attack","Defense","Armor","Damage","HP"].reduce(a(f,t),0)}(r)
var o,c
i((c=e,(o=r).Enhancements?c.rows[o.Enhancements.ind-1]:c.rows[c.rows.length-1]),`<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${n}&nbsp;</td></tr>`)}function d(s){const a=t()
return e(a,s),r("font",a).filter(n("Bonuses")).forEach(m),a.innerHTML}function b(t){t.url.startsWith("fetchitem")&&(t.dataFilter=d)}function h(){$.ajaxPrefilter(b)}export{h as a}
//# sourceMappingURL=addStatTotalToMouseover-3a173fe5.js.map
