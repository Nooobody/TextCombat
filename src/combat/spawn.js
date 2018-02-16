
import Warrior from './classes/warrior';
import Ranger from './classes/ranger';

import Monster from './monsters/base_monster';
import {
  BaseTiers,
  MonsterTiers
} from './monsters/stats';

const classes = {
  warrior: Warrior,
  ranger: Ranger
}

export function spawnPlayer(type="") {
  if (type) {
    return new classes[type]();
  }
  else {
    let rng = Math.floor(Math.random() * 2);
    if (rng === 0) {
      return new Ranger();
    }
    else {
      return new Warrior();
    }
  }
}

const monsterTiers = [{
  1: 80,
  2: 20
}, {
  1: 60,
  2: 30,
  3: 10
}, {
  1: 20,
  2: 30,
  3: 40,
  4: 10
}, {
  3: 60,
  4: 30,
  5: 10
}, {
  4: 60,
  5: 40
}, {
  5: 100
}];

function pickFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function variance(val) {
  return Math.floor(Math.random() * val);
}

export function spawnMonster(tick) {
  let tierNum = Math.floor(tick / 10);
  if (!monsterTiers[tierNum]) {
    tierNum = 5;
  }

  let tier = monsterTiers[tierNum];

  let pick = Math.floor(Math.random() * 100);
  let total = 0;
  for (let t in tier) {
    total += tier[t];
    if (pick < total) {
      let base = BaseTiers[t];
      let monster = pickFrom(MonsterTiers[t]);
      let stats = Object.keys(base).reduce((acc, cur) => {
        acc[cur] = base[cur] + variance(monster[cur])
        return acc;
      }, {});
      stats.name = monster.name;
      return new Monster(stats);
    }
  }
}
