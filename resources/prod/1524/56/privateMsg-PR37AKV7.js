import{a as P}from"./chunk-UZXN6SID.js";import{a as k,b as c}from"./chunk-GWPL62EI.js";import"./chunk-S2OLP3EN.js";import"./chunk-KDNNF3DU.js";import{a as x}from"./chunk-BACNOD3E.js";import"./chunk-VBC2FB3X.js";import"./chunk-WZK3FFCX.js";import"./chunk-DWUFG6UJ.js";import"./chunk-MPAIIIHS.js";import{a}from"./chunk-2PZ6NPNU.js";import{a as p}from"./chunk-POGZRGFB.js";import{a as M}from"./chunk-KS5ENHYQ.js";import"./chunk-4MCB2GON.js";import"./chunk-GYLYSP4O.js";import"./chunk-G7OP24LL.js";import"./chunk-F3UWCNLS.js";import"./chunk-RJ4OYB6J.js";import"./chunk-6AYIUHMJ.js";import{a as L}from"./chunk-PPWSFVIU.js";import{a as h}from"./chunk-5IONE3UD.js";import"./chunk-DBUR5TNY.js";import"./chunk-DZUNDM2W.js";import"./chunk-PRVNUO5J.js";import"./chunk-YY6M7RTY.js";import"./chunk-GCBZB6Q7.js";import{a as B}from"./chunk-52BHRAB5.js";import"./chunk-5QL3EWJR.js";import"./chunk-KARVP4IF.js";import"./chunk-2AYZ6V4F.js";import{a as v}from"./chunk-7ET2CA5W.js";import"./chunk-ZQ6Q7AAO.js";import"./chunk-XBQPITPX.js";import"./chunk-XIQH4POZ.js";import"./chunk-BUIH7NDX.js";import{a as i}from"./chunk-AVPY2BTL.js";import"./chunk-2FGL6JOK.js";import"./chunk-GJHRXFGS.js";import{a as T}from"./chunk-JZUIGPQK.js";import"./chunk-E7LHQKU5.js";import"./chunk-ACUTGVKN.js";import"./chunk-AFQMUQTQ.js";import"./chunk-HMF5HIMF.js";import"./chunk-7PZO5YGA.js";import"./chunk-IXP25ZKY.js";import"./chunk-GRW7NX42.js";import"./chunk-6RYYSQKY.js";import"./chunk-OMKWEQGC.js";import"./chunk-NRM2IEBO.js";import"./chunk-FE2N6NBD.js";import"./chunk-DNX7LBBK.js";import"./chunk-QAXNXWWI.js";import"./chunk-KHAKP3NJ.js";import"./chunk-LJXKCPK7.js";import"./chunk-CDQY3GPS.js";import"./chunk-E66CENYR.js";import"./chunk-7XYKFTOV.js";import"./chunk-EDPHPGYE.js";import{a as b}from"./chunk-BRACYM44.js";import"./chunk-HSGQLATB.js";import{a as r}from"./chunk-ABHYZHAG.js";import"./chunk-JYV3Y4PK.js";import"./chunk-VYOJRJTP.js";import"./chunk-IZEIZGGY.js";import"./chunk-H4RRBTG7.js";import"./chunk-D4RSYPIY.js";import"./chunk-4LICJMIC.js";import"./chunk-VLEL2DAI.js";import"./chunk-SQ3ABL2K.js";import{a as y}from"./chunk-S2PPJ2GD.js";import{b as m}from"./chunk-MIGTOE2L.js";import"./chunk-UYUWQQUH.js";import"./chunk-FMIILUE6.js";import{x as u,y as d}from"./chunk-XSTNX5IW.js";import"./chunk-UVCMQZY6.js";import"./chunk-NGIDL4MJ.js";function s(t){return i(a(t).children[3].childNodes[0])}function n(t){return y(a(t).children[2].children[0])}var U=(t,e)=>p(e.nicks).includes(v(t));function N(t){let e=x.find(o=>U(t,o));if(e)return e.id}var C=t=>p(t).map(N).filter(e=>e).join(";");function E(t){let e=/`~(.*)~`/.exec(s(t));return e?C(e[1]):""}function l(t){let{target:e}=t;h(n(e),E(e)),r("privateMsg","Buff")}function w(t){let e=s(t);return e.length>140?`${e.substring(0,140)}...`:e}function S(t){if(!m("enableChatParsing"))return;let{target:e}=t;window.openQuickMsgDialog(n(e),"",w(e)),t.preventDefault(),r("privateMsg","parseReply")}var I=[["pmBuffBtn",l],["fa-reply",S],["pmTradeUrl",()=>r("privateMsg","Trade")],["pmSecureUrl",()=>r("privateMsg","ST")],["pmAttackUrl",()=>r("privateMsg","Attack")],["pmIgnoreUrl",()=>r("privateMsg","Ignore")]];function W(t){let{target:e}=t,o=I.find(f=>M(e,f));o&&o[1](t)}function g(t){b(t,W)}var R=t=>[i(t.children[2]),t.children[3]];function V(t){if(!m("privateMsgButtons"))return;L(t.rows,6,0).map(R).forEach(([o,f])=>{T(f,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${u+o}">Send</a> | <a class="pmSecureUrl" href="${d+o}">Trade</a> ]`)})}function j(){let t=k();t&&(V(t),P(1),g(t))}function Q(){B("type")==="1"?(c("PrivateMsg",1,6),j()):c("OutBox",1,4)}export{Q as default};
//# sourceMappingURL=privateMsg-PR37AKV7.js.map
