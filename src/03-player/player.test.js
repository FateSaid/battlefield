import { Player } from "./player";

describe("Create two types of players", () => {
  let player1 = new Player("User");
  let player2 = new Player("Computer");
  it("player Objects to not be the same", () => {
    expect(player1).not.toBe(player2);
  });

  it("Players to have their own gameboard", () => {
    player1.game.placeShip("Patrol Ship", 2, [0, 0], [0, 1]);
    player2.game.placeShip("Patrol Ship", 2, [8, 8], [8, 9]);
    expect(player1.game.getBoard()).not.toBe(player2.game.getBoard());
  });
});
