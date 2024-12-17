export function attack(addShipSunk, board, missedAttacks, coordinate) {
  let [x, y] = coordinate;

  if (board[x][y].length === 2) {
    board[x][y][0].hit();
    board[x][y][1] = "hit";
    if (board[x][y][0].isSunk()) {
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
