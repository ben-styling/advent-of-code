const MARKER_LENGTH = 14;

export const solve = (input: string) => {
  const length = input.length;
  let lastFour = input.slice(0, MARKER_LENGTH);
  let result = 0;
  for (let i = MARKER_LENGTH; i < length; i++) {
    if (new Set(lastFour).size === MARKER_LENGTH) {
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
