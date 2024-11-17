export function createBoard() {
  let array = [];
  for (let i = 0; i < 10; i++) {
    array.push([]);
    for (let j = 0; j < 10; j++) {
      array[i].push([]);
    }
  }
  return array;
}
