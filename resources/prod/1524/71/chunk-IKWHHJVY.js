import{a as o}from"./chunk-OQUOAWQT.js";import{a as m}from"./chunk-QFHM7M2T.js";import{a as u}from"./chunk-5M2GNHT7.js";import{a as n}from"./chunk-RTNCMQDY.js";import{f as c,k as a}from"./chunk-CRFRZPAJ.js";function i(r,t,e){return t+Math.round(Number(c[e].exec(r)[1])*a)}function f(r,t){return r.map(n(i,t.dataset.tipped))}function s(r){return r.reduce(f,[0,0,0,0,0])}function p(r){return{attack:r[0],defense:r[1],armor:r[2],damage:r[3],hp:r[4]}}function M(r){let t=m(r),e=o('#pCC img[src*="/merc/"]',t),d=s(e);return p(d)}function l(){return u({cmd:"guild",subcmd:"mercs"}).then(M)}export{l as a};
//# sourceMappingURL=chunk-IKWHHJVY.js.map
