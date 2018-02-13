import Player from '../base';

export default class Ranger extends Player {
  constructor() {
    super();
    this.name = "Ranger";
    this.data.dexterity = 3;
    this.data.endurance = 2;
    this.speed = 1.2;

    this.weapon = {
      name: "Bow",
      damage: 5,
      rngFactor: 3,
      stat: "dexterity"
    };
  }
}
