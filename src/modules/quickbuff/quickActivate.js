import partial from '../common/partial';
import quickbuff from '../_dataAccess/daQuickbuff';
import quickbuffSuccess from '../common/quickbuffSuccess';

function processResult(trigger, json) {
  if (quickbuffSuccess(json)) {
    trigger.className = 'fshLime';
    trigger.innerHTML = 'On';
  }
}

export default function quickActivate(evt) { // jQuery.min
  var trigger = evt.target;
  if (trigger.className !== 'quickbuffActivate') {return;}
  quickbuff([window.self], [trigger.dataset.buffid])
    .then(partial(processResult, trigger));
}