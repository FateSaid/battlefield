import { Ship } from "../01-class-ship/ship.js";
import { addShip } from "./addship.js";
import { createBoard } from "./createboard.js";
import { attack } from "./attack.js";

function Gameboard() {
  let board = createBoard();

  let getBoard = () => board;

  let missedAttacks = [];

  let hitAttacks = [];

  let shipsSunk = 0;

  const totalShipSunk = () => shipsSunk;

  function addShipSunk() {
    shipsSunk += 1;
  }

  function placeShip(shipName, length, start, end) {
    let ship = new Ship(shipName, length);
    addShip(board, ship, start, end);
  }

  function receiveAttack(coordinate) {
    return attack(addShipSunk, board, missedAttacks, coordinate, hitAttacks);
  }

  return {
    getBoard,
    placeShip,
    receiveAttack,
    missedAttacks,
    totalShipSunk,
    addShipSunk,
    hitAttacks,
  };
}

export { Gameboard };
