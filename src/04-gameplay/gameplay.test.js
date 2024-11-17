import { setupGame } from "../04-gameplay/gameplay";

describe("Setting up a Game", () => {
  let play = setupGame();
  test("Setup player", () => {
    expect(play.player1.name).toBe("User");
    expect(play.player2.name).toBe("Computer");
  });

  test("Players have different board", () => {
    expect(play.player1.game).not.toBe(play.player2.game);
  });
});
