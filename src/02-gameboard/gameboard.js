import { Ship } from "../01-class-ship/ship";

function Gameboard() {
  let board = createBoard();

  let getBoard = () => board;

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

    if (y1 > y2) {
      for (let i = y1; i > y2; i--) {
        if (board[x1][i] === ship) {
          throw new Error("It already contains ship object");
        }
        board[x1][i] = ship;
      }
    } else {
      for (let i = y2; i > y1; i--) {
        if (board[x1][i] === ship) {
          throw new Error("It already contains ship object");
        }
        board[x1][i] = ship;
      }
    }
  }
  return {
    getBoard,
    placeShip,
  };
}

export { Gameboard };
