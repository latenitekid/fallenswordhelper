import{u as a,j as s,H as e,a5 as o,a as t}from"./calfSystem-3bdf319e.js"
import{n,d as p,p as d}from"./parseGoldUpgrades-83579809.js"
function r(a){t(3,d,[a])}function f(){const s=e("lastUpgradeCheck")
s&&o<s||a({cmd:"points",type:1}).then(r)}function c(){s()&&n()&&(e("needToDoUpgrade")?p():f())}export default c
//# sourceMappingURL=injectUpgradeAlert-687ced61.js.map
