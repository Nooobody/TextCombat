import Character from '../../base_character';
import { addRng } from '../../../util';

export default class Player extends Character {
  init() {
    this.type = "Player";
    this.name = "Player";
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

    this.hp = this.data.endurance * 6;
    this.maxhp = this.hp;
  }

  hit() {
    return this.weapon.damage + this.data[this.weapon.stat] + addRng(this.weapon.rngFactor);
  }
}
