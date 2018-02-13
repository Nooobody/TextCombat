import { connect } from 'react-redux';
import _Stats from './present';

const mapStateToProps = state => {
  return state;
}

const Stats = connect(mapStateToProps)(_Stats);

export default Stats;
