import Character from '../../base_character';
import { addRng } from '../../../util';

export default class Monster extends Character {
  init() {
    this.type = "Monster";
    this.name = "Monster";
    this.hp = (Math.floor(Math.random() * 10) + 1) * 2;
    this.maxhp = this.hp;
    this.damage = Math.floor(Math.random() * 10) + 4;
    this.speed = (Math.floor(Math.random() * 10) + 1) / 8;
  }

  hit() {
    return this.damage + addRng(2);
  }
}
