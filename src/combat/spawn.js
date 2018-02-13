
import Player from './classes/base';
import Monster from './monsters/base';

export function spawnPlayer() {
  return new Player();
}

export function spawnMonster() {
  return new Monster();
}
