import React from 'react';

const _Party = (players) => {
  return (<div className="col-12 mb-3">
    <h3>Party</h3>
    {
      players.players.map((ply, index) => <p key={index}>{ply.name} Status: {ply.status}</p>)
    }
  </div>)
}

export default _Party;
