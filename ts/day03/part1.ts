export const getCommonLetters = (a: string, b: string) => {
  return [...new Set(a.split("").filter((letter) => b.includes(letter)))];
};

export const getCompartments = (rucksack: string) => {
  const middle = Math.floor(rucksack.length / 2);
  return [rucksack.slice(0, middle), rucksack.slice(middle, rucksack.length)];
};

export const getLetterPriority = (letter: string) => {
  const offset = letter === letter.toUpperCase() ? 38 : 96;
  return letter.charCodeAt(0) - offset;
};

export const solve = (input: string) => {
  return input
    .split("\n")
    .map((rucksack) => {
      const [left, right] = getCompartments(rucksack);
      const commonLetters = getCommonLetters(left, right);
      return commonLetters.reduce(
        (acc, letter) => acc + getLetterPriority(letter),
        0
      );
    })
    .reduce((acc, priority) => acc + priority, 0);
};

// console.log(solve(await Deno.readTextFile("day03/input.txt")));
