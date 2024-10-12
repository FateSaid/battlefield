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
    if (x1 === x2) {
      if (y1 > y2) {
        for (let i = y1; i >= y2; i--) {
          if (board[x1][i] === ship) {
            throw new Error("It already contains ship object");
          }
          board[x1][i] = ship;
        }
      } else {
        for (let i = y2; i >= y1; i--) {
          if (board[x1][i] === ship) {
            throw new Error("It already contains ship object");
          }
          board[x1][i] = ship;
        }
      }
    }
    if (y1 === y2) {
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
