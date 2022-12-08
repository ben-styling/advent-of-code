const isVisible = (forrest: number[][], x: number, y: number) => {
  const tree = forrest[y][x];
  let visibleFromLeft = true;
  for (let i = x - 1; i >= 0; i--) {
    if (forrest[y][i] >= tree) {
      visibleFromLeft = false;
      break;
    }
  }
  if (visibleFromLeft) return true;

  // Here we could check if visibleFromLeft is true and skip the rest
  let visibleFromTop = true;
  for (let i = y - 1; i >= 0; i--) {
    if (forrest[i][x] >= tree) {
      visibleFromTop = false;
      break;
    }
  }
  if (visibleFromTop) return true;

  let visibleFromRight = true;
  for (let i = x + 1; i < forrest[y].length; i++) {
    if (forrest[y][i] >= tree) {
      visibleFromRight = false;
      break;
    }
  }
  if (visibleFromRight) return true;

  let visibleFromBottom = true;
  for (let i = y + 1; i < forrest.length; i++) {
    if (forrest[i][x] >= tree) {
      visibleFromBottom = false;
      break;
    }
  }
  if (visibleFromBottom) return true;

  return false;
};

export const solve = (input: string) => {
  const forrest = input.split("\n").map((row) => row.split("").map(Number));

  let visibleTrees = 0;
  for (let y = 0; y < forrest.length; y++) {
    for (let x = 0; x < forrest[y].length; x++) {
      if (isVisible(forrest, x, y)) {
        visibleTrees++;
      }
    }
  }

  return visibleTrees;
};

console.log(solve(await Deno.readTextFile("day08/input.txt")));
