import{a as L}from"./chunk-G6YL5QMG.js";import{a,b as U,c as i,d as y}from"./chunk-KUAF3HIT.js";import"./chunk-6XTPBN3V.js";import{a as B}from"./chunk-Y57XX7QV.js";import"./chunk-FDY5YZU6.js";import"./chunk-N5FTCMRG.js";import"./chunk-B3YXDQZ3.js";import{a as s}from"./chunk-NCMEUMLE.js";import"./chunk-G2RN5QP2.js";import{a as n}from"./chunk-M23P7YNW.js";import"./chunk-3RB7HJ6G.js";import{d as k}from"./chunk-SDYJ5HZW.js";import"./chunk-ON76EM3G.js";import"./chunk-5TD4FW2O.js";import"./chunk-J3GDMVIU.js";import{b as p}from"./chunk-HZOZPFQX.js";import{a as g}from"./chunk-FH2ZQIVR.js";import"./chunk-ZC2VG7OL.js";import{a as w,b as S}from"./chunk-PFZEGHOR.js";import{a as b}from"./chunk-3H3AFOW3.js";import"./chunk-LSTBONAT.js";import"./chunk-3TEITCXC.js";import"./chunk-M5ZUFNEH.js";import"./chunk-R7EK2RTK.js";import"./chunk-RUAHQRDU.js";import"./chunk-IZJ2YJYN.js";import"./chunk-HUBAYN2T.js";import"./chunk-O2AVUBO7.js";import"./chunk-QRS6GHYV.js";import{a as T}from"./chunk-QVWND6LG.js";import{a as C}from"./chunk-MCDZT6O2.js";import"./chunk-52NQXPZP.js";import"./chunk-2NTPEDIZ.js";import"./chunk-QKLZ7AT3.js";import{a as h}from"./chunk-2CZQIOBC.js";import"./chunk-SX3746CW.js";import"./chunk-XA4CEPNM.js";import"./chunk-76PHM2VZ.js";import"./chunk-NVGKRTGQ.js";import"./chunk-LFT5BCCP.js";import"./chunk-LQ2ARGUI.js";import"./chunk-BR5IQZCO.js";import"./chunk-FIOQMJU7.js";import{a as d}from"./chunk-32IJAGRN.js";import"./chunk-BYHOBLWC.js";import"./chunk-A562UK6S.js";import"./chunk-JDVJBZWD.js";import"./chunk-7JP44NWZ.js";import"./chunk-I57GWZIZ.js";import{a as u}from"./chunk-O2SP7GRB.js";import"./chunk-LROIQ2AY.js";import{a as r}from"./chunk-DDP3QCAT.js";import"./chunk-RBWWPJJC.js";function H(e){return[e.getUTCMonth()+1,e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()].map(b)}function P(e){return[e.getUTCFullYear().toString()].concat(H(e))}function l(e){if(S(e))return w(P(e))}var c="enableSeTracker",o=0;function R(e,t){s(e,`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${l(new Date(t[1]*1e3))}</td></tr>`)}function E(e){let t=B({className:"fshTTracker"}),m=L({innerHTML:'<tr><td class="header fshCenter">Creature</td><td class="header fshCenter">Last Kill</td></tr>'});return n(t,m),e.forEach(d(R,m)),t}function f(){let t=p().lastElementChild.insertRow(-1).insertCell(-1);return t.colSpan=3,t}function x(e){let t=E(e);o=f(),n(o,t)}function F(e,t){return e[1]-t[1]}function N(){a()?.se&&x(T(a().se).sort(F))}function M(){r.enableSeTracker?i().finally(N):(o&&(o.parentNode.remove(),o=!1),U())}function v(e){e.target.id===c&&(r.enableSeTracker=!r.enableSeTracker,C(c,r.enableSeTracker),M())}function D(){i().finally(N)}function $(){if(h())return;let e=f();e.height=20,e=f(),e.className="fshCenter",g(k(c),e),u(e,"change",v),r.enableSeTracker&&y().then(D)}export{$ as default};
//# sourceMappingURL=superelite-EAIRUZMU.js.map