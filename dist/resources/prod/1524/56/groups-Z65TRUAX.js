import{a as N,b as U}from"./chunk-QNMH7R3V.js";import"./chunk-XRVYPQNP.js";import{a as w}from"./chunk-KDNNF3DU.js";import"./chunk-KFNFQ7SB.js";import{a as D}from"./chunk-MWBJMPWS.js";import{a as $}from"./chunk-2PZ6NPNU.js";import"./chunk-URUN5HM6.js";import{a as h}from"./chunk-POGZRGFB.js";import{b as H,c as k}from"./chunk-MWAFIUKN.js";import"./chunk-GYLYSP4O.js";import"./chunk-G7OP24LL.js";import"./chunk-IO33TKJV.js";import"./chunk-6AYIUHMJ.js";import{b as E}from"./chunk-M5P7JG7C.js";import"./chunk-VXPED75B.js";import"./chunk-YYATCEH3.js";import{a as M}from"./chunk-VVGRHNQC.js";import"./chunk-5IONE3UD.js";import"./chunk-DBUR5TNY.js";import"./chunk-DZUNDM2W.js";import"./chunk-PRVNUO5J.js";import{a as T}from"./chunk-YY6M7RTY.js";import"./chunk-GCBZB6Q7.js";import"./chunk-EVK5QPY3.js";import{a as y}from"./chunk-KARVP4IF.js";import{a as v}from"./chunk-U4IOE7YJ.js";import"./chunk-XIQH4POZ.js";import"./chunk-BUIH7NDX.js";import"./chunk-2FGL6JOK.js";import{a as n}from"./chunk-JZUIGPQK.js";import"./chunk-E7LHQKU5.js";import"./chunk-ACUTGVKN.js";import"./chunk-HMF5HIMF.js";import"./chunk-7PZO5YGA.js";import"./chunk-IXP25ZKY.js";import{a as p}from"./chunk-6RYYSQKY.js";import{a as G}from"./chunk-OMKWEQGC.js";import"./chunk-NRM2IEBO.js";import"./chunk-QAXNXWWI.js";import"./chunk-KHAKP3NJ.js";import{a as C}from"./chunk-LJXKCPK7.js";import"./chunk-CDQY3GPS.js";import"./chunk-E66CENYR.js";import"./chunk-7XYKFTOV.js";import"./chunk-EDPHPGYE.js";import{a as l}from"./chunk-6UGBR7LD.js";import{a as d}from"./chunk-BRACYM44.js";import"./chunk-HSGQLATB.js";import{a as L}from"./chunk-ABHYZHAG.js";import"./chunk-JYV3Y4PK.js";import"./chunk-VYOJRJTP.js";import"./chunk-IZEIZGGY.js";import"./chunk-H4RRBTG7.js";import"./chunk-D4RSYPIY.js";import{a as s}from"./chunk-4LICJMIC.js";import"./chunk-VLEL2DAI.js";import"./chunk-SQ3ABL2K.js";import{a as c}from"./chunk-S2PPJ2GD.js";import{b as u}from"./chunk-MIGTOE2L.js";import{a}from"./chunk-UYUWQQUH.js";import"./chunk-FMIILUE6.js";import{c as B,j as x,v as g}from"./chunk-XSTNX5IW.js";import"./chunk-UVCMQZY6.js";import{a as i}from"./chunk-NGIDL4MJ.js";var P=/([a-zA-Z]{3}), (\d{1,2}) ([a-zA-Z]{3}) (\d{1,2}):(\d{2}):(\d{2}) UTC/;function R(t,o){let e=new Date;return e.setUTCDate(t[2]),e.setUTCMonth(B.indexOf(t[3])),e.setUTCFullYear(o),e.setUTCHours(t[4]),e.setUTCMinutes(t[5]),e}function j(t){let o=t.cells[3],e=P.exec(c(o)),r=new Date().getFullYear();n(o,`<br><span class="fshBlue fshXSmall">Local: ${R(e,r).toString().substr(0,21)}</span>`)}function q(t,o){let e=c(o.children[0]);return t[e]?`${E({last_login:t[e].last_login})}&nbsp;<a href="${g}${t[e].id}"><b>${e}</b></a> [${t[e].level}]`:`<b>${e}</b>`}function I(t,o){return t[o]?t[o].level:0}function F(t,o,e){return I(t,e)-I(t,o)}function O(t,o){return t[o]?`<a href="${g}${t[o].id}">${o}</a>`:o}function V(t,o){let e=h(o.innerHTML);return e.length>1&&e.sort(i(F,t)),e}function W(t){return t!=="[none]"&&t.indexOf("<font")===-1}function X(t,o){let e=o.filter(W);e.length>0&&p(t,N(e)),n(t,`<span class="fshXSmall">Members: ${e.length}</span>`)}function Y(t,o,e){let r=e.map(i(O,t));l(`<span>${r.join(", ")}</span>`,o)}function _(t,o){let e=o.cells[0];l(q(t,e),e);let r=o.cells[1],m=V(t,r);X(e,m),Y(t,r,m),j(o)}function S(t){let o=u("betaOptIn");o&&H("groups.doGroupPaint"),D("group-action-container").map(e=>$(e)).forEach(i(_,t)),o&&k("groups.doGroupPaint")}function f(t,o){let e=v({className:"custombutton",type:"button",value:o});return n(t,"&nbsp;"),p(t,e),e}function Q(t,o){let e=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${o.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${o.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${o.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${o.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${o.hp}</td><td colspan="2"></td></tr></table>`,r=t.parentNode.parentNode.previousElementSibling;n(r,e)}function Z(t){U(t.href).then(i(Q,t))}function K(t){t.target.disabled=!0,s('#pCC a[href*="=viewstats&"]').forEach(Z)}function b(t){let o=f(t,"Fetch Group Stats");d(o,K)}function tt(t){return!t.includes("#000099")}function ot(t){l('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function et(t,o){C({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(i(ot,o))}function rt(t){let o=t.parentNode.parentNode.parentNode.cells[1];if(h(c(o)).filter(tt).length<a.maxGroupSizeToJoin){let m=G({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}});t.parentNode.replaceChild(m,t);let z=/confirmJoin\((\d+)\)/.exec(t.href)[1];et(z,m)}}function J(){L("groups","joinAllGroupsUnderSize"),s('#pCC a[href*="confirmJoin"]').forEach(rt)}function nt(t){let o=f(t,`Join All Groups < ${a.maxGroupSizeToJoin} Members`);d(o,J)}function A(t){let o=t.parentNode;a.enableMaxGroupSizeToJoin&&(M(t),nt(o)),b(o),a.subcmd2===x&&J()}function it(){let t=u("minGroupLevel");t&&n(y("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}function st(){let t=s("#pCC td.header-dark");t.length<5||(t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%"))}function mt(){if(T())return;let t=y('#pCC input[value="Join All Available Groups"]');!t||(w(!1).then(S),it(),A(t),st())}export{mt as default};
//# sourceMappingURL=groups-Z65TRUAX.js.map