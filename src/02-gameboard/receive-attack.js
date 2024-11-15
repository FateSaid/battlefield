export function attack(board, missedAttacks, coordinate) {
  let [x, y] = coordinate;
  if (board[x][y].name !== undefined) {
    board[x][y].hit();
    if (board[x][y].isSunk()) {
      return `Ship is sunk`;
    }
  } else {
    missedAttacks.push([x, y]);
    board[x][y] = null;
  }
}
