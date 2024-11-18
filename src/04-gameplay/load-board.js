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
      const cell = createDiv(element, domBoard);
      eventHandler(cell);
    });
  });
}

function createDiv(object, domBoard) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  if (!Array.isArray(object)) {
    cell.setAttribute("data-object", JSON.stringify(object));
  }
  domBoard.appendChild(cell);
  return cell;
}

function eventHandler(cell) {
  cell.addEventListener("click", () => {
    let shipObj = JSON.parse(cell.getAttribute("data-object"));
    if (shipObj !== null) {
      cell.textContent = shipObj.name;
      shipObj.hit();
    } else {
      cell.textContent = "X";
    }
  });
}
