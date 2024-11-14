import { setupGame } from "../04-gameplay/gameplay.js";

export function renderBoard() {
  const playerOneDisplay = document.getElementById("oneBoard");
  const playerTwoDisplay = document.getElementById("twoBoard");

  createBoard(playerOneDisplay, "player1");
  createBoard(playerTwoDisplay, "player2");
}

function createBoard(display, player) {
  let play = setupGame();
  let player1 = play.player1.game.getBoard();
  let player2 = play.player2.game.getBoard();
  if (player === "player1") {
    loadBoard(player1);
  } else {
    loadBoard(player2);
  }

  function loadBoard(playerBoard) {
    for (let i = 0; i < playerBoard.length; i++) {
      for (let j = 0; j < playerBoard[i].length; j++) {
        const createDiv = document.createElement("div");
        createDiv.classList.add("cell");
        if (typeof playerBoard[i][j].name === "string") {
          createDiv.textContent = "x";
        }
        display.appendChild(createDiv);
      }
    }
  }
}
