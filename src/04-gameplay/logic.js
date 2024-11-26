import { createPlayer } from "./create-player.js";
import { SetupShip } from "./setup-ship.js";

export function GameController(player1, player2) {
  let players = [createPlayer(player1), createPlayer(player2)];

  let activePlayer = players[0];

  const getActivePlayer = () => activePlayer;

  function switchPlayer() {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  }

  SetupShip(players[0], players[1]);

  function playRound(coordinate) {
    let [x, y] = coordinate;
    let opponent = activePlayer === players[1] ? players[0] : players[1];
    opponent.game.receiveAttack([x, y]);

    //calculate Winner
    if (calculateWinner(opponent)) {
      return `${getActivePlayer().name} is Winner`;
    }

    switchPlayer();
  }

  function calculateWinner(player) {
    return player.game.totalShipSunk() === 5;
  }

  return {
    getActivePlayer,
    playRound,
  };
}
