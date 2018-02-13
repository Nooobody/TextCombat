import React from 'react';

const status = {
  Healthy: "text-success",
  Bruised: "text-success",
  Damaged: "text-warning",
  Bleeding: "text-warning",
  Dying: "text-danger",
  Dead: "text-dark"
}

const _Monsters = ({monsters}) => {
  return (<div className="col-12">
    <h3>Monsters</h3>
    {
      monsters.map((mon, index) => <p key={index}>{mon.name} Status: <span className={status[mon.status]}>{mon.status}</span></p>)
    }
  </div>)
}

export default _Monsters;
