import { connect } from 'react-redux';
import _Party from './present';

const mapStateToProps = state => {
  return {
    players: state.players
  }
}

const Party = connect(mapStateToProps)(_Party);

export default Party;
