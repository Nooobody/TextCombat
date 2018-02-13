import { connect } from 'react-redux';
import Panel from './present';

import { newPlayer, newGold, upgradeWeapon } from '../actions';

const mapStateToProps = state => {
  return {
    gold: state.gold,
    weapons: state.weapons
  };
}

const mapDispatchToProps = dispatch => {
  return {
    newPlayer: (type) => {
      dispatch(newGold(-10));
      dispatch(newPlayer(type));
    },
    upgradeWeapon: (player, cost) => {
      dispatch(newGold(-cost));
      dispatch(upgradeWeapon(player));
    }
  }
}

const Controls = connect(mapStateToProps, mapDispatchToProps)(Panel);

export default Controls;
