import{b as n}from"./chunk-VEAMPWHZ.js";import"./chunk-AK6YVUJM.js";import"./chunk-LRAQVXR4.js";import{a as C}from"./chunk-LAVLGHZD.js";import"./chunk-S25ADXRU.js";import{a as g}from"./chunk-GA3UTCE6.js";import"./chunk-ZADLNAUM.js";import"./chunk-TQMWKADP.js";import"./chunk-OCGB7BD5.js";import"./chunk-QZPX5STO.js";import"./chunk-QR6TWWSY.js";import{a as s}from"./chunk-VJHWWYD6.js";import{a as h}from"./chunk-LEJQWG7E.js";import"./chunk-K32J6RS5.js";import"./chunk-N53U3X6N.js";import"./chunk-DJH7MW43.js";import"./chunk-W5RHDDBD.js";import"./chunk-NRF5E4NM.js";import{a as u}from"./chunk-EERRLM6T.js";import{a as d}from"./chunk-AMBECJSA.js";import{a as f}from"./chunk-L5PNSKDT.js";import"./chunk-YIRNRVOQ.js";import"./chunk-VSJWDJAE.js";import"./chunk-N35L4X3I.js";import"./chunk-SRR4B7GE.js";import"./chunk-RZ3TV2NA.js";import"./chunk-GN5NA7YF.js";import"./chunk-Y4CNOL4E.js";import"./chunk-QCFSLNAO.js";import"./chunk-ISMAARKL.js";import{b as m}from"./chunk-ZTLAKSAF.js";import"./chunk-A5UFVDS4.js";import"./chunk-TBHB36S6.js";import"./chunk-L35RWJ6D.js";import{a}from"./chunk-3XARJZUK.js";import"./chunk-ILE2VADS.js";import{a as p}from"./chunk-3IL5APLJ.js";import"./chunk-DOJ57NAO.js";import{b as r}from"./chunk-KZTI7NFS.js";import"./chunk-L2KXS2FW.js";import{a as o}from"./chunk-GWVOQB64.js";import"./chunk-VMJOI624.js";import{a as c}from"./chunk-A2JPUMZD.js";import"./chunk-I67LU25W.js";import"./chunk-PH4INCXG.js";function T(e){e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"\u2019").replace(/(^|\s)(")/g,"$1\u201C").replace(/"/g,"\u201D").replace("<","\uFF1C")}var y=e=>{e.setAttribute("form","dochat")};function x(e){e.id="dochat",c(e.elements).forEach(y)}function A(e){let t=g(e[5]);t.rows[0].cells[0].remove(),u(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}function b(e,t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),h(e))}function k(){let e=C({className:"fshChatTextArea",maxLength:512,name:"msg",required:!0});return y(e),e}var E=()=>!m||p("header",m).filter(f("Posted\xA0By")).length!==1||!r("enhanceChatTextEntry");function l(){if(E())return;let e=document.forms[0];x(e),A(e.elements);let t=k();o(t,"keypress",a(b,e.elements[5])),e.elements[4].replaceWith(t),o(e,"submit",a(T,t))}function i(){if(!r("wrapGuildChat"))return;let e=d("#pCC table table table table");!e||e.classList.add("fshGc")}function S(){i(),l();let e=s("chat_type");e&&e==="1"?n("Leader",0,3):n("Chat",0,3)}export{S as default};
//# sourceMappingURL=guildChat-PVRDTJRB.js.map
