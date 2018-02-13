import { connect } from 'react-redux';
import CombatLog from './present';

const mapStateToProps = state => {
  return {
    combat_log: state.combat_log
  }
}

const Combat = connect(mapStateToProps)(CombatLog);

export default Combat;
