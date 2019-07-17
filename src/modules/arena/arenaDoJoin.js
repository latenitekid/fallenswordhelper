import {getElementById} from '../common/getElement';
import infoBox from '../common/infoBox';
import {injectArena} from './arena';
import {nowSecs} from '../support/now';
import partial from '../common/partial';
import querySelector from '../common/querySelector';
import {sendEvent} from '../support/fshGa';
import {get, set} from 'idb-keyval';

function addId(id, obj) {
  const newObj = obj || {};
  newObj[id] = nowSecs;
  set('fsh_arenaFull', newObj);
}

function evalMsg() {
  const thisInfo = infoBox();
  if (thisInfo.includes('your guild')) {
    const thisId = querySelector('#pCC input[name="pvp_id"]').value;
    get('fsh_arenaFull').then(partial(addId, thisId));
  } else {
    sendEvent('arena', 'doJoin', thisInfo);
  }
}

export default function arenaDoJoin() {
  const tabs = getElementById('arenaTypeTabs');
  if (tabs) {
    injectArena();
  } else {
    evalMsg();
  }
}
