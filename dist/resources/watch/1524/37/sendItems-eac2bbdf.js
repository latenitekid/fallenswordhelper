import { x as callApp, u as indexAjaxData } from './calfSystem-6840a38e.js';
import { h as htmlResult } from './htmlResult-3178c643.js';

function senditems$1(user, invIdAry) {
  return callApp({
    cmd: 'trade',
    subcmd: 'senditems',
    xc: window.ajaxXC,
    target_username: user,
    items: invIdAry,
  });
}

function senditems(user, invIdAry) {
  return indexAjaxData({
    cmd: 'trade',
    subcmd: 'senditems',
    xc: window.ajaxXC,
    target_username: user,
    sendItemList: invIdAry,
  }).then(htmlResult);
}

export { senditems as a, senditems$1 as s };
//# sourceMappingURL=sendItems-eac2bbdf.js.map
