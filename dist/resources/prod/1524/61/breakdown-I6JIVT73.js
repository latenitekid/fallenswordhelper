import{a as y}from"./chunk-W7CLCBTA.js";import"./chunk-77V5XVRF.js";import"./chunk-ALWHUAF7.js";import{a as w}from"./chunk-S3NYSGME.js";import"./chunk-LEJQWG7E.js";import"./chunk-MX4IXJVA.js";import"./chunk-UHRCPRA2.js";import"./chunk-H6ROHLJQ.js";import{a as f}from"./chunk-DJH7MW43.js";import"./chunk-W5RHDDBD.js";import"./chunk-4JAOIN2Q.js";import"./chunk-NRF5E4NM.js";import"./chunk-EERRLM6T.js";import{g as h}from"./chunk-TKSMPJMZ.js";import"./chunk-NMZMDT4C.js";import{a as x}from"./chunk-LGGDA375.js";import"./chunk-YLV5UIKA.js";import"./chunk-RZ3TV2NA.js";import{a as k}from"./chunk-GN5NA7YF.js";import"./chunk-Y4CNOL4E.js";import"./chunk-QCFSLNAO.js";import{a as b}from"./chunk-CDBYAPQM.js";import{a as u}from"./chunk-ISMAARKL.js";import"./chunk-MXS7SZ5M.js";import{b as g}from"./chunk-ZTLAKSAF.js";import{a as r}from"./chunk-A5UFVDS4.js";import"./chunk-W4SU7VMV.js";import"./chunk-LWP4UM2N.js";import"./chunk-TBHB36S6.js";import"./chunk-L35RWJ6D.js";import{a as s}from"./chunk-3XARJZUK.js";import"./chunk-B5WSSBSP.js";import"./chunk-MWD4X6Z5.js";import"./chunk-RC6Y3VA2.js";import"./chunk-ILE2VADS.js";import"./chunk-3IL5APLJ.js";import{a as i}from"./chunk-DOJ57NAO.js";import{b as l}from"./chunk-KZTI7NFS.js";import"./chunk-L2KXS2FW.js";import"./chunk-GWVOQB64.js";import"./chunk-VMJOI624.js";import"./chunk-A2JPUMZD.js";import{S as d,p}from"./chunk-I67LU25W.js";import"./chunk-PH4INCXG.js";function a(e){return x({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:e},dataType:"json"})}var m="disableBreakdownPrompts",t,n=[];function C(e){e.hide()}function P(e,o){e.animate({height:0},500,o)}function E(){let e=$("#composingMessageContainer");e.animate({opacity:0},500,s(P,e,s(C,e)))}function T(e,o){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":o,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}function B(e,o){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(T(e,o))),setTimeout(E,5e3)}function j(e){e.error!==0?B(`Error: ${e.msg}`,"rgb(164, 28, 28)"):w(`${d+p}breakdown&m=1`)}function v(){a(n).then(j)}function M(e){if(e.stopPropagation(),n.length===0){B("Error: No items selected.","rgb(164, 28, 28)");return}v()}function I(e){t&&e.target.id==="breakdown-selected-items"&&M(e)}function N(e){if(!u("selectable-item",e.target))return;let o=e.target.id.replace("composing-item-",""),c=n.indexOf(o);c===-1?n.push(o):n.splice(c,1)}function V(){t=!t,k(m,t)}function A(){f(g,`<table class="fshTblCenter"><tbody>${h(m)}</tbody></table>`)}function H(){i(r("breakdown-selected-items").parentNode,I,!0),i(r("composing-items"),N),i(r(m),V)}function D(){b()||(y("composing"),t=l(m),A(),H())}export{D as default};
//# sourceMappingURL=breakdown-I6JIVT73.js.map