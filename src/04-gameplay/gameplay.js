import { createPlayer } from "./create-player.js";
import { setupShip } from "./setup-ship.js";
import { loadBoard } from "./load-board.js";

export function setupGame() {
  let player1 = createPlayer("User");
  let player2 = createPlayer("Computer");

  setupShip(player1, player2);
  loadBoard(player1, player2);

  return {
    player1,
    player2,
  };
}
