import React from 'react';

const classes = {
  playerHit: "text-warning",
  playerDead: "text-danger",
  partyDead: "text-danger",
  monsterHit: "text-success",
  monsterDead: "text-success"
}

const CombatLog = (combat_log=[]) => {
  let log = combat_log.combat_log.slice(0).reverse();
  return (<div className="">
    <h3>Combat Log</h3>
    {log.map((msg, index) => <p key={index} className={classes[msg.type]}>{msg.msg}</p>)}
  </div>)
}

export default CombatLog;
