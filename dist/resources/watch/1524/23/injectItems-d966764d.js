import { y as getElementById, ac as sendException, o as onclick, s as partial, i as insertElement, W as sendEvent, X as jQueryDialog, c5 as injectAuctionSearch, c6 as injectOnlinePlayers, c7 as injectFindOther, c8 as injectFindBuffs, ab as querySelectorAll, c9 as injectRecipeManager, a2 as notepadBlankUrl, bH as profileUrl, aq as defSubcmd, G as getValue, ca as injectBuffLog, Y as injectNotepadShowLogs, Z as injectMonsterLog, cb as injectQuickLinkManager, c4 as newGuildLogUrl, a9 as cmdUrl } from './calfSystem-2b1fed3f.js';
import './insertElementBefore-f1fdb06b.js';
import { c as currentGuildId } from './currentGuildId-e952c248.js';
import { c as createLi } from './createLi-fdf8ad7a.js';
import { c as createAnchor } from './createAnchor-c7e6d1f2.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-677b583a.js';
import { i as insertElementAfter } from './insertElementAfter-769b79b8.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-2512292b.js';

function insertAfterParent(target, fn, listItem) {
  const tgt = getElementById(target);
  if (tgt instanceof Node) {
    const parent = tgt.parentNode;
    fn(parent, listItem);
  } else { sendException(`#${target} is not a Node`, false); }
}

function openDialog(text, fn) {
  sendEvent('accordion', text);
  jQueryDialog(fn);
}

function insertAdjElement(parent, listItem) {
  insertElementAfter(listItem, parent);
}

function anchorButton(navLvl, text, fn, target) {
  const li = createLi({ className: `nav-level-${navLvl}` });
  const al = createAnchor({
    className: 'nav-link fshPoint',
    textContent: text,
  });
  onclick(al, partial(openDialog, text, fn));
  insertElement(li, al);
  insertAfterParent(target, insertAdjElement, li);
}

function actionButtons(linkConfig) {
  if (linkConfig.auctionSearchLink) {
    anchorButton('2', 'AH Quick Search', injectAuctionSearch,
      'nav-actions-trade-auctionhouse');
  }
  if (linkConfig.onlinePlayersLink) {
    anchorButton('2', 'Online Players', injectOnlinePlayers,
      'nav-actions-interaction-findplayer');
  }
  if (linkConfig.findOtherLink) {
    anchorButton('2', 'Find Other', injectFindOther,
      'nav-actions-interaction-findplayer');
  }
  if (linkConfig.findBuffsLink) {
    anchorButton('2', 'Find Buffs', injectFindBuffs,
      'nav-actions-interaction-findplayer');
  }
}

const calcHeight = (collection) => collection.length * 22;

const byLink = (type) => calcHeight(
  getElementById(`nav-${type}`).nextElementSibling.children,
);

const bySection = (section) => calcHeight(
  querySelectorAll(`#nav-${section} > ul li`),
);

function adjustHeight(theNav, myNav) {
  // first the closed saved variables
  // eslint-disable-next-line no-param-reassign
  myNav.heights = [
    null,
    null,
    byLink('character'),
    bySection('actions'),
    bySection('guild'),
    bySection('toprated'),
    bySection('upgrades'),
    byLink('resources'),
    null,
  ];
  if (Number(myNav.state) !== -1) {
    // and now the open one
    // eslint-disable-next-line no-param-reassign
    theNav.children[myNav.state].children[1].style
      .height = `${myNav.heights[myNav.state]}px`;
  }
}

function recipeManagerLink(linkConfig) {
  if (linkConfig.recipeManagerLink) {
    anchorButton('1', 'Recipe Manager', injectRecipeManager, 'nav-character-log');
  }
}

function inventoryManagerLink(linkConfig) {
  if (linkConfig.inventoryManagerLink) {
    insertAfterParent('nav-character-log', insertHtmlAfterEnd,
      '<li class="nav-level-1"><a class="nav-link" '
      + `id="nav-character-invmanager" href="${
        notepadBlankUrl}invmanagernew">Inventory Manager</a></li>`);
  }
}

function medalGuideLink(linkConfig) {
  if (linkConfig.medalGuideLink) {
    insertAfterParent('nav-character-log', insertHtmlAfterEnd,
      '<li class="nav-level-1"><a class="nav-link" id="nav-character-medalguide"'
        + ` href="${profileUrl}${defSubcmd}medalguide">Medal Guide</a></li>`);
  }
}

function buffLogLink(linkConfig) {
  if (linkConfig.buffLogLink && getValue('keepBuffLog')) {
    anchorButton('1', 'Buff Log', injectBuffLog, 'nav-character-log');
  }
}

function combatLogLink(linkConfig) {
  if (linkConfig.combatLogLink && getValue('keepLogs')) {
    anchorButton('1', 'Combat Logs', injectNotepadShowLogs,
      'nav-character-notepad');
  }
}

function creatureLogLink(linkConfig) {
  if (linkConfig.creatureLogLink && getValue('showMonsterLog')) {
    anchorButton('1', 'Creature Logs', injectMonsterLog,
      'nav-character-notepad');
  }
}

function quickLinksLink(linkConfig) {
  if (linkConfig.quickLinksLink) {
    anchorButton('1', 'Quick Links', injectQuickLinkManager,
      'nav-character-notepad');
  }
}

function characterButtons(linkConfig) {
  recipeManagerLink(linkConfig);
  inventoryManagerLink(linkConfig);
  medalGuideLink(linkConfig);
  buffLogLink(linkConfig);
  combatLogLink(linkConfig);
  creatureLogLink(linkConfig);
  quickLinksLink(linkConfig);
}

function guildInventory(linkConfig) {
  if (linkConfig.guildInventoryLink && currentGuildId()) {
    insertAfterParent('nav-guild-storehouse-inventory', insertHtmlAfterEnd,
      '<li class="nav-level-2"><a class="nav-link" '
      + `id="nav-guild-guildinvmanager" href="${
        notepadBlankUrl}guildinvmgr">Guild Inventory</a></li>`);
  }
}

function newGuildLogLink(linkConfig) {
  if (linkConfig.newGuildLogLink && currentGuildId() && !getValue('useNewGuildLog')) {
    // if not using the new guild log, show it as a separate menu entry
    insertAfterParent('nav-guild-ledger-guildlog', insertHtmlBeforeBegin,
      `<li class="nav-level-2"><a class="nav-link" href="${
        newGuildLogUrl}">New Guild Log</a></li>`);
  }
}

function topRatedLink(linkConfig) {
  if (linkConfig.topRatedLink) {
    insertAfterParent('nav-toprated-players-level', insertHtmlAfterEnd,
      '<li class="nav-level-2"><a class="nav-link" id="nav-toprated-top250" '
    + `href="${cmdUrl}toprated${defSubcmd}xp">Top 250 Players</a></li>`);
  }
}

function injectItems(theNav, myNav, linkConfig) {
  characterButtons(linkConfig);
  actionButtons(linkConfig);
  guildInventory(linkConfig);
  newGuildLogLink(linkConfig);
  topRatedLink(linkConfig);
  adjustHeight(theNav, myNav);
}

export default injectItems;
//# sourceMappingURL=injectItems-d966764d.js.map