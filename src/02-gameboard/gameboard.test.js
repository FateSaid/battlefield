import { Gameboard } from "./gameboard.js";

describe("Placing a Ship", () => {
  let game = Gameboard();
  let board = game.getBoard();
  test("place a ship vertical", () => {
    game.placeShip("Patrol Boat", 2, [0, 0], [0, 2]);

    expect(board[0][0][0].name).toMatch("Patrol Boat");
    expect(board[0][1][0].name).toMatch("Patrol Boat");
    expect(board[0][2][0].name).toMatch("Patrol Boat");

    game.placeShip("Battleship", 4, [6, 6], [6, 10]);
    expect(board[6][7][0].name).toMatch("Battleship");
    expect(board[6][9][0].name).toMatch("Battleship");
  });

  test("Place a ship horizontal", () => {
    game.placeShip("Submarine", 3, [0, 0], [2, 0]);

    expect(board[1][0][0].name).toMatch("Submarine");
    expect(board[2][0][0].name).toMatch("Submarine");
    expect(board[0][0][0].name).toMatch("Submarine");

    game.placeShip("Destroyer", 3, [3, 9], [5, 9]);
    expect(board[3][9][0].name).toMatch("Destroyer");
    expect(board[4][9][0].name).toMatch("Destroyer");
    expect(board[5][9][0].name).toMatch("Destroyer");
  });

  test("Abort if the coordinates are wrong", () => {
    expect(() => {
      game.placeShip("Carrier", 5, [9, 3], [2, 2]);
    }).toThrow("Horizontal or vertical coordinates only");
  });
});

describe("check whether attack is a hit or a miss", () => {
  let game = Gameboard();
  let board = game.getBoard();

  it("Using receiveAttack to hit a ship", () => {
    game.placeShip("Patrol Boat", 2, [0, 0], [0, 1]);
    game.receiveAttack([0, 1]);
    expect(board[0][1][0].timesHit).toBe(1);
  });

  it("Keeping track of missed attacks", () => {
    game.receiveAttack([5, 5]);
    expect(game.missedAttacks).toContainEqual([5, 5]);
  });

  it("Keeping track of hit attacks", () => {
    game.receiveAttack([0, 0]);

    expect(game.hitAttacks).toStrictEqual([
      [0, 1],
      [0, 0],
    ]);
  });

  it("Ship is sunk", () => {
    game.placeShip("Submarine", 3, [7, 4], [7, 6]);
    game.receiveAttack([7, 4]);
    game.receiveAttack([7, 5]);
    expect(game.receiveAttack([7, 6])).toBeTruthy();

    expect(game.receiveAttack([4, 5])).toBeFalsy();
  });
});

describe("Calculate total ships sunk", () => {
  let game = Gameboard();

  it("Check if submarine is sunk", () => {
    game.placeShip("Submarine", 3, [7, 4], [7, 6]);
    game.receiveAttack([7, 4]);
    game.receiveAttack([7, 5]);
    game.receiveAttack([7, 6]);

    expect(game.totalShipSunk()).toBe(1);
  });

  it("Check if Patrol Boat is sunk", () => {
    game.placeShip("Patrol Boat", 2, [0, 0], [0, 1]);
    game.receiveAttack([0, 0]);
    game.receiveAttack([0, 1]);
    expect(game.totalShipSunk()).toBe(2);
  });
});
