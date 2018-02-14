
import combat from './combat';
import spawn from './spawn';
import calculateTurns from './turns';
import upgradeWeapon from './weapon';

const initialState = {
  players: [],
  monsters: [],
  turns: [],
  speedList: [],
  combat_log: [],
  monstersBeaten: 0,
  gold: 0,
  tick: 0,
  hovered: -1,
  weapons: {
    warrior: 0,
    ranger: 0
  }
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
        //monsters: state.monsters.filter(mon => mon.hp > 0),
        monstersBeaten: state.monstersBeaten + 1
      });
    case "GOLD_CHANGED":
      return Object.assign({}, state, {
        gold: state.gold + action.gold
      });
    case "WEAPON_UPGRADED":
      return Object.assign({}, state, {
        players: upgradeWeapon(state.players, action.player, state.weapons),
        weapons: Object.assign({}, state.weapons, {
          [action.player]: state.weapons[action.player] + 1
        })
      });
    case "PLAYER_KILLED":
      return Object.assign({}, state, {
        players: state.players.map(ply => {if (ply.id === action.player) {ply.addKill()} return ply})
      });
    case "PARTY_REGEN":
      return Object.assign({}, state, {
        players: state.players.map(ply => {ply.regen(); return ply})
      })
    case "NEW_MONSTERS":
      return Object.assign({}, state, {
        monsters: spawn(state.monsters, state.tick, action),
        speedList: [],
        players: state.players.filter(ply => ply.hp > 0),
        tick: state.tick + 1,
        turns: []
      });
    case "NEW_PARTY":
      return Object.assign({}, state, {
        players: spawn(state.players, state.tick, action),
        speedList: [],
        gold: 0,
        monstersBeaten: 0,
        tick: 0,
        turns: [],
        weapons: {
          warrior: 0,
          ranger: 0
        }
      });
    case "PLAYER_HOVERED":
      return Object.assign({}, state, {
        hovered: action.ply
      });
    case "HOVER_OUT":
      return Object.assign({}, state, {
        hovered: -1
      });
    case "NEW_PLAYER":
      return Object.assign({}, state, {
        players: spawn(state.players, state.tick, action, state.weapons)
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
