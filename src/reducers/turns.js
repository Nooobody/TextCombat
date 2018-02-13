
import { shuffleArray } from '../util';

const turnThreshold = 5;
function combatTurns(characters, speedList) {
  let charArray = characters.slice(0);
  let speeds = speedList.slice(0);
  if (speedList.length === 0) {
    shuffleArray(charArray);
    speeds = charArray.map(spd => 0);
  }

  if (charArray.length === 0) {
    return {turns: [], speeds: []};
  }

  let turns = [];
  let i = 0;
  while (turns.length < 10) {
    speeds[i] += charArray[i].speed;

    if (speeds[i] > turnThreshold) {
      speeds[i] -= turnThreshold;
      turns.push(charArray[i].id);
    }

    i += 1;
    if (i >= charArray.length) {
      i = 0;
    }
  }

  return {turns, speeds};
}

export default function calculateTurns(state) {
  let characters = [].concat(state.players, state.monsters);
  characters = characters.filter(char => char.hp > 0);
  let turns = combatTurns(characters, state.speedList);

  return Object.assign({},
                       state,
                       {
                         turns: turns.turns,
                         speedList: turns.speeds
                       });
}
