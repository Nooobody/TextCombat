import Character from '../base_character';
//import { addRng } from '../../../util';

export default class Monster extends Character {
  constructor(table) {
    super();
    this.type = "Monster";
    this.name = table.name;
    this.maxhp = table.hp;
    this.damage = table.damage;
    this.speed = table.speed;
    this.gold = table.gold;
    this.exp = table.exp;
  }

  spawn() {
    this.hp = this.maxhp;
  }

  hit() {
    return this.damage;
  }
}
