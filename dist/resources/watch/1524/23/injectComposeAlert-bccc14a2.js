import { w as callApp, q as extend, bJ as composingUrl, a5 as insertHtmlAfterBegin, y as getElementById, c as calf, j as jQueryPresent, V as setValue, bK as defNeedToCompose, bL as defLastComposeCheck, a6 as now, G as getValue } from './calfSystem-2b1fed3f.js';

function composing(data) {
  return callApp(extend({ cmd: 'composing' }, data));
}

function composingView() {
  return composing({ subcmd: 'view' });
}

// import { $dataAccess } from './_dataAccess';

function daComposing() {
  // return $dataAccess(composingView, composing);
  return composingView();
}

const composeMsg = `<li class="notification"><a href="${composingUrl}"><span`
  + ' class="notification-icon"></span><p class="notification-content">'
  + 'Composing to do</p></a></li>';

function displayComposeMsg() {
  insertHtmlAfterBegin(getElementById('notifications'), composeMsg);
}

function getTime(pot) {
  return pot.time_remaining;
}

function displayAlert() {
  displayComposeMsg();
  setValue(defNeedToCompose, true);
}

function potsBrewing(potions) {
  const minTimeInSecs = Math.min.apply(null, potions.map(getTime));
  if (minTimeInSecs > 0) {
    setValue(defNeedToCompose, false);
    setValue(defLastComposeCheck, now + minTimeInSecs * 1000);
  } else {
    displayAlert();
  }
}

function parseComposingApp(result) {
  if (result.potions.length !== result.max_potions) {
    displayAlert();
  } else {
    potsBrewing(result.potions);
  }
}

function checkAppResponse(json) {
  if (json.s) { parseComposingApp(json.r); }
}

function checkLastCompose() { // jQuery.min
  const lastComposeCheck = getValue(defLastComposeCheck);
  if (lastComposeCheck && now < lastComposeCheck) { return; }
  daComposing().then(checkAppResponse);
}

function composeAlert() {
  if (getValue(defNeedToCompose)) {
    displayComposeMsg();
  } else {
    checkLastCompose();
  }
}

function injectComposeAlert() {
  if (calf.cmd !== 'composing' && jQueryPresent()) { composeAlert(); }
}

export default injectComposeAlert;
//# sourceMappingURL=injectComposeAlert-bccc14a2.js.map