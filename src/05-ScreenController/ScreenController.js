import { GameController } from "../04-gameplay/GameController.js";
import {
  playerOneBoard,
  playerTwoBoard,
  resultOutput,
} from "../04-gameplay/dom.js";

export function ScreenController() {
  const gameplay = GameController("User", "Computer");

  updateScreen(gameplay);
}

function checkPlayer(activePlayer, player1, player2, gameplay) {
  let opponentBoard = gameplay.getOppBoard();
  if (activePlayer.name === player1.name) {
    createDivCell(gameplay, activePlayer.game.getBoard(), playerOneBoard);
    createDivCell(gameplay, opponentBoard.reverse(), playerTwoBoard);
  } else if (activePlayer.name === player2.name) {
    createDivCell(gameplay, activePlayer.game.getBoard(), playerTwoBoard);
    createDivCell(gameplay, opponentBoard.reverse(), playerOneBoard);
  } else {
    throw new Error("Check Player not matching player name");
  }
}

function createDivCell(gameplay, board, boardDom) {
  for (let i = 0; i < board.length; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < board.length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      if (board[i][j].length === 2) {
        cell.classList.add("ship");
      }

      if (board[i][j][1] === "hit" || board[i][j][0] === "hit") {
        cell.classList.add("hitting-cell");
      }
      if (board[i][j][0] === "x") {
        cell.classList.add("missed-attack");
      }
      eventHandler(gameplay, cell, i, j);
      row.appendChild(cell);
    }
    boardDom(row);
  }
}

function eventHandler(gameplay, cell, x, y) {
  cell.addEventListener("click", () => {
    gameplay.playRound([x, y]);
    updateScreen(gameplay);
  });
}

function updateScreen(gameplay) {
  clearBoard();

  const [player1, player2] = gameplay.getPlayers();

  const playerTurn = (player) => resultOutput(player);

  playerTurn(`${gameplay.getActivePlayer().name}'s turn`);

  checkPlayer(gameplay.getActivePlayer(), player1, player2, gameplay);
}

function clearBoard() {
  const playerBoards = document.querySelectorAll(".player-board");
  playerBoards.forEach((board) => {
    board.textContent = "";
  });
}

function checkHit(binary) {
  if (binary === "Hit") {
  }
}
