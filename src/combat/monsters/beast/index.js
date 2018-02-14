import Monster from '../base';

export default class Beast extends Monster {
  constructor() {
    super();
    this.name = "Beast";
    this.maxhp = (Math.floor(Math.random() * 10) + 1) * 2;
    this.damage = Math.floor(Math.random() * 10) + 6;
    this.speed = (Math.floor(Math.random() * 10) + 1) / 4;
    this.gold = Math.floor(Math.random() * 5) + 1;
    this.exp = 1;
  }
}
