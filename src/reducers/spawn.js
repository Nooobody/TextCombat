import {spawnPlayer, spawnMonster} from '../combat/spawn'

export default function spawn(state=[], action) {
  let array = state.slice(0);

  if (action.type === "NEW_MONSTERS") {
    for (let i = 0; i < action.amount; i++) {
      array.push(spawnMonster());
    }
  }
  else if (action.type === "NEW_PARTY") {
    array = [];
    for (let i = 0; i < action.amount; i++) {
      array.push(spawnPlayer());
    }
  }

  for (let char of array) {
    char.spawn();
  }

  return array;
}
