import { connect } from 'react-redux';
import _Party from './present';

import { hoverPlayer, hoverOut } from '../actions';

const mapStateToProps = state => {
  return {
    players: state.players,
    hovered: state.hovered
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hoverPlayer: (ply) => {
      dispatch(hoverPlayer(ply));
    },
    hoverOut: () => {
      dispatch(hoverOut());
    }
  }
}

const Party = connect(mapStateToProps, mapDispatchToProps)(_Party);

export default Party;
