import React from 'react';
import Warrior from '../combat/classes/warrior';
import Ranger from '../combat/classes/ranger';

const _Stats = (state) => {
  let warriorWeapon = Warrior.getWeapon(state.weapons.warrior);
  let rangerWeapon = Ranger.getWeapon(state.weapons.ranger);
  return (<div className="col-12 mb-3">
    <h4>Statistics</h4>
    <p>Monsters Beaten: {state.monstersBeaten}</p>
    <p className="mb-3">Gold: {state.gold}</p>
    <p>Warrior: </p>
    <p>Weapon: {warriorWeapon.name}</p>
    <p>Damage: {warriorWeapon.damage - warriorWeapon.rngFactor} - {warriorWeapon.damage + warriorWeapon.rngFactor}</p>
    <p>Ranger: </p>
    <p>Weapon: {rangerWeapon.name}</p>
    <p>Damage: {rangerWeapon.damage - rangerWeapon.rngFactor} - {rangerWeapon.damage + rangerWeapon.rngFactor}</p>
  </div>)
}

export default _Stats;
