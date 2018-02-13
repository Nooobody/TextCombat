import React from 'react';

const _Monsters = ({monsters}) => {
  return (<div className="col-12">
    <h3>Monsters</h3>
    {
      monsters.map((mon, index) => <p key={index}>{mon.name} Status: {mon.status}</p>)
    }
  </div>)
}

export default _Monsters;
