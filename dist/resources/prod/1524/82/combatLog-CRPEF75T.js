import{a as l}from"./chunk-QYZKEJNJ.js";import"./chunk-6LDE5WBM.js";import"./chunk-QGV7XG72.js";import"./chunk-QPQYH7ZQ.js";import"./chunk-NDSZEOFH.js";import{a as g}from"./chunk-F44TQQMJ.js";import{b as c}from"./chunk-CBMSPOBL.js";import{a as m}from"./chunk-C4VXH3KO.js";import{a as o}from"./chunk-5E32VBFN.js";import"./chunk-CCHDXXIW.js";import"./chunk-LWLVQTKS.js";import"./chunk-WBTHTD34.js";import"./chunk-G34A357Q.js";import{a as s,b as u}from"./chunk-QL5YK4M4.js";import"./chunk-6YD7W4E5.js";import{a as i}from"./chunk-LG3KLILQ.js";import"./chunk-DYBFFO7Q.js";import"./chunk-IEAPP6FH.js";import"./chunk-FEFVGSP2.js";import"./chunk-EJENCRJV.js";import"./chunk-IWCA3B2P.js";import{a as n}from"./chunk-HMPLMOXP.js";import"./chunk-EEF6C5L4.js";import"./chunk-SVYRHE6Z.js";import"./chunk-OIO6LGXZ.js";import"./chunk-KWAUBU52.js";import"./chunk-TISVYXYU.js";import"./chunk-S3EM322F.js";var e=[],r=0;function f(){r.focus(),r.select()}function p(){e=[],r.value="[]",u("fsh_combatLog",e)}function b(){l("Clear Combat Log","Are you sure you want to clear your log?",p)}function L(a,t){t&&(e=t),m(`<h1>Combat Logs</h1><br><div align="center"><textarea class="fshCombatLog" readonly id="combatLog" name="logs">${g(e)}</textarea><br><br><table width="100%"><tr><td colspan="2" align=center><input type="button" class="custombutton" value="Select All" id="copyLog"></td><td colspan="2" align=center><input type="button" class="custombutton" value="Clear" id="clearLog"></td></tr></table></div>`,a),r=o("combatLog"),n(o("copyLog"),f),n(o("clearLog"),b)}async function d(a){if(i())return;let t=await s("fsh_combatLog");L(a||c(),t)}export{d as default};
//# sourceMappingURL=combatLog-CRPEF75T.js.map