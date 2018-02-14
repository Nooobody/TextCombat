import React from 'react';

const _Stats = (state) => {
  return (<div className="col-12 mb-3">
    <h4>Statistics</h4>
    <p>Monsters Beaten: {state.monstersBeaten}</p>
    <p className="mb-3">Gold: {state.gold}</p>
  </div>)
}

export default _Stats;
