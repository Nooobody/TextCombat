import Player from '../base';
import { addRng } from '../../../util';

const weapons = [{
  name: "Sword",
  damage: 3,
  rngFactor: 2,
  stat: "strength",
  costToUpgrade: 20
}, {
  name: "Two-handed sword",
  damage: 8,
  rngFactor: 6,
  stat: "strength",
  costToUpgrade: 40
}, {
  name: "Zweihander",
  damage: 12,
  rngFactor: 4,
  stat: "strength",
  costToUpgrade: 100
}, {
  name: "Orenmir, Slicer of the Beast",
  damage: 20,
  rngFactor: 2,
  stat: "strength"
}];

let stats = {
  strength: 4,
  dexterity: 1,
  endurance: 6,
  intelligence: 1,
  speed: 1
};

let leveling = {
  strength: 1,
  endurance: 1,
  speed: 0.02
}

export default class Warrior extends Player {
  constructor() {
    super();
    this.class = "warrior";
    this.name = "Warrior";
    this.data.strength = 4;
    this.data.endurance = 6;

    this.weapon = weapons[0];
  }

  static getWeapon(index) {
    return weapons[index];
  }

  static getStats() {
    return stats;
  }

  spawn(weapons={}) {
    this._spawn();
    this.setWeapon(weapons[this.class] ? weapons[this.class] : 0);
  }

  levelUp() {
    this._levelUp(leveling);
  }

  setWeapon(index) {
    this.weapon = weapons[index];
  }
}
