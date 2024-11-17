export function addShip(board, ship, x, y) {
  let [x1, y1] = x;
  let [x2, y2] = y;

  if (x1 !== x2 && y1 !== y2) {
    throw new Error("Horizontal or vertical coordinates only");
  }

  function loopCoordinate(same, diff, pos) {
    let [diff1, diff2] = diff;
    for (let i = diff1; i >= diff2; i--) {
      if (board[same][i] === ship) {
        throw new Error("It already contains ship object");
      }
      if (pos === "horizontal") {
        board[same][i] = ship;
      } else if (pos === "vertical") {
        board[i][same] = ship;
      }
    }
  }
  if (x1 === x2) {
    if (y1 > y2) {
      loopCoordinate(x1, [y1, y2], "horizontal");
    } else {
      loopCoordinate(x1, [y2, y1], "horizontal");
    }
  }
  if (y1 === y2) {
    if (x1 > x2) {
      loopCoordinate(y1, [x1, x2], "vertical");
    } else {
      loopCoordinate(y1, [x2, x1], "vertical");
    }
  }
}
