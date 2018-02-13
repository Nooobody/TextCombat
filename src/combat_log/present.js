import React from 'react';

const CombatLog = (combat_log=[]) => {
  console.log(combat_log);
  let log = combat_log.combat_log.slice(0).reverse();
  return (<div className="col-6">
    <h3>Combat Log</h3>
    {log.map((msg, index) => <p key={index}>{msg.msg}</p>)}
  </div>)
}

export default CombatLog;
