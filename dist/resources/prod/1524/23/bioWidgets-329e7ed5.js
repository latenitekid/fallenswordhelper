import{G as e,y as t,c as s,o,f as i,m as a,h as r,i as n,p as l,A as c,Y as u}from"./calfSystem-019de1cf.js"
import"./numberIsNaN-cb2409eb.js"
import"./roundToString-09c0d154.js"
import{b as f,r as m}from"./render-ea2fab71.js"
import"./playerName-569fc693.js"
import"./toLowerCase-dda30e6b.js"
import{c as p}from"./createInput-939428fe.js"
import{i as b}from"./insertTextBeforeEnd-428b7e1f.js"
import"./testRange-6fc07a5c.js"
import{t as d}from"./testQuant-c04cb2a1.js"
let h,g,w,B
const N=[[/</g,"&lt"],[/>/g,"&gt"],[/\n/g,"<br>"],[/\[(\/?[biu])\]/g,"<$1>"],[/\\\\/g,"&#92"],[/\\/g,""]],y=[[/\[(\/?block)\]/g,"<$1quote>"],[/\[list\]/g,'<ul class="list">'],[/\[\/list\]/g,"</ul>"],[/\[\*\](.*?)<br>/g,"<li>$1</li>"]]
function j(e,t){return e.replace(t[0],t[1])}function v(e,t){return t.reduce(j,e)}function k(){const e=d(B.value)
e&&(h=e,u("bioEditLines",e),g.rows=h)}function T(){const e=function(e){let t=v(e,N)
return"guild"===s.cmd&&(t=v(t,y)),t}(g.value),t=m(e)
c(t||e,w)}export default function(){h=e("bioEditLines"),g=t("textInputBox"),g&&(!function(){let e="fshBioProfile"
"guild"===s.cmd&&(e="hall"===s.subcmd?"fshBioHall":"fshBioGuild")
const t=a({className:"fshBioContainer "+e}),o=a({className:"fshBioHeader fshBioInner",innerHTML:"Preview"})
r(t,o),w=a({className:"fshBioPreview fshBioInner"}),r(t,w),r(g.parentNode,t)}(),"profile"===s.cmd&&n(l,'<div>`~This will allow FSH Script users to select buffs from your bio~`<br>You can use the [cmd] tag as well to determine where to put the "Ask For Buffs" button<br><br><blockquote><ul class="list"><li>Note 1: The ` and ~ characters are on the same key on US QWERTY keyboards. ` is <b>NOT</b> an apostrophe.</li><li>Note 2: Inner text will not contain special characters (non-alphanumeric).</li><li>P.S. Be creative with these! Wrap your buff pack names in them to make buffing even easier!</li></ul></blockquote></div>'),function(){const e=a({innerHTML:"<br>Display "})
B=p({min:1,max:99,type:"number",value:h}),r(e,B),b(e," Lines ")
const t=p({className:"custombutton",value:"Update Rows To Show",type:"button"})
o(t,k),r(e,t),r(l,e)}(),g.rows=h,"profile"===s.cmd&&o(g.parentNode,f),i(g,"keyup",T),T())}
//# sourceMappingURL=bioWidgets-329e7ed5.js.map