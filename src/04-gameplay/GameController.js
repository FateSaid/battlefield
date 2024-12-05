import { createPlayer } from "./create-player.js";
import { SetupShip } from "./setup-ship.js";
import { createBoard } from "../02-gameboard/createboard.js";

export function GameController(player1, player2) {
  let players = [createPlayer(player1), createPlayer(player2)];

  let activePlayer = players[0];

  const getActivePlayer = () => activePlayer;

  function getPlayerBoards() {
    if (getActivePlayer() === players[0]) {
      return [players[0].game.getBoard(), printOppBoard(players[1])];
    } else {
      return [players[1].game.getBoard(), printOppBoard(players[0])];
    }
  }

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
    getPlayerBoards,
  };
}

function printOppBoard(player) {
  let board = createBoard();
  let missedArray = player.game.missedAttacks;
  for (let i = 0; i < missedArray.length; i++) {
    let [x, y] = missedArray[i];
    board[x][y] = ["x"];
  }
  return board.reverse();
}