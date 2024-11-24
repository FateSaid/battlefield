export function checkingShips(ships) {
  for (let i = 0; i < ships.length; i++) {
    if (!ships[i].isShipSunk()) {
      return false;
    }
  }
  return true;
}
