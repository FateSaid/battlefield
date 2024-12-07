import { GameController } from "../04-gameplay/GameController.js";
import {
  playerOneBoard,
  playerTwoBoard,
  resultOutput,
  clearPlayerBoards,
} from "../04-gameplay/dom.js";

export function ScreenController() {
  const gameplay = GameController("User", "Computer");

  const [player1, player2] = gameplay.getPlayers();

  const playerTurn = (player) => resultOutput(player);

  const updateScreen = () => {
    clearPlayerBoards();

    console.log(player1, player2);

    playerTurn(`${gameplay.getActivePlayer().name}'s turn`);

    checkPlayer(gameplay.getActivePlayer(), player1, player2, gameplay);
  };

  updateScreen();
}

function checkPlayer(activePlayer, player1, player2, gameplay) {
  const opponentBoard = gameplay.getOppBoard();
  if (activePlayer.name === player1) {
    createDivCell(activePlayer, activePlayer.game.getBoard(), playerOneBoard);
    createDivCell(player2, opponentBoard, playerTwoBoard);
  } else if (activePlayer.name === player2) {
    createDivCell(activePlayer, activePlayer.game.getBoard(), playerTwoBoard);
    createDivCell(player1, opponentBoard, playerOneBoard);
  } else {
    throw new Error("Check Player not matching player name");
  }
}

function createDivCell(player, board, boardDom) {
  for (let i = 0; i < board.length; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < board.length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      eventHandler(player, cell, i, j);
      row.appendChild(cell);
    }
    boardDom(row);
  }
}

function eventHandler(player, cell, x, y) {
  cell.addEventListener("click", () => {
    player.game.playRound(x, y);
  });
}
