import{z as t,E as n,aI as e,l as o,C as a,m as s,h as r,B as i}from"./calfSystem-365d90f3.js"
import{t as c}from"./toggleForce-a9d00c58.js"
function l(t,n){const e=n.nextElementSibling.children[0]
8===e.children.length&&(!function(t,n){const e=a(n.children[7]),o=s({className:"tooltip-bottom",dataset:{tooltip:"Server"},textContent:`Server: ${e}`})
r(t,o)}(t,e),function(t,n){const e=n.children[3].innerHTML,o=t.children[0]
i(`Online: ${e}`,o)}(t,e),c(n.parentNode,!0))}function d(){const a=t("topbanner-stats"),s=n("#pCR h3").find(e("Game Stats"));(function(t,n){return!(t&&o("topbanner-stats-hidden",t))&&n})(a,s)&&l(a,s)}export default d
//# sourceMappingURL=injectServerNode-17d75ad1.js.map
