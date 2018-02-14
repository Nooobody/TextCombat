
import {
  playerIsHit,
  partyIsDead,
  monsterIsHit,
  monsterDead,
  newLog,
  newGold,
  levelUp
} from '../actions';

export default function combatTurn(turn, players, monsters, weapons, dispatch) {

  // First check if it's a player.
  let character = players.find(ply => ply.id === turn);
  let type = "player";

  // If not a player, then it's a monster.
  if (!character) {
    character = monsters.find(mon => mon.id === turn);
    type = "monster";
  }

  // If neither, then it's probably a dead character.
  if (!character || character.hp <= 0) {
    return;
  }

  if (type === "player") {
    // Set the weapon incase it has been upgraded.
    character.setWeapon(weapons[character.class]);

    let alive = monsters.filter(ply => ply.hp > 0);

    if (alive.length > 0) {
      let target = alive[Math.floor(Math.random() * alive.length)];
      let dmg = character.hit();
      dispatch(monsterIsHit(target.id, dmg));
      dispatch(newLog(`${character.name} hits ${target.name} for ${dmg}`, "monsterHit"))

      if (target.hp <= 0) {
        dispatch(levelUp(character.id));
        dispatch(monsterDead());
        dispatch(newGold(target.gold));
        dispatch(newLog(`${target.name} is dead!`, "monsterDead"))
      }
    }
  }
  else {
    let alive = players.filter(ply => ply.hp > 0);

    if (alive.length > 0) {
      let target = alive[Math.floor(Math.random() * alive.length)];
      let dmg = character.hit();
      dispatch(playerIsHit(target.id, dmg));
      dispatch(newLog(`${character.name} hits ${target.name} for ${dmg}`, "playerHit"));

      if (target.hp <= 0) {
        dispatch(newLog(`${target.name} is dead!`, "playerDead"));

        if (players.every(ply => ply.hp <= 0)) {
          dispatch(partyIsDead());
          dispatch(newLog("The party has died!", "partyDead"));
        }
      }
    }
  }
}
//
// function combat(turn, players, monsters) {
//   while (monsters.length > 0 && players.some(ply => ply.hp > 0)) {
//     let turns = combatTurns(speeds, speedList);
//
//     for (let turn of turns) {
//       if (turn.hp > 0) {
//         if (turn instanceof Monster) {
//           let alive = players.filter(ply => ply.hp > 0);
//
//           if (alive.length > 0) {
//             let target = alive[Math.floor(Math.random() * alive.length)];
//             target.reduceHP(turn.hitPlayer());
//
//             let str = `A monster hits ${target.name} for ${turn.hitPlayer()}`
//             let type = "monster";
//
//             if (target.hp <= 0) {
//               str += `\r\n${target.name} is dead!`;
//               if (players.every(ply => ply.hp <= 0)) {
//                 str += `
//                   The monster is victorious!
//                   You won ${timesWon} monsters.
//                   Restart to try again.
//                 `
//                 type = "end";
//               }
//             }
//             log(str, type);
//           }
//         }
//         else {
//           let alive = monsters.filter(mon => mon.hp > 0);
//
//           if (alive.length > 0) {
//             let ind = Math.floor(Math.random() * monsters.length);
//             let monster = monsters[ind];
//             monster.reduceHP(turn.hitMonster());
//
//             let str = `${turn.name} hits a monster for ${turn.hitMonster()}`;
//             if (monster.hp <= 0) {
//               timesWon += 1;
//               str += "\r\nA monster is dead!";
//
//               monsters.splice(ind, 1);
//               if (monsters.length === 0) {
//                 str += "\r\nThe battle is won!";
//               }
//             }
//             log(str, "player");
//           }
//         }
//       }
//     }
//   }
// }
