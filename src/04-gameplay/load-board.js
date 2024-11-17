export function loadBoard(player1, player2) {
  const player1Board = document.getElementById("oneBoard");
  const player2Board = document.getElementById("twoBoard");
  playerBoard(player1, player1Board);
  playerBoard(player2, player2Board);
}

function playerBoard(player, domBoard) {
  let board = player.game.getBoard();

  board.forEach((item) => {
    item.forEach((element) => {
      let cell = createDiv(player, element);
      domBoard.appendChild(cell);
    });
  });
}

function createDiv(object) {
  if (typeof object !== "object") return;
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.setAttribute("data-object", JSON.stringify(object));
  return cell;
}
