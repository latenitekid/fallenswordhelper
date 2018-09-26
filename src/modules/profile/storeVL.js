import {getElementById} from '../common/getElement';
import intValue from '../system/intValue';
import setValue from '../system/setValue';

export default function storeVL() {
  // store the VL of the player
  var virtualLevel = parseInt(getElementById('stat-vl').textContent, 10);
  if (intValue(document.getElementsByClassName('stat-level')[0]
    .nextElementSibling.textContent) === virtualLevel) {
    setValue('characterVirtualLevel', ''); // ?
  } else {
    setValue('characterVirtualLevel', virtualLevel);
  }
}