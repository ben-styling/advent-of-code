type Direction = "U" | "D" | "L" | "R";
type Coords = [number, number];
export const updateTail = (
  head: Coords,
  tail: Coords,
  direction: Direction
): [Coords, Coords] => {
  let [headRow, headCol] = head;
  let [tailRow, tailCol] = tail;

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

  const rowDiff = Math.abs(headRow - tailRow);
  const colDiff = Math.abs(headCol - tailCol);

  if (rowDiff === 2 && colDiff === 1) {
    tailRow = headRow < tailRow ? tailRow - 1 : tailRow + 1;
    tailCol = headCol;
  } else if (colDiff === 2 && rowDiff === 1) {
    tailCol = headCol < tailCol ? tailCol - 1 : tailCol + 1;
    tailRow = headRow;
  } else if (
    (colDiff === 2 && rowDiff === 0) ||
    (rowDiff === 2 && colDiff === 0)
  ) {
    switch (direction) {
      case "U":
        tailRow += 1;
        break;
      case "D":
        tailRow -= 1;
        break;
      case "L":
        tailCol -= 1;
        break;
      case "R":
        tailCol += 1;
        break;
    }
  }

  // Return the updated positions of the head and tail
  return [
    [headRow, headCol],
    [tailRow, tailCol],
  ];
};

export const solve = (input: string) => {
  let head: Coords = [0, 0];
  let tail: Coords = [0, 0];
  const tailVisited = input.split("\n").reduce((acc, instruction) => {
    const [direction, distance] = instruction.split(" ");
    for (let i = 0; i < Number(distance); i++) {
      [head, tail] = updateTail(head, tail, direction as Direction);
      acc.add(`${tail[0]}-${tail[1]}`);
    }
    return acc;
  }, new Set());

  return tailVisited.size;
};

// console.log(solve(await Deno.readTextFile("day09/input.txt")));
