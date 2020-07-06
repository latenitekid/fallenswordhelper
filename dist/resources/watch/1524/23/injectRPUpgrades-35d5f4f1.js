import { x as jQueryNotPresent, f as insertHtmlBeforeEnd, p as pCC, m as getArrayByTagName, s as partial } from './calfSystem-2b1fed3f.js';
import './playerName-12a90d68.js';
import './idb-549f3966.js';
import './indexAjaxJson-bdb16b7c.js';
import './cmdExport-4dceba5b.js';
import './getProfile-51860894.js';
import { m as myStats } from './myStats-1b40fc54.js';
import { r as reduceBuffArray } from './reduceBuffArray-6eeea593.js';

const packRE = />\s*([ a-zA-Z]+) Level (\d+)/g;

const makeSpan = (bf) => `<br><span class="fshRed fshNoWrap">${bf[1]} ${
  bf[2]} active</span>`;

function checkForBuffs(myBuffs, el) {
  const { tipped } = el.dataset;
  const dupeBuffs = [...tipped.matchAll(packRE)]
    .filter((bf) => myBuffs[bf[1]] === Number(bf[2]));
  if (dupeBuffs.length > 0) {
    insertHtmlBeforeEnd(el.parentNode, dupeBuffs.map(makeSpan).join(''));
  }
}

function postWarnings(myBuffs) {
  const packsRow = pCC.children[0].rows[9];
  if (!packsRow) { return; }
  getArrayByTagName('a', packsRow.cells[0].children[0])
    .forEach(partial(checkForBuffs, myBuffs));
}

function parseProfile(data) {
  if (data._skills.length !== 0) {
    const myBuffs = reduceBuffArray(data._skills);
    postWarnings(myBuffs);
  }
}

function injectRPUpgrades() { // jQuery.min
  if (jQueryNotPresent()) { return; }
  myStats(true).then(parseProfile);
}

export default injectRPUpgrades;
//# sourceMappingURL=injectRPUpgrades-35d5f4f1.js.map