export type Direction = "U" | "D" | "L" | "R";
export type Coords = [number, number];

export const moveHead = (head: Coords, direction: Direction): Coords => {
  let [headRow, headCol] = [head[0], head[1]];

  switch (direction) {
    case "U":
      headRow += 1;
      break;
    case "D":
      headRow -= 1;
      break;
    case "L":
      headCol -= 1;
      break;
    case "R":
      headCol += 1;
      break;
  }
  return [headRow, headCol];
};

export const moveTail = (head: Coords, tail: Coords): Coords => {
  const [headRow, headCol] = [head[0], head[1]];
  let [tailRow, tailCol] = [tail[0], tail[1]];

  const rowDiff = Math.abs(headRow - tailRow);
  const colDiff = Math.abs(headCol - tailCol);

  const isOverLapping = headRow === tailRow && headCol === tailCol;
  const isAdjacent = rowDiff === 1 && colDiff === 1;

  if (isOverLapping || isAdjacent) {
    return [tailRow, tailCol];
  }

  if (rowDiff == 2 || colDiff == 2 || (rowDiff > 0 && colDiff > 0)) {
    if (headRow < tailRow) tailRow--;
    if (headRow > tailRow) tailRow++;
    if (headCol < tailCol) tailCol--;
    if (headCol > tailCol) tailCol++;
  }

  return [tailRow, tailCol];
};

export const solve = (input: string) => {
  let head: Coords = [0, 0];
  const tails: Coords[] = new Array(9).fill([0, 0]);

  const tailVisited = input.split("\n").reduce((acc, instruction) => {
    const [direction, distance] = instruction.split(" ");
    for (let i = 0; i < Number(distance); i++) {
      head = moveHead(head, direction as Direction);
      tails[0] = moveTail(head, tails[0]);
      for (let i = 1; i < 9; i++) {
        let _;
        tails[i] = moveTail(tails[i - 1], tails[i]);
      }
      acc.add(`${tails[8][0]}-${tails[8][1]}`);
    }
    return acc;
  }, new Set());

  return tailVisited.size;
};

console.log(solve(await Deno.readTextFile("day09/input.txt")));
