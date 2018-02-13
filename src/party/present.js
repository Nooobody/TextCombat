import React from 'react';

const status = {
  Healthy: "text-success",
  Bruised: "text-success",
  Damaged: "text-warning",
  Bleeding: "text-warning",
  Dying: "text-danger",
  Dead: "text-dark"
}

const _Party = (players) => {
  return (<div className="col-12 mb-3">
    <h3>Party</h3>
    {
      players.players.map((ply, index) => <p key={index}>{ply.name} Status: <span className={status[ply.status]}>{ply.status}</span></p>)
    }
  </div>)
}

export default _Party;
