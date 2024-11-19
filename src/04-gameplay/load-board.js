export function loadBoard(player1, player2) {
  const player1Board = document.getElementById("oneBoard");
  const player2Board = document.getElementById("twoBoard");
  const resultBoard = document.querySelector(".result");
  playerBoard(player1, player1Board);
  playerBoard(player2, player2Board);
}

function playerBoard(player, domBoard) {
  let board = player.game.getBoard();

  createCell(domBoard, board);
}

function createCell(domBoard, board) {
  for (let i = 0; i < board.length; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < board[i].length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      eventHandler(cell, i, j);
      row.appendChild(cell);
    }
    domBoard.appendChild(row);
  }
}

function eventHandler(cell, i, j) {
  cell.addEventListener("click", () => {
    console.log(i, j);
  });
}
