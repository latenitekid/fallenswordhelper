import{a as k,b as q}from"./chunk-X7UAWLUH.js";import{a as _}from"./chunk-32534Y4O.js";import"./chunk-DJSMX3XM.js";import{a as S}from"./chunk-LFQ43LVC.js";import"./chunk-S5KLCJVR.js";import{a as L}from"./chunk-B3YXDQZ3.js";import{a as x}from"./chunk-SESBBU2F.js";import{a as h}from"./chunk-NCMEUMLE.js";import"./chunk-G2RN5QP2.js";import{a as i}from"./chunk-4C3C77WW.js";import{a as A}from"./chunk-M23P7YNW.js";import{b as u}from"./chunk-HZOZPFQX.js";import{a as N}from"./chunk-FH2ZQIVR.js";import{a as o}from"./chunk-ZC2VG7OL.js";import"./chunk-LSTBONAT.js";import{a as E}from"./chunk-Z4DYRJJW.js";import{a as I}from"./chunk-JGAHWCWU.js";import{a as z}from"./chunk-XXK2POF2.js";import{a as m}from"./chunk-M5ZUFNEH.js";import"./chunk-R7EK2RTK.js";import{a as R}from"./chunk-RUAHQRDU.js";import"./chunk-IZJ2YJYN.js";import{a as y}from"./chunk-HUBAYN2T.js";import"./chunk-O2AVUBO7.js";import"./chunk-QRS6GHYV.js";import"./chunk-QVWND6LG.js";import{a as T}from"./chunk-2CZQIOBC.js";import"./chunk-SX3746CW.js";import"./chunk-XA4CEPNM.js";import{a as d}from"./chunk-WGYE6OHG.js";import{a as H}from"./chunk-76PHM2VZ.js";import"./chunk-NVGKRTGQ.js";import"./chunk-LQ2ARGUI.js";import"./chunk-BR5IQZCO.js";import"./chunk-32IJAGRN.js";import"./chunk-BYHOBLWC.js";import"./chunk-A562UK6S.js";import"./chunk-JDVJBZWD.js";import"./chunk-7JP44NWZ.js";import"./chunk-I57GWZIZ.js";import{a as B}from"./chunk-O2SP7GRB.js";import{g}from"./chunk-LROIQ2AY.js";import"./chunk-DDP3QCAT.js";import"./chunk-RBWWPJJC.js";function c(t,e){return H({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:e})}async function p(t,e){let r=await R({cmd:"potionbazaar",subcmd:"buyitem",item_id:t,quantity:e}),a=S(r);return a==="You purchased the item!"?{r:Array(e),s:!0}:{e:{message:a},s:!1}}function l(t,e){return L(c,p,t,e)}var n='<table class="fshBazaar"><tr><td colspan="5">Select an item to quick-buy:</td></tr><tr><td colspan="5">Select how many to quick-buy</td></tr><tr><td colspan="5"><input id="buy_amount" class="fshNumberInput" type="number" min="0" max="99" value="1"></td></tr><tr><td>@0@</td><td>@1@</td><td>@2@</td><td>@3@</td><td>@4@</td></tr><tr><td>@5@</td><td>@6@</td><td>@7@</td><td>@8@</td><td>@9@</td></tr><tr><td colspan="3">Selected item:</td><td id="selectedItem" colspan="2"></td></tr><tr><td colspan="5"><span class="fshBazaarWarning fshHide">Warning:<br>pressing [<span id="fshBuy" class="fshLink">This button</span>] now will buy the <span id="quantity">1</span> item(s) WITHOUT confirmation!</span></td></tr><tr><td colspan="5"><span id="buyResultLabel"></span><ol id="buy_result"></ol></td></tr></table>',V=`<span class="bazaarButton tip-dynamic" style="background-image: url('@src@');" itemid="@itemid@" data-tipped="@tipped@"></span>`,f=0,b=0,w=0,W=0,s=0,v=0,$=0;function F(){return _(b.value)}function j(t,e){i(e,s),f=t.getAttribute("itemid"),W.classList.remove("fshHide");let r=t.cloneNode(!1);r.className="bazaarSelected tip-dynamic";let a=w;N("",a),A(a,r)}function Y(t){let{target:e}=t;if(!x("bazaarButton",e))return;let r=F();!r||j(e,r)}function C(){let t=F();t&&i(t,s)}function D(t){let e=$;q(t,e)||t.s&&k(`You purchased ${t.r.length} item(s)!`,e)}async function G(){if(!f)return;let t=y(s);i(`Buying ${t} items`,v);let e=await l(f,t);D(e)}function M(t,e){let r=t.children[0];if(!r)return;let{tipped:a}=r.dataset,{itemId:Q}=E(g,a);n=n.replace(`@${e}@`,V).replace("@src@",r.getAttribute("src")).replace("@itemid@",Q).replace("@tipped@",a)}function O(){b=o("buy_amount"),w=o("selectedItem"),W=m(".fshBazaarWarning"),s=o("quantity"),v=o("buyResultLabel"),$=o("buy_result")}function P(){O(),d(m(".fshBazaar"),Y),B(b,"input",C),d(o("fshBuy"),G)}function U(){if(T())return;let t=z("img",u())[0];t.className="fshFloatLeft",I("a",u()).forEach(M),n=n.replace(/@\d@/g,""),h(t.parentNode,n),P()}export{U as default};
//# sourceMappingURL=bazaar-BNLC75KT.js.map
