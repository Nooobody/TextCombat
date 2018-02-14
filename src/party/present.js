import React from 'react';

const status = {
  2: "success",
  1: "warning",
  0: "danger"
}

const _Party = ({players}) => {
  return (<div className="col-12 mb-3">
    <h3>Party</h3>
    <div className="row">
      {
        players.map((ply, index) => (
          <div key={index} className="col-6 mb-3">
            <div>{ply.name}</div>
            <div className="progress">
              <div
                className={"progress-bar bg-" + status[Math.floor(((ply.hp / ply.maxhp) * 2))]}
                role="progressbar"
                style={{width: Math.floor((ply.hp / ply.maxhp) * 100) + "%"}}></div>
              </div>
            </div>
          ))
        }
    </div>
  </div>)
}

export default _Party;
