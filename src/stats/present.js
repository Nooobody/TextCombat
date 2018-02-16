import React from 'react';

const _Stats = (state) => {
  return (<div className="col-12 mb-3">
    <h4>Statistics</h4>
    <div>Monsters Beaten: {state.monstersBeaten}</div>
    <div>Gold: {state.gold}</div>
    <div className="mb-3">Wave: {state.tick}</div>
  </div>)
}

export default _Stats;
