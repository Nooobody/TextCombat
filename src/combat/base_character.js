import { addRng } from '../util';

let GUID = 1;
export default class Character {
  constructor() {
    this.name = "Character";
    this.speed = 1;
    this.damage = 1;
    this.status = "Healthy";
    this.maxhp = 1;
    this.hp = 1;
    this.id = GUID;
    this.type = "Character";
    GUID += 1;

    this.init();
  }

  getStatus() {
    if (this.hp === this.maxhp) {
      return "Healthy";
    }
    else if (this.hp > (this.maxhp / 4) * 3) {
      return "Bruised";
    }
    else if (this.hp > this.maxhp / 2) {
      return "Damaged";
    }
    else if (this.hp > this.maxhp / 4) {
      return "Bleeding";
    }
    else if (this.hp > 0) {
      return "Dying";
    }
    else if (this.hp <= 0) {
      return "Dead";
    }
  }

  takeHit(dmg) {
    this.hp -= dmg;
    this.status = this.getStatus();
  }

  receiveHealth(hp) {
    this.hp += hp;
    this.status = this.getStatus();
  }

  hit() {
    return this.damage;
  }

  init() {
  }
}
