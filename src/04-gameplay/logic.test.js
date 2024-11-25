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
    expect(gameplay.getActivePlayer().game.missedAttacks).toContain(shouldHave);
  });
});
