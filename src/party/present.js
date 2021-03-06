import React from 'react';
import "./style.css";

import { levelingCurve } from '../combat/classes/base';

const status = {
  2: "success",
  1: "warning",
  0: "danger"
}

const HoverTooltip = ({ply}) => {
  let keys = Object.keys(ply.data);

  return (
    <div className="custom-tooltip">
      <div className="custom-tooltip-inner">
        <h3>{ply.name}</h3>
        XP
        <div className="progress mb-3">
          <div className="progress-bar bg-primary" role="progressbar" style={{width: Math.floor((ply.exp / levelingCurve[ply.level - 1]) * 100)  + "%"}}></div>
        </div>
        <div>Max Health: {ply.maxhp}</div>
        <div>Kills: {ply.kills}</div>
        {keys.map(key => (
          <div key={key}>{key.replace(/\b\w/g, l => l.toUpperCase())}: {ply.data[key]}</div>
        ))}
        <hr/>
        <div>Weapon</div>
        <div>Name: {ply.weapon.name}</div>
        <div>Damage: {ply.weapon.damage + ply.data[ply.weapon.stat] - ply.weapon.rngFactor} - {ply.weapon.damage + ply.data[ply.weapon.stat] + ply.weapon.rngFactor}</div>
        <div>Stat: {ply.weapon.stat}</div>
      </div>
    </div>
  )
}

const _Party = ({players, hovered, hoverPlayer, hoverOut}) => {
  return (<div className="col-12 mb-3">
    <h3>Party</h3>
    <div className="row">
      {
        players.map((ply, index) => (
          <div key={index} style={{cursor: "pointer"}} className="col-6 mb-3" onMouseOver={() => hoverPlayer(ply.id)} onMouseOut={() => hoverOut()}>
            {
              hovered === ply.id ?
              <HoverTooltip ply={ply}></HoverTooltip> :
              null
            }
            <div>Lv{ply.level} {ply.name}</div>
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
