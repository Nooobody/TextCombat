import Monster from '../base';

export default class Overlord extends Monster {
  constructor() {
    super();
    this.name = "Overlord";
    this.maxhp = (Math.floor(Math.random() * 10) + 1) * 10;
    this.damage = Math.floor(Math.random() * 10) + 10;
    this.speed = (Math.floor(Math.random() * 10) + 1) / 5;
    this.gold = Math.floor(Math.random() * 15) + 10;
  }
}
