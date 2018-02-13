
export const newParty = amount => {
  return {
    type: "NEW_PARTY",
    amount: amount
  };
}

export const newMonsters = amount => {
  return {
    type: "NEW_MONSTERS",
    amount: amount
  }
}

export const playerIsHit = (ply, dmg) => {
  return {
    type: "PLAYER_TAKES_HIT",
    dmg: dmg,
    id: ply
  };
}

export const monsterIsHit = (mon, dmg) => {
  return {
    type: "MONSTER_TAKES_HIT",
    dmg: dmg,
    id: mon
  };
}

export const monsterDead = () => {
  return {
    type: "MONSTER_DEAD"
  };
}

export const partyIsDead = () => {
  return {
    type: "PARTY_IS_DEAD"
  };
}

export const nextTurn = () => {
  return {
    type: "NEXT_TURN"
  };
}

export const newTurns = () => {
  return {
    type: "NEW_TURNS"
  };
}

export const newLog = (msg, type="") => {
  return {
    type: "NEW_LOG",
    payload: {
      msg, type
    }
  }
}
