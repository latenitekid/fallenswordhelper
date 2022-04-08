import getTextTrim from '../../common/getTextTrim';
import isGuildMate from './isGuildMate';
import { isAlly, isEnemy } from './isAllyEnemy';

export default async function relatePlayer(a) {
  let type = '';
  const playerName = getTextTrim(a);
  const [guildMate, ally, enemy] = await Promise.all([
    isGuildMate(playerName),
    isAlly(playerName),
    isEnemy(playerName),
  ]);
  if (guildMate) {
    type = 'guild';
  } else if (ally) {
    type = 'ally';
  } else if (enemy) {
    type = 'enemy';
  }
  return [a, type];
}