
export default function combat(state=[], action) {
  return state.map(char => {
    if (char.id === action.id) {
      char.takeHit(action.dmg);
    }
    return char;
  });
}
