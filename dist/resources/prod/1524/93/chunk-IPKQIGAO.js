import{a as k}from"./chunk-MAXNXLOJ.js";import{a as T}from"./chunk-EOGKNN5S.js";import{a as N}from"./chunk-FIMBYO62.js";import{a as I}from"./chunk-QINL52B7.js";import{a as L}from"./chunk-OFVL4Q2L.js";import{a as h}from"./chunk-CFKGXEY7.js";import{a as b}from"./chunk-FZXNAIDT.js";import{a}from"./chunk-E2AIRKBV.js";import{a as c}from"./chunk-DEEYYK6E.js";import{a as u}from"./chunk-MUG4VEKH.js";import{a as g}from"./chunk-G77K7S5L.js";import{a as y}from"./chunk-J6OWEIQO.js";import{b as p}from"./chunk-PWSQLISA.js";import{a as d}from"./chunk-SDYIYOUC.js";import{a as i}from"./chunk-Z6KB7KN6.js";import{a as m}from"./chunk-NH6FAU6Q.js";import{a as f}from"./chunk-5RFQSTDG.js";import{b as s}from"./chunk-G6TPLPCG.js";import{G as n,Na as l}from"./chunk-UYN3LUIY.js";var E=()=>d("td",p()).find(y("Message")),v=e=>h(e.href);function G(e){e.className=""}function S(e){let o=m(l,e).map(v).map(Number);return o.length&&!o.some(t=>t===a())}function $(e){let r=v(e.children[0]);c(e,` [ <a href="${n}recruit&subcmd2=acceptjoin&id=${r}">Accept</a> | <a href="${n}recruit&subcmd2=denyjoin&id=${r}">Deny</a> ]`)}function j(e){S(e)&&(f(e.cells).forEach(G),e.classList.add("fshGrey"),e.classList.add("fshXSmall")),i(e.cells[2]).includes("requested")&&$(e.cells[2])}function C(){let e=E();if(!e)return;let r=N(e);e.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',I(r,3,0).forEach(j)}function M(){s("hideNonPlayerGuildLogMessages")&&C()}function P(e,r,o){g(e.cells[2],u({innerHTML:`${b(r.id,r.name)}'s group looted the item '<span class="fshGreen">${o}</span>'`}))}async function q(e){let r=L(e),o=await k(r,T(e)),t=o?.r?.combat?.items?.[0]?.n;t&&P(r,o.r.combat.attacker.group.players[0],t)}function x(){if(!s("groupCombatItems"))return;m('a[href*="&combat_id="]').filter(o=>i(o.previousSibling).includes("victorious")).forEach(q)}export{M as a,x as b};
//# sourceMappingURL=chunk-IPKQIGAO.js.map