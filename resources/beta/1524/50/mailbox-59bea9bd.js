import{c as t}from"./chunk-965f25a6.js"
import{x as n,$ as e,y as s,p as i,g as a,P as r,t as o,k as c,m as f,h as m,o as d,e as u,l,B as p,z as h}from"./calfSystem-617f9a5d.js"
import{c as k}from"./createInput-f24320ea.js"
import{c as g}from"./createLabel-272b8ef2.js"
import{c as b}from"./createUl-fd0a3075.js"
import{a as j}from"./allthen-2ff5fddb.js"
import{i as v}from"./indexAjaxJson-1f941a45.js"
import{i as x}from"./insertElementBefore-784d4581.js"
import{i as T}from"./isArray-2f495555.js"
import{j as y,o as B}from"./jsonFail-cedc6dcb.js"
import"./all-9b215cd1.js"
function E(t){return v({cmd:"tempinv",subcmd:"takeitem",temp_id:t,ajax:1})}function I(t){const n=t.filter((t=>0===t.r)),e=t.filter((t=>0!==t.r))
return n.length>0?{r:n.map((t=>({id:t.temp_id}))),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:t[0].m},s:!1}}function L(t){return j(t.map(E),I)}function M(t){return n({cmd:"tempinv",subcmd:"takeitems",item:t})}function q(t,n,e){const s=g({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:`Toggle ${n}`})
return x(s,e),s}function Q(t,n){const e=n.children[0],{tipped:s}=e.dataset,i=c.exec(s)
if(!i)return t
const a=i[1],r=i[2]
return t[a]?t[a].invIds.push(r):t[a]={invIds:[r],tipped:s.replace(/&extra=\d/,""),src:e.src},t}function A(t,n){const e=n[1],s=f(),i=f({innerHTML:`<img src="${e.src}" class="tip-dynamic" data-tipped="${e.tipped}">`})
m(s,i)
const a=f({innerHTML:`<button class="fshBl fshBls" data-id="${n[0]}">Take All ${e.invIds.length}</button>`})
m(s,a),m(t,s)}function C(t){!function(t){const n=$(`#temp-inv-img-${t}`).qtip("api")
n&&n.destroy(!0)}(t.id)
const n=h(`temp-inv-${t.id}`)
n&&p("",n)}function H(t,n){y(n,t)||T(n.r)&&function(t,n){n.r.forEach(C),B(`${n.r.length.toString()} item(s) taken.`,t)}(t,n)}function N(t,n){var s;(s=n,e(M,L,s)).then(o(H,t))}function S(n,e,s){l("fshBls",s.target)&&function(n,e,s){const i=s.dataset.id,{invIds:a}=n[i]
p(`taking all ${a.length} items`,s.parentNode),t(40,a).forEach(o(N,e))}(n,e,s.target)}function z(t,n,e){const s=f({className:"fshTakeGrid"})
!function(t,n){u(n).forEach(o(A,t))}(s,t),m(n,s),d(s,o(S,t,e))}function F(t){const n=f({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'}),e=function(t){const n=f(),e=b()
return m(n,e),m(t,n),e}(n)
m(n,f()),z(t,n,e),m(i,n)}function O(t,n){q("qtOn","Mailbox",n)
F(t.reduce(Q,{}))}function _(){if(s()||!i)return
const t=a("a",i)
if(0===t.length)return
const n=i.lastElementChild
!function(t,n){const e=k({id:"fshQuickTake",type:"checkbox"})
x(e,n),r(e,"change",o(O,t,n))}(t,n),q("qtOff","Quick Take",n)}export default _
//# sourceMappingURL=mailbox-59bea9bd.js.map
