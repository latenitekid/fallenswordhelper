import getElementById from '../../common/getElementById';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import onclick from '../../common/onclick';
import setInnerHtml from '../../dom/setInnerHtml';
import { fshBuffLog } from '../../support/constants';
import { pcc } from '../../support/layout';
import { get, set } from '../../system/idb';
import makePageTemplate from '../lists/makePageTemplate';

function displayBuffLog(buffLog) {
  setInnerHtml(buffLog, getElementById('bufflog'));
}

function clearBuffLog() {
  set(fshBuffLog, '').then(displayBuffLog);
}

export default function injectBuffLog(injector) { // jQuery.min
  if (jQueryNotPresent()) { return; }
  const content = injector || pcc();
  setInnerHtml(makePageTemplate({
    title: 'Buff Log',
    comment: '',
    spanId: 'clearBuffs',
    button: 'Clear',
    divId: 'bufflog',
  }), content);
  onclick(getElementById('clearBuffs'), clearBuffLog);
  get(fshBuffLog).then(displayBuffLog);
}
