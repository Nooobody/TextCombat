import Character from '../../base_character';
import { addRng } from '../../../util';

export default class Monster extends Character {
  constructor() {
    super();
    this.type = "Monster";
    this.name = "Monster";
    this.maxhp = (Math.floor(Math.random() * 10) + 1) * 4;
    this.damage = Math.floor(Math.random() * 10) + 4;
    this.speed = (Math.floor(Math.random() * 10) + 1) / 5;
    this.gold = Math.floor(Math.random() * 10) + 1;
  }

  spawn() {
    this.hp = this.maxhp;
  }

  hit() {
    return this.damage + addRng(2);
  }
}
