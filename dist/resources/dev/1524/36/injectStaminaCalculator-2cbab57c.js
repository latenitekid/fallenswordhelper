import{t,a}from"./timeBox-0c7d431d.js"
import{K as s,z as n,i}from"./calfSystem-eeb1d862.js"
import{i as e}from"./intValue-ca51a3c0.js"
import{v as o}from"./valueText-7c11f0d0.js"
import"./padZ-0374e903.js"
function r(){const r=s("stat-stamina-nextGain")
if(0===r.length)return
const m=n("statbar-stamina-tooltip-stamina"),c=function(t){return/([,0-9]+)\s\/\s([,0-9]+)/.exec(o(s("stat-name",t)))}(m)
c&&i(m,function(s,n){return`<dt class="stat-stamina-nextHuntTime">Max Stam At</dt>${t(o(s),Math.floor((e(n[2])-e(n[1]))/a("stat-stamina-gainPerHour")))}`}(r,c))}export default r
//# sourceMappingURL=injectStaminaCalculator-2cbab57c.js.map
