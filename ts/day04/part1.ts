export const solve = (input: string) => {
  return input.split("\n").reduce((acc, line) => {
    const [left, right] = line.split(",");
    const [leftMin, leftMax] = left.split("-").map((v) => Number(v));
    const [rightMin, rightMax] = right.split("-").map((v) => Number(v));
    if (
      (leftMin >= rightMin && leftMax <= rightMax) ||
      (rightMin >= leftMin && rightMax <= leftMax)
    ) {
      return acc + 1;
    }
    return acc;
  }, 0);
};

console.log(solve(await Deno.readTextFile("day04/input.txt")));
