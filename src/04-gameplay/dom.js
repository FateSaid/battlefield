function playerOneBoard(div) {
  const playerOne = document.getElementById("first-player-board");
  playerOne.textContent = div;
}

function playerTwoBoard(div) {
  const playerTwo = document.getElementById("second-player-board");
  playerTwo.textContent = div;
}

function resultOutput(div) {
  const result = document.querySelector(".result");
  result.textContent = div;
}

export { playerOneBoard, playerTwoBoard, resultOutput };
