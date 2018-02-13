import Player from '../base';

export default class Warrior extends Player {
  constructor() {
    super();
    this.name = "Warrior";
    this.data.strength = 4;
    this.data.endurance = 6;

    this.weapon = {
      name: "Sword",
      damage: 3,
      rngFactor: 2,
      stat: "strength"
    };
  }
}
