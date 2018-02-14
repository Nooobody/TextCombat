
export default function upgradeWeapon(players, upgraded, weapons) {
  return players.map(ply => {
    if (ply.class === upgraded) {
      ply.setWeapon(weapons[upgraded] + 1);
    }
    return ply;
  })
}
