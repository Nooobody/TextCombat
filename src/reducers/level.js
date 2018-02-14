
export default function levelUp(players, player) {
  return players.map(ply => {
    if (ply.id === player) {
      ply.levelUp();
    }
    return ply;
  });;
}
