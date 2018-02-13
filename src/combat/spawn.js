
import Warrior from './classes/warrior';
import Ranger from './classes/ranger';

import Monster from './monsters/base';

export function spawnPlayer() {
  let rng = Math.floor(Math.random() * 2);
  if (rng === 0) {
    return new Ranger();
  }
  else {
    return new Warrior();
  }
}

export function spawnMonster() {
  return new Monster();
}
