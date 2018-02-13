import { connect } from 'react-redux';
import _Monsters from './present';

const mapStateToProps = state => {
  return {
    monsters: state.monsters
  }
}

const Monsters = connect(mapStateToProps)(_Monsters);

export default Monsters;
