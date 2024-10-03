import { Gameboard } from "./gameboard.js";

test("place a ship", () => {
  let game = Gameboard();
  game.placeShip("Patrol Boat", 2, [0, 0], [0, 2]);

  let board = game.getBoard();
  expect(typeof board[0][1]).toBe("object");
});
