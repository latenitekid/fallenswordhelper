import{a as h}from"./chunk-VEPZB2M4.js";import{a as g}from"./chunk-Y6WQRSAL.js";import{a as d}from"./chunk-2W33ZJXK.js";import{a as u}from"./chunk-525RTZTH.js";import"./chunk-RQF33MH3.js";import"./chunk-IHALPKBS.js";import{a as i}from"./chunk-LEJQWG7E.js";import{a as r}from"./chunk-ZIDECFJY.js";import"./chunk-W5RHDDBD.js";import"./chunk-NRF5E4NM.js";import"./chunk-EERRLM6T.js";import"./chunk-G3X3JRPI.js";import{a as p}from"./chunk-W5YL3QSG.js";import"./chunk-LGGDA375.js";import"./chunk-YLV5UIKA.js";import"./chunk-RZ3TV2NA.js";import{a as s}from"./chunk-CDBYAPQM.js";import{b as l}from"./chunk-ZTLAKSAF.js";import{a as o}from"./chunk-A5UFVDS4.js";import"./chunk-TBHB36S6.js";import"./chunk-L35RWJ6D.js";import"./chunk-3XARJZUK.js";import"./chunk-B5WSSBSP.js";import"./chunk-MWD4X6Z5.js";import"./chunk-RC6Y3VA2.js";import"./chunk-ILE2VADS.js";import{a}from"./chunk-3IL5APLJ.js";import{a as f}from"./chunk-DOJ57NAO.js";import{b as c}from"./chunk-KZTI7NFS.js";import"./chunk-L2KXS2FW.js";import"./chunk-GWVOQB64.js";import"./chunk-VMJOI624.js";import"./chunk-A2JPUMZD.js";import{b as m}from"./chunk-I67LU25W.js";import"./chunk-PH4INCXG.js";function A(){i(o("refresh"))}function y(e){let t=e.parentNode.parentNode.children[0].children[0];return e.outerHTML=`<img src="${m}ui/misc/spinner.gif" width="14" height="14">`,p({cmd:"auctionhouse",subcmd:"cancel",auction_id:/inv_id=(\d+)/.exec(t.dataset.tipped)[1]})}function C(){let e=a("auctionCancel",o("resultRows"));if(e.length===0)return;let t=e.map(y);g(t,A)}function x(){let e=o("fill");if(!e)return;let t=d({className:"smallLink",textContent:"Cancel All"}),n=e.parentNode.parentNode.nextElementSibling.children[0];n.classList.add("fshCenter"),r(n,"]"),u(n,t),r(n,"["),f(t,C)}function B(){c("autoFillMinBidPrice")&&i(o("auto-fill"))}function N(){s()||!l||(x(),B(),h())}export{N as default};
//# sourceMappingURL=injectAuctionHouse-OFRH23LE.js.map