import React from 'react';

const status = {
  2: "success",
  1: "warning",
  0: "danger"
}

const _Monsters = ({monsters}) => {
  return (<div className="col-12">
    <h3>Monsters</h3>
    {
      monsters.map((mon, index) => (
        <div key={index} className="mb-3">
          <div>{mon.name}</div>
          <div className="progress">
            <div
              className={"progress-bar bg-" + status[Math.floor(((mon.hp / mon.maxhp) * 2))]}
              role="progressbar"
              style={{width: Math.floor((mon.hp / mon.maxhp) * 100) + "%"}}></div>
          </div>
        </div>
      ))
    }
  </div>)
}

export default _Monsters;
