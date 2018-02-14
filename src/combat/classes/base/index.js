import Character from '../../base_character';
import { addRng } from '../../../util';

export const levelingCurve = [
  1,
  1,
  2,
  3,
  5,
  8,
  13,
  21,
  34,
  55,
  89,
  144,
  233,
  377,
  610,
  987,
  1597,
  2584,
  4181,
  6765,
  10946,
  17711,
  28657,
  46368,
  75025,
  121393,
  196418,
  317811,
  514229,
  832040,
  1346269
]

export default class Player extends Character {
  constructor() {
    super();
    this.type = "Player";
    this.name = "Player";
    this.level = 1;
    this.kills = 0;
    this.exp = 0;
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

  spawn(weaponLevels={}) {
    this.hp = this.data.endurance * 6;
    this.maxhp = this.hp;
    this.setWeapon(weaponLevels[this.class] ? weaponLevels[this.class] : 0)
  }

  addExp(exp) {
    this.exp += exp;

    if (this.exp >= levelingCurve[this.level - 1]) {
      this.exp -= levelingCurve[this.level - 1];
      this.levelUp();
      this.addExp(0);  // To check if we can level up more.
    }
  }

  addKill() {
    this.kills += 1;
  }

  regen() {
    if (this.hp > 0 && this.hp < this.maxhp) {
      this.receiveHealth(Math.floor(this.data.endurance));
    }
  }

  hit() {
    return this.weapon.damage + this.data[this.weapon.stat] + addRng(this.weapon.rngFactor);
  }

  setWeapon(index) {
    this.weapon = this.weaponsTable[index];
  }

  levelUp() {
    const leveling = this.levelingTable;
    this.level += 1;

    let keys = Object.keys(leveling);

    for (let key of keys) {
      this.data[key] += leveling[key];
    }

    if (leveling["speed"]) {
      this.speed += leveling["speed"];
    }

    this.maxhp = Math.floor(this.data.endurance * 6);
  }
}
