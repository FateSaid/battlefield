import { GameController } from "./logic.js";
import { createPlayer } from "./create-player.js";

describe("Checking GameController players", () => {
  let gameplay = GameController("User", "Computer");

  test("Should display Player names", () => {
    expect(gameplay.getActivePlayer().name).toBe("User");
  });

  test("Should switch player", () => {
    gameplay.playRound([0, 0]);
    expect(gameplay.getActivePlayer().name).toBe("Computer");
  });

  test("Player 1 should attempt to hit player2 board", () => {
    gameplay.playRound([0, 0]);
    expect(gameplay.getActivePlayer().game.getBoard()[0][0].timesHit).toBe(1);
  });

  test("Player 1 should store player 2 missed hit", () => {
    gameplay.playRound([9, 9]);

    const shouldHave = [
      [0, 0],
      [9, 9],
    ];
    expect(gameplay.getActivePlayer().game.missedAttacks).toEqual(shouldHave);
  });
});

describe("Calculate Winners", () => {
  let gameplay = GameController("User", "Computer");

  test("Should say winner when all ships sunk", () => {
    /* player 1 
    [0, 0], [0, 4]
    [5, 5], [5, 8]
    [4, 3], [4, 5]
    [8, 7], [8, 9]
    [2, 4], [2, 5]

    */

    gameplay.playRound([0, 0]);
    gameplay.playRound([0, 0]);
    gameplay.playRound([0, 1]);
    gameplay.playRound([0, 1]);
    gameplay.playRound([0, 2]);
    gameplay.playRound([0, 2]);
    gameplay.playRound([0, 3]);
    gameplay.playRound([0, 3]);
    gameplay.playRound([0, 4]);
    gameplay.playRound([0, 4]);
    gameplay.playRound([5, 5]);
    gameplay.playRound([5, 5]);
    gameplay.playRound([5, 6]);
    gameplay.playRound([5, 6]);
    gameplay.playRound([5, 7]);
    gameplay.playRound([5, 7]);
    gameplay.playRound([5, 8]);
    gameplay.playRound([5, 8]);
    gameplay.playRound([4, 3]);
    gameplay.playRound([4, 3]);
    gameplay.playRound([4, 4]);
    gameplay.playRound([4, 4]);
    gameplay.playRound([4, 5]);
    gameplay.playRound([4, 5]);
    gameplay.playRound([8, 7]);
    gameplay.playRound([8, 7]);
    gameplay.playRound([8, 8]);
    gameplay.playRound([8, 8]);
    gameplay.playRound([8, 9]);
    gameplay.playRound([8, 9]);
    gameplay.playRound([2, 4]);
    gameplay.playRound([2, 4]);

    console.log(gameplay.getActivePlayer().game.totalShipSunk());
    gameplay.playRound([2, 5]);

    console.log(gameplay.getActivePlayer().game.totalShipSunk());
    expect(gameplay.playRound([2, 5])).toBe("Computer is Winner");
  });
});
