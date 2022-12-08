const getScenicScore = (forrest: number[][], x: number, y: number) => {
  // We can skip the edges
  if (
    x === 0 ||
    y === 0 ||
    x === forrest[y].length - 1 ||
    y === forrest.length - 1
  ) {
    return 0;
  }

  const tree = forrest[y][x];
  let seenFromLeft = 0;
  for (let i = x - 1; i >= 0; i--) {
    seenFromLeft++;
    if (forrest[y][i] >= tree) {
      break;
    }
  }

  let seenFromTop = 0;
  for (let i = y - 1; i >= 0; i--) {
    seenFromTop++;
    if (forrest[i][x] >= tree) {
      break;
    }
  }

  let seenFromRight = 0;
  for (let i = x + 1; i < forrest[y].length; i++) {
    seenFromRight++;
    if (forrest[y][i] >= tree) {
      break;
    }
  }

  let seenFromBottom = 0;
  for (let i = y + 1; i < forrest.length; i++) {
    seenFromBottom++;
    if (forrest[i][x] >= tree) {
      break;
    }
  }

  return seenFromLeft * seenFromTop * seenFromRight * seenFromBottom;
};

export const solve = (input: string) => {
  const forrest = input.split("\n").map((row) => row.split("").map(Number));
  const scores = new Set<number>();
  for (let y = 0; y < forrest.length; y++) {
    for (let x = 0; x < forrest[y].length; x++) {
      const scenicScore = getScenicScore(forrest, x, y);
      scores.add(scenicScore);
    }
  }

  return Math.max(...scores);
};

// console.log(solve(await Deno.readTextFile("day08/input.txt")));
