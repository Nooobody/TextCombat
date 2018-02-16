import {spawnPlayer, spawnMonster} from '../combat/spawn'

const monsterAmounts = {
  0: {min: 1, max: 3},
  1: {min: 2, max: 4},
  2: {min: 3, max: 5},
  3: {min: 4, max: 6},
  4: {min: 5, max: 8},
  5: {min: 10, max: 20},
}

export default function spawn(state=[], tick, action, weapons={}) {
  let array = state.slice(0);

  if (action.type === "NEW_MONSTERS") {
    array = [];

    let tierNum = Math.floor(tick / 10);
    if (!monsterAmounts[tierNum]) {
      tierNum = 5;
    }

    let amount = monsterAmounts[tierNum];
    let a = Math.floor(Math.random() * amount.max) + amount.min;

    for (let i = 0; i < a; i++) {
      let monster = spawnMonster(tick);
      monster.spawn();
      array.push(monster);
    }
  }
  else if (action.type === "NEW_PARTY") {
    array = [];

    for (let i = 0; i < action.amount; i++) {
      let ply = spawnPlayer();
      ply.spawn();
      array.push(ply);
    }
  }
  else if (action.type === "NEW_PLAYER") {
    let ply = spawnPlayer(action.player);
    ply.spawn(weapons);
    array.push(ply);
  }

  return array;
}
