import getElementById from '../../common/getElementById';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import { pointsUrl } from '../../support/constants';
import notGoldUpgradesPage from './notGoldUpgradesPage';

const goldUpgradeMsg = `<li class="notification"><a href="${pointsUrl}&type=1"><span`
+ ' class="notification-icon"></span><p class="notification-content">Up'
+ 'grade stamina with gold</p></a></li>';

export default function displayUpgradeMsg() {
  if (notGoldUpgradesPage()) {
    insertHtmlBeforeEnd(getElementById('notifications'), goldUpgradeMsg);
  }
}
