import{a as y}from"./chunk-7HKJGWPC.js";import{a}from"./chunk-LLPK5PYY.js";import{a as p}from"./chunk-WNBTLKBT.js";import{b as f}from"./chunk-DA5WSKUB.js";import{a as m}from"./chunk-2U7PEDGC.js";import{a as i}from"./chunk-SDVU75NC.js";import{a as d}from"./chunk-TN3SJSBS.js";import{a as l}from"./chunk-FQ2MS6MU.js";import{a as g}from"./chunk-UEV7L5JP.js";import"./chunk-PVNYCWKC.js";import{a as u}from"./chunk-F4XKSAVO.js";import"./chunk-NNKWIEAR.js";import"./chunk-2URCAZZ2.js";import"./chunk-4V4QHDJN.js";import{a as c}from"./chunk-E2T4BRJB.js";import{b as n}from"./chunk-HBYLRJZK.js";import"./chunk-HVA3CNPK.js";import{Ha as o}from"./chunk-XMFVZQFS.js";import"./chunk-7R4PXCUB.js";function r(){let t=[];for(let e=0,h=window.localStorage.length;e<h;e++){let s=window.localStorage.key(e);s.startsWith(o)&&t.push(s.replace(o,""))}return t}function S(t,e){m(`<h1>FSH Settings</h1><br><center>The box below is your current settings. Copy it to save your current settings<br>To load saved settings, simply replace the contents of the box with your saved copy and press the button below.<textarea align="center" cols="80" rows="25" style="background-color:white;font-family:Consolas,'Lucida Console','Courier New',monospace;" id="HelperfshSettings" name="fshSettings">${p(e)}</textarea><br><input id="HelperLoadSettings" class="custombutton" type="submit" value="Load Settings!" /></center>`,t)}function b(t,e){g(e,t[e])}function w(){let t=a(i("HelperfshSettings").value);if(l(t)){let e=t;d(e).forEach(c(b,e)),y("Settings loaded successfully!")}}function H(t,e){return t[e]=n(e),t}function x(){if(u())return;let t=r().reduce(H,{});S(f(),t),$("#HelperLoadSettings").on("click",w)}export{x as default};
//# sourceMappingURL=load-Y2WQYKW4.js.map
