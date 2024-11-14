import { Player } from "../03-player/player.js";

export function setupGame() {
  let player1 = new Player("User");
  let player2 = new Player("Computer");

  player1.game.placeShip("Carrier", 5, [0, 0], [0, 4]);
  player1.game.placeShip("Battleship", 4, [5, 5], [5, 8]);
  player1.game.placeShip("Destroyer", 3, [4, 3], [4, 5]);
  player1.game.placeShip("Submarine", 3, [8, 7], [8, 9]);
  player1.game.placeShip("Patrol Boat", 2, [2, 4], [2, 5]);

  player2.game.placeShip("Carrier", 5, [5, 0], [9, 0]);
  player2.game.placeShip("Battleship", 4, [0, 4], [0, 7]);
  player2.game.placeShip("Destroyer", 3, [3, 7], [3, 9]);
  player2.game.placeShip("Submarine", 3, [5, 7], [7, 7]);
  player2.game.placeShip("Patrol Boat", 2, [0, 9], [1, 9]);

  return {
    player1,
    player2,
  };
}

let play = setupGame();
console.log("PLAYER1", play.player1.game.getBoard());
console.log("PLAYER2", play.player2.game.getBoard());
