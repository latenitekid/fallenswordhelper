import{a as C}from"./chunk-K5A2P6T4.js";import{b as n}from"./chunk-GPTG7FXT.js";import"./chunk-43L5JEZD.js";import"./chunk-LRTJ7GLJ.js";import"./chunk-IS2QR6PF.js";import{a as g}from"./chunk-2P7OFGRF.js";import"./chunk-M3X5UDL3.js";import"./chunk-PTM2JRPK.js";import"./chunk-LAJTFXBT.js";import"./chunk-HBQLWHEX.js";import"./chunk-CMZFKNVH.js";import{a as s}from"./chunk-FOKUJP6Z.js";import{a as d}from"./chunk-QAOG3CXO.js";import"./chunk-ZSLT6K5Q.js";import"./chunk-S3GZ4CHY.js";import"./chunk-2CM5F3MT.js";import"./chunk-ONPKPDBM.js";import{a as u}from"./chunk-AHVVGVUS.js";import"./chunk-LNV77PKU.js";import{a as h}from"./chunk-TSPZQ2SO.js";import{a as c}from"./chunk-6DKHWXMD.js";import"./chunk-KMX4DECN.js";import"./chunk-FJUNK3QD.js";import"./chunk-DXPGKDUX.js";import"./chunk-C2QANIAW.js";import"./chunk-TPAH6QRT.js";import"./chunk-REETYBHA.js";import"./chunk-LYLBCS6U.js";import"./chunk-KCWNCERP.js";import"./chunk-J7NALVHR.js";import{b as m}from"./chunk-ONUVRTHQ.js";import"./chunk-XSMZ46A3.js";import"./chunk-H5HEKC7D.js";import"./chunk-ID3GPDDL.js";import{a}from"./chunk-UD6FQZRC.js";import"./chunk-L7RMPRB5.js";import{a as p}from"./chunk-ZZU5L2MN.js";import"./chunk-VYZGJOFZ.js";import{b as r}from"./chunk-55VGZ4O3.js";import"./chunk-ZVMTR3BU.js";import{a as o}from"./chunk-IGVUSJ47.js";import"./chunk-X6WIQDUY.js";import{a as f}from"./chunk-PIBY7P7I.js";import"./chunk-TD2HJ4A4.js";import"./chunk-PMRPPTTZ.js";function T(e){e.value=e.value.replace(/\r\n|\n|\r/g," ").replace(/'/g,"\u2019").replace(/(^|\s)(")/g,"$1\u201C").replace(/"/g,"\u201D").replace("<","\uFF1C")}var y=e=>{e.setAttribute("form","dochat")};function x(e){e.id="dochat",f(e.elements).forEach(y)}function b(e){let t=g(e[5]);t.rows[0].cells[0].remove(),u(t.insertRow(-1).insertCell(-1),e[6]),t.rows[0].cells[0].rowSpan=2}function A(e,t){t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),d(e))}function k(){let e=C({className:"fshChatTextArea",maxLength:512,name:"msg",required:!0});return y(e),e}var w=()=>!m||p("header",m).filter(c("Posted\xA0By")).length!==1||!r("enhanceChatTextEntry");function i(){if(w())return;let e=document.forms[0];x(e),b(e.elements);let t=k();o(t,"keypress",a(A,e.elements[5])),e.elements[4].replaceWith(t),o(e,"submit",a(T,t))}function l(){if(!r("wrapGuildChat"))return;let e=h("#pCC table table table table");!e||e.classList.add("fshGc")}function E(){l(),i();let e=s("chat_type");e&&e==="1"?n("Leader",0,3):n("Chat",0,3)}export{E as default};
//# sourceMappingURL=guildChat-SUQGYK7G.js.map
