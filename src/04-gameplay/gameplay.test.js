import { setupGame } from "../04-gameplay/gameplay";

describe("Setting up a Game", () => {
  let play = setupGame();
  test("Display board", () => {
    expect(play.game).toBe(2);
  });
});
