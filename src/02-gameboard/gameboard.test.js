import { Gameboard } from "./gameboard.js";

test("place a ship", () => {
  let game = Gameboard();
  game.placeShip("Patrol Boat", 2, [0, 0], [0, 2]);

  let board = game.getBoard();
  expect(board[0][0].name).toMatch("Patrol Boat");
  expect(board[0][1].name).toMatch("Patrol Boat");
  expect(board[0][2].name).toMatch("Patrol Boat");

  game.placeShip("Battleship", 4, [6, 6], [6, 10]);
  expect(board[6][7].name).toMatch("Battleship");
  expect(board[6][9].name).toMatch("Battleship");
});

describe("check whether attack is a hit or a miss", () => {
  let game = Gameboard();
  let board = game.getBoard();

  it("Using receiveAttack to hit a ship", () => {
    game.placeShip("Patrol Boat", 2, [0, 0], [0, 1]);
    game.receiveAttack([0, 1]);
    expect(board[0][1].timesHit).toBe(1);
  });

  it("Keeping track of missed attacks", () => {
    game.receiveAttack([5, 5]);
    expect(game.missedAttacks).toContainEqual([5, 5]);
  });

  it("Ship is sunk", () => {
    game.placeShip("Submarine", 3, [7, 4], [7, 6]);
    game.receiveAttack([7, 4]);
    game.receiveAttack([7, 5]);
    expect(game.receiveAttack([7, 6])).toBe("Ship is sunk");
  });
});
