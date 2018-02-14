import Character from '../../base_character';
import { addRng } from '../../../util';

export default class Player extends Character {
  constructor() {
    super();
    this.type = "Player";
    this.name = "Player";
    this.level = 1;
    this.data = {
      strength: 1,
      dexterity: 1,
      endurance: 1,
      intelligence: 1,
      speed: 1
    };

    this.weapon = {
      name: "Dagger",
      damage: 1,
      rngFactor: 2,
      stat: "dexterity"
    };
  }

  _spawn() {
    this.hp = this.data.endurance * 6;
    this.maxhp = this.hp;
  }

  regen() {
    if (this.hp > 0 && this.hp < this.maxhp) {
      this.receiveHealth(Math.floor(this.data.endurance * 2));
    }
  }

  hit() {
    return this.weapon.damage + this.data[this.weapon.stat] + addRng(this.weapon.rngFactor);
  }

  _levelUp(levelingTable) {
    this.level += 1;

    let keys = Object.keys(levelingTable);

    for (let key of keys) {
      this.data[key] += levelingTable[key];
    }

    if (levelingTable["speed"]) {
      this.speed += levelingTable["speed"];
    }

    this.maxhp = Math.floor(this.data.endurance * 6);
  }
}
