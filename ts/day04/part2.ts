export const solve = (input: string) => {
  return input.split("\n");
};

console.log(solve(await Deno.readTextFile("day04/input.txt")));
