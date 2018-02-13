import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Party from './party';
import Combat from './combat_log';
import Monsters from './monsters';

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

    store.dispatch(newParty(3));
    store.dispatch(newMonsters(1));
    store.dispatch(newLog("A new monster has appeared!"));

    store.dispatch(newTurns());

    this._timer = setInterval(() => {
      let state = store.getState();
      console.log(state);
      
      let turn = state.turns[0];
      store.dispatch(nextTurn());
      combatTurn(turn, state.players, state.monsters, store.dispatch);

      if (state.monsters.length === 0 || state.players.every(ply => ply.hp <= 0)) {
        if (state.monsters.length === 0) {
          store.dispatch(newLog("The party is victorious, for now."));
          store.dispatch(newMonsters(1));
          store.dispatch(newLog("A new monster appears!"));
        }
        else {
          store.dispatch(newParty(3));
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
          <div className="col-6">
            <Combat></Combat>
          </div>
          <div className="col-6">
            <div className="row">
              <Party></Party>
              <Monsters></Monsters>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
