
export const newParty = amount => {
  return {
    type: "NEW_PARTY",
    amount: amount
  };
}

export const newPlayer = type => {
  return {
    type: "NEW_PLAYER",
    player: type
  }
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

export const regen = () => {
  return {
    type: "PARTY_REGEN"
  };
}

export const addKill = (player) => {
  return {
    type: "PLAYER_KILLED",
    player
  };
}

export const addExp = (exp) => {
  return {
    type: "ADD_EXPERIENCE",
    exp
  }
}

export const newGold = (gold) => {
  return {
    type: "GOLD_CHANGED",
    gold: gold
  }
}

export const hoverPlayer = (ply) => {
  return {
    type: "PLAYER_HOVERED",
    ply: ply
  };
}

export const hoverOut = () => {
  return {
    type: "HOVER_OUT"
  };
}

export const upgradeWeapon = (player) => {
  return {
    type: "WEAPON_UPGRADED",
    player
  }
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
