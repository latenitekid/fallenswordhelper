import add from '../support/task';
import calf from '../support/calf';
import dragStart from '../common/dragStart';
import * as system from '../support/system';

function retOption(option, ifTrue, ifFalse) {
  if (system.getValue(option)) {
    return ifTrue;
  }
  return ifFalse;
}

function retBool(bool, ifTrue, ifFalse) {
  if (bool) {
    return ifTrue;
  }
  return ifFalse;
}

function isDraggable(draggableQuickLinks) {
  if (draggableQuickLinks) {
    document.getElementById('fshQuickLinks')
      .addEventListener('dragstart', dragStart, false);
  }
}

function haveNode(node, quickLinks) { // Native ?
  var quickLinksTopPx = system.getValue('quickLinksTopPx');
  var quickLinksLeftPx = system.getValue('quickLinksLeftPx');
  var draggableQuickLinks = system.getValue('draggableQuickLinks');
  var draggableQuickLinksClass = retBool(draggableQuickLinks,
    ' fshLink" draggable="true"', '"');
  var html = '<div style="top:' + quickLinksTopPx + 'px; left:' +
    quickLinksLeftPx + 'px; background-image:url(\'' + system.imageServer +
    '/skin/inner_bg.jpg\');" id="fshQuickLinks" class="fshQuickLinks' +
    retOption('keepHelperMenuOnScreen',
      ' fshFixed', '') + draggableQuickLinksClass + '>';
  for (var i = 0; i < quickLinks.length; i += 1) {
    var newWindow = retBool(quickLinks[i].newWindow, ' target="new"', '');
    html += '<li><a href="' + system.escapeHtml(quickLinks[i].url) + '"' +
      newWindow + '>' + quickLinks[i].name + '</a></li>';
  }
  html += '</div>';
  document.body.insertAdjacentHTML('beforeend', html);
  isDraggable(draggableQuickLinks);
}

function injectQuickLinks() { // Native ?
  var node = document.getElementById('statbar-container');
  if (!node) {return;}
  var quickLinks = system.fallback(system.getValueJSON('quickLinks'), []);
  if (quickLinks.length <= 0) {return;}
  haveNode(node, quickLinks);
}

export default function doQuickLinks() {
  if (!calf.huntingMode) {
    add(3, injectQuickLinks);
  }
}
