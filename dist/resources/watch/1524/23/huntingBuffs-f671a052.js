import { c as calf } from './calfSystem-2b1fed3f.js';
import { i as isChecked } from './isChecked-8ee9db43.js';
import { h as helpLink } from './simpleCheckbox-992e10fe.js';
import { i as isSelected } from './isSelected-04794fec.js';

function huntBuff() {
  return `Hunting Buffs${helpLink('Hunting Buffs',
    'Customize which buffs are designated as hunting buffs. '
    + 'You must type the full name of each buff, separated by commas. '
    + 'Use the checkbox to enable/disable them.')}:`;
}

function huntBuffCheck() {
  return '<input name="showHuntingBuffs" '
    + `class="fshVMid" type="checkbox" value="on"${
      isChecked(calf.showBuffs)}>`;
}

function huntMode() {
  return `Enabled Hunting Mode${
    helpLink('Enabled Hunting Mode',
      'This will determine which list of buffs gets checked '
      + 'on the world screen.')}:<select name="enabledHuntingMode">`
    + `<option value="1"${
      isSelected(calf.enabledHuntingMode, '1')}>${calf.buffsName}</option>`
    + `<option value="2"${
      isSelected(calf.enabledHuntingMode, '2')}>${calf.buffs2Name}</option>`
    + `<option value="3"${
      isSelected(calf.enabledHuntingMode, '3')}>${calf.buffs3Name}</option>`
    + '</select>';
}

function huntingBuffsHtml() {
  return `${huntBuff() + huntBuffCheck()} ${huntMode()}`;
}

function huntingBuffs() {
  return `<tr><td class="fshRight">${huntBuff()}</td><td colspan="3">${
    huntBuffCheck()} ${huntMode()}</td></tr>`;
}

export { huntingBuffsHtml as a, huntingBuffs as h };
//# sourceMappingURL=huntingBuffs-f671a052.js.map