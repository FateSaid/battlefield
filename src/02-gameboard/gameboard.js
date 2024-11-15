import { Ship } from "../01-class-ship/ship.js";
import { addShip } from "./addship.js";
import { createBoard } from "./createboard.js";
import { attack } from "./receive-attack.js";

function Gameboard() {
  let board = createBoard();

  let getBoard = () => board;

  let missedAttacks = [];

  function placeShip(shipName, length, start, end) {
    let ship = new Ship(shipName, length);
    addShip(board, ship, start, end);
  }

  function receiveAttack(coordinate) {
    return attack(board, missedAttacks, coordinate);
  }

  return {
    getBoard,
    placeShip,
    receiveAttack,
    missedAttacks,
  };
}

//Create Board

//Add Ship

//Receive Attack

export { Gameboard };
