import{g as e}from"./getArrayByClassName-0e6e45d9.js"
import{N as i,t as a,c as n,ac as t,K as s,z as o,o as c,l as f,H as l}from"./calfSystem-60c20ae9.js"
import{h as d}from"./hideElement-4575b6b4.js"
import{o as u}from"./openQuickBuffByName-ed10d0a0.js"
import{s as r}from"./selfIdIs-1aa7dfaf.js"
function m(i,a){e("player-name",i).forEach(a)}function g(e,i){const a=e.dataset.tipped,n=/Last Activity:<\/td><td>(\d+) mins/.exec(a)[1]
n<2?e.classList.add(i.l1):n<5?e.classList.add(i.l2):e.classList.add(i.l3)}function b(e){i(e).forEach(d)}const p=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function h(e,i,a){n[a[0]]&&b(t(a[i],e))}function k(e,i){p.forEach(a(h,e,i))}function x(e,i,a){a.preventDefault(),a.target.classList.toggle(e),a.target.classList.toggle(i)}function j(i,a){const n=e(a,i).map((e=>l(e.nextElementSibling)))
u(n.join())}function y(e,i){const a=e.find((e=>e[0](i.target)))
if(a)return a[1](i)}function B([e,i,n,t]){return a(y,function([e,i,n,t]){return[[a(f,i),a(x,i,n)],[a(f,n),a(x,i,n)],[r(t),a(j,e,i)]]}([e,i,n,t]))}function I(e,i){const a=`${i}-buff-check-on`,t=`${i}-quick-buff`
n.hideBuffSelected?(b(s(a,e)),d(o(t))):n.fixBuffSelected&&function([e,i,a,n]){const t=`${i}-buff-check-off`
$(`.${a}`).off("click"),$(`.${t}`).off("click"),$(`#${n}`).off("click"),c(e.parentNode,B([e,a,t,n]))}([e,i,a,t])}export{I as a,g as b,m as c,k as d}
//# sourceMappingURL=doHideBuffSelected-4c92b90a.js.map
