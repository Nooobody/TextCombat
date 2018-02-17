import React from 'react';
import PropTypes from 'prop-types';
import Warrior from '../combat/classes/warrior';
import Ranger from '../combat/classes/ranger';

const totalCosts= [
  0,
  20,
  60,
  180
]

const Panel = (props) => {
  let baseClass = "mb-3 btn btn-";

  let warriorClass, rangerClass, warriorBuyClass, rangerBuyClass;

  let warriorWeaponLevel = props.weapons.warrior;
  let rangerWeaponLevel = props.weapons.ranger;

  let warriorCost = 10 + totalCosts[warriorWeaponLevel] * 0.5;
  let rangerCost = 10 + totalCosts[rangerWeaponLevel] * 0.5;

  if (props.gold >= warriorCost) {
    warriorBuyClass = baseClass + "success";
  }
  else {
    warriorBuyClass = baseClass + "danger";
  }

  if (props.gold >= rangerCost) {
    rangerBuyClass = baseClass + "success";
  }
  else {
    rangerBuyClass = baseClass + "danger";
  }

  let warriorWeaponCost = Warrior.getWeapon(props.weapons.warrior).costToUpgrade;
  let rangerWeaponCost = Ranger.getWeapon(props.weapons.ranger).costToUpgrade;

  if (!warriorWeaponCost) {
    warriorClass = baseClass + "secondary";
  }
  else if (props.gold >= warriorWeaponCost) {
    warriorClass = baseClass + "success";
  }
  else {
    warriorClass = baseClass + "danger";
  }

  if (!rangerWeaponCost) {
    rangerClass = baseClass + "secondary";
  }
  else if (props.gold >= rangerWeaponCost) {
    rangerClass = baseClass + "success";
  }
  else {
    rangerClass = baseClass + "danger";
  }

  return (
    <div className="col-12 mb-3">
      <h3>Controls</h3>
      <div className={warriorBuyClass} onClick={() => {if (props.gold >= warriorCost) {props.newPlayer("warrior", warriorCost)}}}>New Warrior ({warriorCost} gold)</div>
      <div className={rangerBuyClass} onClick={() => {if (props.gold >= rangerCost) {props.newPlayer("ranger", rangerCost)}}}>New Ranger ({rangerCost} gold)</div>
      {warriorWeaponCost ?
       <div className={warriorClass} onClick={() => {if (props.gold >= warriorWeaponCost) {props.upgradeWeapon("warrior", warriorWeaponCost)}}}>Upgrade Warrior weapon ({warriorWeaponCost} gold)</div> :
       <div className={warriorClass}>Warrior weapon is at max level.</div>}
      {rangerWeaponCost ?
       <div className={rangerClass} onClick={() => {if (props.gold >= rangerWeaponCost) {props.upgradeWeapon("ranger", rangerWeaponCost)}}}>Upgrade Ranger weapon ({rangerWeaponCost} gold)</div> :
       <div className={rangerClass}>Ranger weapon is at max level.</div>}
    </div>
  )
}

Panel.propTypes = {
  gold: PropTypes.number.isRequired,
  newPlayer: PropTypes.func.isRequired,
  upgradeWeapon: PropTypes.func.isRequired
}

export default Panel;
