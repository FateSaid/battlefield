function playerOneBoard(div) {
  const playerOne = document.getElementById("first-player-board");
  playerOne.appendChild(div);
}

function playerTwoBoard(div) {
  const playerTwo = document.getElementById("second-player-board");
  playerTwo.appendChild(div);
}

function clearPlayerBoards() {
  const playerOne = document.getElementById("first-player-board");
  const playerTwo = document.getElementById("second-player-board");
  playerOne.textContent = "";
  playerTwo.textContent = "";
}

function resultOutput(div) {
  const result = document.querySelector(".result");
  result.textContent = div;
}

export { playerOneBoard, playerTwoBoard, resultOutput, clearPlayerBoards };
