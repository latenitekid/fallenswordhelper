import{a as S,b as k}from"./chunk-IYFLXSEC.js";import{a as R}from"./chunk-KBLXHLK2.js";import"./chunk-OAJXP3HQ.js";import{a as L}from"./chunk-BXA52A4F.js";import"./chunk-Z65CKNV5.js";import{a as h}from"./chunk-QNQ62I2N.js";import{a as _}from"./chunk-NRO5M5RP.js";import{a as H}from"./chunk-KJXK3QHT.js";import"./chunk-H5JQREIR.js";import"./chunk-6WQKPU62.js";import{a as i}from"./chunk-LN3GCTG5.js";import{a as I}from"./chunk-B7B6FEDD.js";import{a as d}from"./chunk-MBVAIUY2.js";import"./chunk-UAYXUP6O.js";import{a as B}from"./chunk-OY6KZ2QA.js";import{a as g}from"./chunk-NTPHAESD.js";import"./chunk-MDOIRABL.js";import{a as T}from"./chunk-TNZZCVPK.js";import"./chunk-2BNSEFB2.js";import"./chunk-3SKGW6OG.js";import{a as z}from"./chunk-Z4KFCZCK.js";import"./chunk-KQSUJNSJ.js";import{a as N}from"./chunk-4E2HVB33.js";import{a as A}from"./chunk-5PMW5STL.js";import{b as m}from"./chunk-4JW3DRCH.js";import{a as x}from"./chunk-D3KONKYS.js";import{a as n}from"./chunk-RC2D6Q5A.js";import"./chunk-527CNM4N.js";import"./chunk-6IX4R32K.js";import"./chunk-UG5BYLND.js";import"./chunk-N3S7NELN.js";import"./chunk-BQVMUFJ3.js";import"./chunk-XANH2KUG.js";import"./chunk-JEWY3LVF.js";import{a as u}from"./chunk-E3DVO4DM.js";import"./chunk-QNTIOO4O.js";import"./chunk-KI4LHW6W.js";import{a as y}from"./chunk-47PUSJEZ.js";import"./chunk-MWERZPAU.js";import"./chunk-3GR2FESE.js";import"./chunk-DKU5TE64.js";async function l(t,e){let a=await T({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:e}),r=L(a);return r==="You purchased the item!"?{r:Array(e),s:!0}:{e:{message:r},s:!1}}function c(t,e){return H({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:e})}function p(t,e){return _(c,l,t,e)}var o='<table class="fshBazaar"><tr><td colspan="5">Select an item to quick-buy:</td></tr><tr><td colspan="5">Select how many to quick-buy</td></tr><tr><td colspan="5"><input id="buy_amount" class="fshNumberInput" type="number" min="0" max="99" value="1"></td></tr><tr><td>@0@</td><td>@1@</td><td>@2@</td><td>@3@</td><td>@4@</td></tr><tr><td>@5@</td><td>@6@</td><td>@7@</td><td>@8@</td><td>@9@</td></tr><tr><td colspan="3">Selected item:</td><td id="selectedItem" colspan="2"></td></tr><tr><td colspan="5"><span class="fshBazaarWarning fshHide">Warning:<br>pressing [<span id="fshBuy" class="fshLink">This button</span>] now will buy the <span id="quantity">1</span> item(s) WITHOUT confirmation!</span></td></tr><tr><td colspan="5"><span id="buyResultLabel"></span><ol id="buy_result"></ol></td></tr></table>',$=`<span class="bazaarButton tip-dynamic" style="background-image: url('@src@');" itemid="@itemid@" data-tipped="@tipped@"></span>`,f,b,q,w,s,E,W;function v(){return R(b.value)}function C(t,e){i(e,s),f=t.getAttribute("itemid"),w.classList.remove("fshHide");let a=t.cloneNode(!1);a.className="bazaarSelected tip-dynamic";let r=q;x("",r),I(r,a)}function F(t){let{target:e}=t;if(!A("bazaarButton",e))return;let a=v();!a||C(e,a)}function Q(){let t=v();t&&i(t,s)}function V(t){let e=W;k(t,e)||t.s&&S(`You purchased ${t.r.length} item(s)!`,e)}async function j(){if(!f)return;let t=z(s);i(`Buying ${t} items`,E);let e=await p(f,t);V(e)}function Y(t,e){let a=t.children[0],{tipped:r}=a.dataset;o=o.replace(`@${e}@`,$).replace("@src@",a.getAttribute("src")).replace("@itemid@",r.match(/\?item_id=(\d+)/)[1]).replace("@tipped@",r)}function D(){b=n("buy_amount"),q=n("selectedItem"),w=d(".fshBazaarWarning"),s=n("quantity"),E=n("buyResultLabel"),W=n("buy_result")}function M(){D(),u(d(".fshBazaar"),F),y(b,"input",Q),u(n("fshBuy"),j)}function O(){if(N())return;let t=g("img",m)[0];t.className="fshFloatLeft",B("a",m).forEach(Y),o=o.replace(/@\d@/g,""),h(t.parentNode,o),M()}export{O as default};
//# sourceMappingURL=bazaar-BFTKBWHA.js.map