import{a as p}from"./chunk-Y6WQRSAL.js";import{a as d}from"./chunk-ZCEF5B3Y.js";import{a as i}from"./chunk-633OWGHO.js";import{a as t}from"./chunk-AMBECJSA.js";import{a}from"./chunk-SVOLGRZA.js";import{a as m}from"./chunk-TJ6L7XVK.js";import{a as o}from"./chunk-W5YL3QSG.js";import{a as c}from"./chunk-MXS7SZ5M.js";function s(r){return d(c({subcmd:"ranks"},r))}var l=r=>o({cmd:"guild",subcmd:"ranks",subcmd2:"add",rank_id:r}),k=r=>l(r.getAttribute("onclick").match(/[=](\d+)/)[1]),f=r=>a('input[name^="permission"]:checked',r).reduce((n,e)=>n+2**Number(e.name.match(/\[(\d+)\]/)[1]),0);function x(r){return{id:Number(t('input[name="rank_id"]',r).value),name:t('input[name="rank_name"]',r).value,permissions:f(r),tax:Number(t('input[name="rank_tax"]',r).value)}}function b(r){let e=r.map(m).map(x);return{r:{0:e[0],ranks:e.slice(1)},s:!0}}function g(r){let n=m(r),e=a('input[value="Edit"]',n);return p(e.map(k),b)}function u(){return o({cmd:"guild",subcmd:"ranks"}).then(g)}function y(){return i(s,u)}export{s as a,y as b};
//# sourceMappingURL=chunk-D6ENT5KR.js.map