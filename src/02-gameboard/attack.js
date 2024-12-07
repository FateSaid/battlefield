export function attack(addShipSunk, board, missedAttacks, coordinate) {
  let [x, y] = coordinate;
  if (board[x][y].name !== undefined) {
    board[x][y].hit();
    if (board[x][y].isSunk()) {
      addShipSunk();
      return true;
    }
    return "Hit";
  } else {
    missedAttacks.push([x, y]);
    board[x][y] = ["x"];
    return false;
  }
}
