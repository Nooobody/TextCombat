import {spawnPlayer, spawnMonster} from '../combat/spawn'

export default function spawn(state=[], tick, action, weapons={}) {
  let array = state.slice(0);

  if (action.type === "NEW_MONSTERS") {
    array = [];

    let num = tick % 3;

    if (tick >= 9) {
      num = 4;
    }

    let amount = num * 2 + 2;

    for (let i = 0; i < amount; i++) {
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
