import{x as e,I as t,u as n,$ as r}from"./calfSystem-e7bde0c3.js"
import{h as s}from"./htmlResult-5b3dc12a.js"
function i(n){return function(t,n){return e({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:t,items:n})}(t("itemRecipient"),n)}function a(e){return function(e,t){return n({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:e,sendItemList:t}).then(s)}(t("itemRecipient"),e)}function m(e){return r(i,a,e)}export{m as d}
//# sourceMappingURL=daAjaxSendItemsToRecipient-92795ec0.js.map
