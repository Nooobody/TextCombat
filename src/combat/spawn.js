
import Warrior from './classes/warrior';
import Ranger from './classes/ranger';

import Beast from './monsters/beast';
import Grunt from './monsters/grunt';
import Overlord from './monsters/overlord';

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

const monsters = {
  beast: Beast,
  grunt: Grunt,
  overlord: Overlord
};

const monsterTiers = {
  0: [{chance: 80, monster: "beast"}, {chance: 20, monster: "grunt"}],
  1: [{chance: 40, monster: "grunt"}, {chance: 40, monster: "beast"}, {chance: 20, monster: "overlord"}],
  2: [{chance: 60, monster: "overlord"}, {chance: 30, monster: "grunt"}, {chance: 10, monster: "beast"}]
};

export function spawnMonster(tick) {
  let tierNum = Math.floor(tick / 3);
  if (!monsterTiers[tierNum]) {
    tierNum = 2;
  }
  let tier = monsterTiers[tierNum];
  let pick = Math.floor(Math.random() * 100);

  let total = 0;
  for (let monster of tier) {
    total += monster.chance;
    if (pick < total) {
      return new monsters[monster.monster]();
    }
  }
}
