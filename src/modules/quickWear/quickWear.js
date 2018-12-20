import {createDiv} from '../common/cElement';
import createQuickWear from './createQuickWear';
import equipItem from '../ajax/equipItem';
import eventHandler from '../common/eventHandler';
import {getElementById} from '../common/getElement';
import getValue from '../system/getValue';
import insertElement from '../common/insertElement';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import jConfirm from '../common/jConfirm';
import jQueryPresent from '../common/jQueryPresent';
import loadInventory from '../app/profile/loadInventory';
import on from '../common/on';
import {pCC} from '../support/layout';
import partial from '../common/partial';
import {sendEvent} from '../support/fshGa';
import setValue from '../system/setValue';
import showAHInvManager from './showAHInvManager';
import {simpleCheckboxHtml} from '../settings/simpleCheckbox';
import toggleForce from '../common/toggleForce';
import useItem from '../ajax/useItem';

var disableQuickWearPrompts;
var content;
var itemList;

function doAction(self, fn, verb) { // jQuery.min
  sendEvent('QuickWear', 'doAction - ' + verb);
  self.textContent = '';
  self.classList.remove('smallLink');
  self.classList.add('fshSpinner', 'fshSpin12');
  fn(self.dataset.itemid).done(function(data) {
    if (data.r !== 0) {return;}
    self.parentNode.innerHTML = '<span class="fastWorn">' + verb + '</span>';
  });
}

function doUseItem(self) {
  doAction(self, useItem, 'Used');
}

function useProfileInventoryItem(self) {
  if (disableQuickWearPrompts) {
    doUseItem(self);
  } else {
    jConfirm('Use/Extract Item',
      'Are you sure you want to use/extract the item?',
      partial(doUseItem, self)
    );
  }
}

function equipProfileInventoryItem(self) {
  doAction(self, equipItem, 'Worn');
}

function processItems(folderId, thisFolder, o) {
  var tr = o.dom;
  if (folderId === '0') {
    tr.classList.remove('fshHide');
  } else {
    var force = folderId !== thisFolder.toString();
    toggleForce(tr, force);
  }
}

function processFolder(folderId, aFolder) {
  var thisFolder = aFolder.id;
  aFolder.items.forEach(partial(processItems, folderId, thisFolder));
}

function hideFolders(self) {
  var folderId = self.dataset.folder;
  itemList.r.forEach(partial(processFolder, folderId));
}

function togglePref() {
  disableQuickWearPrompts = !disableQuickWearPrompts;
  setValue('disableQuickWearPrompts', disableQuickWearPrompts);
}

var events = [
  {
    test: function(self) {
      return self.classList.contains('smallLink') &&
        self.classList.contains('fshEq');
    },
    act: equipProfileInventoryItem
  },
  {
    test: function(self) {
      return self.classList.contains('smallLink') &&
        self.classList.contains('fshUse');
    },
    act: useProfileInventoryItem
  },
  {
    test: function(self) {return self.classList.contains('fshFolder');},
    act: hideFolders
  },
  {
    test: function(self) {return self.id === 'disableQuickWearPrompts';},
    act: togglePref
  }
];

function createInvTabs() {
  return createDiv({
    id: 'invTabs',
    className: 'ui-tabs ui-widget-content ui-corner-all',
    innerHTML: '<input id="qwtab1" type="radio" name="qwtabs" checked>' +
      '<input id="qwtab2" type="radio" name="qwtabs">' +
      '<ul class="ui-tabs-nav ui-helper-reset ' +
        'ui-helper-clearfix ui-widget-header ui-corner-all">' +
      '<li class="ui-state-default ui-corner-top inv-tabs-qw">' +
      '<label for="qwtab1">Quick Wear / Use / Extract<br>Manager</label>' +
      '</li>' +
      '<li class="ui-state-default ui-corner-top inv-tabs-ah">' +
      '<label for="qwtab2">Inventory Manager Counter' +
        '<br>filtered by AH Quick Search</label>' +
      '</li><div id="setPrompt" class="fshFloatRight fshCenter"></div></ul>'
  });
}

function showQuickWear(appInv) {
  itemList = appInv;
  var invTabs = createInvTabs();
  var invTabsQw = createQuickWear(appInv);
  insertElement(invTabs, invTabsQw);
  content.innerHTML = '';
  insertElement(content, invTabs);
  on(invTabs, 'click', eventHandler(events));
  insertElement(invTabs, showAHInvManager(appInv));
  insertHtmlBeforeEnd(getElementById('setPrompt'),
    simpleCheckboxHtml('disableQuickWearPrompts'));
}

function hasJquery(injector) { // jQuery.min
  content = injector || pCC;
  if (!content) {return;}
  insertHtmlBeforeEnd(content, 'Getting item list from backpack...');
  loadInventory().done(showQuickWear);
  disableQuickWearPrompts = getValue('disableQuickWearPrompts');
}

export default function insertQuickWear(injector) {
  if (jQueryPresent()) {hasJquery(injector);}
}