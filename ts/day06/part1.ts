export const solve = (input: string) => {
  const length = input.length;
  let lastFour = input.slice(0, 4);
  let result = 0;
  for (let i = 4; i < length; i++) {
    if (new Set(lastFour).size === 4) {
      result = i;
      break;
    }
    const letter = input.charAt(i);
    const firstRemoved = lastFour.slice(1);
    lastFour = firstRemoved + letter;
  }

  return result;
};

console.log(solve(await Deno.readTextFile("day06/input.txt")));
