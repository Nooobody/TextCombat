import Player from '../base';
import { addRng } from '../../../util';

const weapons = [{
  name: "Bow",
  damage: 5,
  rngFactor: 3,
  stat: "dexterity",
  costToUpgrade: 20
}, {
  name: "Curved Bow",
  damage: 12,
  rngFactor: 4,
  stat: "dexterity",
  costToUpgrade: 40
}, {
  name: "Recursive Bow",
  damage: 16,
  rngFactor: 6,
  stat: "dexterity",
  costToUpgrade: 100
}, {
  name: "Penetrator, Reach of Heroes",
  damage: 30,
  rngFactor: 2,
  stat: "dexterity"
}]

let stats = {
  strength: 1,
  dexterity: 3,
  endurance: 2,
  intelligence: 1,
  speed: 1.2
};

export default class Ranger extends Player {
  constructor() {
    super();
    this.class = "ranger";
    this.name = "Ranger";
    this.data.dexterity = 3;
    this.data.endurance = 2;
    this.speed = 1.2;

    this.weapon = weapons[0];
  }

  static getWeapon(index) {
    return weapons[index];
  }

  static getStats() {
    return stats;
  }

  setWeapon(index) {
    this.weapon = weapons[index];
  }
}
