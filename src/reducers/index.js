
import combat from './combat';
import spawn from './spawn';
import calculateTurns from './turns';

const initialState = {
  players: [],
  monsters: [],
  turns: [],
  speedList: [],
  combat_log: [],
  monstersBeaten: 0
}

export default function gameApp(state=initialState, action) {
  switch(action.type) {
    case "PLAYER_TAKES_HIT":
      return Object.assign({}, state, {
        players: combat(state.players, action)
      });
    case "MONSTER_TAKES_HIT":
      return Object.assign({}, state, {
        monsters: combat(state.monsters, action)
      });
    case "MONSTER_DEAD":
      return Object.assign({}, state, {
        monsters: state.monsters.filter(mon => mon.hp > 0),
        monstersBeaten: state.monstersBeaten + 1
      });
    case "NEW_MONSTERS":
      return Object.assign({}, state, {
        monsters: spawn(state.monsters, action)
      });
    case "NEW_PARTY":
      return Object.assign({}, state, {
        players: spawn(state.players, action)
      });
    case "NEXT_TURN":
      return Object.assign({}, state, {
        turns: state.turns.slice(1)
      });
    case "NEW_LOG":
      let log = state.combat_log;
      if (log.length > 10) {
        log = log.slice(1);
      }

      return Object.assign({}, state, {
        combat_log: log.concat([action.payload])
      });
    case "NEW_TURNS":
      return calculateTurns(state);
    case "PARTY_IS_DEAD":
    default:
      return state;
  }
}