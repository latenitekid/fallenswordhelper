import{g as i}from"./getArrayByClassName-22f3bd68.js"
import{N as e,t as n,c as t,ac as a,K as s,z as o,o as c,l as f,H as l}from"./calfSystem-4a40365f.js"
import{h as d}from"./hideElement-f0e898f0.js"
import{o as u}from"./openQuickBuffByName-c23c62ee.js"
import{s as r}from"./selfIdIs-73869223.js"
function m(e,n){i("player-name",e).forEach(n)}function g(i,e){const n=i.dataset.tipped,t=/Last Activity:<\/td><td>(\d+) mins/.exec(n)[1]
t<2?i.classList.add(e.l1):t<5?i.classList.add(e.l2):i.classList.add(e.l3)}function p(i){e(i).forEach(d)}const b=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function h(i,e,n){t[n[0]]&&p(a(n[e],i))}function k(i,e){b.forEach(n(h,i,e))}function x(i,e,n){n.preventDefault(),n.target.classList.toggle(i),n.target.classList.toggle(e)}function j(e,n){const t=i(n,e).map((i=>l(i.nextElementSibling)))
u(t.join())}function y(i,e){const n=i.find((i=>i[0](e.target)))
if(n)return n[1](e)}function B([i,e,t,a]){return n(y,function([i,e,t,a]){return[[n(f,e),n(x,e,t)],[n(f,t),n(x,e,t)],[r(a),n(j,i,e)]]}([i,e,t,a]))}function I(i,e){const n=`${e}-buff-check-on`,a=`${e}-quick-buff`
t.hideBuffSelected?(p(s(n,i)),d(o(a))):t.fixBuffSelected&&function([i,e,n,t]){const a=`${e}-buff-check-off`
$(`.${n}`).off("click"),$(`.${a}`).off("click"),$(`#${t}`).off("click"),c(i.parentNode,B([i,n,a,t]))}([i,e,n,a])}export{I as a,g as b,m as c,k as d}
//# sourceMappingURL=doHideBuffSelected-d867d480.js.map
