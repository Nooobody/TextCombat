import Monster from '../base';

export default class Grunt extends Monster {
  constructor() {
    super();
    this.name = "Grunt";
    this.maxhp = (Math.floor(Math.random() * 10) + 1) * 4;
    this.damage = Math.floor(Math.random() * 10) + 8;
    this.speed = (Math.floor(Math.random() * 10) + 1) / 10;
    this.gold = Math.floor(Math.random() * 10) + 5;
    this.exp = 4;
  }
}
