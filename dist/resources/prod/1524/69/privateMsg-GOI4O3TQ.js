import{a as I}from"./chunk-ZYHQ7YZM.js";import{a as U,b as a}from"./chunk-WM45OLWY.js";import"./chunk-TFN4KIXX.js";import"./chunk-Y2THK3UX.js";import"./chunk-KSCETRVW.js";import"./chunk-5QIVIO34.js";import"./chunk-R6Q3OCUV.js";import{a as y}from"./chunk-5NJDX2ON.js";import{a as i}from"./chunk-CBKI7QWO.js";import"./chunk-KU3UKZKC.js";import"./chunk-ATA2OWPZ.js";import{a as k}from"./chunk-GI7CWR7X.js";import{a as x}from"./chunk-TI2LOJSA.js";import"./chunk-NADIMMJD.js";import"./chunk-S4HULN5N.js";import"./chunk-R64DT3SU.js";import{a as h}from"./chunk-7FEHBWYJ.js";import"./chunk-XZAUBGUX.js";import{a as M}from"./chunk-GNLW7JWX.js";import"./chunk-736UJAHD.js";import"./chunk-AHEBITCH.js";import"./chunk-DT7VHJIG.js";import{a as e}from"./chunk-UMJF22Y4.js";import{a as d}from"./chunk-EC54LTKY.js";import"./chunk-5BEYKAHU.js";import"./chunk-ZM4ZI6T7.js";import"./chunk-ZX43UBSI.js";import"./chunk-CXVCNN2I.js";import"./chunk-QLTDWVXW.js";import"./chunk-HZG26YKX.js";import"./chunk-OX54JKUE.js";import"./chunk-DIPZYR4B.js";import"./chunk-R5RY2C2T.js";import{a as v}from"./chunk-QVS2JTSD.js";import"./chunk-GJ3T2WL7.js";import{a as p}from"./chunk-NFJTDZQR.js";import"./chunk-HNUCXATC.js";import"./chunk-4RYOLX4Q.js";import"./chunk-REF22G3S.js";import{a as f}from"./chunk-R6RBH5KQ.js";import"./chunk-KOBTSSSS.js";import"./chunk-ZS4UMFEX.js";import"./chunk-I6BQR2GZ.js";import"./chunk-C2EU36VT.js";import"./chunk-NMJUS4XE.js";import"./chunk-W4QLHFVR.js";import"./chunk-2XKHMDYT.js";import"./chunk-B3OVUKAM.js";import"./chunk-P2FYCUOG.js";import{a as B}from"./chunk-R2V5M2SX.js";import"./chunk-VUJR46HY.js";import"./chunk-GZKSMROH.js";import"./chunk-2S53WZYG.js";import"./chunk-YFAGS6ZD.js";import"./chunk-VHX5BADE.js";import"./chunk-MQKWHXHK.js";import"./chunk-3RC57HRE.js";import{a as b}from"./chunk-R7DW5MFB.js";import"./chunk-QXMVYJN6.js";import"./chunk-C6PSWFF5.js";import"./chunk-KD4PPF2P.js";import"./chunk-L4MPHVE4.js";import"./chunk-Z7YJKURW.js";import"./chunk-JGGUTXQ5.js";import"./chunk-C3DMTIKU.js";import"./chunk-REHXFZMP.js";import"./chunk-WYX2VQXF.js";import"./chunk-KYNUAHCU.js";import{a as T}from"./chunk-QLI6SQ7D.js";import{b as s}from"./chunk-X53ITBGR.js";import"./chunk-VB2T76EA.js";import"./chunk-B6YTNR7S.js";import"./chunk-2PDPTZUM.js";import{A as u,z as g}from"./chunk-RRAQGRWM.js";import"./chunk-UMFA3PXI.js";function n(t){return f(i(t).children[3].childNodes[0])}var L=(t,r)=>p(r.nicks).includes(b(t));function P(t){let r=v.find(o=>L(t,o));if(r)return r.id}var C=t=>p(t).map(P).filter(r=>r).join(";");function w(t){let r=/`~(.*)~`/.exec(n(t));return r?C(r[1]):""}var E=t=>k(i(t).children[2].children[0].href);function c(t){let{target:r}=t;x(E(r),w(r)),e("privateMsg","Buff")}var S=t=>B(i(t).children[2].children[0]);function N(t){let r=n(t);return r.length>140?`${r.substring(0,140)}...`:r}function R(t){if(!s("enableChatParsing"))return;let{target:r}=t;window.openQuickMsgDialog(S(r),"",N(r)),t.preventDefault(),e("privateMsg","parseReply")}var $=[["pmBuffBtn",c],["fa-reply",R],["pmTradeUrl",()=>e("privateMsg","Trade")],["pmSecureUrl",()=>e("privateMsg","ST")],["pmAttackUrl",()=>e("privateMsg","Attack")],["pmIgnoreUrl",()=>e("privateMsg","Ignore")]];function A(t){let{target:r}=t,o=$.find(m=>M(r,m));o&&o[1](t)}function l(t){T(t,A)}var D=t=>[f(t.children[2]),t.children[3]];function Q(t){if(!s("privateMsgButtons"))return;y(t.rows,6,0).map(D).forEach(([o,m])=>{d(m,`&nbsp;&nbsp;[ <button class="pmBuffBtn" type="button">Buff</button> | <a class="pmTradeUrl" href="${g+o}">Send</a> | <a class="pmSecureUrl" href="${u+o}">Trade</a> ]`)})}function V(){let t=U();t&&(Q(t),I(1),l(t))}function W(){h("type")==="1"?(a("PrivateMsg",1,6),V()):a("OutBox",1,4)}export{W as default};
//# sourceMappingURL=privateMsg-GOI4O3TQ.js.map
