import{H as t,p as e,C as s,f as n,t as a,b as r,g as o,h as c,Q as i}from"./calfSystem-ec5e5725.js"
import"./createStyle-bbf14939.js"
import"./fshOpen-da9a149e.js"
import"./openQuickBuffByName-9db0dd32.js"
import"./dataRows-fa0ec70c.js"
import{c as f}from"./createTextArea-73104eab.js"
import"./parseDateAsTimestamp-2287985e.js"
import"./doBuffLinkClick-9be045fd.js"
import{a as u}from"./addLogColoring-c76c33db.js"
function l(t){t.value=t.value.replace(/\r\n|\n|\r/g," ")}function p(t){t.setAttribute("form","dochat")}function m(t,e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),i(t))}function d(){const t=s('input[value="Send As Mass"]')
if(!t)return
const i=function(){const t=r("form",e)
return t[0].id="dochat",t[0]}(),u=function(){const t=o("input",e).slice(0,7)
return t.forEach(p),t[5]}(),d=function(t){const e=s("#pCC table table")
e.rows[0].cells[0].remove()
const n=e.insertRow(-1).insertCell(-1)
c(n,t)
const a=e.rows[0].cells[0]
return a.rowSpan=2,a}(t),b=function(t){const e=f({cols:72,name:"msg",required:!0,rows:2})
return p(e),n(e,"keypress",a(m,t)),e}(u)
d.replaceChild(b,d.children[0]),n(i,"submit",a(l,b))}function b(){t("enhanceChatTextEntry")&&e&&d(),function(){if(!t("wrapGuildChat"))return
const e=s("#pCC table table table table")
e&&e.classList.add("fshGc")}(),u("Chat",0)}export default b
//# sourceMappingURL=guildChat-076629e4.js.map
