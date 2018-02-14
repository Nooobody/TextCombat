
let GUID = 1;
export default class Character {
  constructor() {
    this.name = "Character";
    this.speed = 1;
    this.damage = 1;
    this.maxhp = 1;
    this.hp = 1;
    this.id = GUID;
    this.type = "Character";
    GUID += 1;
  }

  takeHit(dmg) {
    this.hp -= dmg;

    if (this.hp < 0) {
      this.hp = 0;
    }
  }

  receiveHealth(hp) {
    this.hp += hp;
    if (this.hp > this.maxhp) {
      this.hp = this.maxhp;
    }
  }

  hit() {
    return this.damage;
  }
}
