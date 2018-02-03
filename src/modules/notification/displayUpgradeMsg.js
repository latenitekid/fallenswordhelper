import {getElementById} from '../common/getElement';

var goldUpgradeMsg =
'<li class="notification"><a href="index.php?cmd=points&type=1"><span' +
' class="notification-icon"></span><p class="notification-content">Up' +
'grade stamina with gold</p></a></li>';

export default function displayUpgradeMsg() {
  if (location.search.indexOf('cmd=points&type=1') === -1) {
    getElementById('notifications').insertAdjacentHTML('afterbegin',
      goldUpgradeMsg);
  }
}
