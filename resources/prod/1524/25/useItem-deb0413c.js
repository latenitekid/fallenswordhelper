import{e as r}from"./errorDialog-c0c5c278.js"
import{i as o}from"./indexAjaxJson-fd3c427d.js"
import{d as e}from"./daUseItem-a130ec06.js"
import{d as a}from"./dialog-294b8a9c.js"
function s(r){return o({cmd:"profile",subcmd:"equipitem",inventory_id:r,ajax:1}).then(a)}const t=r=>({...r,r:r.s?0:1})
function i(o){return e(o).then(r).then(t)}export{t as a,s as e,i as u}
//# sourceMappingURL=useItem-deb0413c.js.map