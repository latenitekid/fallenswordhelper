import CheckAll from './CheckAll.svelte';
import arrayFrom from '../../../common/arrayFrom';
import doFolderFilter from './doFolderFilter';
import doMoveItems from './doMoveItems';
import getCheckboxesVisible from './getCheckboxesVisible';
import getInv from './getInv';
import getValue from '../../../system/getValue';
import injectStoreItems from './injectStoreItems';
import jQueryPresent from '../../../common/jQueryPresent';

async function doFolders() {
  const inv = await getInv();
  if (!inv.folders) { return; }
  const [form] = document.forms;
  doFolderFilter(inv, form);
  doMoveItems(inv, form);
}

function doCheckAll() {
  getCheckboxesVisible()
    .forEach((ctx) => { ctx.checked = !ctx.disabled && !ctx.checked; });
}

function addCheckAll() {
  const [submitButton] = arrayFrom(document.forms[0].elements).filter((e) => e.type === 'submit');
  const checkAll = new CheckAll({
    anchor: submitButton,
    target: submitButton.parentNode,
  });
  checkAll.$on('checkall', doCheckAll);
}

export default function storeitems() {
  if (jQueryPresent() && getValue('enableFolderFilter')) { doFolders(); }
  addCheckAll();
  injectStoreItems();
}
