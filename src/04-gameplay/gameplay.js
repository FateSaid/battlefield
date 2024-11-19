import { createPlayer } from "./create-player.js";
import { SetupShip } from "./setup-ship.js";
import { loadBoard } from "./load-board.js";

export function SetupGame() {
  let player1 = createPlayer("User");
  let player2 = createPlayer("Computer");

  const players = [player1, player2];

  let activePlayer = players[0];

  const switchPlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  SetupShip(player1, player2);
  loadBoard(player1, player2);

  return {
    player1,
    player2,
    switchPlayer,
    activePlayer,
  };
}

function startGame() {
  let gamePlay = SetupGame();

  gamePlay();
}
