import React, { Component } from 'react';

import Party from './party';
import Combat from './combat_log';
import Monsters from './monsters';
import Stats from './stats';
import Controls from './controls';

import combatTurn from './combat';

import {
  newParty,
  nextTurn,
  newTurns,
  newMonsters,
  newLog
} from './actions';

class App extends Component {
  componentDidMount() {
    let store = this.props.store;

    store.dispatch(newParty(6));
    store.dispatch(newMonsters());
    store.dispatch(newLog("A new monster has appeared!"));

    store.dispatch(newTurns());

    this._timer = setInterval(() => {
      let state = store.getState();
      //console.log(state);

      let turn = state.turns[0];
      store.dispatch(nextTurn());
      combatTurn(turn, state.players, state.monsters, state.weapons, store.dispatch);

      if (state.monsters.every(mon => mon.hp <= 0) || state.players.every(ply => ply.hp <= 0)) {
        if (state.monsters.every(mon => mon.hp <= 0)) {
          store.dispatch(newLog("The party is victorious, for now."));
          store.dispatch(newMonsters());
          store.dispatch(newLog("A new monster appears!"));
        }
        else {
          store.dispatch(newParty(6));
          store.dispatch(newMonsters());
        }
      }
      else if (state.turns.length === 0) {
        store.dispatch(newTurns());
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-4">
            <Combat></Combat>
          </div>
          <div className="col-4">
            <div className="row">
              <Party></Party>
              <Monsters></Monsters>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <Stats></Stats>
              <Controls></Controls>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
