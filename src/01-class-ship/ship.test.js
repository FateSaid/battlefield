import { Ship } from "./ship.js";

test("return Ship object", () => {
  let obj = new Ship("Carrier", 5);
  expect(typeof obj).toBe("object");
});

test("contains property of length, timesHit, and whether sunk or not", () => {
  let obj = new Ship("Carrier", 5);
  expect(obj.length).toBeDefined();
  expect(obj.timesHit).toBeDefined();
  expect(obj.sunk).toBeDefined();
});

test("Contains hit function that increase number of 'hits' in your ship", () => {
  let obj = new Ship("Carrier", 5);
  obj.hit();
  expect(obj.timesHit).toBe(1);
});

test("Contains function that calculate whether a ship is considered sunk", () => {
  let obj = new Ship("Patrol Boat", 2);
  obj.hit();
  obj.hit();
  expect(obj.isSunk()).toBe(true);
});
