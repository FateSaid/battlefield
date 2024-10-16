import { Ship } from "../01-class-ship/ship.js";

function Gameboard() {
  let board = createBoard();

  let getBoard = () => board;

  let missedAttacks = [];

  function createBoard() {
    let array = [];
    for (let i = 0; i < 10; i++) {
      array.push([]);
      for (let j = 0; j < 10; j++) {
        array[i].push([]);
      }
    }
    return array;
    ``;
  }

  function placeShip(shipName, length, x, y) {
    let [x1, y1] = x;
    let [x2, y2] = y;

    let ship = new Ship(shipName, length);

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

  function receiveAttack(coordinate) {
    let [x, y] = coordinate;
    let board = getBoard();
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
  return {
    getBoard,
    placeShip,
    receiveAttack,
    missedAttacks,
  };
}

export { Gameboard };
