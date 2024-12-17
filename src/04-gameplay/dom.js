function playerOneBoard(div) {
  const playerOne = document.getElementById("first-player-board");
  playerOne.appendChild(div);
}

function playerTwoBoard(div) {
  const playerTwo = document.getElementById("second-player-board");
  playerTwo.appendChild(div);
}

function resultOutput(div) {
  const result = document.querySelector(".result");
  result.textContent = div;
}

export { playerOneBoard, playerTwoBoard, resultOutput };
