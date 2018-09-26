import {getElementById} from '../common/getElement';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';

export default function scoutTowerLink() {
  var spoils = getElementById('minibox-spoilsofwar');
  if (spoils) {
    var parent = spoils.children[1].children[0];
    insertHtmlBeforeEnd(parent, '&nbsp;' +
      '<a href="index.php?cmd=guild&subcmd=scouttower" ' +
      'class="tip-static" data-tipped="View Scout Report">' +
      '<img id="fshScoutTower" ' +
      'src="https://cdn.fallensword.com/structures/27.gif"></a>');
  }
}