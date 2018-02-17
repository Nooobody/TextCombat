
export const BaseTiers = {
  1: {
    damage: 3,
    hp: 10,
    speed: 1.0,
    gold: 5,
    exp: 1
  },
  2: {
    damage: 9,
    hp: 20,
    speed: 1.2,
    gold: 10,
    exp: 4
  },
  3: {
    damage: 18,
    hp: 40,
    speed: 1.4,
    gold: 15,
    exp: 8
  },
  4: {
    damage: 27,
    hp: 80,
    speed: 1.6,
    gold: 20,
    exp: 16
  },
  5: {
    damage: 40,
    hp: 160,
    speed: 1.8,
    gold: 25,
    exp: 32
  }
}

const Tier1 = [{
  name: "Peon",
  damage: 0,
  hp: 6,
  speed: 0,
  gold: 1,
  exp: 1
}, {
  name: "Imp",
  damage: 2,
  hp: 0,
  speed: 0.2,
  gold: 1,
  exp: 1
}, {
  name: "Gremlin",
  damage: 0,
  hp: 4,
  speed: 0,
  gold: 5,
  exp: 1
}, {
  name: "Dryad",
  damage: 4,
  hp: 0,
  speed: 0,
  gold: 1,
  exp: 1
}, {
  name: "Fairy",
  damage: 4,
  hp: -2,
  speed: 0.2,
  gold: 1,
  exp: 1
}];

const Tier2 = [{
  name: "Orc",
  damage: 2,
  hp: 4,
  speed: 0,
  gold: 1,
  exp: 2
}, {
  name: "Skeleton",
  damage: 6,
  hp: -4,
  speed: 0,
  gold: 1,
  exp: 1
}, {
  name: "Goblin",
  damage: 2,
  hp: -2,
  speed: 0,
  gold: 2,
  exp: 1
}, {
  name: "Grunt",
  damage: 0,
  hp: 2,
  speed: 0,
  gold: 1,
  exp: 1
}, {
  name: "Gargoyle",
  damage: 2,
  hp: -4,
  speed: 0.2,
  gold: 5,
  exp: 1
}];

const Tier3 = [{
  name: "Hobgoblin",
  damage: 2,
  hp: 6,
  speed: 0,
  gold: 2,
  exp: 3
}, {
  name: "Werewolf",
  damage: 5,
  hp: 0,
  speed: 1,
  gold: 5,
  exp: 2
}, {
  name: "Fiend",
  damage: 3,
  hp: 0,
  speed: 0.5,
  gold: 2,
  exp: 2
}, {
  name: "Centaur",
  damage: 2,
  hp: 0,
  speed: 0.5,
  gold: 2,
  exp: 2
}, {
  name: "Ogre",
  damage: 3,
  hp: 10,
  speed: 0.2,
  gold: 2,
  exp: 4
}];

const Tier4 = [{
  name: "Giant",
  damage: 6,
  hp: 10,
  speed: 0,
  gold: 5,
  exp: 4
}, {
  name: "Golem",
  damage: 4,
  hp: 12,
  speed: 0,
  gold: 3,
  exp: 6
}, {
  name: "Drake",
  damage: 2,
  hp: 5,
  speed: 1.5,
  gold: 3,
  exp: 2
}, {
  name: "Minotaur",
  damage: 3,
  hp: 3,
  speed: 1,
  gold: 3,
  exp: 2
}, {
  name: "Naga",
  damage: 10,
  hp: 0,
  speed: 1,
  gold: 5,
  exp: 2
}];

const Tier5 = [{
  name: "Overlord",
  damage: 0,
  hp: 20,
  speed: 0,
  gold: 6,
  exp: 4
}, {
  name: "Lich",
  damage: 20,
  hp: 0,
  speed: 0.5,
  gold: 4,
  exp: 4
}, {
  name: "Dragon",
  damage: 10,
  hp: 10,
  speed: 2,
  gold: 10,
  exp: 4
}, {
  name: "Hydra",
  damage: 5,
  hp: 15,
  speed: 1,
  gold: 4,
  exp: 4
}, {
  name: "Beholder",
  damage: 12,
  hp: 9,
  speed: 1,
  gold: 5,
  exp: 4
}];

export const MonsterTiers = {
  1: Tier1,
  2: Tier2,
  3: Tier3,
  4: Tier4,
  5: Tier5
}
