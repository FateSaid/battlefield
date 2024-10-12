import "./style.css";
import { Player } from "./03-player/player.js";

function setupGame() {
  let player1 = new Player("User");
  let player2 = new Player("Computer");

  player1.game.placeShip("Carrier", 5, [0, 0], [0, 4]);
  player1.game.placeShip("Battleship", 4, [5, 5], [5, 8]);
  player1.game.placeShip("Destroyer", 3, [4, 3], [4, 5]);
  player1.game.placeShip("Submarine", 3, [8, 7], [8, 9]);
}
