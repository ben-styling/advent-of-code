const createGridFromArray = (arr: string[], width: number, height: number) => {
  const grid = [];
  for (let i = 0; i < height; i++) {
    grid.push(arr.slice(i * width, (i + 1) * width));
  }
  return grid;
};

export const solve = (input: string) => {
  let x = 1;
  let cycle = 0;
  const result: string[] = [];
  const doCycle = (x: number) => {
    const lineCycle = cycle % 40;
    if (x + 1 >= lineCycle && x - 1 <= lineCycle) {
      result.push("#");
    } else {
      result.push(".");
    }
    cycle = cycle + 1;
  };
  input.split("\n").forEach((instruction) => {
    if (instruction === "noop") {
      doCycle(x);
      return;
    }
    doCycle(x);
    doCycle(x);
    const [_, add] = instruction.split(" ");
    x = x + Number(add);
    return;
  });

  const grid = createGridFromArray(result, 40, 6);

  return grid.map((line) => line.join("")).join("\n");
};

console.log(solve(await Deno.readTextFile("day10/input.txt")));
