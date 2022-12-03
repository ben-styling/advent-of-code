import { getLetterPriority } from "./part1.ts";

export const getCommonLetters = (a: string, b: string, c: string) => {
  return [
    ...new Set(
      a.split("").filter((letter) => b.includes(letter) && c.includes(letter))
    ),
  ];
};

export const solve = (input: string) => {
  return input.split("\n").reduce((acc, rucksack, index, arr) => {
    if (index % 3 === 0) {
      const commonLetters = getCommonLetters(
        rucksack,
        arr[index + 1],
        arr[index + 2]
      );
      const priority = commonLetters.reduce(
        (acc, letter) => acc + getLetterPriority(letter),
        0
      );
      acc = acc + priority;
    }
    return acc;
  }, 0);
};

console.log(solve(await Deno.readTextFile("day03/input.txt")));
